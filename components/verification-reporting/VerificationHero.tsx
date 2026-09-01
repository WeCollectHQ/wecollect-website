import { SolutionHero } from "@/components/common/SolutionHero";
import VerificationHeroImage from "@/assets/pngs/verification-reporting-hero.png";

export function VerificationHero() {
  return (
    <SolutionHero
      eyebrow="Verification & Reporting"
      title="Address validation and KYC field checks."
      description="Physical verification at scale — address validation, site visits, KYC checks, and asset verification."
      image={VerificationHeroImage}
      imageAlt="Field agent performing address verification"
    />
  );
}
