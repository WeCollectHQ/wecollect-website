import { useState, useEffect } from "react";
import ContainerLayout from "../../layouts/ContainerLayout";
import Link from "next/link";
const Featured = () => {
  const [show, setShow] = useState(true);
  useEffect(() => {
    setTimeout(() => {
      setShow(!show);
    }, 4000);
  }, [show]);

  return (
    <ContainerLayout>
      <div className="w-full overflow-x-hidden bg-feat  lg:flex overflow-y-hidden space-x-4 justify-between hidden  ">
        <div className="w-4/12 relative">
          <div className="absolute top-[75px] left-[50px] z-50">
            <h1 className="text-white text-[40px] font-bold">Featured:</h1>
          </div>
          <div className="w-[500px] h-[200px] -ml-12 skewy  bg-[#4747D6] "></div>
        </div>
        <div className="w-7/12 flex flex-col justify-center h-full ">
          {show ? (
            <h1 className="max-w-[639px] text-[#333] font-bold text-[40px] font-serif">
              Food Price Monitoring Project in Nigeria
            </h1>
          ) : (
            <p className=" text-[20px] text-[#333] font-semibold font-sans">
              Tracking the availability of food in Nigeria using a data driven
              price model in line with the UN SD4
            </p>
          )}

          <Link
            href="https://fpmpn.wecollect.tech"
            target="_blank"
            className="bg-[#4747D6] text-white text-xl py-[10px] px-5 rounded-[30px] mt-1 w-fit font-sans"
          >
            Learn more
          </Link>
        </div>
      </div>
      <div className="hidden lg:hidden bg-feat-2  flex-col overflow-x-hidden overflow-y-hidden ">
        <div className="w-full h-[71px] relative">
          <div className="w-[348px] h-[71px] -ml-8 skewy  bg-[#4747D6] "></div>
          <div className="flex absolute top-0 bottom-0 right-0 left-0 items-center justify-center">
            <h1 className=" text-white text-2xl font-bold font-sans">
              Featured:
            </h1>
          </div>
        </div>
        <div className="flex flex-col h-[256px] justify-center px-5">
          {show ? (
            <h1 className=" text-[#333] font-bold text-2xl font-serif">
              Food Price Monitoring Project in Nigeria
            </h1>
          ) : (
            <p className=" text-[15px] text-[#333] font-semibold font-sans">
              Tracking the availability of food in Nigeria using a data driven
              price model in line with the UN SD4
            </p>
          )}

          <Link
            href="https://fpmpn.wecollect.tech/"
            target="_blank"
            className="bg-[#4747D6] text-white text-[16px] py-[10px] px-5 rounded-[30px] mt-4 w-fit font-sans"
          >
            Learn more
          </Link>
        </div>
      </div>
      <div className="w-full feat-bg relative h-[280px] border rounded-[30px] border-[#F6F1FF] lg:hidden flex">
        <div className="flex flex-col h-[256px] justify-center px-5 absolute top-10">
          {show ? (
            <h1 className=" text-[#333] font-bold text-2xl font-sans">
              Food Price Monitoring Project in Nigeria
            </h1>
          ) : (
            <p className=" text-[15px] text-[#333] font-semibold leading-[25px] font-sans">
              Tracking the availability of food in Nigeria using a data driven
              price model in line with the UN SD4
            </p>
          )}

          <Link
            href="https://fpmpn.wecollect.tech/"
            target="_blank"
            className="bg-[#4747D6] text-white text-[16px] py-[10px] px-5 rounded-[30px] mt-4 w-fit font-sans"
          >
            Learn more
          </Link>
        </div>
      </div>
    </ContainerLayout>
  );
};

export default Featured;
