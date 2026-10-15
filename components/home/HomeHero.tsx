import Image from "next/image";
import type { CSSProperties } from "react";
import { Button } from "@/components/common/Button";
import { Container } from "@/components/common/Container";
import HomeHeroBgImage from "@/assets/pngs/home-hero-bg-image.webp";
import HomeHeroImage from "@/assets/pngs/home-hero-image.webp";
import { ArrowUpRightIcon } from "@/assets/svgs/index";

// Entrance timeline (seconds). Keep it short: everything settles in ~1.6s.
const WORD_START = 0.15;
const WORD_STAGGER = 0.045;

const headingLineOne = "Execute field operations and ground data collection".split(" ");
const headingLineTwo = ["at", "the"];

// Hotspots on the dashboard screenshot (percent of image box) that pulse like
// live submissions arriving from the field.
const dataPings = [
  { left: "82.9%", top: "26.3%", delay: 2.0 }, // Map view icon
  { left: "61.6%", top: "53.7%", delay: 2.6 }, // Location: Enugu
  { left: "61.6%", top: "68.8%", delay: 3.4 }, // Location: Imo
  { left: "74.4%", top: "52%", delay: 4.1 }, // Status: PENDING badge corner
];

const delay = (seconds: number): CSSProperties => ({
  animationDelay: `${seconds}s`,
});

export function HomeHero() {
  let wordIndex = 0;
  const nextWordDelay = () => delay(WORD_START + wordIndex++ * WORD_STAGGER);

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
        <div className="hero-rise inline-flex items-center gap-2 bg-[#272776] px-4 py-2">
          <span className="h-2 w-2 rounded-full bg-[#FDE93D]" />

          <span className="text-[8px] text-[#FDE93D] md:text-[12px] font-medium uppercase leading-4.5 tracking-wide">
            Data tool and infrastructure for African contexts
          </span>
        </div>

        {/* Heading: words reveal one after another */}
        <h1 className="isolate mt-6 md:mt-8 font-merriweather font-bold text-[34px] sm:text-[44px] md:text-[56px] lg:text-[72px] xl:text-[76px] leading-[1.12] tracking-[-0.02em] max-w-5xl mx-auto">
          {headingLineOne.map((word) => (
            <span key={word}>
              <span className="hero-word" style={nextWordDelay()}>
                {word}
              </span>{" "}
            </span>
          ))}
          <br className="hidden md:inline" />
          {headingLineTwo.map((word) => (
            <span key={word}>
              <span className="hero-word" style={nextWordDelay()}>
                {word}
              </span>{" "}
            </span>
          ))}
          <span className="hero-highlight">
            <span className="hero-word" style={nextWordDelay()}>
              speed of now
            </span>
          </span>
        </h1>

        {/* Description */}
        <p
          className="hero-rise mt-6 md:mt-8 text-[15px] text-[#686890] md:text-[20px] font-medium leading-[1.6] md:leading-[1.7] max-w-237.5"
          style={delay(0.75)}
        >
          Wecollect enables organizations data collection and field operations
          across Africa, combining modern technologies and AI-powered analytics
          for faster reporting, actionable insights, and better decisions while
          maintaining high data quality.
        </p>

        {/* Buttons */}
        <div
          className="hero-rise mt-6 md:mt-8 flex flex-col-reverse md:flex-row items-center justify-center gap-3"
          style={delay(0.9)}
        >
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

        {/* Dashboard + Phone: rises from a slight 3D tilt, then pings go live */}
        <div
          className="hero-device relative mx-auto mt-15 md:mt-10 w-full max-w-5xl"
          style={delay(1.05)}
        >
          <Image
            src={HomeHeroImage}
            alt="Wecollect platform dashboard and mobile app"
            className="h-auto w-full"
            priority
          />

          <div aria-hidden="true" className="pointer-events-none absolute inset-0 hidden md:block">
            {dataPings.map((ping) => (
              <span
                key={`${ping.left}-${ping.top}`}
                className="hero-ping"
                style={{ left: ping.left, top: ping.top, ...delay(ping.delay) }}
              />
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}
