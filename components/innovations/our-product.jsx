import React from "react";
import ContainerLayout from "../../layouts/ContainerLayout";
import Image from "next/image";
import smart from "../../assets/svg/smart-data.svg";
import project from "../../assets/svg/project-management.svg";
import learning from "../../assets/svg/learning.svg";
import Google from "../../assets/svg/g-play.svg";
import Apple from "../../assets/svg/a-store.svg";
import Link from "next/link";

const OurProduct = () => {
  return (
    <div className="w-full">
      <ContainerLayout>
        <div className="w-full flex flex-col py-[68px]">
          <h1 className="text-[28px] text-2xl 2xl:text-[32px] font-semibold text-customBlack ">
            OUR PRODUCTS
          </h1>
          <div className="w-full grid grid-cols-1 lg:grid-cols-3 mt-10 gap-3 ">
            {/* start */}
            <div className="w-full flex flex-col">
              <Image
                src={smart}
                alt="smart"
                className="w-full object-cover max-h-[400px]"
              />
              <p className="mt-10 text-mainBlue text-xl md:text-[18px] 2xl:text-[30px] md:leading-[45px] max-w-[325px] font-semibold ">
                Smart Data Collection App
              </p>
              <p className="mt-5 text-ash text-[14px] sm:text-[16px] 2xl:text-[18px]">
                The WeCollect collection app is designed to streamline field
                data collection by leveraging a user-friendly mobile interface
                that works both online and offline.
              </p>
              <div className="w-full flex items-center mt-5 gap-2 ">
                <Link href={"#"}>
                  <Image src={Google} alt="goodle" className="w-auto h-auto" />
                </Link>
                <Link href={"#"}>
                  <Image src={Apple} alt="goodle" className="w-auto h-auto" />
                </Link>
              </div>
            </div>
            {/* end */}
            {/* start */}
            <div className="w-full flex flex-col">
              <Image
                src={project}
                alt="smart"
                className="w-full object-cover min-h-[400px]"
              />
              <p className="mt-10 text-mainBlue text-xl md:text-[18px] 2xl:text-[30px] md:leading-[45px]  font-semibold ">
                Project Management Tool
              </p>
              <p className="mt-5 text-ash text-[14px] sm:text-[16px] 2xl:text-[18px]">
                The WeCollect project management web application streamlines the
                entire data collection process by providing a centralized
                platform for planning, executing, and monitoring projects
              </p>
              <div className="w-full flex items-center mt-5 gap-2">
                <Link
                  href={"#"}
                  className="btn-shadow rounded-[50px] bg-mainBlue text-white px-5 h-[50px] flex items-center justify-center text-[16px] font-semibold "
                >
                  Get started for free
                </Link>
              </div>
            </div>
            {/* end */}
            {/* start */}
            <div className="w-full flex flex-col">
              <Image
                src={learning}
                alt="smart"
                className="w-full object-cover max-h-[400px]"
              />

              <p className="mt-10 text-mainBlue text-xl md:text-[18px] 2xl:text-[30px] md:leading-[45px]  font-semibold ">
                WeCollect <br /> Learning
              </p>
              <p className="mt-5 text-ash text-[14px] sm:text-[16px] 2xl:text-[18px]">
                Lorem ipsum dolor sit amet consectetur. Id suspendisse enim elit
                ipsum feugiat sed vulputate id amet. egestas. Massa lectus ut
                ornare orci sit. Massa lectus ut ornare orci .
              </p>
              <div className="w-full flex items-center mt-5 gap-2">
                <Link
                  href={"#"}
                  className="btn-shadow rounded-[50px] bg-mainBlue text-white px-5 h-[50px] flex items-center justify-center text-[16px] font-semibold "
                >
                  Get started for free
                </Link>
              </div>
            </div>
            {/* end */}
          </div>
        </div>
      </ContainerLayout>
    </div>
  );
};

export default OurProduct;
