import Hero from "./../components/Hero";
import { FloatingNav } from "@/components/ui/FloatingNav";
import Grid from "@/components/Grid";
import RecentProjects from "@/components/RecentProjects";
import Clients from "@/components/Clients";
import Experience from "../components/Experience";
import Approach from "@/components/Approach";
import Quote from "@/components/Quote";
import Footer from "@/components/Footer";
import { AiFillAliwangwang } from "react-icons/ai";
import { GiSpellBook, GiStabbedNote } from "react-icons/gi";
import { FaUserAstronaut } from "react-icons/fa6";

export default function Home() {
  const navItemsHome = [
    { 
      name: "About", 
      link: "#about",
      icon: <FaUserAstronaut className="h-4 w-4" />,
    },
    { 
      name: "Projects", 
      link: "#projects",
      icon: <GiSpellBook className="h-4 w-4" />,
    },
    { 
      name: "Testimonials", 
      link: "#testimonials",
      icon: <AiFillAliwangwang className="h-4 w-4" />,
    },
    { 
      name: "Contact", 
      link: "#contact",
      icon: <GiStabbedNote className="h-4 w-4" />,
    },
  ];
  return (
    <main className="relative bg-black-100 flex justify-center items-center flex-col overflow-clip mx-auto sm:px-10 px-5">
      <div className="max-w-7xl w-full">
        <FloatingNav navItems={navItemsHome}/>
        <Hero />
        <Grid />
        <RecentProjects/>
        <Clients/>
        <Experience/>
        <Approach/>
        <Quote/>
        <Footer/>
      </div>
    </main>
  );
}
