import { FloatingNav } from '@/components/ui/FloatingNav'
import React from 'react'
import { AiFillAliwangwang } from "react-icons/ai";
import { GiStabbedNote, GiBurningBook, GiSpellBook } from "react-icons/gi";
import AboutMe from '@/components/AboutMe';

export default function Aboutme() {
  const navItemsAboutme = [
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
      name: "Experience", 
      link: "/#experience",
      icon: <GiBurningBook className="h-4 w-4" />,
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
        <FloatingNav navItems={navItemsAboutme}/>
        <AboutMe/>
      </div>
    </div>
  )
}
