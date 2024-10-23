import TimelineComp from '@/components/TimelineComp'
// import { FloatingNav } from '@/components/ui/FloatingNav'
// import { navItems } from '@/data'
import React from 'react'

export default function Timeline() {
  return (
    <div className="relative bg-black-100 flex justify-center items-center flex-col overflow-clip mx-auto sm:px-10 px-5">
      <div className="max-w-7xl w-full">
        {/* <FloatingNav navItems={navItems}/> */}
        <TimelineComp/>
      </div>
    </div>
  )
}
