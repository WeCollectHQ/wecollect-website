import React from "react";
import ContainerLayout from "../../layouts/ContainerLayout";
import { Navlogo } from "../../assets/svg";
import logo from "../../assets/svg/log2.svg";
import Image from "next/image";
import { BiSearch } from "react-icons/bi";
import Link from "next/link";
import { RiArrowLeftSLine } from "react-icons/ri";
import heroImage from "../../assets/png/blog-hero.png";
import { useRouter } from "next/router";
import { data } from "./data";
import {
  AiFillLinkedin,
  AiFillTwitterCircle,
  AiFillInstagram,
} from "react-icons/ai";
import {BsFacebook} from "react-icons/bs"
const SingleBlogHeader = () => {
  const router = useRouter();

  return (
    <ContainerLayout>
      <div className="w-full flex flex-col pt-2 flow-hide">
        <div>
          <Image
            src={logo}
            alt="logo"
            className="w-[120px] md:w-[172px] h-auto cursor-pointer"
            onClick={() => router.push("/")}
          />
        </div>
        <div className="w-full flex md:flex-row flex-col items-center mt-12  ">
          <h1 className="w-full md:w-4/12 text-3xl md:text-[64px] text-[#333]">
            Our Blog
          </h1>
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

        <div className="w-full mt-8 flex flex-col md:flex-row justify-between items-center md:mt-12">
          <div className="w-full md:w-8/12 items-center">
            <Image
              src={heroImage}
              alt="hero"
              className="w-full h-auto rounded-[30px]"
            />
          </div>
          <div className="w-full md:w-4/12 flex flex-col  justify-center md:pl-8">
            <p className="text-[#333] mb-1">Share post to:</p>
            <div className="flex space-x-8 items-center">
              <AiFillLinkedin className="text-2xl cursor-pointer text-[#333]" />
              <BsFacebook className="text-2xl text-[#333] cursor-pointer" />
              <AiFillInstagram className="text-2xl text-[#333] cursor-pointer" />
              <AiFillTwitterCircle className="text-2xl text-[#333] cursor-pointer" />
            </div>
          </div>
        </div>
        <p className="text-base text-[#444] md:mt-16">April 12 . 10:52 PM</p>
        <div className="w-8/12 flex flex-col">
          <h1 className="text-4xl md:text-[52px] text-[#333] leading-[78px]">
            Collecting data smarter with WeCollect.
          </h1>
          <p className="text-[#333] text-xl">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit.
            Consequatur facere reprehenderit laborum in nemo expedita fuga vero,
            necessitatibus voluptatibus officiis odit delectus, voluptates
            beatae eius quia ducimus, dolores repudiandae sapiente unde.
            Repellat ab quos distinctio accusamus possimus, hic nesciunt libero
            voluptas ducimus qui eius dignissimos est dolores cupiditate atque
            dolorem maiores vero tempore assumenda. Molestiae officiis
            aspernatur ut ab quasi, tempora atque fuga ratione unde asperiores
            temporibus possimus omnis accusamus!
          </p>
          {/* start of edding */}
          <h1 className="md:text-[40px] text-[#555] mt-12 mb- font-normal ">
            Heading
          </h1>
          <p className="text-[#333] ">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum,
            commodi ut. Quis totam corporis suscipit deleniti. Ipsam optio unde,
            accusamus totam laboriosam repellat molestiae at molestias corporis,
            praesentium, quidem veritatis!
          </p>
          <p className="text-[#333] ">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus
            amet provident ipsa, incidunt, dolorum maxime soluta ipsam quibusdam
            tempora voluptatem alias deserunt reprehenderit mollitia. Veritatis
            dolorem placeat expedita ratione blanditiis esse vel atque
            praesentium id. Commodi perspiciatis, atque maiores consectetur quam
            dolores amet cum animi ex quos error deleniti tempore repellat
            provident ipsum explicabo. Quas, necessitatibus unde ex maiores ab
            perspiciatis. Rem atque eaque iste molestias amet velit unde alias.
          </p>
          {/* end of an ending */}
          {/* start of edding */}
          <h1 className="md:text-[40px] text-[#555] mt-12 mb- font-normal ">
            Heading
          </h1>
          <p className="text-[#333] ">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum,
            commodi ut. Quis totam corporis suscipit deleniti. Ipsam optio unde,
            accusamus totam laboriosam repellat molestiae at molestias corporis,
            praesentium, quidem veritatis!
          </p>
          <p className="text-[#333] ">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus
            amet provident ipsa, incidunt, dolorum maxime soluta ipsam quibusdam
            tempora voluptatem alias deserunt reprehenderit mollitia. Veritatis
            dolorem placeat expedita ratione blanditiis esse vel atque
            praesentium id. Commodi perspiciatis, atque maiores consectetur quam
            dolores amet cum animi ex quos error deleniti tempore repellat
            provident ipsum explicabo. Quas, necessitatibus unde ex maiores ab
            perspiciatis. Rem atque eaque iste molestias amet velit unde alias.
          </p>
          {/* end of an ending */}
          {/* start of edding */}
          <h1 className="md:text-[40px] text-[#555] mt-12 mb- font-normal ">
            Heading
          </h1>
          <p className="text-[#333] ">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum,
            commodi ut. Quis totam corporis suscipit deleniti. Ipsam optio unde,
            accusamus totam laboriosam repellat molestiae at molestias corporis,
            praesentium, quidem veritatis!
          </p>
          <p className="text-[#333] ">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus
            amet provident ipsa, incidunt, dolorum maxime soluta ipsam quibusdam
            tempora voluptatem alias deserunt reprehenderit mollitia. Veritatis
            dolorem placeat expedita ratione blanditiis esse vel atque
            praesentium id. Commodi perspiciatis, atque maiores consectetur quam
            dolores amet cum animi ex quos error deleniti tempore repellat
            provident ipsum explicabo. Quas, necessitatibus unde ex maiores ab
            perspiciatis. Rem atque eaque iste molestias amet velit unde alias.
          </p>
          {/* end of an ending */}
          {/* start of edding */}
          <h1 className="md:text-[40px] text-[#555] mt-12 mb-4 font-normal ">
            Heading
          </h1>
          <p className="text-[#333] ">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum,
            commodi ut. Quis totam corporis suscipit deleniti. Ipsam optio unde,
            accusamus totam laboriosam repellat molestiae at molestias corporis,
            praesentium, quidem veritatis!
          </p>
          <p className="text-[#333] ">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus
            amet provident ipsa, incidunt, dolorum maxime soluta ipsam quibusdam
            tempora voluptatem alias deserunt reprehenderit mollitia. Veritatis
            dolorem placeat expedita ratione blanditiis esse vel atque
            praesentium id. Commodi perspiciatis, atque maiores consectetur quam
            dolores amet cum animi ex quos error deleniti tempore repellat
            provident ipsum explicabo. Quas, necessitatibus unde ex maiores ab
            perspiciatis. Rem atque eaque iste molestias amet velit unde alias.
          </p>
          {/* end of an ending */}
          <h1 className="md:text-[40px] text-[#555] mt-12 mb-8 font-normal ">
            People Also Read
          </h1>
        </div>
        <div className="w-full grid grid-cols-1 gap-x-8 gap-y-12  sm:grid-cols-2 lg:grid-cols-3 h-full">
          {data.slice(0, 3).map((item, index) => (
            <div
              className="w-full flex flex-col"
              key={index}
              data-aos="fade-up"
              data-aos-duration="2000"
            >
              <Image
                src={item.image}
                alt="image"
                className="w-11/12 mx-auto md:w-8/12 h-auto rounded-[30px]"
              />
              <p className="text-[12px] md:text-base text-[#555] mt-4 ">
                {item.date}
              </p>
              <p className="text-2xl md:text-[32px] text-[#555] leading-[40px] mt-4">
                {item.title}
              </p>
              <p className="text-sm md:text-xl text-[#555] mt-4">
                {item.content}
              </p>
              <p className="bg-mainBlue  text-base text-white  font-semibold mt-4 rounded-[30px] w-fit px-6 py-3 cursor-pointer" onClick={() => router.push(`/blog/${index}`)}>
                Read
              </p>
            </div>
          ))}
        </div>
      </div>
    </ContainerLayout>
  );
};

export default SingleBlogHeader;
