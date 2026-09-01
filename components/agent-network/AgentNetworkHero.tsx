import { SolutionHero } from "@/components/common/SolutionHero";
import AgentNetworkHeroImage from "@/assets/pngs/agent-network-hero.png";

export function AgentNetworkHero() {
  return (
    <SolutionHero
      eyebrow="Agent Network"
      title={
        <>
          No field team? <br /> Deploy ours.
        </>
      }
      description="1,700+ trained and verified field agents across 15+ African Nations — available on demand, managed through the same platform as your own team."
      image={AgentNetworkHeroImage}
      imageAlt="WeCollect field agent network"
    />
  );
}
