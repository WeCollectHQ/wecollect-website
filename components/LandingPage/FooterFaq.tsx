import React, { useState } from "react";
import Image from "next/image";
import { mobileFooterData } from "../../utils/mobileFooterData";
import blueangle from "../../assets/svg/blueangleright.svg";
import grayangle from "../../assets/svg/grayangledown.svg";
import { useRouter } from "next/router";

function FooterFaq() {
  return (
    <div className="w-full h-auto mt-[66px] md:hidden">
      <div className="flex flex-col gap-[30px]">
        {mobileFooterData.map((item: any, index: number) => {
          return <SingleActivities item={item} key={index} />;
        })}
      </div>
    </div>
  );
}

export default FooterFaq;

const SingleActivities = ({ item }: any) => {
  const [isOpen, setIsOpen] = useState(false);
  const { title, list1, list2, list3, list4, list5 } = item;
  const router = useRouter();
  return (
    <div className="w-full rounded-[20px] px-5">
      <div
        className="w-full m-auto flex justify-between items-center"
        onClick={() => setIsOpen(!isOpen)}
      >
        <p
          className="text-[14px] font-bold cursor-pointer
        text-[#555555] font-sans "
        >
          {title}
        </p>

        <p className="cursor-pointer">
          {isOpen ? (
            <Image src={grayangle} alt="" />
          ) : (
            <Image src={blueangle} alt="" />
          )}
        </p>
      </div>
      {isOpen && (
        <div className="text-[#555555] text-[14px] font-medium  flex flex-col gap-[30px] mt-4">
          <p
            onClick={() => router.push(list1?.url)}
            className="mt-4 hover:bg-mainBlue w-fit hover:text-white text-[14px] text-ash hover:py-2 hover:px-4 hover:rounded-md font-sans"
          >
            {list1?.name}
          </p>
          <p
            onClick={() => router.push(list2?.url)}
            className="mt-3 hover:bg-mainBlue w-fit hover:text-white text-[14px] text-ash hover:py-2 hover:px-4 hover:rounded-md font-sans"
          >
            {list2?.name}
          </p>
          <p
            onClick={() => router.push(list3?.url)}
            className="mt-3 hover:bg-mainBlue w-fit hover:text-white text-[14px] text-ash hover:py-2 hover:px-4 hover:rounded-md font-sans"
          >
            {list3?.name}
          </p>
          <p
            onClick={() => router.push(list4?.url)}
            className="mt-3 hover:bg-mainBlue w-fit hover:text-white text-[14px] text-ash hover:py-2 hover:px-4 hover:rounded-md font-sans"
          >
            {list4?.name}
          </p>

          <p
            onClick={() => router.push(list5?.url)}
            className="mt-3 hover:bg-mainBlue w-fit hover:text-white text-[14px] text-ash hover:py-2 hover:px-4 hover:rounded-md font-sans"
          >
            {list5?.name}
          </p>
        </div>
      )}
    </div>
  );
};
