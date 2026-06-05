import React, { useRef, useEffect } from "react";
import Image from "next/image";
import ContainerLayout from "../../layouts/ContainerLayout";
import lespinalist from "../../assets/png/lespinalist.jpg";
import barnksforte from "../../assets/png/barnksforte.jpg";
import bigCabal from "../../assets/png/big-cabal.jpg";
import cgiar from "../../assets/png/cgiar.jpg";
import cway from "../../assets/png/cway.jpg";
import iita from "../../assets/png/iita.jpg";
import lagos from "../../assets/png/lagos.jpg";
import noah from "../../assets/png/noah.jpg";
import mapbox from "../../assets/svg/mapbox.svg";
import usaid from "../../assets/svg/usaid.svg";
import unfpa from "../../assets/svg/unfpa.svg";
import awsStartups from "../../assets/svg/aws-startups.svg";
import microsoft from "../../assets/svg/microsoft.svg";
import kadunaElect from "../../assets/svg/kaduna-elect.svg";
import intelpoint from "../../assets/svg/intelpoint.svg";
import Hr from "../LandingPage/Hr";

const partners = [
  { src: lespinalist, alt: "lespina" },
  { src: barnksforte, alt: "barnks-forte" },
  { src: bigCabal, alt: "big-cabal" },
  { src: cgiar, alt: "cgiar" },
  { src: cway, alt: "cway" },
  { src: iita, alt: "iita" },
  { src: lagos, alt: "lagos" },
  { src: noah, alt: "noah" },
  { src: mapbox, alt: "mapbox" },
  { src: usaid, alt: "usaid" },
  { src: unfpa, alt: "unfpa" },
  { src: awsStartups, alt: "aws-startups" },
  { src: microsoft, alt: "microsoft" },
  { src: kadunaElect, alt: "kaduna-elect" },
  { src: intelpoint, alt: "intelpoint" },
];

const PartnersCard = () => {
  const trackRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const track = trackRef.current;
    if (!track) return;

    let animationId: number;
    let position = 0;
    const speed = 0.5; // px per frame — adjust for faster/slower

    const step = () => {
      position -= speed;

      // Each "half" of the duplicated list
      const halfWidth = track.scrollWidth / 2;
      if (Math.abs(position) >= halfWidth) {
        position = 0;
      }

      track.style.transform = `translateX(${position}px)`;
      animationId = requestAnimationFrame(step);
    };

    animationId = requestAnimationFrame(step);

    // Pause on hover
    const pause = () => cancelAnimationFrame(animationId);
    const resume = () => { animationId = requestAnimationFrame(step); };
    track.addEventListener("mouseenter", pause);
    track.addEventListener("mouseleave", resume);

    return () => {
      cancelAnimationFrame(animationId);
      track.removeEventListener("mouseenter", pause);
      track.removeEventListener("mouseleave", resume);
    };
  }, []);

  return (
    <div>
      <div
        className="w-full h-[170px] md:h-[244px] flex items-center overflow-hidden"
        data-aos="fade-up"
        data-aos-duration="2000"
      >
        <ContainerLayout>
          <div className="w-full flex flex-col justify-center items-center h-[172px] overflow-hidden">
            {/* Fade edges */}
            <div className="relative w-full overflow-hidden">
              <div
                className="pointer-events-none absolute left-0 top-0 h-full w-16 z-10"
                style={{ background: "linear-gradient(to right, white, transparent)" }}
              />
              <div
                className="pointer-events-none absolute right-0 top-0 h-full w-16 z-10"
                style={{ background: "linear-gradient(to left, white, transparent)" }}
              />

              {/* Scrolling track — list is duplicated for seamless loop */}
              <div ref={trackRef} className="flex items-center will-change-transform mt-14">
                {[...partners, ...partners].map((partner, i) => (
                  <div key={i} className="flex-shrink-0 mx-6">
                    <Image
                      src={partner.src}
                      alt={partner.alt}
                      className="h-10 w-auto object-contain grayscale hover:grayscale-0 transition-all duration-300"
                    />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </ContainerLayout>
      </div>
      <Hr />
    </div>
  );
};

export default PartnersCard;