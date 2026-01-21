"use client";

import React from "react";
import { motion, type Variants } from "framer-motion";
import { cn } from "@/lib/utils";

interface AnimatedMarqueeHeroProps {
  tagline?: string;
  title: React.ReactNode;
  description: string;
  ctaText: string;
  images: string[];
  className?: string;
}

const ActionButton = ({ children }: { children: React.ReactNode }) => (
  <motion.button
    whileHover={{ scale: 1.05 }}
    whileTap={{ scale: 0.95 }}
    className="mt-6 px-6 sm:px-8 py-3 rounded-full bg-orange-500 text-white font-semibold shadow-lg transition-colors hover:bg-orange-600 focus:outline-none focus:ring-2 focus:ring-orange-400 focus:ring-opacity-75"
  >
    {children}
  </motion.button>
);

export const AnimatedMarqueeHero: React.FC<AnimatedMarqueeHeroProps> = ({
  tagline,
  title,
  description,
  ctaText,
  images,
  className,
}) => {
  const FADE_IN_ANIMATION_VARIANTS: Variants = {
    hidden: { opacity: 0, y: 10 },
    show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
  };

  const duplicatedImages = [...images, ...images];

  return (
    <section
      className={cn(
        "relative w-full min-h-[80vh] overflow-hidden bg-[#07090b] flex flex-col items-center justify-center text-center px-4 py-16",
        className
      )}
    >
      <div className="z-10 flex flex-col items-center">
        {tagline ? (
          <motion.div
            initial="hidden"
            animate="show"
            variants={FADE_IN_ANIMATION_VARIANTS}
            className="mb-4 inline-block rounded-full border border-white/10 bg-white/5 px-4 py-1.5 text-xs font-medium text-white/70 backdrop-blur-sm"
          >
            {tagline}
          </motion.div>
        ) : null}

        <motion.h2
          initial="hidden"
          animate="show"
          variants={{
            hidden: {},
            show: {
              transition: {
                staggerChildren: 0.1,
              },
            },
          }}
          className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight text-white"
        >
          {typeof title === "string"
            ? title.split(" ").map((word, i) => (
                <motion.span key={i} variants={FADE_IN_ANIMATION_VARIANTS} className="inline-block">
                  {word}&nbsp;
                </motion.span>
              ))
            : title}
        </motion.h2>

        <motion.div
          initial="hidden"
          animate="show"
          variants={FADE_IN_ANIMATION_VARIANTS}
          transition={{ delay: 0.6 }}
        >
          <ActionButton>{ctaText}</ActionButton>
        </motion.div>
      </div>

      <div className="absolute bottom-0 left-0 w-full h-1/2 md:h-[55%] [mask-image:linear-gradient(to_bottom,transparent,black_15%,black_85%,transparent)]">
        <motion.div
          className="flex gap-4"
          animate={{
            x: ["-100%", "0%"],
            transition: {
              ease: "linear",
              duration: 40,
              repeat: Infinity,
            },
          }}
        >
          {duplicatedImages.map((src, index) => (
            <div
              key={index}
              className="relative aspect-[16/10] h-52 md:h-64 lg:h-72 flex-shrink-0"
              style={{ rotate: `${index % 2 === 0 ? -2 : 4}deg` }}
            >
              <img
                src={src}
                alt={`Showcase image ${index + 1}`}
                className="w-full h-full object-cover rounded-2xl shadow-md"
              />
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};
