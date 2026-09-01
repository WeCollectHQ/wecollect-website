import { SolutionOverview } from "@/components/common/SolutionOverview";
import FieldOperationsProblemImage from "@/assets/pngs/field-operations-problem.png";

const problems = [
  {
    title: "Fragmented Operations",
    description: "Field sales operates run on WhatsApp, phone calls, and spreadsheets.",
    icon: <span className="text-[27px] leading-none">✣</span>,
  },
  {
    title: "No Transparency",
    description: "Manual processes leave no audit trail — and no way to prove data quality to clients or regulators.",
    icon: <span className="text-[27px] leading-none">⌑</span>,
  },
  {
    title: "Scaling Risk",
    description: "Scale makes the problem worse: every additional agent multiplies the risk of errors, fraud, and inconsistency.",
    icon: <span className="text-[27px] leading-none">!</span>,
  },
];

const features = [
  {
    title: "Route & Territory Management",
    description: "Assign agents to specific routes, LGAs, and outlets. Track coverage in real time on a live map.",
    icon: <span className="text-[25px] leading-none">⌖</span>,
  },
  {
    title: "Activation Verification",
    description: "Photo evidence, GPS location, and form completion required for every activation. Ghost workers eliminated.",
    icon: <span className="text-[25px] leading-none">✥</span>,
  },
  {
    title: "Live Agent Tracking",
    description: "GPS location, check-in/check-out, dwell time, and submission logs for every field agent.",
    icon: <span className="text-[25px] leading-none">◉</span>,
  },
  {
    title: "Outlet Visit Reporting",
    description: "Structured visit forms, shelf audit captures, and competitive intelligence — all geo-tagged.",
    icon: <span className="text-[25px] leading-none">▤</span>,
  },
  {
    title: "Automated Agent Payouts",
    description: "Performance-based payments triggered automatically on verified submissions. Zero cash, zero fraud.",
    icon: <span className="text-[25px] leading-none">▣</span>,
  },
  {
    title: "Supervisor Dashboard",
    description: "Real-time productivity scores, anomaly flags, and team leaderboards for every supervisor.",
    icon: <span className="text-[25px] leading-none">□</span>,
  },
];

export function FieldOperationsProblem() {
  return (
    <SolutionOverview
      problems={problems}
      problemImage={FieldOperationsProblemImage}
      problemImageAlt="Field agent using a mobile device"
      featureTitle="How WeCollect solves field operations."
      features={features}
    />
  );
}
