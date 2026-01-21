"use client";

import React from "react";
import { motion, type Variants } from "framer-motion";
import { cn } from "@/lib/utils";
import { FlickeringGrid } from "@/components/ui/flickering-grid-hero";

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
  const LOGO_BASE64 =
    "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iODQiIGhlaWdodD0iODQiIHZpZXdCb3g9IjAgMCA4NCA4NCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cGF0aCBkPSJNMTMgMzJDMTMgMjAuOTU0MyAyMS45NTQzIDEyIDMzIDEyQzQ0LjA0NTcgMTIgNTMgMjAuOTU0MyA1MyAzMkM1MyA0My4wNDU3IDQ0LjUgNDcuNSAzMyA1Mkg1M0M1MyA2My4wNDU3IDQ0LjA0NTcgNzIgMzMgNzJDMjEuOTU0MyA3MiAxMyA2My4wNDU3IDEzIDUyQzEzIDQwLjk1NDMgMjIuNSAzNCAzMyAzMkgxM1oiIGZpbGw9IndoaXRlIi8+PHBhdGggZD0iTTUzIDcyQzY0LjczMjQgNjcuMDk3NyA3MyA1NS41MTE3IDczIDQyQzczIDI4LjQ4ODMgNjQuNzMyNCAxNi45MDIzIDUzIDEyVjcyWiIgZmlsbD0id2hpdGUiLz48L3N2Zz4=";

  const maskStyle = {
    WebkitMaskImage: `url('${LOGO_BASE64}')`,
    WebkitMaskSize: "90vw",
    WebkitMaskPosition: "center",
    WebkitMaskRepeat: "no-repeat",
    maskImage: `url('${LOGO_BASE64}')`,
    maskSize: "90vw",
    maskPosition: "center",
    maskRepeat: "no-repeat",
  } as const;

  return (
    <section
      className={cn(
        "relative w-full min-h-[80vh] overflow-hidden bg-[#07090b] flex flex-col items-center justify-start text-center px-4 pt-16 pb-24",
        className
      )}
    >
      <div className="z-10 flex flex-col items-center mb-10 sm:mb-12">
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

      <div className="absolute bottom-2 sm:bottom-4 left-0 w-full h-1/2 md:h-[55%] [mask-image:linear-gradient(to_bottom,transparent,black_15%,black_85%,transparent)]">
        <FlickeringGrid
          className="absolute inset-0 z-0"
          squareSize={4}
          gridGap={4}
          flickerChance={0.12}
          color="rgb(249, 115, 22)"
          maxOpacity={0.18}
        />
        <div className="absolute inset-0 z-0 opacity-80" style={maskStyle}>
          <FlickeringGrid
            squareSize={3}
            gridGap={6}
            flickerChance={0.16}
            color="rgb(255, 255, 255)"
            maxOpacity={0.45}
          />
        </div>
        <motion.div
          className="relative z-10 flex gap-4"
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
