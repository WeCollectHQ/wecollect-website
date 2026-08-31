import Image from "next/image";

import { Container } from "@/components/common/Container";
import { Button } from "@/components/common/Button";
import { ArrowUpRightIcon } from "@/assets/svgs";
import PlatformHeroImage from "@/assets/pngs/platform-hero-image.png";
import PlatformHeroBgImage from "@/assets/pngs/platform-hero-bg-image.webp";

export function PlatformHero() {
  return (
    <section className="relative overflow-hidden bg-[#25256B] text-white">
      {/* Background */}
      <Image
        src={PlatformHeroBgImage}
        alt=""
        fill
        priority
        className="pointer-events-none absolute inset-0 h-full w-full object-cover object-center"
      />

      <Container className="relative z-10">
        <div
          className="
            grid
            min-h-[600px]
            items-center
            gap-12
            py-16
            md:grid-cols-[1fr_0.9fr]
            md:gap-16
            md:py-20
            lg:min-h-[602px]
            lg:grid-cols-[1fr_0.95fr]
            lg:gap-[80px]
          "
        >
          {/* LEFT CONTENT */}
          <div className="max-w-[520px]">
            {/* Eyebrow */}
            <div className="inline-flex items-center gap-2 bg-[#30308A] px-3 py-2">
              <span className="h-2 w-2 rounded-full bg-[#FDE93D]" />

              <span className="text-[10px] font-medium uppercase leading-4 tracking-wide text-[#FDE93D] md:text-[12px]">
                The Platform
              </span>
            </div>

            {/* Heading */}
            <h1
              className="
                mt-7
                font-merriweather
                text-[34px]
                font-bold
                leading-[1.15]
                tracking-[-0.5%]
                text-[#E9E9EF]
                md:text-[48px]
                md:leading-[1.1]
                md:tracking-[-1%]
                lg:text-[50px]
              "
            >
              Field process
              <br />
              infrastructure,
              <br />
              built for African ground.
            </h1>

            {/* Description */}
            <p
              className="
                mt-6
                max-w-[500px]
                text-[14px]
                font-medium
                leading-5.5
                text-[#B9B9CC]
                md:text-[16px]
                md:leading-6.5
              "
            >
              WeCollect is not a form tool. It&apos;s the full infrastructure
              layer for field operations — from form design to GIS-validated
              data in your dashboard.
            </p>

            {/* Buttons */}
            <div className="mt-7 flex flex-nowrap items-center gap-3">
              <Button
                href="/demo"
                variant="secondary"
                size="lg"
                icon={<ArrowUpRightIcon />}
                className="shrink-0"
              >
                Book a Demo
              </Button>

              <Button
                href="/platform/features"
                variant="outline-white"
                size="lg"
                className="shrink-0 whitespace-nowrap"
              >
                Explore features
              </Button>
            </div>
          </div>

          {/* RIGHT IMAGE */}
          <div className="relative mx-auto w-full max-w-[390px]">
            <Image
              src={PlatformHeroImage}
              alt="WeCollect platform dashboard"
              width={390}
              height={427}
              priority
              className="h-auto w-full object-cover"
            />

            {/* Floating A/C badge */}
            <div
              className="
                absolute
                right-[-10px]
                top-[38%]
                flex
                items-center
                rounded-full
                bg-[#18182F]
                p-1
                shadow-[0_6px_18px_rgba(0,0,0,0.35)]
                md:right-[-14px]
              "
            >
              <span className="flex h-12 w-12 items-center justify-center rounded-full bg-[#FF1DBD] text-[20px] font-normal text-white">
                A
              </span>

              <span className="flex h-12 w-12 items-center justify-center rounded-full bg-[#087BEA] text-[20px] font-normal text-white">
                C
              </span>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
