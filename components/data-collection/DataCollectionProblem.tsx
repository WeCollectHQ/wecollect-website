import Image from "next/image";

import { Container } from "@/components/common/Container";
import DataCollectionProblemImage from "@/assets/pngs/data-collection-problem-image.png";

const problems = [
  {
    title: "Slow Operations",
    description:
      "Manual field data collection is slow, error-prone, and nearly impossible to audit.",
    icon: "◉",
  },
  {
    title: "No Transparency",
    description:
      "Manual processes leave no audit trail — and no way to prove data quality to clients or regulators.",
    icon: "?",
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
    title: "Configurable Survey Forms",
    description:
      "Build complex multi-section surveys with skip logic, scoring, and media capture — no code required.",
    icon: "form",
  },
  {
    title: "Offline-First Collection",
    description:
      "Agents collect data without connectivity. Everything syncs automatically when signal returns.",
    icon: "offline",
  },
  {
    title: "GIS Location Tagging",
    description:
      "Every response is tagged to a GPS coordinate and validated against African administrative boundaries.",
    icon: "location",
  },
  {
    title: "Real-Time Progress Dashboard",
    description:
      "Monitor survey progress, response rates, and QA flags across all agents in real time.",
    icon: "dashboard",
  },
  {
    title: "Automated QA & Validation",
    description:
      "Anomaly detection catches outliers, duplicates, and inconsistencies before they reach your analysis.",
    icon: "validation",
  },
  {
    title: "Donor-Ready Exports",
    description:
      "Export clean, annotated datasets to Excel, SPSS, GeoJSON, or directly to your BI tools.",
    icon: "export",
  },
];

export function DataCollectionProblem() {
  return (
    <section className="bg-white text-[#0D0D26]">
      <Container>
        {/* THE PROBLEM */}
        <div className="py-20 md:py-24 lg:py-[76px]">
          {/* Heading */}
          <div className="mb-7">
            <p className="text-[10px] font-medium uppercase leading-4 text-[#9898B3] md:text-[11px]">
              The Problem
            </p>

            <h2 className="mt-2 font-merriweather text-[30px] font-bold leading-[1.2] tracking-[-1%] md:text-[40px]">
              What we solve.
            </h2>
          </div>

          {/* Problems + Image */}
          <div className="grid border border-[#E5E5ED] md:grid-cols-[1fr_0.82fr]">
            {/* Problem cards */}
            <div className="flex flex-col">
              {problems.map((problem, index) => (
                <div
                  key={problem.title}
                  className={`flex min-h-[138px] flex-col justify-center px-6 py-6 md:min-h-[138px] md:px-7 ${
                    index !== problems.length - 1
                      ? "border-b border-[#E5E5ED]"
                      : ""
                  }`}
                >
                  {/* Icon */}
                  <div className="mb-4 flex h-7 w-7 items-center justify-center">
                    {index === 0 && (
                      <div className="relative h-6 w-6 rounded-full border border-[#0D0D26]">
                        <span className="absolute left-1/2 top-[-4px] h-[30px] w-px -translate-x-1/2 rotate-45 bg-[#0D0D26]" />
                        <span className="absolute left-1/2 top-[-4px] h-[30px] w-px -translate-x-1/2 -rotate-45 bg-[#0D0D26]" />
                      </div>
                    )}

                    {index === 1 && (
                      <div className="flex h-6 w-5 items-center justify-center rounded border border-[#0D0D26] text-[14px]">
                        ?
                      </div>
                    )}

                    {index === 2 && (
                      <div className="flex h-6 w-5 items-center justify-center rounded border border-[#0D0D26] text-[13px]">
                        !
                      </div>
                    )}
                  </div>

                  <h3 className="text-[13px] font-medium leading-5 md:text-[14px]">
                    {problem.title}
                  </h3>

                  <p className="mt-2 max-w-[390px] text-[10px] font-medium leading-[1.5] text-[#55557D] md:text-[11px]">
                    {problem.description}
                  </p>
                </div>
              ))}
            </div>

            {/* Image */}
            <div className="relative min-h-[320px] overflow-hidden md:min-h-0">
              <Image
                src={DataCollectionProblemImage}
                alt="Field data collection"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>

        {/* KEY FEATURES */}
        <div className="pb-20 md:pb-24 lg:pb-[76px]">
          {/* Heading */}
          <div className="mb-7">
            <p className="text-[10px] font-medium uppercase leading-4 text-[#9898B3] md:text-[11px]">
              Key Features
            </p>

            <h2 className="mt-2 font-merriweather text-[30px] font-bold leading-[1.2] tracking-[-1%] md:text-[40px]">
              How WeCollect solves data collection.
            </h2>
          </div>

          {/* Feature grid */}
          <div className="grid border-l border-t border-[#E5E5ED] sm:grid-cols-2 lg:grid-cols-3">
            {features.map((feature) => (
              <div
                key={feature.title}
                className="
                  min-h-[190px]
                  border-b
                  border-r
                  border-[#E5E5ED]
                  px-6
                  py-7
                  md:min-h-[195px]
                  md:px-7
                  md:py-8
                "
              >
                {/* Icon */}
                <div className="mb-4 h-7 w-7 text-[#0D0D26]">
                  <FeatureIcon type={feature.icon} />
                </div>

                <h3 className="text-[12px] font-medium leading-5 md:text-[13px]">
                  {feature.title}
                </h3>

                <p className="mt-2 max-w-[210px] text-[10px] font-medium leading-[1.55] text-[#55557D] md:text-[11px]">
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

function FeatureIcon({ type }: { type: string }) {
  switch (type) {
    case "form":
      return (
        <svg
          viewBox="0 0 32 32"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.5"
          className="h-7 w-7"
        >
          <path d="M8 4h11l6 6v18H8V4Z" />
          <path d="M19 4v7h6" />
          <path d="M12 17h9M12 21h6" />
          <circle cx="21" cy="23" r="4" fill="white" />
          <path d="m19.5 23 1 1 2-2" />
        </svg>
      );

    case "offline":
      return (
        <svg
          viewBox="0 0 32 32"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.5"
          className="h-7 w-7"
        >
          <path d="M6 12a15 15 0 0 1 20 0M9 16a10 10 0 0 1 14 0M13 20a5 5 0 0 1 6 0" />
          <path d="M5 5 27 27" />
        </svg>
      );

    case "location":
      return (
        <svg
          viewBox="0 0 32 32"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.5"
          className="h-7 w-7"
        >
          <path d="M16 28s9-7.3 9-15a9 9 0 1 0-18 0c0 7.7 9 15 9 15Z" />
          <circle cx="16" cy="13" r="3" />
          <path d="M7 25h18M4 28h24" />
        </svg>
      );

    case "dashboard":
      return (
        <svg
          viewBox="0 0 32 32"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.5"
          className="h-7 w-7"
        >
          <path d="M5 21a11 11 0 1 1 22 0" />
          <path d="M16 21 23 13" />
          <path d="M5 24h22" />
        </svg>
      );

    case "validation":
      return (
        <svg
          viewBox="0 0 32 32"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.5"
          className="h-7 w-7"
        >
          <path d="M7 7h13l5 5v14H7V7Z" />
          <path d="M20 7v6h5M11 17l3 3 6-7" />
        </svg>
      );

    case "export":
      return (
        <svg
          viewBox="0 0 32 32"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.5"
          className="h-7 w-7"
        >
          <path d="M7 10v15h15" />
          <path d="M12 5h13v13" />
          <path d="m17 13 8-8M25 5l-1 5" />
        </svg>
      );

    default:
      return null;
  }
}
