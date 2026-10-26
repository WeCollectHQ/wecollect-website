import { IncludedServices as SharedIncludedServices } from "@/components/common/IncludedServices";

import FieldSalesManagementImage from "@/assets/pngs/field-sales-management.webp";
import MerchandisingAuditsImage from "@/assets/pngs/merchandising-audits.webp";
import ActivationTrackingImage from "@/assets/pngs/activation-tracking.webp";
import RouteCoverageImage from "@/assets/pngs/route-coverage.webp";

export function IncludedServices() {
  return (
    <SharedIncludedServices
      eyebrow="Included Services"
      title="What's covered"
      services={[
        { title: "Field Sales Management", image: FieldSalesManagementImage },
        { title: "Merchandising Audits", image: MerchandisingAuditsImage },
        { title: "Activation Tracking", image: ActivationTrackingImage },
        { title: "Route Coverage", image: RouteCoverageImage },
      ]}
    />
  );
}
