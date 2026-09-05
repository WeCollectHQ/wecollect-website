import { SolutionHero } from "@/components/common/SolutionHero";
import AboutHeroImage from "@/assets/pngs/about-hero.png";
import { Button } from "@/components/common/Button";
import { ArrowUpRightIcon } from "@/assets/svgs/index";

export function AboutHero() {
  return (
    <SolutionHero
      eyebrow="About WeCollect"
      title={
        <>
          Africa deserves better <br /> field infrastructure. <br /> We're
          building it.
        </>
      }
      description="WeCollect is the technology infrastructure that powers field operations and data collection across Africa — with an optional network of trained agents when clients need boots on the ground."
      image={AboutHeroImage}
      imageAlt="WeCollect about hero"
      actions={
        <div className="flex flex-nowrap items-center gap-3">
          <Button
            href="/contact-us"
            variant="secondary"
            size="lg"
            icon={<ArrowUpRightIcon />}
            className="shrink-0"
          >
            Contact Us
          </Button>
        </div>
      }
    />
  );
}
