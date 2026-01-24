"use client";

import React from "react";
import { cn } from "@/lib/utils";

interface IPhoneProps {
  className?: string;
  imageSrc?: string;
  children?: React.ReactNode;
}

export function IPhone({
  className,
  imageSrc,
  children,
}: IPhoneProps) {
  return (
    <div className={cn("relative mx-auto", className)}>
      {/* iPhone Frame */}
      <div className="relative w-full max-w-[300px] mx-auto">
        {/* Device Frame - Reduced border from 14px to 8px */}
        <div className="relative rounded-[2.5rem] border-[8px] border-black bg-black shadow-2xl overflow-hidden">
          {/* Screen */}
          <div className="relative w-full aspect-[9/19.5] bg-white rounded-[2rem] overflow-hidden">
            {/* Notch - Made smaller */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[80px] h-[24px] bg-black rounded-b-3xl z-10" />
            
            {/* Content */}
            <div className="relative w-full h-full">
              {imageSrc ? (
                <img
                  src={imageSrc}
                  alt="iPhone screenshot"
                  className="w-full h-full object-cover"
                />
              ) : (
                children
              )}
            </div>
          </div>
        </div>

        {/* Volume Buttons - Thinner */}
        <div className="absolute -left-[2px] top-[120px] w-[2px] h-[26px] bg-black rounded-l" />
        <div className="absolute -left-[2px] top-[155px] w-[2px] h-[26px] bg-black rounded-l" />
        
        {/* Power Button - Thinner */}
        <div className="absolute -right-[2px] top-[140px] w-[2px] h-[50px] bg-black rounded-r" />
      </div>
    </div>
  );
}
