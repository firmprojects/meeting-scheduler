import React from 'react'
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"
import { CalendarCheck, Clock, LinkIcon, Timer } from 'lucide-react'
import Link from 'next/link'
import { Button } from '@/components/ui/button'

function ScheduledMeetingList({ meetingList }) {
  return (
    <>
      {meetingList && meetingList.map((meeting, index) => (
        <div key={index} className='shadow hover:bg-blue-200 p-5 rounded-md border-2 border-gray-200'>
          <h2 className='font-bold text-[18px]'>{meeting?.formatedDate}</h2>
          <div className='mt-5 gap-4'>
            <h2 className='flex gap-4 mb-4'><Clock />{meeting?.duration} Min </h2>
            <h2 className='flex gap-4 w-full'><CalendarCheck />{meeting.formatedDate}  </h2>
          </div>
          <div className='mt-5 flex gap-4'>
            <h2 className='flex gap-4'><Timer />{meeting.selectedTime}  </h2>
          </div>
          <div className='flex flex-col mt-4'>
            <div className='flex gap-4'>
          <LinkIcon /> <Link href={meeting?.locationUrl ? meeting?.locationUrl : '#'}
            className='text-primary'
          >{meeting?.locationUrl}</Link>
            </div>
          <Link href={meeting.locationUrl}>
            <Button className="mt-5 text-white">Join Now</Button>
          </Link>
          </div>
        </div>
      ))}
    </>
  )
}

export default ScheduledMeetingList