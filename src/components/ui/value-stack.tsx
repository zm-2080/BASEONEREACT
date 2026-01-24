"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Check } from "lucide-react";

interface ValueItem {
  title: string;
  value: string;
}

const valueItems: ValueItem[] = [
  { title: "Custom Design (No Templates)", value: "$1,500" },
  { title: "Mobile Speed Optimization", value: "$500" },
  { title: "Google Business Profile Setup", value: "$300" },
  { title: ""Get a Quote" Lead Funnel", value: "$500" },
];

export default function ValueStack() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.5,
        ease: "easeOut",
      },
    },
  };

  const totalVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        delay: 0.8,
        ease: "easeOut",
      },
    },
  };

  return (
    <section className="w-full px-4 sm:px-6 lg:px-8 py-10 sm:py-14 bg-white">
      <div className="mx-auto max-w-6xl">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          {/* Left Column - Text */}
          <div>
            <div className="text-xs uppercase tracking-[0.3em] text-black/50 mb-3">
              // The Value Stack
            </div>
            <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight text-black leading-tight">
              Everything You Need to Rank & Convert
            </h2>
          </div>

          {/* Right Column - List */}
          <div ref={ref}>
            <motion.div
              variants={containerVariants}
              initial="hidden"
              animate={isInView ? "visible" : "hidden"}
              className="space-y-4"
            >
              {valueItems.map((item, index) => (
                <motion.div
                  key={index}
                  variants={itemVariants}
                  className="flex items-start gap-4 p-4 rounded-xl bg-gray-50 border border-purple-200"
                >
                  <div className="flex-shrink-0 mt-0.5">
                    <div className="w-6 h-6 rounded-full bg-purple-600 flex items-center justify-center">
                      <Check className="w-4 h-4 text-white" strokeWidth={3} />
                    </div>
                  </div>
                  <div className="flex-1 flex items-center justify-between gap-3">
                    <span className="text-base sm:text-lg font-medium text-black">
                      {item.title}
                    </span>
                    <span className="text-sm sm:text-base text-black/40 whitespace-nowrap">
                      (Value: {item.value})
                    </span>
                  </div>
                </motion.div>
              ))}

              {/* Total Value */}
              <motion.div
                variants={totalVariants}
                className="pt-4 border-t-2 border-purple-200 mt-6"
              >
                <div className="flex items-center justify-between px-4">
                  <span className="text-xl sm:text-2xl font-bold text-black">
                    Total Value:
                  </span>
                  <span className="text-xl sm:text-2xl font-bold text-purple-600">
                    ~$2,800+
                  </span>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
