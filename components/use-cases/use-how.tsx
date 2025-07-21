import React from "react";
import ContainerLayout from "../../layouts/ContainerLayout";
import Link from "next/link";
import blueright from "../../assets/svg/blueright.svg";
import Image from "next/image";
import spiralRight from "../../assets/png/spiral-right.png";
function UseHow({howInfo} : {howInfo:any}) {
  return (
    <div
      className="w-full relative overflow-x-hidden overflow-y-hidden  "
      data-aos="fade-up"
      data-aos-duration="1000"
    >
      <div className="absolute top-0 right-[-300px] 2xl:right-[-100px] ">
        <Image src={spiralRight} alt="spiral" className=" hidden lg:flex " />
      </div>
      <ContainerLayout>
        <div
          className="w-full flex flex-col flow-hide"
          // data-aos="fade-up"
          // data-aos-duration="1000"
        >
          <p
            className="text-customBlack text-[20px] lg:text-2xl 2xl:text-[32px] font-serif font-semibold mt-20 text-center"
            // data-aos="fade-up"
            // data-aos-duration="1000"
          >
            {howInfo?.title}
          </p>

          <p
            className="text-[#555555] text-[14px]  lg:text-[18px] font-sans font-medium mt-[10px] md:text-center leading-[36px] max-w-[977px] mx-auto"
            // data-aos="fade-up"
            // data-aos-duration="1000"
          >
            {howInfo?.subtitle}
          </p>
          <div className="w-full h-auto flex flex-col md:flex-row md:items-center mt-8 md:justify-center  lg:gap-6 mb-8 pb-20">
            <div className="bg-mainBlue hover:bg-[#E3D5FF] w-[197px] h-[50px] flex justify-center items-center text-white hover:text-mainBlue rounded-[50px]  cursor-pointer font-semibold hero-btn font-sans ">
              Get started for free
            </div>
            <Link
              href="https://demo.wecollect.tech"
              target="_blank"
              className="bg-[#FFFFFF] hover:bg-[#E3D5FF]  w-[197px]  h-[50px] flex justify-start pl-[10px] items-center text-mainBlue rounded-[50px] hero-btn cursor-pointer my-5 font-sans md:my-0 font-semibold  "
            >
              <Image src={blueright} alt="blueright" className="mr-[10px]" />
              Book a demo
            </Link>
          </div>
        </div>
      </ContainerLayout>
    </div>
  );
}

export default UseHow;
