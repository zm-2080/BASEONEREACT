"use client";

import { Button } from "@/components/ui/button";
import {
  FaPenRuler,
  FaMobileScreen,
  FaGoogle,
  FaHeadset,
  FaReact,
  FaNodeJs,
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaWordpress,
  FaShopify,
  FaBootstrap,
  FaSass,
  FaGitAlt,
  FaFigma,
  FaChrome,
} from "react-icons/fa";
import {
  SiNextdotjs,
  SiTypescript,
  SiTailwindcss,
  SiVercel,
  SiGoogleanalytics,
} from "react-icons/si";

const iconConfigs = [
  { Icon: FaPenRuler, color: "#f97316", label: "Custom Design" },
  { Icon: FaMobileScreen, color: "#f97316", label: "Mobile First" },
  { Icon: FaGoogle, color: "#4285F4", label: "Google Ready" },
  { Icon: FaHeadset, color: "#f97316", label: "Local Support" },
  { Icon: FaReact, color: "#61DAFB" },
  { Icon: SiNextdotjs, color: "#000000" },
  { Icon: SiTypescript, color: "#3178C6" },
  { Icon: SiTailwindcss, color: "#06B6D4" },
  { Icon: FaHtml5, color: "#E34F26" },
  { Icon: FaCss3Alt, color: "#1572B6" },
  { Icon: FaJs, color: "#F7DF1E" },
  { Icon: SiVercel, color: "#000000" },
  { Icon: SiGoogleanalytics, color: "#F4B400" },
  { Icon: FaWordpress, color: "#21759B" },
  { Icon: FaGitAlt, color: "#F05032" },
  { Icon: FaFigma, color: "#F24E1E" },
];

export default function StackFeatureSection() {
  const orbitCount = 3;
  const orbitGap = 8; // rem between orbits
  const iconsPerOrbit = Math.ceil(iconConfigs.length / orbitCount);

  return (
    <section className="relative max-w-6xl mx-auto my-16 sm:my-24 md:my-32 px-4 sm:px-6 md:pl-10 flex flex-col md:flex-row items-center justify-between min-h-[30rem] border border-white/10 bg-white/5 backdrop-blur-sm overflow-hidden rounded-2xl sm:rounded-3xl">
      {/* Left side: Heading and Text */}
      <div className="w-full md:w-1/2 z-10 py-8 md:py-0">
        <div className="flex items-center gap-3 text-xs uppercase tracking-widest text-white/50 mb-4">
          <span className="h-px w-8 bg-orange-500"></span>
          Why Base One
        </div>
        <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 md:mb-6 text-white leading-tight">
          We strip away the <span className="text-white/40">agency bloat.</span>
        </h2>
        <p className="text-white/60 dark:text-gray-300 mb-6 md:mb-8 max-w-lg text-base sm:text-lg">
          Professional websites built for local businesses. No bloat, just results.
        </p>
        <div className="flex flex-col sm:flex-row items-start sm:items-center gap-3">
          <Button
            variant="default"
            className="bg-[#f97316] text-white hover:bg-[#ea580c]"
            onClick={() => {
              document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
            }}
          >
            Get Started
          </Button>
          <Button
            variant="outline"
            className="border-white/30 text-white hover:bg-white/10"
            onClick={() => {
              document.getElementById("work")?.scrollIntoView({ behavior: "smooth" });
            }}
          >
            View Portfolio
          </Button>
        </div>
      </div>

      {/* Right side: Orbit animation */}
      <div className="relative w-full md:w-1/2 h-[20rem] sm:h-[25rem] md:h-full flex items-center justify-center md:justify-start overflow-hidden mt-8 md:mt-0">
        <div className="relative w-[40rem] sm:w-[50rem] h-[40rem] sm:h-[50rem] md:translate-x-[30%] flex items-center justify-center">
          {/* Center Circle */}
          <div className="w-20 h-20 sm:w-24 sm:h-24 rounded-full bg-white/10 backdrop-blur-md border border-white/20 shadow-lg flex items-center justify-center">
            <FaPenRuler className="w-10 h-10 sm:w-12 sm:h-12 text-orange-500" />
          </div>

          {/* Generate Orbits */}
          {[...Array(orbitCount)].map((_, orbitIdx) => {
            const size = `${10 + orbitGap * (orbitIdx + 1)}rem`; // equal spacing
            const angleStep = (2 * Math.PI) / iconsPerOrbit;

            return (
              <div
                key={orbitIdx}
                className="absolute rounded-full border-2 border-dotted border-white/20"
                style={{
                  width: size,
                  height: size,
                  animation: `spin ${12 + orbitIdx * 6}s linear infinite`,
                }}
              >
                {iconConfigs
                  .slice(orbitIdx * iconsPerOrbit, orbitIdx * iconsPerOrbit + iconsPerOrbit)
                  .map((cfg, iconIdx) => {
                    const angle = iconIdx * angleStep;
                    const x = 50 + 50 * Math.cos(angle);
                    const y = 50 + 50 * Math.sin(angle);

                    return (
                      <div
                        key={iconIdx}
                        className="absolute bg-white/10 backdrop-blur-md border border-white/20 rounded-full p-1.5 sm:p-2 shadow-md hover:scale-110 transition-transform"
                        style={{
                          left: `${x}%`,
                          top: `${y}%`,
                          transform: "translate(-50%, -50%)",
                        }}
                        title={cfg.label}
                      >
                        {cfg.Icon && (
                          <cfg.Icon
                            className="w-6 h-6 sm:w-8 sm:h-8"
                            style={{ color: cfg.color }}
                          />
                        )}
                      </div>
                    );
                  })}
              </div>
            );
          })}
        </div>
      </div>

      {/* Animation keyframes */}
      <style jsx>{`
        @keyframes spin {
          from {
            transform: rotate(0deg);
          }
          to {
            transform: rotate(360deg);
          }
        }
      `}</style>
    </section>
  );
}
