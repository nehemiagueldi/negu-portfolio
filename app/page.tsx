import Image from "next/image";
import Hero from "./../components/Hero";
import { FloatingNav } from "@/components/ui/FloatingNav";
import { FaHome } from "react-icons/fa";
import { FaInfo, FaPhone } from "react-icons/fa6";

export default function Home() {
  const navItems = [
    {
      name: "Home",
      link: "/",
      icon: <FaHome />,
    },
    {
      name: "About",
      link: "/about",
      icon: <FaInfo />,
    },
    {
      name: "Contact",
      link: "/contact",
      icon: <FaPhone />,
    },
  ];
  return (
    <main className="relative bg-black-100 flex justify-center items-center flex-col overflow-hidden mx-auto sm:px-10 px-5">
      <div className="max-w-7xl w-full">
        <FloatingNav navItems={navItems}/>
        <Hero />
      </div>
    </main>
  );
}
