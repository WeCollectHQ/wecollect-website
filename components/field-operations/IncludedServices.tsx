import Image from "next/image";

import { Button } from "@/components/common/Button";
import { Container } from "@/components/common/Container";
import { ArrowUpRightIcon } from "@/assets/svgs";

import FieldSalesManagementImage from "@/assets/pngs/field-sales-management.png";
import MerchandisingAuditsImage from "@/assets/pngs/merchandising-audits.png";
import ActivationTrackingImage from "@/assets/pngs/activation-tracking.png";
import RouteCoverageImage from "@/assets/pngs/route-coverage.png";

/**
 * Grid is 4 columns × 3 row-units.
 * Images span 2 row-units, labels span 1 row-unit.
 *
 * Col 1 (image col): [Image rows 1-2] [Label row 3]
 * Col 2 (label col): [Label row 1]   [Image rows 2-3]
 * Col 3 (image col): [Image rows 1-2] [Label row 3]
 * Col 4 (label col): [Label row 1]   [Image rows 2-3]
 */
export function IncludedServices() {
  return (
    <section className="bg-[#FFFDF0] text-[#0D0D26]">
      <Container>
        <div className="flex min-h-[310px] flex-col gap-10 py-16 md:min-h-[340px] md:flex-row md:items-center md:gap-12 md:py-20 lg:gap-[100px] lg:py-[65px]">
          {/* LEFT CONTENT */}
          <div className="w-full shrink-0 md:w-[190px] lg:w-[210px]">
            <p className="text-[10px] font-medium uppercase leading-4 text-[#9898B3]">
              Included Services
            </p>

            <h2 className="mt-3 font-merriweather text-[30px] font-bold leading-[1.2] tracking-[-1%] md:text-[34px] lg:text-[38px]">
              What&apos;s covered
            </h2>

            <div className="mt-8">
              <Button
                href="/demo"
                variant="primary"
                size="lg"
                icon={<ArrowUpRightIcon />}
                className="shrink-0"
              >
                Book a Demo
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
            "
            style={{ minHeight: 300 }}
          >
            {/* Col 1 — Image (rows 1-2) */}
            <div className="relative col-start-1 row-start-1 row-span-2 overflow-hidden border-b border-r border-[#E6E4D8]">
              <Image
                src={FieldSalesManagementImage}
                alt="Field Sales Management"
                fill
                className="object-cover"
              />
            </div>

            {/* Col 2 — Label (row 1) */}
            <div className="col-start-2 row-start-1 flex items-center border-b border-r border-[#E6E4D8] bg-[#FFFDF0] px-4 py-3 md:px-5">
              <span className="text-[11px] font-medium leading-5 text-[#0D0D26] md:text-[13px]">
                Merchandising Audits
              </span>
            </div>

            {/* Col 3 — Image (rows 1-2) */}
            <div className="relative col-start-3 row-start-1 row-span-2 overflow-hidden border-b border-r border-[#E6E4D8]">
              <Image
                src={ActivationTrackingImage}
                alt="Activation Tracking"
                fill
                className="object-cover"
              />
            </div>

            {/* Col 4 — Label (row 1) */}
            <div className="col-start-4 row-start-1 flex items-center border-b border-r border-[#E6E4D8] bg-[#FFFDF0] px-4 py-3 md:px-5">
              <span className="text-[11px] font-medium leading-5 text-[#0D0D26] md:text-[13px]">
                Route Coverage
              </span>
            </div>

            {/* Col 2 — Image (rows 2-3) */}
            <div className="relative col-start-2 row-start-2 row-span-2 overflow-hidden border-r border-[#E6E4D8]">
              <Image
                src={MerchandisingAuditsImage}
                alt="Merchandising Audits"
                fill
                className="object-cover"
              />
            </div>

            {/* Col 4 — Image (rows 2-3) */}
            <div className="relative col-start-4 row-start-2 row-span-2 overflow-hidden border-r border-[#E6E4D8]">
              <Image
                src={RouteCoverageImage}
                alt="Route Coverage"
                fill
                className="object-cover"
              />
            </div>

            {/* Col 1 — Label (row 3) */}
            <div className="col-start-1 row-start-3 flex items-center border-r border-[#E6E4D8] bg-[#FFFDF0] px-4 py-3 md:px-5">
              <span className="text-[11px] font-medium leading-5 text-[#0D0D26] md:text-[13px]">
                Field Sales Management
              </span>
            </div>

            {/* Col 3 — Label (row 3) */}
            <div className="col-start-3 row-start-3 flex items-center border-r border-[#E6E4D8] bg-[#FFFDF0] px-4 py-3 md:px-5">
              <span className="text-[11px] font-medium leading-5 text-[#0D0D26] md:text-[13px]">
                Activation Tracking
              </span>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
