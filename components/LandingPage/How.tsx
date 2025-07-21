import React from "react";
import ContainerLayout from "../../layouts/ContainerLayout";

function How() {
  return (
    <ContainerLayout>
      <div
        className="w-full flex flex-col flow-hide"
        // data-aos="fade-up"
        // data-aos-duration="1000"
      >
        <p
          className="text-customBlack font-serif text-[20px] lg:text-2xl 2xl:text-[32px] font-semibold mt-20 2xl:mt-32 text-center"
          // data-aos="fade-up"
          // data-aos-duration="1000"
        >
          HOW IT WORKS
        </p>

        <p
          className="text-[#555555] font-sans text-[14px] 2xl:text-[18px] font-medium mt-[10px] text-center"
          // data-aos="fade-up"
          // data-aos-duration="1000"
        >
          See how WeCollect allows you to access data faster, safer and reliably
        </p>
      </div>
    </ContainerLayout>
  );
}

export default How;
