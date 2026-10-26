import { SolutionHero } from "@/components/common/SolutionHero";
import AboutHeroImage from "@/assets/pngs/about-hero.webp";
import { Button } from "@/components/common/Button";
import { ArrowUpRightIcon } from "@/assets/svgs/index";

export function AboutHero() {
  return (
    <SolutionHero
      eyebrow="About Wecollect"
      title={
        <>
          Africa deserves better <br /> field infrastructure. <br /> We're
          building it.
        </>
      }
      description="Wecollect is the technology infrastructure that powers field operations and data collection across Africa — with an optional network of trained agents when clients need boots on the ground."
      image={AboutHeroImage}
      imageAlt="Wecollect about hero"
      actions={
        <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3">
          <Button
            href="/contact-us"
            variant="secondary"
            size="lg"
            icon={<ArrowUpRightIcon />}
            className="w-full sm:w-auto shrink-0"
          >
            Contact Us
          </Button>
        </div>
      }
    />
  );
}
