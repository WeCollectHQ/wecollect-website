import { AfricanCoverage } from "@/components/agent-network/AfricanCoverage";
import { AgentNetworkHero } from "@/components/agent-network/AgentNetworkHero";
import { DeploymentModels } from "@/components/agent-network/DeploymentModels";
import { DeploymentProcess } from "@/components/agent-network/DeploymentProcess";
import { QualityAssurance } from "@/components/agent-network/QualityAssurance";
import { FAQ } from "@/components/home/FAQ";

export default function AgentNetworkPage() {
  return (
    <>
      <AgentNetworkHero />
      <DeploymentModels />
      <DeploymentProcess />
      <QualityAssurance />
      <AfricanCoverage />
      <FAQ />
    </>
  );
}
