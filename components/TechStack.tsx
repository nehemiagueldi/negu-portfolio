"use client";
import React from 'react'
import { cn } from '@/lib/utils';
import Image from 'next/image';

const TechStack = () => {
  const features = [
    {
      title: "HTML",
      description:
        "A markup language used to structure content on the web.",
      icon: "/html.svg",
    },
    {
      title: "CSS",
      description:
        "A styling language that designs the visual presentation of web pages.",
      icon: "/css.svg",
    },
    {
      title: "JavaScript",
      description:
        "A programming language that adds interactivity to websites.",
      icon: "/javascript.svg",
    },
    {
      title: "TypeScript",
      description: "A typed superset of JavaScript that provides better error-checking and structure.",
      icon: "/typescript.svg",
    },
    {
      title: "Angular",
      description: "A powerful framework for building dynamic single-page applications.",
      icon: "/angular.svg",
    },
    {
      title: "React",
      description:
        "A popular JavaScript library for building user interfaces efficiently with reusable components.",
      icon: "/re.svg",
    },
    {
      title: "NextJS",
      description:
        "A React framework for building fast, SEO-friendly web applications with server-side rendering.",
      icon: "/nextjs.svg",
    },
    {
      title: "Laravel",
      description: "A PHP framework designed to make backend development simpler and more efficient.",
      icon: "/laravel.svg"
    },
    {
      title: "NodeJS",
      description:
        "A runtime that allows JavaScript to be used for server-side programming.",
      icon: "/node-js.svg",
    },
    {
      title: "Python",
      description:
        "A versatile programming language widely used for web development, data analysis, and AI.",
      icon: "/pypi.svg",
    },
    {
      title: "MySQL",
      description: "A reliable relational database management system for storing and managing data.",
      icon: "/mysql.svg"
    },
    {
      title: "PHP",
      description: "A backend scripting language commonly used for web server development.",
      icon: "/php.svg"
    },
    {
      title: "VueJS",
      description:
        "A progressive JavaScript framework for building user interfaces with ease.",
      icon: "/vue.svg",
    },
    {
      title: "TailwindCSS",
      description:
        "A utility-first CSS framework that simplifies styling with predefined classes.",
      icon: "/tailwindcss.svg",
    },
    {
      title: "Bootstrap",
      description: "A CSS framework with ready-to-use components for fast and responsive design.",
      icon: "/bootstrap.svg"
    },
    {
      title: "ChakraUI",
      description: "A React component library focused on accessibility and ease of use for building UI.",
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