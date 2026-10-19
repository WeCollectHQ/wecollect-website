import { Container } from "@/components/common/Container";
import {
  GisVerifiedAttendanceIcon,
  PhotoEvidenceIcon,
  AiQaFlaggingIcon,
  SupervisorReviewLayerIcon,
  AnomalyDetectionIcon,
  RealtimeSupervisorDashboardIcon,
} from "@/assets/svgs";

const qualityFeatures = [
  {
    title: "GIS-verified attendance",
    description:
      "Agents must be physically present at the target location. Geofencing blocks any attempt to submit remotely or fake attendance.",
    icon: <GisVerifiedAttendanceIcon />,
  },
  {
    title: "Photo evidence per submission",
    description:
      "Every field visit requires photographic evidence captured in-app. Metadata confirms time, date, and location.",
    icon: <PhotoEvidenceIcon />,
  },
  {
    title: "AI-assisted QA flagging",
    description:
      "Machine-learning models score every submission for anomalies, outliers, and inconsistencies before it's accepted.",
    icon: <AiQaFlaggingIcon />,
  },
  {
    title: "Supervisor review layer",
    description:
      "Flagged submissions go to a human supervisor for review. Nothing unusual passes without sign-off.",
    icon: <SupervisorReviewLayerIcon />,
  },
  {
    title: "Automated anomaly detection",
    description:
      "Statistical models detect impossible travel speeds, duplicate submissions, and behavioural patterns that suggest fraud.",
    icon: <AnomalyDetectionIcon />,
  },
  {
    title: "Real-time supervisor dashboard",
    description:
      "Supervisors see every agent's location, submission count, QA score, and anomaly flags in real time.",
    icon: <RealtimeSupervisorDashboardIcon />,
  },
];

export function QualityAssurance() {
  return (
    <section className="bg-white text-[#0D0D26]">
      <Container>
        <div className="py-[60px] md:py-[80px]">
          {/* Heading */}
          <div className="mb-10">
            <p className="text-[10px] font-bold uppercase leading-4 tracking-wide text-[#9898B3]">
              Quality Assurance
            </p>

            <h2 className="mt-4 font-merriweather text-[32px] font-bold leading-[1.15] tracking-[-1%] md:text-[40px] lg:text-[44px]">
              How we guarantee data quality from agents.
            </h2>
          </div>

          {/* Feature grid */}
          <div className="grid grid-cols-1 border-l border-t border-[#E6E4E8] sm:grid-cols-2 lg:grid-cols-3">
            {qualityFeatures.map((feature) => (
              <div
                key={feature.title}
                className="
                  min-h-[220px]
                  border-b
                  border-r
                  border-[#E6E4E8]
                  p-6
                  md:p-8
                "
              >
                <div className="mb-6 text-[#0D0D26]">{feature.icon}</div>

                <h3 className="max-w-[280px] text-[16px] font-bold leading-6 text-[#0D0D26] md:text-[18px]">
                  {feature.title}
                </h3>

                <p className="mt-3 max-w-[280px] text-[13px] font-medium leading-[1.65] text-[#5C5C87] md:text-[14px]">
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
