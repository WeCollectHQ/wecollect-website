import { Container } from "@/components/common/Container";
import {
  DataCollectionIcon,
  FieldOperationsIcon,
  VerificationIcon,
  DataValidationIcon,
  ArrowUpRightIcon,
} from "@/assets/svgs";
import { Button } from "@/components/common/Button";

const pillars = [
  {
    title: "Data Collection",
    description:
      "Surveys, research, census-style enumeration, and structured field data capture at scale.",
    icon: DataCollectionIcon,
  },
  {
    title: "Field Operations",
    description:
      "Field sales, activations, merchandising audits, and on-ground campaign execution.",
    icon: FieldOperationsIcon,
  },
  {
    title: "Verification & Reporting",
    description:
      "Address validation, KYC field checks, site visit reporting, and physical verification.",
    icon: VerificationIcon,
  },
  {
    title: "Monitoring and Evaluation",
    description:
      "GIS validation, real-time QA, geofencing, and clean, decision-ready data output.",
    icon: DataValidationIcon,
  },
];

import { Reveal } from "@/components/common/Reveal";

export function FourPillars() {
  return (
    <section className="w-full bg-white py-[150.87px] md:py-51.75">
      <Container>
        {/* Header */}
        <div className="mx-auto max-w-170 text-center">
          <Reveal delay={0.05} direction="up" distance={16}>
            <p className="text-[10px] text-[#9898B3] md:text-[14px] font-medium md:font-bold uppercase leading-3 md:leading-4.5">
              What we do
            </p>
          </Reveal>

          <Reveal delay={0.15} direction="up" distance={20}>
            <h2 className="mt-4 font-merriweather font-bold text-[24px] text-[#0D0D26] md:text-[40px] leading-8 md:leading-12 md:tracking-[-1%]">
              Four pillars. One platform.
            </h2>
          </Reveal>

          <Reveal delay={0.25} direction="up" distance={20}>
            <p className="mt-8 md:mt-4 text-[16px] text-[#686890] md:text-[18px] font-medium leading-6.5 md:leading-7.5">
              Wecollect powers every phase of your field operation from data
              collection to verified output.
            </p>
          </Reveal>
        </div>

        {/* Pillars */}
        <div className="mx-auto mt-10 grid grid-cols-1 sm:grid-cols-2 border border-[#E9E9EF]">
          {pillars.map((pillar, index) => {
            const Icon = pillar.icon;

            return (
              <Reveal
                key={pillar.title}
                delay={0.1 + index * 0.12}
                direction="up"
                distance={24}
                className={[
                  "interactive-card group relative min-h-37.5 p-6 bg-white transition-all duration-300",
                  index % 2 !== 0 ? "sm:border-l" : "",
                  index >= 2 ? "sm:border-t" : "",
                  "border-[#E9E9EF]",
                ].join(" ")}
              >
                <div className="interactive-icon inline-flex p-2.5 rounded-lg bg-[#F5F5FC] text-[#4747D6] transition-transform duration-300">
                  <Icon />
                </div>

                <h3 className="mt-4 text-[16px] text-[#0D0D26] md:text-[20px] font-medium leading-6.5 md:leading-8 group-hover:text-[#4747D6] transition-colors duration-200">
                  {pillar.title}
                </h3>

                <p className="mt-3 max-w-95 text-[14px] text-[#686890] md:text-[16px] font-medium leading-5.5 md:leading-6.5">
                  {pillar.description}
                </p>
              </Reveal>
            );
          })}
        </div>

        {/* CTA */}
        <Reveal delay={0.3} direction="up" distance={16}>
          <div className="mt-10 flex flex-col items-center">
            <p className="text-[14px] font-medium leading-5.5 text-[#686890]">
              Building AI with African data?
            </p>

            <Button
              href="/solutions/ai-data"
              size="lg"
              icon={<ArrowUpRightIcon />}
              className="mt-6 hover:-translate-y-0.5 transition-transform duration-200"
            >
              Explore AI Data
            </Button>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
