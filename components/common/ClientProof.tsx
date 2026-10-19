import Image, { StaticImageData } from "next/image";
import { Container } from "@/components/common/Container";

export interface ClientProofProps {
  eyebrow?: string;
  title?: string;
  logo: string | StaticImageData;
  logoAlt?: string;
  logoWidth?: number;
  logoHeight?: number;
  summary?: string;
  description: string;
  image: string | StaticImageData;
  imageAlt?: string;
}

export function ClientProof({
  eyebrow = "Client Proof",
  title = "Deployed in the field.",
  logo,
  logoAlt = "Client Logo",
  logoWidth = 100,
  logoHeight = 40,
  summary = "Deployed at scale in challenging field conditions.",
  description,
  image,
  imageAlt = "Client deployment",
}: ClientProofProps) {
  return (
    <section className="bg-white text-[#0D0D26]">
      <Container>
        <div className="flex min-h-[440px] flex-col items-center gap-12 py-16 md:min-h-[500px] md:flex-row md:items-center md:gap-16 md:py-20 lg:gap-[90px] lg:py-[85px]">
          {/* LEFT CONTENT */}
          <div className="w-full shrink-0 md:w-[45%] lg:w-[470px]">
            <p className="text-[10px] font-medium uppercase leading-4 text-[#5555E6]">
              {eyebrow}
            </p>

            <h2 className="mt-5 font-merriweather text-[32px] font-bold leading-[1.2] tracking-[-1%] text-[#0D0D26] md:text-[38px] lg:text-[40px]">
              {title}
            </h2>

            {/* CLIENT LOGO */}
            <div className="mt-8 flex h-[40px] items-center">
              <Image
                src={logo}
                alt={logoAlt}
                width={logoWidth}
                height={logoHeight}
                className="h-auto max-h-full w-auto object-contain object-left"
              />
            </div>

            <p className="mt-2 text-[13px] font-medium leading-5 text-[#0D0D26] md:text-[14px]">
              {summary}
            </p>

            <p className="mt-6 max-w-[440px] text-[13px] font-medium leading-[1.65] text-[#9898B3] md:text-[14px]">
              {description}
            </p>
          </div>

          {/* RIGHT IMAGE */}
          <div className="relative w-full overflow-hidden border border-[#E6E6ED] md:w-[55%] lg:w-[600px]">
            <div className="relative aspect-[1.7/1] w-full">
              <Image src={image} alt={imageAlt} fill className="object-cover" />
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
