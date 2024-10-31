"use client";
import React, { useState } from 'react'
import { Tabs } from './ui/Tabs'
import Image from 'next/image';
import { motion } from 'framer-motion';
import { Beams, Lens, Rays } from './ui/Lens';
import { bangkitCertificateData, dicodingCertificateData, courseraCertificateData, sololearnCertificateData } from '@/data';

const Certificate = () => {
  const tabs = [
    {
      title: "Bangkit",
      value: "bangkit",
      content: (
        <div className="w-full overflow-hidden relative h-full rounded-2xl p-10 text-xl md:text-4xl font-bold text-white bg-gradient-to-tl from-indigo-700 to-violet-900 overflow-y-auto">
          <p>Bangkit Academy</p>
          <div className="grid grid-cols-1 grid-rows-none md:grid-cols-2 md:grid-rows-2 gap-5">
            {bangkitCertificateData.map((certificate, index) => (
              <CardContent
                key={index}
                imageSrc={certificate.imageSrc}
                title={certificate.title}
                description={certificate.description}
              />
            ))}
          </div>
          <CardContent
            imageSrc="/about/certificate/bangkitacademy/hirehubrewind.png" 
            title="HireHub Rewind" 
            description="This rewind indicate HireHub&apos;s rating during participate in the incubation program."
          />
        </div>
      ),
    },
    {
      title: "Dicoding",
      value: "dicoding",
      content: (
        <div className="w-full overflow-hidden relative h-full rounded-2xl p-10 text-xl md:text-4xl font-bold text-white bg-gradient-to-tl from-indigo-700 to-violet-900 overflow-y-auto">
          <p>Dicoding</p>
          <div className="grid grid-cols-1 grid-rows-none md:grid-cols-2 gap-5">
            {dicodingCertificateData.map((certificate, index) => (
              <CardContent
                key={index}
                imageSrc={certificate.imageSrc}
                title={certificate.title}
                description={certificate.description}
              />
            ))}
          </div>
        </div>
      ),
    },
    {
      title: "Coursera",
      value: "coursera",
      content: (
        <div className="w-full overflow-hidden relative h-full rounded-2xl p-10 text-xl md:text-4xl font-bold text-white bg-gradient-to-tl from-indigo-700 to-violet-900 overflow-y-auto">
          <p>Coursera</p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            {courseraCertificateData.map((certificate, index) => (
              <CardContent
                key={index}
                imageSrc={certificate.imageSrc}
                title={certificate.title}
                description={certificate.description}
              />
            ))}
          </div>
        </div>
      ),
    },
    {
      title: "Sololearn",
      value: "sololearn",
      content: (
        <div className="w-full overflow-hidden relative h-full rounded-2xl p-10 text-xl md:text-4xl font-bold text-white bg-gradient-to-tl from-indigo-700 to-violet-900 overflow-y-auto">
          <p>Sololearn</p>
          <div className="grid grid-cols-1 grid-rows-none md:grid-cols-2 gap-5">
            {sololearnCertificateData.map((certificate, index) => (
              <CardContent
                key={index}
                imageSrc={certificate.imageSrc}
                title={certificate.title}
                description={certificate.description}
              />
            ))}
          </div>
        </div>
      ),
    },
    {
      title: "Random",
      value: "random",
      content: (
        <div className="w-full overflow-hidden relative h-full rounded-2xl p-10 text-xl md:text-4xl font-bold text-white bg-gradient-to-tl from-indigo-700 to-violet-900 overflow-y-auto">
          <p>Random</p>
          {/* <DummyContent /> */}
        </div>
      ),
    },
  ];
  return (
    <div className="py-20">
      <h1 className="heading">
        My {' '}
        <span className="text-purple">Certificates</span>
      </h1>
      <div className="h-screen [perspective:1000px] relative b flex flex-col mx-auto w-full items-start justify-start py-10">
        <Tabs tabs={tabs} />
      </div>
    </div>
  )
}

type DummyContentProps = {
  imageSrc: string;
  title: string;
  description: string;
};

const CardContent: React.FC<DummyContentProps> = ({ imageSrc, title, description }) => {
  const [hovering, setHovering] = useState(false);

  return (
    <div className="w-full relative rounded-3xl overflow-hidden max-w-sm lg:max-w-md mx-auto bg-gradient-to-r from-[#1D2235] to-[#121318] p-8 my-5">
      <Rays />
      <Beams />
      <div className="relative z-10">
        <Lens hovering={hovering} setHovering={setHovering}>
          <Image
            src={imageSrc}
            alt="image"
            width={500}
            height={500}
            className="rounded-2xl cursor-pointer"
          />
        </Lens>
        <motion.div
          animate={{
            filter: hovering ? "blur(2px)" : "blur(0px)",
          }}
          className="py-4 relative z-20"
        >
          <h2 className="text-white text-lg md:text-xl text-left font-bold">
            {title}
          </h2>
          <p className="text-slate-200 text-left text-base md:text-lg mt-4 font-normal">
            {description}
          </p>
        </motion.div>
      </div>
    </div>
  );
};

export default Certificate