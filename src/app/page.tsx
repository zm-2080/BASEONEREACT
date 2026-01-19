import React from "react";
import {
  FullScreenScrollFX,
  FullScreenFXAPI,
} from "@/components/ui/full-screen-scroll-fx";

const sections = [
  {
    leftLabel: "Silence",
    title: <>Absence</>,
    rightLabel: "Silence",
    background:
      "https://images.unsplash.com/photo-1448375240586-882707db888b?auto=format&fit=crop&w=2400&q=80",
  },
  {
    leftLabel: "Essence",
    title: <>Stillness</>,
    rightLabel: "Essence",
    background:
      "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=2400&q=80",
  },
  {
    leftLabel: "Rebirth",
    title: <>Growth</>,
    rightLabel: "Rebirth",
    background:
      "https://images.unsplash.com/photo-1469474968028-56623f02e42e?auto=format&fit=crop&w=2400&q=80",
  },
  {
    leftLabel: "Change",
    title: <>Opportunity</>,
    rightLabel: "Change",
    background:
      "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?auto=format&fit=crop&w=2400&q=80",
  },
];

export default function Home() {
  const apiRef = React.useRef<FullScreenFXAPI>(null);

  return (
    <FullScreenScrollFX
      sections={sections}
      header={
        <>
          <div>The Creative</div>
          <div>Process</div>
        </>
      }
      footer={<div />}
      showProgress
      durations={{ change: 0.7, snap: 800 }}
      apiRef={apiRef}
    />
  );
}
