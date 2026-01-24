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
      {/* iPhone 15 Pro Frame */}
      <div className="relative w-full max-w-[300px] mx-auto">
        {/* Device Frame */}
        <div className="relative rounded-[3rem] border-[14px] border-black bg-black shadow-2xl overflow-hidden">
          {/* Screen */}
          <div className="relative w-full aspect-[9/19.5] bg-white rounded-[2.5rem] overflow-hidden">
            {/* Dynamic Island */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[100px] h-[30px] bg-black rounded-b-3xl z-10" />
            
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

        {/* Volume Buttons */}
        <div className="absolute -left-[3px] top-[120px] w-[3px] h-[30px] bg-black rounded-l" />
        <div className="absolute -left-[3px] top-[160px] w-[3px] h-[30px] bg-black rounded-l" />
        
        {/* Power Button */}
        <div className="absolute -right-[3px] top-[140px] w-[3px] h-[60px] bg-black rounded-r" />
      </div>
    </div>
  );
}
