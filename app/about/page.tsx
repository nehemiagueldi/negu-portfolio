"use client";
import { FloatingNav } from '@/components/ui/FloatingNav'
import React from 'react'
import { AiFillAliwangwang } from "react-icons/ai";
import { GiStabbedNote, GiBurningBook, GiSpellBook } from "react-icons/gi";
import AboutMe from '@/components/about/AboutMe';
import Education from '@/components/about/Education';
import ProjectsAbout from '@/components/about/ProjectsAbout';
import Contact from '@/components/about/Contact';
import TechStack from '@/components/about/TechStack';
import Certificate from '@/components/about/Certificate';

export default function Aboutme() {
  const navItemsAboutme = [
    { 
      name: "Home", 
      link: "/",
      icon: <AiFillAliwangwang className="h-4 w-4" />,
    },
    { 
      name: "Projects", 
      link: "#projects",
      icon: <GiSpellBook className="h-4 w-4" />,
    },
    { 
      name: "Contact", 
      link: "#contact",
      icon: <GiStabbedNote className="h-4 w-4" />,
    },
    { 
      name: "Timeline", 
      link: "/timeline",
      icon: <GiBurningBook className="h-4 w-4" />,
    },
  ];
  return (
    <div className="relative bg-black-100 flex justify-center items-center flex-col overflow-clip mx-auto sm:px-10 px-5">
      <div className="max-w-7xl w-full">
        <FloatingNav navItems={navItemsAboutme}/>
        <AboutMe/>
        <Education/>
        <ProjectsAbout/>
        <Certificate/>
        <TechStack/>
        <Contact/>
      </div>
    </div>
  )
}
