import React from 'react'
import ContainerLayout from '../../layouts/ContainerLayout'
import Image from 'next/image';
import phone from "../../assets/png/journey-image.png";
import spiral from "../../assets/png/spiral-curve.png";
import Link from 'next/link';
import blueright from "../../assets/svg/blueright.svg";
const DataJourney = () => {
  return (
    <div className="w-full relative overflow-x-hidden overflow-y-hidden py-40">
      <div className="absolute top-0 left-[-100px] ">
        <Image
          src={spiral}
          alt="spiral"
          className="max-h-[1600px] hidden lg:flex"
        />
      </div>
      <ContainerLayout>
        <div className="w-full j-bg grid bg-opacity-75 grid-cols-1 lg:grid-cols-2 lg:px-[60px] lg:pt-[60px] rounded-[35px] px-5 pt-5 ">
          <div className="w-full flex flex-col justify-center">
            <h1 className="2xl:text-[44px] lg:text-[36px] text-3xl font-bold text-customBlack leading-[50px]  xl:leading-[65px] font-serif">
              Your <span className="text-ash">Data</span>
              <br />
              <span className="text-ash">Journey</span>
              <br />
              Begins <span className="text-ash">Here</span>
            </h1>
            <div className="w-fit mt-12">
              <Link
                href="https://demo.wecollect.tech"
                target="_blank"
                className="bg-[#FFFFFF] font-sans  hover:bg-[#E3D5FF]  w-[197px]  h-[50px] flex justify-start pl-[10px] items-center text-mainBlue rounded-[50px] hero-btn cursor-pointer my-5 md:my-0 font-semibold  "
              >
                <Image src={blueright} alt="blueright" className="mr-[10px]" />
                Book a demo
              </Link>
            </div>
          </div>
          {/* end of a section */}
          <div className="w-full">
            <Image
              src={phone}
              alt="phone"
              className="w-auto h-auto object-contain"
            />
          </div>
        </div>
      </ContainerLayout>
    </div>
  );
}

export default DataJourney
