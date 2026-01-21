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
    className="px-6 sm:px-8 py-3 rounded-full bg-orange-500 text-white font-semibold shadow-lg transition-colors hover:bg-orange-600 focus:outline-none focus:ring-2 focus:ring-orange-400 focus:ring-opacity-75"
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
    WebkitMaskSize: "120vw",
    WebkitMaskPosition: "center",
    WebkitMaskRepeat: "no-repeat",
    maskImage: `url('${LOGO_BASE64}')`,
    maskSize: "120vw",
    maskPosition: "center",
    maskRepeat: "no-repeat",
  } as const;

  return (
    <section
      className={cn(
        "relative w-full h-screen overflow-hidden bg-[#07090b]",
        className
      )}
    >
      {/* Full-screen flickering grid with B1 mask */}
      <div className="absolute inset-0 z-0">
        <FlickeringGrid
          className="absolute inset-0"
          squareSize={4}
          gridGap={4}
          flickerChance={0.12}
          color="rgb(249, 115, 22)"
          maxOpacity={0.18}
        />
        <div className="absolute inset-0 opacity-80" style={maskStyle}>
          <FlickeringGrid
            squareSize={3}
            gridGap={6}
            flickerChance={0.16}
            color="rgb(255, 255, 255)"
            maxOpacity={0.45}
          />
        </div>
      </div>

      <div className="relative z-10 w-full h-full px-4 sm:px-6 lg:px-10 py-10 sm:py-14 lg:py-16 flex flex-col">
        <div className="-mx-4 sm:-mx-6 lg:-mx-10 w-[calc(100%+2rem)] sm:w-[calc(100%+3rem)] lg:w-[calc(100%+5rem)] text-left mb-4">
          <span className="block text-white font-bold tracking-tight text-[18vw] leading-none whitespace-nowrap">
            BASE ONE
          </span>
        </div>
        <div className="space-y-3 text-left">
          <motion.h1
            initial="hidden"
            animate="show"
            variants={{
              hidden: {},
              show: {
                transition: {
                  staggerChildren: 0.08,
                },
              },
            }}
            className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight text-white leading-[1.05] max-w-[26ch]"
          >
            {typeof title === "string"
              ? title.split(" ").map((word, i) => (
                  <motion.span key={i} variants={FADE_IN_ANIMATION_VARIANTS} className="inline-block">
                    {word}&nbsp;
                  </motion.span>
                ))
              : title}
          </motion.h1>
        </div>

        {/* Marquee images between title and bottom-left text */}
        <div className="mt-8 sm:mt-10 lg:mt-12 -mx-4 sm:-mx-6 lg:-mx-10">
          <div className="relative w-full overflow-hidden">
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
        </div>

        {/* Bottom-left copy */}
        <div className="mt-auto max-w-md space-y-4 text-white/70 text-left">
          <motion.p
            initial="hidden"
            animate="show"
            variants={FADE_IN_ANIMATION_VARIANTS}
            transition={{ delay: 0.4 }}
            className="text-sm sm:text-base leading-relaxed"
          >
            {description}
          </motion.p>
          <motion.div
            initial="hidden"
            animate="show"
            variants={FADE_IN_ANIMATION_VARIANTS}
            transition={{ delay: 0.5 }}
          >
            <ActionButton>{ctaText}</ActionButton>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
