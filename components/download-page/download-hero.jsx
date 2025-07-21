import React, { useEffect } from "react";
import NewNavbar from "../navbar/new-navbar";
import ContainerLayout from "../../layouts/ContainerLayout";
import heroPic from "../../assets/png/download-hero-pic.png";
import Image from "next/image";
import appleP from "../../assets/svg/apple-p.svg";
import googleP from "../../assets/svg/google-p.svg";
import MobileNav from "../navbar/mobile-nav";
import mobileImage from "../../assets/png/mobile-download.png";

const DownloadHero = () => {
  useEffect(() => {
    window?.scrollTo(0, 0);
  }, []);
  return (
    <div className="new-hero-bg w-full h-full relative flex flex-col bg-[#EDE6FF] mb-8 lg:mb-0 flow-hide">
      <div className="w-full  relative new-hero-bg flex flex-col flow-hide">
        <NewNavbar />
        <MobileNav present={2} />
        <ContainerLayout>
          <div className="w-full flex flex-col mt-16 flow-hide">
            <div className="w-full lg:flex-row   flex flex-col flow-hide ">
              <div className="w-full flex flex-col lg:w-1/2 justify-center ">
                <div className="w-full px-4  lg:max-w-full  flex flex-col justify-center mt-10 lg:mt-0">
                  <h1
                    className="text-[#1e1e1e] font-serif font-semibold text-[32px] leading-[50px] 2xl:text-[40px] max-w-[600px] 2xl:leading-[67px]  "
                    data-aos="fade-down"
                    data-aos-duration="1000"
                  >
                    Download App
                  </h1>
                  <p
                    className="text-customBlack font-medium md:text-[18px] 2xl:text-[18px] text-[18px] leading-[39px] 2xl:leading-[48px] max-w-[500px] font-sans"
                    data-aos="fade-down"
                    data-aos-duration="1000"
                  >
                    Our Smart Data Collection Mobile app, specially built for
                    Smart data and useful for Insight gathering in Nigeria
                    ecosystem.
                  </p>
                  <div
                    className="w-full flex mt-6 gap-4 flex-col lg:flex-row"
                    data-aos="fade-down"
                    data-aos-duration="1000"
                  >
                    <Image
                      src={appleP}
                      alt="apple-logo"
                      width={appleP.width}
                      height={appleP.height}
                    />
                    <Image
                      src={googleP}
                      alt="goole-logo"
                      width={googleP.width}
                      height={googleP.height}
                    />
                  </div>
                </div>
              </div>
              <div className="w-full lg:w-1/2 z-0 relative px-4  lg:h-screen">
                <Image
                  src={heroPic}
                  alt="hero"
                  width={heroPic.width}
                  height={heroPic.height}
                  className="w-full  z-low md:flex hidden "
                />
                <Image
                  src={heroPic}
                  alt="hero"
                  width={heroPic.width}
                  height={heroPic.height}
                  className="w-full  z-low md:hidden mt-10 "
                />
              </div>
            </div>
          </div>
        </ContainerLayout>
      </div>
    </div>
  );
};

export default DownloadHero;
