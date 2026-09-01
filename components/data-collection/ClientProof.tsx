import Image from "next/image";
import { Container } from "@/components/common/Container";
import IitaImage from "@/assets/pngs/iita-image.png";
import iitaLogo from "@/assets/pngs/iita.jpg";

export function ClientProof() {
  return (
    <section className="bg-white text-[#0D0D26]">
      <Container>
        <div
          className="
            grid
            min-h-[440px]
            items-center
            gap-12
            py-20
            md:grid-cols-[0.9fr_1.1fr]
            md:gap-16
            md:py-24
            lg:min-h-[500px]
            lg:grid-cols-[0.9fr_1.1fr]
            lg:gap-[70px]
            lg:py-[85px]
          "
        >
          {/* LEFT CONTENT */}
          <div className="max-w-[390px]">
            {/* Eyebrow */}
            <p
              className="
                text-[10px]
                font-medium
                uppercase
                leading-4
                text-[#9898B3]
              "
            >
              Client Proof
            </p>

            {/* Heading */}
            <h2
              className="
                mt-4
                font-merriweather
                text-[30px]
                font-bold
                leading-[1.2]
                tracking-[-1%]
                text-[#0D0D26]
                md:text-[36px]
                lg:text-[38px]
              "
            >
              Deployed in the field.
            </h2>

            {/* Client */}
            <div className="mt-7">
              <Image
                src={iitaLogo}
                alt="IITA logo"
                width={100}
                height={100}
                className="h-[30px] w-auto object-contain"
              />
            </div>

            {/* Short statement */}
            <p
              className="
                mt-2
                text-[13px]
                font-medium
                leading-5
                text-[#0D0D26]
                md:text-[14px]
              "
            >
              Deployed at scale in challenging field conditions.
            </p>

            {/* Description */}
            <p
              className="
                mt-6
                text-[12px]
                font-medium
                leading-5
                text-[#9898B3]
                md:text-[13px]
                md:leading-[1.6]
              "
            >
              WeCollect&apos;s platform handled the full data collection
              workflow — from form design to validated data delivery. Real-time
              supervision, GIS validation, and automated QA throughout.
            </p>
          </div>

          {/* RIGHT IMAGE */}
          <div className="relative w-full overflow-hidden border border-[#E6E6ED]">
            <Image
              src={IitaImage}
              alt="IITA field deployment"
              width={900}
              height={500}
              className="
                h-[250px]
                w-full
                object-cover
                md:h-[280px]
                lg:h-[300px]
              "
            />
          </div>
        </div>
      </Container>
    </section>
  );
}
