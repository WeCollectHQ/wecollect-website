import Image from "next/image";

import { Button } from "@/components/common/Button";
import { Container } from "@/components/common/Container";
import HomeHeroBgImage from "@/assets/pngs/home-hero-bg-image.webp";
import HomeHeroPhoneImage from "@/assets/pngs/home-hero-phone.webp";
import { HeroAnimation } from "./HeroAnimation";
import { ArrowUpRightIcon } from "@/assets/svgs/index";

export function HomeHero() {
  return (
    <section className="relative overflow-hidden bg-[#20205F] text-white">
      {/* Background */}
      <Image
        src={HomeHeroBgImage}
        alt=""
        fill
        priority
        className="absolute inset-0 h-full w-full object-cover object-top"
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-[#20205F]/25" />

      <Container className="relative z-10 pt-20 md:pt-24 lg:pt-28 flex flex-col items-center text-center">
        {/* Eyebrow */}
        <div className="inline-flex items-center gap-2 bg-[#272776] px-4 py-2">
          <span className="h-2 w-2 rounded-full bg-[#FDE93D]" />

          <span className="text-[8px] text-[#FDE93D] md:text-[12px] font-medium uppercase leading-4.5 tracking-wide">
            Data tool and infrastructure for African contexts
          </span>
        </div>

        {/* Heading */}
        <h1 className="mt-6 md:mt-8 font-merriweather font-bold text-[36px] text-[#E9E9EF] md:text-[64px] lg:text-[80px] leading-[1.15] md:leading-[1.15] tracking-[-0.02em] w-full">
          Run field operations and
          <br className="hidden md:block" />
          data collection in Africa
        </h1>

        {/* Description */}
        <p className="mt-6 md:mt-8 text-[15px] text-[#B9B9CC] md:text-[20px] font-medium leading-[1.6] md:leading-[1.7] max-w-[950px]">
          WeCollect enables organizations data collection and field operations
          across Africa, combining modern technologies and AI-powered analytics
          for faster reporting, actionable insights, and better decisions while
          maintaining high data quality.
        </p>

        {/* Buttons */}
        <div className="mt-6 md:mt-8 flex items-center justify-center gap-3">
          <Button href="/signup" variant="secondary" size="lg">
            Get Started
          </Button>

          <Button
            href="/request"
            variant="outline-white"
            size="lg"
            icon={<ArrowUpRightIcon />}
          >
            Make a Data Request
          </Button>
        </div>

        {/* Dashboard + Phone */}
        <div className="relative mx-auto mt-15 md:mt-28 lg:mt-24 mb-[37.89px] md:mb-35.5 w-full max-w-200">
          {/* Lottie dashboard animation */}
          <HeroAnimation />

          {/* Phone overlay — bottom-right, matches Figma */}
          <div className="absolute bottom-5 md:bottom-12 right-0 translate-y-[12%] translate-x-[4%] w-[22%] md:w-[21%]">
            <Image
              src={HomeHeroPhoneImage}
              alt="WeCollect mobile app"
              className="h-auto w-full drop-shadow-2xl"
              priority
            />
          </div>
        </div>
      </Container>
    </section>
  );
}
