"use client";

import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { SplitText } from "gsap/SplitText";
import { motion } from "framer-motion";
import { Star } from "lucide-react";
import { FlickeringGrid } from "./flickering-grid-hero";
import { IPhone } from "./iphone";

gsap.registerPlugin(SplitText, useGSAP);

// Base64 encoded SVG for B1 logo
const B1_LOGO_BASE64 = "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iODQiIGhlaWdodD0iODQiIHZpZXdCb3g9IjAgMCA4NCA4NCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cGF0aCBkPSJNMTMgMzJDMTMgMjAuOTU0MyAyMS45NTQzIDEyIDMzIDEyQzQ0LjA0NTcgMTIgNTMgMjAuOTU0MyA1MyAzMkM1MyA0My4wNDU3IDQ0LjUgNDcuNSAzMyA1Mkg1M0M1MyA2My4wNDU3IDQ0LjA0NTcgNzIgMzMgNzJDMjEuOTU0MyA3MiAxMyA2My4wNDU3IDEzIDUyQzEzIDQwLjk1NDMgMjIuNSAzNCAzMyAzMkgxM1oiIGZpbGw9IndoaXRlIi8+PHBhdGggZD0iTTUzIDcyQzY0LjczMjQgNjcuMDk3NyA3MyA1NS41MTE3IDczIDQyQzczIDI4LjQ4ODMgNjQuNzMyNCAxNi45MDIzIDUzIDEyVjcyWiIgZmlsbD0id2hpdGUiLz48L3N2Zz4=";

// Mask style for B1 logo
const maskStyle = {
  WebkitMaskImage: `url('${B1_LOGO_BASE64}')`,
  WebkitMaskSize: '120vw',
  WebkitMaskPosition: 'center',
  WebkitMaskRepeat: 'no-repeat',
  maskImage: `url('${B1_LOGO_BASE64}')`,
  maskSize: '120vw',
  maskPosition: 'center',
  maskRepeat: 'no-repeat',
} as const;

// Grid configuration
const GRID_CONFIG = {
  background: {
    color: "rgb(216, 180, 254)", // Light purple
    maxOpacity: 0.15,
    flickerChance: 0.12,
    squareSize: 4,
    gridGap: 4,
  },
  logo: {
    color: "rgb(192, 132, 252)", // Medium light purple
    maxOpacity: 0.65,
    flickerChance: 0.18,
    squareSize: 3,
    gridGap: 6,
  },
} as const;

function FlickeringGridBackground() {
  return (
    <>
      <FlickeringGrid
        className="absolute inset-0 z-0 [mask-image:radial-gradient(1000px_circle_at_center,white,transparent)]"
        {...GRID_CONFIG.background}
      />
      <div 
        className="absolute inset-0 z-0 translate-y-[2vh]" 
        style={{
          ...maskStyle,
          animation: 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        }}
      >
        <FlickeringGrid {...GRID_CONFIG.logo} />
      </div>
    </>
  );
}

// ===================== HERO =====================
interface HeroProps {
  title: string;
  description: string;
  ctaButtons?: Array<{ text: string; href: string; primary?: boolean }>;
}

