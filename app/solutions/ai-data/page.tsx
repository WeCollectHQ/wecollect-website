import { AiDataHero } from "@/components/ai-data/AiDataHero";
import { AiDataProblem } from "@/components/ai-data/AiDataProblem";
import { ClientProof } from "@/components/ai-data/ClientProof";
import { IncludedServices } from "@/components/ai-data/IncludedServices";
import { FAQ } from "@/components/home/FAQ";

export default function AIDataPage() {
  return (
    <>
      <AiDataHero />
      <AiDataProblem />
      <IncludedServices />
      <ClientProof />
      <FAQ />
    </>
  );
}
