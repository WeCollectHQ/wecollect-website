import Image from "next/image";

import { Button } from "@/components/common/Button";
import { Container } from "@/components/common/Container";
import { ArrowUpRightIcon } from "@/assets/svgs";
import DataModalityBgImage from "@/assets/pngs/data-modality-bg-image.webp";
import VoiceAudioImage from "@/assets/pngs/voice-audio.webp";
import VisionImagesImage from "@/assets/pngs/vision-images.webp";
import GeospatialImage from "@/assets/pngs/geospatial.webp";
import SurveyTextImage from "@/assets/pngs/survey-text.webp";

const modalities = [
  {
    title: "Voice & Audio",
    description: "African-language speech corpus",
    image: VoiceAudioImage,
  },
  {
    title: "Vision & Images",
    description: "African-language speech corpus",
    image: VisionImagesImage,
  },
  {
    title: "Geospatial",
    description: "GIS-validated location data",
    image: GeospatialImage,
  },
  {
    title: "Survey & Text",
    description: "Structured field responses",
    image: SurveyTextImage,
  },
];

import { Reveal } from "@/components/common/Reveal";

export function DataModality() {
  return (
    <section className="relative overflow-hidden bg-[#075C79] text-white">
      {/* Background */}
      <Image
        src={DataModalityBgImage}
        alt=""
        fill
        priority
        className="pointer-events-none absolute inset-0 h-full w-full object-cover object-center"
      />

      {/* Overlay */}
      <div className="pointer-events-none absolute inset-0 bg-[#075C79]/20" />

      <Container className="relative z-10">
        <div className="grid min-h-205 items-center gap-12 py-20 md:grid-cols-[1.1fr_0.9fr] md:gap-16 md:py-24 lg:grid-cols-[1.08fr_0.92fr] lg:gap-17.5 lg:py-28">
          {/* LEFT — DATA MODALITIES */}
          <div className="w-full max-w-145">
            {/* Card header */}
            <Reveal delay={0.05} direction="up" distance={16}>
              <div className="flex h-22.5 items-center bg-[#30308A]/80 px-8 backdrop-blur-xs md:h-26.25 md:px-10">
                <h3 className="font-merriweather text-[22px] font-bold leading-7 md:text-[26px] md:leading-8">
                  Data modalities{" "}
                  <span className="font-normal text-white/50">
                    — ground truth layer
                  </span>
                </h3>
              </div>
            </Reveal>

            {/* Cards */}
            <div className="grid grid-cols-1 gap-4 bg-[#30308A]/80 p-4 backdrop-blur-xs sm:grid-cols-2 md:gap-5 md:p-5">
              {modalities.map((modality, index) => {
                const isVoice = modality.title.includes("Voice");
                const isVision = modality.title.includes("Vision");
                const isGeo = modality.title.includes("Geospatial");
                const isSurvey = modality.title.includes("Survey");

                return (
                  <Reveal
                    key={modality.title}
                    delay={0.12 + index * 0.1}
                    direction="up"
                    distance={20}
                    className="group interactive-card relative flex min-h-60 flex-col overflow-hidden bg-white text-center transition-all duration-300"
                  >
                    {/* Image with modality micro-effects */}
                    <div className="relative w-full overflow-hidden">
                      <Image
                        src={modality.image}
                        alt={modality.title}
                        width={300}
                        height={180}
                        className="h-auto w-full object-contain transition-transform duration-500 group-hover:scale-104"
                      />

                      {/* Vision: laser scan overlay line */}
                      {isVision && (
                        <div className="laser-scan-line pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                      )}

                      {/* Geospatial: radar ping */}
                      {isGeo && (
                        <div className="radar-ping-dot absolute top-3 right-3" />
                      )}
                    </div>

                    {/* Text & Micro elements */}
                    <div className="px-5 pb-5">
                      {/* Voice: micro sound wave bars */}
                      {isVoice && (
                        <div className="my-1.5 flex h-4 items-center justify-center gap-0.5">
                          {[0, 0.2, 0.4, 0.1, 0.35, 0.5, 0.25].map((d, i) => (
                            <span
                              key={i}
                              className="wave-bar w-0.5 rounded-full bg-[#4747D6]"
                              style={{
                                height: "14px",
                                animationDelay: `${d}s`,
                              }}
                            />
                          ))}
                        </div>
                      )}

                      <h4 className="text-[16px] font-medium leading-6 text-[#0D0D26] transition-colors duration-200 group-hover:text-[#4747D6] md:text-[18px]">
                        {modality.title}
                        {/* Survey: blinking typewriter cursor */}
                        {isSurvey && (
                          <span className="typewriter-cursor ml-1" />
                        )}
                      </h4>

                      <p className="mt-1 text-[12px] font-medium leading-5 text-[#9898B3]">
                        {modality.description}
                      </p>
                    </div>
                  </Reveal>
                );
              })}
            </div>
          </div>

          {/* RIGHT — CONTENT */}
          <div className="max-w-117.5">
            {/* Eyebrow */}
            <Reveal delay={0.05} direction="up" distance={14}>
              <div className="flex items-center gap-2">
                <span className="relative flex h-2.5 w-2.5 items-center justify-center">
                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[#FDE93D] opacity-75" />
                  <span className="relative inline-flex h-2 w-2 rounded-full bg-[#FDE93D]" />
                </span>

                <span className="text-[10px] font-medium uppercase leading-4 tracking-wide text-[#FDE93D] md:text-[12px]">
                  AI Infrastructure
                </span>
              </div>
            </Reveal>

            {/* Heading */}
            <Reveal delay={0.15} direction="up" distance={20}>
              <h2 className="mt-6 font-merriweather text-[32px] font-bold leading-10 tracking-[-0.5%] text-[#E9E9EF] md:text-[40px] md:leading-[1.12] md:tracking-[-1%] lg:text-[48px]">
                Powering AI with
                <br />
                African ground truth.
              </h2>
            </Reveal>

            {/* Description */}
            <Reveal delay={0.25} direction="up" distance={20}>
              <p className="mt-6 text-[14px] font-medium leading-5.5 text-[#B9B9CC] md:text-[15px] md:leading-6">
                Wecollect is the ground-truth data layer for AI built on Africa.
                Our verified, geo-tagged field data trains the models that will
                define the continent&apos;s AI future.
              </p>
            </Reveal>

            {/* Secondary description */}
            <Reveal delay={0.35} direction="up" distance={20}>
              <p className="mt-6 text-[14px] font-medium leading-5.5 text-[#7F7FA8] md:text-[15px] md:leading-6">
                Already powering annotation pipelines in Singapore and beyond.
                Voice, vision, geospatial, and survey data — at scale, from the
                field.
              </p>
            </Reveal>

            {/* Buttons */}
            <Reveal delay={0.45} direction="up" distance={16}>
              <div className="mt-8 flex flex-nowrap items-center gap-3">
                <Button
                  href="/solutions/ai-data"
                  variant="primary"
                  size="lg"
                  icon={<ArrowUpRightIcon />}
                  className="shrink-0 hover:-translate-y-0.5 transition-transform duration-200"
                >
                  Explore AI Data
                </Button>

                <Button
                  href="/demo"
                  variant="outline-white"
                  size="lg"
                  className="shrink-0 whitespace-nowrap hover:-translate-y-0.5 transition-transform duration-200"
                >
                  Book a Demo
                </Button>
              </div>
            </Reveal>
          </div>
        </div>
      </Container>
    </section>
  );
}
