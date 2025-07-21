import React from "react";
import Image from "next/image";
import ContainerLayout from "../../layouts/ContainerLayout";
import spiral from "../../assets/png/spiral-curve.png";
import oval from "../../assets/png/oval-b.png";
import angola from "../../assets/png/angola.png";
import { useRouter } from "next/router";
const OtherProject = () => {
  const router = useRouter();
  return (
    <div
      className="w-full flex flex-col rounded-t-[50px] bg-[#F9F6FF] relative overflow-y-hidden  "
      data-aos="fade-up"
      data-aos-duration="1000"
    >
      <div className="absolute top-0 left-0 lg:flex hidden">
        <Image src={spiral} alt="spiral" />
      </div>
      <ContainerLayout>
        <div className="w-full py-20 lg:py-28 flex flex-col items-center justify-center px-4 lg:px-0">
          <h1
            className="text-[16px] text-center lg:text-start 2xl:text-[32px] lg:text-2xl font-semibold text-mainBlue"
            // data-aos="fade-up"
            // data-aos-duration="1000"
          >
            Angola Local Spatial Analysis
          </h1>
          <div
            className="flex flex-col items-center relative mt-12"
            // data-aos="fade-up"
            // data-aos-duration="1000"
          >
            <span className="z-modal -mb-8 lg:-mb-16">
              <Image
                src={angola}
                alt="images"
                className="mx-auto w-[171px] lg:w-full  lg:max-w-[435px] h-auto  "
              />
            </span>
            <span className="z-0">
              <Image src={oval} alt="ima" className="opacity-30" />
            </span>
          </div>
          <p
            className="text-center mx-auto text-fade text-[14px] 2xl:text-[18px] lg:text-[16px] lg:leading-[36px] leading-[25px] max-w-[977px] mt-6"
            // data-aos="fade-up"
            // data-aos-duration="1000"
          >
            Lorem ipsum dolor sit amet consectetur. Id suspendisse enim elit
            ipsum feugiat sed vulputate id amet. Etiam arcu ultricies mauris
            neque porta
          </p>
          <div
            className="w-full grid  grid-cols-1 lg:mx-auto lg:w-fit lg:flex items-center gap-5  lg:gap-2 lg:justify-center mt-8 px-4"
            // data-aos="fade-up"
            // data-aos-duration="1000"
          >
            <button className="bg-mainBlue hero-btn text-white h-[47px] items-center justify-center rounded-[50px] font-semibold flex min-w-[197px] hover:bg-[#E3D5FF] hover:text-mainBlue max-w-[198px] mx-auto lg:mx-o ">
              Explore
            </button>
            <button
              className="bg-white hero-btn text-mainBlue h-[47px] items-center justify-center rounded-[50px] font-semibold flex min-w-[197px]  border-opacity-30 hover:bg-[#E3D5FF] max-w-[198px] mx-auto lg:mx-0
          "
              onClick={() => router.push("/contact-us")}
            >
              Contact Us
            </button>
          </div>
        </div>
      </ContainerLayout>
    </div>
  );
};

export default OtherProject;
