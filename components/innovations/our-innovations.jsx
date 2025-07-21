import React from "react";
import ContainerLayout from "../../layouts/ContainerLayout";
import { SpecialArrow } from "../../assets/svg";
import oval from "../../assets/png/oval.png";
import fpmp from "../../assets/png/smart.png";
import Image from "next/image";
import phone from "../../assets/svg/phone-icon.svg";
import appleP from "../../assets/svg/apple-p.svg";
import googleP from "../../assets/svg/google-p.svg";

const OurInnovation = () => {
  return (
    <div
      className="w-full flex flex-col bg-white rounded-t-[50px]  "
      id="app"
      data-aos="fade-up"
      data-aos-duration="1000"
    >
      <ContainerLayout>
        <div className="w-full py-20 lg:py-28 flex flex-col justify-center items-center">
          <div className="flex flex-col items-center w-full">
            <h1
              className="text-ash font-semibold text-2xl 2xl:text-[32px] lg:text-2xl mb-2"
              // data-aos="fade-up"
              // data-aos-duration="1000"
            >
              OUR PROJECTS
            </h1>
            <span>
              <SpecialArrow />
            </span>
          </div>

          <div className="flex flex-col items-center justify-center w-full mt-24">
            <div
              className="flex justify-center items-center gap-4"
              // data-aos="fade-up"
              // data-aos-duration="1000"
            >
              <Image src={phone} alt="phone" />
              <h1 className="text-mainBlue text-center font-semibold text-2xl 2xl:text-[32px] lg:text-2xl ">
                Smart Data Collection App
              </h1>
            </div>

            <div
              className="flex flex-col items-center relative mt-12"
              // data-aos="fade-up"
              // data-aos-duration="1000"
            >
              <span className="">
                <Image src={fpmp} alt="images" className="mx-auto  " />
              </span>
            </div>
            <p
              className="text-center mt-12 text-ash 2xl:text-[18px] lg:text-[16px] text-[14px] max-w-[977px]"
              // data-aos="fade-up"
              // data-aos-duration="1000"
            >
              The WeCollect collection app is designed to streamline field data
              collection by leveraging a user-friendly mobile interface that
              works both online and offline. Field agents use the app to gather
              data through surveys, forms, and interviews, which are then
              automatically geotagged for precise location accuracy using
              integrated GIS technology. The app supports real-time data
              validation to ensure accuracy, and all collected information is
              securely synced to a central database once the device is connected
              to the internet. This allows businesses to monitor progress,
              analyze data, and make decisions quickly, based on reliable,
              location-specific insights.
            </p>
            <div
              className="w-full flex mt-6 gap-4 justify-center items-center"
              // data-aos="fade-up"
              // data-aos-duration="1000"
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
      </ContainerLayout>
    </div>
  );
};

export default OurInnovation;
