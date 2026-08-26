"use client";

import Lottie from "lottie-react";
import heroAnimation from "@/assets/pngs/WeCollect-hero-video.json";

export function HeroAnimation() {
  return (
    <div className="w-full">
      <Lottie
        animationData={heroAnimation}
        loop
        autoplay
        className="h-auto w-full"
      />
    </div>
  );
}
