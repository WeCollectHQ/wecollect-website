import React from "react";
import Image from "next/image";
import ContainerLayout from "../../layouts/ContainerLayout";
import data from "../../assets/svg/data.svg";
import management from "../../assets/svg/management.svg";
import gpss from "../../assets/svg/gpss.svg";
import wifi from "../../assets/svg/wifi.svg";
import securecase from "../../assets/svg/securecase.svg";

import spiral from "../../assets/png/spiral-curve.png";
import spiralRight from "../../assets/png/spiral-right.png";

import { useRouter } from "next/router";
function HomeFeatures() {
  const router = useRouter();

  return (
    <div
      className="w-full relative overflow-x-hidden overflow-y-hidden  "
      data-aos="fade-up"
      data-aos-duration="1000"
    >
      <div className="absolute top-0 left-[-100px] ">
        <Image
          src={spiral}
          alt="spiral"
          className="max-h-[1600px] hidden lg:flex"
        />
      </div>
      <div className="absolute top-0 right-[-100px] ">
        <Image src={spiralRight} alt="spiral" className=" hidden lg:flex" />
      </div>

      <ContainerLayout>
        <p
          className="text-ash text-[20px] lg:text-2xl 2xl:text-[32px] font-semibold  mt-16 lg:mt-36 text-center font-serif"
          // data-aos="fade-up"
          // data-aos-duration="1000"
        >
          FEATURES
        </p>

        <p
          className="text-[#555555] font-sans  2xl:md:text-[18px] leading-[35px] text-[14px] font-medium text-center"
          // data-aos="fade-up"
          // data-aos-duration="1000"
        >
          Explore features that makes Us unique
        </p>

        <div className="bg-[#F9F6FF] container-border w-full h-auto rounded-[50px] p-5 lg:p-[30px] mt-5 lg:mt-20  relative flow-hide ">
          <div className="w-full h-auto grid grid-cols-1 lg:grid-cols-2 items-center gap-4 lg:gap-10">
            <div
              className=" w-full  h-fit lg:h-full rounded-[30px] py-5 lg:py-10 px-5 lg:px-[30px]   cursor-pointer boxlee"
              onClick={() => router.push("/smart-data-collection")}
              // data-aos="fade-up"
              // data-aos-duration="1000"
            >
              <Image src={data} alt="data" className="w-[80px] h-[80px]" />

              <p className="text-[#333333] 2xl:text-[30px] lg:text-2xl text-xl  font-semibold mt-7 leading-[36px] md:leading-[48px] 2xl:leading-[50px] font-serif">
                SMART DATA <br className="hidden lg:flex" /> COLLECTION
                APPLICATION
              </p>

              <p className="text-[#555555] font-sans 2xl:text-[18px] lg:text-[16px] leading-[35px] text-[14px] font-medium mt-7">
                We have simplified your data collection efforts. Now you can
                seamlessly collect and analyze accurate, insightful, and
                complete data using our smart application
              </p>
            </div>

            <div
              className="boxlee w-full   h-fit lg:h-full rounded-[30px] p-5 lg:p-7  md:mt-0   cursor-pointer"
              onClick={() => router.push("/project-management-dashboard")}
              // data-aos="fade-up"
              // data-aos-duration="1000"
              // data-aos-delay="300"
            >
              <Image
                src={management}
                alt="management"
                className="w-[80px] h-[80px]"
              />

              <p className="text-[#333333] lg:text-2xl 2xl:text-[30px] leading-[36px] text-xl font-semibold mt-7 md:leading-[48px] 2xl:leading-[50px] font-serif">
                Project Management Tool
              </p>

              <p className="text-[#555555] font-sans 2xl:text-[18px] lg:text-[16px] leading-[35px] text-[14px] font-medium mt-7">
                We are taking the stress out of your data collection project.
                Now you can conveniently create, track and monitor your project
                on one platform from anywhere.
              </p>
            </div>
          </div>

          <div className="w-full h-auto grid grid-cols-1 lg:grid-cols-3 gap-4 lg:gap-10 justify-between items-center mt-4 lg:mt-10">
            <div
              className="boxlee w-full h-fit lg:h-full  rounded-[30px] p-5 lg:p-7  cursor-default"
              onClick={() => router.push("/gis-systems")}
              // data-aos="fade-up"
              // data-aos-duration="1000"
              // data-aos-delay="600"
            >
              <Image src={gpss} alt="gpss" className="w-[80px] h-[80px]" />

              <p className="text-[#333333] lg:text-2xl 2xl:text-[30px] leading-[36px] text-xl font-semibold mt-7 md:leading-[48px] 2xl:leading-[50px] font-serif">
                GEOSPATIAL INFORMATION SYSTEMS
              </p>

              <p className="text-[#555555] font-sans 2xl:text-[18px] lg:text-[16px] leading-[35px] text-[14px] font-medium mt-7">
                With the GIS systems embedded, data monitoring and evaluation is
                seamless, therefore increasing data accuracy.
              </p>
            </div>

            <div
              className="boxlee w-full  h-fit lg:h-full rounded-[30px]  p-5 lg:p-7  md:my-0  cursor-default"
              onClick={() => router.push("/offline-data-collection")}
              // data-aos="fade-up"
              // data-aos-duration="1000"
              // data-aos-delay="600"
            >
              <Image src={wifi} alt="wifi" className="w-[80px] h-[80px]" />

              <p className="text-[#333333] font-serif lg:text-2xl leading-[36px] 2xl:text-[30px] text-xl font-semibold mt-7 md:leading-[48px] 2xl:leading-[50px]">
                OFFLINE DATA COLLECTION
              </p>

              <p className="text-[#555555] font-sans 2xl:text-[18px] lg:text-[16px] leading-[35px] text-[14px] font-medium mt-7">
                Harness the power of seamless offline data collection, anytime,
                anywhere, even without an internet connection.
              </p>
            </div>

            <div
              className="boxlee w-full  h-full rounded-[30px] p-7  cursor-pointer"
              onClick={() => router.push("/secure-cloud-storage")}
              // data-aos="fade-up"
              // data-aos-duration="1000"
              // data-aos-delay="600"
            >
              <Image
                src={securecase}
                alt="securecase"
                className="w-[80px] h-[80px]"
              />

              <p className="text-[#333333] font-serif leading-[36px] lg:text-2xl 2xl:text-[30px] text-xl font-semibold mt-7 md:leading-[48px] 2xl:leading-[50px]">
                SECURE CLOUD STORAGE
              </p>

              <p className="text-[#555555] font-sans 2xl:text-[18px] lg:text-[16px] leading-[35px] text-[14px] font-medium mt-7">
                Build, create and save data securely to your cloud without
                network connectivity. Sync data when network is restored.
              </p>
            </div>
          </div>
        </div>
      </ContainerLayout>
    </div>
  );
}

export default HomeFeatures;
