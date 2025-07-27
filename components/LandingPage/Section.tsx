import React, { useState, useEffect } from "react";
import Image from "next/image";
import featA from "../../assets/png/sm.png";
import featB from "../../assets/png/re.png";
import featC from "../../assets/png/co.png";
import featD from "../../assets/png/rt.png";
import featE from "../../assets/png/pd.png";
import ContainerLayout from "../../layouts/ContainerLayout";
import GetAQuoteArrow from "../../assets/svg/get-a-quote-arrow.svg";
import Hr from "./Hr.jsx";

const Section = () => {
  const [selectedStepIndex, setSelectedStepIndex] = useState(0);

  const steps = [
    {
      id: 1,
      phoneImage: featA,
      title: "Start By Defining Your | Data Form Request",
      description: "Create unique form based on your data need.",
    },
    {
      id: 2,
      phoneImage: featB,
      title: "Assign Forms to Field | Agents",
      description: "Sort and mange agents seamlessly.",
    },
    {
      id: 3,
      phoneImage: featC,
      title: "Collect Data via | Mobile App",
      description: "Manage assigned tasks and complete data form.",
    },
    {
      id: 4,
      phoneImage: featD,
      title: "Real-Time Monitoring | and Reports",
      description: "Track activities on the field anytime, anywhere.",
    },
    {
      id: 5,
      phoneImage: featE,
      title: "Pay Agents from | Dashboard",
      description: "Compensate approved agents, easily.",
    },
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setSelectedStepIndex((prevIndex) => (prevIndex + 1) % steps.length);
    }, 10000);

    return () => clearInterval(interval);
  }, [steps.length]);

  const renderTitleWithLineBreak = (text) => {
    return text.split("|").map((part, index) => (
      <React.Fragment key={index}>
        {part.trim()}
        {index !== text.split("|").length - 1 && <br />}
      </React.Fragment>
    ));
  };

  return (
    <>
      <ContainerLayout>
        <div className="w-full flex flex-col items-center lg:flex-row justify-between mt-12 lg:mt-20 gap-10">
          {/* Image Section */}
          <div className="h-[352px] lg:h-[590px] w-full lg:w-1/2 flex justify-center items-center">
            <Image
              src={steps[selectedStepIndex].phoneImage}
              alt="feature"
              className="w-full max-w-[480px] h-auto"
            />
          </div>

          {/* Text Content */}
          <div className="w-full lg:w-1/2 px-4 text-center lg:text-left">
            <p className="text-[#1E1E5A] text-[20px] lg:text-[36px] font-black lg:leading-[48px]">
              {renderTitleWithLineBreak(steps[selectedStepIndex].title)}
            </p>
            <p className="text-[#0D0D26] text-[14px] md:text-[20px] font-medium mt-4 lg:mt-10 mb-10 lg:mb-[110px]">
              {steps[selectedStepIndex].description}
            </p>

            {/* Stepper */}
            <div className="flex justify-center lg:justify-start gap-4 my-8">
              {[1, 2, 3, 4, 5].map((step, index) => {
                const isSelected = selectedStepIndex === index;

                return (
                  <div
                    key={index}
                    onClick={() =>
                      index < steps.length && setSelectedStepIndex(index)
                    }
                    className={`w-[48px] lg:w-[87px] h-[48px] lg:h-[87px] rounded-full flex items-center justify-center cursor-pointer ${
                      isSelected ? "bg-[#F3F3FF] shadow-xl" : "bg-[#F3F3FF]"
                    }`}
                  >
                    {isSelected ? (
                      <div className="w-[38px] lg:w-[60px] h-[38px] lg:h-[60px] rounded-full bg-white border-[4px] lg:border-[6px] border-[#4747D6] flex items-center justify-center">
                        <span className="text-[#4747D6] font-black text-sm lg:text-xl">
                          {step}
                        </span>
                      </div>
                    ) : (
                      <span className="text-[#4747D6] font-black text-sm lg:text-xl">
                        {step}
                      </span>
                    )}
                  </div>
                );
              })}
            </div>

            {/* CTA Button */}
            <button className="bg-mainBlue m-auto lg:m-0 hover:bg-[#E3D5FF] h-[50px] text-base font-medium flex items-center text-white hover:text-mainBlue rounded-[50px] px-5 cursor-pointer mb-14">
              <div className="bg-[#fff] rounded-full p-1 mr-3">
                <Image src={GetAQuoteArrow} alt="" />
              </div>
              Try it for Free
            </button>
          </div>
        </div>
      </ContainerLayout>

      <Hr />
    </>
  );
};

export default Section;
