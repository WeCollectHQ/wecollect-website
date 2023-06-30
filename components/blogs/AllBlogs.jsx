import React from 'react'

import ContainerLayout from '../../layouts/ContainerLayout';
import Image from 'next/image';
import { data } from './data';
import { useRouter } from 'next/router';

const AllBlogs = () => {
  const router = useRouter();
  return (
    <ContainerLayout>
      <div className="w-full flex flex-col mt-20 mb-8 md:mb-0">
        <h1 className="mt-16 text-[#555] text-2xl md:text-[40px] mb-8 font-[500]">
          Older posts
        </h1>
        <div className="w-full grid grid-cols-1 gap-x-8 gap-y-12  sm:grid-cols-2 lg:grid-cols-3 flow-hide">
          {data.map((item, index) => (
            <div
              className="w-full flex flex-col"
              key={index}
              data-aos="fade-up"
              data-aos-duration="2000"
            >
              <Image
                src={item.image}
                alt="image"
                className="w-full object-cover mx-auto md:w-full h-auto rounded-[30px]"
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
              <p
                className="hover:bg-mainBlue bg-white   text-base text-mainBlue border border-mainBlue hover:border-none  hover:text-white  font-semibold mt-4 rounded-[20px] w-fit px-6 py-3 cursor-pointer "
                onClick={() => router.push(`/blog/${index}`)}
              >
                Blog
              </p>
            </div>
          ))}
        </div>
      </div>
    </ContainerLayout>
  );
}

export default AllBlogs