export default function Hero({
  title,
  description,
  ctaButtons = [
    { text: "Get My Quote", href: "#contact", primary: true },
    { text: "View recent sites", href: "#examples" }
  ],
}: HeroProps) {
  const sectionRef = useRef<HTMLElement | null>(null);
  const headerRef = useRef<HTMLHeadingElement | null>(null);
  const paraRef = useRef<HTMLParagraphElement | null>(null);
  const ctaRef = useRef<HTMLDivElement | null>(null);

  useGSAP(
    () => {
      if (!headerRef.current) return;

      document.fonts.ready.then(() => {
        const split = new SplitText(headerRef.current!, {
          type: "lines",
          wordsClass: "lines",
        });

        gsap.set(split.lines, {
          filter: "blur(16px)",
          yPercent: 30,
          autoAlpha: 0,
          scale: 1.06,
          transformOrigin: "50% 100%",
        });

        if (paraRef.current) {
          gsap.set(paraRef.current, { autoAlpha: 0, y: 8 });
        }
        if (ctaRef.current) {
          gsap.set(ctaRef.current, { autoAlpha: 0, y: 8 });
        }

        const tl = gsap.timeline({
          defaults: { ease: "power3.out" },
        });

        tl.to(
          split.lines,
          {
            filter: "blur(0px)",
            yPercent: 0,
            autoAlpha: 1,
            scale: 1,
            duration: 0.9,
            stagger: 0.15,
          },
          0.0,
        );

        if (paraRef.current) {
          tl.to(paraRef.current, { autoAlpha: 1, y: 0, duration: 0.5 }, "-=0.45");
        }
        if (ctaRef.current) {
          tl.to(ctaRef.current, { autoAlpha: 1, y: 0, duration: 0.5 }, "-=0.35");
        }
      });
    },
    { scope: sectionRef },
  );

  return (
    <section ref={sectionRef} className="relative min-h-screen w-screen overflow-hidden bg-white">
      <FlickeringGridBackground />

      {/* Large BASE ONE text - stacks left-aligned on mobile, inline centered on desktop */}
      <div className="absolute top-4 sm:top-4 md:top-6 left-0 w-full z-20 flex justify-start md:justify-center overflow-hidden px-6 sm:px-8 md:px-8 lg:px-10">
        <div className="text-[28vw] sm:text-[26vw] md:text-[22vw] lg:text-[20vw] xl:text-[19vw] font-bold leading-[0.85] md:leading-none tracking-tighter text-transparent text-left md:text-center md:whitespace-nowrap" style={{
          WebkitTextStroke: '2px rgb(147, 51, 234)',
          letterSpacing: '-0.05em'
        }}>
          <span className="block md:inline">BASE</span>{" "}
          <span className="block md:inline">ONE</span>
        </div>
      </div>

      <div className="relative mx-auto max-w-7xl px-6 pb-16 sm:pb-20 md:pb-24 md:px-10 lg:px-16 z-10 min-h-screen flex items-end">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 w-full items-end">
          {/* Text Content - Left Side */}
          <div className="flex flex-col items-start gap-4 sm:gap-6 max-w-2xl">
            {/* Trust Badge */}
            <motion.div 
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="flex flex-row items-center justify-center sm:justify-start gap-2 mb-4"
            >
              <div className="flex gap-0.5">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    className="w-4 h-4 fill-yellow-400 text-yellow-400"
                    strokeWidth={0}
                  />
                ))}
              </div>
              <span className="text-sm font-medium text-gray-600">
                Specializing in Trade & Construction
              </span>
            </motion.div>

            <motion.h1 
              ref={headerRef}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="text-left text-4xl sm:text-5xl md:text-6xl font-extralight leading-[1.1] tracking-tight text-black"
            >
              {title}
            </motion.h1>

            <motion.p 
              ref={paraRef}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
              className="text-left text-base sm:text-lg font-light leading-relaxed tracking-tight text-black/75 max-w-xl"
            >
              {description}
            </motion.p>

            <div ref={ctaRef} className="flex flex-wrap items-center gap-3 pt-2">
              {ctaButtons.map((button, index) => (
                <a
                  key={index}
                  href={button.href}
                  style={!button.primary ? { backgroundColor: 'white', color: 'black' } : undefined}
                  className={`rounded-2xl border px-5 py-3 text-sm font-light tracking-tight transition-colors focus:outline-none focus:ring-2 duration-300 ${
                    button.primary
                      ? "bg-purple-600 text-white border-purple-600 hover:bg-purple-700 focus:ring-purple-300"
                      : "border-purple-300 hover:bg-purple-50 focus:ring-purple-300"
                  }`}
                >
                  {button.text}
                </a>
              ))}
            </div>
          </div>

          {/* iPhone Stack Showcase - Right Side (Hidden on Mobile) */}
          <motion.div 
            className="hidden lg:flex justify-center items-center relative"
          >
            {/* Stack Container */}
            <div className="relative w-full max-w-[320px] h-[600px]">
              {/* Background Phone - Left */}
              <motion.div
                initial={{ opacity: 0, x: -30, y: -20 }}
                animate={{ 
                  opacity: 0.7, 
                  x: -40,
                  y: -30,
                }}
                transition={{ 
                  opacity: { duration: 0.6, delay: 0.4 },
                  x: { duration: 0.6, delay: 0.4 },
                  y: { duration: 0.6, delay: 0.4 },
                }}
                className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-10"
              >
                <IPhone 
                  imageSrc="/Electrical.png"
                  variant="light"
                  className="w-full max-w-[240px] opacity-80"
                />
              </motion.div>

              {/* Background Phone - Right */}
              <motion.div
                initial={{ opacity: 0, x: 30, y: 20 }}
                animate={{ 
                  opacity: 0.7, 
                  x: 40,
                  y: 40,
                }}
                transition={{ 
                  opacity: { duration: 0.6, delay: 0.5 },
                  x: { duration: 0.6, delay: 0.5 },
                  y: { duration: 0.6, delay: 0.5 },
                }}
                className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-20"
              >
                <IPhone 
                  imageSrc="/Architectural.png"
                  variant="light"
                  className="w-full max-w-[240px] opacity-80"
                />
              </motion.div>

              {/* Main Phone - Center (Front) */}
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ 
                  opacity: 1, 
                  scale: 1,
                  y: [0, -10, 0],
                }}
                transition={{ 
                  opacity: { duration: 0.8, delay: 0.6 },
                  scale: { duration: 0.8, delay: 0.6 },
                  y: {
                    duration: 3,
                    repeat: Infinity,
                    ease: "easeInOut",
                    delay: 1.2,
                  }
                }}
                className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-30"
              >
                <IPhone 
                  imageSrc="/iphone landscaping.jpg"
                  variant="light"
                  className="w-full max-w-[280px]"
                />
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>

      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-white/40 to-transparent z-10" />
    </section>
  );
}
