"use client"

import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { ChevronLeft } from 'lucide-react'
import React from 'react'
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import LocationOption from '@/app/_utils/LocationOption'
import Image from 'next/image'
import Link from 'next/link'
import ThemeOptions from '@/app/_utils/ThemeOptions'
import { doc, getFirestore, setDoc } from 'firebase/firestore'
import { app } from '@/config/FirebaseConfig'
import { useKindeBrowserClient } from '@kinde-oss/kinde-auth-nextjs'
import { toast } from 'sonner'
import { useRouter } from 'next/navigation'
import { useForm } from 'react-hook-form'
import { z } from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'

// Define the zod schema
const meetingFormSchema = z.object({
    eventName: z.string().min(1, "Event Name is required"),
    duration: z.number().min(1, "Duration is required"),
    locationType: z.string().min(1, "Location Type is required"),
    locationUrl: z.string().url("Location URL must be a valid URL"),
    themeColor: z.string().optional(),
});

function MeetingForm({ setFormValue }) {
    const { user } = useKindeBrowserClient();
    const db = getFirestore(app);
    const router = useRouter();

    const { register, handleSubmit, watch, setValue, formState: { errors } } = useForm({
        resolver: zodResolver(meetingFormSchema),
        defaultValues: {
            duration: 30,
            themeColor: '',
        },
    });

    watch((formValues) => {
        setFormValue(formValues);
    });

    const onSubmit = async (data) => {
        const id = Date.now().toString();
        await setDoc(doc(db, 'MeetingEvent', id), {
            id: id,
            ...data,
            businessId: doc(db, 'Business', user?.email),
            createdBy: user?.email,
        });
        toast('New Meeting Event Created!');
        router.push('/dashboard/meeting-type');
    };

    return (
        <div className='p-8 bg-blue-100 h-full'>
            <Link href={'/dashboard'}>
                <h2 className='flex gap-2'>
                    <ChevronLeft /> Cancel
                </h2>
            </Link>
            {/* <div className='mt-4'>
                <h2 className='font-bold text-2xl my-4'>Start a New Meeting</h2>
                <hr />
            </div> */}
            <form onSubmit={handleSubmit(onSubmit)} className='flex flex-col gap-3 my-4'>
                <h2 className='font-bold'>Meeting Name *</h2>
                <Input
                    placeholder="Name of your meeting event"
                    {...register("eventName")}
                    className="bg-white"
                />
                {errors.eventName && <p className="text-red-500">{errors.eventName.message}</p>}
                <div className='flex gap-2 items-center'>
                    <h2 className='font-bold'>Duration *</h2>
                    <DropdownMenu>
                        <DropdownMenuTrigger asChild>
                            <Button variant="outline" className="max-w-80">{watch("duration")} Min</Button>
                        </DropdownMenuTrigger>
                        <DropdownMenuContent>
                            {[15, 30, 45, 60].map((duration) => (
                                <DropdownMenuItem
                                    key={duration}
                                    onClick={() => setValue("duration", duration)}
                                >
                                    {duration} Min
                                </DropdownMenuItem>
                            ))}
                        </DropdownMenuContent>
                    </DropdownMenu>
                </div>

                {errors.duration && <p className="text-red-500">{errors.duration.message}</p>}

                <h2 className='font-bold'>Platform
                    *</h2>
                <div className='grid grid-cols-4 gap-3'>
                    {LocationOption.map((option, index) => (
                        <div
                            key={index}
                            className={`border flex flex-col justify-center items-center 
                                p-3 rounded-lg cursor-pointer
                                hover:bg-blue-100 hover:border-primary
                                ${watch("locationType") === option.name && 'bg-blue-100 border-primary'}`}
                            onClick={() => setValue("locationType", option.name)}
                        >
                            <Image src={option.icon} width={30} height={30} alt={option.name} />
                            <h2>{option.name}</h2>
                        </div>
                    ))}
                </div>
                {errors.locationType && <p className="text-red-500">{errors.locationType.message}</p>}

                {watch("locationType") && (
                    <>
                        <h2 className='font-bold'>Add {watch("locationType")} Url *</h2>
                        <Input
                            placeholder='Add Url'
                            {...register("locationUrl")}
                        />
                        {errors.locationUrl && <p className="text-red-500">{errors.locationUrl.message}</p>}
                    </>
                )}

                <h2 className='font-bold'>Select Theme Color</h2>
                <div className='flex justify-between'>
                    {ThemeOptions.map((color, index) => (
                        <div
                            key={index}
                            className={`h-7 w-7 rounded-sm
                            ${watch("themeColor") === color && ' border-4 border-black'}`}
                            style={{ backgroundColor: color }}
                            onClick={() => setValue("themeColor", color)}
                        />
                    ))}
                </div>

                <Button
                    type="submit"
                    className="w-full mt-4 text-white"
                    disabled={(!watch("eventName") || !watch("duration") || !watch("locationType") || !watch("locationUrl"))}
                >
                    Create
                </Button>
            </form>
        </div>
    )
}

export default MeetingForm;
