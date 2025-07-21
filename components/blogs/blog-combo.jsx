import React, { useEffect, useState } from "react";
import ContainerLayout from "../../layouts/ContainerLayout";
import Image from "next/image";
import { blogPosts } from "../../utils/blog-data";
import empty from "../../assets/svg/empty-result.svg";
import { BlogSearchIcon } from "../../assets/svg";
import { useRouter } from "next/router";
const BlogCombo = () => {
  const item = blogPosts[0];
  const [search, setSearch] = useState("");
  //   const handleKeyPress = (event) => {
  //     if (event.key === "Enter") {
  //       handleBlogSearch();
  //     }
  //   };
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
  const router = useRouter();
  return (
    <div className="flex flex-col font-sans">
      <ContainerLayout>
        <div className="w-full flex flex-col">
          <div
            className=" w-full max-w-[502px]  rounded-[50px] h-[50px] bg-white bg-opacity-60 flex justify-between px-4 items-center mt-8 border border-[#999] border-opacity-30 gap-2"
            // data-aos="fade-up"
            // data-aos-duration="1000"
          >
            <span>
              <BlogSearchIcon />
            </span>
            <input
              type="text"
              className="bg-transparent flex-grow border-none outline-none focus:outline-none focus:border-none placeholder:text-[16px] placeholder:text-ash text-ash text-[16px] "
              placeholder="search blog"
              value={search}
              //   onKeyDown={handleKeyPress}
              onChange={(e) => setSearch(e.target.value)}
            />
            {(allBlogs?.length === 0) | (search?.length > 0) ? (
              <button
                className="bg-mainBlue rounded-[50px] h-[36px] px-5 flex items-center justify-center text-white text-[16px]  cursor-pointer lg:min-w-[98px] hover:bg-[#E3D5FF] hover:text-mainBlue font-semibold  "
                onClick={() => setSearch("")}
              >
                Close
              </button>
            ) : (
              <button
                className="bg-mainBlue rounded-[50px] h-[36px] px-5 flex items-center justify-center text-white text-[16px]  cursor-pointer lg:min-w-[98px] hover:bg-[#E3D5FF] hover:text-mainBlue font-semibold  "
                // onClick={handleBlogSearch}
              >
                Search
              </button>
            )}
          </div>
          {search && (
            <div className="w-full bg-white  flow-hide rounded-b-[50px]   ">
              {allBlogs?.length === 0 && (
                <div className="w-full flex  max-h-[412px] h-[412px] flex-col justify-center items-center ">
                  <span>
                    <Image src={empty} alt="empty" />
                  </span>
                  <div className="-mt-24 flex flex-col ">
                    <h1 className="text-[16px] font-semibold text-customBlack text-center">
                      No result found for this word
                    </h1>
                    <p className="text-[#55555] text-[14px] mt-2 font-medium text-center">
                      Please, search another word
                    </p>
                    <p className="text-mainBlue mt-2 cursor-pointer font-semibold text-center ">
                      Try Again
                    </p>
                  </div>
                </div>
              )}
              {/* <div className="flex flex-col gap-4 p-4 max-w-[725px] mx-auto">
                {allBlogs?.length > 0 &&
                  allBlogs?.map((blog, index) => {
                    return (
                      <div
                        className="min-h-[40px] py-2 px-2 cursor-pointer hover:bg-mainBlue hover:bg-opacity-10"
                        key={index}
                        onClick={() => {
                          router.push(`/blog?search=${search}#blog`);
                          setSearch("");
                        }}
                      >
                        <p className="text-customBlack w-full truncate">
                          {blog.title}
                        </p>
                      </div>
                    );
                  })}
              </div> */}
            </div>
          )}
          {/* BLOG LATEST */}
          {!search && allBlogs?.length !== 0 && (
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
          )}
          {/* END OF BLOG LATEST */}
          {allBlogs?.length > 0 && (
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
                <div className="flex items-center justify-center"></div>
              ) : (
                <div className="w-full grid grid-cols-1 gap-x-8 gap-y-12  sm:grid-cols-2 lg:grid-cols-3 overflow-y-hidden">
                  {allBlogs?.map((item, index) => (
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
          )}
        </div>
      </ContainerLayout>
    </div>
  );
};

export default BlogCombo;
