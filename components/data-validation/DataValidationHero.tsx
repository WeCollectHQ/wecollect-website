import { SolutionHero } from "@/components/common/SolutionHero";
import DataValidationHeroImage from "@/assets/pngs/data-validation-hero.png";

export function DataValidationHero() {
  return (
    <SolutionHero
      eyebrow="Monitoring and Evaluation"
      title="GIS and AI backed Monitoring and Evaluation."
      description="Clean, validated, decision-ready data — with geospatial verification and AI-assisted quality control built in."
      image={DataValidationHeroImage}
      imageAlt="Field agent performing data validation"
    />
  );
}
