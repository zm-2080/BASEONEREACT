"use client";

import React from "react";
import { cn } from "@/lib/utils";

type ShineBorderProps = {
  borderRadius?: number;
  borderWidth?: number;
  duration?: number;
  color?: string | string[];
  className?: string;
  children: React.ReactNode;
};

export function ShineBorder({
  borderRadius = 16,
  borderWidth = 2,
  duration = 14,
  color = "#a855f7",
  className,
  children,
}: ShineBorderProps) {
  return (
    <div
      style={
        {
          "--border-radius": `${borderRadius}px`,
          "--border-width": `${borderWidth}px`,
          "--duration": `${duration}s`,
          "--border-color": Array.isArray(color) ? color.join(", ") : color,
        } as React.CSSProperties
      }
      className={cn(
        "relative overflow-hidden rounded-[--border-radius] bg-white",
        className
      )}
    >
      {/* Animated shine border */}
      <div
        className="absolute inset-0 rounded-[--border-radius] animate-shine"
        style={{
          background: `linear-gradient(90deg, transparent, ${
            Array.isArray(color) ? color[0] : color
          }, transparent)`,
          backgroundSize: "200% 100%",
          animation: `shine var(--duration) infinite linear`,
        }}
      />
      
      {/* Border mask */}
      <div
        className="absolute inset-0 rounded-[--border-radius]"
        style={{
          background: `linear-gradient(90deg, transparent, ${
            Array.isArray(color) ? color[0] : color
          }, transparent)`,
          WebkitMask: `linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)`,
          WebkitMaskComposite: "xor",
          maskComposite: "exclude",
          padding: "var(--border-width)",
          animation: `shine var(--duration) infinite linear`,
        }}
      />
      
      {/* Content container */}
      <div className="relative z-10 h-full w-full rounded-[--border-radius] bg-white">
        {children}
      </div>

      <style jsx>{`
        @keyframes shine {
          0% {
            background-position: -200% 0;
          }
          100% {
            background-position: 200% 0;
          }
        }
      `}</style>
    </div>
  );
}
