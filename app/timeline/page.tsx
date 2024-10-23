import TimelineComp from '@/components/TimelineComp'
import { FloatingNav } from '@/components/ui/FloatingNav'
import React from 'react'
import { AiFillAliwangwang } from "react-icons/ai";
import { GiSpellBook } from "react-icons/gi";
import { FaUserAstronaut } from "react-icons/fa6";
import { GiStabbedNote } from "react-icons/gi";

export default function Timeline() {
  const navItemsTimeline = [
    { 
      name: "About", 
      link: "/#about",
      icon: <FaUserAstronaut className="h-4 w-4" />,
    },
    { 
      name: "Projects", 
      link: "/#projects",
      icon: <GiSpellBook className="h-4 w-4" />,
    },
    { 
      name: "Testimonials", 
      link: "/#testimonials",
      icon: <AiFillAliwangwang className="h-4 w-4" />,
    },
    { 
      name: "Contact", 
      link: "/#contact",
      icon: <GiStabbedNote className="h-4 w-4" />,
    },
  ];
  return (
    <div className="relative bg-black-100 flex justify-center items-center flex-col overflow-clip mx-auto sm:px-10 px-5">
      <div className="max-w-7xl w-full">
        <FloatingNav navItems={navItemsTimeline}/>
        <TimelineComp/>
      </div>
    </div>
  )
}
