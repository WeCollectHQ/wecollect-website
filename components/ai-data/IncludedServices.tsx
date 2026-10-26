import { IncludedServices as SharedIncludedServices } from "@/components/common/IncludedServices";

import VoiceAudioImage from "@/assets/pngs/voice-audio-collection.webp";
import AnnotationImage from "@/assets/pngs/annotation-labelling.webp";
import VisualDataImage from "@/assets/pngs/visual-data-collection.webp";
import GeospatialImage from "@/assets/pngs/geospatial-ground-truth.webp";

export function IncludedServices() {
  return (
    <SharedIncludedServices
      eyebrow="Included Services"
      title="What's covered"
      services={[
        { title: "Voice & Audio Corpus", image: VoiceAudioImage },
        { title: "Annotation & Labelling", image: AnnotationImage },
        { title: "Visual Data Collection", image: VisualDataImage },
        { title: "Geospatial Ground Truth", image: GeospatialImage },
      ]}
    />
  );
}
