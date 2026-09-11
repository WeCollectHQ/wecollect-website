import { PricingHero } from "@/components/pricing/PricingHero";
import { PricingContent } from "@/components/pricing/PricingContent";

export default function PricingPage() {
  return (
    <div className="w-full flex flex-col">
      <PricingHero />
      <PricingContent />
    </div>
  );
}
