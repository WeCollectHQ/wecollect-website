import Image from "next/image";

import { Container } from "@/components/common/Container";

import VerificationProblemImage from "@/assets/pngs/verification-problem.png";

import { SolutionOverview } from "@/components/common/SolutionOverview";

const problems = [
  {
    icon: <FraudRiskIcon />,
    title: "Fraud & Location Risk",
    description: "Agents claiming to visit sites while submitting forms from their living rooms.",
  },
  {
    icon: <TransparencyIcon />,
    title: "No Transparency",
    description: "Manual processes leave no audit trail — and no way to prove data quality to clients or regulators.",
  },
  {
    icon: <ScalingRiskIcon />,
    title: "Scaling Risk",
    description: "Scale makes the problem worse: every additional agent multiplies the risk of errors, fraud, and inconsistency.",
  },
];

const features = [
  {
    icon: <AddressValidationIcon />,
    title: "Address Validation",
    description: "Physical visit to confirm address exists, is occupied, and matches the submitted information. GPS proof included.",
  },
  {
    icon: <KycFieldChecksIcon />,
    title: "KYC Field Checks",
    description: "Agent-conducted identity verification with photo evidence, liveness checks, and document capture.",
  },
  {
    icon: <SiteVisitIcon />,
    title: "Site Visit Reporting",
    description: "Structured reports for merchant site visits — business type, activity level, photos, and risk flags.",
  },
  {
    icon: <AssetVerificationIcon />,
    title: "Asset & Merchant Verification",
    description: "Physical confirmation of assets, POS terminals, and merchant locations with evidence packages.",
  },
  {
    icon: <GeoAttendanceIcon />,
    title: "Geo-Verified Attendance",
    description: "Agents must be physically present at the target location. Geofencing blocks remote submission.",
  },
  {
    icon: <ComplianceReportsIcon />,
    title: "Compliance-Ready Reports",
    description: "Structured verification reports with GPS coordinates, timestamps, photos, and agent ID — audit-ready.",
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

/* ========================================
   PROBLEM CARD
======================================== */

function ProblemCard({
  icon,
  title,
  description,
}: {
  icon: React.ReactNode;
  title: string;
  description: string;
}) {
  return (
    <div
      className="
        flex
        min-h-[150px]
        flex-col
        justify-center
        border-b
        border-[#E7E7EF]
        px-4
        py-6
        last:border-b-0
        md:min-h-[125px]
        md:px-5
        lg:px-4
      "
    >
      <div className="mb-3 h-6 w-6 text-[#0D0D26]">{icon}</div>

      <h3 className="text-[12px] font-medium leading-5 text-[#0D0D26] md:text-[13px]">
        {title}
      </h3>

      <p className="mt-2 max-w-[310px] text-[9px] font-normal leading-[1.5] text-[#5D5D88] md:text-[10px]">
        {description}
      </p>
    </div>
  );
}

/* ========================================
   FEATURE CARD
======================================== */

function FeatureCard({
  icon,
  title,
  description,
}: {
  icon: React.ReactNode;
  title: string;
  description: string;
}) {
  return (
    <div
      className="
        min-h-[174px]
        border-b
        border-r
        border-[#E7E7EF]
        px-5
        py-7
        md:min-h-[175px]
        md:px-6
        md:py-7
      "
    >
      <div className="mb-3 h-6 w-6 text-[#0D0D26]">{icon}</div>

      <h3 className="text-[11px] font-medium leading-5 text-[#0D0D26] md:text-[12px]">
        {title}
      </h3>

      <p className="mt-2 max-w-[205px] text-[9px] leading-[1.55] text-[#5D5D88] md:text-[10px]">
        {description}
      </p>
    </div>
  );
}

/* ========================================
   ICONS
======================================== */

function FraudRiskIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.4"
      className="h-full w-full"
    >
      <path d="M4 7.5 9 4l5 3.5v6L9 17l-5-3.5v-6Z" />
      <path d="m14 7.5 5-3.5 1 1v6l-6 4" />
      <path d="M9 9v8" />
      <path d="m7 10 2 1.5L11 10" />
    </svg>
  );
}

function TransparencyIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.4"
      className="h-full w-full"
    >
      <path d="M7 3h8l4 4v13H7V3Z" />
      <path d="M15 3v5h4" />
      <path d="M11 11v4" />
      <path d="M11 17h.01" />
    </svg>
  );
}

function ScalingRiskIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.4"
      className="h-full w-full"
    >
      <rect x="5" y="3" width="14" height="18" rx="3" />
      <path d="M12 8v5" />
      <path d="M12 16h.01" />
    </svg>
  );
}

function AddressValidationIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      className="h-full w-full"
    >
      <circle cx="12" cy="12" r="8" />
      <path d="m8.5 12 2.3 2.3 4.7-5" />
    </svg>
  );
}

function KycFieldChecksIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.4"
      className="h-full w-full"
    >
      <rect x="4" y="6" width="16" height="12" rx="1" />
      <circle cx="9" cy="11" r="2" />
      <path d="M13 10h4M13 13h4" />
      <path d="m6 16 3-2 2 1 3-2 4 3" />
    </svg>
  );
}

function SiteVisitIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.4"
      className="h-full w-full"
    >
      <rect x="6" y="4" width="12" height="17" rx="1" />
      <path d="M9 4V2h6v2" />
      <path d="M9 9h6M9 13h6M9 17h4" />
    </svg>
  );
}

function AssetVerificationIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.4"
      className="h-full w-full"
    >
      <rect x="4" y="5" width="16" height="14" rx="1" />
      <circle cx="15.5" cy="12" r="3" />
      <path d="M8 9h3M8 15h3" />
      <path d="m14 12 1 1 2-2" />
    </svg>
  );
}

function GeoAttendanceIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.4"
      className="h-full w-full"
    >
      <circle cx="9" cy="8" r="3" />
      <path d="M4 20c.7-3 2.3-5 5-5s4.3 2 5 5" />
      <path d="M17 12c2.2 0 4 1.8 4 4 0 3-4 6-4 6s-4-3-4-6c0-2.2 1.8-4 4-4Z" />
      <circle cx="17" cy="16" r="1" />
    </svg>
  );
}

function ComplianceReportsIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.4"
      className="h-full w-full"
    >
      <rect x="5" y="4" width="14" height="17" rx="1" />
      <path d="M9 4V2h6v2" />
      <path d="m8 12 2 2 5-5" />
      <path d="M8 17h8" />
    </svg>
  );
}
