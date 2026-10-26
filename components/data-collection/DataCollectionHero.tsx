import { SolutionHero } from "@/components/common/SolutionHero";
import DataCollectionHeroImage from "@/assets/pngs/data-collection-hero-image.webp";

export function DataCollectionHero() {
  return (
    <SolutionHero
      eyebrow="Data Collection"
      title={
        <>
          Mobile data collection <br /> built for offline.
        </>
      }
      description="Deploy custom surveys, capture media, and track field teams in real time — even when the internet goes down."
      image={DataCollectionHeroImage}
      imageAlt="Wecollect field agent collecting data"
    />
  );
}
