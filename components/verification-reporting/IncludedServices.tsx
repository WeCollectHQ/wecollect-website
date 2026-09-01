import Image from "next/image";

import { Button } from "@/components/common/Button";
import { Container } from "@/components/common/Container";
import { ArrowUpRightIcon } from "@/assets/svgs";

import AddressValidationImage from "@/assets/pngs/address-validation.png";
import KycFieldChecksImage from "@/assets/pngs/kyc-field-checks.png";
import SiteVisitReportingImage from "@/assets/pngs/site-visit-reporting.png";
import AssetVerificationImage from "@/assets/pngs/asset-verification.png";

/**
 * Grid is 4 columns × 3 row-units.
 *
 * Col 1: [Image rows 1-2] [Label row 3]
 * Col 2: [Label row 1]     [Image rows 2-3]
 * Col 3: [Image rows 1-2] [Label row 3]
 * Col 4: [Label row 1]     [Image rows 2-3]
 */
export function IncludedServices() {
  return (
    <section className="bg-[#FFFDF0] text-[#0D0D26]">
      <Container>
        <div className="flex min-h-[310px] flex-col gap-10 py-16 md:min-h-[340px] md:flex-row md:items-center md:gap-12 lg:gap-[100px] lg:py-[65px]">
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
            {/* =========================================
                COLUMN 1 — IMAGE
                Address Validation
                Image spans 2 rows
            ========================================== */}
            <div className="relative col-start-1 row-start-1 row-span-2 overflow-hidden border-b border-r border-[#E6E4D8]">
              <Image
                src={AddressValidationImage}
                alt="Address Validation"
                fill
                className="object-cover"
              />
            </div>

            {/* =========================================
                COLUMN 2 — LABEL
                KYC Field Checks
            ========================================== */}
            <div className="col-start-2 row-start-1 flex items-center border-b border-r border-[#E6E4D8] bg-[#FFFDF0] px-4 py-3 md:px-5">
              <span className="text-[11px] font-medium leading-5 text-[#0D0D26] md:text-[13px]">
                KYC Field Checks
              </span>
            </div>

            {/* =========================================
                COLUMN 3 — IMAGE
                Site Visit Reporting
                Image spans 2 rows
            ========================================== */}
            <div className="relative col-start-3 row-start-1 row-span-2 overflow-hidden border-b border-r border-[#E6E4D8]">
              <Image
                src={SiteVisitReportingImage}
                alt="Site Visit Reporting"
                fill
                className="object-cover"
              />
            </div>

            {/* =========================================
                COLUMN 4 — LABEL
                Asset Verification
            ========================================== */}
            <div className="col-start-4 row-start-1 flex items-center border-b border-r border-[#E6E4D8] bg-[#FFFDF0] px-4 py-3 md:px-5">
              <span className="text-[11px] font-medium leading-5 text-[#0D0D26] md:text-[13px]">
                Asset Verification
              </span>
            </div>

            {/* =========================================
                COLUMN 2 — IMAGE
                KYC Field Checks
                Image spans rows 2-3
            ========================================== */}
            <div className="relative col-start-2 row-start-2 row-span-2 overflow-hidden border-r border-[#E6E4D8]">
              <Image
                src={KycFieldChecksImage}
                alt="KYC Field Checks"
                fill
                className="object-cover"
              />
            </div>

            {/* =========================================
                COLUMN 4 — IMAGE
                Asset Verification
                Image spans rows 2-3
            ========================================== */}
            <div className="relative col-start-4 row-start-2 row-span-2 overflow-hidden border-r border-[#E6E4D8]">
              <Image
                src={AssetVerificationImage}
                alt="Asset Verification"
                fill
                className="object-cover"
              />
            </div>

            {/* =========================================
                COLUMN 1 — LABEL
                Address Validation
            ========================================== */}
            <div className="col-start-1 row-start-3 flex items-center border-r border-[#E6E4D8] bg-[#FFFDF0] px-4 py-3 md:px-5">
              <span className="text-[11px] font-medium leading-5 text-[#0D0D26] md:text-[13px]">
                Address Validation
              </span>
            </div>

            {/* =========================================
                COLUMN 3 — LABEL
                Site Visit Reporting
            ========================================== */}
            <div className="col-start-3 row-start-3 flex items-center border-r border-[#E6E4D8] bg-[#FFFDF0] px-4 py-3 md:px-5">
              <span className="text-[11px] font-medium leading-5 text-[#0D0D26] md:text-[13px]">
                Site Visit Reporting
              </span>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
