import Image from "next/image";

import { Container } from "@/components/common/Container";

import AfricaCoverageMapImage from "@/assets/pngs/africa-coverage-map.png";

export function AfricanCoverage() {
  return (
    <section className="bg-white text-[#0D0D26]">
      {/* Heading */}
      <Container>
        <div className="pt-4 text-center md:pt-6">
          <p className="text-[9px] font-medium uppercase leading-4 text-[#9898B3]">
            African Coverage
          </p>

          <h2 className="mt-2 font-merriweather text-[23px] font-bold leading-[1.25] tracking-[-1%] md:text-[26px]">
            15+ countries. 500+ administrative regions
          </h2>
        </div>
      </Container>

      {/* Map */}
      <div className="relative mt-5 h-[300px] w-full overflow-hidden sm:h-[350px] md:h-[400px] lg:h-[430px]">
        <Image
          src={AfricaCoverageMapImage}
          alt="WeCollect coverage across Africa"
          fill
          className="object-cover object-center"
        />
      </div>
    </section>
  );
}
