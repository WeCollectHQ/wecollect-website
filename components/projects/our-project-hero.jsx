import React from "react";
import NewNavbar from "../navbar/new-navbar";
import ContainerLayout from "../../layouts/ContainerLayout";
import heroPic from "../../assets/png/pop-sweet.png";
import Image from "next/image";
import MobileNav from "../navbar/mobile-nav";
const OurProjectHero = () => {
  return (
    <div className=" w-full h-full new-hero-bg ">
      <div className="w-full lg:h-screen h-[700px] lg:max-h-[908px] relative  flex flex-col">
        <NewNavbar />
        <MobileNav present={2} />
        <ContainerLayout>
          <div className="w-full flex flex-col mt-20">
            <div className="w-full lg:flex-row mt-12  flex flex-col  ">
              <div className="w-full flex flex-col lg:w-6/12 justify-center ">
                <h1
                  className="text-[#1e1e1e] font-serif font-semibold text-[32px] leading-[50px] 2xl:text-[40px] max-w-[600px] 2xl:leading-[67px]  "
                  data-aos="fade-down"
                  data-aos-duration="1000"
                >
                  OUR PROJECTS
                </h1>
                <p
                  className="text-customBlack font-medium md:text-[18px] 2xl:text-[18px] text-[18px] leading-[39px] 2xl:leading-[48px] max-w-[500px] font-sans"
                  data-aos="fade-down"
                  data-aos-duration="1000"
                >
                  Explore our carefully curated products
                </p>
              </div>
              <div className="w-full lg:w-6/12 flex justify-center items-center ">
                <Image
                  src={heroPic}
                  alt="hero"
                  width={heroPic.width}
                  height={heroPic.height}
                  className="w-9/12 lg:w-8/12 max-w-[250px] lg:max-w-full mx-auto 2xl:w-auto mt-32 lg:mt-0"
                />
              </div>
            </div>
          </div>
        </ContainerLayout>
      </div>
    </div>
  );
};

export default OurProjectHero;
