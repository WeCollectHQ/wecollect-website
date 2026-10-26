import { SolutionHero } from "@/components/common/SolutionHero";
import DemoHeroImage from "@/assets/pngs/demo-hero.webp";
import { Button } from "@/components/common/Button";
import { ArrowUpRightIcon } from "@/assets/svgs/index";

export function DemoHero() {
  return (
    <SolutionHero
      eyebrow="BOOK A DEMO"
      title={
        <>
          Let's talk about your <br /> Field Operations
        </>
      }
      description="Whether you're collecting data, managing field teams, or verifying activity across multiple locations, we're here to help. Tell us what you're working on, and we'll show you how Wecollect can help you run smarter, more reliable field operations."
      image={DemoHeroImage}
      imageAlt="Wecollect demo hero"
      actions={
        <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3">
          <Button
            href="#demo-form"
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
