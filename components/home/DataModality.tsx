import Image from "next/image";

import { Button } from "@/components/common/Button";
import { Container } from "@/components/common/Container";
import { ArrowUpRightIcon } from "@/assets/svgs";
import DataModalityBgImage from "@/assets/pngs/data-modality-bg-image.webp";
import VoiceAudioImage from "@/assets/pngs/voice-audio.png";
import VisionImagesImage from "@/assets/pngs/vision-images.png";
import GeospatialImage from "@/assets/pngs/geospatial.png";
import SurveyTextImage from "@/assets/pngs/survey-text.png";

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
        <div className="grid min-h-[820px] items-center gap-12 py-20 md:grid-cols-[1.1fr_0.9fr] md:gap-16 md:py-24 lg:grid-cols-[1.08fr_0.92fr] lg:gap-[70px] lg:py-28">
          {/* LEFT — DATA MODALITIES */}
          <div className="w-full max-w-[580px]">
            {/* Card header */}
            <div className="flex h-[90px] items-center bg-[#30308A]/80 px-8 md:h-[105px] md:px-10">
              <h3 className="font-merriweather text-[22px] font-bold leading-7 md:text-[26px] md:leading-8">
                Data modalities{" "}
                <span className="font-normal text-white/50">
                  — ground truth layer
                </span>
              </h3>
            </div>

            {/* Cards */}
            <div className="grid grid-cols-1 gap-4 bg-[#30308A]/80 p-4 sm:grid-cols-2 md:gap-5 md:p-5">
              {modalities.map((modality) => (
                <div
                  key={modality.title}
                  className="flex min-h-[240px] flex-col bg-white text-center"
                >
                  {/* Image */}
                  <div className="relative w-full">
                    <Image
                      src={modality.image}
                      alt={modality.title}
                      width={300}
                      height={180}
                      className="h-auto w-full object-contain"
                    />
                  </div>

                  {/* Text */}
                  <div className="px-5 pb-5">
                    <h4 className="text-[16px] font-medium leading-6 text-[#0D0D26] md:text-[18px]">
                      {modality.title}
                    </h4>

                    <p className="mt-1 text-[12px] font-medium leading-5 text-[#9898B3]">
                      {modality.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* RIGHT — CONTENT */}
          <div className="max-w-[470px]">
            {/* Eyebrow */}
            <div className="flex items-center gap-2">
              <span className="h-2 w-2 shrink-0 rounded-full bg-[#FDE93D]" />

              <span className="text-[10px] font-medium uppercase leading-4 tracking-wide text-[#FDE93D] md:text-[12px]">
                AI Infrastructure
              </span>
            </div>

            {/* Heading */}
            <h2 className="mt-6 font-merriweather text-[32px] font-bold leading-10 tracking-[-0.5%] text-[#E9E9EF] md:text-[40px] md:leading-[1.12] md:tracking-[-1%] lg:text-[48px]">
              Powering AI with
              <br />
              African ground truth.
            </h2>

            {/* Description */}
            <p className="mt-6 text-[14px] font-medium leading-5.5 text-[#B9B9CC] md:text-[15px] md:leading-6">
              WeCollect is the ground-truth data layer for AI built on Africa.
              Our verified, geo-tagged field data trains the models that will
              define the continent&apos;s AI future.
            </p>

            {/* Secondary description */}
            <p className="mt-6 text-[14px] font-medium leading-5.5 text-[#7F7FA8] md:text-[15px] md:leading-6">
              Already powering annotation pipelines in Singapore and beyond.
              Voice, vision, geospatial, and survey data — at scale, from the
              field.
            </p>

            {/* Buttons */}
            <div className="mt-8 flex flex-nowrap items-center gap-3">
              <Button
                href="/solutions/ai-data"
                variant="primary"
                size="lg"
                icon={<ArrowUpRightIcon />}
                className="shrink-0"
              >
                Explore AI Data
              </Button>

              <Button
                href="/demo"
                variant="outline-white"
                size="lg"
                className="shrink-0 whitespace-nowrap"
              >
                Book a Demo
              </Button>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
