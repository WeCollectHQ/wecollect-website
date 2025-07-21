import Image from "next/image";
import ContainerLayout from "../../layouts/ContainerLayout";
// import data from "../../assets/svg/data.svg";

import gpss from "../../assets/png/offline-1.png";
import wifi from "../../assets/png/offline-2.png";
import securecase from "../../assets/png/offline-3.png";

import spiralRight from "../../assets/png/spiral-right.png";
import Link from "next/link";
import blueright from "../../assets/svg/blueright.svg";
function OfflineFeatures() {
  return (
    <div
      className="w-full relative overflow-x-hidden overflow-y-hidden mt-10 "
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
          className="text-[#555555] text-[14px]  2xl:md:text-[18px] leading-[35px]  font-medium text-center font-sans"
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
              <div className="feat-img-shadow flex justify-center pt-8 rounded-t-[30px] min-h-[309px]">
                <Image
                  src={gpss}
                  alt="gpss"
                  className="w-full h-auto  max-w-[300px] -mt-7 mb-7"
                />
              </div>

              <p className="text-[#333333] w-full lg:text-2xl 2xl:text-2xl text-xl font-semibold mt-7   px-4 lg:px-7 md:leading-[48px] 2xl:leading-[50px] font-serif">
                Offline Data Collection
              </p>

              <p className="text-[#555555] 2xl:text-[16px] lg:text-[16px] leading-[36px] text-[14px] font-medium mt-5 pb-7 px-4 lg:px-7 font-sans">
                Collect and store data in remote areas without internet access.
                Sync it automatically when you’re back online.
              </p>
            </div>

            <div
              className="boxlee w-full  h-fit lg:h-full rounded-[30px]    md:my-0  cursor-default"
              // data-aos="fade-up"
              // data-aos-duration="1000"
              // data-aos-delay="600"
            >
              <div className="feat-img-shadow flex justify-center pt-8 rounded-t-[30px] min-h-[309px]">
                <Image
                  src={wifi}
                  alt="wifi"
                  className=" h-auto object-contain max-w-[300px]  "
                />
              </div>

              <p className="text-[#333333] font-serif  lg:text-2xl  text-xl font-semibold mt-7 md:leading-[48px] 2xl:leading-[50px]  px-4 lg:px-7 ">
                No Data Loss
              </p>

              <p className="text-[#555555] font-sans 2xl:text-[16px] lg:text-[16px] leading-[36px] text-[14px] font-medium pb-7 px-4 lg:px-7 mt-4 ">
                Data is stored on your mobile device until you have internet
                access.
              </p>
            </div>

            <div
              className="boxlee w-full  h-full rounded-[30px]   cursor-default"
              // data-aos="fade-up"
              // data-aos-duration="1000"
              // data-aos-delay="600"
            >
              <div className="feat-img-shadow flex justify-center pt-8 rounded-t-[30px] min-h-[309px]">
                <Image
                  src={securecase}
                  alt="securecase"
                  className="w-full h-auto object-contain max-w-[300px] mx-auto   "
                />
              </div>

              <p className="text-[#333333] lg:text-2xl text-xl font-semibold mt-6 md:leading-[48px] 2xl:leading-[50px] px-4 lg:px-7 font-serif">
                Upload Data Anytime
              </p>

              <p className="text-[#555555] 2xl:text-[16px] lg:text-[16px] leading-[36px] text-[14px] font-medium pb-7 px-4 lg:px-7 mt-4 font-sans">
                Collect multiple records and upload whenever you like. Lorem
                ipsum dolor sit amet consectetur. Mi odio venenatis
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

export default OfflineFeatures;
