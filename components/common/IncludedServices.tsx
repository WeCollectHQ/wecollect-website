import Image, { StaticImageData } from "next/image";
import { Button } from "@/components/common/Button";
import { Container } from "@/components/common/Container";
import { ArrowUpRightIcon } from "@/assets/svgs";

export interface ServiceItem {
  title: string;
  image: StaticImageData | string;
}

export interface IncludedServicesProps {
  eyebrow?: string;
  title?: string;
  services: [ServiceItem, ServiceItem, ServiceItem, ServiceItem];
  ctaText?: string;
  ctaHref?: string;
}

/**
 * Grid is 4 columns × 3 row-units.
 * Images span 2 row-units, labels span 1 row-unit.
 *
 * Col 1 (image col): [Image rows 1-2] [Label row 3]
 * Col 2 (label col): [Label row 1]   [Image rows 2-3]
 * Col 3 (image col): [Image rows 1-2] [Label row 3]
 * Col 4 (label col): [Label row 1]   [Image rows 2-3]
 */
export function IncludedServices({
  eyebrow = "Included Services",
  title = "What's covered",
  services,
  ctaText = "Book a Demo",
  ctaHref = "/demo",
}: IncludedServicesProps) {
  return (
    <section className="bg-[#FFFDF0] text-[#0D0D26]">
      <Container>
        <div className="flex min-h-[310px] flex-col gap-10 py-16 md:min-h-[340px] md:flex-row md:items-center md:gap-12 md:py-20 lg:gap-[100px] lg:py-[65px]">
          {/* LEFT CONTENT */}
          <div className="w-full shrink-0 md:w-[190px] lg:w-[210px]">
            <p className="text-[10px] font-medium uppercase leading-4 text-[#9898B3]">
              {eyebrow}
            </p>

            <h2 className="mt-3 font-merriweather text-[30px] font-bold leading-[1.2] tracking-[-1%] md:text-[34px] lg:text-[38px]">
              {title}
            </h2>

            <div className="mt-8">
              <Button
                href={ctaHref}
                variant="primary"
                size="lg"
                icon={<ArrowUpRightIcon />}
                className="shrink-0"
              >
                {ctaText}
              </Button>
            </div>
          </div>

          {/* SERVICES MOSAIC */}
          <div
            className="
              grid
              w-full
              grid-cols-4
              grid-rows-3
              border-l
              border-t
              border-[#E6E4D8]
              md:max-w-[650px]
              lg:max-w-[690px]
            "
            style={{ minHeight: 300 }}
          >
            {/* --- SERVICE 1 (Col 1) --- */}
            <div className="relative col-start-1 row-start-1 row-span-2 overflow-hidden border-b border-r border-[#E6E4D8]">
              <Image src={services[0].image} alt={services[0].title} fill className="object-cover" />
            </div>
            <div className="col-start-1 row-start-3 flex items-center bg-[#FFFDF0] border-r border-[#E6E4D8] px-4 py-3 md:px-5">
              <span className="text-[11px] font-medium leading-5 text-[#0D0D26] md:text-[13px]">
                {services[0].title}
              </span>
            </div>

            {/* --- SERVICE 2 (Col 2) --- */}
            <div className="col-start-2 row-start-1 flex items-center bg-[#FFFDF0] border-b border-r border-[#E6E4D8] px-4 py-3 md:px-5">
              <span className="text-[11px] font-medium leading-5 text-[#0D0D26] md:text-[13px]">
                {services[1].title}
              </span>
            </div>
            <div className="relative col-start-2 row-start-2 row-span-2 overflow-hidden border-r border-[#E6E4D8]">
              <Image src={services[1].image} alt={services[1].title} fill className="object-cover" />
            </div>

            {/* --- SERVICE 3 (Col 3) --- */}
            <div className="relative col-start-3 row-start-1 row-span-2 overflow-hidden border-b border-r border-[#E6E4D8]">
              <Image src={services[2].image} alt={services[2].title} fill className="object-cover" />
            </div>
            <div className="col-start-3 row-start-3 flex items-center bg-[#FFFDF0] border-r border-[#E6E4D8] px-4 py-3 md:px-5">
              <span className="text-[11px] font-medium leading-5 text-[#0D0D26] md:text-[13px]">
                {services[2].title}
              </span>
            </div>

            {/* --- SERVICE 4 (Col 4) --- */}
            <div className="col-start-4 row-start-1 flex items-center bg-[#FFFDF0] border-b border-r border-[#E6E4D8] px-4 py-3 md:px-5">
              <span className="text-[11px] font-medium leading-5 text-[#0D0D26] md:text-[13px]">
                {services[3].title}
              </span>
            </div>
            <div className="relative col-start-4 row-start-2 row-span-2 overflow-hidden border-r border-[#E6E4D8]">
              <Image src={services[3].image} alt={services[3].title} fill className="object-cover" />
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
