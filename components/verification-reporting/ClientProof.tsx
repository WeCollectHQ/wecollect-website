import Image from "next/image";
import { Container } from "@/components/common/Container";
import KadunaElectricImage from "@/assets/pngs/kaduna-electric.png";
import KadunaElectricLogo from "@/assets/svgs/kaduna-elect.svg";

export function ClientProof() {
  return (
    <section className="bg-white text-[#0D0D26]">
      <Container>
        <div
          className="
            flex
            min-h-[400px]
            flex-col
            items-center
            gap-10
            py-16
            md:min-h-[430px]
            md:flex-row
            md:items-start
            md:gap-14
            md:py-20
            lg:gap-[110px]
            lg:py-[88px]
          "
        >
          {/* LEFT CONTENT */}
          <div className="w-full max-w-[390px] shrink-0 md:pt-3 lg:max-w-[410px]">
            <p className="text-[9px] font-medium uppercase leading-4 text-[#5555E6]">
              Client Proof
            </p>

            <h2
              className="
                mt-4
                font-merriweather
                text-[30px]
                font-bold
                leading-[1.2]
                tracking-[-1%]
                md:text-[34px]
                lg:text-[38px]
              "
            >
              Deployed in the field.
            </h2>

            {/* CLIENT LOGO */}
            <div className="mt-8">
              <Image
                src={KadunaElectricLogo}
                alt="Kaduna Electric"
                width={100}
                height={30}
                className="h-auto w-[75px] object-contain object-left"
              />
            </div>

            <p className="mt-2 text-[11px] font-medium leading-5 text-[#0D0D26] md:text-[12px]">
              Deployed at scale in challenging field conditions.
            </p>

            <p className="mt-5 max-w-[380px] text-[11px] leading-[1.55] text-[#9898B3] md:text-[12px]">
              WeCollect&apos;s platform handled the full verification &amp;
              reporting workflow — from form design to validated data delivery.
              Real-time supervision, GIS validation, and automated QA
              throughout.
            </p>
          </div>

          {/* CLIENT IMAGE */}
          <div
            className="
              relative
              w-full
              overflow-hidden
              md:w-[500px]
              lg:w-[500px]
              xl:w-[510px]
            "
          >
            <div className="relative aspect-[1.65/1] w-full">
              <Image
                src={KadunaElectricImage}
                alt="Kaduna Electric field deployment"
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
