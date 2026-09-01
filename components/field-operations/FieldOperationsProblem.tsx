import Image from "next/image";
import { Container } from "@/components/common/Container";

import FieldOperationsProblemImage from "@/assets/pngs/field-operations-problem.png";

const problems = [
  {
    title: "Fragmented Operations",
    description:
      "Field sales operates run on WhatsApp, phone calls, and spreadsheets.",
    icon: "✣",
  },
  {
    title: "No Transparency",
    description:
      "Manual processes leave no audit trail — and no way to prove data quality to clients or regulators.",
    icon: "⌑",
  },
  {
    title: "Scaling Risk",
    description:
      "Scale makes the problem worse: every additional agent multiplies the risk of errors, fraud, and inconsistency.",
    icon: "!",
  },
];

const features = [
  {
    title: "Route & Territory Management",
    description:
      "Assign agents to specific routes, LGAs, and outlets. Track coverage in real time on a live map.",
    icon: "⌖",
  },
  {
    title: "Activation Verification",
    description:
      "Photo evidence, GPS location, and form completion required for every activation. Ghost workers eliminated.",
    icon: "✥",
  },
  {
    title: "Live Agent Tracking",
    description:
      "GPS location, check-in/check-out, dwell time, and submission logs for every field agent.",
    icon: "◉",
  },
  {
    title: "Outlet Visit Reporting",
    description:
      "Structured visit forms, shelf audit captures, and competitive intelligence — all geo-tagged.",
    icon: "▤",
  },
  {
    title: "Automated Agent Payouts",
    description:
      "Performance-based payments triggered automatically on verified submissions. Zero cash, zero fraud.",
    icon: "▣",
  },
  {
    title: "Supervisor Dashboard",
    description:
      "Real-time productivity scores, anomaly flags, and team leaderboards for every supervisor.",
    icon: "□",
  },
];

export function FieldOperationsProblem() {
  return (
    <section className="bg-white text-[#0D0D26]">
      <Container>
        {/* THE PROBLEM */}
        <div className="py-16 md:py-20 lg:py-[64px]">
          <div className="mb-7">
            <p className="text-[10px] font-medium uppercase leading-4 text-[#9898B3]">
              The Problem
            </p>

            <h2
              className="
                mt-2
                font-merriweather
                text-[30px]
                font-bold
                leading-[1.2]
                tracking-[-1%]
                md:text-[38px]
              "
            >
              What we solve.
            </h2>
          </div>

          <div className="grid overflow-hidden border border-[#E7E7EE] md:grid-cols-[1fr_0.8fr]">
            {/* PROBLEM LIST */}
            <div className="grid grid-rows-3">
              {problems.map((problem, index) => (
                <div
                  key={problem.title}
                  className={`
                    flex
                    min-h-[150px]
                    flex-col
                    justify-center
                    px-5
                    py-7
                    md:min-h-[152px]
                    md:px-5
                    lg:px-[14px]
                    ${
                      index !== problems.length - 1
                        ? "border-b border-[#E7E7EE]"
                        : ""
                    }
                  `}
                >
                  <div className="mb-4 flex h-8 w-8 items-center justify-center">
                    <span className="text-[27px] leading-none text-[#0D0D26]">
                      {problem.icon}
                    </span>
                  </div>

                  <h3 className="text-[14px] font-medium leading-5 text-[#0D0D26] md:text-[15px]">
                    {problem.title}
                  </h3>

                  <p className="mt-3 max-w-[390px] text-[10px] font-medium leading-[1.55] text-[#5D5D88] md:text-[11px]">
                    {problem.description}
                  </p>
                </div>
              ))}
            </div>

            {/* IMAGE */}
            <div className="relative min-h-[400px] md:min-h-full">
              <Image
                src={FieldOperationsProblemImage}
                alt="Field agent using a mobile device"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>

        {/* KEY FEATURES */}
        <div className="pb-16 md:pb-20 lg:pb-[65px]">
          <div className="mb-7">
            <p className="text-[10px] font-medium uppercase leading-4 text-[#9898B3]">
              Key Features
            </p>

            <div className="mt-2 flex flex-col justify-between gap-5 md:flex-row md:items-center">
              <h2
                className="
                  font-merriweather
                  text-[30px]
                  font-bold
                  leading-[1.2]
                  tracking-[-1%]
                  md:text-[36px]
                "
              >
                How WeCollect solves field operations.
              </h2>
            </div>
          </div>

          <div className="grid grid-cols-1 border-l border-t border-[#E7E7EE] sm:grid-cols-2 lg:grid-cols-3">
            {features.map((feature, index) => (
              <div
                key={feature.title}
                className="
                  min-h-[210px]
                  border-b
                  border-r
                  border-[#E7E7EE]
                  px-5
                  py-8
                  md:min-h-[212px]
                  md:px-6
                  md:py-9
                "
              >
                {/* ICON */}
                <div className="mb-5 flex h-7 w-7 items-center justify-center">
                  <span className="text-[25px] leading-none text-[#0D0D26]">
                    {feature.icon}
                  </span>
                </div>

                <h3 className="text-[13px] font-medium leading-5 text-[#0D0D26] md:text-[14px]">
                  {feature.title}
                </h3>

                <p className="mt-3 max-w-[230px] text-[10px] font-medium leading-[1.65] text-[#5D5D88] md:text-[11px]">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}
