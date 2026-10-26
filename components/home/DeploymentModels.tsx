import Image from "next/image";
import { CheckIcon, ArrowUpRightIcon } from "@/assets/svgs";
import { Button } from "@/components/common/Button";
import { Container } from "@/components/common/Container";
import AgentTeamImage from "@/assets/pngs/agent-team.webp";
import DeploymentBgImage from "@/assets/pngs/deployment-models-bg-image.webp";

const features = [
  "Trained, ranked and re-deployed on repeat programs",
  "Task-linked payments and a transparent audit trail",
  "Managed by Wecollect field ops — you see the results",
];

import { Reveal } from "@/components/common/Reveal";

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
        <div className="grid min-h-207 items-center gap-12 py-20 md:grid-cols-[0.9fr_1.1fr] md:gap-16 md:py-24 lg:grid-cols-[1fr_1.08fr] lg:gap-20.5 lg:py-28">
          {/* LEFT CONTENT */}
          <div className="max-w-97.5">
            {/* Eyebrow */}
            <Reveal delay={0.05} direction="up" distance={14}>
              <div className="flex items-center gap-2">
                <span className="relative flex h-2.5 w-2.5 items-center justify-center">
                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[#FDE93D] opacity-75" />
                  <span className="relative inline-flex h-2 w-2 rounded-full bg-[#FDE93D]" />
                </span>

                <span className="text-[10px] font-medium uppercase leading-4 tracking-wide text-[#FDE93D] md:text-[12px]">
                  Deployment Models
                </span>
              </div>
            </Reveal>

            {/* Heading */}
            <Reveal delay={0.15} direction="up" distance={20}>
              <h2 className="mt-6 font-merriweather text-[32px] font-bold leading-10 tracking-[-0.5%] text-[#E9E9EF] md:text-[40px] md:leading-[1.12] md:tracking-[-1%] lg:text-[48px]">
                No field team?
                <br />
                Deploy ours.
              </h2>
            </Reveal>

            {/* Description */}
            <Reveal delay={0.25} direction="up" distance={20}>
              <p className="mt-6 max-w-92.5 text-[14px] font-medium leading-5.5 text-[#B9B9CC] md:text-[15px] md:leading-6">
                The platform works with or without our agents. But when you need
                boots on the ground, our trained, verified network is ready.
              </p>
            </Reveal>

            {/* Features */}
            <div className="mt-6">
              {features.map((feature, index) => (
                <Reveal
                  key={feature}
                  delay={0.3 + index * 0.1}
                  direction="up"
                  distance={16}
                  className="group flex items-start gap-3 border-t border-[#30306F] py-4 transition-colors duration-200 hover:border-[#FDE93D]/50"
                >
                  <span className="mt-0.5 shrink-0 text-white transition-transform duration-300 group-hover:scale-115 group-hover:text-[#FDE93D]">
                    <CheckIcon />
                  </span>

                  <span className="text-[13px] font-medium leading-5.5 text-[#7F7FA8] transition-colors duration-200 group-hover:text-white md:text-[14px]">
                    {feature}
                  </span>
                </Reveal>
              ))}

              {/* Bottom border */}
              <div className="border-t border-[#30306F]" />
            </div>

            {/* Buttons */}
            <Reveal delay={0.5} direction="up" distance={16}>
              <div className="mt-8 flex flex-col sm:flex-row items-stretch sm:items-center gap-3">
                <Button
                  href="/demo"
                  variant="primary"
                  size="lg"
                  icon={<ArrowUpRightIcon />}
                  className="w-full sm:w-auto shrink-0 hover:-translate-y-0.5 transition-transform duration-200"
                >
                  Book a Demo
                </Button>

                <Button
                  href="/agent-network"
                  variant="outline-white"
                  size="lg"
                  className="w-full sm:w-auto shrink-0 hover:-translate-y-0.5 transition-transform duration-200"
                >
                  Learn about the network
                </Button>
              </div>
            </Reveal>
          </div>

          {/* RIGHT IMAGE */}
          <Reveal
            delay={0.35}
            direction="up"
            distance={28}
            className="relative mx-auto w-full max-w-129.5 transition-transform duration-500 hover:scale-102"
          >
            <Image
              src={AgentTeamImage}
              alt="Wecollect field agents team"
              width={518}
              height={519}
              priority
              className="h-auto w-full object-cover shadow-2xl"
            />
          </Reveal>
        </div>
      </Container>
    </section>
  );
}
