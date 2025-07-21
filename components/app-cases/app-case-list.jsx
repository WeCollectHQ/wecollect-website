import React from "react";
import ContainerLayout from "../../layouts/ContainerLayout";
import Image from "next/image";
import Link from "next/link";
import attachImage from "../../assets/png/yellow-attach.png";
import a1 from "../../assets/svg/a1.svg";
import a2 from "../../assets/svg/a2.svg";
import a3 from "../../assets/svg/a3.svg";
import a4 from "../../assets/svg/a4.svg";
import a5 from "../../assets/svg/a5.svg";
import a6 from "../../assets/svg/a6.svg";
import a7 from "../../assets/svg/a7.svg";
import a9 from "../../assets/svg/a9.svg";
import a10 from "../../assets/svg/a10.svg";
import a8 from "../../assets/svg/a8.svg";
const data = [
  {
    title: "BRAND VISIBILITY",
    pic: a1,
    story:
      "WeCollect enhances brand visibility by leveraging a network of field agents equipped with a dynamic mobile application. These agents conduct on-the-ground assessments, capturing real-time data on brand presence... ",
  },
  {
    title: "SUPPLY CHAIN MONITORING AND Project Management",
    pic: a2,
    story:
      "For supply chain monitoring, WeCollect transforms the logistics landscape by enabling real-time tracking of goods and activities throughout the supply chain. Field agents utilize the mobile app to record crucial data points...",
  },
  {
    title: "INVENTORY MANAGEMENT",
    pic: a3,
    story:
      "WeCollect revolutionizes inventory management by empowering field agents to digitally track and manage inventory levels using customizable forms within the mobile application. From stock levels to product...",
  },
  {
    title: "ONSHELF PRODUCT MONITORING",
    pic: a4,
    story:
      "With WeCollect, onshelf product monitoring becomes a breeze. Field agents equipped with the mobile app systematically capture data on product availability, pricing, and shelf placements. This real-time information..",
  },
  {
    title: "OUTLET ENUMERATION",
    pic: a5,
    story:
      "WeCollect simplifies outlet enumeration by deploying field agents equipped with the mobile application to systematically catalog and geo-tag existing outlets. This comprehensive data provides businesses with a clear...",
  },
  {
    title: "ASSET TRACKING AND MANAGEMENT",
    pic: a6,
    story:
      "WeCollect transforms asset tracking and management by enabling field agents to monitor assets in real time using the mobile application. From equipment to vehicles, agents record essential data points, facilitating proactive...",
  },
  {
    title: "FINANCIAL INCLUSION TRAINING",
    pic: a7,
    story:
      "In a financial inclusion project, WeCollect empowers field agents to gather essential data for assessing the needs and preferences of underserved communities. The mobile app facilitates...",
  },
  {
    title: "PRODUCT PRICE MONITORING PROJECT",
    pic: a8,
    story:
      "WeCollect revolutionizes product price monitoring by deploying field agents to collect real-time data on product prices, promotions, and competitor pricing strategies. The mobile app streamlines data collection ...",
  },
  {
    title: "POPULATION ENUMERATION",
    pic: a9,
    story:
      "For population enumeration projects, WeCollect utilizes its mobile application to enable field agents to conduct a systematic count of individuals within specific areas. The app's offline data collection feature ensures accuracy..",
  },
  {
    title: "DEMOGRAPHY ANALYSIS",
    pic: a10,
    story:
      "WeCollect facilitates demography analysis by empowering field agents to collect detailed demographic data using customizable forms within the mobile application. This rich dataset enables businesses...",
  },
];

const AppCaseList = () => {
  return (
    <div className="w-full flex flex-col relative bg-white  ">
      {/* <div className="w-full lg:h-[1438px] bg-white rounded-t-[50px] h-screen "></div> */}
      {/* <div className="w-full lg:min-h-[3200px] h-full mb-20 bg-[#F9F6FF] rounded-t-[50px] "></div> */}
      <div className="mt-20">
        <ContainerLayout>
          <div className="w-full flex flex-col gap-10 flow-hide">
            <h1 className="text-customBlack 2xl:text-[32px] lg:text-2xl font-semibold max-w-[271px] lg:max-w-full text-center lg:text-start mx-auto lg:mx-0 font-serif  ">
              Applicable in the following cases and more...
            </h1>
            <div className="w-full grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 bg-[#F9F6FF] py-[30px] px-4 lg:p-[30px]  rounded-[30px] gap-[30px]  lg:gap-[40px]">
              {data?.map((item, index) => {
                return (
                  <div
                    className="w-full bg-white flex flex-col p-4 lg:p-8 gap-4 lg:gap-7  2xl:gap-4 rounded-[30px]  max-h-[620px] relative  "
                    key={index}
                  >
                    <span>
                      <Image
                        src={attachImage}
                        alt="attachment"
                        className="absolute right-0 top-0"
                      />
                    </span>
                    <span>
                      <Image
                        src={item.pic}
                        alt="pics"
                        className="2xl:w-[60px] lg:w-[50px] w-[40px] h-[40px] lg:h-[50px] 2xl:h-[60px] rounded-full"
                      />
                    </span>
                    <h1 className=" text-customBlack text-[20px] font-semibold leading-[35px] 2xl:text-[20px] lg:text-[20px] lg:leading-[35px] 2xl:leading-[42px] uppercase max-h-[120px] min-h-[100px]  flex items-center font-serif ">
                      {item.title}
                    </h1>
                    <p className="text-[14px] 2xl:text-[16px] lg:text-[16px] text-ash font-medium leading-[35px]  w-full h-full max-h-[300px] overflow-y-hidden font-sans   ">
                      {item.story}
                    </p>
                    <span className="mt-4 ">
                      <Link
                        href={`/view-use-case/${index}`}
                        className="bg-mainBlue rounded-[50px] h-[46px] px-5 flex items-center justify-center text-white text-[16px]  cursor-pointer font-sans  lg:min-w-[168px] hover:bg-[#E3D5FF] hover:text-mainBlue font-semibold max-w-fit "
                      >
                        Learn more
                      </Link>
                    </span>
                  </div>
                );
              })}
            </div>
          </div>
        </ContainerLayout>
      </div>
    </div>
  );
};

export default AppCaseList;
