import Image from "next/image";
import { Container } from "@/components/common/Container";
import { Button } from "@/components/common/Button";
import { ArrowUpRightIcon } from "@/assets/svgs";
import VisionPlatformImage from "@/assets/pngs/vision-platform.png";

export function VisionSection() {
  return (
    <section className="py-20 md:py-32 bg-white">
      <Container>
        <div className="flex flex-col items-center text-center mb-12 md:mb-16">
          <span className="text-[10px] md:text-[12px] font-bold uppercase tracking-widest text-[#7F7FA8] mb-4">
            VISION
          </span>
          <h2 className="font-merriweather text-[32px] md:text-[40px] lg:text-[48px] font-bold text-[#0D0D26] leading-tight max-w-[800px]">
            Turn every field action into structured, verified data.
          </h2>
        </div>
      </Container>

      <div className="w-full border-y border-[#E7E7EF]">
        <Container>
          <div className="grid lg:grid-cols-2">
            {/* LEFT COLUMN - IMAGE */}
            <div className="relative w-full h-[300px] md:h-[450px] lg:h-auto min-h-[400px] border-b lg:border-b-0 lg:border-r border-[#E7E7EF]">
              <Image
                src={VisionPlatformImage}
                alt="Vision Platform"
                fill
                className="object-cover object-center"
              />
            </div>

            {/* RIGHT COLUMN - TEXT */}
            <div className="bg-[#F8F9FB] p-8 md:p-12 lg:p-16 xl:p-[72px] flex flex-col items-center justify-center text-center">
              <p className="text-[#5D5D88] text-[15px] md:text-[17px] leading-[1.7] mb-8 font-medium max-w-[480px]">
                The field infrastructure we're building today is the ground-truth
                data layer the AI economy will run on tomorrow. Built here, for
                here — and defensible everywhere else.
              </p>

              <Button
                href="/demo"
                variant="primary"
                size="lg"
                icon={<ArrowUpRightIcon />}
              >
                Book a Demo
              </Button>
            </div>
          </div>
        </Container>
      </div>
    </section>
  );
}
