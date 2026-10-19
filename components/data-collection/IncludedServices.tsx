import { IncludedServices as SharedIncludedServices } from "@/components/common/IncludedServices";
import SurveyCensusImage from "@/assets/pngs/survey-census.png";
import KapStudiesImage from "@/assets/pngs/kap-studies.png";
import MeDataCollectionImage from "@/assets/pngs/me-data-collection.png";
import BeneficiaryTrackingImage from "@/assets/pngs/beneficiary-tracking.png";

export function IncludedServices() {
  return (
    <SharedIncludedServices
      eyebrow="Included Services"
      title="What's covered"
      services={[
        { title: "Survey & Census", image: SurveyCensusImage },
        { title: "KAP Studies", image: KapStudiesImage },
        { title: "M&E Data Collection", image: MeDataCollectionImage },
        { title: "Beneficiary Tracking", image: BeneficiaryTrackingImage },
      ]}
    />
  );
}
