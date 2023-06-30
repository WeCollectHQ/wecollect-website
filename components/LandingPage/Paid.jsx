import React from 'react'
import ContainerLayout from '../../layouts/ContainerLayout'
import Image from 'next/image'
import task from "../../assets/png/tasks.png";
import wallet from "../../assets/png/wallet.png";
import steps from "../../assets/svg/steps.svg"
const Paid = () => {
    return (
      <div className="w-full paid-bg lg:pt-[105px] pb-7 mt-28">
        <ContainerLayout>
          <div className="w-full flex flex-col">
            {/* section one */}
            <div
              className="w-full flex lg:flex-row flex-col-reverse   lg:space-x-12
          "
            >
              <div className="w-full lg:w-1/2 mt-8 lg:mt-0 ">
                <Image
                  src={wallet}
                  alt="wallet"
                  className="w-full lg:w-6/12 h-auto"
                  data-aos="zoom-in"
                  data-aos-duration="2000"
                />
              </div>
              <div className="w-full lg:w-1/2 flex flex-col justify-center ">
                <h2
                  className="font-bold text-mainBlue lg:text-[70px] lg:text-start text-center text-2xl leading-9 lg:leading-[85px]"
                  data-aos="fade-up"
                  data-aos-duration="2000"
                >
                  Get Paid
                </h2>
                <h2
                  className="font-bold text-mainBlue lg:text-[70px] lg:text-start text-center text-2xl leading-9 lg:leading-[85px] "
                  data-aos="fade-up"
                  data-aos-duration="2000"
                >
                  Collecting Data
                </h2>
                <p
                  className="text-customBlack lg:text-[25px] text-center lg:text-start px-3  text-[15px] mt-2 lg:mt-7"
                  data-aos="fade-up"
                  data-aos-duration="2000"
                >
                  Work as an Agent, collect data, and get paid.
                </p>
              </div>
            </div>
            {/* section two */}
            <div className="w-full flex flex-col lg:flex-row mt-4 lg:space-x-12">
              <div className="w-full lg:w-1/2 flex flex-col justify-center">
                <p className='lg:text-[40px] text-2xl text-center lg:text-start
                 font-bold text-customBlack mb-8 '>Get Started In 3 Easy Steps</p>
                <Image
                  src={steps}
                  alt="wallet"
                  className="w-7/12 h-auto mb-10 lg:mb-0"
                  data-aos="fade-up"
                  data-aos-duration="2000"
                />
              </div>
              <div className="w-full lg:w-1/2 flex justify-end">
                <Image
                  src={task}
                  alt="wallet"
                  className="w-full lg:w-6/12 h-auto"
                  data-aos="zoom-in"
                  data-aos-duration="2000"
                />
              </div>
            </div>
          </div>
        </ContainerLayout>
      </div>
    );
}

export default Paid