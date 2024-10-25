"use client";
import React, { useEffect, useState } from 'react';
import { WobbleCard } from './ui/WobbleCard'
import Image from 'next/image'
import MagicButton from './ui/MagicButton';
import { FaHistory } from 'react-icons/fa';
import { FaNewspaper } from "react-icons/fa6";

const Education = () => {
  const [currentTime, setCurrentTime] = useState<string>('');
  const [currentDate, setCurrentDate] = useState<string>('');

  useEffect(() => {
    const updateDateTime = () => {
      const now = new Date();
      setCurrentTime(now.toLocaleTimeString('en-US', { hour12: false }));
      setCurrentDate(now.toLocaleDateString('en-GB', {
        day: 'numeric',
        month: 'long',
        year: 'numeric',
      }));
    };

    updateDateTime();
    const intervalId = setInterval(updateDateTime, 1000);

    return () => clearInterval(intervalId);
  }, []);
  return (
    <div className="py-20">
      <h1 className="heading mb-10">
        My {' '}
        <span className="text-purple">Education</span>
      </h1>
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 max-w-7xl mx-auto w-full">
        <WobbleCard
          containerClassName="col-span-1 lg:col-span-2 h-full bg-pink-800 min-h-[500px] lg:min-h-[300px]"
          className=""
        >
          <div className="w-full lg:max-w-xs">
            <h2 className="text-left text-balance text-base md:text-xl lg:text-3xl font-semibold tracking-[-0.015em] text-white">
              My Timeline
            </h2>
            <div className="grid grid-cols-2 lg:grid-cols-1 gap-4 justify-items-center items-center lg:justify-items-start lg:items-start">
              <p className="mt-4 text-left  text-base/6 text-neutral-200">
                I&apos;ve embarked on an incredible journey that has shaped my growth and experiences. Here&apos;s a timeline of my journey.
              </p>
              <a href="/timeline">
                <MagicButton
                  title='Timeline'
                  icon={<FaHistory />}
                  position='right'
                  otherClasses="w-full md:w-60 lg:mt-4 transition duration-200 hover:scale-105 focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50"
                />
              </a>
            </div>
          </div>
          <Image
            src="/linear.webp"
            width={500}
            height={500}
            alt="linear demo image"
            className="absolute -right-4 lg:-right-[40%] grayscale filter -bottom-10 object-contain rounded-2xl"
          />
        </WobbleCard>
        <WobbleCard containerClassName="col-span-1 min-h-[300px]">
          <div className="flex flex-col justify-center items-center">
            <h1 className="max-w-80 text-center text-balance text-base md:text-xl lg:text-3xl font-semibold tracking-[-0.015em] text-white">
              Time & Date
            </h1>
            <h2 className="max-w-80 text-center text-balance text-base md:text-xl lg:text-3xl font-semibold tracking-[-0.015em] text-white mt-4">
              {currentTime}
            </h2>
            <p className="max-w-[26rem] text-center text-base/6 text-neutral-200">
              {currentDate}
            </p>
            <p className="max-w-[26rem] text-center text-base/6 text-neutral-200 mt-2">
              “The greatest day in your life and mine is when we take total responsibility for our attitudes. That&apos;s the day we truly grow up.”<br />
              ― John C. Maxwell ―
            </p>
          </div>
        </WobbleCard>
        <WobbleCard containerClassName="col-span-1 lg:col-span-3 bg-blue-900 min-h-[500px] lg:min-h-[600px] xl:min-h-[300px]">
          <div className="w-full md:max-w-md">
            <div className="grid grid-cols-2 md:grid-cols-1 gap-4 justify-items-center items-center md:justify-items-start md:items-start">
              <div>
                <h2 className="max-w-sm md:max-w-lg text-left text-balance text-base md:text-xl lg:text-3xl font-semibold tracking-[-0.015em] text-white">
                  Computer Science (S.Kom)
                </h2>
                <p className="mt-2 max-w-[26rem] text-left text-base/6 text-neutral-200 font-semibold">
                  Multimedia Nusantara University
                </p>
                <p className="m ax-w-[26rem] text-left text-base/6 text-neutral-200">
                  Aug 2020 - Aug 2024
                </p>
              </div>
              <div>
                <a href="#">
                  <MagicButton
                  title='Unpublished Paper'
                    icon={<FaNewspaper />}
                    position='right'
                    otherClasses="w-full md:w-60 mt-4 transition duration-200 hover:scale-105 focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50"
                  />
                </a>
              </div>
            </div>
          </div>
          <Image
            src="/linear.webp"
            width={500}
            height={500}
            alt="linear demo image"
            className="absolute -right-10 md:-right-[40%] lg:-right-[20%] -bottom-10 object-contain rounded-2xl"
          />
        </WobbleCard>
      </div>
    </div>
  )
}

export default Education