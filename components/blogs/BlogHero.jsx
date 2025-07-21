import React, { useState, useEffect } from "react";
import NewNavbar from "../navbar/new-navbar";
import ContainerLayout from "../../layouts/ContainerLayout";
import heroPic from "../../assets/png/new-blog-hero.png";
import Image from "next/image";
import MobileNav from "../navbar/mobile-nav";
import { useRouter } from "next/router";
import empty from "../../assets/svg/empty-result.svg";
import { blogPosts } from "../../utils/blog-data";
const BlogHero = () => {
  const [search, setSearch] = useState("");
  const router = useRouter();
  const handleBlogSearch = () => {
    router.push(`/blog?search=${search}#blog`);
  };
  const handleKeyPress = (event) => {
    if (event.key === "Enter") {
      handleBlogSearch();
    }
  };
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
    <div className=" w-full h-full flow-hide">
      <div className="w-full h-[670px] lg:max-h-[670px]  relative new-hero-bg flex flex-col ">
        <NewNavbar />
        <MobileNav present={2} />
        <ContainerLayout>
          <div className="w-full flex flex-col  mt-[142px] justify-center flow-hide ">
            <div className="w-full lg:flex-row mt-12  flex flex-col ">
              <div className="w-full flex flex-col lg:w-1/2 justify-center">
                <h1
                  className="text-customBlack font-semibold text-[48px] 2xl:text-[64px] font-serif  "
                  // data-aos="fade-up"
                  // data-aos-duration="1000"
                >
                  OUR BLOG
                </h1>
                <p
                  className="text-customBlack font-medium 2xl:text-[32px]  text-[18px] mt-5 font-sans "
                  // data-aos="fade-up"
                  // data-aos-duration="1000"
                >
                  Stay up to date
                </p>
              </div>
              <div className="w-full lg:w-1/2 mt-24 lg:mt-0 mb-12 lg:mb-24">
                <Image
                  src={heroPic}
                  alt="hero"
                  width={heroPic.width}
                  height={heroPic.height}
                  className="w-full h-auto max-w-[480px] "
                  // data-aos="fade-up"

                  // data-aos-duration="1000"
                />
              </div>
            </div>
          </div>
        </ContainerLayout>
      </div>
    </div>
  );
};

export default BlogHero;
