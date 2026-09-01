import Image from "next/image";

import { Container } from "@/components/common/Container";
import { ArrowUpRightIcon } from "@/assets/svgs";

import ManWorkingLaptop from "@/assets/pngs/man-working-laptop.png";

export function DemoHero() {
  return (
    <section className="relative overflow-hidden bg-[#1D1D42] text-white">
      {/* Background Angled Shapes (matching design closely) */}
      <div className="absolute inset-0 z-0">
        <div className="absolute -right-[10%] -top-[20%] bottom-0 w-[45%] origin-bottom-right -skew-x-12 bg-[#252554] hidden md:block" />
        <div className="absolute -left-[10%] bottom-0 top-[20%] w-[35%] origin-top-left -skew-x-12 bg-[#252554] hidden md:block" />
      </div>

      <Container>
        <div
          className="
            relative
            z-10
            flex
            min-h-[660px]
            flex-col
            justify-center
            gap-12
            py-20
            md:flex-row
            md:items-center
            md:gap-16
            lg:min-h-[700px]
            lg:gap-[90px]
            lg:py-[80px]
          "
        >
          {/* LEFT CONTENT */}
          <div
            className="
              relative
              w-full
              max-w-[570px]
              shrink-0
              md:w-[50%]
              lg:w-[520px]
            "
          >
            {/* Eyebrow */}
            <div
              className="
                inline-flex
                items-center
                gap-2
                bg-[#2A2A61]
                px-4
                py-2
                text-[10px]
                font-medium
                uppercase
                text-[#FDE93D]
              "
            >
              <span className="h-2 w-2 rounded-full bg-[#FDE93D]" />
              <span>Book a Demo</span>
            </div>

            {/* Heading */}
            <h1
              className="
                mt-6
                max-w-[620px]
                font-merriweather
                text-[40px]
                font-bold
                leading-[1.12]
                tracking-[-1.5%]
                text-[#F8F8FF]
                sm:text-[46px]
                md:text-[48px]
                lg:text-[50px]
                xl:text-[54px]
              "
            >
              Let's talk about your Field Operations
            </h1>

            {/* Description */}
            <p
              className="
                mt-6
                max-w-[540px]
                text-[15px]
                font-normal
                leading-[1.75]
                text-[#BDBDD7]
                md:text-[16px]
              "
            >
              Whether you're collecting data, managing field teams, or verifying activity across multiple locations, we're here to help. Tell us what you're working on, and we'll show you how WeCollect can help you run smarter, more reliable field operations.
            </p>

            {/* CTA */}
            <div className="mt-8">
              <a
                href="/contact"
                className="
                  inline-flex
                  h-[52px]
                  items-center
                  justify-center
                  gap-2
                  bg-white
                  px-7
                  text-[15px]
                  font-medium
                  text-[#4B4BDB]
                  transition-colors
                  hover:bg-[#F2F2F2]
                "
              >
                Contact Us
                <ArrowUpRightIcon className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* RIGHT IMAGE */}
          <div
            className="
              relative
              w-full
              max-w-[555px]
              md:w-[50%]
              lg:max-w-[555px]
            "
          >
            <div className="relative aspect-square w-full overflow-hidden">
              <Image
                src={ManWorkingLaptop}
                alt="Man working on field operations"
                fill
                priority
                className="object-cover object-center"
              />
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
