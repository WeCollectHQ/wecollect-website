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

function DesktopCarousel() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
  };

  return (
    <div className="w-full h-auto hidden md:block flow-hide">
      <ContainerLayout>
        <p
          className="text-[#333333] text-[36px] font-semibold text-center mt-40"
          data-aos="fade-up"
          data-aos-duration="1000"
        >
          TESTIMONIALS
        </p>

        <p
          className="text-[#333333] text-[20px] font-medium text-center mt-[10px] mb-[50px]"
       
        >
          Our users have the following to say about Us:
        </p>
        <div
          className="bg-[#F6F1FF] h-auto p-[30px] rounded-[30px]"
         
        >
          <Slider
            {...settings}
            prevArrow={<Image src={leftArrow} alt="Left Arrow" />}
            nextArrow={<Image src={rightArrow} alt="Right Arrow" />}
          >
            {data.map((d) => (
              <div key={d.name} className="flow-hide">
                <div className="w-[90%] m-auto bg-[#fff] h-[336px] rounded-[30px] pt-[10px] px-[10px] shadow-b shadow-[#4747D6] ">
                  <Image
                    src={d.img}
                    alt=""
                    width={144}
                    height={24}
                    className="m-auto mt-10 mb-6"
                  />

                  <p className="text-center mb-[35px] text-[#555555] text-[18px] font-medium">
                    {d.review}
                  </p>
                  <p className="text-center mb-[54px] text-[#555555] text-[16px] font-semibold">
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

export default DesktopCarousel;
