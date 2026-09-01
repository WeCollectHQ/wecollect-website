import { Button } from "@/components/common/Button";
import { Container } from "@/components/common/Container";
import { ArrowUpRightIcon } from "@/assets/svgs";

const capabilities = [
  {
    title: "No-Code Form Builder",
    description:
      "Design structured field forms with logic, branching, and media capture — zero code required.",
    icon: (
      <svg
        width="28"
        height="28"
        viewBox="0 0 28 28"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M7 3.5H16.625L22.75 9.625V24.5H7V3.5Z"
          stroke="currentColor"
          strokeWidth="1.5"
        />
        <path
          d="M16.625 3.5V9.625H22.75"
          stroke="currentColor"
          strokeWidth="1.5"
        />
        <path
          d="M11 14H18.5M11 18H16"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
        />
      </svg>
    ),
  },
  {
    title: "GIS Validation Engine",
    description:
      "Every submission geo-tagged, boundary-checked, and validated against real map data in real time.",
    icon: (
      <svg
        width="28"
        height="28"
        viewBox="0 0 28 28"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M14 25C18.667 20.8 21 17.067 21 13C21 9.134 17.866 6 14 6C10.134 6 7 9.134 7 13C7 17.067 9.333 20.8 14 25Z"
          stroke="currentColor"
          strokeWidth="1.5"
        />
        <circle
          cx="14"
          cy="13"
          r="2.5"
          stroke="currentColor"
          strokeWidth="1.5"
        />
        <path d="M4 20L14 24L24 20" stroke="currentColor" strokeWidth="1.5" />
      </svg>
    ),
  },
  {
    title: "Real-Time QA & Geofencing",
    description:
      "AI-assisted quality flags catch bad data before it leaves the field. Geofences verify physical presence.",
    icon: (
      <svg
        width="28"
        height="28"
        viewBox="0 0 28 28"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M2.5 14H7L9.5 7L14 21L17.5 10L20 14H25.5"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    ),
  },
  {
    title: "Live Dashboard & Tracking",
    description:
      "Monitor every agent in real time. GPS location, submission counts, completion status, anomaly alerts.",
    icon: (
      <svg
        width="28"
        height="28"
        viewBox="0 0 28 28"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M5 20C5 12.82 8.82 8 14 8C19.18 8 23 12.82 23 20"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
        />
        <path
          d="M14 14L19 11"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
        />
        <path d="M4 20H24" stroke="currentColor" strokeWidth="1.5" />
      </svg>
    ),
  },
  {
    title: "Secure Encrypted Storage",
    description:
      "Encrypted at rest and in transit. Role-based access. Full audit trails on every record.",
    icon: (
      <svg
        width="28"
        height="28"
        viewBox="0 0 28 28"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M5 15C5 11.686 7.686 9 11 9C11.465 9 11.917 9.053 12.348 9.153C13.173 6.728 15.469 5 18.167 5C21.572 5 24.333 7.761 24.333 11.167C24.333 11.628 24.282 12.077 24.186 12.509"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
        />
        <path d="M5 15H18" stroke="currentColor" strokeWidth="1.5" />
        <rect
          x="17"
          y="15"
          width="7"
          height="7"
          rx="1"
          stroke="currentColor"
          strokeWidth="1.5"
        />
        <path
          d="M19 15V13.5C19 12.672 19.672 12 20.5 12C21.328 12 22 12.672 22 13.5V15"
          stroke="currentColor"
          strokeWidth="1.5"
        />
      </svg>
    ),
  },
  {
    title: "Automated Payout",
    description:
      "Pay agents automatically based on verified submissions — eliminating fraud and cash handling.",
    icon: (
      <svg
        width="28"
        height="28"
        viewBox="0 0 28 28"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <rect
          x="4"
          y="7"
          width="20"
          height="12"
          stroke="currentColor"
          strokeWidth="1.5"
        />
        <circle
          cx="14"
          cy="13"
          r="2.5"
          stroke="currentColor"
          strokeWidth="1.5"
        />
        <path
          d="M14 22V25M11.5 23.5L14 26L16.5 23.5"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    ),
  },
  {
    title: "Data Exports & API",
    description:
      "Export to Excel, CSV, GeoJSON, or connect via REST API to your own systems and BI tools.",
    icon: (
      <svg
        width="28"
        height="28"
        viewBox="0 0 28 28"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path d="M5 4V23H23" stroke="currentColor" strokeWidth="1.5" />
        <path
          d="M10 17L14 13L17 16L23 9"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path d="M18 9H23V14" stroke="currentColor" strokeWidth="1.5" />
      </svg>
    ),
  },
  {
    title: "AI-Assisted QA",
    description:
      "Flags anomalies and inconsistent entries in real time, before data leaves the field.",
    icon: (
      <svg
        width="28"
        height="28"
        viewBox="0 0 28 28"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M14 4L15.5 9.5L21 11L15.5 12.5L14 18L12.5 12.5L7 11L12.5 9.5L14 4Z"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinejoin="round"
        />
        <path
          d="M21 18L21.75 20.25L24 21L21.75 21.75L21 24L20.25 21.75L18 21L20.25 20.25L21 18Z"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinejoin="round"
        />
      </svg>
    ),
  },
  {
    title: "Conversational Data Querying",
    description:
      "Ask questions of your dataset in plain language. The platform returns answers, charts, and summaries.",
    icon: (
      <svg
        width="28"
        height="28"
        viewBox="0 0 28 28"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M5 5H23V18H13L8 23V18H5V5Z"
          stroke="currentColor"
          strokeWidth="1.5"
        />
        <path
          d="M9 10H19M9 14H16"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
        />
      </svg>
    ),
  },
];

const comparisons = [
  {
    feature: "Real-time visibility",
    traditional: "None / delayed",
    wecollect: "Live GPS tracking",
  },
  {
    feature: "Data quality control",
    traditional: "Manual spot checks",
    wecollect: "AI-assisted auto-QA",
  },
  {
    feature: "Fraud prevention",
    traditional: "None",
    wecollect: "GIS + photo evidence",
  },
  {
    feature: "Geo-verification",
    traditional: "Not possible",
    wecollect: "Geofencing required",
  },
  {
    feature: "Agent deployment",
    traditional: "WhatsApp / calls",
    wecollect: "In-app deployment",
  },
  {
    feature: "Reporting speed",
    traditional: "Days to weeks",
    wecollect: "Instant dashboard",
  },
  {
    feature: "Scalability",
    traditional: "Breaks at scale",
    wecollect: "Built for 10M+ records",
  },
];

export function PlatformCapabilities() {
  return (
    <section className="w-full bg-white text-[#0D0D26]">
      {/* CAPABILITIES */}
      <div className="border-b border-[#E9E9EF]">
        <Container>
          <div className="py-20 md:py-24 lg:py-[88px]">
            {/* Header */}
            <div className="flex items-end justify-between gap-8">
              <div>
                <p className="text-[10px] font-medium uppercase leading-4 text-[#9898B3] md:text-[12px]">
                  Capabilities
                </p>

                <h2 className="mt-3 font-merriweather text-[28px] font-bold leading-9 tracking-[-0.5%] text-[#0D0D26] md:text-[40px] md:leading-[1.2] md:tracking-[-1%]">
                  Every feature your field operation needs.
                </h2>
              </div>

              <Button
                href="/demo"
                variant="primary"
                size="lg"
                icon={<ArrowUpRightIcon />}
                className="hidden shrink-0 md:flex"
              >
                Book a Demo
              </Button>
            </div>

            {/* Mobile CTA */}
            <Button
              href="/demo"
              variant="primary"
              size="lg"
              icon={<ArrowUpRightIcon />}
              className="mt-6 md:hidden"
            >
              Book a Demo
            </Button>

            {/* Feature grid */}
            <div className="mt-10 grid grid-cols-1 border-l border-t border-[#E9E9EF] sm:grid-cols-2 lg:grid-cols-3">
              {capabilities.map((capability) => (
                <div
                  key={capability.title}
                  className="min-h-[212px] border-b border-r border-[#E9E9EF] p-7 md:p-8"
                >
                  <div className="text-[#0D0D26]">{capability.icon}</div>

                  <h3 className="mt-5 text-[14px] font-medium leading-5.5 text-[#0D0D26] md:text-[15px]">
                    {capability.title}
                  </h3>

                  <p className="mt-3 max-w-[240px] text-[12px] font-medium leading-5 text-[#686890] md:text-[13px]">
                    {capability.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </Container>
      </div>

      {/* WHY WE COLLECT */}
      <div>
        <Container>
          <div className="py-20 md:py-24 lg:py-[88px]">
            {/* Header */}
            <div className="flex items-end justify-between gap-8">
              <div>
                <p className="text-[10px] font-medium uppercase leading-4 text-[#9898B3] md:text-[12px]">
                  Why WeCollect
                </p>

                <h2 className="mt-3 font-merriweather text-[28px] font-bold leading-9 tracking-[-0.5%] text-[#0D0D26] md:text-[40px] md:leading-[1.2] md:tracking-[-1%]">
                  What changes when you use the WeCollect?
                </h2>
              </div>

              <Button
                href="/demo"
                variant="primary"
                size="lg"
                icon={<ArrowUpRightIcon />}
                className="hidden shrink-0 md:flex"
              >
                Book a Demo
              </Button>
            </div>

            {/* Mobile CTA */}
            <Button
              href="/demo"
              variant="primary"
              size="lg"
              icon={<ArrowUpRightIcon />}
              className="mt-6 md:hidden"
            >
              Book a Demo
            </Button>

            {/* Comparison table */}
            <div className="mt-10 overflow-x-auto border border-[#E9E9EF]">
              <table className="w-full min-w-[700px] border-collapse">
                <thead>
                  <tr className="h-[40px]">
                    <th className="w-[30%] border-b border-r border-[#E9E9EF] px-7 text-left text-[10px] font-bold uppercase text-[#9898B3]">
                      Feature
                    </th>

                    <th className="w-[30%] border-b border-r border-[#E9E9EF] px-7 text-left text-[10px] font-bold uppercase text-[#9898B3]">
                      Traditional Process
                    </th>

                    <th className="w-[40%] border-b border-[#E9E9EF] px-7 text-left text-[10px] font-bold uppercase text-[#9898B3]">
                      WeCollect
                    </th>
                  </tr>
                </thead>

                <tbody>
                  {comparisons.map((comparison) => (
                    <tr key={comparison.feature}>
                      {/* Feature */}
                      <td className="border-b border-r border-[#E9E9EF] px-7 py-4">
                        <div className="flex items-center gap-3">
                          <span className="text-[14px] text-[#30308A]">✣</span>

                          <span className="text-[12px] font-medium text-[#0D0D26] md:text-[13px]">
                            {comparison.feature}
                          </span>
                        </div>
                      </td>

                      {/* Traditional */}
                      <td className="border-b border-r border-[#E9E9EF] px-7 py-4">
                        <div className="flex items-center gap-3">
                          <span className="text-[13px] text-red-500">⊘</span>

                          <span className="text-[12px] font-medium text-[#686890] line-through md:text-[13px]">
                            {comparison.traditional}
                          </span>
                        </div>
                      </td>

                      {/* WeCollect */}
                      <td className="border-b border-[#E9E9EF] bg-[#4B4BDE] px-7 py-4">
                        <div className="flex items-center gap-3">
                          <span className="text-[14px] font-bold text-[#4ADE80]">
                            ✓
                          </span>

                          <span className="text-[12px] font-medium text-white md:text-[13px]">
                            {comparison.wecollect}
                          </span>
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </Container>
      </div>
    </section>
  );
}
