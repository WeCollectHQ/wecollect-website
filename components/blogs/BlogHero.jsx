import React from 'react'
import ContainerLayout from '../../layouts/ContainerLayout'
import { Navlogo } from "../../assets/svg";
import logo from "../../assets/svg/log2.svg";
import Image from 'next/image';
import { BiSearch } from "react-icons/bi"
import Link from 'next/link';
import { RiArrowLeftSLine } from "react-icons/ri"
import heroImage from "../../assets/png/blog-hero.png";
import { useRouter } from 'next/router';
const BlogHero = () => {
    const router = useRouter();

  return (
    <ContainerLayout>
      <div className="w-full flex flex-col pt-2">
        <div>
          <Image
            src={logo}
            alt="logo"
            className="w-[120px] md:w-[172px] h-auto cursor-pointer"
            onClick={() => router.push("/")}
          />
        </div>
        <div className="w-full flex md:flex-row flex-col items-center mt-12  ">
          <h1 className="w-full md:w-4/12 text-3xl md:text-[64px] text-[#333]">Our Blog</h1>
          <div className="flex items-center justify-between flex-row-reverse md:flex-row w-full md:w-8/12 mt-4 md:mt-0">
            <div className="flex items-center border-b pb-2  border-[#999] w-full md:w-6/12 ">
              <input
                type="text"
                className="border-none outline-none focus:outline-none focus:border-none text-base placeholder:text-[#555] flex-grow  "
                placeholder="Search keyword..."
              />
              <BiSearch className="text-lg text-[#444]" />
            </div>
            {/* searc */}
            <div className="md:w-4/12 hidden md:flex items-center space-x-8 ">
              <Link
                href="/"
                className="border border-[#999] text-sm md:text-lg text-[#999] rounded-[20px] px-4 md:px-6  h-auto md:h-[55px] flex items-center space-x-2 cursor-pointer"
                onClick={() => router.push("/")}
              >
                <RiArrowLeftSLine className="text-xl md:text-2xl" />
                <p>Go back</p>
              </Link>

              <p className="text-mainBlue border-l-2 pl-3 text-base border-[#555] font-semibold hidden md:block ">
                Blog
              </p>
            </div>

            {/* button */}
          </div>
        </div>
        {/* <div className='w-full h-[1px] mt-10 bg-[#999]' /> */}
        <h1 className="mt-16 text-[#555] text-xl md:text-[40px] font-[500] ">Latest</h1>
        <div className="w-full mt-12 flex flex-col md:flex-row justify-between items-center ">
          <div className="w-full md:w-6/12 items-center">
            <Image
              src={heroImage}
              alt="hero"
              className="w-full h-auto rounded-[30px]"
            />
          </div>
          <div className="w-full md:w-5/12 flex flex-col justify-center">
            <p className="text-[12px] md:text-base text-[#555] md:mt-6 2xl:mt-0 ">April 12 . 10:52 PM</p>
            <h2 className="md:w-11/12 w-full text-[32px] 2xl:text-[40px] font-[500] text-[#333] my-7 md:mt-2 md:mb-2 text-2xl md:leading-[60px]">
              Collecting data smarter with WeCollect.
            </h2>
            <p className="text-[#555] text-sm md:text-xl">
              Lorem ipsum dolor sit amet consectetur. Arcu massa sit ornare
              diam. Phasellus nisi auctor viverra pellentesque. In ut
              condimentum nisl eu. Ut viverra et mattis sem nibh ipsum...
            </p>
            <button className="w-[143px] h-[65px] justify-center items-center flex text-mainBlue font-semibold text-base cursor-pointer rounded-[20px] border border-mainBlue mt-4">
              Blog
            </button>
          </div>
        </div>
      </div>
    </ContainerLayout>
  );
}

export default BlogHero