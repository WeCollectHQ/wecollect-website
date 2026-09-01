import { SolutionOverview } from "@/components/common/SolutionOverview";
import DataCollectionProblemImage from "@/assets/pngs/data-collection-problem-image.png";

const problems = [
  {
    title: "Slow Operations",
    description: "Manual field data collection is slow, error-prone, and nearly impossible to audit.",
    icon: (
      <div className="relative h-6 w-6 rounded-full border border-[#0D0D26]">
        <span className="absolute left-1/2 top-[-4px] h-[30px] w-px -translate-x-1/2 rotate-45 bg-[#0D0D26]" />
        <span className="absolute left-1/2 top-[-4px] h-[30px] w-px -translate-x-1/2 -rotate-45 bg-[#0D0D26]" />
      </div>
    ),
  },
  {
    title: "No Transparency",
    description: "Manual processes leave no audit trail — and no way to prove data quality to clients or regulators.",
    icon: <div className="flex h-6 w-5 items-center justify-center rounded border border-[#0D0D26] text-[14px]">?</div>,
  },
  {
    title: "Scaling Risk",
    description: "Scale makes the problem worse: every additional agent multiplies the risk of errors, fraud, and inconsistency.",
    icon: <div className="flex h-6 w-5 items-center justify-center rounded border border-[#0D0D26] text-[13px]">!</div>,
  },
];

const features = [
  {
    title: "Configurable Survey Forms",
    description: "Build complex multi-section surveys with skip logic, scoring, and media capture — no code required.",
    icon: (
      <svg viewBox="0 0 32 32" fill="none" stroke="currentColor" strokeWidth="1.5" className="h-7 w-7">
        <path d="M8 4h11l6 6v18H8V4Z" />
        <path d="M19 4v7h6" />
        <path d="M12 17h9M12 21h6" />
        <circle cx="21" cy="23" r="4" fill="white" />
        <path d="m19.5 23 1 1 2-2" />
      </svg>
    ),
  },
  {
    title: "Offline-First Collection",
    description: "Agents collect data without connectivity. Everything syncs automatically when signal returns.",
    icon: (
      <svg viewBox="0 0 32 32" fill="none" stroke="currentColor" strokeWidth="1.5" className="h-7 w-7">
        <path d="M6 12a15 15 0 0 1 20 0M9 16a10 10 0 0 1 14 0M13 20a5 5 0 0 1 6 0" />
        <path d="M5 5 27 27" />
      </svg>
    ),
  },
  {
    title: "GIS Location Tagging",
    description: "Every response is tagged to a GPS coordinate and validated against African administrative boundaries.",
    icon: (
      <svg viewBox="0 0 32 32" fill="none" stroke="currentColor" strokeWidth="1.5" className="h-7 w-7">
        <path d="M16 28s9-7.3 9-15a9 9 0 1 0-18 0c0 7.7 9 15 9 15Z" />
        <circle cx="16" cy="13" r="3" />
        <path d="M7 25h18M4 28h24" />
      </svg>
    ),
  },
  {
    title: "Real-Time Progress Dashboard",
    description: "Monitor survey progress, response rates, and QA flags across all agents in real time.",
    icon: (
      <svg viewBox="0 0 32 32" fill="none" stroke="currentColor" strokeWidth="1.5" className="h-7 w-7">
        <path d="M5 21a11 11 0 1 1 22 0" />
        <path d="M16 21 23 13" />
        <path d="M5 24h22" />
      </svg>
    ),
  },
  {
    title: "Automated QA & Validation",
    description: "Anomaly detection catches outliers, duplicates, and inconsistencies before they reach your analysis.",
    icon: (
      <svg viewBox="0 0 32 32" fill="none" stroke="currentColor" strokeWidth="1.5" className="h-7 w-7">
        <path d="M7 7h13l5 5v14H7V7Z" />
        <path d="M20 7v6h5M11 17l3 3 6-7" />
      </svg>
    ),
  },
  {
    title: "Donor-Ready Exports",
    description: "Export clean, annotated datasets to Excel, SPSS, GeoJSON, or directly to your BI tools.",
    icon: (
      <svg viewBox="0 0 32 32" fill="none" stroke="currentColor" strokeWidth="1.5" className="h-7 w-7">
        <path d="M7 10v15h15" />
        <path d="M12 5h13v13" />
        <path d="m17 13 8-8M25 5l-1 5" />
      </svg>
    ),
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
