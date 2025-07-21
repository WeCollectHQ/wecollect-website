import React from "react";
import NewNavbar from "../navbar/new-navbar";
import ContainerLayout from "../../layouts/ContainerLayout";
import heroPic from "../../assets/png/secure-hero.png";
import Image from "next/image";
import MobileNav from "../navbar/mobile-nav";
import blueright from "../../assets/svg/blueright.svg";
import Link from "next/link";
const SecureHero = () => {
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
                  SECURE CLOUD <br className="hidden 2xl:block" />
                  STORAGE
                </h1>
                <p
                  className="text-customBlack font-medium md:text-[18px] 2xl:text-[24px] text-[18px] leading-[39px] 2xl:leading-[48px] max-w-[500px] font-sans"
                  data-aos="fade-down"
                  data-aos-duration="1000"
                >
                  Collect, store and access your data anytime.
                </p>
                <div className="mt-12">
                  <Link
                    href="https://demo.wecollect.tech"
                    target="_blank"
                    className="bg-[#FFFFFF] hover:bg-[#E3D5FF]  w-[197px]  h-[50px] flex justify-start pl-[10px] items-center text-mainBlue rounded-[50px] hero-btn cursor-pointer my-5 md:my-0 font-semibold text-[14px] 2xl:text-[16px] font-sans  "
                  >
                    <Image
                      src={blueright}
                      alt="blueright"
                      className="mr-[10px]"
                    />
                    Book a demo
                  </Link>
                </div>
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

export default SecureHero;
