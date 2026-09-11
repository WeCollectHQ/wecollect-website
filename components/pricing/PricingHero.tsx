import Image from "next/image";
import { Container } from "@/components/common/Container";
import PlatformHeroBgImage from "@/assets/pngs/platform-hero-bg-image.webp";

export function PricingHero() {
  return (
    <section className="relative overflow-hidden bg-[#202064] text-white">
      {/* Background */}
      <Image
        src={PlatformHeroBgImage}
        alt=""
        fill
        priority
        className="pointer-events-none absolute inset-0 h-full w-full object-cover object-center"
      />

      <Container>
        <div className="relative z-10 flex flex-col items-center justify-center py-20 md:py-28 text-center max-w-[800px] mx-auto">
          <div className="inline-block text-[#FDE93D] font-bold tracking-wide uppercase text-sm mb-4">
            Pricing
          </div>
          <h1 className="font-merriweather text-[36px] sm:text-[44px] md:text-[52px] lg:text-[56px] font-bold leading-[1.15] tracking-tight text-white mb-6">
            Field data infrastructure, priced for how you actually work
          </h1>
          <p className="text-[#BDBDD7] text-[16px] md:text-[18px] max-w-[600px] mx-auto leading-relaxed">
            Run your own field team, or let ours run it for you. Either way, you get the same platform underneath.
          </p>
        </div>
      </Container>
    </section>
  );
}
