import React, { useState, useEffect } from "react";

import ContainerLayout from "../../layouts/ContainerLayout";
import Image from "next/image";
import { data } from "./data";
import { useRouter } from "next/router";
import { blogPosts } from "../../utils/blog-data";

const AllBlogs = () => {
  const router = useRouter();
  const { search } = router.query;
  const [allBlogs, setAllBlogs] = useState([]);
  useEffect(() => {
    if (!search) {
      setAllBlogs(blogPosts);
    } else {
      const filteredBlogs = blogPosts.filter((blog) =>
        blog.title.toLowerCase().includes(search.toLowerCase())
      );
      setAllBlogs(filteredBlogs);
    }
  }, [search]);

  return (
    <ContainerLayout>
      <div
        className="w-full flex flex-col mt-16 lg:mt-20 mb-8 md:mb-0"
        id="blog"
        // data-aos="fade-up"
        // data-aos-duration="1000"
      >
        <h1
          className="mt-16 text-[#555] text-2xl 2xl:text-[40px] lg:text-2xl  mb-8 font-[500]"
          // data-aos="fade-up"
          // data-aos-duration="1000"
        >
          {search ? "Result" : "Other Post"}
        </h1>
        {allBlogs?.length === 0 ? (
          <div className="flex items-center justify-center">
            <h1>No Blog Found</h1>
          </div>
        ) : (
          <div className="w-full grid grid-cols-1 gap-x-8 gap-y-12  sm:grid-cols-2 lg:grid-cols-3 overflow-y-hidden">
            {allBlogs?.slice(0, 6)?.map((item, index) => (
              <div
                className="w-full flex flex-col"
                key={index}
                // data-aos="fade-up"
                // data-aos-duration="1000"
              >
                <Image
                  src={item.leadImage}
                  alt="image"
                  className="w-full object-cover mx-auto md:w-full h-auto rounded-[30px]"
                />
                <p className="text-[12px] md:text-[16px] text-[#555] mt-4 ">
                  {item.date}
                </p>
                <p className=" 2xl:text-2xl leading-[36px] md:text-[32px] text-[#555] md:leading-[40px] mt-4 truncate">
                  {item.title}
                </p>
                <p className=" text-[14px] lg:text-[16px] 2xl:text-xl text-[#555] mt-5  leading-[30px]">
                  {item.summaryHeading}
                </p>
                <p
                  className="hover:bg-[#E3D5FF] bg-white   text-[16px] text-mainBlue border border-mainBlue hover:border-none    font-semibold mt-4  w-fit px-[30px] py-[15px] cursor-pointer h-[50px] rounded-[50px] flex items-center justify-center hover:text-mainBlue   "
                  onClick={() => router.push(`/blog/${item?.id}`)}
                >
                  Read
                </p>
              </div>
            ))}
          </div>
        )}
      </div>
    </ContainerLayout>
  );
};

export default AllBlogs;
