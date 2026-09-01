import { SolutionOverview } from "@/components/common/SolutionOverview";
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
    icon: <ContextGapIcon />,
    title: "Context Gap",
    description: "AI models trained on Western data fall in African contexts.",
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
    icon: <VoiceDataIcon />,
    title: "African-Language Voice Data",
    description:
      "Structured audio corpus collection across African and African languages — Hausa, Yoruba, Igbo, Swahili, and more.",
  },
  {
    icon: <GeoTaggedFieldIcon />,
    title: "Geo-Tagged Field Photography",
    description:
      "Verified, location-stamped visual data from African streets, markets, and infrastructure.",
  },
  {
    icon: <GeospatialGroundTruthIcon />,
    title: "Geospatial Ground Truth",
    description:
      "GIS-validated field data that confirms or corrects AI-generated geographic predictions.",
  },
  {
    icon: <StructuredTextIcon />,
    title: "Survey & Structured Text",
    description:
      "Clean, annotated survey responses capturing local context that satellite data misses.",
  },
  {
    icon: <HumanInTheLoopIcon />,
    title: "Human-in-the-Loop Annotation",
    description:
      "Field agents as annotators — labeling, verifying, and validating model outputs from the ground.",
  },
  {
    icon: <CustomDataPipelineIcon />,
    title: "Custom Data Collection Pipeline",
    description:
      "Bespoke data collection projects designed around your model's specific training requirements.",
  },
];

export function AiDataProblem() {
  return (
    <SolutionOverview
      problems={problems}
      problemImage={AiDataProblemImage}
      problemImageAlt="Field worker collecting AI data"
      featureTitle="How WeCollect solves data problem with AI."
      features={features}
    />
  );
}
