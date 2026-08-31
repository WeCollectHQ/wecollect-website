import Image from "next/image";

import { CheckIcon, ArrowUpRightIcon } from "@/assets/svgs";
import { Button } from "@/components/common/Button";
import { Container } from "@/components/common/Container";
import AgentTeamImage from "@/assets/pngs/agent-team.png";
import DeploymentBgImage from "@/assets/pngs/deployment-models-bg-image.webp";

const features = [
  "Trained, ranked and re-deployed on repeat programs",
  "Task-linked payments and a transparent audit trail",
  "Managed by WeCollect field ops — you see the results",
];

export function DeploymentModels() {
  return (
    <section className="relative overflow-hidden bg-[#0D0D26] text-white">
      {/* Background */}
      <Image
        src={DeploymentBgImage}
        alt=""
        fill
        priority
        className="pointer-events-none absolute inset-0 h-full w-full object-cover object-center"
      />

      {/* Overlay */}
      <div className="pointer-events-none absolute inset-0 bg-[#0D0D26]/35" />

      <Container className="relative z-10">
        <div className="grid min-h-[828px] items-center gap-12 py-20 md:grid-cols-[0.9fr_1.1fr] md:gap-16 md:py-24 lg:grid-cols-[1fr_1.08fr] lg:gap-[82px] lg:py-28">
          {/* LEFT CONTENT */}
          <div className="max-w-[390px]">
            {/* Eyebrow */}
            <div className="flex items-center gap-2">
              <span className="h-2 w-2 shrink-0 rounded-full bg-[#FDE93D]" />

              <span className="text-[10px] font-medium uppercase leading-4 tracking-wide text-[#FDE93D] md:text-[12px]">
                Deployment Models
              </span>
            </div>

            {/* Heading */}
            <h2 className="mt-6 font-merriweather text-[32px] font-bold leading-10 tracking-[-0.5%] text-[#E9E9EF] md:text-[40px] md:leading-[1.12] md:tracking-[-1%] lg:text-[48px]">
              No field team?
              <br />
              Deploy ours.
            </h2>

            {/* Description */}
            <p className="mt-6 max-w-[370px] text-[14px] font-medium leading-5.5 text-[#B9B9CC] md:text-[15px] md:leading-6">
              The platform works with or without our agents. But when you need
              boots on the ground, our trained, verified network is ready.
            </p>

            {/* Features */}
            <div className="mt-6">
              {features.map((feature) => (
                <div
                  key={feature}
                  className="flex items-start gap-3 border-t border-[#30306F] py-4"
                >
                  <CheckIcon className="mt-0.5 shrink-0" />

                  <span className="text-[13px] font-medium leading-5.5 text-[#7F7FA8] md:text-[14px]">
                    {feature}
                  </span>
                </div>
              ))}

              {/* Bottom border */}
              <div className="border-t border-[#30306F]" />
            </div>

            {/* Buttons */}
            <div className="mt-8 flex flex-nowrap items-center gap-2">
              <Button
                href="/demo"
                variant="primary"
                size="lg"
                icon={<ArrowUpRightIcon />}
                className="shrink-0"
              >
                Book a Demo
              </Button>

              <Button
                href="/agent-network"
                variant="outline-white"
                size="lg"
                className="shrink-0"
              >
                Learn about the network
              </Button>
            </div>
          </div>

          {/* RIGHT IMAGE */}
          <div className="relative mx-auto w-full max-w-[518px]">
            <Image
              src={AgentTeamImage}
              alt="WeCollect field agents team"
              width={518}
              height={519}
              priority
              className="h-auto w-full object-cover"
            />
          </div>
        </div>
      </Container>
    </section>
  );
}
