import { IncludedServices as SharedIncludedServices } from "@/components/common/IncludedServices";

import GisValidationImage from "@/assets/pngs/gis-validation.png";
import AiOutputVerificationImage from "@/assets/pngs/ai-output-verification.png";
import QaCleaningImage from "@/assets/pngs/qa-cleaning.png";
import GeofenceComplianceImage from "@/assets/pngs/geofence-compliance.png";

export function IncludedServices() {
  return (
    <SharedIncludedServices
      eyebrow="Included Services"
      title="What's covered"
      services={[
        { title: "GIS Validation", image: GisValidationImage },
        { title: "AI Output Verification", image: AiOutputVerificationImage },
        { title: "QA & Cleaning", image: QaCleaningImage },
        { title: "Geofence Compliance", image: GeofenceComplianceImage },
      ]}
    />
  );
}
