import Image from "next/image";

import { Container } from "@/components/common/Container";

import UsaidLogo from "@/assets/svgs/usaid.svg";
import DataValidationClientImage from "@/assets/pngs/data-validation-client-proof.png";

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
            md:gap-14
            lg:gap-[80px]
            lg:py-[70px]
          "
        >
          {/* LEFT CONTENT */}
          <div
            className="
              w-full
              shrink-0
              md:w-[40%]
              lg:w-[450px]
            "
          >
            {/* Eyebrow */}
            <p
              className="
                text-[10px]
                font-medium
                uppercase
                leading-4
                text-[#5555E8]
              "
            >
              Client Proof
            </p>

            {/* Heading */}
            <h2
              className="
                mt-7
                font-merriweather
                text-[34px]
                font-bold
                leading-[1.2]
                tracking-[-1%]
                text-[#0D0D26]
                md:text-[38px]
                lg:text-[40px]
              "
            >
              Deployed in the field.
            </h2>

            {/* Client */}
            <div className="mt-8">
              <Image
                src={UsaidLogo}
                alt="USAID"
                width={105}
                height={32}
                className="h-auto w-auto object-contain"
              />
            </div>

            {/* Client statement */}
            <p
              className="
                mt-2
                text-[14px]
                font-medium
                leading-6
                text-[#0D0D26]
                md:text-[15px]
              "
            >
              Deployed at scale in challenging field conditions.
            </p>

            {/* Description */}
            <p
              className="
                mt-7
                max-w-[440px]
                text-[13px]
                font-medium
                leading-[1.7]
                text-[#9898B3]
                md:text-[14px]
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
              md:w-[60%]
              lg:max-w-[605px]
            "
          >
            <div className="relative aspect-[1.78/1] w-full">
              <Image
                src={DataValidationClientImage}
                alt="WeCollect data validation field deployment"
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
