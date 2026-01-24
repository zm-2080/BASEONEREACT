"use client";
import React, { useRef, useEffect, useState } from "react";
import { motion } from "motion/react";
import { cn } from "@/lib/utils";
import { FaEnvelope, FaPhone, FaMapMarkerAlt, FaFacebook, FaInstagram, FaTwitter, FaLinkedin, FaGlobe } from "react-icons/fa";

export const TextHoverEffect = ({
  text,
  duration,
  className,
}: {
  text: string;
  duration?: number;
  automatic?: boolean;
  className?: string;
}) => {
  const svgRef = useRef<SVGSVGElement>(null);
  const [cursor, setCursor] = useState({ x: 0, y: 0 });
  const [hovered, setHovered] = useState(false);
  const [maskPosition, setMaskPosition] = useState({ cx: "50%", cy: "50%" });

  useEffect(() => {
    if (svgRef.current && cursor.x !== null && cursor.y !== null) {
      const svgRect = svgRef.current.getBoundingClientRect();
      const cxPercentage = ((cursor.x - svgRect.left) / svgRect.width) * 100;
      const cyPercentage = ((cursor.y - svgRect.top) / svgRect.height) * 100;
      setMaskPosition({
        cx: `${cxPercentage}%`,
        cy: `${cyPercentage}%`,
      });
    }
  }, [cursor]);

  return (
    <svg
      ref={svgRef}
      width="100%"
      height="100%"
      viewBox="0 0 800 150"
      xmlns="http://www.w3.org/2000/svg"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      onMouseMove={(e) => setCursor({ x: e.clientX, y: e.clientY })}
      className={cn("select-none uppercase cursor-pointer", className)}
    >
      <defs>
        <linearGradient
          id="textGradient"
          gradientUnits="userSpaceOnUse"
          cx="50%"
          cy="50%"
          r="25%"
        >
          {hovered && (
            <>
              <stop offset="0%" stopColor="#9333ea" />
              <stop offset="25%" stopColor="#7c3aed" />
              <stop offset="50%" stopColor="#9333ea" />
              <stop offset="75%" stopColor="#7c3aed" />
              <stop offset="100%" stopColor="#9333ea" />
            </>
          )}
        </linearGradient>

        <motion.radialGradient
          id="revealMask"
          gradientUnits="userSpaceOnUse"
          r="20%"
          initial={{ cx: "50%", cy: "50%" }}
          animate={maskPosition}
          transition={{ duration: duration ?? 0, ease: "easeOut" }}
        >
          <stop offset="0%" stopColor="white" />
          <stop offset="100%" stopColor="black" />
        </motion.radialGradient>
        <mask id="textMask">
          <rect
            x="0"
            y="0"
            width="100%"
            height="100%"
            fill="url(#revealMask)"
          />
        </mask>
      </defs>
      <text
        x="50%"
        y="50%"
        textAnchor="middle"
        dominantBaseline="middle"
        strokeWidth="1"
        fontSize="120"
        className="fill-transparent stroke-neutral-200 font-[helvetica] font-bold dark:stroke-neutral-800"
        style={{ opacity: hovered ? 0.7 : 0 }}
      >
        {text}
      </text>
      <motion.text
        x="50%"
        y="50%"
        textAnchor="middle"
        dominantBaseline="middle"
        strokeWidth="1"
        fontSize="120"
        className="fill-transparent stroke-[#9333ea] font-[helvetica] font-bold 
        dark:stroke-[#9333ea99]"
        initial={{ strokeDashoffset: 2000, strokeDasharray: 2000 }}
        animate={{
          strokeDashoffset: 0,
          strokeDasharray: 2000,
        }}
        transition={{
          duration: 4,
          ease: "easeInOut",
        }}
      >
        {text}
      </motion.text>
      <text
        x="50%"
        y="50%"
        textAnchor="middle"
        dominantBaseline="middle"
        stroke="url(#textGradient)"
        strokeWidth="1"
        fontSize="120"
        mask="url(#textMask)"
        className="fill-transparent font-[helvetica] font-bold"
      >
        {text}
      </text>
    </svg>
  );
};


export const FooterBackgroundGradient = () => {
  return (
    <div
      className="absolute inset-0 z-0"
      style={{
        background:
          "radial-gradient(125% 125% at 50% 10%, #f9fafb66 50%, #9333ea33 100%)",
      }}
    />
  );
};

export default function HoverFooter() {
  // Footer link data - Base One specific
  const footerLinks = [
    {
      title: "Services",
      links: [
        { label: "Custom Design", href: "#services" },
        { label: "Mobile First", href: "#services" },
        { label: "Google Ready", href: "#services" },
        { label: "Local Support", href: "#services" },
      ],
    },
    {
      title: "Resources",
      links: [
        { label: "FAQ", href: "#faq" },
        { label: "Portfolio", href: "#examples" },
        { label: "Privacy Policy", href: "/privacy" },
        {
          label: "Get a quick quote",
          href: "#contact",
          pulse: true,
        },
      ],
    },
  ];

  // Contact info data - Base One specific
  const contactInfo = [
    {
      icon: <FaEnvelope size={18} className="text-purple-600" />,
      text: "hello@baseone.au",
      href: "mailto:hello@baseone.au",
    },
    {
      icon: <FaMapMarkerAlt size={18} className="text-purple-600" />,
      text: "Australia",
    },
  ];

  return (
    <footer className="bg-gray-50 relative h-fit rounded-3xl overflow-hidden m-8 border border-purple-200">
      <div className="max-w-7xl mx-auto p-14 z-40 relative">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 md:gap-8 lg:gap-16 pb-12">
          {/* Brand section */}
          <div className="flex flex-col space-y-4">
            <div className="flex items-center space-x-2">
              <span className="text-black text-3xl font-bold">
                <span className="font-bold">Base</span><span className="opacity-70 font-light">One</span>
              </span>
            </div>
            <p className="text-sm leading-relaxed text-black/60">
              Professional websites for local businesses. $499 build, $30/month support. No bloat, just leads.
            </p>
          </div>

          {/* Footer link sections */}
          {footerLinks.map((section) => (
            <div key={section.title}>
              <h4 className="text-black text-lg font-semibold mb-6">
                {section.title}
              </h4>
              <ul className="space-y-3">
                {section.links.map((link) => (
                  <li key={link.label} className="relative">
                    <a
                      href={link.href}
                      className="text-black/60 hover:text-purple-600 transition-colors"
                    >
                      {link.label}
                    </a>
                    {link.pulse && (
                      <span className="absolute top-0 right-[-10px] w-2 h-2 rounded-full bg-purple-600 animate-pulse"></span>
                    )}
                  </li>
                ))}
              </ul>
            </div>
          ))}

          {/* Contact section */}
          <div>
            <h4 className="text-black text-lg font-semibold mb-6">
              Contact Us
            </h4>
            <ul className="space-y-4">
              {contactInfo.map((item, i) => (
                <li key={i} className="flex items-center space-x-3">
                  {item.icon}
                  {item.href ? (
                    <a
                      href={item.href}
                      className="text-black/60 hover:text-purple-600 transition-colors"
                    >
                      {item.text}
                    </a>
                  ) : (
                    <span className="text-black/60 hover:text-purple-600 transition-colors">
                      {item.text}
                    </span>
                  )}
                </li>
              ))}
            </ul>
          </div>
        </div>

        <hr className="border-t border-black/10 my-8" />

        {/* Footer bottom */}
        <div className="flex flex-col items-center gap-2 text-sm">
          <p className="text-center text-black/60">
            &copy; {new Date().getFullYear()} Base One. All rights reserved.
          </p>
          <p className="text-center text-black/50 text-xs">
            Proudly serving Australian Trades.
          </p>
        </div>
      </div>

      {/* Text hover effect */}
      <div className="lg:flex hidden h-[30rem] -mt-52 -mb-36">
        <TextHoverEffect text="Base One" className="z-50" />
      </div>

      <FooterBackgroundGradient />
    </footer>
  );
}
