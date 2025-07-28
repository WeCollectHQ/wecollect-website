import React from "react";
import Image from "next/image";
import { useRouter } from "next/router";
import { blogs } from "../../utils/blogData";
import ContainerLayout from "../../layouts/ContainerLayout";
import BlogLeftIcon from "../../assets/svg/mdi_broadcast.svg";
import DotsBg from "../../assets/png/dots-bg-image.png";
import Hr from "./Hr";

function Blog() {
  const router = useRouter();

  return (
    <div
      className="w-full relative overflow-hidden"
      data-aos="fade-up"
      data-aos-duration="1000"
    >
      <Image
        src={DotsBg}
        alt="dots background"
        className="absolute top-0 left-1/2 -translate-x-1/2 z-0 max-w-[761px]"
      />

      <ContainerLayout>
        <div className="flex justify-center mt-[100px] mb-6">
          <div className="inline-flex bg-[#F3F3FF] shadow-xl rounded-[50px] py-2 px-3 border-2 border-[#FFFFFF]">
            <Image src={BlogLeftIcon} alt="" />
            <p className="text-[#1E1E5A] text-base font-medium pl-2">Blog</p>
          </div>
        </div>

        <p className="bg-gradient-to-r from-[#151541] to-[#00009A] bg-clip-text text-transparent font-sans text-[24px] lg:text-[40px] font-black text-center lg:leading-[60px] z-10 relative">
          Check Expert Perspectives on Data, Tech, and{" "}
          <br className="hidden lg:block" /> Field Operations
        </p>

        <div className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-10 z-10 relative">
          {blogs.map((blog, index) => (
            <div
              key={index}
              className="bg-white rounded-[20px] p-4 flex flex-col h-full"
            >
              <Image
                src={blog.image}
                alt={blog.title}
                className="rounded-[12px] w-full h-[300px] object-cover"
              />

              <p className="text-[#686890] text-xs font-medium mt-10 mb-4">
                {blog.date}
              </p>

              <p className="bg-[linear-gradient(89.2deg,_#151541_8.26%,_#00009A_99.38%)] bg-clip-text text-transparent text-[20px] font-black mb-4 line-clamp-2 leading-snug">
                {blog.title}
              </p>

              <p className="text-[#686890] text-base font-medium mb-4 line-clamp-3">
                {blog.description}
              </p>

              <button
                onClick={() => router.push(blog.link)}
                className="w-[200px] h-12 bg-[#4747D6] hover:bg-[#3333b3] text-[#E9E9EF] text-base font-medium px-6 py-2 rounded-full self-start"
              >
                Read
              </button>
            </div>
          ))}
        </div>

        <div className="flex justify-center">
          <button
            onClick={() => router.push("/blog")}
            className="bg-[#F3F3FF] w-[200px] h-12 rounded-[50px] py-3 px-6 text-[#4747D6] text-base font-medium shadow-xl my-12"
          >
            View All
          </button>
        </div>
      </ContainerLayout>

      <Hr />
    </div>
  );
}

export default Blog;
