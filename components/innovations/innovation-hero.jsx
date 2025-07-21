import React, { useEffect } from "react";
import NewNavbar from "../navbar/new-navbar";
import MobileNav from "../navbar/mobile-nav";
import ContainerLayout from "../../layouts/ContainerLayout";
import heroPic from "../../assets/png/mac.png";
import Image from "next/image";
const InnovationHero = () => {
  useEffect(() => {
    window?.scrollTo(0, 0);
  }, []);
  return (
    <div className="new-hero-bg w-full h-full">
      <div className="w-full lg:h-[670px] lg:max-h-[670px] relative new-hero-bg flex flex-col">
        <NewNavbar />
        <MobileNav present={1} />
        <ContainerLayout>
          <div className="w-full flex flex-col mt-20">
            <div className="w-full lg:flex-row mt-12  flex flex-col ">
              <div className="w-full flex flex-col lg:w-6/12 justify-center ">
                <h1
                  className="text-[#1e1e1e] font-serif font-semibold text-[32px] leading-[50px] 2xl:text-[40px] max-w-[600px] 2xl:leading-[67px]  "
                  data-aos="fade-down"
                  data-aos-duration="1000"
                >
                  OUR INNOVATIVE & INTELLIGENT PRODUCTS
                </h1>
                <p
                  className="text-customBlack font-medium 2xl:text-[32px] lg:text-[18px] text-[18px]  leading-[40px] 2xl:leading-[48px] "
                  data-aos="fade-down"
                  data-aos-duration="1000"
                >
                  Explore our carefully curated products
                </p>
              </div>
              <div className="w-full lg:w-6/12 justify-center flex items-center">
                <Image
                  src={heroPic}
                  alt="hero"
                  width={heroPic.width}
                  height={heroPic.height}
                  className="w-auto h-auto"
                />
              </div>
            </div>
          </div>
        </ContainerLayout>
      </div>
    </div>
  );
};

export default InnovationHero;
