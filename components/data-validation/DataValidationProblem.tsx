import { SolutionOverview } from "@/components/common/SolutionOverview";

import DataValidationProblemImage from "@/assets/pngs/data-validation-problem.png";
import {
  ValidationDataIntegrityIcon,
  ValidationNoTransparencyIcon,
  ValidationScalingRiskIcon,
  ValidationGisBoundaryIcon,
  ValidationGpsSpoofingIcon,
  ValidationAutomatedAnomalyIcon,
  ValidationDuplicateRecordIcon,
  ValidationAiGroundTruthingIcon,
  ValidationCleanDataDeliveryIcon,
} from "@/assets/svgs";

const problems = [
  {
    title: "Data Integrity",
    description:
      "Raw field data is full of GPS spoofing, duplicate entries, outliers, and mismatched administrative units.",
    icon: <ValidationDataIntegrityIcon />,
  },
  {
    title: "No Transparency",
    description:
      "Manual processes leave no audit trail — and no way to prove data quality to clients or regulators.",
    icon: <ValidationNoTransparencyIcon />,
  },
  {
    title: "Scaling Risk",
    description:
      "Scale makes the problem worse: every additional agent multiplies the risk of errors, fraud, and inconsistency.",
    icon: <ValidationScalingRiskIcon />,
  },
];

const features = [
  {
    title: "GIS Boundary Validation",
    description:
      "Every submission validated against real African administrative boundaries — LGA, ward, state. Mismatches flagged instantly.",
    icon: <ValidationGisBoundaryIcon />,
  },
  {
    title: "GPS Spoofing Detection",
    description:
      "Detects simulated locations, VPN-masked coordinates, and teleported submissions. Real presence required.",
    icon: <ValidationGpsSpoofingIcon />,
  },
  {
    title: "Automated Anomaly Detection",
    description:
      "AI-assisted scoring flags outlier responses, statistically improbable patterns, and data entry errors.",
    icon: <ValidationAutomatedAnomalyIcon />,
  },
  {
    title: "Duplicate Record Identification",
    description:
      "Fuzzy matching and exact deduplication across agents, geographies, and time periods.",
    icon: <ValidationDuplicateRecordIcon />,
  },
  {
    title: "AI Output Ground-Truthing",
    description:
      "Validate AI-generated predictions against physical field reality. The bridge between AI and ground truth.",
    icon: <ValidationAiGroundTruthingIcon />,
  },
  {
    title: "Clean Data Delivery",
    description:
      "Validated, annotated datasets ready for analysis — with a full QA report documenting every decision.",
    icon: <ValidationCleanDataDeliveryIcon />,
  },
];

export function DataValidationProblem() {
  return (
    <SolutionOverview
      problems={problems}
      problemImage={DataValidationProblemImage}
      problemImageAlt="Field agent validating GPS data"
      featureTitle="How WeCollect solves verification & reporting"
      features={features}
    />
  );
}
