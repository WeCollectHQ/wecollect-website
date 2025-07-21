import React from "react";
import ContainerLayout from "../../layouts/ContainerLayout";
import Link from "next/link";
const RequestDemo = () => {
  return (
    <div
      className="w-full bg-[#F9F6FF] pt-20 pb-12 mt-12 "
      data-aos="fade-up"
      data-aos-duration="1000"
    >
      <ContainerLayout>
        <div className="w-full request-bg min-h-[300px] px-4 lg:min-h-[500px] flex flex-col items-center justify-center">
          <h1
            className="text-customBlack text-center text-2xl 2xl:text-[30px] lg:text-2xl  font-semibold font-serif "
            // data-aos="fade-up"
            // data-aos-duration="1000"
          >
            REQUEST A DEMO
          </h1>
          <p
            className="text-ash text-[16px] 2xl:text-xl text-center max-w-[738px] mx-auto font-medium mt-2 font-sans"
            // data-aos="fade-up"
            // data-aos-duration="1000"
          >
            Our team will set up a meeting with you to discuss how you can
            gather smarter insight with WeCollect
          </p>
          <div
            className=" w-full max-w-[818px] rounded-[50px] h-[46px] lg:h-[75px] bg-white bg-opacity-60 flex justify-between px-4 items-center mt-8 "
            // data-aos="fade-up"
            // data-aos-duration="1000"
          >
            <input
              type="text"
              className="bg-transparent flex-grow font-sans border-none outline-none focus:outline-none focus:border-none placeholder:text-[16px] placeholder:text-ash text-ash text-[16px] "
              placeholder="e:g johndoe@email.com"
            />
            <Link
              href="https://demo.wecollect.tech"
              target="_blank"
              className="bg-mainBlue rounded-[50px] h-[46px] px-5 flex items-center justify-center text-white text-[16px]  cursor-pointer lg:min-w-[168px] hover:bg-[#E3D5FF] hover:text-mainBlue font-semibold font-sans "
            >
              Submit
            </Link>
          </div>
        </div>
      </ContainerLayout>
    </div>
  );
};

export default RequestDemo;
