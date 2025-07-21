import React from "react";
import NewNavbar from "../navbar/new-navbar";
import ContainerLayout from "../../layouts/ContainerLayout";
import heroPic from "../../assets/png/contact-samp.png";
import Image from "next/image";
import MobileNav from "../navbar/mobile-nav";
const ContactHero = () => {
  return (
    <div className="new-hero-bg w-full h-full">
      <div className="w-full lg:h-screen lg:max-h-[908px] relative new-hero-bg flex flex-col">
        <NewNavbar />
        <MobileNav present={1} />
        <ContainerLayout>
          <div className="w-full flex flex-col mt-20">
            <div className="w-full lg:flex-row mt-12  flex flex-col ">
              <div className="w-full flex flex-col lg:w-5/12 justify-center ">
                <h1
                  className="text-mainBlue font-semibold text-[32px] 2xl:text-[64px] font-serif "
                  data-aos="fade-down"
                  data-aos-duration="1000"
                >
                  CONTACT US
                </h1>
                <p
                  className="text-customBlack font-sans font-medium 2xl:text-[32px] lg:text-2xl text-xl 2xl:leading-[48px] mt-[30px]"
                  data-aos="fade-down"
                  data-aos-duration="1000"
                >
                  Connect with WeCollect
                </p>
              </div>
              <div className="w-full lg:w-7/12 mt-16 lg:mt-0">
                <Image
                  src={heroPic}
                  alt="hero"
                  width={heroPic.width}
                  height={heroPic.height}
                  className="w-full h-auto"
                  data-aos="fade-down"
                  data-aos-duration="1000"
                />
              </div>
            </div>
          </div>
        </ContainerLayout>
      </div>
    </div>
  );
};

export default ContactHero;
