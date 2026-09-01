import VerificationProblemImage from "@/assets/pngs/verification-problem.png";
import { SolutionOverview } from "@/components/common/SolutionOverview";
import {
  VerificationFraudRiskIcon,
  TransparencyIcon,
  ScalingRiskIcon,
  VerificationAddressValidationIcon,
  VerificationKycFieldChecksIcon,
  VerificationSiteVisitIcon,
  VerificationAssetIcon,
  VerificationGeoAttendanceIcon,
  VerificationComplianceReportsIcon,
} from "@/assets/svgs";

const problems = [
  {
    icon: <VerificationFraudRiskIcon />,
    title: "Fraud & Location Risk",
    description:
      "Agents claiming to visit sites while submitting forms from their living rooms.",
  },
  {
    icon: <TransparencyIcon />,
    title: "No Transparency",
    description:
      "Manual processes leave no audit trail — and no way to prove data quality to clients or regulators.",
  },
  {
    icon: <ScalingRiskIcon />,
    title: "Scaling Risk",
    description:
      "Scale makes the problem worse: every additional agent multiplies the risk of errors, fraud, and inconsistency.",
  },
];

const features = [
  {
    icon: <VerificationAddressValidationIcon />,
    title: "Address Validation",
    description:
      "Physical visit to confirm address exists, is occupied, and matches the submitted information. GPS proof included.",
  },
  {
    icon: <VerificationKycFieldChecksIcon />,
    title: "KYC Field Checks",
    description:
      "Agent-conducted identity verification with photo evidence, liveness checks, and document capture.",
  },
  {
    icon: <VerificationSiteVisitIcon />,
    title: "Site Visit Reporting",
    description:
      "Structured reports for merchant site visits — business type, activity level, photos, and risk flags.",
  },
  {
    icon: <VerificationAssetIcon />,
    title: "Asset & Merchant Verification",
    description:
      "Physical confirmation of assets, POS terminals, and merchant locations with evidence packages.",
  },
  {
    icon: <VerificationGeoAttendanceIcon />,
    title: "Geo-Verified Attendance",
    description:
      "Agents must be physically present at the target location. Geofencing blocks remote submission.",
  },
  {
    icon: <VerificationComplianceReportsIcon />,
    title: "Compliance-Ready Reports",
    description:
      "Structured verification reports with GPS coordinates, timestamps, photos, and agent ID — audit-ready.",
  },
];

export function VerificationOverview() {
  return (
    <SolutionOverview
      problems={problems}
      problemImage={VerificationProblemImage}
      problemImageAlt="Field agent verifying an address"
      featureTitle="How WeCollect solves verification & reporting"
      features={features}
    />
  );
}
