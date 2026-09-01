import { ClientProof as SharedClientProof } from "@/components/common/ClientProof";

import KadunaElectricImage from "@/assets/pngs/kaduna-electric.png";
import KadunaElectricLogo from "@/assets/svgs/kaduna-elect.svg";

export function ClientProof() {
  return (
    <SharedClientProof
      logo={KadunaElectricLogo}
      logoAlt="Kaduna Electric"
      logoWidth={75}
      logoHeight={30}
      image={KadunaElectricImage}
      imageAlt="Kaduna Electric field deployment"
      description="WeCollect's platform handled the full verification & reporting workflow — from form design to validated data delivery. Real-time supervision, GIS validation, and automated QA throughout."
    />
  );
}
