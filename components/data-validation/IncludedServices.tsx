import Image from "next/image";

import { Button } from "@/components/common/Button";
import { Container } from "@/components/common/Container";
import { ArrowUpRightIcon } from "@/assets/svgs";

import GisValidationImage from "@/assets/pngs/gis-validation.png";
import QaCleaningImage from "@/assets/pngs/qa-cleaning.png";
import AiOutputVerificationImage from "@/assets/pngs/ai-output-verification.png";
import GeofenceComplianceImage from "@/assets/pngs/geofence-compliance.png";

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

          {/* SERVICES MOSAIC
           *
           * 4 cols × 3 rows.
           *
           * Col 1: [Image rows 1-2] [Label row 3]
           * Col 2: [Label row 1]    [Image rows 2-3]
           * Col 3: [Image rows 1-2] [Label row 3]
           * Col 4: [Label row 1]    [Image rows 2-3]
           */}
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
            {/* Col 1 — GIS Validation Image (rows 1-2) */}
            <div className="relative col-start-1 row-start-1 row-span-2 overflow-hidden border-b border-r border-[#E6E4D8]">
              <Image
                src={GisValidationImage}
                alt="GIS Validation"
                fill
                className="object-cover"
              />
            </div>

            {/* Col 2 — QA & Cleaning Label (row 1) */}
            <div className="col-start-2 row-start-1 flex items-center border-b border-r border-[#E6E4D8] bg-[#FFFDF0] px-4 py-3 md:px-5">
              <span className="text-[11px] font-medium leading-5 text-[#0D0D26] md:text-[13px]">
                QA &amp; Cleaning
              </span>
            </div>

            {/* Col 3 — AI Output Verification Image (rows 1-2) */}
            <div className="relative col-start-3 row-start-1 row-span-2 overflow-hidden border-b border-r border-[#E6E4D8]">
              <Image
                src={AiOutputVerificationImage}
                alt="AI Output Verification"
                fill
                className="object-cover"
              />
            </div>

            {/* Col 4 — Geofence Compliance Label (row 1) */}
            <div className="col-start-4 row-start-1 flex items-center border-b border-r border-[#E6E4D8] bg-[#FFFDF0] px-4 py-3 md:px-5">
              <span className="text-[11px] font-medium leading-5 text-[#0D0D26] md:text-[13px]">
                Geofence Compliance
              </span>
            </div>

            {/* Col 2 — QA & Cleaning Image (rows 2-3) */}
            <div className="relative col-start-2 row-start-2 row-span-2 overflow-hidden border-r border-[#E6E4D8]">
              <Image
                src={QaCleaningImage}
                alt="QA & Cleaning"
                fill
                className="object-cover"
              />
            </div>

            {/* Col 4 — Geofence Compliance Image (rows 2-3) */}
            <div className="relative col-start-4 row-start-2 row-span-2 overflow-hidden border-r border-[#E6E4D8]">
              <Image
                src={GeofenceComplianceImage}
                alt="Geofence Compliance"
                fill
                className="object-cover"
              />
            </div>

            {/* Col 1 — GIS Validation Label (row 3) */}
            <div className="col-start-1 row-start-3 flex items-center border-r border-[#E6E4D8] bg-[#FFFDF0] px-4 py-3 md:px-5">
              <span className="text-[11px] font-medium leading-5 text-[#0D0D26] md:text-[13px]">
                GIS Validation
              </span>
            </div>

            {/* Col 3 — AI Output Verification Label (row 3) */}
            <div className="col-start-3 row-start-3 flex items-center border-r border-[#E6E4D8] bg-[#FFFDF0] px-4 py-3 md:px-5">
              <span className="text-[11px] font-medium leading-5 text-[#0D0D26] md:text-[13px]">
                AI Output Verification
              </span>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
