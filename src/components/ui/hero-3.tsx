"use client";

import React from "react";
import { motion, type Variants } from "framer-motion";
import { cn } from "@/lib/utils";
import { FlickeringGrid } from "@/components/ui/flickering-grid-hero";

interface AnimatedMarqueeHeroProps {
  tagline?: string;
  title: React.ReactNode;
  subheadline?: string;
  description: string;
  ctaText: string;
  trustItems?: string[];
  onCtaClick?: () => void;
  images: string[];
  className?: string;
}

const ActionButton = ({
  children,
  onClick,
}: {
  children: React.ReactNode;
  onClick?: () => void;
}) => (
  <motion.button
    whileHover={{ scale: 1.05 }}
    whileTap={{ scale: 0.95 }}
    onClick={onClick}
    className="px-6 sm:px-8 py-3 rounded-full bg-orange-500 text-white font-semibold shadow-lg transition-colors hover:bg-orange-600 focus:outline-none focus:ring-2 focus:ring-orange-400 focus:ring-opacity-75"
  >
    {children}
  </motion.button>
);

export const AnimatedMarqueeHero: React.FC<AnimatedMarqueeHeroProps> = ({
  tagline,
  title,
  subheadline,
  description,
  ctaText,
  trustItems = [],
  onCtaClick,
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

      {/* Top-left pinned headline */}
      <div className="absolute top-0 left-0 z-20 p-8 md:p-12 text-left">
        {tagline ? (
          <motion.div
            initial="hidden"
            animate="show"
            variants={FADE_IN_ANIMATION_VARIANTS}
            className="text-xs uppercase tracking-[0.35em] text-white/50 mb-3"
          >
            {tagline}
          </motion.div>
        ) : null}
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
          className="text-[12vw] sm:text-[10vw] md:text-[8vw] lg:text-[7vw] font-bold tracking-tight text-white leading-[0.95] max-w-[14ch]"
        >
          {typeof title === "string"
            ? title.split(" ").map((word, i) => (
                <motion.span key={i} variants={FADE_IN_ANIMATION_VARIANTS} className="inline-block">
                  {word}&nbsp;
                </motion.span>
              ))
            : title}
        </motion.h1>
        {subheadline ? (
          <motion.p
            initial="hidden"
            animate="show"
            variants={FADE_IN_ANIMATION_VARIANTS}
            transition={{ delay: 0.2 }}
            className="mt-3 text-base sm:text-lg text-white/70 max-w-xl"
          >
            {subheadline}
          </motion.p>
        ) : null}
      </div>

      {/* Centered carousel band */}
      <div className="absolute inset-x-0 top-1/2 -translate-y-1/2 z-10">
        <div className="w-full px-0">
          <div className="relative w-full overflow-hidden">
            <motion.div
              className="relative z-10 flex gap-4 w-full"
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
      </div>

      {/* Bottom row */}
      <div className="absolute inset-x-0 bottom-0 z-20">
        <div className="w-full px-4 sm:px-6 pb-3 sm:pb-4">
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 text-white/70">
            <motion.p
              initial="hidden"
              animate="show"
              variants={FADE_IN_ANIMATION_VARIANTS}
              transition={{ delay: 0.3 }}
              className="text-lg sm:text-xl md:text-2xl leading-relaxed max-w-md text-left text-white font-semibold"
            >
              {description}
            </motion.p>
            <div className="flex flex-col items-start md:items-end gap-3">
              <ActionButton onClick={onCtaClick}>{ctaText}</ActionButton>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
