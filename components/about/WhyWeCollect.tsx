import Image from "next/image";
import { Container } from "@/components/common/Container";
import { Button } from "@/components/common/Button";
import { ArrowUpRightIcon } from "@/assets/svgs";
import WhyWeCollectImage from "@/assets/pngs/why-wecollect.png";

export function WhyWeCollect() {
  return (
    <section className="py-20 md:py-32 bg-white">
      <Container>
        <div className="flex flex-col items-center text-center mb-12 md:mb-16">
          <span className="text-[10px] md:text-[12px] font-bold uppercase tracking-widest text-[#7F7FA8] mb-4">
            MISSION
          </span>
          <h2 className="font-merriweather text-[32px] md:text-[40px] lg:text-[48px] font-bold text-[#0D0D26] leading-tight">
            Why WeCollect exists.
          </h2>
        </div>
      </Container>

      <div className="w-full border-y border-[#E7E7EF]">
        <Container>
          <div className="grid lg:grid-cols-2 border-x border-[#E7E7EF]">
            {/* LEFT COLUMN - TEXT */}
            <div className="bg-[#F8F9FB] p-8 md:p-12 flex flex-col justify-center text-center">
              <p className="text-[#5D5D88] text-[15px] md:text-[17px] leading-[1.7] mb-6 font-medium">
                Field operations across Africa run on WhatsApp, paper forms, and
                phone calls. Data arrives late, unverified, and often unusable.
                WeCollect exists to replace that infrastructure — with
                technology that's as rigorous as the best global platforms,
                built for the specific realities of the African field.
              </p>
              <p className="text-[#5D5D88] text-[15px] md:text-[17px] leading-[1.7] mb-10 font-medium">
                We lead with technology, like the best field SaaS platforms in
                the world. But we can also deploy people — 1,700+ trained,
                verified agents — when our clients need boots on the ground.
              </p>

              <div className="flex flex-col sm:flex-row items-center gap-4">
                <Button
                  href="/platform"
                  variant="primary"
                  size="lg"
                  icon={<ArrowUpRightIcon />}
                  className="w-full sm:w-auto"
                >
                  Explore the Platform
                </Button>
                <Button
                  href="/contact"
                  variant="outline"
                  size="lg"
                  className="w-full sm:w-auto"
                >
                  Contact Us
                </Button>
              </div>
            </div>

            {/* RIGHT COLUMN - IMAGE */}
            <div className="relative w-full h-[300px] md:h-[450px] lg:h-auto border-t lg:border-t-0 lg:border-l border-[#E7E7EF]">
              <Image
                src={WhyWeCollectImage}
                alt="WeCollect Platform Interface"
                fill
                className="object-cover object-center"
              />
            </div>
          </div>
        </Container>
      </div>
    </section>
  );
}
