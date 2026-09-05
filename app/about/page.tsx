import { AboutHero } from "@/components/about/AboutHero";
import { WhyWeCollect } from "@/components/about/WhyWeCollect";
import { TrustedOrganizations } from "@/components/home/TrustedOrganizations";
import { VisionSection } from "@/components/about/VisionSection";
import { Testimonials } from "@/components/home/Testimonials";
import { Container } from "@/components/common/Container";
import { FAQ } from "@/components/home/FAQ";

const stats = [
  { value: "1,700+", label: "Trained Agents" },
  { value: "37", label: "States Covered" },
  { value: "300+", label: "LGAs" },
  { value: "8+", label: "Enterprise Clients" },
];

export default function AboutPage() {
  return (
    <>
      <AboutHero />
      <WhyWeCollect />
      
      <TrustedOrganizations variant="light">
        <div className="w-full">
          <Container>
            <div className="grid grid-cols-2 lg:grid-cols-4 border-x border-b border-[#E9E9EF] divide-x divide-y lg:divide-y-0 divide-[#E9E9EF]">
              {stats.map((stat) => (
                <div key={stat.label} className="flex flex-col items-center justify-center h-24 md:h-32 text-center p-4">
                  <h3 className="font-merriweather text-[24px] md:text-[28px] font-bold text-[#0D0D26] mb-1">
                    {stat.value}
                  </h3>
                  <p className="text-[11px] md:text-[13px] font-medium text-[#7F7FA8] uppercase tracking-wide">
                    {stat.label}
                  </p>
                </div>
              ))}
            </div>
          </Container>
        </div>
      </TrustedOrganizations>

      <VisionSection />
      
      <Testimonials variant="with-stats" />

      <FAQ />
    </>
  );
}
