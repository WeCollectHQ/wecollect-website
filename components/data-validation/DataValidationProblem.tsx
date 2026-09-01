import Image from "next/image";

import { Container } from "@/components/common/Container";
import { SolutionOverview } from "@/components/common/SolutionOverview";

import DataValidationProblemImage from "@/assets/pngs/data-validation-problem.png";

const problems = [
  {
    title: "Data Integrity",
    description:
      "Raw field data is full of GPS spoofing, duplicate entries, outliers, and mismatched administrative units.",
    icon: (
      <svg
        width="28"
        height="28"
        viewBox="0 0 28 28"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <circle cx="12" cy="12" r="8.5" stroke="currentColor" />
        <path d="M18 18L25 25" stroke="currentColor" />
      </svg>
    ),
  },
  {
    title: "No Transparency",
    description:
      "Manual processes leave no audit trail — and no way to prove data quality to clients or regulators.",
    icon: (
      <svg
        width="28"
        height="28"
        viewBox="0 0 28 28"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M7 5.5C7 4.67 7.67 4 8.5 4H16L21 9V22.5C21 23.33 20.33 24 19.5 24H8.5C7.67 24 7 23.33 7 22.5V5.5Z"
          stroke="currentColor"
        />
        <path d="M15 4V10H21" stroke="currentColor" />
        <path d="M13 14H18" stroke="currentColor" />
        <path d="M13 18H17" stroke="currentColor" />
        <path d="M9 12L11 14L9 16" stroke="currentColor" />
      </svg>
    ),
  },
  {
    title: "Scaling Risk",
    description:
      "Scale makes the problem worse: every additional agent multiplies the risk of errors, fraud, and inconsistency.",
    icon: (
      <svg
        width="28"
        height="28"
        viewBox="0 0 28 28"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <rect x="5" y="4" width="18" height="18" rx="4" stroke="currentColor" />
        <path d="M14 9V15" stroke="currentColor" />
        <circle cx="14" cy="18" r="0.8" fill="currentColor" />
      </svg>
    ),
  },
];

const features = [
  {
    title: "GIS Boundary Validation",
    description:
      "Every submission validated against real African administrative boundaries — LGA, ward, state. Mismatches flagged instantly.",
    icon: (
      <svg
        width="28"
        height="28"
        viewBox="0 0 28 28"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M14 25C14 25 22 17.8 22 11C22 6.58 18.42 3 14 3C9.58 3 6 6.58 6 11C6 17.8 14 25 14 25Z"
          stroke="currentColor"
        />
        <circle cx="14" cy="11" r="2.5" stroke="currentColor" />
        <path d="M3 21L14 25L25 21" stroke="currentColor" />
        <path d="M3 17L14 21L25 17" stroke="currentColor" />
      </svg>
    ),
  },
  {
    title: "GPS Spoofing Detection",
    description:
      "Detects simulated locations, VPN-masked coordinates, and teleported submissions. Real presence required.",
    icon: (
      <svg
        width="28"
        height="28"
        viewBox="0 0 28 28"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <circle cx="14" cy="14" r="7" stroke="currentColor" />
        <circle cx="14" cy="14" r="2.5" stroke="currentColor" />
        <path d="M14 3V7" stroke="currentColor" />
        <path d="M14 21V25" stroke="currentColor" />
        <path d="M3 14H7" stroke="currentColor" />
        <path d="M21 14H25" stroke="currentColor" />
      </svg>
    ),
  },
  {
    title: "Automated Anomaly Detection",
    description:
      "AI-assisted scoring flags outlier responses, statistically improbable patterns, and data entry errors.",
    icon: (
      <svg
        width="28"
        height="28"
        viewBox="0 0 28 28"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <rect x="4" y="6" width="14" height="14" stroke="currentColor" />
        <circle cx="19" cy="17" r="5" stroke="currentColor" />
        <path d="M22.5 20.5L25 23" stroke="currentColor" />
        <path d="M7 10H12" stroke="currentColor" />
        <path d="M7 14H10" stroke="currentColor" />
      </svg>
    ),
  },
  {
    title: "Duplicate Record Identification",
    description:
      "Fuzzy matching and exact deduplication across agents, geographies, and time periods.",
    icon: (
      <svg
        width="28"
        height="28"
        viewBox="0 0 28 28"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M7 5.5C7 4.67 7.67 4 8.5 4H18L22 8V22.5C22 23.33 21.33 24 20.5 24H8.5C7.67 24 7 23.33 7 22.5V5.5Z"
          stroke="currentColor"
        />
        <path d="M18 4V9H22" stroke="currentColor" />
        <path d="M4 8V22.5C4 23.33 4.67 24 5.5 24H8" stroke="currentColor" />
      </svg>
    ),
  },
  {
    title: "AI Output Ground-Truthing",
    description:
      "Validate AI-generated predictions against physical field reality. The bridge between AI and ground truth.",
    icon: (
      <svg
        width="28"
        height="28"
        viewBox="0 0 28 28"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M14 3L15.5 8.5L21 10L15.5 11.5L14 17L12.5 11.5L7 10L12.5 8.5L14 3Z"
          stroke="currentColor"
        />
        <path
          d="M21 17L22 20L25 21L22 22L21 25L20 22L17 21L20 20L21 17Z"
          stroke="currentColor"
        />
      </svg>
    ),
  },
  {
    title: "Clean Data Delivery",
    description:
      "Validated, annotated datasets ready for analysis — with a full QA report documenting every decision.",
    icon: (
      <svg
        width="28"
        height="28"
        viewBox="0 0 28 28"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M8 7C8 5.9 8.9 5 10 5H18C19.1 5 20 5.9 20 7V21C20 22.1 19.1 23 18 23H10C8.9 23 8 22.1 8 21V7Z"
          stroke="currentColor"
        />
        <path d="M11 9H17" stroke="currentColor" />
        <path d="M11 13H17" stroke="currentColor" />
        <path d="M11 17H15" stroke="currentColor" />
      </svg>
    ),
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
