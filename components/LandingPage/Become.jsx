import { useState } from "react";
import ContainerLayout from "../../layouts/ContainerLayout";
import Image from "next/image";
import happy from "../../assets/png/happy-girl.png";

import { useRouter } from "next/router";

const Become = () => {
  const [open, setOpen] = useState(false);
  const router = useRouter();
  return (
    <ContainerLayout>
      <div className="lg:flex flex-col relative  hidden ">
        <div className="w-full bg-[#4747d626] min-h-[200px] lg:min-h-[248px] h-full rounded-[30px] hidden lg:grid grid-cols-2 mt-12 overflow-x-hidden  ">
          <div className="w-full lg:pl-12 xl:pl-[60px] flex flex-col pt-[10px] pb-5">
            <h1 className="max-w-[639px] text-[#333] font-bold text-[40px] font-serif">
              Join WeCollect Campus Network
            </h1>
            <button
              className="bg-[#4747D6] text-white text-xl py-[10px] px-5 rounded-[30px] font-bold mt-8 w-fit font-sans"
              onClick={() => router.push("/ambassador")}
            >
              Apply now
            </button>
          </div>
          {/* second part */}
          <div className="w-full flex justify-end relative ">
            <div className="w-[555px]  h-full -mr-[100px] bg-[#333] rounded-[200px]"></div>
          </div>
          {/* end of second part */}
        </div>
        <div className="absolute  right-[70px] -top-[20px] hidden lg:flex">
          <Image
            src={happy}
            alt="happy"
            className="h-[315px] w-[302px] object-contain"
          />
        </div>
        {/* mobile session */}
        <div className="flex flex-col lg:hidden bg-[#4747d626] rounded-[30px] mt-[32px] ">
          <div className="absolute  right-0 left-0 top-[-10px] flex lg:hidden justify-center">
            <Image
              src={happy}
              alt="happy"
              className="w-[186px] h-[191px] mx-auto"
            />
          </div>
          <div className="h-[160px] w-full overflow-y-hidden ">
            <div className="bg-[#333] w-full h-[214px] -mt-16 rounded-[200px]"></div>
          </div>
          <div className="flex flex-col pt-4 pb-11 px-4">
            <h1 className=" text-[#333] font-bold text-2xl font-serif">
              Become WeCollect campus ambassador
            </h1>
            <button
              className="bg-[#4747D6] text-white text-[16px] py-[10px] px-5 font-sans rounded-[30px] font-bold mt-8 w-fit border-none outline-none"
              onClick={() => router.push("/ambassador")}
            >
              Apply now
            </button>
          </div>
        </div>
      </div>
      <div className="w-full become-bg lg:hidden h-[404px] relative rounded-b-[30px] ">
        <div className="flex flex-col pt-4 absolute bottom-8 px-4 ">
          <h1 className=" text-[#333] font-bold text-2xl font-serif">
            Become WeCollect campus ambassador
          </h1>
          <button
            className="bg-[#4747D6] text-white text-[16px] font-sans py-[10px] px-5 rounded-[30px] font-bold mt-8 w-fit border-none outline-none"
            onClick={() => router.push("/ambassador")}
          >
            Apply now
          </button>
        </div>
      </div>
    </ContainerLayout>
  );
};

export default Become;
