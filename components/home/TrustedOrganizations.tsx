"use client";
import { useEffect, useRef } from "react";
import Image from "next/image";
import lespinalist from "@/assets/pngs/lespinalist.jpg";
import mapbox from "@/assets/svgs/mapbox.svg";
import barnksforte from "@/assets/pngs/barnksforte.jpg";
import intelpoint from "@/assets/svgs/intelpoint.svg";
import awsStartups from "@/assets/svgs/aws-startups.svg";
import bigCabal from "@/assets/pngs/big-cabal.jpg";
import usaid from "@/assets/svgs/usaid.svg";
import cway from "@/assets/pngs/cway.jpg";
import unfpa from "@/assets/svgs/unfpa.svg";
import microsoft from "@/assets/svgs/microsoft.svg";
import kadunaElect from "@/assets/svgs/kaduna-elect.svg";
import cgiar from "@/assets/pngs/cgiar.jpg";
import iita from "@/assets/pngs/iita.jpg";
import lagos from "@/assets/pngs/lagos.jpg";
import noah from "@/assets/pngs/noah.jpg";

const trustedOrganizations = [
  {
    name: "Lespinalist",
    logo: lespinalist,
  },
  {
    name: "Mapbox",
    logo: mapbox,
  },
  {
    name: "Barnksforte",
    logo: barnksforte,
  },
  {
    name: "Intelpoint",
    logo: intelpoint,
  },
  {
    name: "AWS Startups",
    logo: awsStartups,
  },
  {
    name: "BigCabal",
    logo: bigCabal,
  },
  {
    name: "USAID",
    logo: usaid,
  },
  {
    name: "Cway",
    logo: cway,
  },
  {
    name: "UNFPA",
    logo: unfpa,
  },
  {
    name: "Microsoft",
    logo: microsoft,
  },
  {
    name: "Kaduna Elect",
    logo: kadunaElect,
  },
  {
    name: "CGIAR",
    logo: cgiar,
  },
  {
    name: "IITA",
    logo: iita,
  },
  {
    name: "Lagos",
    logo: lagos,
  },
  {
    name: "Noah",
    logo: noah,
  },
];

export function TrustedOrganizations() {
  const trackRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const track = trackRef.current;

    if (!track) return;

    let animationId: number;
    let position = 0;
    const speed = 0.5;

    const step = () => {
      position -= speed;

      // Since the logos are duplicated,
      // reset after the first complete set.
      const halfWidth = track.scrollWidth / 2;

      if (Math.abs(position) >= halfWidth) {
        position = 0;
      }

      track.style.transform = `translate3d(${position}px, 0, 0)`;

      animationId = requestAnimationFrame(step);
    };

    animationId = requestAnimationFrame(step);

    return () => {
      cancelAnimationFrame(animationId);
    };
  }, []);

  return (
    <section className="w-full overflow-hidden bg-[#30308A]">
      {/* Label */}
      <div className="flex h-10 items-center justify-center border-b border-white/15">
        <p className="text-[3.82px] text-[#9898B3] md:text-[8px] font-medium uppercase leading-[5.46px] md:leading-5">
          Trusted by leading organisations
        </p>
      </div>

      {/* Logo carousel */}
      <div className="relative h-16 md:h-18 lg:h-16 overflow-hidden border-b border-white/15">
        {/* Left fade */}
        <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-12 md:w-20 bg-linear-to-r from-[#30308A] to-transparent" />

        {/* Right fade */}
        <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-12 md:w-20 bg-linear-to-l from-[#30308A] to-transparent" />

        {/* Animated track */}
        <div
          ref={trackRef}
          className="flex h-full w-max items-center will-change-transform"
        >
          {[...trustedOrganizations, ...trustedOrganizations].map(
            (organization, index) => (
              <div
                key={`${organization.name}-${index}`}
                className="flex h-full w-35 md:w-40 lg:w-42.5 shrink-0 items-center justify-center border-r border-white/15 px-6"
              >
                <Image
                  src={organization.logo}
                  alt={organization.name}
                  className="h-auto max-h-7 w-auto max-w-27.5 object-contain opacity-70 grayscale transition-all duration-300 hover:opacity-100 hover:grayscale-0"
                />
              </div>
            ),
          )}
        </div>
      </div>
    </section>
  );
}
