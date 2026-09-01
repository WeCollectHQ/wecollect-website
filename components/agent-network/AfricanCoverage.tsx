import Image from "next/image";

import { Container } from "@/components/common/Container";
import AfricaCoverageMapImage from "@/assets/pngs/africa-coverage-map.png";

export function AfricanCoverage() {
  return (
    <section className="bg-white text-[#0D0D26]">
      {/* Heading */}
      <Container>
        <div className="pt-16 text-center md:pt-20 lg:pt-24">
          <p className="text-[10px] font-bold uppercase leading-4 tracking-wide text-[#9898B3]">
            African Coverage
          </p>

          <h2 className="mt-4 font-merriweather text-[32px] font-bold leading-[1.15] tracking-[-1%] md:text-[40px] lg:text-[44px]">
            15+ countries. 500+ administrative regions
          </h2>
        </div>
      </Container>

      {/* Map */}
      <div className="mx-auto mt-12 w-full max-w-[1920px] md:mt-16 lg:mt-20">
        <Image
          src={AfricaCoverageMapImage}
          alt="WeCollect coverage across Africa"
          className="h-auto w-full object-cover"
          sizes="100vw"
        />
      </div>
    </section>
  );
}
