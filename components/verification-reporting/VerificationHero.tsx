import Image from "next/image";

import { Button } from "@/components/common/Button";
import { Container } from "@/components/common/Container";
import { ArrowUpRightIcon } from "@/assets/svgs";

import PlatformHeroBgImage from "@/assets/pngs/platform-hero-bg-image.webp";
import VerificationHeroImage from "@/assets/pngs/verification-reporting-hero.png";

export function VerificationHero() {
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
            lg:gap-[110px]
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
                tracking-[0]
                text-[#FFF000]
              "
            >
              <span className="h-2.5 w-2.5 rounded-full bg-[#FFF000]" />

              <span>Verification &amp; Reporting</span>
            </div>

            {/* Heading */}
            <h1
              className="
                mt-8
                max-w-[600px]
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
              Address validation and KYC field checks.
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
              Physical verification at scale — address validation, site visits,
              KYC checks, and asset verification.
            </p>

            {/* CTA */}
            <div className="mt-8">
              <Button
                href="/demo"
                variant="secondary"
                size="lg"
                icon={<ArrowUpRightIcon />}
              >
                Book a Demo
              </Button>
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
            <div className="relative aspect-[1/1] w-full overflow-hidden">
              <Image
                src={VerificationHeroImage}
                alt="Field agent performing address verification"
                fill
                priority
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
