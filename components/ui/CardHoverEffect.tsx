"use client";
import { cn } from "@/lib/utils";
import { AnimatePresence, motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

export const HoverEffect = ({
  items,
  className,
}: {
  items: {
    title: string;
    detail: string;
    icon: string;
    desc: string;
    link: string;
  }[];
  className?: string;
}) => {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <div
      className={cn(
        "grid grid-cols-1 lg:grid-cols-3 py-10",
        className
      )}
    >
      {items.map((item, idx) => (
        <Link
          href={item?.link}
          key={item?.link}
          className="relative group  block p-2 h-full w-full"
          onMouseEnter={() => setHoveredIndex(idx)}
          onMouseLeave={() => setHoveredIndex(null)}
        >
          <AnimatePresence>
            {hoveredIndex === idx && (
              <motion.span
                className="absolute inset-0 h-full w-full bg-slate-200 dark:bg-slate-700/[0.8] block  rounded-3xl"
                layoutId="hoverBackground"
                initial={{ opacity: 0 }}
                animate={{
                  opacity: 1,
                  transition: { duration: 0.15 },
                }}
                exit={{
                  opacity: 0,
                  transition: { duration: 0.15, delay: 0.2 },
                }}
              />
            )}
          </AnimatePresence>
          <Card icon={item.icon}>
            <CardTitle>{item.title}</CardTitle>
            <CardDescription desc={item.desc}>{item.detail}</CardDescription>
          </Card>
        </Link>
      ))}
    </div>
  );
};

export const Card = ({
  className,
  children,
  icon
}: {
  className?: string;
  children: React.ReactNode;
  icon: string;
}) => {
  return (
    <div
      className={cn(
        "rounded-2xl h-full w-full p-4 overflow-hidden bg-gradient-to-tr from-slate-800 to-black-100 border border-transparent dark:border-white/[0.2] group-hover:border-slate-300 transition duration-200 relative z-20",
        className
      )}
    >
      <div className="absolute right-6 top-1/2 transform -translate-y-1/2 opacity-30 group-hover:opacity-80 transition duration-200 z-10">
        <Image
          src={icon}
          alt="Background Icon"
          width={60}
          height={60}
          className="object-contain"
        />
      </div>
      <div className="relative z-50">
        <div className="p-4">{children}</div>
      </div>
    </div>
  );
};

export const CardTitle = ({
  className,
  children,
}: {
  className?: string;
  children: React.ReactNode;
}) => {
  return (
    <h4 className={cn("text-zinc-100 font-bold tracking-wide mt-4 text-base md:text-xl", className)}>
      {children}
    </h4>
  );
};
export const CardDescription = ({
  className,
  children,
  desc
}: {
  className?: string;
  children: React.ReactNode;
  desc:string;
}) => {
  return (
    <>
      <p
        className={cn(
          "mt-1 mb-4 text-slate-300 tracking-wide leading-relaxed text-sm",
          className
        )}
      >
        {children}
      </p>
      <p
        className={cn(
          "mb-4 text-slate-300 tracking-wide leading-relaxed text-sm font-semibold",
          className
        )}
      >
        {desc}
      </p>
    </>
  );
};
