import React from "react";
import Image from "next/image";
import { useRouter } from "next/router";
import { useCases } from "../../utils/useCasesData";
import ContainerLayout from "../../layouts/ContainerLayout";
import UseCasesLeftIcon from "../../assets/svg/f7_doc-on-doc-fill.svg";
import DotsBg from "../../assets/png/dots-bg-image.png";
import Hr from "./Hr";

function UseCases() {
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
            <Image src={UseCasesLeftIcon} alt="" />
            <p className="text-[#1E1E5A] text-base font-medium pl-2">
              Use Cases
            </p>
          </div>
        </div>

        <p className="bg-[linear-gradient(89.2deg,_#151541_8.26%,_#00009A_99.38%)] bg-clip-text text-transparent font-sans text-[24px] lg:text-[40px] font-black text-center lg:leading-[60px] z-10 relative">
          Dynamically Built to Fit Your Unique Case
        </p>

        <div className="w-full h-auto grid grid-cols-1 lg:grid-cols-3 gap-4 lg:gap-10 justify-between items-center mt-4 lg:mt-10">
          {useCases.map((useCase, index) => (
            <div
              key={index}
              className="w-full h-fit lg:h-full rounded-[30px] py-5 lg:py-10 px-5 lg:px-[30px] boxlee hover:shadow-xl shadow-[#ede6ff]"
            >
              <Image
                src={useCase.icon}
                alt={useCase.title}
                className="w-[80px] h-[80px]"
              />

              <p className="bg-[linear-gradient(89.2deg,_#151541_8.26%,_#00009A_99.38%)] bg-clip-text text-transparent text-base lg:text-xl font-black mt-7 leading-[36px] md:leading-[48px] 2xl:leading-[50px] uppercase font-serif">
                {useCase.title}
              </p>

              <p className="text-[#555555] font-sans 2xl:text-[18px] lg:text-[16px] leading-[35px] text-[14px] font-medium mt-7 line-clamp-3">
                {useCase.description}
              </p>

              <button
                onClick={() => router.push(useCase.link)}
                className="bg-[#4747D6] w-[200px] h-12 rounded-[50px] py-3 px-6 mt-4 flex justify-center text-center text-[#E9E9EF] text-base font-medium"
              >
                Learn More
              </button>
            </div>
          ))}
        </div>

        <button
          onClick={() => router.push("")}
          className="bg-[#F3F3FF] w-[200px] h-12 m-auto rounded-[50px] py-3 px-6 flex justify-center text-center text-[#4747D6] text-base font-medium shadow-xl my-6 lg:my-16"
        >
          View All
        </button>
      </ContainerLayout>

      <Hr />
    </div>
  );
}

export default UseCases;
