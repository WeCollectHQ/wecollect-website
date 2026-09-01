import Image from "next/image";
import { Container } from "@/components/common/Container";
import AiDataProblemImage from "@/assets/pngs/ai-data-problem.png";
import {
  ContextGapIcon,
  TransparencyIcon,
  ScalingRiskIcon,
  VoiceDataIcon,
  GeoTaggedFieldIcon,
  GeospatialGroundTruthIcon,
  StructuredTextIcon,
  HumanInTheLoopIcon,
  CustomDataPipelineIcon,
} from "@/assets/svgs";

const problems = [
  {
    icon: ContextGapIcon,
    title: "Context Gap",
    description: "AI models trained on Western data fall in African contexts.",
  },
  {
    icon: TransparencyIcon,
    title: "No Transparency",
    description:
      "Manual processes leave no audit trail — and no way to prove data quality to clients or regulators.",
  },
  {
    icon: ScalingRiskIcon,
    title: "Scaling Risk",
    description:
      "Scale makes the problem worse: every additional agent multiplies the risk of errors, fraud, and inconsistency.",
  },
];

const features = [
  {
    icon: VoiceDataIcon,
    title: "African-Language Voice Data",
    description:
      "Structured audio corpus collection across African and African languages — Hausa, Yoruba, Igbo, Swahili, and more.",
  },
  {
    icon: GeoTaggedFieldIcon,
    title: "Geo-Tagged Field Photography",
    description:
      "Verified, location-stamped visual data from African streets, markets, and infrastructure.",
  },
  {
    icon: GeospatialGroundTruthIcon,
    title: "Geospatial Ground Truth",
    description:
      "GIS-validated field data that confirms or corrects AI-generated geographic predictions.",
  },
  {
    icon: StructuredTextIcon,
    title: "Survey & Structured Text",
    description:
      "Clean, annotated survey responses capturing local context that satellite data misses.",
  },
  {
    icon: HumanInTheLoopIcon,
    title: "Human-in-the-Loop Annotation",
    description:
      "Field agents as annotators — labeling, verifying, and validating model outputs from the ground.",
  },
  {
    icon: CustomDataPipelineIcon,
    title: "Custom Data Collection Pipeline",
    description:
      "Bespoke data collection projects designed around your model's specific training requirements.",
  },
];

export function AiDataProblem() {
  return (
    <section className="bg-white text-[#0D0D26]">
      <Container>
        <div className="py-16 md:py-20 lg:py-[60px]">
          {/* THE PROBLEM */}
          <div>
            <p className="text-[10px] font-medium uppercase leading-4 text-[#9898B3]">
              The Problem
            </p>

            <h2
              className="
                mt-3
                font-merriweather
                text-[30px]
                font-bold
                leading-[1.2]
                tracking-[-1%]
                md:text-[34px]
                lg:text-[38px]
              "
            >
              What we solve.
            </h2>
          </div>

          {/* PROBLEM GRID */}
          <div
            className="
              mt-7
              grid
              border-l
              border-t
              border-[#E6E6EC]
              md:grid-cols-[1fr_1fr]
            "
          >
            {/* LEFT — PROBLEMS */}
            <div className="grid grid-rows-3">
              {problems.map((problem) => {
                const Icon = problem.icon;

                return (
                  <div
                    key={problem.title}
                    className="
                      flex
                      min-h-[130px]
                      flex-col
                      justify-center
                      border-b
                      border-r
                      border-[#E6E6EC]
                      px-5
                      py-5
                      md:min-h-[135px]
                      lg:px-6
                    "
                  >
                    <Icon className="h-6 w-6 text-[#0D0D26]" />

                    <h3 className="mt-4 text-[12px] font-medium leading-5">
                      {problem.title}
                    </h3>

                    <p
                      className="
                        mt-2
                        max-w-[390px]
                        text-[9px]
                        font-medium
                        leading-[1.6]
                        text-[#555580]
                        md:text-[10px]
                      "
                    >
                      {problem.description}
                    </p>
                  </div>
                );
              })}
            </div>

            {/* RIGHT IMAGE */}
            <div
              className="
                relative
                min-h-[390px]
                overflow-hidden
                border-b
                border-r
                border-[#E6E6EC]
                md:min-h-0
              "
            >
              <Image
                src={AiDataProblemImage}
                alt="Field worker collecting AI data"
                fill
                className="object-cover"
              />
            </div>
          </div>

          {/* KEY FEATURES */}
          <div className="mt-16 md:mt-20 lg:mt-[60px]">
            <p className="text-[10px] font-medium uppercase leading-4 text-[#9898B3]">
              Key Features
            </p>

            <h2
              className="
                mt-3
                font-merriweather
                text-[28px]
                font-bold
                leading-[1.2]
                tracking-[-1%]
                md:text-[32px]
                lg:text-[36px]
              "
            >
              How WeCollect solves data problem with AI.
            </h2>
          </div>

          {/* FEATURES GRID */}
          <div
            className="
              mt-7
              grid
              grid-cols-1
              border-l
              border-t
              border-[#E6E6EC]
              sm:grid-cols-2
              lg:grid-cols-3
            "
          >
            {features.map((feature) => {
              const Icon = feature.icon;

              return (
                <div
                  key={feature.title}
                  className="
                    min-h-[170px]
                    border-b
                    border-r
                    border-[#E6E6EC]
                    px-5
                    py-6
                    md:min-h-[180px]
                    md:px-6
                    md:py-7
                  "
                >
                  <Icon className="h-6 w-6 text-[#0D0D26]" />

                  <h3
                    className="
                      mt-4
                      max-w-[190px]
                      text-[11px]
                      font-medium
                      leading-[1.5]
                      text-[#0D0D26]
                      md:text-[12px]
                    "
                  >
                    {feature.title}
                  </h3>

                  <p
                    className="
                      mt-2
                      max-w-[230px]
                      text-[9px]
                      font-medium
                      leading-[1.65]
                      text-[#555580]
                      md:text-[10px]
                    "
                  >
                    {feature.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </Container>
    </section>
  );
}
