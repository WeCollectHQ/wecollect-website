import { IncludedServices as SharedIncludedServices } from "@/components/common/IncludedServices";

import AddressValidationImage from "@/assets/pngs/address-validation.png";
import SiteVisitReportingImage from "@/assets/pngs/site-visit-reporting.png";
import KycFieldChecksImage from "@/assets/pngs/kyc-field-checks.png";
import AssetVerificationImage from "@/assets/pngs/asset-verification.png";

export function IncludedServices() {
  return (
    <SharedIncludedServices
      eyebrow="Included Services"
      title="What's covered"
      services={[
        { title: "Address Validation", image: AddressValidationImage },
        { title: "Site Visit Reporting", image: SiteVisitReportingImage },
        { title: "KYC Field Checks", image: KycFieldChecksImage },
        { title: "Asset Verification", image: AssetVerificationImage },
      ]}
    />
  );
}
