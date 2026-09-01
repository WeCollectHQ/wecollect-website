import Image from "next/image";

import { Container } from "@/components/common/Container";
import DeploymentProcessBgImage from "@/assets/pngs/deployment-process-bg-image.webp";
import {
  BriefScopeIcon,
  AgentMatchingIcon,
  BriefingTrainingIcon,
  LiveDeploymentIcon,
} from "@/assets/svgs";

const deploymentSteps = [
  {
    day: "Day 0",
    title: "Brief & Scope",
    description:
      "Define geography, data requirements, agent count, and timeline.",
    icon: <BriefScopeIcon />,
  },
  {
    day: "Day 1–2",
    title: "Agent Matching",
    description:
      "System matches verified agents by location, language, and skill set.",
    icon: <AgentMatchingIcon />,
  },
  {
    day: "Day 2–3",
    title: "Briefing & Training",
    description:
      "Agents trained on your forms, protocols, and quality requirements.",
    icon: <BriefingTrainingIcon />,
  },
  {
    day: "Day 3+",
    title: "Live Deployment",
    description:
      "Real-time tracking, QA, and data flow from day one in the field.",
    icon: <LiveDeploymentIcon />,
  },
];

export function DeploymentProcess() {
  return (
    <section className="relative overflow-hidden text-[#0D0D26] border-b border-[#E6E4D8]">
      {/* Background image */}
      <Image
        src={DeploymentProcessBgImage}
        alt=""
        fill
        priority
        className="pointer-events-none absolute inset-0 h-full w-full object-cover object-center"
      />

      <Container>
        <div className="relative py-[60px] md:py-[150px]">
          {/* Heading */}
          <div className="text-center">
            <p className="text-[10px] font-bold uppercase leading-4 text-[#8C8410] tracking-wide">
              Deployment Process
            </p>

            <h2
              className="
                mt-4
                font-merriweather
                text-[32px]
                font-bold
                leading-[1.15]
                tracking-[-1%]
                md:text-[40px]
                lg:text-[44px]
              "
            >
              Instant Agent Deployment for Data Collection
            </h2>
          </div>

          {/* Steps */}
          <div
            className="
              mx-auto
              mt-14
              grid
              w-full
              grid-cols-1
              border-l
              border-t
              border-[#E6E4D8]
              sm:grid-cols-2
              lg:grid-cols-4
            "
          >
            {deploymentSteps.map((step, index) => (
              <div
                key={step.title}
                className={`
                  min-h-[220px]
                  border-b
                  border-r
                  border-[#E6E4D8]
                  bg-transparent
                  p-6
                  md:p-8

                  ${index >= 2 ? "sm:border-t" : ""}
                  ${index % 2 === 1 ? "sm:border-l-0" : ""}

                  lg:border-t-0
                  ${index !== 0 ? "lg:border-l-0" : ""}
                `}
              >
                <div className="mb-6 text-[#0D0D26]">{step.icon}</div>

                <p className="text-[12px] font-bold leading-5 text-[#8C8410]">
                  {step.day}
                </p>

                <h3 className="mt-2 text-[16px] font-bold leading-6 text-[#0D0D26] md:text-[18px]">
                  {step.title}
                </h3>

                <p className="mt-3 max-w-[220px] text-[13px] font-medium leading-[1.65] text-[#5C5C87] md:text-[14px]">
                  {step.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}
