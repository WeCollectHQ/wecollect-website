import Image from "next/image";
import ContainerLayout from "../../layouts/ContainerLayout";
// import data from "../../assets/svg/data.svg";

import gpss from "../../assets/png/secure-1.png";
import wifi from "../../assets/png/secure-2.png";
import securecase from "../../assets/png/secure-3.png";

import spiralRight from "../../assets/png/spiral-right.png";
import Link from "next/link";
import blueright from "../../assets/svg/blueright.svg";
function SecureFeatures() {
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

        <p className="text-[#555555] text-[14px]  2xl:md:text-[18px] leading-[35px]  font-medium text-center font-sans">
          Discover the features that help you collect data you can trust.
        </p>

        <div className="bg-[#F9F6FF] container-border w-full h-auto rounded-[50px] p-5 lg:p-[30px] mt-5 lg:mt-20  relative flow-hide ">
          <div className="w-full h-auto grid grid-cols-1 lg:grid-cols-3 gap-4 lg:gap-10 justify-between items-center ">
            <div className="boxlee w-full h-fit lg:h-full  rounded-[30px]   cursor-default">
              <div className="feat-img-shadow flex justify-center pt-8 rounded-t-[30px] min-h-[309px]">
                <Image
                  src={gpss}
                  alt="gpss"
                  className="w-full h-auto object-contain max-w-[300px]"
                />
              </div>

              <p className="text-[#333333] w-full lg:text-2xl 2xl:text-2xl text-xl font-semibold mt-5   px-4 lg:px-7 md:leading-[48px] 2xl:leading-[50px] font-serif">
                Regular Backup
              </p>

              <p className="text-[#555555] 2xl:text-[16px] lg:text-[16px] leading-[35px] text-[14px] font-medium mt-7 pb-7 px-4 lg:px-7 font-sans ">
                Secure, scalable cloud storage ensures your data is safe, backed
                up, and accessible anytime
              </p>
            </div>

            <div className="boxlee w-full  h-fit lg:h-full rounded-[30px]    md:my-0  cursor-default">
              <div className="feat-img-shadow flex justify-end pt-8 rounded-t-[30px] min-h-[309px]">
                <Image
                  src={wifi}
                  alt="wifi"
                  className="w-full h-auto max-w-[300px] "
                />
              </div>

              <p className="text-[#333333]  lg:text-2xl  text-xl font-semibold mt-7 md:leading-[48px] 2xl:leading-[50px]  px-4 lg:px-7 font-serif ">
                Project Access Control
              </p>

              <p className="text-[#555555] 2xl:text-[16px] lg:text-[16px] leading-[35px] text-[14px] font-medium pb-7 px-4 lg:px-7 mt-4 font-sans">
                Project Access Control in WeCollect ensures that only authorized
                users can access specific project data and features, enhancing
                data security
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
                Privacy Compliant
              </p>

              <p className="text-[#555555] 2xl:text-[18px] lg:text-[16px] leading-[35px] text-[14px] font-medium pb-7 px-4 lg:px-7 mt-4 font-sans">
                WeCollect is committed to upholding the highest standards of
                privacy compliance, ensuring that all data collected adheres to
                relevant regulations and guidelines
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
            className="bg-[#FFFFFF] hover:bg-[#E3D5FF]  w-[197px]  h-[50px] flex justify-start pl-[10px] items-center text-mainBlue rounded-[50px] hero-btn cursor-pointer my-5 md:my-0 font-semibold font-sans   "
          >
            <Image src={blueright} alt="blueright" className="mr-[10px]" />
            Book a demo
          </Link>
        </div>
      </ContainerLayout>
    </div>
  );
}

export default SecureFeatures;
