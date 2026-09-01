import Image from "next/image";

import { Container } from "@/components/common/Container";
import AiDataClientProofImage from "@/assets/pngs/ai-data-client-proof.png";
import AiDataClientProofLogo from "@/assets/svgs/ai-data-client-proof-logo.svg";

export function ClientProof() {
  return (
    <section className="bg-white text-[#0D0D26]">
      <Container>
        <div
          className="
            flex
            min-h-[520px]
            flex-col
            justify-center
            gap-12
            py-20
            md:flex-row
            md:items-center
            md:gap-16
            lg:min-h-[520px]
            lg:gap-[90px]
            lg:py-[80px]
          "
        >
          {/* LEFT CONTENT */}
          <div
            className="
              w-full
              shrink-0
              md:w-[43%]
              lg:w-[470px]
            "
          >
            <p
              className="
                text-[10px]
                font-medium
                uppercase
                leading-4
                text-[#5A5AF0]
              "
            >
              Client Proof
            </p>

            <h2
              className="
                mt-7
                font-merriweather
                text-[36px]
                font-bold
                leading-[1.2]
                tracking-[-1.5%]
                text-[#0D0D26]
                sm:text-[40px]
                lg:text-[42px]
              "
            >
              Deployed in the field.
            </h2>

            {/* CLIENT LOGO */}
            <div className="mt-9">
              <div className="relative h-[28px] w-[55px]">
                <Image
                  src={AiDataClientProofLogo}
                  alt="Client"
                  fill
                  className="object-contain object-left"
                />
              </div>
            </div>

            <p
              className="
                mt-2
                text-[14px]
                font-medium
                leading-5
                text-[#0D0D26]
              "
            >
              Deployed at scale in challenging field conditions.
            </p>

            <p
              className="
                mt-7
                max-w-[440px]
                text-[13px]
                font-medium
                leading-[1.65]
                text-[#9898B3]
              "
            >
              WeCollect&apos;s platform handled the full data validation
              workflow — from form design to validated data delivery. Real-time
              supervision, GIS validation, and automated QA throughout.
            </p>
          </div>

          {/* RIGHT IMAGE */}
          <div
            className="
              relative
              w-full
              overflow-hidden
              md:w-[57%]
              lg:w-[570px]
            "
          >
            <div className="relative aspect-[1.7/1] w-full">
              <Image
                src={AiDataClientProofImage}
                alt="AI data client deployment"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
