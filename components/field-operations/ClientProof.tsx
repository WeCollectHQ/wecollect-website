import { ClientProof as SharedClientProof } from "@/components/common/ClientProof";

import ClientProofImage from "@/assets/pngs/field-operations-client-proof.png";
import cwaylogo from "@/assets/pngs/cway.jpg";

export function ClientProof() {
  return (
    <SharedClientProof
      logo={cwaylogo}
      logoAlt="CWAY Logo"
      logoWidth={63}
      logoHeight={28}
      image={ClientProofImage}
      imageAlt="CWAY field operations deployment"
      description="WeCollect's platform handled the full field operations workflow — from form design to validated data delivery. Real-time supervision, GIS validation, and automated QA throughout."
    />
  );
}
