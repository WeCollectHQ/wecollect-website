import Image from "next/image";

import { Button } from "@/components/Button";
import { Container } from "@/components/Container";
import HomeHeroBgImage from "@/assets/pngs/home-hero-bg-image.webp";
import HomeHeroDashboardImage from "@/assets/pngs/wecollect loop 1.png";
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
        <div className="inline-flex items-center gap-2 bg-[#3A3A8B] px-3 py-1.5">
          <span className="h-2 w-2 rounded-full bg-[#FDE93D]" />

          <span className="text-[9px] font-semibold uppercase leading-3 tracking-wide text-[#FDE93D] md:text-[10px]">
            Data tool and infrastructure for African contexts
          </span>
        </div>

        {/* Heading */}
        <h1 className="mt-7 max-w-145 font-merriweather text-[40px] font-bold leading-[1.08] tracking-[-1.5%] text-[#E9E9EF] md:text-[52px] lg:text-[56px]">
          Run field operation and
          <br />
          data collection in Africa
        </h1>

        {/* Description */}
        <p className="mt-6 max-w-130 text-[14px] font-medium leading-6 text-[#B9B9CC] md:text-[15px] md:leading-6.5">
          WeCollect enables organizations to run field operations and gather
          trusted data across Africa, combining scalable technology and
          AI-powered analytics for faster reporting, actionable insights, and
          better decisions.
        </p>

        {/* Buttons */}
        <div className="mt-7 flex items-center gap-3">
          <Button href="/signup" variant="secondary" size="sm">
            Get Started
          </Button>

          <Button
            href="/demo"
            variant="outline-white"
            size="sm"
            icon={<ArrowUpRightIcon />}
          >
            Book a Demo
          </Button>
        </div>

        {/* Dashboard */}
        <div className="relative mx-auto mt-24 w-full max-w-200 md:mt-28 lg:mt-24">
          <Image
            src={HomeHeroDashboardImage}
            alt="WeCollect field operations dashboard"
            priority
            className="h-auto w-full"
          />
        </div>
      </Container>
    </section>
  );
}
