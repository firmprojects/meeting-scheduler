'use client'

import MeetingForm from "@/app/(routes)/create-meeting/_components/MeetingForm";
import PreviewMeeting from "@/app/(routes)/create-meeting/_components/PreviewMeeting";
import { Button } from '@/components/ui/button';
import { Briefcase, Calendar, Clock, Plus, Settings } from 'lucide-react'

import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@/components/ui/dialog"
import { useState } from "react";


const MeetingDialog = () => {
    const [formValue, setFormValue] = useState();

    return (
        <Dialog >
            <DialogTrigger>
                <div
                    className="flex bg-primary hover:bg-blue-200 gap-2 px-5 py-3 mt-7 rounded-lg text-white">
                    <Plus className='text-white' />
                    Create Meeting
                </div>
            </DialogTrigger>
            <DialogContent className="min-w-[80%] min-h-[80%] bg-white">
                <div className='grid grid-cols-1 md:grid-cols-3'>
                    {/* Meeting Form  */}
                    <div className='shadow-md border'>
                        <MeetingForm setFormValue={(v) => setFormValue(v)} />
                    </div>
                    {/* Preview  */}
                    <div className='md:col-span-2 w-full'>
                        <PreviewMeeting formValue={formValue} />
                    </div>
                </div>
            </DialogContent>
        </Dialog>

    )
}

export default MeetingDialog