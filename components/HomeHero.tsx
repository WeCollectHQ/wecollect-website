import React, { useEffect, useState } from "react";
import Image from "next/image";
import ContainerLayout from "../layouts/ContainerLayout";
import homehero from "../assets/png/hero-boy.png";
import location from "../assets/png/location-samp.png";
import collection from "../assets/png/offline-ilus.png";
import secure from "../assets/png/secure-ilus.png";
import blueright from "../assets/svg/blueright.svg";
import Link from "next/link";

function HomeHero() {
  const [isExpanded, setIsExpanded] = useState(false);
  const [isScrolling, setIsScrolling] = useState(false);

  useEffect(() => {
    // Trigger the scroll animation on mount
    setIsScrolling(true);
    // Set timeout to reset the scroll state after the animation ends
    const timer = setTimeout(() => {
      setIsScrolling(false);
    }, 1000); // 2 seconds duration for the scroll animation

    return () => clearTimeout(timer);
  }, []);
  useEffect(() => {
    setIsExpanded(true);
  }, []);
  return (
    <div className="w-full bg-white  lg:bg-white">
      <ContainerLayout>
        <div className="w-full h-auto pt-24 flex flex-col md:flex-row justify-between items-center px-8 lg:px-0 ">
          <div className="w-full 2xl:w-[40%] max-w-[516px]  h-auto text-[#333333] text-center md:text-start ">
            <div className="scroll-container">
              <div
                className={`scroll-element ${
                  isScrolling ? "scroll-out" : "opacity-0"
                }`}
                // data-aos="flip-down"
                // data-aos-duration="500"
                // data-aos-delay="200"
              >
                <p
                  className="text-[45px] 2xl:text-[55px] font-bold font-serif"
                  // data-aos="flip-down"
                  // data-aos-duration="500"
                  // data-aos-delay="200"
                >
                  Insight Gathering
                </p>
                <div
                  className="flex flex-col  relative"
                  // data-aos="flip-down"
                  // data-aos-duration="500"
                  // data-aos-delay="300"
                >
                  <p className="text-[45px] 2xl:text-[55px] font-bold z-10 font-serif">
                    Made Easy
                  </p>
                  <div
                    className={`expanding-div ${
                      isExpanded ? "expanded" : ""
                    } absolute bottom-2 z-0 max-w-[300px]`}
                  ></div>
                </div>
              </div>
              <div
                className={`scroll-element ${isScrolling ? "scroll-in" : ""}`}
                // data-aos="flip-down"
                // data-aos-duration="500"
                // data-aos-delay="200"
              >
                <p
                  className="text-[45px] 2xl:text-[55px] font-bold font-serif"
                  // data-aos="flip-down"
                  // data-aos-duration="500"
                  // data-aos-delay="200"
                >
                  Insight Gathering,
                </p>
                <div
                  className="flex flex-col  relative"
                  // data-aos="flip-down"
                  // data-aos-duration="500"
                  // data-aos-delay="300"
                >
                  <p className="text-[45px] 2xl:text-[55px] font-bold z-10 font-serif">
                    Made Easy
                  </p>
                  <div
                    className={`expanding-div ${
                      isExpanded ? "expanded" : ""
                    } absolute bottom-2 z-0 max-w-[300px]`}
                  ></div>
                </div>
              </div>
            </div>
            <p
              className="text-[#333]   font-[300] mt-[30px] leading-[30px] text-[18px] font-sans  "
              data-aos="fade-up"
              data-aos-duration="1000"
              data-aos-delay="1200"
            >
              Leverage advanced data collecting technology with features like
              GIS and offline data collection as well as a vast network of field
              agents to collect, track, and ensure accurate data for various
              projects
            </p>

            <div
              className="w-full h-auto flex flex-col  md:flex-row items-center mt-8  lg:gap-6"
              data-aos="fade-up"
              data-aos-duration="1000"
              data-aos-delay="1000"
              data-aos-once="true"
            >
              <div className="bg-mainBlue hover:bg-[#E3D5FF] w-[197px] h-[50px] flex justify-center items-center text-white hover:text-mainBlue rounded-[50px]  cursor-pointer font-semibold hero-btn text-[14px] 2xl:text-[16px]">
                Get started for free
              </div>
              <Link
                href="https://demo.wecollect.tech"
                target="_blank"
                className="bg-[#FFFFFF] hover:bg-[#E3D5FF]  w-[197px]  h-[50px] flex justify-start pl-[10px] items-center text-mainBlue rounded-[50px] hero-btn cursor-pointer my-5 md:my-0 font-semibold text-[14px] 2xl:text-[16px]  "
              >
                <Image src={blueright} alt="blueright" className="mr-[10px]" />
                Book a demo
              </Link>
            </div>
          </div>

          <div className="w-full md:w-1/2 flex justify-end h-full relative overflow-y-hidden overflow-x-hidden ">
            <Image
              src={homehero}
              alt=""
              className=" w-full h-auto  mt-8 lg:mt-0 z-0 mb-16 lg:mb-0"
            />
            <Image
              src={location}
              alt="location"
              className="max-w-[310px] lg:w-[310px] w-[212px] object-contain  h-auto  absolute top-[30%] -left-2 lg:left-0 hero-item-shadow z-10"
              data-aos="fade-down"
              data-aos-delay="300"
            />
            <Image
              src={collection}
              alt="collection"
              className="max-w-[310px] w-[212px] lg:w-[310px] object-contain  h-auto absolute top-[50%] -right-4 lg:right-0"
              data-aos="fade-down"
              data-aos-duration="1000"
              data-aos-delay="600"
            />
            <Image
              src={secure}
              alt="secure"
              className="max-w-[310px] w-[212px] lg:w-[310px] object-contain  h-auto absolute bottom-[-60px] lg:bottom-[-60px] left-0"
              data-aos="fade-down"
              data-aos-delay="900"
              data-aos-duration="1000"
            />
          </div>
        </div>
      </ContainerLayout>
    </div>
  );
}

export default HomeHero;
