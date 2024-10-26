"use client";
import React from 'react'
import { Spotlight } from './ui/Spotlight';
import { TextGenerateEffect } from "./ui/TextGenerateEffect";
import { GlareCard } from './ui/GlareCard';
import { FlipWords } from './ui/FlipWords';
import { flipWordsAboutme } from '@/data';
import MagicButton from './ui/MagicButton';
import { FaLinkedin } from 'react-icons/fa6';
import { GiScrollUnfurled } from "react-icons/gi";
import { LinkPreview } from './ui/LinkPreview';

const AboutMe = () => {
  return (
    <div className="pb-20 pt-20 md:pt-36">
      <div>
        <Spotlight className="-top-40 -left-10 md:-left-32 md:-top-20 h-screen" fill="#7FFFD4" /> {/* Aquamarine */}
        <Spotlight className="top-10 left-full h-[80vh] w-[50vw]" fill="#FF00FF" /> {/* Magenta */}
        <Spotlight className="top-28 left-80 h-[80vh] w-[50vw]" fill="#FFD700" /> {/* Gold */}
        <Spotlight className="-top-20 right-40 h-[70vh] w-[40vw]" fill="#E6E6FA" /> {/* Lavender */}
      </div>
      <div className="h-screen w-full dark:bg-black-100 bg-white dark:bg-grid-white/[0.03] bg-grid-black/[0.2] flex items-center justify-center absolute top-0 left-0">
        <div className="absolute pointer-events-none inset-0 flex items-center justify-center dark:bg-black-100 bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]"/>
      </div>

      <div className="flex justify-center relative my-20 z-10">
        <div className="max-w-[89vw] md:max-w-2xl lg:max-w-[60vw] flex flex-col items-center justify-center">
          <TextGenerateEffect
            className="text-center text-[40px] md:text-5xl lg:text-6xl"
            words="About Me"
            duration={3} 
            filter={false}
          />
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 relative justify-items-center items-center my-20 z-10">
        {/* PHOTO */}
        <div>
          <GlareCard className="flex flex-col items-center justify-center">
            <img
              className="h-full w-full absolute inset-0 object-cover"
              src="/about/profileaboutme.jpg"
            />
          </GlareCard>
        </div>
        {/* DESC */}
        <div>
          <div className="flex flex-col items-center justify-center">
            <h1 className="text-center text-xl font-bold md:text-4xl mb-2 text-black dark:text-white">
              Hi, I&apos;m Nehemia Gueldi
            </h1>
            <div className="text-center md:tracking-wider mb-4 text-sm md:text-lg lg:text-2xl">
              <FlipWords words={flipWordsAboutme} className="font-semibold" />
            </div>
            <p className="text-neutral-700 dark:text-neutral-200 text-sm md:text-base text-justify">
            As a Computer Science graduate from&nbsp;
            <LinkPreview url="https://www.umn.ac.id/" className="hover:no-underline underline decoration-neutral-300 font-semibold">
            Multimedia Nusantara University 
            </LinkPreview>
            &nbsp;and a Bangkit Academy Cloud Computing alum, I&apos;ve focused my career on mastering the dynamic world of technology. Through mentorship from Google, I&apos;ve sharpened both my technical expertise and my understanding of the larger tech landscape. Now, I&apos;m eager to expand my skill set in web development and cloud computing by exploring new opportunities, embracing cutting-edge technologies, and collaborating with professionals to tackle innovative challenges.
            </p>
          </div>
          <div className="grid grid-cols-2 gap-10 relative justify-items-center my-10 z-10">
            <div>
              <a href="/about/Resume_Nehemia_Gueldi.pdf" target='_blank'>
                <MagicButton
                  title='Resume'
                  icon={<GiScrollUnfurled />}
                  position='right'
                  otherClasses="w-full lg:w-60 transition duration-200 hover:scale-105 focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50"
                />
              </a>
            </div>
            <div>
              <a href="https://www.linkedin.com/in/nehemiagueldi/" target='_blank'>
                <MagicButton
                  title='LinkedIn'
                  icon={<FaLinkedin />}
                  position='right'
                  otherClasses="w-full lg:w-60 transition duration-200 hover:scale-105 focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50"
                />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default AboutMe