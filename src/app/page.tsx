"use client";

import React from "react";
import {
  FullScreenScrollFX,
  FullScreenFXAPI,
} from "@/components/ui/full-screen-scroll-fx";

const sections = [
  {
    leftLabel: "Base One",
    title: <>Websites that win jobs</>,
    rightLabel: "$450 Build",
    background:
      "https://images.unsplash.com/photo-1497215728101-856f4ea42174?auto=format&fit=crop&w=2400&q=80",
  },
  {
    leftLabel: "Fast Turnaround",
    title: <>Live in 3–5 business days</>,
    rightLabel: "No bloat",
    background:
      "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?auto=format&fit=crop&w=2400&q=80",
  },
  {
    leftLabel: "Custom Design",
    title: <>Designed for local customers</>,
    rightLabel: "Mobile First",
    background:
      "https://images.unsplash.com/photo-1557804506-669a67965ba0?auto=format&fit=crop&w=2400&q=80",
  },
  {
    leftLabel: "$20/mo",
    title: <>Hosting, SSL, edits included</>,
    rightLabel: "Cancel anytime",
    background:
      "https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=2400&q=80",
  },
];

export default function Home() {
  const apiRef = React.useRef<FullScreenFXAPI>(null);

  return (
    <FullScreenScrollFX
      sections={sections}
      header={
        <>
          <div>Base One</div>
          <div>Web Studio</div>
        </>
      }
      footer={<div>Request a proposal • hello@baseone.au</div>}
      showProgress
      durations={{ change: 0.7, snap: 800 }}
      apiRef={apiRef}
      colors={{
        text: "rgba(245,245,245,0.95)",
        overlay: "rgba(7,9,11,0.65)",
        pageBg: "#07090b",
        stageBg: "#07090b",
      }}
    />
  );
}
