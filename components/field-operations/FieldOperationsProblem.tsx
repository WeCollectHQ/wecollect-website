import { SolutionOverview } from "@/components/common/SolutionOverview";
import FieldOperationsProblemImage from "@/assets/pngs/field-operations-problem.png";
import {
  FieldFragmentedIcon,
  FieldNoTransparencyIcon,
  FieldScalingRiskIcon,
  RouteTerritoryIcon,
  ActivationVerificationIcon,
  LiveAgentTrackingIcon,
  OutletVisitReportingIcon,
  AutomatedAgentPayoutsIcon,
  SupervisorDashboardIcon,
} from "@/assets/svgs";

const problems = [
  {
    title: "Fragmented Operations",
    description: "Field sales operates run on WhatsApp, phone calls, and spreadsheets.",
    icon: <FieldFragmentedIcon />,
  },
  {
    title: "No Transparency",
    description: "Manual processes leave no audit trail — and no way to prove data quality to clients or regulators.",
    icon: <FieldNoTransparencyIcon />,
  },
  {
    title: "Scaling Risk",
    description: "Scale makes the problem worse: every additional agent multiplies the risk of errors, fraud, and inconsistency.",
    icon: <FieldScalingRiskIcon />,
  },
];

const features = [
  {
    title: "Route & Territory Management",
    description: "Assign agents to specific routes, LGAs, and outlets. Track coverage in real time on a live map.",
    icon: <RouteTerritoryIcon />,
  },
  {
    title: "Activation Verification",
    description: "Photo evidence, GPS location, and form completion required for every activation. Ghost workers eliminated.",
    icon: <ActivationVerificationIcon />,
  },
  {
    title: "Live Agent Tracking",
    description: "GPS location, check-in/check-out, dwell time, and submission logs for every field agent.",
    icon: <LiveAgentTrackingIcon />,
  },
  {
    title: "Outlet Visit Reporting",
    description: "Structured visit forms, shelf audit captures, and competitive intelligence — all geo-tagged.",
    icon: <OutletVisitReportingIcon />,
  },
  {
    title: "Automated Agent Payouts",
    description: "Performance-based payments triggered automatically on verified submissions. Zero cash, zero fraud.",
    icon: <AutomatedAgentPayoutsIcon />,
  },
  {
    title: "Supervisor Dashboard",
    description: "Real-time productivity scores, anomaly flags, and team leaderboards for every supervisor.",
    icon: <SupervisorDashboardIcon />,
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
