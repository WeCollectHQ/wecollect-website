import { HomeHero } from "@/components/home/hero/HomeHero";
import { DataModality } from "@/components/home/DataModality";
import { DeploymentModels } from "@/components/home/DeploymentModels";
import { FAQ } from "@/components/home/FAQ";
import { FourPillars } from "@/components/home/FourPillars";
import { HowItWorks } from "@/components/home/HowItWorks";
import { Testimonials } from "@/components/home/Testimonials";
import { TrustedOrganizations } from "@/components/home/TrustedOrganizations";

export default function Home() {
  return (
    <>
      <HomeHero />
      <TrustedOrganizations />
      <FourPillars />
      <HowItWorks />
      <DeploymentModels />
      <DataModality />
      <Testimonials />
      <FAQ />
    </>
  );
}
