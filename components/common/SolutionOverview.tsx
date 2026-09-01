import Image, { StaticImageData } from "next/image";
import { Container } from "@/components/common/Container";

export interface OverviewItem {
  icon: React.ReactNode;
  title: string;
  description: string;
}

export interface SolutionOverviewProps {
  problemEyebrow?: string;
  problemTitle?: string;
  problems: OverviewItem[];
  problemImage: string | StaticImageData;
  problemImageAlt?: string;

  featureEyebrow?: string;
  featureTitle: string;
  features: OverviewItem[];
}

export function SolutionOverview({
  problemEyebrow = "The Problem",
  problemTitle = "What we solve.",
  problems,
  problemImage,
  problemImageAlt = "The problem illustrated",
  featureEyebrow = "Key Features",
  featureTitle,
  features,
}: SolutionOverviewProps) {
  return (
    <section className="bg-white text-[#0D0D26]">
      <Container>
        <div className="py-16 md:py-20 lg:py-[60px]">
          {/* THE PROBLEM */}
          <div className="mb-7">
            <p className="text-[10px] font-medium uppercase leading-4 text-[#9898B3]">
              {problemEyebrow}
            </p>

            <h2 className="mt-3 font-merriweather text-[30px] font-bold leading-[1.2] tracking-[-1%] md:text-[34px] lg:text-[38px]">
              {problemTitle}
            </h2>
          </div>

          {/* PROBLEM GRID */}
          <div className="grid overflow-hidden border-l border-t border-[#E7E7EE] md:grid-cols-[1fr_0.8fr]">
            {/* LEFT — PROBLEMS */}
            <div className="grid grid-rows-3">
              {problems.map((problem, index) => (
                <div
                  key={problem.title}
                  className={`
                    flex
                    min-h-[140px]
                    flex-col
                    justify-center
                    border-b
                    border-r
                    border-[#E7E7EE]
                    px-5
                    py-5
                    md:min-h-[145px]
                    lg:px-6
                  `}
                >
                  <div className="mb-4 flex h-7 w-7 items-center justify-center text-[#0D0D26]">
                    {problem.icon}
                  </div>

                  <h3 className="text-[13px] font-medium leading-5 text-[#0D0D26] md:text-[14px]">
                    {problem.title}
                  </h3>

                  <p className="mt-2 max-w-[390px] text-[10px] font-medium leading-[1.6] text-[#555580] md:text-[11px]">
                    {problem.description}
                  </p>
                </div>
              ))}
            </div>

            {/* RIGHT IMAGE */}
            <div className="relative min-h-[390px] border-b border-r border-[#E7E7EE] md:min-h-0">
              <Image src={problemImage} alt={problemImageAlt} fill className="object-cover" />
            </div>
          </div>

          {/* KEY FEATURES */}
          <div className="mt-16 md:mt-20 lg:mt-[60px]">
            <div className="mb-7">
              <p className="text-[10px] font-medium uppercase leading-4 text-[#9898B3]">
                {featureEyebrow}
              </p>

              <h2 className="mt-3 font-merriweather text-[28px] font-bold leading-[1.2] tracking-[-1%] md:text-[32px] lg:text-[36px]">
                {featureTitle}
              </h2>
            </div>

            {/* FEATURES GRID */}
            <div className="grid grid-cols-1 border-l border-t border-[#E7E7EE] sm:grid-cols-2 lg:grid-cols-3">
              {features.map((feature) => (
                <div
                  key={feature.title}
                  className="
                    min-h-[190px]
                    border-b
                    border-r
                    border-[#E7E7EE]
                    px-5
                    py-7
                    md:min-h-[200px]
                    md:px-6
                    md:py-8
                  "
                >
                  <div className="mb-4 flex h-7 w-7 items-center justify-center text-[#0D0D26]">
                    {feature.icon}
                  </div>

                  <h3 className="mt-2 max-w-[200px] text-[13px] font-medium leading-[1.5] text-[#0D0D26] md:text-[14px]">
                    {feature.title}
                  </h3>

                  <p className="mt-3 max-w-[240px] text-[10px] font-medium leading-[1.65] text-[#555580] md:text-[11px]">
                    {feature.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
