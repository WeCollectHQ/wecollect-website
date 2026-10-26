import { ClientProof as SharedClientProof } from "@/components/common/ClientProof";

import IitaImage from "@/assets/pngs/iita-image.webp";
import iitaLogo from "@/assets/pngs/iita.webp";

export function ClientProof() {
  return (
    <SharedClientProof
      logo={iitaLogo}
      logoAlt="IITA"
      image={IitaImage}
      imageAlt="IITA field deployment"
      description="Wecollect's platform handled the full data collection workflow — from form design to validated data delivery. Real-time supervision, GIS validation, and automated QA throughout."
    />
  );
}
