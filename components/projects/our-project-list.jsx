import React from "react";
import ContainerLayout from "../../layouts/ContainerLayout";
import { SpecialArrow } from "../../assets/svg";

import fpmp from "../../assets/png/fpmp-new.png";
import kaduna from "../../assets/png/kaduna.png";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import techpoint from "../../assets/svg/techpoint.svg";
const OurProjectList = () => {
  const router = useRouter();
  return (
    <div
      className="w-full flex flex-col bg-white rounded-t-[50px]  "
      data-aos="fade-up"
      data-aos-duration="1000"
    >
      <ContainerLayout>
        <div className="w-full pt-20 pb-10 lg:pt-28 lg:pb-4 flex flex-col justify-center items-center">
          <div className="flex flex-col  w-full">
            <h1 className="text-customBlack font-semibold text-2xl 2xl:text-[32px] mb-2 font-serif">
              OUR PROJECTS
            </h1>
            {/* <span>
              <SpecialArrow />
            </span> */}
            <div className="w-full grid grid-cols-1 xl:grid-cols-3  gap-5 mt-12 2xl:mt-16">
              {/* single session */}
              <div className="w-full flex flex-col">
                <div className="w-full max-h-[400px] border-[3px] rounded-[30px] border-[#F9F6FF]  xl:min-w-[400px] h-full min-h-[400px] flex justify-center items-center">
                  <Image
                    src={fpmp}
                    alt="fpmp"
                    className="w-auto h-auto object-contain"
                  />
                </div>
                <div className="flex flex-col mt-8 ">
                  <div className="w-full sm:h-[80px] 2xl:h-[100px] flex items-center ">
                    <h1 className="text-customBlack 2xl:text-[30px] font-serif text-2xl font-semibold xl:max-w-[250px] 2xl:max-w-[325px] 2xl:leading-[45px] ">
                      Food Price Monitoring Project In Nigeria
                    </h1>
                  </div>
                  <p className="text-[14px] text-[#555] font-sans mt-5 font-medium leading-[36px] lg:text-[16px] xl:max-w-[300px]  ">
                    Tracking the availability of food in Nigeria using a data
                    driven price model
                    {/* in line with the UN SD4 */}
                  </p>
                  <button className="bg-mainBlue rounded-[50px] mt-5 h-[50px] px-5 flex items-center justify-center text-white text-[16px]  cursor-pointer font-sans lg:min-w-[197px] max-w-fit hover:bg-[#E3D5FF] hover:text-mainBlue font-semibold ">
                    Learn more
                  </button>
                </div>
              </div>
              {/* end of single session */}
              {/* single session */}
              <div className="w-full flex flex-col">
                <div className="w-full max-h-[400px] border-[3px]  rounded-[30px] border-[#F9F6FF]  xl:min-w-[400px] h-full min-h-[400px] flex justify-center items-center">
                  <Image
                    src={kaduna}
                    alt="fpmp"
                    className="w-auto h-auto object-contain"
                  />
                </div>
                <div className="flex flex-col mt-8 ">
                  <div className="w-full sm:h-[80px] 2xl:h-[100px] flex items-center ">
                    <h1 className="text-customBlack 2xl:text-[30px] font-serif text-2xl font-semibold max-w-[325px] 2xl:leading-[45px]">
                      Kaduna Electric Project
                    </h1>
                  </div>
                  <p className="text-[14px] lg:text-[16px] text-[#555] mt-5 font-sans font-medium leading-[36px] 2xl:text-[16px] xl:max-w-[400px] ">
                    WeCollect played a crucial role in helping Kaduna Electric
                    efficiently collect and organize data
                    {/* on their assets... */}
                  </p>
                  <button className="bg-mainBlue font-sans rounded-[50px] mt-5 h-[50px] px-5 flex items-center justify-center text-white text-[16px]  cursor-pointer lg:min-w-[197px] max-w-fit hover:bg-[#E3D5FF] hover:text-mainBlue font-semibold ">
                    Learn more
                  </button>
                </div>
              </div>
              {/* end of single session */}
              {/* single session */}
              <div className="w-full flex flex-col">
                <div className="w-full max-h-[400px] border-[3px] rounded-[30px] border-[#F9F6FF]  xl:min-w-[400px] h-full min-h-[400px] flex justify-center items-center">
                  <Image
                    src={techpoint}
                    alt="fpmp"
                    className="w-auto h-auto object-contain"
                  />
                </div>
                <div className="flex flex-col mt-8 ">
                  <div className="w-full sm:h-[80px] 2xl:h-[100px] flex items-center ">
                    <h1 className="text-customBlack 2xl:text-[30px] font-serif text-2xl font-semibold max-w-[325px] 2xl:leading-[45px]">
                      TechPoint Project
                    </h1>
                  </div>
                  <p className="text-[14px] text-[#555] mt-5 font-sans font-medium leading-[36px] lg:text-[16px] xl:max-w-[400px] ">
                    WeCollect played a crucial role in helping Techpoint
                    efficiently collect and organize data
                    {/* on their project... */}
                  </p>
                  <button className="bg-mainBlue rounded-[50px] mt-5 h-[50px] px-5 flex items-center justify-center text-white text-[16px]  cursor-pointer lg:min-w-[197px] max-w-fit hover:bg-[#E3D5FF] hover:text-mainBlue font-semibold font-sans ">
                    Learn more
                  </button>
                </div>
              </div>
              {/* end of single session */}
            </div>
          </div>

          {/* <div className="flex flex-col items-center justify-center w-full mt-24 px-4 lg:px-0">
            <h1
              className="text-mainBlue text-center font-semibold text-2xl 2xl:text-[32px] "
              // data-aos="fade-up"
              // data-aos-duration="1000"
            >
              Food Price Monitoring Project In Nigeria
            </h1>
            <div
              className="flex flex-col items-center relative mt-12"
              // data-aos="fade-up"
              // data-aos-duration="1000"
            >
              <span className="z-modal -mb-16">
                <Image
                  src={fpmp}
                  alt="images"
                  className="mx-auto w-[171px] h-[200px] lg:w-10/12 lg:h-auto 2xl:w-auto 2xl:h-auto  "
                />
              </span>
              <span className="z-0">
                <Image src={oval} alt="ima" className=" lg:w-9/12 lg:mx-auto lg:h-auto 2xl:w-auto 2xl:h-auto" />
              </span>
            </div>
            <p
              className="text-center mt-12 text-ash 2xl:text-[18px] lg:text-[16px] text-[14px] leading-[25px]  "
              // data-aos="fade-up"
              // data-aos-duration="1000"
            >
              Tracking the availability of food in Nigeria using a data driven
              price model in line with the UN SD4
            </p>
            <div
              className="w-full flex flex-col lg:flex-row lg:flex items-center gap-5 lg:gap-2 justify-center mt-8 px-4"
              // data-aos="fade-up"
              // data-aos-duration="1000"
            >
              <Link
                href={"https://fpmpn.wecollect.tech/"}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-mainBlue hero-btn text-white h-[47px] items-center justify-center rounded-[50px] font-semibold flex lg:min-w-[197px] hover:bg-[#E3D5FF] hover:text-mainBlue w-full max-w-[200px] text-[14px] "
              >
                Explore
              </Link>
              <button
                className="bg-white hero-btn text-mainBlue h-[47px] items-center justify-center rounded-[50px] font-semibold flex lg:min-w-[197px]  border-opacity-30 hover:bg-[#E3D5FF] w-full max-w-[200px] text-[14px]"
                onClick={() => router.push("/contact-us")}
              >
                Contact Us
              </button>
            </div>
          </div> */}
        </div>
      </ContainerLayout>
    </div>
  );
};

export default OurProjectList;
