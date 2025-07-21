import React, { useState } from "react";
import Image from "next/image"; // Adjust based on your project setup
import ContainerLayout from "../../layouts/ContainerLayout";
import leftArrow from "../../assets/svg/prev.svg";
import rightArrow from "../../assets/svg/next.svg";
import fullrating from "../../assets/svg/fullrating.svg";
import halfrating from "../../assets/svg/halfrating.svg";

const data = [
  {
    id: 1,
    name: `-James Myles, CEO, Gibrata`,
    img: fullrating,
    review: `Locate a point of interest on the map consectetur. Sed quam luctus lacus accumsan ullamcorper pellentesque condimentum. Quis mus vel diam est accumsan quam `,
  },
  {
    id: 2,
    name: `-Daniel D., CTO, Opensource`,
    img: halfrating,
    review: `Locate a point of interest on the map consectetur. Sed quam luctus lacus accumsan ullamcorper pellentesque condimentum. Quis mus vel diam est accumsan quam `,
  },
  {
    id: 3,
    name: `-Wangwan T., COO, Linuxxx`,
    img: halfrating,
    review: `Locate a point of interest on the map consectetur. Sed quam luctus lacus accumsan ullamcorper pellentesque condimentum. Quis mus vel diam est accumsan quam `,
  },
  {
    id: 4,
    name: `Rigo Louie`,
    img: fullrating,
    review: `Locate a point of interest on the map consectetur. Sed quam luctus lacus accumsan ullamcorper pellentesque condimentum. Quis mus vel diam est accumsan quam `,
  },
  {
    id: 5,
    name: `Mia Williams`,
    img: halfrating,
    review: `Locate a point of interest on the map consectetur. Sed quam luctus lacus accumsan ullamcorper pellentesque condimentum. Quis mus vel diam est accumsan quam `,
  },
  {
    id: 6,
    name: `Mia Williams`,
    img: halfrating,
    review: `Locate a point of interest on the map consectetur. Sed quam luctus lacus accumsan ullamcorper pellentesque condimentum. Quis mus vel diam est accumsan quam `,
  },
  {
    id: 7,
    name: `Mia Williams`,
    img: halfrating,
    review: `Locate a point of interest on the map consectetur. Sed quam luctus lacus accumsan ullamcorper pellentesque condimentum. Quis mus vel diam est accumsan quam `,
  },
  {
    id: 8,
    name: `Mia Williams`,
    img: halfrating,
    review: `Locate a point of interest on the map consectetur. Sed quam luctus lacus accumsan ullamcorper pellentesque condimentum. Quis mus vel diam est accumsan quam `,
  },
  {
    id: 9,
    name: `Mia Williams`,
    img: halfrating,
    review: `Locate a point of interest on the map consectetur. Sed quam luctus lacus accumsan ullamcorper pellentesque condimentum. Quis mus vel diam est accumsan quam `,
  },
];

