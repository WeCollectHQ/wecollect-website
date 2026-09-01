import Image from "next/image";

import { Button } from "@/components/Button";
import { Container } from "@/components/Container";
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

      <Container className="relative z-10 pt-20 md:pt-24 lg:pt-28">
        {/* Eyebrow */}
        <div className="inline-flex items-center gap-2 bg-[#272776] px-4 py-2">
          <span className="h-2 w-2 rounded-full bg-[#FDE93D]" />

          <span className="text-[8px] text-[#FDE93D] md:text-[12px] font-medium uppercase leading-4.5 tracking-wide">
            Data tool and infrastructure for African contexts
          </span>
        </div>

        {/* Heading */}
        <h1 className="mt-6 md:mt-8 font-merriweather font-bold text-[32px] text-[#E9E9EF] md:text-[60px] leading-10 md:leading-18 tracking-[-0.5%] md:tracking-[-2%]">
          Run field operation and
          <br className="hidden lg:block" />
          data collection in Africa
        </h1>

        {/* Description */}
        <p className="mt-6 md:mt-8 text-[14px] text-[#B9B9CC] md:text-[18px] font-medium leading-5.5 md:leading-7.5">
          WeCollect enables organizations to run field operations and gather
          trusted data <br className="hidden lg:block" /> across Africa,
          combining scalable technology and AI-powered analytics for{" "}
          <br className="hidden lg:block" /> faster reporting, actionable
          insights, and better decisions.
        </p>

        {/* Buttons */}
        <div className="mt-6 md:mt-8 flex items-center gap-3">
          <Button href="/signup" variant="secondary" size="lg">
            Get Started
          </Button>

          <Button
            href="/demo"
            variant="outline-white"
            size="lg"
            icon={<ArrowUpRightIcon />}
          >
            Book a Demo
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
