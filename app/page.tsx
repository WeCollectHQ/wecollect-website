import { HomeHero } from "@/components/hero/HomeHero";
import { DeploymentModels } from "@/components/home/DeploymentModels";
import { FourPillars } from "@/components/home/FourPillars";
import { HowItWorks } from "@/components/home/HowItWorks";
import { TrustedOrganizations } from "@/components/home/TrustedOrganizations";

export default function Home() {
  return (
    <>
      <HomeHero />
      <TrustedOrganizations />
      <FourPillars />
      <HowItWorks />
      <DeploymentModels />
    </>
  );
}
