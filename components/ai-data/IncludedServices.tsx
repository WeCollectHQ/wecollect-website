import { IncludedServices as SharedIncludedServices } from "@/components/common/IncludedServices";

import VoiceAudioImage from "@/assets/pngs/voice-audio-collection.png";
import AnnotationImage from "@/assets/pngs/annotation-labelling.png";
import VisualDataImage from "@/assets/pngs/visual-data-collection.png";
import GeospatialImage from "@/assets/pngs/geospatial-ground-truth.png";

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
