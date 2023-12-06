import { useState } from "react";
import ContainerLayout from "../../layouts/ContainerLayout"
import Image from "next/image";
import happy from "../../assets/png/happy-girl.png"
import ReuseModal from "../../components/modals/ReuseModal"
import { Cancel } from "../../assets/svg";
const Become = () => {
  const [open, setOpen] = useState(true);
  return (
    <ContainerLayout>
      <div className="flex flex-col relative mt-[120px]  ">
        <div className="w-full bg-[#4747d626] min-h-[200px] h-full rounded-[30px] hidden lg:grid grid-cols-2 my-12 overflow-x-hidden  ">
          <div className="w-full lg:pl-12 xl:pl-[60px] flex flex-col pt-[10px] pb-5">
            <h1 className="max-w-[639px] text-[#333] font-bold text-[40px]">
              Become WeCollect campus ambasador
            </h1>
            <button
              className="bg-[#4747D6] text-white text-xl py-[10px] px-5 rounded-[30px] font-bold mt-8 w-fit"
              onClick={() => setOpen(!open)}
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
        <div className="absolute  right-[70px] top-[-70px] hidden lg:flex">
          <Image src={happy} alt="happy" className="h-[349px]" />
        </div>
        {/* mobile session */}
        <div className="flex flex-col lg:hidden bg-[#4747d626] rounded-[30px] mt-[32px] mb-[74px]">
          <div className="absolute  right-0 left-0 top-[-110px] flex lg:hidden justify-center">
            <Image src={happy} alt="happy" className="h-[256px] w-auto" />
          </div>
          <div className="h-[160px] w-full overflow-y-hidden ">
            <div className="bg-[#333] w-full h-[180px] -mt-16 rounded-[200px]"></div>
          </div>
          <div className="flex flex-col pt-4 pb-11 px-4">
            <h1 className=" text-[#333] font-bold text-2xl">
              Become WeCollect campus ambasador
            </h1>
            <button
              className="bg-[#4747D6] text-white text-base py-[10px] px-5 rounded-[30px] font-bold mt-8 w-fit"
              onClick={() => setOpen(!open)}
            >
              Apply now
            </button>
          </div>
        </div>
      </div>
      <ReuseModal open={open} setOpen={setOpen}>
        <div className="w-full bg-white">
          <div className="flex justify-end ">
            <span>
              <Cancel />
            </span>
          </div>
          <div className="w-full flex flex-col xl:w-10/12 mx-auto text-[#333]">
            <h1 className="lg:text-[36px] text-[#333] font-bold text-xl">
              Campus ambassador registration
            </h1>
            {/* box session */}
            <div className="w-full bg-[#EDEDFB] flex flex-col py-5 rounded-[10px] mt-4 px-8 lg:px-12">
              <h1 className="text-sm lg:text-base text-[#333] font-semibold lg:-ml-4 mb-[14px]">
                Before you continue, kindly make sure that you,
              </h1>
              <ul className="list-disc flex flex-col space-y-[10px] font-[500] ">
                <li className="text-sm lg:text-base">
                  Lorem ipsum dolor sit amet consectetur. Magna porttitor diam.
                </li>
                <li className="text-sm lg:text-base">
                  Lorem ipsum dolor sit amet consectetur. Magna porttitor diam.
                </li>
                <li className="text-sm lg:text-base">
                  Lorem ipsum dolor sit amet consectetur. Magna porttitor diam.
                </li>
              </ul>
            </div>
            {/* end of box session */}
            {/* form session */}
            <div className="mt-10 lg:mt-14 flex flex-col space-y-[25px]">
              {/* single input */}
              <div className="flex flex-col">
                <label className="text-[#333] text-sm lg:text-base font-semibold">
                  Full name
                </label>
                <input
                  type="text"
                  className="w-full h-[42px] rounded-[8px] border border-[#333] border-opacity-30 px-3  lg:px-5 outline-none focus:outline-none placeholder:text-sm lg:placeholder:text-base placeholder:text-[#999] font-medium mt-2"
                  placeholder="enter full name"
                />
              </div>
              {/* end of single input */}
              {/* single input */}
              <div className="flex flex-col">
                <label className="text-[#333] text-sm lg:text-base font-semibold">
                  Campus(institutions)
                </label>
                <select
                  id="myDropdown"
                  className="mt-1 block w-full py-2 px-3 border  bg-white rounded-md shadow-sm focus:outline-none   focus:border-[#333] border-opacity-30 sm:text-sm "
                >
                  <option value="option1">Option 1</option>
                  <option value="option2">Option 2</option>
                  <option value="option3">Option 3</option>
                </select>
              </div>
              {/* end of single input */}
              {/* single input */}
              <div className="flex flex-col">
                <label className="text-[#333] text-sm lg:text-base font-semibold">
                  Departmemt
                </label>
                <select
                  id="myDropdown"
                  className="mt-1 block w-full py-2 px-3 border  bg-white rounded-md shadow-sm focus:outline-none   focus:border-[#333] border-opacity-30 sm:text-sm "
                >
                  <option value="option1">Option 1</option>
                  <option value="option2">Option 2</option>
                  <option value="option3">Option 3</option>
                </select>
              </div>
              {/* end of single input */}
              {/* single input */}
              <div className="flex flex-col">
                <label className="text-[#333] text-sm lg:text-base font-semibold">
                  Email Address
                </label>
                <input
                  type="email"
                  required
                  className="w-full h-[42px] rounded-[8px] border border-[#333] border-opacity-30 px-3  lg:px-5 outline-none focus:outline-none placeholder:text-sm lg:placeholder:text-base placeholder:text-[#999] font-medium mt-2"
                  placeholder="enter email"
                />
              </div>
              {/* end of single input */}
              {/* single input */}
              <div className="flex flex-col">
                <label className="text-[#333] text-sm lg:text-base font-semibold">
                  Phone number
                </label>
                <input
                  type="tel"
                  className="w-full h-[42px] rounded-[8px] border border-[#333] border-opacity-30 px-3  lg:px-5 outline-none focus:outline-none placeholder:text-sm lg:placeholder:text-base placeholder:text-[#999] font-medium mt-2"
                  placeholder="enter phone number"
                />
              </div>
              {/* end of single input */}
              <div className="flex space-x-4 items-center">
                <input type="checkbox" className="w-8 h-8" name="check" id="" />
                <p className="text-[#001A25]">
                  I agree to terms and conditions
                </p>
              </div>
              <button className="w-full bg-[#4747D6] rounded-[30px] py-[10px] px-5 mt-10 flex items-center justify-center text-white font-semibold">
Submit
              </button>
            </div>
            {/* end of form session */}
          </div>
        </div>
      </ReuseModal>
    </ContainerLayout>
  );
}

export default Become
