"use client";

import dynamic from "next/dynamic";
import heroAnimation from "@/assets/pngs/WeCollect-hero-video.json";

const Lottie = dynamic(() => import("lottie-react").then((mod) => mod.Lottie), {
  ssr: false,
  loading: () => <div className="h-[400px] w-full animate-pulse bg-white/5 rounded-2xl"></div>
});

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
