import { SolutionHero } from "@/components/common/SolutionHero";
import FieldOperationsHeroImage from "@/assets/pngs/field-operations-hero-image.png";

export function FieldOperationsHero() {
  return (
    <SolutionHero
      eyebrow="Field Operations"
      title={
        <>
          Real-time tracking of <br /> Field Operations.
        </>
      }
      description="Manage, verify, and pay your field team from one platform — with real-time GPS visibility."
      image={FieldOperationsHeroImage}
      imageAlt="Field operations tracking"
    />
  );
}
