import { FAQ } from "@/components/home/FAQ";
import { ClientProof } from "@/components/verification-reporting/ClientProof";
import { IncludedServices } from "@/components/verification-reporting/IncludedServices";
import { VerificationHero } from "@/components/verification-reporting/VerificationHero";
import { VerificationOverview } from "@/components/verification-reporting/VerificationOverview";

export default function VerificationPage() {
  return (
    <>
      <VerificationHero />
      <VerificationOverview />
      <IncludedServices />
      <ClientProof />
      <FAQ />
    </>
  );
}
