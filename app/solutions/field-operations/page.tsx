import { ClientProof } from "@/components/field-operations/ClientProof";
import { FieldOperationsHero } from "@/components/field-operations/FieldOperationsHero";
import { FieldOperationsProblem } from "@/components/field-operations/FieldOperationsProblem";
import { IncludedServices } from "@/components/field-operations/IncludedServices";
import { FAQ } from "@/components/home/FAQ";

export default function FieldOperationPage() {
  return (
    <>
      <FieldOperationsHero />
      <FieldOperationsProblem />
      <IncludedServices />
      <ClientProof />
      <FAQ />
    </>
  );
}
