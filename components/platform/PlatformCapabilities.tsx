import { Button } from "@/components/common/Button";
import { Container } from "@/components/common/Container";
import { 
  ArrowUpRightIcon,
  FormBuilderIcon,
  GisValidationIcon,
  GeofencingIcon,
  LiveDashboardIcon,
  SecureStorageIcon,
  AutomatedPayoutIcon,
  DataExportsIcon,
  AiAssistedQaIcon,
  ConversationalQueryIcon,
  FeatureBulletIcon,
  ProhibitedIcon,
  ThickCheckIcon
} from "@/assets/svgs";

const capabilities = [
  {
    title: "No-Code Form Builder",
    description:
      "Design structured field forms with logic, branching, and media capture — zero code required.",
    icon: <FormBuilderIcon />,
  },
  {
    title: "GIS Validation Engine",
    description:
      "Every submission geo-tagged, boundary-checked, and validated against real map data in real time.",
    icon: <GisValidationIcon />,
  },
  {
    title: "Real-Time QA & Geofencing",
    description:
      "AI-assisted quality flags catch bad data before it leaves the field. Geofences verify physical presence.",
    icon: <GeofencingIcon />,
  },
  {
    title: "Live Dashboard & Tracking",
    description:
      "Monitor every agent in real time. GPS location, submission counts, completion status, anomaly alerts.",
    icon: <LiveDashboardIcon />,
  },
  {
    title: "Secure Encrypted Storage",
    description:
      "Encrypted at rest and in transit. Role-based access. Full audit trails on every record.",
    icon: <SecureStorageIcon />,
  },
  {
    title: "Automated Payout",
    description:
      "Pay agents automatically based on verified submissions — eliminating fraud and cash handling.",
    icon: <AutomatedPayoutIcon />,
  },
  {
    title: "Data Exports & API",
    description:
      "Export to Excel, CSV, GeoJSON, or connect via REST API to your own systems and BI tools.",
    icon: <DataExportsIcon />,
  },
  {
    title: "AI-Assisted QA",
    description:
      "Flags anomalies and inconsistent entries in real time, before data leaves the field.",
    icon: <AiAssistedQaIcon />,
  },
  {
    title: "Conversational Data Querying",
    description:
      "Ask questions of your dataset in plain language. The platform returns answers, charts, and summaries.",
    icon: <ConversationalQueryIcon />,
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
                          <span className="shrink-0 flex items-center justify-center">
                            <FeatureBulletIcon />
                          </span>

                          <span className="text-[12px] font-medium text-[#0D0D26] md:text-[13px]">
                            {comparison.feature}
                          </span>
                        </div>
                      </td>

                      {/* Traditional */}
                      <td className="border-b border-r border-[#E9E9EF] px-7 py-4">
                        <div className="flex items-center gap-3">
                          <span className="shrink-0 flex items-center justify-center">
                            <ProhibitedIcon />
                          </span>

                          <span className="text-[12px] font-medium text-[#686890] line-through md:text-[13px]">
                            {comparison.traditional}
                          </span>
                        </div>
                      </td>

                      {/* WeCollect */}
                      <td className="border-b border-[#E9E9EF] bg-[#4B4BDE] px-7 py-4">
                        <div className="flex items-center gap-3">
                          <span className="shrink-0 flex items-center justify-center">
                            <ThickCheckIcon />
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
