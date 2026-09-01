import Image from "next/image";
import { Button } from "@/components/common/Button";
import { Container } from "@/components/common/Container";
import { ArrowUpRightIcon } from "@/assets/svgs";
import {
  DataCollectionIcon,
  AssignTeamIcon,
  VerifyRealtimeIcon,
  ActOnDataIcon,
} from "@/assets/svgs";
import HowItWorksImage from "@/assets/pngs/man-working.webp";

const steps = [
  {
    number: "01",
    title: "Build your field process",
    description:
      "Create forms, workflows, QA rules, geofences, and data structures with a no-code builder.",
    icon: DataCollectionIcon,
  },
  {
    number: "02",
    title: "Assign to your team or ours",
    description:
      "Deploy your own field team or activate trained WeCollect agents and monitor activity from day one.",
    icon: AssignTeamIcon,
  },
  {
    number: "03",
    title: "Verify in real time",
    description:
      "Track incoming data, validate locations, apply QA checks, and review verified records as they arrive.",
    icon: VerifyRealtimeIcon,
  },
  {
    number: "04",
    title: "Act on your data",
    description:
      "Turn trusted field data into decisions. Analyse results, export datasets, connect via API, or query your data directly.",
    icon: ActOnDataIcon,
  },
];

export function HowItWorks() {
  return (
    <section className="w-full bg-[#EDEDFB] py-25 md:py-40">
      <Container>
        {/* Header */}
        <div className="flex flex-col md:flex-row gap-6 md:items-end md:justify-between">
          <div>
            <p className="text-[10px] text-[#9898B3] md:text-[14px] font-medium uppercase leading-3 md:leading-4.5">
              How it works
            </p>

            <h2 className="mt-4 font-merriweather font-bold text-[24px] text-[#0D0D26] md:text-[40px] leading-8 md:leading-12 md:tracking-[-1%]">
              Four steps to verified field data.
            </h2>
          </div>

          <Button
            href="/platform"
            size="lg"
            icon={<ArrowUpRightIcon />}
            className="w-fit"
          >
            See Platform
          </Button>
        </div>

        {/* Content */}
        <div className="mt-8 md:mt-14 grid md:grid-cols-2 overflow-hidden">
          {/* Steps */}
          <div className="flex flex-col">
            {steps.map((step, index) => {
              const Icon = step.icon;

              return (
                <div
                  key={step.number}
                  className={[
                    "relative flex flex-1 min-h-27.5 md:min-h-[112px] overflow-hidden border-[#E3E3EE] bg-white px-4 md:px-5 py-5 md:py-6",
                    index !== 0 ? "border-t" : "",
                  ].join(" ")}
                >
                  {/* Step number */}
                  <span className="absolute right-4 md:right-5 top-0 font-merriweather font-bold text-[38px] text-[#E9E9EF] md:text-[40px] leading-none tracking-[-0.02em]">
                    {step.number}
                  </span>

                  <div className="relative z-10">
                    <Icon />

                    <h3 className="mt-3 md:mt-4 text-[12px] text-[#0D0D26] md:text-[16px] font-medium leading-5 md:leading-6.5">
                      {step.title}
                    </h3>

                    <p className="mt-2 max-w-[430px] text-[9px] text-[#686890] md:text-[12px] font-medium leading-3.5 md:leading-5">
                      {step.description}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Image */}
          <div className="relative min-h-[360px] md:min-h-0">
            <Image
              src={HowItWorksImage}
              alt="WeCollect field operations"
              fill
              className="object-center"
            />
          </div>
        </div>
      </Container>
    </section>
  );
}
