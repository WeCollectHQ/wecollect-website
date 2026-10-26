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
      "Deploy your own field team or activate trained Wecollect agents and monitor activity from day one.",
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

import { Reveal } from "@/components/common/Reveal";

export function HowItWorks() {
  return (
    <section className="w-full bg-[#EDEDFB] py-25 md:py-40">
      <Container>
        {/* Header */}
        <div className="flex flex-col md:flex-row gap-6 md:items-end md:justify-between">
          <Reveal delay={0.05} direction="up" distance={16}>
            <p className="text-[10px] text-[#9898B3] md:text-[14px] font-medium uppercase leading-3 md:leading-4.5">
              How it works
            </p>

            <h2 className="mt-4 font-merriweather font-bold text-[24px] text-[#0D0D26] md:text-[40px] leading-8 md:leading-12 md:tracking-[-1%]">
              Four steps to verified field data.
            </h2>
          </Reveal>

          <Reveal delay={0.2} direction="up" distance={16}>
            <Button
              href="/platform"
              size="lg"
              icon={<ArrowUpRightIcon />}
              className="w-fit hover:-translate-y-0.5 transition-transform duration-200"
            >
              See Platform
            </Button>
          </Reveal>
        </div>

        {/* Content */}
        <div className="mt-8 md:mt-14 grid md:grid-cols-2 overflow-hidden border border-[#E3E3EE] bg-white">
          {/* Steps */}
          <div className="flex flex-col relative divide-y divide-[#E3E3EE]">
            {steps.map((step, index) => {
              const Icon = step.icon;

              return (
                <Reveal
                  key={step.number}
                  delay={0.15 + index * 0.12}
                  direction="left"
                  distance={20}
                  className="group relative flex flex-1 min-h-27.5 md:min-h-28 overflow-hidden bg-white px-5 md:px-7 py-5 md:py-6 transition-all duration-300 hover:bg-[#F8F8FD]"
                >
                  {/* Left accent indicator bar */}
                  <span className="absolute left-0 inset-y-0 w-1 bg-[#4747D6] scale-y-0 group-hover:scale-y-100 transition-transform duration-300 origin-center" />

                  {/* Step number */}
                  <span className="absolute right-4 md:right-5 top-2 font-merriweather font-bold text-[36px] text-[#E9E9EF] md:text-[40px] leading-none tracking-[-0.02em] transition-colors duration-300 group-hover:text-[#D4D4F5]">
                    {step.number}
                  </span>

                  <div className="relative z-10">
                    <div className="inline-flex p-1.5 rounded bg-[#F5F5FC] text-[#4747D6] group-hover:bg-[#4747D6] group-hover:text-white transition-colors duration-300">
                      <Icon />
                    </div>

                    <h3 className="mt-3 md:mt-4 text-[13px] text-[#0D0D26] md:text-[16px] font-semibold leading-5 md:leading-6.5 group-hover:text-[#4747D6] transition-colors duration-200">
                      {step.title}
                    </h3>

                    <p className="mt-1.5 max-w-107.5 text-[10px] text-[#686890] md:text-[12px] font-medium leading-4 md:leading-5">
                      {step.description}
                    </p>
                  </div>
                </Reveal>
              );
            })}
          </div>

          {/* Image */}
          <Reveal
            delay={0.3}
            direction="none"
            className="relative min-h-120 md:min-h-0 overflow-hidden group"
          >
            <Image
              src={HowItWorksImage}
              alt="Wecollect field operations"
              fill
              className="object-cover object-center transition-transform duration-700 ease-out group-hover:scale-103"
            />
          </Reveal>
        </div>
      </Container>
    </section>
  );
}
