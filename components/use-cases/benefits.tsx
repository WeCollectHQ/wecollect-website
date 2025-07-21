import React from "react";
import Image from "next/image";
import ContainerLayout from "../../layouts/ContainerLayout";
// import data from "../../assets/svg/data.svg";
// import management from "../../assets/svg/management.svg";
// import gpss from "../../assets/png/brand-b-1.png";
// import wifi from "../../assets/png/brand-b-2.png";
// import securecase from "../../assets/png/brand-b-3.png";

import spiral from "../../assets/png/spiral-curve.png";
import spiralRight from "../../assets/png/spiral-right.png";
function Benefits({ benefits }: { benefits: any }) {
  return (
    <div
      className="w-full relative overflow-x-hidden overflow-y-hidden  "
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
      {/* <div className="absolute top-0 right-[-100px] ">
        <Image src={spiralRight} alt="spiral" className=" hidden lg:flex" />
      </div> */}

      <ContainerLayout>
        <p
          className="text-ash text-[20px] lg:text-2xl 2xl:text-[32px] font-semibold  mt-0 lg:mt-0 text-center uppercase 2xl:leading-[35px] font-serif"
          // data-aos="fade-up"
          // data-aos-duration="1000"
        >
          {benefits?.title}
        </p>

        <p
          className="text-[#555555] text-[14px]  font-sans 2xl:md:text-[18px] leading-[35px]  font-medium text-center"
          // data-aos="fade-up"
          // data-aos-duration="1000"
        >
          {benefits?.subtitle}
        </p>

        <div className="bg-[#F9F6FF] container-border w-full h-auto rounded-[50px] p-5 lg:p-[30px] mt-5 lg:mt-12  relative flow-hide ">
          <div className="w-full h-auto grid grid-cols-1 lg:grid-cols-3 gap-4 lg:gap-10 justify-between items-center ">
            {benefits?.items?.map((single: any) => {
              return (
                <div
                  className="boxlee w-full h-fit lg:h-full  rounded-[30px] p-5 lg:p-7  cursor-default"
                  // data-aos="fade-up"
                  // data-aos-duration="1000"
                  // data-aos-delay="600"
                >
                  <Image
                    src={single?.icon}
                    alt="gpss"
                    className="w-[52px] h-[52px]"
                  />

                  <p className="text-[#333333] w-11/12 lg:text-2xl 2xl:text-2xl text-xl font-semibold mt-7 md:leading-[48px] 2xl:leading-[35px] font-serif">
                    {single?.title}
                  </p>

                  <p className="text-[#777] font-sans 2xl:text-[18px] lg:text-[16px] leading-[35px] text-[14px] font-medium mt-4">
                    {single?.description}
                  </p>
                </div>
              );
            })}
            {/* <div
              className="boxlee w-full h-fit lg:h-full  rounded-[30px] p-5 lg:p-7  cursor-default"
              // data-aos="fade-up"
              // data-aos-duration="1000"
              // data-aos-delay="600"
            >
              <Image src={gpss} alt="gpss" className="w-[52px] h-[52px]" />

              <p className="text-[#333333] w-11/12 lg:text-2xl 2xl:text-2xl text-xl font-semibold mt-7 md:leading-[48px] 2xl:leading-[50px]">
                Measure Brand Awareness
              </p>

              <p className="text-[#555555] 2xl:text-[18px] lg:text-[16px] leading-[35px] text-[14px] font-medium mt-7">
                Lorem ipsum dolor sit amet consectetur. Id suspendisse enim elit
                ipsum feugiat sed vulputate id amet. Etiam arcu ultricies
              </p>
            </div>

            <div
              className="boxlee w-full  h-fit lg:h-full rounded-[30px]  p-5 lg:p-7  md:my-0  cursor-default"
              // data-aos="fade-up"
              // data-aos-duration="1000"
              // data-aos-delay="600"
            >
              <Image src={wifi} alt="wifi" className="w-[52px] h-[52px]" />

              <p className="text-[#333333]  lg:text-2xl 2xl:text-[30px] text-xl font-semibold mt-7 md:leading-[48px] 2xl:leading-[50px]">
                Gather Customer Feedback
              </p>

              <p className="text-[#555555] 2xl:text-[18px] lg:text-[16px] leading-[35px] text-[14px] font-medium mt-7">
                Lorem ipsum dolor sit amet consectetur. Id suspendisse enim elit
                ipsum feugiat sed vulputate id amet. Etiam arcu ultricies
              </p>
            </div>

            <div
              className="boxlee w-full  h-full rounded-[30px] p-7  cursor-default"
              // data-aos="fade-up"
              // data-aos-duration="1000"
              // data-aos-delay="600"
            >
              <Image
                src={securecase}
                alt="securecase"
                className="w-[52px] h-[52px]"
              />

              <p className="text-[#333333] lg:text-2xl 2xl:text-[30px] text-xl font-semibold mt-7 md:leading-[48px] 2xl:leading-[50px]">
                Recruit Brand Ambassadors
              </p>

              <p className="text-[#555555] 2xl:text-[18px] lg:text-[16px] leading-[35px] text-[14px] font-medium mt-7">
                Lorem ipsum dolor sit amet consectetur. Id suspendisse enim elit
                ipsum feugiat sed vulputate id amet. Etiam arcu ultricies
              </p>
            </div> */}
          </div>
        </div>
      </ContainerLayout>
    </div>
  );
}

export default Benefits;
