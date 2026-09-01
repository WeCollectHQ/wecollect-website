import { ClientProof as SharedClientProof } from "@/components/common/ClientProof";

import DataValidationClientImage from "@/assets/pngs/data-validation-client-proof.png";
import UsaidLogo from "@/assets/svgs/usaid.svg";

export function ClientProof() {
  return (
    <SharedClientProof
      logo={UsaidLogo}
      logoAlt="USAID"
      logoWidth={105}
      logoHeight={32}
      image={DataValidationClientImage}
      imageAlt="WeCollect data validation field deployment"
      description="WeCollect's platform handled the full data validation workflow — from form design to validated data delivery. Real-time supervision, GIS validation, and automated QA throughout."
    />
  );
}
