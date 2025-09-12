import React from "react";
import Image from "next/image";
import { useRouter } from "next/router";
import { features } from "../../utils/featuresData";
``;
import ContainerLayout from "../../layouts/ContainerLayout";
import FeaturesLeftIcon from "../../assets/svg/features-left-icon.svg";
import DotsBg from "../../assets/png/dots-bg-image.png";
import Hr from "./Hr";

function HomeFeatures() {
  const router = useRouter();

  return (
    <div
      className="w-full relative overflow-x-hidden overflow-y-hidden"
      data-aos="fade-up"
      data-aos-duration="1000"
    >
      <Image
        src={DotsBg}
        alt="dots background"
        className="absolute top-0 left-1/2 -translate-x-1/2 z-0 max-w-[761px] w-auto"
      />

      <ContainerLayout>
        <div className="flex justify-center mt-[100px] mb-6">
          <div className="inline-flex bg-[#F3F3FF] shadow-xl rounded-[50px] py-2 px-3 border-2 border-[#FFFFFF]">
            <Image src={FeaturesLeftIcon} alt="" />
            <p className="text-[#1E1E5A] text-base font-medium pl-2">
              Features
            </p>
          </div>
        </div>

        <p className="bg-[linear-gradient(89.2deg,_#151541_8.26%,_#00009A_99.38%)] bg-clip-text text-transparent font-sans text-[24px] lg:text-[40px] font-black text-center lg:leading-[60px] z-10 relative">
          Everything You Need to Manage Field Projects
        </p>

        <div className="w-full h-auto grid grid-cols-1 lg:grid-cols-3 gap-4 lg:gap-10 justify-between items-center mt-4 lg:mt-10 mb-5">
          {features.map((feature, index) => (
            <div
              key={index}
              className="w-full h-fit lg:h-full rounded-[30px] py-5 lg:py-10 px-5 lg:px-[30px] cursor-pointer boxlee hover:shadow shadow-[#ede6ff]"
              onClick={() => router.push(feature.link)}
            >
              <Image
                src={feature.icon}
                alt={feature.title}
                className="w-[80px] h-[80px]"
              />

              <p className="bg-[linear-gradient(89.2deg,_#151541_8.26%,_#00009A_99.38%)] bg-clip-text text-transparent text-base lg:text-xl font-black mt-7 leading-[36px] md:leading-[48px] 2xl:leading-[50px] font-serif">
                {feature.title}
              </p>

              <p className="text-[#555555] font-sans 2xl:text-[18px] lg:text-[16px] leading-[35px] text-[14px] font-medium mt-7">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </ContainerLayout>

      <Hr />
    </div>
  );
}

export default HomeFeatures;
