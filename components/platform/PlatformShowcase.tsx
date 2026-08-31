import Image from "next/image";

import { Container } from "@/components/common/Container";
import PlatformImage from "@/assets/pngs/platform-image.png";

export function PlatformShowcase() {
  return (
    <section className="w-full bg-white py-16 md:py-20 lg:py-24">
      <Container>
        {/* Heading */}
        <h2
          className="
            text-center
            font-merriweather
            text-[28px]
            font-bold
            leading-9
            tracking-[-0.5%]
            text-[#0D0D26]
            md:text-[40px]
            md:leading-12
            md:tracking-[-1%]
          "
        >
          WeCollect Platform
        </h2>

        {/* Platform image */}
        <div className="mx-auto mt-10 w-full max-w-[900px] md:mt-12 lg:max-w-[1000px]">
          <Image
            src={PlatformImage}
            alt="WeCollect Platform"
            width={1000}
            height={650}
            priority
            className="h-auto w-full object-contain"
          />
        </div>
      </Container>
    </section>
  );
}
