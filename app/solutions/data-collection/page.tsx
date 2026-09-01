import { ClientProof } from "@/components/data-collection/ClientProof";
import { DataCollectionHero } from "@/components/data-collection/DataCollectionHero";
import { DataCollectionProblem } from "@/components/data-collection/DataCollectionProblem";
import { IncludedServices } from "@/components/data-collection/IncludedServices";
import { FAQ } from "@/components/home/FAQ";

export default function DataCollectionPage() {
  return (
    <>
      <DataCollectionHero />
      <DataCollectionProblem />
      <IncludedServices />
      <ClientProof />
      <FAQ />
    </>
  );
}
