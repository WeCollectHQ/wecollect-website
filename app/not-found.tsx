"use client";

import Image from "next/image";
import { Button } from "@/components/common/Button";
import { ArrowUpRightIcon } from "@/assets/svgs";
import PlatformHeroBgImage from "@/assets/pngs/platform-hero-bg-image.webp";

export default function NotFound() {
  return (
    <>
      <style>{`
        footer {
          display: none !important;
        }
      `}</style>

      <div className="relative flex-1 flex flex-col items-center justify-center text-center p-6 text-white min-h-[500px]">
        {/* Background */}
        <div className="absolute inset-0 z-0 bg-[#202064] overflow-hidden">
          <Image
            src={PlatformHeroBgImage}
            alt=""
            fill
            priority
            className="pointer-events-none object-cover object-center"
          />
        </div>

        {/* Content */}
        <div className="relative z-10 w-full max-w-[800px] mx-auto flex flex-col items-center justify-center">
          <div className="relative flex flex-col items-center justify-center mb-6 w-full h-[100px] md:h-[150px]">
            {/* Huge 404 Watermark */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 font-merriweather font-bold text-white/[0.07] select-none leading-none tracking-tight text-[160px] md:text-[240px] lg:text-[320px] z-0 pointer-events-none">
              404
            </div>

            <h2 className="relative z-10 text-[32px] md:text-[40px] lg:text-[44px] font-bold text-white mt-12 md:mt-24">
              Error
            </h2>
          </div>

          <p className="relative z-10 text-[15px] md:text-[17px] text-[#BDBDD7] max-w-[500px] leading-[1.6] mb-10">
            The page you're looking for doesn't exist or has moved. Let's get
            you back to where your field operations are happening.
          </p>

          <div className="relative z-10">
            <Button
              href="/"
              className="!bg-white !text-[#4747D6] hover:!bg-[#FDE93D] hover:!text-[#0D0D26] px-8 md:px-10"
              icon={<ArrowUpRightIcon />}
            >
              Return to Homepage
            </Button>
          </div>
        </div>
      </div>
    </>
  );
}
