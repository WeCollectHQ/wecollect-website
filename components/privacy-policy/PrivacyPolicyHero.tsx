import Image from "next/image";
import { Container } from "@/components/common/Container";
import PlatformHeroBgImage from "@/assets/pngs/platform-hero-bg-image.webp";

export function PrivacyPolicyHero() {
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
        <div className="relative z-10 flex min-h-[200px] md:min-h-[250px] flex-col items-center justify-center py-16 md:py-20 text-center">
          <h1 className="font-merriweather text-[32px] sm:text-[36px] md:text-[44px] lg:text-[48px] font-bold leading-tight tracking-[-1%] text-white">
            Privacy Policy
          </h1>
        </div>
      </Container>
    </section>
  );
}
