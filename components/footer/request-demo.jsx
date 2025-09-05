import React from "react";
import Image from "next/image";
import ContainerLayout from "../../layouts/ContainerLayout";
import requestDemoBg from "../../assets/png/request-demo-bg.png";
import Link from "next/link";
import GetAQuoteArrow from "../../assets/svg/get-a-quote-arrow.svg";

const RequestDemo = () => {
  return (
    <div className="w-full px-2">
      <div
        className="w-full min-h-[663px] lg:min-h-[914px] bg-cover bg-center bg-no-repeat rounded-t-[32px] overflow-hidden mt-10 flex items-center"
        style={{ backgroundImage: `url(${requestDemoBg.src})` }}
      >
        <ContainerLayout>
          <div className="text-white w-full max-w-[700px] px-4 lg:ml-16 flex flex-col justify-center">
            {/* Heading */}
            <h1 className="text-[28px] sm:text-[36px] lg:text-[48px] font-extrabold leading-tight text-left">
              Begin Automating <br /> Your Field Operations.
            </h1>

            <div className="flex flex-col lg:flex-row mt-10 gap-3">
              {/* Input with Subscribe inside */}
              <div className="relative w-[332px]">
                <input
                  type="text"
                  placeholder="example@email.com"
                  className="rounded-full w-full h-[56px] lg:h-[48px] px-6 pr-[120px] text-[#686890] placeholder:text-[#999] text-base font-medium focus:outline-none"
                />
                <button className="absolute right-2 top-1/2 -translate-y-1/2 bg-[#5B4DF9] text-[#E9E9EF] font-medium text-base rounded-full w-[126px] h-[40px]">
                  Subscribe
                </button>
              </div>

              {/* CTA Buttons */}
              <div className="flex flex-row gap-4">
                <Link
                  href="/request"
                  className="bg-mainBlue hover:bg-[#E3D5FF] flex items-center justify-center text-white hover:text-mainBlue rounded-full py-3 px-8 lg:px-6 font-medium text-sm shadow-3xl"
                >
                  <div className="bg-[#E9E9EF] text-base font-medium rounded-full p-1 mr-3">
                    <Image src={GetAQuoteArrow} alt="Arrow Icon" />
                  </div>
                  Try it for Free
                </Link>

                <Link
                  href="https://demo.wecollect.tech"
                  target="_blank"
                  className="bg-[#F3F3FF] text-[#5B4DF9] font-semibold text-sm rounded-full py-3 px-6 shadow flex items-center justify-center"
                >
                  Book a Demo
                </Link>
              </div>
            </div>
          </div>
        </ContainerLayout>
      </div>
    </div>
  );
};

export default RequestDemo;