const CustomCarousel = () => {
  const [currentSlideDesktop, setCurrentSlideDesktop] = useState(0);
  const [currentSlideMobile, setCurrentSlideMobile] = useState(0);

  const nextSlide = () => {
    setCurrentSlideDesktop((prev) => (prev + 3) % data.length);
    setCurrentSlideMobile((prev) => (prev + 1) % data.length);
  };

  const prevSlide = () => {
    setCurrentSlideDesktop((prev) => (prev - 3 + data.length) % data.length);
    setCurrentSlideMobile((prev) => (prev - 1 + data.length) % data.length);
  };

  const renderIndicatorsDesktop = () => {
    const numOfIndicators = Math.ceil(data.length / 3);
    return (
      <div className="lg:flex justify-center mt-4 w-fit mx-auto hidden ">
        {Array.from({ length: numOfIndicators }).map((_, index) => (
          <div
            key={index}
            className={`w-3 h-3 rounded-full mx-1 cursor-pointer  ${
              index === Math.floor(currentSlideDesktop / 3)
                ? "bg-[#4747D6]"
                : "bg-gray-300"
            }`}
            onClick={() => setCurrentSlideDesktop(index * 3)}
          />
        ))}
      </div>
    );
  };
  const renderIndicatorsMobile = () => {
    const numOfIndicators = Math.ceil(data.length / 1);
    return (
      <div className="flex justify-center mt-4 w-fit mx-auto  lg:hidden">
        {Array.from({ length: numOfIndicators }).map((_, index) => (
          <div
            key={index}
            className={`w-3 h-3 rounded-full mx-1 cursor-pointer  ${
              index === Math.floor(currentSlideMobile / 1)
                ? "bg-[#4747D6]"
                : "bg-gray-300"
            }`}
            onClick={() => setCurrentSlideMobile(index * 1)}
          />
        ))}
      </div>
    );
  };

  return (
    <div
      className="w-full   "
      data-aos="fade-up"
      data-aos-duration="1000"
    >
      <ContainerLayout>
        <p
          className="text-[#333333] text-xl leading-[30px] lg:text-2xl 2xl:text-[36px] font-semibold text-center mt-2  lg:mt-20 font-serif"
          // data-aos="fade-up"
          // data-aos-duration="1000"
        >
          TESTIMONIALS
        </p>

        <p className="text-[#555555] leading-[25px] text-[14px] lg:text-[16px] 2xl:text-[20px] font-medium text-center mt-[10px] mb-[50px] font-sans">
          Our users have the following to say about Us:
        </p>
        <div className="relative w-full bg-white border-none outline-none px-4 lg:px-10 overflow-x-hidden">
          <div className="flex items-center justify-between ">
            <button
              className="absolute -left-2 lg:left-0 p-2 b rounded-full  focus:outline-none"
              onClick={prevSlide}
            >
              <Image src={leftArrow} alt="Previous" width={20} height={14} />
            </button>
            <div className=" grid-cols-1 hidden lg:grid lg:grid-cols-3 gap-10 overflow-hidden w-full border-none bg-[#F9F6FF] p-4 lg:p-[30px] rounded-[30px]">
              {data
                .slice(currentSlideDesktop, currentSlideDesktop + 3)
                .map((d) => (
                  <div
                    key={d.id}
                    className="w-full m-auto bg-white min-h-[336px] rounded-[30px] pt-[10px] px-[10px] border-b-[4px] border-b-[#4747D6]"
                  >
                    <Image
                      src={d.img}
                      alt=""
                      width={144}
                      height={24}
                      className="m-auto mt-10 mb-6"
                    />
                    <p className="text-center mb-[35px] text-[#555555] text-[14px]  leading-[25px] lg:leading-[30px] lg:text-[14px] 2xl:text-[18px] font-medium font-sans">
                      {d.review}
                    </p>
                    <p className="text-center mb-[54px] text-[#555555] text-[14px] 2xl:text-[16px] leading-[25px] font-semibold italic font-sans">
                      {d.name}
                    </p>
                  </div>
                ))}
            </div>
            <div className=" grid-cols-1 grid lg:hidden lg:grid-cols-3 gap-10 overflow-hidden w-full border-none bg-[#F9F6FF] p-4 lg:p-[30px] rounded-[30px]">
              {data
                .slice(currentSlideDesktop, currentSlideDesktop + 1)
                .map((d) => (
                  <div
                    key={d.id}
                    className="w-full m-auto bg-white h-[336px] rounded-[30px] pt-[10px] px-[10px] border-b-[4px] border-b-[#4747D6]"
                  >
                    <Image
                      src={d.img}
                      alt=""
                      width={144}
                      height={24}
                      className="m-auto mt-10 mb-6"
                    />
                    <p className="text-center mb-[35px] text-[#555555] text-[18px] font-medium font-sans">
                      {d.review}
                    </p>
                    <p className="text-center mb-[54px] text-[#555555] text-[16px] font-semibold font-sans">
                      {d.name}
                    </p>
                  </div>
                ))}
            </div>
            <button
              className="absolute -right-2 lg:right-0 p-2    focus:outline-none"
              onClick={nextSlide}
            >
              <Image src={rightArrow} alt="Next" width={20} height={14} />
            </button>
          </div>
          {renderIndicatorsDesktop()}
          {renderIndicatorsMobile()}
        </div>
      </ContainerLayout>
    </div>
  );
};

export default CustomCarousel;
