import React from "react";
import NewNavbar from "../navbar/new-navbar";
import MobileNav from "../navbar/mobile-nav";
import ContainerLayout from "../../layouts/ContainerLayout";
import heroPic from "../../assets/png/app-case-pic.png";
import Image from "next/image";
const AppCaseHero = () => {
  return (
    <div className="new-hero-bg w-full h-full">
      <div className="w-full lg:h-[670px] lg:max-h-[670px] relative new-hero-bg flex flex-col">
        <NewNavbar />
        <MobileNav />
        <ContainerLayout>
          <div className="w-full flex flex-col lg:mt-20 mt-12">
            <div className="w-full lg:flex-row mt-12  flex flex-col ">
              <div className="w-full flex flex-col lg:w-6/12 justify-center ">
                <h1
                  className="text-[#1e1e1e] font-serif font-semibold text-[32px] leading-[50px] 2xl:text-[40px] max-w-[600px] 2xl:leading-[67px]  "
                  // data-aos="fade-down"
                  // data-aos-duration="1000"
                >
                  APPLICABLE CASES
                </h1>
                <p
                  className="text-customBlack font-medium md:text-[18px] 2xl:text-[18px] text-[18px] leading-[39px] 2xl:leading-[48px] max-w-[500px] font-sans"
                  // data-aos="fade-up"
                  // data-aos-duration="1000"
                >
                  Explore our most recent cases
                </p>
              </div>
              <div className="w-full lg:w-6/12 justify-center mb-4 lg:mb-0 lg:justify-end flex items-center mt-6 lg:mt-0">
                <Image
                  src={heroPic}
                  alt="hero"
                  width={heroPic.width}
                  height={heroPic.height}
                  className="lg:w-8/12 2xl:w-auto lg:h-auto max-w-[250px] lg:max-w-full"
                  // data-aos="fade-up"
                  // data-aos-duration="1000"
                />
              </div>
            </div>
          </div>
        </ContainerLayout>
      </div>
    </div>
  );
};

export default AppCaseHero;
