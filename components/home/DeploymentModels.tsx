import Image from "next/image";
import { Button } from "@/components/common/Button";
import { Container } from "@/components/common/Container";
import { ArrowUpRightIcon } from "@/assets/svgs";
import AgentTeamImage from "@/assets/pngs/agent-team.png";

const CheckIcon = () => (
  <svg
    width="16"
    height="16"
    viewBox="0 0 16 16"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className="mt-0.5 shrink-0"
  >
    <path
      d="M13.3334 4L6.00002 11.3333L2.66669 8"
      stroke="#4ADE80"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

const features = [
  "Trained, ranked and re-deployed on repeat programs",
  "Task-linked payments and a transparent audit trail",
  "Managed by WeCollect field ops — you see the results",
];

export function DeploymentModels() {
  return (
    <section className="relative overflow-hidden bg-[#0D0D26] py-20 md:py-32 text-white">
      {/* Africa map background */}
      <div
        className="pointer-events-none absolute inset-0 bg-center bg-no-repeat opacity-20"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 600 600'%3E%3Cellipse cx='300' cy='300' rx='200' ry='260' fill='%233D3D7A' opacity='0.4'/%3E%3C/svg%3E")`,
          backgroundSize: "70%",
        }}
        aria-hidden="true"
      />

      <Container className="relative z-10">
        <div className="grid items-center gap-12 md:grid-cols-2 lg:gap-20">
          {/* Left — content */}
          <div className="flex flex-col">
            {/* Eyebrow */}
            <div className="flex items-center gap-2">
              <span className="h-2 w-2 rounded-full bg-[#FDE93D]" />
              <span className="text-[10px] md:text-[12px] font-medium uppercase tracking-widest text-[#FDE93D]">
                Deployment Models
              </span>
            </div>

            {/* Heading */}
            <h2 className="mt-4 md:mt-6 font-merriweather text-[28px] md:text-[48px] font-bold leading-9 md:leading-[1.15] text-white">
              No field team?
              <br />
              Deploy ours.
            </h2>

            {/* Description */}
            <p className="mt-4 md:mt-6 text-[13px] md:text-[15px] leading-5.5 md:leading-7 font-medium text-[#B9B9CC]">
              The platform works with or without our agents. But when you need
              boots on the ground, our trained, verified network is ready.
            </p>

            {/* Feature list */}
            <ul className="mt-6 md:mt-8 flex flex-col gap-3 md:gap-4">
              {features.map((feature) => (
                <li key={feature} className="flex items-start gap-3">
                  <CheckIcon />
                  <span className="text-[13px] md:text-[15px] font-medium leading-5.5 text-[#B9B9CC]">
                    {feature}
                  </span>
                </li>
              ))}
            </ul>

            {/* Buttons */}
            <div className="mt-8 md:mt-10 flex flex-wrap items-center gap-3">
              <Button
                href="/demo"
                variant="secondary"
                size="lg"
                icon={<ArrowUpRightIcon />}
              >
                Book a Demo
              </Button>

              <Button href="/agent-network" variant="outline-white" size="lg">
                Learn about the network
              </Button>
            </div>
          </div>

          {/* Right — image */}
          <div className="relative aspect-[4/4.5] w-full overflow-hidden md:aspect-auto md:h-[480px] lg:h-[520px]">
            <Image
              src={AgentTeamImage}
              alt="WeCollect field agents team"
              fill
              className="object-cover object-center"
            />
          </div>
        </div>
      </Container>
    </section>
  );
}
