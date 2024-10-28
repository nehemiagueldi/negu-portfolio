"use client";
import React from 'react'
import {
  IconAdjustmentsBolt,
  IconCloud,
  IconCurrencyDollar,
  IconEaseInOut,
  IconHeart,
  IconHelp,
  IconRouteAltLeft,
  IconTerminal2,
} from "@tabler/icons-react";
import { cn } from '@/lib/utils';
import Image from 'next/image';

const TechStack = () => {
  const features = [
    {
      title: "HTML",
      description:
        "Built for engineers, developers, dreamers, thinkers and doers.",
      icon: "/html.svg",
    },
    {
      title: "CSS",
      description:
        "It's as easy as using an Apple, and as expensive as buying one.",
      icon: "/css.svg",
    },
    {
      title: "JavaScript",
      description:
        "Our prices are best in the market. No cap, no lock, no credit card required.",
      icon: "/javascript.svg",
    },
    {
      title: "TypeScript",
      description: "We just cannot be taken down by anyone.",
      icon: "/typescript.svg",
    },
    {
      title: "Angular",
      description: "You can simply share passwords instead of buying new seats",
      icon: "/angular.svg",
    },
    {
      title: "React",
      description:
        "We are available a 100% of the time. Atleast our AI Agents are.",
      icon: "/re.svg",
    },
    {
      title: "NextJS",
      description:
        "If you donot like EveryAI, we will convince you to like us.",
      icon: "/nextjs.svg",
    },
    {
      title: "Laravel",
      description: "I just ran out of copy ideas. Accept my sincere apologies",
      icon: "/laravel.svg"
    },
    {
      title: "NodeJS",
      description:
        "We are available a 100% of the time. Atleast our AI Agents are.",
      icon: "/node-js.svg",
    },
    {
      title: "Python",
      description:
        "If you donot like EveryAI, we will convince you to like us.",
      icon: "/pypi.svg",
    },
    {
      title: "MySQL",
      description: "I just ran out of copy ideas. Accept my sincere apologies",
      icon: "/mysql.svg"
    },
    {
      title: "PHP",
      description: "I just ran out of copy ideas. Accept my sincere apologies",
      icon: "/php.svg"
    },
    {
      title: "VueJS",
      description:
        "We are available a 100% of the time. Atleast our AI Agents are.",
      icon: "/vue.svg",
    },
    {
      title: "TailwindCSS",
      description:
        "If you donot like EveryAI, we will convince you to like us.",
      icon: "/tailwindcss.svg",
    },
    {
      title: "Bootstrap",
      description: "I just ran out of copy ideas. Accept my sincere apologies",
      icon: "/bootstrap.svg"
    },
    {
      title: "ChakraUI",
      description: "I just ran out of copy ideas. Accept my sincere apologies",
      icon: "/chakraui.svg"
    },
  ];
  return (
    <div className="py-20">
      <h1 className="heading">
        Tech {' '}
        <span className="text-purple">Stack</span>
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4  relative z-10 py-10 max-w-7xl mx-auto">
        {features.map((feature, index) => (
          <Feature key={feature.title} {...feature} index={index} icon={feature.icon} />
        ))}
      </div>
    </div>
  )
}

const Feature = ({
  title,
  description,
  icon,
  index,
}: {
  title: string;
  description: string;
  icon: string;
  index: number;
}) => {
  return (
    <div
      className={cn(
        "flex flex-col lg:border-r  py-10 relative group/feature dark:border-slate-600 cursor-pointer",
        (index === 0 || index === 4 || index === 8 || index === 12) && "lg:border-l dark:border-slate-600",
        index < 12 && "lg:border-b dark:border-slate-600"
      )}
    >
      {index < 4 && (
        <div className="opacity-0 group-hover/feature:opacity-100 transition duration-200 absolute inset-0 h-full w-full bg-gradient-to-t from-slate-100 dark:from-slate-700 to-transparent pointer-events-none" />
      )}
      {index >= 4 && index < 8 && (
        <div className="opacity-0 group-hover/feature:opacity-100 transition duration-200 absolute inset-0 h-full w-full bg-gradient-to-br from-slate-100 dark:from-slate-700 to-transparent pointer-events-none" />
      )}
      {index >= 8 && index < 12 && (
        <div className="opacity-0 group-hover/feature:opacity-100 transition duration-200 absolute inset-0 h-full w-full bg-gradient-to-tr from-slate-100 dark:from-slate-700 to-transparent pointer-events-none" />
      )}
      {index >= 12 && (
        <div className="opacity-0 group-hover/feature:opacity-100 transition duration-200 absolute inset-0 h-full w-full bg-gradient-to-b from-slate-100 dark:from-slate-700 to-transparent pointer-events-none" />
      )}
      <div className="mb-4 relative z-10 px-10 opacity-30 group-hover/feature:opacity-90 transition duration-200">
        <Image
          src={icon}
          alt="Background Icon"
          width={30}
          height={30}
          className="object-contain"
        />
      </div>
      <div className="text-lg font-bold mb-2 relative z-10 px-10">
        <div className="absolute left-0 inset-y-0 h-6 group-hover/feature:h-8 w-1 rounded-tr-full rounded-br-full bg-slate-300 dark:bg-slate-500 group-hover/feature:bg-teal-500 transition-all duration-200 origin-center" />
        <span className="group-hover/feature:translate-x-2 transition duration-200 inline-block text-slate-600 dark:text-slate-100">
          {title}
        </span>
      </div>
      <p className="text-sm text-slate-600 dark:text-slate-300 max-w-xs relative z-10 px-10">
        {description}
      </p>
    </div>
  );
};

export default TechStack