"use client";
import Image from "next/image";
import usaid from "@/assets/pngs/usaid.png";
import techpoint from "@/assets/pngs/techpoint.png";
import noah from "@/assets/pngs/noah.png";
import bigCabal from "@/assets/pngs/big-cabal.png";
import iita from "@/assets/pngs/iita.png";
import cway from "@/assets/pngs/cway.png";
import barnksforte from "@/assets/pngs/barnksforte.png";
import lbc from "@/assets/pngs/lbc.png";
import kgen from "@/assets/pngs/kgen.png";
import viamo from "@/assets/pngs/viamo.png";
import theWorldBank from "@/assets/pngs/the-world-bank.png";
import fantein from "@/assets/pngs/fantein.png";
import lapo from "@/assets/pngs/lapo.png";
import npc from "@/assets/pngs/npc.png";

const trustedOrganizations = [
  {
    name: "USAID",
    logo: usaid,
  },
  {
    name: "Techpoint",
    logo: techpoint,
  },
  {
    name: "Noah",
    logo: noah,
  },
  {
    name: "BigCabal",
    logo: bigCabal,
  },
  {
    name: "IITA",
    logo: iita,
  },
  {
    name: "Cway",
    logo: cway,
  },
  {
    name: "Barnksforte",
    logo: barnksforte,
  },
  {
    name: "LBC",
    logo: lbc,
  },
  {
    name: "Kgen",
    logo: kgen,
  },
  {
    name: "Viamo",
    logo: viamo,
  },
  {
    name: "The World Bank",
    logo: theWorldBank,
  },
  {
    name: "Fantein",
    logo: fantein,
  },
  {
    name: "Lapo",
    logo: lapo,
  },
  {
    name: "NPC",
    logo: npc,
  },
];

import { Reveal } from "@/components/common/Reveal";

interface TrustedOrganizationsProps {
  variant?: "dark" | "light";
  children?: React.ReactNode;
}

export function TrustedOrganizations({
  variant = "dark",
  children,
}: TrustedOrganizationsProps) {
  const isLight = variant === "light";

  const bgClass = isLight ? "bg-[#FFFFFF]" : "bg-[#30308A]";
  const borderClass = isLight ? "border-[#E9E9EF]" : "border-white/15";
  const textClass = isLight ? "text-[#5D5D88]" : "text-[#9898B3]";

  return (
    <section
      className={`w-full overflow-hidden py-15 border-y ${bgClass} ${borderClass}`}
    >
      {/* Label */}
      <Reveal direction="down" distance={12}>
        <div
          className={`flex h-10 items-center justify-center border-b pb-10 ${borderClass}`}
        >
          <p
            className={`text-[8px] md:text-[14px] font-medium uppercase leading-[5.46px] md:leading-5 tracking-wider ${textClass}`}
          >
            Trusted by Over 20 Leading Organisations
          </p>
        </div>
      </Reveal>

      {/* Logo carousel */}
      <div className="marquee-container group bg-white relative h-16 md:h-18 lg:h-16 overflow-hidden border-b border-[#1E1E5A]">
        {/* Left fade mask */}
        <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-16 md:w-28 bg-gradient-to-r from-white via-white/80 to-transparent" />

        {/* Right fade mask */}
        <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-16 md:w-28 bg-gradient-to-l from-white via-white/80 to-transparent" />

        {/* Animated track with pause on hover */}
        <div className="animate-marquee flex h-full items-center">
          {[...trustedOrganizations, ...trustedOrganizations].map(
            (organization, index) => (
              <div
                key={`${organization.name}-${index}`}
                className="flex h-full w-35 md:w-40 lg:w-42.5 shrink-0 items-center justify-center border-r px-6 border-[#1E1E5A]/20 transition-all duration-300 hover:scale-105"
              >
                <Image
                  src={organization.logo}
                  alt={organization.name}
                  className="h-auto max-h-11 w-auto max-w-36 object-contain opacity-85 transition-opacity duration-300 group-hover:opacity-70 hover:!opacity-100"
                />
              </div>
            ),
          )}
        </div>
      </div>

      {children}
    </section>
  );
}
