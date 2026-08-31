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
    title: "Data Validation",
    description:
      "GIS validation, real-time QA, geofencing, and clean, decision-ready data output.",
    icon: DataValidationIcon,
  },
];

export function FourPillars() {
  return (
    <section className="w-full bg-white py-[150.87px] md:py-51.75">
      <Container>
        {/* Header */}
        <div className="mx-auto max-w-170 text-center">
          <p className="text-[10px] text-[#9898B3] md:text-[14px] font-medium md:font-bold uppercase leading-3 md:leading-4.5">
            What we do
          </p>

          <h2 className="mt-4 font-merriweather font-bold text-[24px] text-[#0D0D26] md:text-[40px] leading-8 md:leading-12 md:tracking-[-1%]">
            Four pillars. One platform.
          </h2>

          <p className="mt-8 md:mt-4 text-[16px] text-[#686890] md:text-[18px] font-medium leading-6.5 md:leading-7.5">
            WeCollect powers every phase of your field operation — from data
            collection to verified output.
          </p>
        </div>

        {/* Pillars */}
        <div className="mx-auto mt-10 grid grid-cols-1 sm:grid-cols-2 border border-[#E9E9EF]">
          {pillars.map((pillar, index) => {
            const Icon = pillar.icon;

            return (
              <div
                key={pillar.title}
                className={[
                  "min-h-37.5 p-6",
                  index % 2 !== 0 ? "sm:border-l" : "",
                  index >= 2 ? "sm:border-t" : "",
                  "border-[#E9E9EF]",
                ].join(" ")}
              >
                <Icon />

                <h3 className="mt-4 text-[16px] text-[#0D0D26] md:text-[20px] font-medium leading-6.5 md:leading-8">
                  {pillar.title}
                </h3>

                <p className="mt-3 max-w-95 text-[14px] text-[#686890] md:text-[16px] font-medium leading-5.5 md:leading-6.5">
                  {pillar.description}
                </p>
              </div>
            );
          })}
        </div>

        {/* CTA */}
        <div className="mt-10 flex flex-col items-center">
          <p className="text-[14px] font-medium leading-5.5 text-[#686890]">
            Building AI with African data?
          </p>

          <Button
            href="/solutions/ai-data"
            size="lg"
            icon={<ArrowUpRightIcon />}
            className="mt-6"
          >
            Explore AI Data
          </Button>
        </div>
      </Container>
    </section>
  );
}
