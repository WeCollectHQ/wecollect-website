import { SolutionOverview } from "@/components/common/SolutionOverview";
import DataCollectionProblemImage from "@/assets/pngs/data-collection-problem-image.png";
import {
  SlowOperationsIcon,
  NoTransparencyIcon,
  ScalingRiskIcon,
  ConfigurableSurveyIcon,
  OfflineFirstCollectionIcon,
  GisLocationTaggingIcon,
  RealTimeProgressDashboardIcon,
  AutomatedQaValidationIcon,
  DonorReadyExportsIcon,
} from "@/assets/svgs";

const problems = [
  {
    title: "Slow Operations",
    description: "Manual field data collection is slow, error-prone, and nearly impossible to audit.",
    icon: <SlowOperationsIcon />,
  },
  {
    title: "No Transparency",
    description: "Manual processes leave no audit trail — and no way to prove data quality to clients or regulators.",
    icon: <NoTransparencyIcon />,
  },
  {
    title: "Scaling Risk",
    description: "Scale makes the problem worse: every additional agent multiplies the risk of errors, fraud, and inconsistency.",
    icon: <ScalingRiskIcon />,
  },
];

const features = [
  {
    title: "Configurable Survey Forms",
    description: "Build complex multi-section surveys with skip logic, scoring, and media capture — no code required.",
    icon: <ConfigurableSurveyIcon />,
  },
  {
    title: "Offline-First Collection",
    description: "Agents collect data without connectivity. Everything syncs automatically when signal returns.",
    icon: <OfflineFirstCollectionIcon />,
  },
  {
    title: "GIS Location Tagging",
    description: "Every response is tagged to a GPS coordinate and validated against African administrative boundaries.",
    icon: <GisLocationTaggingIcon />,
  },
  {
    title: "Real-Time Progress Dashboard",
    description: "Monitor survey progress, response rates, and QA flags across all agents in real time.",
    icon: <RealTimeProgressDashboardIcon />,
  },
  {
    title: "Automated QA & Validation",
    description: "Anomaly detection catches outliers, duplicates, and inconsistencies before they reach your analysis.",
    icon: <AutomatedQaValidationIcon />,
  },
  {
    title: "Donor-Ready Exports",
    description: "Export clean, annotated datasets to Excel, SPSS, GeoJSON, or directly to your BI tools.",
    icon: <DonorReadyExportsIcon />,
  },
];

export function DataCollectionProblem() {
  return (
    <SolutionOverview
      problems={problems}
      problemImage={DataCollectionProblemImage}
      problemImageAlt="Field data collection"
      featureTitle="How WeCollect solves data collection."
      features={features}
    />
  );
}
