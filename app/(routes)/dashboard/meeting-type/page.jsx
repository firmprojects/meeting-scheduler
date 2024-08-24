import { Input } from '@/components/ui/input'

import React from 'react'
import MeetingEventList from './_components/MeetingEventList'



function MeetingType() {
  return (
    <div className='p-5'>
      <div className='flex flex-col gap-5'>
        <h2 className='font-bold text-3xl'>Meetings</h2>
        <Input placeholder="Search" className="max-w-xs " />
        <hr></hr>
      </div>

      <MeetingEventList />

    </div>
  )
}

export default MeetingType