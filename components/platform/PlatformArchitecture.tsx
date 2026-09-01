import Image from "next/image";

import { Container } from "@/components/common/Container";
import { Button } from "@/components/common/Button";
import {
  ArrowUpRightIcon,
  OfflineFirstIcon,
  MultiplatformIcon,
  EnterpriseSecurityIcon,
} from "@/assets/svgs";
import PlatformPhoneImage from "@/assets/pngs/platform-phone-image.png";

const flowSteps = [
  {
    number: "01",
    title: "Form Builder",
    description:
      "Create custom digital forms with the fields your project needs.",
  },
  {
    number: "02",
    title: "Field Agent",
    description:
      "Collect structured data from the field using any mobile device.",
  },
  {
    number: "03",
    title: "GIS Validation",
    description:
      "Verify every submission with accurate GPS and location checks.",
  },
  {
    number: "04",
    title: "QA Engine",
    description:
      "Detect errors, duplicates, and inconsistencies before approval.",
  },
  {
    number: "05",
    title: "Dashboard",
    description: "Monitor field activity and track progress in real time.",
  },
  {
    number: "06",
    title: "Export Data",
    description:
      "Download clean, validated data ready for analysis and reporting.",
  },
];

const platformFeatures = [
  {
    title: "Offline First",
    description:
      "Field agents work without connectivity. Data syncs when signal returns — no submissions lost.",
    icon: <OfflineFirstIcon />,
  },
  {
    title: "Multi-Platform",
    description:
      "Web dashboard for supervisors. Native iOS and Android apps for field agents. Works on low-cost devices.",
    icon: <MultiplatformIcon />,
  },
  {
    title: "Enterprise Security",
    description:
      "AES-256 encryption, role-based access, audit trails, NDPC-compliant data handling.",
    icon: <EnterpriseSecurityIcon />,
  },
];

export function PlatformArchitecture() {
  return (
    <section className="w-full bg-[#F7F7FF] text-[#0D0D26]">
      <Container className="py-20 md:py-24 lg:py-28">
        {/* =========================================
            ARCHITECTURE HEADER
        ========================================= */}
        <div className="flex items-end justify-between gap-8">
          <div>
            <p className="text-[10px] font-medium uppercase leading-4 text-[#9898B3] md:text-[12px]">
              Architecture
            </p>

            <h2 className="mt-4 font-merriweather text-[28px] font-bold leading-9 tracking-[-0.5%] text-[#0D0D26] md:text-[40px] md:leading-12 md:tracking-[-1%]">
              How data flows through the platform.
            </h2>
          </div>

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

        {/* =========================================
            DATA FLOW
        ========================================= */}
        <div className="mt-10 grid grid-cols-1 border border-[#E5E5EE] sm:grid-cols-2 lg:grid-cols-3">
          {flowSteps.map((step, index) => (
            <div
              key={step.number}
              className={[
                "relative min-h-[190px] overflow-hidden bg-white p-6 md:min-h-[190px] md:p-7",
                index % 3 !== 0 ? "lg:border-l" : "",
                index >= 3 ? "lg:border-t" : "",
                index % 2 !== 0 ? "sm:border-l lg:border-l" : "",
                index >= 2 ? "sm:border-t lg:border-t-0" : "",
                index >= 3 ? "lg:border-t" : "",
                "border-[#E5E5EE]",
              ].join(" ")}
            >
              {/* Number + arrow */}
              <div className="flex items-center">
                <span className="font-merriweather text-[58px] font-bold leading-none tracking-[-3%] text-[#E8E8EF] md:text-[62px]">
                  {step.number}
                </span>

                {/* Arrow on steps 01 - 05 */}
                {index < flowSteps.length - 1 && (
                  <div className="ml-3 flex flex-1 items-center">
                    <div className="h-[6px] flex-1 bg-[#E8E8EF]" />

                    <svg
                      width="14"
                      height="14"
                      viewBox="0 0 14 14"
                      fill="none"
                      className="shrink-0"
                    >
                      <path
                        d="M1 7H12M12 7L7 2M12 7L7 12"
                        stroke="#E8E8EF"
                        strokeWidth="2"
                      />
                    </svg>
                  </div>
                )}
              </div>

              {/* Content */}
              <div className="mt-5">
                <h3 className="text-[16px] font-medium leading-6 text-[#0D0D26] md:text-[18px]">
                  {step.title}
                </h3>

                <p className="mt-3 max-w-[280px] text-[13px] font-medium leading-5 text-[#686890] md:text-[14px] md:leading-5.5">
                  {step.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* =========================================
            PLATFORM FEATURES
        ========================================= */}
        <div className="mt-12 grid grid-cols-1 border border-[#E5E5EE] bg-white lg:grid-cols-[1fr_0.88fr]">
          {/* LEFT FEATURES */}
          <div>
            {platformFeatures.map((feature, index) => (
              <div
                key={feature.title}
                className={[
                  "min-h-[185px] p-6 md:p-7 lg:min-h-[190px]",
                  index !== 0 ? "border-t" : "",
                  "border-[#E5E5EE]",
                ].join(" ")}
              >
                {feature.icon}

                <h3 className="mt-5 text-[16px] font-medium leading-6 text-[#0D0D26] md:text-[18px]">
                  {feature.title}
                </h3>

                <p className="mt-3 max-w-[500px] text-[13px] font-medium leading-5 text-[#686890] md:text-[14px] md:leading-5.5">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>

          {/* RIGHT IMAGE */}
          <div className="relative min-h-[500px] overflow-hidden bg-[#6FA9D4] lg:min-h-full">
            <Image
              src={PlatformPhoneImage}
              alt="WeCollect field data collection on mobile"
              fill
              className="object-cover object-center"
            />
          </div>
        </div>
      </Container>
    </section>
  );
}
