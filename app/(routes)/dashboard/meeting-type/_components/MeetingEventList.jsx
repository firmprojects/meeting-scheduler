"use client"
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input'
import { app } from '@/config/FirebaseConfig'
import { useKindeBrowserClient } from '@kinde-oss/kinde-auth-nextjs';
import { getFirestore, collection, query, where, getDocs, orderBy, deleteDoc, doc, getDoc } from 'firebase/firestore'
import React, { useEffect, useState } from 'react'
import { toast } from 'sonner';
import { DataTable } from '../data-table';
import { columns } from '../column'
import Link from 'next/link';
import { Briefcase, Calendar, Clock, Plus, Settings } from 'lucide-react'
import MeetingDialog from './MeetingDialog';



function MeetingEventList() {
    const db = getFirestore(app);
    const { user } = useKindeBrowserClient();
    const [businessInfo, setBusinessInfo] = useState();
    const [eventList, setEventList] = useState([]);
    useEffect(() => {
        user && getEventList();
        user && BusinessInfo();
    }, [user])
    const getEventList = async () => {
        setEventList([]);
        const q = query(collection(db, "MeetingEvent"),
            where("createdBy", "==", user?.email),
            orderBy('id', 'desc'));

        const querySnapshot = await getDocs(q);
        querySnapshot.forEach((doc) => {
            console.log(doc.id, " => ", doc.data());
            setEventList(prevEvent => [...prevEvent, doc.data()])
        });
    }

    const BusinessInfo = async () => {
        const docRef = doc(db, 'Business', user.email);
        const docSnap = await getDoc(docRef);
        setBusinessInfo(docSnap.data());
    }

    const onDeleteMeetingEvent = async (event) => {
        await deleteDoc(doc(db, "MeetingEvent", event?.id)).then(resp => {
            toast('Meeting Event Deleted!');
            getEventList();
        })
    }

    const onCopyClickHandler = (event) => {
        const meetingEventUrl = process.env.NEXT_PUBLIC_BASE_URL + '/' + businessInfo.businessName + '/' + event.id
        navigator.clipboard.writeText(meetingEventUrl);
        toast('Copied to Clicpboard')
    }

    return (
        <>
            <div className='flex justify-end my-4 w-full'>
                {/* <Link href={'/create-meeting'}>
                    <Button className="flex bg-blue-100 hover:bg-blue-200 gap-2 w-full mt-7 rounded-full text-primary"> <Plus className='text-primary' /> Create</Button>
                </Link> */}
                <MeetingDialog />
            </div>
            <DataTable
                columns={columns(onCopyClickHandler, onDeleteMeetingEvent, getEventList, BusinessInfo)}
                data={eventList}
            />        </>

    )
}

export default MeetingEventList