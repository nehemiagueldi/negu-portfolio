"use client";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import { LinkPreview } from "./LinkPreview";

let interval: any;

type Card = {
  id: number;
  name: string;
  designation: string;
  content: React.ReactNode;
};

export const CardStack = ({
  items,
  offset,
  scaleFactor,
}: {
  items: Card[];
  offset?: number;
  scaleFactor?: number;
}) => {
  const CARD_OFFSET = offset || 10;
  const SCALE_FACTOR = scaleFactor || 0.06;
  const [cards, setCards] = useState<Card[]>(items);

  useEffect(() => {
    startFlipping();

    return () => clearInterval(interval);
  }, []);
  const startFlipping = () => {
    interval = setInterval(() => {
      setCards((prevCards: Card[]) => {
        const newArray = [...prevCards]; // create a copy of the array
        newArray.unshift(newArray.pop()!); // move the last element to the front
        return newArray;
      });
    }, 5000);
  };

  return (
    <div className="relative h-60 w-60 md:h-60 md:w-96 lg:h-60 lg:w-[28rem]">
      {cards.map((card, index) => {
        return (
          <motion.div
            key={card.id}
            className="absolute h-60 w-60 md:h-60 md:w-96 lg:h-60 lg:w-[28rem] rounded-3xl p-4 shadow-xl border border-neutral-200 dark:border-white/[0.1]  shadow-black/[0.1] dark:shadow-white/[0.07] flex flex-col justify-between"
            style={{
              transformOrigin: "top center",
              background: "rgb(4,7,29)",
              backgroundColor:
                "linear-gradient(90deg, rgba(4,7,29,1) 0%, rgba(22,34,55,1) 100%)",
            }}
            animate={{
              top: index * -CARD_OFFSET,
              scale: 1 - index * SCALE_FACTOR, // decrease scale for cards that are behind
              zIndex: cards.length - index, //  decrease z-index for the cards that are behind
            }}
          >
            <div className="font-normal text-neutral-700 dark:text-neutral-200">
              {card.content}
            </div>
            <div>
              <p className="text-neutral-500 font-medium dark:text-white">
                {card.name}
              </p>
              {card.designation === "My Hero Academia" &&
                <p className="text-neutral-400 font-normal dark:text-neutral-200">
                  <LinkPreview url="https://myheroacademia.fandom.com/wiki/My_Hero_Academia_Wiki" imageSrc="/anime/mha.jpg"
          isStatic className="underline decoration-neutral-300">
                    {card.designation}
                  </LinkPreview>
                </p>
              }
              {card.designation === "Kaiju No. 8" &&
                <p className="text-neutral-400 font-normal dark:text-neutral-200">
                  <LinkPreview url="https://kaiju-no-8.fandom.com/wiki/Kaiju_No_8_Wiki" imageSrc="/anime/kju.jpeg"
          isStatic className="underline decoration-neutral-300">
                    {card.designation}
                  </LinkPreview>
                </p>
              }
            </div>
          </motion.div>
        );
      })}
    </div>
  );
};

export const Highlight = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  return (
    <span
      className={cn(
        "font-bold bg-emerald-100 text-emerald-700 dark:bg-emerald-700/[0.2] dark:text-emerald-500 px-1 py-0.5",
        className
      )}
    >
      {children}
    </span>
  );
};