import { IncludedServices as SharedIncludedServices } from "@/components/common/IncludedServices";

import FieldSalesManagementImage from "@/assets/pngs/field-sales-management.png";
import MerchandisingAuditsImage from "@/assets/pngs/merchandising-audits.png";
import ActivationTrackingImage from "@/assets/pngs/activation-tracking.png";
import RouteCoverageImage from "@/assets/pngs/route-coverage.png";

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
