import TimelineComp from '@/components/TimelineComp'
import React from 'react'

export default function Timeline() {
  return (
    <div className="relative bg-black-100 flex justify-center items-center flex-col overflow-clip mx-auto sm:px-10 px-5">
      <div className="max-w-7xl w-full">
        <TimelineComp/>
      </div>
    </div>
  )
}
