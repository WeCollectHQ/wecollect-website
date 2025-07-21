import React, { useEffect, useState } from "react";
import ContainerLayout from "../../layouts/ContainerLayout";
import Image from "next/image";
import google from "../../assets/svg/google1.svg";
import apple from "../../assets/svg/apple2.svg";
import twiiter from "../../assets/svg/twit.svg";
import facebook from "../../assets/svg/face.svg";
import linkedin from "../../assets/svg/linkedin.svg";
import msg from "../../assets/svg/msg.svg";
import log from "../../assets/svg/logg.svg";
import { ArrowUp } from "../../assets/svg/index";

import { useRouter } from "next/router";
const Footer = () => {
  const router = useRouter();

  return (
    <ContainerLayout>
      <div
        className="w-full lg:w-10/12 mx-auto flex flex-col lg:py-[70px] bg-white"
        id="waitlist"
      >
        <h1
          className="text-customeBlack font-bold text-[16px] lg:text-2xl pl-8"
          data-aos="fade-up"
          data-aos-duration="2000"
        >
          COMING SOON
        </h1>
        <div
          className="flex space-x-6 mt-4 pl-8 relative"
          data-aos="fade-up"
          data-aos-duration="2000"
        >
          <Image
            src={google}
            alt="google"
            className="w-[120px]  lg:w-fit h-auto cursor-pointer"
          />
          <Image
            src={apple}
            alt="apple"
            className="w-[120px] lg:w-fit h-auto cursor-pointer"
          />
          <div className="absolute right-0 top-0">
            <span
              onClick={() => window.scrollTo(0, 0)}
              className="cursor-pointer scale-50 lg:scale-100"
            >
              <ArrowUp />
            </span>
          </div>
        </div>

        <div
          className="w-full footer mt-12 h-[240px] lg:h-[278px] px-2 flex justify-center items-center"
          data-aos="fade-up"
          data-aos-duration="2000"
        >
          <div className="w-full lg:w-10/12 flex lg:flex-row lg:space-x-8 flex-col">
            <div className="flex-col w-full lg:w-4/12">
              <h1 className="text-white font-semibold lg:leading-8 text-md lg:text-xl">
                Be First to
              </h1>
              <h1 className="text-white font-semibold lg:leading-8 text-md lg:text-xl mt-2 mb-2 md:mb-0">
                know when we launch
              </h1>
            </div>
            <div className="flex bg-white h-[56px] rounded-[20px] justify-between  items-center px-2  lg:w-8/12">
              <input
                type="text"
                className=" grow    placeholder:text-customBlack placeholder:text-md lg:placeholder:text-2xl border-none outline-none md:pl-5 "
                placeholder="johndoe@example.com"
              />
              <button className="w-fit flex justify-center items-center h-[48px] px-3 lg:px-9 bg-mainBlue text-white text-[12px] lg:text-2xl font-bold rounded-[20px] ">
                Notify me
              </button>
            </div>
          </div>
        </div>
        <div className="flex w-full lg:justify-between lg:items-center mt-20 flex-col-reverse lg:flex-row">
          <div className="flex items-center space-x-4 mt-4 lg:mt-0 pb-8 lg:pb-0">
            <Image src={log} alt="log" className="w-[20px] h-auto lg:w-fit" />
            <p className="text-xl 2xl:text-[32px] lg:text-2xl font-bold text-customBlack opacity-80">
              WeCollect
            </p>
            <p className="ltext-[16px] lg:text-xl text-customBlack">
              {" "}
              | All rights reserved.
            </p>
          </div>
          <div className="flex space-x-4 items-center">
            <Image src={linkedin} alt="linked" />
            <Image src={facebook} alt="linked" />
            <Image src={twiiter} alt="linked" />
            <Image src={msg} alt="linked" />
          </div>
        </div>
      </div>
    </ContainerLayout>
  );
};

export default Footer;
