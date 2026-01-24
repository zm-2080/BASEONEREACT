"use client";

import React from "react";
import { cn } from "@/lib/utils";

interface IPhoneProps {
  className?: string;
  imageSrc?: string;
  children?: React.ReactNode;
  variant?: "dark" | "light";
}

export function IPhone({
  className,
  imageSrc,
  children,
  variant = "light",
}: IPhoneProps) {
  const frameColor = variant === "dark" ? "border-black bg-black" : "border-gray-300 bg-gray-200";
  const buttonColor = variant === "dark" ? "bg-black" : "bg-gray-300";
  
  return (
    <div className={cn("relative mx-auto", className)}>
      {/* iPhone 15 Pro Frame */}
      <div className="relative w-full max-w-[300px] mx-auto">
        {/* Device Frame */}
        <div className={cn("relative rounded-[3rem] border-[14px] shadow-2xl overflow-hidden", frameColor)}>
          {/* Screen */}
          <div className="relative w-full aspect-[9/19.5] bg-white rounded-[2.5rem] overflow-hidden">
            {/* Dynamic Island */}
            <div className={cn("absolute top-0 left-1/2 -translate-x-1/2 w-[100px] h-[30px] rounded-b-3xl z-10", variant === "dark" ? "bg-black" : "bg-gray-800")} />
            
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
        <div className={cn("absolute -left-[3px] top-[120px] w-[3px] h-[30px] rounded-l", buttonColor)} />
        <div className={cn("absolute -left-[3px] top-[160px] w-[3px] h-[30px] rounded-l", buttonColor)} />
        
        {/* Power Button */}
        <div className={cn("absolute -right-[3px] top-[140px] w-[3px] h-[60px] rounded-r", buttonColor)} />
      </div>
    </div>
  );
}
