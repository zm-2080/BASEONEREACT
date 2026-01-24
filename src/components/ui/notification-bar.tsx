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
      <div className="max-w-7xl mx-auto flex items-center justify-between gap-4">
        {/* Notification Text */}
        <p className="text-sm sm:text-base font-light tracking-tight flex-1 text-center sm:text-left">
          <span className="mr-2">⚠️</span>
          <span className="font-semibold">Launch Offer:</span> We are taking $1,000 OFF for the first 3 local clients this month.
        </p>

        {/* CTA Button */}
        <button
          onClick={scrollToContact}
          className="hidden sm:inline-flex items-center px-4 py-2 bg-white text-purple-600 rounded-lg text-sm font-semibold hover:bg-purple-50 transition-colors whitespace-nowrap shadow-lg"
        >
          Get Quote →
        </button>
      </div>
    </motion.div>
  );
}
