import React, { useEffect } from "react";
import ContainerLayout from "../../layouts/ContainerLayout";
import Image from "next/image";
import cookie from "../../assets/svg/faq-icon.svg";


const FaqHero = () => {
    useEffect(() => {
      window?.scrollTo(0, 0);
    }, []);
  return (
    <ContainerLayout>
      <div className="w-full bg-[#F6F1FF] rounded-[30px] h-[153px] lg:h-[234px] mt-28 mb-16 flex items-center">
        <div className="w-10/12 lg:w-10/12 flex items-center justify-between mx-auto">
          <h1
            className="text-[#1e1e1e] font-serif font-semibold text-[32px] leading-[50px] 2xl:text-[40px]  2xl:leading-[67px]"
            data-aos="fade-up"
            data-aos-duration="1000"
          >
            FREQUENTLY ASKED QUESTIONS
          </h1>

          <div
            className=" hidden md:flex justify-end"
            data-aos="fade-up"
            data-aos-duration="1000"
          >
            <Image
              src={cookie}
              alt="image"
             
              className="   rounded-full object-contain h-[240px]"
            />
          </div>
        </div>
      </div>
    </ContainerLayout>
  );
};

export default FaqHero;
