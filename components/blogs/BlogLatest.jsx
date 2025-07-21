import React from "react";
import ContainerLayout from "../../layouts/ContainerLayout";
import Image from "next/image";
import heroImage from "../../assets/png/fpmp-pic.png";
import { useRouter } from "next/router";
import { blogPosts } from "../../utils/blog-data";
const BlogLatest = () => {
  const router = useRouter();
  const item = blogPosts[0];

  return (
    <ContainerLayout>
      <div
        className="w-full flex flex-col pt-2 lg:overflow-y-hidden"
        // data-aos="fade-up"
        // data-aos-duration="1000"
      >
        {/* <div className='w-full h-[1px] mt-10 bg-[#999]' /> */}
        <h1
          className="mt-16 text-[#555] text-xl 2xl:text-[40px] lg:text-3xl  font-[500] "
          // data-aos="fade-up"
          // data-aos-duration="1000"
        >
          Latest
        </h1>
        <div className="w-full mt-12 flex flex-col md:flex-row justify-between items-center ">
          <div className="w-full md:w-6/12 items-center">
            <Image
              src={item?.leadImage}
              alt="hero"
              className="w-full h-auto rounded-[30px]"
              // data-aos="fade-up"
              // data-aos-duration="1000"
            />
          </div>
          <div className="w-full md:w-5/12 flex flex-col justify-center">
            <p
              className="text-[12px] md:text-[16px] text-[#555] mt-6 2xl:mt-0 "
              // data-aos="fade-up"
              // data-aos-delay="300"
              // data-aos-duration="1000"
            >
              {item?.date}
            </p>
            <h2
              className="md:w-11/12 w-full text-[32px] 2xl:text-[40px] font-[500] text-[#333] my-7 leading-[36px] md:mt-2 md:mb-2 lg:text-2xl lg:leading-[40px]  2xl:leading-[60px]"
              // data-aos="fade-up"
              // data-aos-delay="500"
              // data-aos-duration="1000"
            >
              {item?.title}
            </h2>
            <p
              className="text-[#555] text-[14px] lg:text-[16px] 2xl:text-xl leading-[30px]"
              // data-aos="fade-up"
              // data-aos-delay="700"
              // data-aos-duration="1000"
            >
              {item?.summaryHeading}
            </p>
            <p
              className=" bg-white   text-[16px] text-mainBlue border border-mainBlue hover:border-none  hover:text-mainBlue  font-semibold mt-4  w-fit px-[30px] py-[15px] cursor-pointer h-[50px] rounded-[50px] flex items-center justify-center hover:bg-[#E3D5FF]   "
              onClick={() => router.push(`/blog/0`)}
              // data-aos="fade-up"
              // data-aos-duration="1000"
            >
              Read
            </p>
          </div>
        </div>
      </div>
    </ContainerLayout>
  );
};

export default BlogLatest;
