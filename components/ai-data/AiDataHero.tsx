import { SolutionHero } from "@/components/common/SolutionHero";
import AiDataHeroImage from "@/assets/pngs/ai-data-hero.png";

export function AiDataHero() {
  return (
    <SolutionHero
      eyebrow="AI Data"
      title="Ground-truth data for AI built on Africa."
      description="WeCollect is the verified data layer that trains the models defining Africa's AI future — voice, vision, geospatial, and survey at scale."
      image={AiDataHeroImage}
      imageAlt="WeCollect field agents collecting AI training data"
    />
  );
}
