import React, { useState } from "react";
import ContainerLayout from "../../layouts/ContainerLayout";
import Image from "next/image";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import leftArrow from "../../assets/svg/prev.svg";
import rightArrow from "../../assets/svg/next.svg";
import fullrating from "../../assets/svg/fullrating.svg";
import halfrating from "../../assets/svg/halfrating.svg";

function MobileCarousel() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <div className="w-full h-full md:hidden">
      <ContainerLayout>
        <p className="text-[#333333] text-[20px] md:text-[36px] font-semibold text-center mt-20">
          TESTIMONIALS
        </p>

        <p className="text-[#333333] text-[14px] md:text-[20px] font-medium text-center mt-[10px] mb-[50px]">
          Our users have the following to say about Us:
        </p>
        <div className="bg-[#F6F1FF] h-full p-[10px] rounded-[30px]">
          <Slider
            {...settings}
            prevArrow={<Image src={leftArrow} alt="Left Arrow" />}
            nextArrow={<Image src={rightArrow} alt="Right Arrow" />}
          >
            {data.map((d) => (
              <div key={d.name} className="">
                <div className="w-[90%] m-auto bg-[#fff] h-[310px] md:h-[336px] rounded-[30px] p-[4px]">
                  <Image
                    src={d.img}
                    alt=""
                    width={144}
                    height={24}
                    className="m-auto mt-10 mb-6"
                  />

                  <p className="text-center mb-[35px] text-[#555555] text-[14px] md:text-[18px] font-medium">
                    {d.review}
                  </p>
                  <p className="text-center mb-[54px] text-[#555555] text-[14px] md:text-[16px] font-semibold">
                    {d.name}
                  </p>
                </div>
              </div>
            ))}
          </Slider>
        </div>
      </ContainerLayout>
    </div>
  );
}

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
];

export default MobileCarousel;
