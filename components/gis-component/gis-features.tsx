import Image from "next/image";
import ContainerLayout from "../../layouts/ContainerLayout";
// import data from "../../assets/svg/data.svg";

import gpss from "../../assets/png/gis-1.png";
import wifi from "../../assets/png/gis-2.png";
import securecase from "../../assets/png/gis-3.png";

import spiralRight from "../../assets/png/spiral-right.png";
import Link from "next/link";
import blueright from "../../assets/svg/blueright.svg";
function GisFeatures() {
  return (
    <div
      className="w-full relative overflow-x-hidden overflow-y-hidden mt-12 "
      data-aos="fade-up"
      data-aos-duration="1000"
    >
      <div className="absolute top-0 left-[-100px] ">
        {/* <Image
          src={spiral}
          alt="spiral"
          className="max-h-[1200px] hidden lg:flex"
        /> */}
      </div>
      <div className="absolute top-0 right-[-100px] ">
        <Image src={spiralRight} alt="spiral" className=" hidden lg:flex" />
      </div>

      <ContainerLayout>
        <p
          className="text-ash text-[20px] lg:text-2xl 2xl:text-[32px] font-semibold  mt-16 lg:mt-12 text-center uppercase 2xl:leading-[35px] font-serif"
          // data-aos="fade-up"
          // data-aos-duration="1000"
        >
          Features
        </p>

        <p
          className="text-[#555555] font-sans  2xl:md:text-[18px] leading-[35px] text-[14px] font-medium text-center"
          // data-aos="fade-up"
          // data-aos-duration="1000"
        >
          Discover the features that help you collect data you can trust.
        </p>

        <div className="bg-[#F9F6FF] container-border w-full h-auto rounded-[50px] p-5 lg:p-[30px] mt-5 lg:mt-20  relative flow-hide ">
          <div className="w-full h-auto grid grid-cols-1 lg:grid-cols-3 gap-4 lg:gap-10 justify-between items-center ">
            <div
              className="boxlee w-full h-fit lg:h-full  rounded-[30px]   cursor-default"
              // data-aos="fade-up"
              // data-aos-duration="1000"
              // data-aos-delay="600"
            >
              <div className="min-h-[309px]">

              <Image
                src={gpss}
                alt="gpss"
                className="w-full h-auto max-h-[309px]   "
                />
                </div>

              <p className="text-[#333333] w-full lg:text-2xl 2xl:text-2xl text-xl font-semibold mt-7   px-4 lg:px-7 md:leading-[48px] 2xl:leading-[50px] font-serif">
                Zoomable Map
              </p>

              <p className="text-[#555555] 2xl:text-[16px] lg:text-[16px] leading-[35px] text-[14px] font-medium mt-5 pb-7 px-4 lg:px-7 font-sans ">
                Zoomable maps in WeCollect allow users to interactively explore
                geographic data at varying levels of detail. Users can zoom in
                for specific insights or zoom out for a broader overview,
                enhancing their understanding of spatial relationships and
                patterns.
              </p>
            </div>

            <div
              className="boxlee w-full  h-fit lg:h-full rounded-[30px]    md:my-0  cursor-default"
              // data-aos="fade-up"
              // data-aos-duration="1000"
              // data-aos-delay="600"
            >
              <div className="min-h-[309px]">
                
              <Image
                src={wifi}
                alt="wifi"
                className="w-full h-auto max-h-[309px] "
                />
                </div>

              <p className="text-[#333333]  lg:text-2xl  text-xl font-semibold mt-7 md:leading-[48px] 2xl:leading-[50px]  px-4 lg:px-7 font-serif ">
                Location-Based Insights
              </p>

              <p className="text-[#555555] 2xl:text-[16px] lg:text-[16px] leading-[35px] text-[14px] font-medium pb-7 px-4 lg:px-7 mt-4 font-sans">
                Location-based insights from WeCollect provide businesses with
                valuable data about their target markets, helping them
                understand consumer behavior, regional trends, and competitive
                dynamics.
              </p>
            </div>

            <div
              className="boxlee w-full  h-full rounded-[30px]   cursor-default"
              // data-aos="fade-up"
              // data-aos-duration="1000"
              // data-aos-delay="600"
            >
              <div className="min-h-[309px]">
                
              <Image
                src={securecase}
                alt="securecase"
                className="w-full h-auto max-h-[309px] object-cover "
                />
                </div>

              <p className="text-[#333333] lg:text-2xl text-xl font-semibold mt-6 md:leading-[48px] 2xl:leading-[50px] px-4 lg:px-7 font-serif">
                Easy Data Modification
              </p>

              <p className="text-[#555555] 2xl:text-[16px] lg:text-[16px] leading-[35px] text-[14px] font-medium pb-7 px-4 lg:px-7 mt-4 font-sans">
                Easy data modification feature allows users to effortlessly
                update, edit, or delete collected data in real time. This
                ensures that information remains accurate and relevant, enabling
                businesses to respond quickly to changing circumstances.
              </p>
            </div>
          </div>
        </div>
        <div className="w-full h-auto flex flex-col md:flex-row items-center mt-8 justify-center  lg:gap-6 mb-8 pb-32">
          <div className="bg-mainBlue hover:bg-[#E3D5FF] w-[197px] h-[50px] flex justify-center items-center text-white hover:text-mainBlue rounded-[50px]  cursor-pointer font-semibold hero-btn font-sans">
            Get started for free
          </div>
          <Link
            href="https://demo.wecollect.tech"
            target="_blank"
            className="bg-[#FFFFFF] hover:bg-[#E3D5FF]  w-[197px]  h-[50px] flex justify-start pl-[10px] items-center text-mainBlue rounded-[50px] hero-btn cursor-pointer my-5 md:my-0 font-semibold font-sans  "
          >
            <Image src={blueright} alt="blueright" className="mr-[10px]" />
            Book a demo
          </Link>
        </div>
      </ContainerLayout>
    </div>
  );
}

export default GisFeatures;
