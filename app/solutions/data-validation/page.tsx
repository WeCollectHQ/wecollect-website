import { ClientProof } from "@/components/data-validation/ClientProof";
import { DataValidationHero } from "@/components/data-validation/DataValidationHero";
import { DataValidationProblem } from "@/components/data-validation/DataValidationProblem";
import { IncludedServices } from "@/components/data-validation/IncludedServices";
import { FAQ } from "@/components/home/FAQ";

export default function DataValidationPage() {
  return (
    <>
      <DataValidationHero />
      <DataValidationProblem />
      <IncludedServices />
      <ClientProof />
      <FAQ />
    </>
  );
}
