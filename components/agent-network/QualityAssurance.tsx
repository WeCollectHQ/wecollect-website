import { Container } from "@/components/common/Container";

const qualityFeatures = [
  {
    title: "GIS-verified attendance",
    description:
      "Agents must be physically present at the target location. Geofencing blocks any attempt to submit remotely or fake attendance.",
    icon: (
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.4"
        className="h-6 w-6"
      >
        <circle cx="9" cy="8" r="3" />
        <path d="M3.5 19c.7-3.2 2.5-4.8 5.5-4.8s4.8 1.6 5.5 4.8" />
        <circle cx="17" cy="15.5" r="3" />
        <path d="m15.5 15.5 1 1 2-2" />
      </svg>
    ),
  },
  {
    title: "Photo evidence per submission",
    description:
      "Every field visit requires photographic evidence captured in-app. Metadata confirms time, date, and location.",
    icon: (
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.4"
        className="h-6 w-6"
      >
        <rect x="4" y="6" width="16" height="13" rx="1" />
        <path d="M8 6V4h8v2" />
        <circle cx="12" cy="12.5" r="2.5" />
      </svg>
    ),
  },
  {
    title: "AI-assisted QA flagging",
    description:
      "Machine-learning models score every submission for anomalies, outliers, and inconsistencies before it's accepted.",
    icon: (
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.4"
        className="h-6 w-6"
      >
        <path d="m12 3 1.3 4.7L18 9l-4.7 1.3L12 15l-1.3-4.7L6 9l4.7-1.3L12 3Z" />
        <path d="m18.5 15 .7 2.3 2.3.7-2.3.7-.7 2.3-.7-2.3-2.3-.7 2.3-.7.7-2.3Z" />
      </svg>
    ),
  },
  {
    title: "Supervisor review layer",
    description:
      "Flagged submissions go to a human supervisor for review. Nothing unusual passes without sign-off.",
    icon: (
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.4"
        className="h-6 w-6"
      >
        <path d="M3 17h18M5 13h14M7 9h10M9 5h6" />
      </svg>
    ),
  },
  {
    title: "Automated anomaly detection",
    description:
      "Statistical models detect impossible travel speeds, duplicate submissions, and behavioural patterns that suggest fraud.",
    icon: (
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.4"
        className="h-6 w-6"
      >
        <rect x="4" y="6" width="10" height="12" rx="1" />
        <circle cx="15.5" cy="10.5" r="3.5" />
        <path d="m18 13 3 3" />
      </svg>
    ),
  },
  {
    title: "Real-time supervisor dashboard",
    description:
      "Supervisors see every agent's location, submission count, QA score, and anomaly flags in real time.",
    icon: (
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.4"
        className="h-6 w-6"
      >
        <rect x="3.5" y="5" width="17" height="11" />
        <path d="M9 20h6M12 16v4" />
      </svg>
    ),
  },
];

export function QualityAssurance() {
  return (
    <section className="bg-white text-[#0D0D26]">
      <Container>
        <div className="py-[50px] md:py-[60px]">
          {/* Heading */}
          <div className="mb-5">
            <p className="text-[9px] font-medium uppercase leading-4 text-[#9898B3]">
              Quality Assurance
            </p>

            <h2 className="mt-2 font-merriweather text-[23px] font-bold leading-[1.25] tracking-[-1%] md:text-[26px]">
              How we guarantee data quality from agents.
            </h2>
          </div>

          {/* Feature grid */}
          <div className="grid grid-cols-1 border-l border-t border-[#E6E4E8] sm:grid-cols-2 lg:grid-cols-3">
            {qualityFeatures.map((feature) => (
              <div
                key={feature.title}
                className="
                  min-h-[164px]
                  border-b
                  border-r
                  border-[#E6E4E8]
                  px-5
                  py-5
                "
              >
                <div className="mb-4 text-[#0D0D26]">{feature.icon}</div>

                <h3 className="max-w-[180px] text-[11px] font-medium leading-[1.55] text-[#0D0D26]">
                  {feature.title}
                </h3>

                <p className="mt-2 max-w-[190px] text-[9px] leading-[1.65] text-[#5C5C87]">
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
