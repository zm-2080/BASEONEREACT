"use client";

import { motion } from "framer-motion";

export default function NotificationBar() {
  const scrollToContact = () => {
    document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="sticky top-0 z-50 w-full bg-gradient-to-r from-purple-900/80 to-purple-600/80 backdrop-blur-md border-b border-white/10 text-white py-3 px-4 sm:px-6"
    >
      <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-center sm:justify-between gap-2 sm:gap-4">
        {/* Notification Text */}
        <p className="text-xs sm:text-sm md:text-base font-light tracking-tight text-center sm:text-left">
          <span className="mr-1 sm:mr-2">⚠️</span>
          <span className="font-semibold">Launch Offer:</span> $1,000 OFF for first 3 clients
        </p>

        {/* CTA Button - Now visible on mobile */}
        <button
          onClick={scrollToContact}
          className="inline-flex items-center px-3 py-1.5 sm:px-4 sm:py-2 bg-white text-purple-600 rounded-lg text-xs sm:text-sm font-semibold hover:bg-purple-50 transition-colors whitespace-nowrap shadow-lg"
        >
          Get Quote →
        </button>
      </div>
    </motion.div>
  );
}
