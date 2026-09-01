import Image, { StaticImageData } from "next/image";

import { Button } from "@/components/common/Button";
import { Container } from "@/components/common/Container";
import { ArrowUpRightIcon } from "@/assets/svgs";

import PlatformHeroBgImage from "@/assets/pngs/platform-hero-bg-image.webp";

export interface SolutionHeroProps {
  eyebrow: string;
  title: string | React.ReactNode;
  description: string | React.ReactNode;
  image: string | StaticImageData;
  imageAlt: string;
  primaryButtonText?: string;
  primaryButtonHref?: string;
  actions?: React.ReactNode;
  imageOverlay?: React.ReactNode;
}

export function SolutionHero({
  eyebrow,
  title,
  description,
  image,
  imageAlt,
  primaryButtonText = "Book a Demo",
  primaryButtonHref = "/demo",
  actions,
  imageOverlay,
}: SolutionHeroProps) {
  return (
    <section className="relative overflow-hidden bg-[#202064] text-white">
      {/* Background */}
      <Image
        src={PlatformHeroBgImage}
        alt=""
        fill
        priority
        className="pointer-events-none absolute inset-0 h-full w-full object-cover object-center"
      />

      <Container>
        <div
          className="
            relative
            flex
            min-h-[660px]
            flex-col
            justify-center
            gap-12
            py-20
            md:flex-row
            md:items-center
            md:gap-16
            lg:min-h-[663px]
            lg:gap-[105px]
            lg:py-[70px]
          "
        >
          {/* LEFT CONTENT */}
          <div
            className="
              relative
              z-10
              w-full
              max-w-[570px]
              shrink-0
              md:w-[52%]
              lg:w-[540px]
            "
          >
            {/* Eyebrow */}
            <div
              className="
                inline-flex
                items-center
                gap-2
                bg-[#292970]
                px-4
                py-2.5
                text-[11px]
                font-medium
                uppercase
                text-[#FFF000]
              "
            >
              <span className="h-2.5 w-2.5 rounded-full bg-[#FFF000]" />

              <span>{eyebrow}</span>
            </div>

            {/* Heading */}
            <h1
              className="
                mt-8
                max-w-[620px]
                font-merriweather
                text-[42px]
                font-bold
                leading-[1.12]
                tracking-[-1.5%]
                text-[#F8F8FF]
                sm:text-[48px]
                md:text-[52px]
                lg:text-[50px]
                xl:text-[52px]
              "
            >
              {title}
            </h1>

            {/* Description */}
            <p
              className="
                mt-8
                max-w-[590px]
                text-[17px]
                font-medium
                leading-[1.65]
                text-[#BDBDD7]
                md:text-[18px]
              "
            >
              {description}
            </p>

            {/* CTA */}
            <div className="mt-8">
              {actions ? (
                actions
              ) : (
                <Button
                  href={primaryButtonHref}
                  variant="secondary"
                  size="lg"
                  icon={<ArrowUpRightIcon />}
                >
                  {primaryButtonText}
                </Button>
              )}
            </div>
          </div>

          {/* RIGHT IMAGE */}
          <div
            className="
              relative
              z-10
              w-full
              max-w-[555px]
              md:w-[48%]
              lg:max-w-[555px]
            "
          >
            <div className="relative aspect-square w-full overflow-hidden">
              <Image
                src={image}
                alt={imageAlt}
                fill
                priority
                className="object-cover"
              />
            </div>
            {imageOverlay}
          </div>
        </div>
      </Container>
    </section>
  );
}
