import { DemoHero } from "@/components/demo/DemoHero";
import { DemoFormSection } from "@/components/demo/DemoFormSection";
import { TrustedOrganizations } from "@/components/home/TrustedOrganizations";
import { FAQ } from "@/components/home/FAQ";

export default function DemoPage() {
  return (
    <>
      <DemoHero />
      <DemoFormSection />
      <TrustedOrganizations variant="light" />
      <FAQ />
    </>
  );
}
