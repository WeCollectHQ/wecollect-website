"use client";

import dynamic from "next/dynamic";
import heroAnimation from "@/assets/pngs/WeCollect-hero-video.json";

// lottie-react v3: no default export, uses `src` not `animationData`.
// Disable SSR since lottie reads DOM/window APIs.
const Lottie = dynamic(
  () => import("lottie-react").then((mod) => mod.Lottie) as never,
  {
    ssr: false,
    loading: () => (
      <div className="h-100 w-full animate-pulse bg-white/5 rounded-2xl" />
    ),
  },
) as React.FC<{
  src: unknown;
  loop?: boolean;
  autoplay?: boolean;
  className?: string;
}>;

export function HeroAnimation() {
  return (
    <div className="w-full">
      <Lottie src={heroAnimation} loop autoplay className="h-auto w-full" />
    </div>
  );
}
