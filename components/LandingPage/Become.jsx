import { useState } from "react";
import ContainerLayout from "../../layouts/ContainerLayout"
import Image from "next/image";
import happy from "../../assets/png/happy-girl.png"


import { useRouter } from "next/router";
const initialValues = {
  name: "", 
  email: "", 
  gender: "male", 
  age: "", 
  phonenumber: "", 
  academicLevel: "",
  school: "",
  linkedIn: "",
  twitter: "",
  pastVolunteeredAt: "",
  agreeToTerms: false
};

const Become = () => {
  const [open, setOpen] = useState(false);
  const router = useRouter();
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
              className="bg-[#4747D6] text-white text-base py-[10px] px-5 rounded-[30px] font-bold mt-8 w-fit border-none outline-none"
              onClick={() => setOpen(!open)}
            >
              Apply now
            </button>
          </div>
        </div>
      </div>
     
    </ContainerLayout>
  );
}

export default Become
