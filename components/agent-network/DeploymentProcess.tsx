import Image from "next/image";

import { Container } from "@/components/common/Container";
import DeploymentProcessBgImage from "@/assets/pngs/deployment-process-bg-image.webp";

const deploymentSteps = [
  {
    day: "Day 0",
    title: "Brief & Scope",
    description:
      "Define geography, data requirements, agent count, and timeline.",
    icon: (
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.4"
        className="h-6 w-6"
      >
        <path d="M6 3.5h9l3 3V20.5H6V3.5Z" />
        <path d="M15 3.5v4h3" />
        <path d="M9 11h6M9 14h6" />
      </svg>
    ),
  },
  {
    day: "Day 1–2",
    title: "Agent Matching",
    description:
      "System matches verified agents by location, language, and skill set.",
    icon: (
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.4"
        className="h-6 w-6"
      >
        <circle cx="10" cy="8" r="3" />
        <path d="M4.5 19c.7-3.2 2.5-4.8 5.5-4.8s4.8 1.6 5.5 4.8" />
        <path d="M17 8v6M14 11h6" />
      </svg>
    ),
  },
  {
    day: "Day 2–3",
    title: "Briefing & Training",
    description:
      "Agents trained on your forms, protocols, and quality requirements.",
    icon: (
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.4"
        className="h-6 w-6"
      >
        <path d="M3.5 5h7.5c1.7 0 3 1.3 3 3v11c0-1.7-1.3-3-3-3H3.5V5Z" />
        <path d="M20.5 5H13c-1.7 0-3 1.3-3 3v11c0-1.7 1.3-3 3-3h7.5V5Z" />
      </svg>
    ),
  },
  {
    day: "Day 3+",
    title: "Live Deployment",
    description:
      "Real-time tracking, QA, and data flow from day one in the field.",
    icon: (
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.4"
        className="h-6 w-6"
      >
        <circle cx="12" cy="12" r="1.5" />
        <path d="M7.5 8.5a5 5 0 0 0 0 7" />
        <path d="M16.5 8.5a5 5 0 0 1 0 7" />
        <path d="M4.5 6a8.5 8.5 0 0 0 0 12" />
        <path d="M19.5 6a8.5 8.5 0 0 1 0 12" />
      </svg>
    ),
  },
];

export function DeploymentProcess() {
  return (
    <section className="relative overflow-hidden bg-[#FFFDF0] text-[#0D0D26]">
      {/* Background image */}
      <Image
        src={DeploymentProcessBgImage}
        alt=""
        fill
        priority
        className="pointer-events-none absolute inset-0 h-full w-full object-cover object-center"
      />

      <Container>
        <div className="relative py-[50px] md:py-[60px]">
          {/* Heading */}
          <div className="text-center">
            <p className="text-[9px] font-medium uppercase leading-4 text-[#9898B3]">
              Deployment Process
            </p>

            <h2
              className="
                mt-2
                font-merriweather
                text-[23px]
                font-bold
                leading-[1.25]
                tracking-[-1%]
                md:text-[26px]
                lg:text-[27px]
              "
            >
              Instant Agent Deployment for Data Collection
            </h2>
          </div>

          {/* Steps */}
          <div
            className="
              mx-auto
              mt-5
              grid
              max-w-[555px]
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
                  min-h-[164px]
                  border-b
                  border-r
                  border-[#E6E4D8]
                  bg-transparent
                  px-3
                  py-5

                  ${index >= 2 ? "sm:border-t" : ""}
                  ${index % 2 === 1 ? "sm:border-l-0" : ""}

                  lg:border-t-0
                  ${index !== 0 ? "lg:border-l-0" : ""}
                `}
              >
                <div className="mb-4 text-[#0D0D26]">{step.icon}</div>

                <p className="text-[9px] font-medium leading-4 text-[#55557A]">
                  {step.day}
                </p>

                <h3 className="mt-1 text-[11px] font-medium leading-5 text-[#0D0D26]">
                  {step.title}
                </h3>

                <p className="mt-2 max-w-[175px] text-[9px] leading-[1.65] text-[#5C5C87]">
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
