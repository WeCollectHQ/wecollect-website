import React, { useState } from "react";
import Image from "next/image";
import blueangle from "../../assets/svg/blueangle.svg";
import grayangle from "../../assets/svg/grayangle.svg";
import featA from "../../assets/png/sm.png";
import featB from "../../assets/png/re.png";
import featC from "../../assets/png/co.png";
import featD from "../../assets/png/mbo-sm.png";
import featE from "../../assets/png/mob-re.png";
import featF from "../../assets/png/mob-co.png";
import blueright from "../../assets/svg/blueright.svg";
import ContainerLayout from "../../layouts/ContainerLayout";
import Link from "next/link";
// This feature leverages GIS technology to provide accurate, location-based insights, ensuring that data is collected from the most relevant and strategic areas. The Smart Location Picker helps businesses target their data collection efforts more effectively, improving the quality and relevance of the data collected.
// This immediate transmission ensures that businesses receive the most current data, reducing the time lag between data collection and analysis.real - time data collection is particularly valuable in dynamic environments where conditions can change rapidly, such as in market surveys, price monitoring, or emergency response situations. 
// With real-time updates, location-specific analysis, and automated data validation, our reporting system ensures that every decision is backed by accurate, up-to-date information. Whether it’s tracking trends, identifying patterns, or forecasting outcomes, WeCollect’s reporting capabilities empower businesses to make informed decisions with confidence.
const Section = () => {
  const [selectedStepIndex, setSelectedStepIndex] = useState(0);

  const steps = [
    {
      id: 1,
      phoneImage: featA,
      mobile: featD,
      title: "Smart Location Picker",
      description:
        "The Smart Location Picker in WeCollect is a powerful tool that enhances data collection by allowing users to select optimal locations for their projects based on geographic data. ",
    },
    {
      id: 2,
      phoneImage: featB,
      mobile: featE,
      title: "Real-time Data Collection",
      description:
        "The process begins when field agents conduct surveys, record observations, or gather any other relevant data in their assigned locations. As soon as the data is collected, it is instantly transmitted via the app to WeCollect's centralised platform, where it is processed and made accessible to project managers and stakeholders in real-time. ",
    },
    {
      id: 3,
      phoneImage: featC,
      mobile: featF,
      title: "Comprehensive Reporting",
      description:
        "WeCollect’s comprehensive reporting offers businesses detailed and actionable insights by transforming raw data into meaningful reports. Our platform provides customizable dashboards and visualizations, enabling users to easily interpret complex data. ",
    },
  ];

  // Step component
  const Step = ({ index, phoneImage, title, description }) => (
    <div
      className={`w-full md:w-9/12 py-4 rounded-2xl flex items-center  cursor-pointer  max-w-[525px]  ${
        index === selectedStepIndex ? "text-[#4747D6]" : ""
      }`}
      onClick={() => setSelectedStepIndex(index)}
    >
      <div className="">
        <div className="flex items-center">
          {index === selectedStepIndex ? (
            <Image src={blueangle} alt="" className="w-[32px] h-[32px]" />
          ) : (
            <Image src={grayangle} alt="" className="w-[32px] h-[32px]" />
          )}
          <p
            className={`text-[20px] lg:text-2xl 2xl:text-[32px]  font-semibold ml-[15px] font-serif min-w-max  ${
              index === selectedStepIndex ? "text-[#4747D6]" : "text-[#999999]"
            }`}
          >
            {title}
          </p>
        </div>
        <p
          // data-aos="fade-up"
          // data-aos-duration="1000"
          className={`text-[14px] lg:text-[16px] font-sans lg:pl-12 2xl:text-[18px] font-medium text-[#555555] leading-[36px] mt-4 ${
            index === selectedStepIndex ? "block" : "hidden"
          }`}
        >
          {description}
        </p>
      </div>
    </div>
  );

  return (
    <ContainerLayout>
      <div
        id="features"
        className="w-full h-auto mt-0 md:pt-12 2xl:pt-[98px] flex flex-col md:flex-row justify-between items-center overflow-x-hidden flow-hide  "
        // data-aos="fade-up"
        // data-aos-duration="1000"
      >
        <div className="w-full h-auto flex flex-col md:flex-row justify-between items-center relative">
          <div className="w-full  h-auto mt-8 md:mt-0 px-4 lg:px-0">
            {steps.map((step, index) => (
              <Step
                key={index}
                index={index}
                // image={step.image}
                phoneImage={step.phoneImage}
                title={step.title}
                description={step.description}
              />
            ))}
            <div className="w-full h-auto flex flex-col  md:flex-row items-center mt-8  lg:gap-6  lg:pl-12 pb-10">
              <div className="bg-mainBlue hover:bg-[#E3D5FF] w-[197px] h-[50px] flex justify-center items-center text-white hover:text-mainBlue rounded-[50px]  cursor-pointer font-semibold hero-btn text-[14px] 2xl:text-[16px] font-sans">
                Get started for free
              </div>
              <Link
                href="https://demo.wecollect.tech"
                target="_blank"
                className="bg-[#FFFFFF] hover:bg-[#E3D5FF]  w-[197px]  h-[50px] flex justify-start pl-[10px] items-center text-mainBlue font-sans rounded-[50px] hero-btn cursor-pointer my-5 md:my-0 font-semibold text-[14px] 2xl:text-[16px]  "
              >
                <Image src={blueright} alt="blueright" className="mr-[10px]" />
                Book a demo
              </Link>
            </div>
          </div>

          <div className="w-full flex justify-center lg:justify-end md:w-full h-auto ">
            <Image
              src={steps[selectedStepIndex].phoneImage}
              // data-aos="fade-up"
              // data-aos-duration="1000"
              alt=""
              className={` ${
                selectedStepIndex === 1
                  ? "w-full hidden md:flex h-auto scale-150"
                  : "w-full hidden md:flex h-auto"
              }`}
            />
            <Image
              src={steps[selectedStepIndex].mobile}
              // data-aos="fade-up"
              // data-aos-duration="1000"
              alt=""
              className={` ${
                selectedStepIndex === 1
                  ? "w-9/12 md:w-11/12 2xl:w-9/12 mx-auto  md:hidden h-auto "
                  : "w-9/12 mx-auto md:hidden flex h-auto"
              }`}
            />
          </div>
        </div>

        {/* <Image
        src={sectionbg}
        alt=""
        className="w-full md:w-[326px] h-[650px] md:h-[702px] hidden md:block"
      /> */}
      </div>
    </ContainerLayout>
  );
};

export default Section;
