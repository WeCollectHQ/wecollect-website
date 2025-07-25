import React, { useState } from "react";
import Image from "next/image";
import { useRouter } from "next/router";
import ContainerLayout from "../../layouts/ContainerLayout";
import add from "../../assets/svg/arrow-down.svg";
import minus from "../../assets/svg/minus.svg";
import { faqData } from "../../utils/faqdata";
import DotsBg from "../../assets/png/dots-bg-image.png";
import FaqLeftIcon from "../../assets/svg/mingcute_comment-line.svg";
import Link from "next/link";

const Faq = () => {
  const router = useRouter();

  return (
    <div
      // className="w-full bg-[#fff] h-auto -mb-16 pt-10 2xl:py-[100px] mt-12 flow-hide"
      className="w-full relative overflow-hidden"
      id="faq"
      // data-aos="fade-up"
      // data-aos-duration="1000"
    >
      <Image
        src={DotsBg}
        alt="dots background"
        className="absolute top-0 left-1/2 -translate-x-1/2 z-0 max-w-[761px]"
      />

      <ContainerLayout>
        <div className="w-full flex flex-col">
          <div className="flex justify-center mt-[100px] mb-6">
            <div className="inline-flex bg-[#F3F3FF] shadow-xl rounded-[50px] py-2 px-3 border-2 border-[#FFFFFF]">
              <Image src={FaqLeftIcon} alt="" />
              <p className="text-[#1E1E5A] text-base font-medium pl-2">FAQ</p>
            </div>
          </div>

          <p className="bg-gradient-to-r from-[#151541] to-[#00009A] bg-clip-text text-transparent font-sans text-[24px] lg:text-[40px] font-black text-center lg:leading-[60px] z-10 relative">
            Our User Already Asked, and We Answered
          </p>

          <div className="w-full bg-[#F9F6FF] h-auto rounded-[30px] flex flex-col mt-[30px] md:mt-[50px] p-5  lg:p-[30px]">
            {faqData?.slice(0, 3)?.map((item: any, index: number) => {
              return <SingleFaq item={item} key={index} />;
            })}
          </div>

          <div className="flex justify-center">
            <button
              onClick={() => router.push("/faq")}
              className="bg-[#F3F3FF] w-[200px] h-12 rounded-[50px] py-3 px-6 text-[#4747D6] text-base font-medium shadow-xl my-12"
            >
              View All
            </button>
          </div>
        </div>
      </ContainerLayout>
    </div>
  );
};

export default Faq;

export const SingleFaq = ({ item }: any) => {
  const [isOpen, setIsOpen] = useState(false);
  const { title, story, list, isLast } = item;

  return (
    <div
      className={`flex flex-col w-full py-5 lg:px-7 px-4 ${
        isLast ? "border-none" : "bg-[#fff] rounded-[20px] mb-5"
      }`}
    >
      <div
        className="flex space-x-5 items-center justify-between  "
        onClick={() => setIsOpen(!isOpen)}
      >
        <p
          className={`lg:text-[16px] font-sans 2xl:text-[18px]  ${
            isOpen ? "text-customBlack" : "text-customBlack"
          }  font-semibold  text-[14px] cursor-pointer `}
        >
          {title}
        </p>
        <Image
          src={isOpen ? add : minus}
          alt="add "
          className="w-[20px] h-[16px]"
        />
      </div>
      {isOpen && (
        <div
          className="flex flex-col mt-3 "
          data-aos="fade-up"
          data-aos-duration="1000"
        >
          <p className="text-ash  2xl:text-[18px] lg:w-11/12 ">{story}</p>
          {list.length !== 0 && (
            <ul className="list-disc ">
              {list.map((item: any, index: number) => {
                return (
                  <li
                    className="text-ash lg:text-[16px] font-sans 2xl:text-[18px] text-[14px] lg:w-9/12"
                    key={index}
                  >
                    {item}
                  </li>
                );
              })}
            </ul>
          )}
        </div>
      )}
    </div>
  );
};
