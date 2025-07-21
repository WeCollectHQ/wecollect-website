import React from "react";
import ContainerLayout from "../../layouts/ContainerLayout";
import Image from "next/image";
import photo from "../../assets/png/amb.png";

const list = [
  "First hand information on products.",
  "High network Prospect.",
  "Improve your personal brand.",
  "Access to data and research resources",
  "Access to Wecollect products and tools for community projects. ",
  "Improve technology and marketing skill. ",
  "Merch and other customized items.",
];
const AmbHero = () => {
  return (
    <ContainerLayout>
      <div className="w-full flex flex-col">
        {/* header text */}
        <div className="w-full lg:mt-[92px]  mt-[120px] lg:max-w-[696px]">
          <h1 className="text-[32px] 2xl:text-[64px] leading-[40px] 2xl:leading-[96px] font-semibold text-[#4747D6]  ">
            Become WeCollect campus ambassador
          </h1>
        </div>
        {/* END OF  header text */}
        <div className="w-full flex flex-col-reverse lg:flex-row lg:items-center lg:justify-between mt-[73px]  lg:pb-[100px] pb-[50px]">
          {/* content side */}
          <div className="w-full lg:w-5/12 flex flex-col mt-[20px] lg:mt-0">
            {/* About session */}
            <div className="w-full bg-[#f9f9f9] rounded-[20px] lg:max-w-[536px] px-4 lg:px-6 xl:px-8 flex-col flex py-10">
              <h1 className="text-[#333] text-xl 2xl:text-[32px] lg:text-2xl font-bold leading-[50px] ">
                About WeCollect
              </h1>
              <p className="mt-4 text-[#555] text-[14px] lg:text-[16px] font-medium">
                WeCollect is an organization focused on providing individuals or
                group with access to both data collection tools and management
                dashboard.
              </p>
              <p className="mt-5 text-[#555] text-[14px] lg:text-[16px] font-medium">
                We help companies across Africa to build and manage their agents
                network through our seamless ease to use mobile application and
                professional agent management dashboard.
              </p>
            </div>
            {/* end of about */}
            {/* About session */}
            <div className="w-full bg-[#f9f9f9] rounded-[20px] lg:max-w-[536px] px-4 lg:px-6 xl:px-8 flex-col mt-8 flex py-10">
              <h1 className="text-[#333] text-xl 2xl:text-[32px] lg:text-2xl font-bold leading-[50px]">
                Our ambassadors get:
              </h1>
              <div className="flex flex-col space-y-5 mt-[10px]">
                {list?.map((item, index) => {
                  return (
                    <div
                      className="flex items-center space-x-3 lg:space-x-[19px]"
                      key={index}
                    >
                      <div className="w-4 flex ">
                        <span className="bg-[#4747D6] w-[10px] h-[10px] rounded-full" />
                      </div>
                      <p className="text-[#555] text-[14px] lg:text-[16px] font-medium">
                        {item}
                      </p>
                    </div>
                  );
                })}
              </div>
            </div>
            {/* end of about */}
          </div>
          {/* photo side */}
          <div className="flex w-full lg:w-5/12 flex-col">
            <Image src={photo} alt="photo" />
          </div>
        </div>
      </div>
    </ContainerLayout>
  );
};

export default AmbHero;
