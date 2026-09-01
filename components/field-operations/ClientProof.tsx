import Image from "next/image";
import { Container } from "@/components/common/Container";
import ClientProofImage from "@/assets/pngs/field-operations-client-proof.png";
import cwaylogo from "@/assets/pngs/cway.jpg";

export function ClientProof() {
  return (
    <section className="bg-white text-[#0D0D26]">
      <Container>
        <div
          className="
            flex
            min-h-[390px]
            flex-col
            items-center
            gap-10
            py-16
            md:min-h-[420px]
            md:flex-row
            md:gap-16
            md:py-20
            lg:gap-[100px]
            lg:py-[88px]
          "
        >
          {/* LEFT CONTENT */}
          <div className="w-full shrink-0 md:w-[360px] lg:w-[390px]">
            <p className="text-[10px] font-medium uppercase leading-4 text-[#5555E6]">
              Client Proof
            </p>

            <h2
              className="
                mt-5
                font-merriweather
                text-[30px]
                font-bold
                leading-[1.2]
                tracking-[-1%]
                md:text-[34px]
                lg:text-[36px]
              "
            >
              Deployed in the field.
            </h2>

            {/* CLIENT */}
            <div className="mt-7">
              {/* <p className="text-[20px] font-bold leading-none text-[#16A34A]">
                CWAY
              </p> */}
              <Image src={cwaylogo} alt="CWAY Logo" width={63} height={28} />

              <p className="mt-2 text-[12px] font-medium leading-5 text-[#0D0D26]">
                Deployed at scale in challenging field conditions.
              </p>
            </div>

            {/* DESCRIPTION */}
            <p
              className="
                mt-6
                max-w-[390px]
                text-[11px]
                font-medium
                leading-[1.65]
                text-[#8A8AA8]
                md:text-[12px]
              "
            >
              WeCollect&apos;s platform handled the full field operations
              workflow — from form design to validated data delivery. Real-time
              supervision, GIS validation, and automated QA throughout.
            </p>
          </div>

          {/* RIGHT IMAGE */}
          <div className="relative w-full overflow-hidden md:flex-1">
            <Image
              src={ClientProofImage}
              alt="CWAY field operations deployment"
              width={650}
              height={300}
              className="h-auto w-full object-cover"
            />
          </div>
        </div>
      </Container>
    </section>
  );
}
