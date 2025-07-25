import React from "react";
import Image from "next/image";
import ContainerLayout from "../../layouts/ContainerLayout";
import HowLeftIcon from "../../assets/svg/ri_settings-fill.svg";
import DotsBg from "../../assets/png/dots-bg-image.png";

function How() {
  return (
    <ContainerLayout>
      <div
        // className="w-full flex flex-col flow-hide"
        className="w-full relative overflow-x-hidden overflow-y-hidden"
        // data-aos="fade-up"
        // data-aos-duration="1000"
      >
        <Image
          src={DotsBg}
          alt="dots background"
          className="absolute top-0 left-1/2 -translate-x-1/2 z-0 max-w-[761px] w-auto"
        />
        <div className="flex justify-center mt-[100px] mb-6">
          <div className="inline-flex bg-[#F3F3FF] shadow-xl rounded-[50px] py-2 px-3 border-2 border-[#FFFFFF]">
            <Image src={HowLeftIcon} alt="" />
            <p className="text-[#1E1E5A] text-base font-medium pl-2">
              How It Works
            </p>
          </div>
        </div>
        {/* <p
          className="text-customBlack font-serif text-[20px] lg:text-2xl 2xl:text-[32px] font-semibold mt-20 2xl:mt-32 text-center"
          // data-aos="fade-up"
          // data-aos-duration="1000"
        >
          HOW IT WORKS
        </p> */}

        <p className="bg-[linear-gradient(89.2deg,_#151541_8.26%,_#00009A_99.38%)] bg-clip-text text-transparent font-sans text-[24px] lg:text-[40px] font-black text-center lg:leading-[60px] z-10 relative">
          A Simple Workflow. Powerful Results
        </p>
      </div>
    </ContainerLayout>
  );
}

export default How;
