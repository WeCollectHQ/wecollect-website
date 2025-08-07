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
  const [isTransitioning, setIsTransitioning] = useState(false);

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
      setIsTransitioning(true);

      setTimeout(() => {
        setSelectedStepIndex((prevIndex) => (prevIndex + 1) % steps.length);
        setIsTransitioning(false);
      }, 400);
    }, 8000);

    return () => clearInterval(interval);
  }, [steps.length]);

  const handleStepClick = (index) => {
    if (index < steps.length && index !== selectedStepIndex) {
      setIsTransitioning(true);
      setTimeout(() => {
        setSelectedStepIndex(index);
        setIsTransitioning(false);
      }, 300);
    }
  };

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
          <div className="h-[352px] lg:h-[590px] w-full lg:w-1/2 flex justify-center items-center relative overflow-hidden">
            <div
              className={`w-full max-w-[480px] h-auto transition-all duration-600 ease-in-out transform ${
                isTransitioning
                  ? "opacity-0 translate-x-8 scale-95"
                  : "opacity-100 translate-x-0 scale-100"
              }`}
            >
              <Image
                src={steps[selectedStepIndex].phoneImage}
                alt="feature"
                className="w-full h-auto"
              />
            </div>
          </div>

          {/* Text Content */}
          <div className="w-full lg:w-1/2 px-4 text-center lg:text-left">
            <div
              className={`transition-all duration-600 ease-in-out transform ${
                isTransitioning
                  ? "opacity-0 translate-y-4"
                  : "opacity-100 translate-y-0"
              }`}
            >
              <p className="text-[#1E1E5A] text-[20px] lg:text-[36px] font-black lg:leading-[48px]">
                {renderTitleWithLineBreak(steps[selectedStepIndex].title)}
              </p>
              <p className="text-[#0D0D26] text-[14px] md:text-[20px] font-medium mt-4 lg:mt-10 mb-10 lg:mb-[110px]">
                {steps[selectedStepIndex].description}
              </p>
            </div>

            {/* Stepper */}
            <div className="flex justify-center lg:justify-start gap-4 my-8">
              {[1, 2, 3, 4, 5].map((step, index) => {
                const isSelected = selectedStepIndex === index;

                return (
                  <div
                    key={index}
                    onClick={() => handleStepClick(index)}
                    className={`w-[48px] lg:w-[87px] h-[48px] lg:h-[87px] rounded-full flex items-center justify-center cursor-pointer transition-all duration-300 ease-in-out transform hover:scale-105 ${
                      isSelected
                        ? "bg-[#F3F3FF] shadow-xl scale-110"
                        : "bg-[#F3F3FF] hover:shadow-md"
                    }`}
                  >
                    {isSelected ? (
                      <div className="w-[38px] lg:w-[60px] h-[38px] lg:h-[60px] rounded-full bg-white border-[4px] lg:border-[6px] border-[#4747D6] flex items-center justify-center transition-all duration-300 ease-in-out">
                        <span className="text-[#4747D6] font-black text-sm lg:text-xl">
                          {step}
                        </span>
                      </div>
                    ) : (
                      <span className="text-[#4747D6] font-black text-sm lg:text-xl transition-all duration-300 ease-in-out">
                        {step}
                      </span>
                    )}
                  </div>
                );
              })}
            </div>

            {/* CTA Button */}
            <button className="bg-mainBlue m-auto lg:m-0 hover:bg-[#E3D5FF] h-[50px] text-base font-medium flex items-center text-white hover:text-mainBlue rounded-[50px] px-5 cursor-pointer mb-14 transition-all duration-300 ease-in-out transform hover:scale-105">
              <div className="bg-[#fff] rounded-full p-1 mr-3 transition-transform duration-300 ease-in-out">
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
