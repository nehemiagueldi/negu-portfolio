import TimelineComp from "@/components/timeline/TimelineComp";
import { FloatingNav } from "@/components/ui/FloatingNav";
import React from "react";
import { AiFillAliwangwang } from "react-icons/ai";
import { GiSpellBook, GiStabbedNote } from "react-icons/gi";
import { FaUserAstronaut } from "react-icons/fa6";

export default function Timeline() {
  const navItemsTimeline = [
    {
      name: "Home",
      link: "/",
      icon: <AiFillAliwangwang className="h-4 w-4" />,
    },
    {
      name: "Projects",
      link: "/about#projects",
      icon: <GiSpellBook className="h-4 w-4" />,
    },
    {
      name: "Contact",
      link: "/about#contact",
      icon: <GiStabbedNote className="h-4 w-4" />,
    },
    {
      name: "About",
      link: "/about",
      icon: <FaUserAstronaut className="h-4 w-4" />,
    },
  ];
  return (
    <div className="relative bg-black-100 flex justify-center items-center flex-col overflow-clip mx-auto sm:px-10 px-5">
      <div className="max-w-7xl w-full">
        <FloatingNav navItems={navItemsTimeline} />
        <TimelineComp />
      </div>
    </div>
  );
}
