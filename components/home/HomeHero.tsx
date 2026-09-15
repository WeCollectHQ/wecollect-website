import Image from "next/image";
import { Button } from "@/components/common/Button";
import { Container } from "@/components/common/Container";
import HomeHeroBgImage from "@/assets/pngs/home-hero-bg-image.webp";
import HomeHeroImage from "@/assets/pngs/home-hero-image.webp";
import { ArrowUpRightIcon } from "@/assets/svgs/index";

export function HomeHero() {
  return (
    <section className="relative overflow-hidden bg-[#FFFFF] text-[#4747D6]">
      {/* Background */}
      <Image
        src={HomeHeroBgImage}
        alt=""
        fill
        priority
        className="absolute inset-0 h-full w-full object-cover object-top"
      />

      <Container className="relative z-10 pt-20 md:pt-24 lg:pt-28 flex flex-col items-center text-center">
        {/* Eyebrow */}
        <div className="inline-flex items-center gap-2 bg-[#272776] px-4 py-2">
          <span className="h-2 w-2 rounded-full bg-[#FDE93D]" />

          <span className="text-[8px] text-[#FDE93D] md:text-[12px] font-medium uppercase leading-4.5 tracking-wide">
            Data tool and infrastructure for African contexts
          </span>
        </div>

        {/* Heading */}
        <h1 className="mt-6 md:mt-8 font-merriweather font-bold text-[36px] text-[#4747D6] md:text-[64px] lg:text-[80px] leading-[1.15] md:leading-[1.15] tracking-[-0.02em] w-full">
          Run field operations and
          <br className="hidden md:block" /> data collection in Africa
        </h1>

        {/* Description */}
        <p className="mt-6 md:mt-8 text-[15px] text-[#1E1E5A] md:text-[20px] font-medium leading-[1.6] md:leading-[1.7] max-w-237.5">
          Wecollect enables organizations data collection and field operations
          across Africa, combining modern technologies and AI-powered analytics
          for faster reporting, actionable insights, and better decisions while
          maintaining high data quality.
        </p>

        {/* Buttons */}
        <div className="mt-6 md:mt-8 flex flex-col-reverse md:flex-row items-center justify-center gap-3">
          <Button
            href="https://app.wecollect.tech/register"
            variant="secondary"
            size="lg"
          >
            Get Started for free
          </Button>

          <Button
            href="/request"
            variant="primary"
            size="lg"
            icon={<ArrowUpRightIcon />}
          >
            Make a Data Request
          </Button>
        </div>

        {/* Dashboard + Phone */}
        <div className="relative mx-auto mt-15 md:mt-28 lg:mt-24 w-full max-w-[1024px]">
          <Image
            src={HomeHeroImage}
            alt="Wecollect platform dashboard and mobile app"
            className="h-auto w-full"
            priority
          />
        </div>
      </Container>
    </section>
  );
}
