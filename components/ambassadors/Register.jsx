import React from "react";
import ContainerLayout from "../../layouts/ContainerLayout";
import FormSide from "./FormSide";
const list = [
  "Campus ambassadors are expected to be student from year one to year three.",
  "Regional ambassadors must be resident in selected region.",
  "Record of community engagement would increase your chances",
  "Age 14 - 28",
];

const Register = () => {
  return (
    <div className="w-full flex flex-col py-8 lg:py-[150px] lg:bg-[#f9f9f9] ">
      <ContainerLayout>
        <div className="w-full flex flex-col">
          <h1 className="text-[32px] 2xl:text-[64px] font-semibold text-[#4747D6] ">
            Let’s get you registered.
          </h1>
          <div className="mt-[50px] lg:mt-[132px] flex xl:space-x-10 xl:flex-row flex-col">
            <div className="w-full lg:w-1/2 flex flex-col bg-[#f9f9f9] lg:bg-white rounded-[20px] py-5  lg:py-[45px] px-4 lg:px-10 h-fit ">
              <h1 className="text-[#333] text-xl 2xl:text-[32px] lg:text-2xl font-bold leading-[50px]">
                Eligibility:
              </h1>
              <div className="flex flex-col space-y-5 mt-[10px]">
                {list?.map((item, index) => {
                  return (
                    <div
                      className="flex items-center space-x-3 lg:space-x-[19px]"
                      key={index}
                    >
                      <div className="w-4 flex ">
                        <span className="bg-[#4747D6] w-[10px] h-[10px] rounded-full" />
                      </div>
                      <p className="text-[#555] text-[14px] lg:text-[16px] font-medium">
                        {item}
                      </p>
                    </div>
                  );
                })}
              </div>
            </div>
            <div className="w-full lg:w-1/2  lg:mt-0">
              <FormSide />
            </div>
          </div>
        </div>
      </ContainerLayout>
    </div>
  );
};

export default Register;
