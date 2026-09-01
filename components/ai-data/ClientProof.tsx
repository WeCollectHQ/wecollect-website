import { ClientProof as SharedClientProof } from "@/components/common/ClientProof";

import AiDataClientProofImage from "@/assets/pngs/ai-data-client-proof.png";
import AiDataClientProofLogo from "@/assets/svgs/ai-data-client-proof-logo.svg";

export function ClientProof() {
  return (
    <SharedClientProof
      logo={AiDataClientProofLogo}
      logoAlt="Client"
      logoWidth={55}
      logoHeight={28}
      image={AiDataClientProofImage}
      imageAlt="AI data client deployment"
      description="WeCollect's platform handled the full data validation workflow — from form design to validated data delivery. Real-time supervision, GIS validation, and automated QA throughout."
    />
  );
}
