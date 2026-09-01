import Image from "next/image";

import { Container } from "@/components/common/Container";
import { Button } from "@/components/common/Button";
import { ArrowUpRightIcon } from "@/assets/svgs";
import DataCollectionHeroImage from "@/assets/pngs/data-collection-hero-image.png";
import PlatformHeroBgImage from "@/assets/pngs/platform-hero-bg-image.webp";

export function DataCollectionHero() {
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
          <div className="max-w-[540px]">
            {/* Eyebrow */}
            <div className="inline-flex items-center gap-2 bg-[#30308A] px-3 py-2">
              <span className="h-2 w-2 rounded-full bg-[#FDE93D]" />

              <span
                className="
                  text-[10px]
                  font-medium
                  uppercase
                  leading-4
                  tracking-wide
                  text-[#FDE93D]
                  md:text-[12px]
                "
              >
                Data Collection
              </span>
            </div>

            {/* Heading */}
            <h1
              className="
                mt-7
                font-merriweather
                text-[36px]
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
              Survey-ready data
              <br />
              collection tool.
            </h1>

            {/* Description */}
            <p
              className="
                mt-7
                max-w-[540px]
                text-[15px]
                font-medium
                leading-6
                text-[#B9B9CC]
                md:text-[16px]
                md:leading-6.5
              "
            >
              Structured, GIS-validated, QA-clean data — collected at scale.
            </p>

            {/* CTA */}
            <div className="mt-8 flex">
              <Button
                href="/demo"
                variant="secondary"
                size="lg"
                icon={<ArrowUpRightIcon />}
                className="shrink-0"
              >
                Book a Demo
              </Button>
            </div>
          </div>

          {/* RIGHT IMAGE */}
          <div className="relative mx-auto w-full max-w-[446px]">
            <Image
              src={DataCollectionHeroImage}
              alt="WeCollect field agent collecting data"
              width={446}
              height={492}
              priority
              className="h-auto w-full object-cover"
            />
          </div>
        </div>
      </Container>
    </section>
  );
}
