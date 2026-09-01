import { Button } from "@/components/common/Button";
import { SolutionHero } from "@/components/common/SolutionHero";
import { ArrowUpRightIcon } from "@/assets/svgs";
import PlatformHeroImage from "@/assets/pngs/platform-hero-image.png";

export function PlatformHero() {
  return (
    <SolutionHero
      eyebrow="The Platform"
      title={
        <>
          Field process <br /> infrastructure, <br /> built for African ground.
        </>
      }
      description="WeCollect is not a form tool. It's the full infrastructure layer for field operations — from form design to GIS-validated data in your dashboard."
      image={PlatformHeroImage}
      imageAlt="WeCollect platform dashboard"
      actions={
        <div className="flex flex-nowrap items-center gap-3">
          <Button
            href="/demo"
            variant="secondary"
            size="lg"
            icon={<ArrowUpRightIcon />}
            className="shrink-0"
          >
            Book a Demo
          </Button>

          <Button
            href="/platform/features"
            variant="outline-white"
            size="lg"
            className="shrink-0 whitespace-nowrap"
          >
            Explore features
          </Button>
        </div>
      }
      imageOverlay={
        <div
          className="
            absolute
            right-[-10px]
            top-[38%]
            flex
            items-center
            rounded-full
            bg-[#18182F]
            p-1
            shadow-[0_6px_18px_rgba(0,0,0,0.35)]
            md:right-[-14px]
          "
        >
          <span className="flex h-12 w-12 items-center justify-center rounded-full bg-[#FF1DBD] text-[20px] font-normal text-white">
            A
          </span>

          <span className="flex h-12 w-12 items-center justify-center rounded-full bg-[#087BEA] text-[20px] font-normal text-white">
            C
          </span>
        </div>
      }
    />
  );
}
