import React from 'react'
import ContainerLayout from '../../layouts/ContainerLayout'
import Image from 'next/image'
import heroImage from "../../assets/png/hero-image.png";
import Navbar from './Navbar'
import { Apple, Google } from '../../assets/svg';
const Hero = ({active}) => {
  return (
    <div className="flex flex-col w-full hero-bg min-h-[70vh] pb-12">
      <Navbar active={active} />
      <ContainerLayout>
        <div className="w-full flex lg:flex-row flex-col items-center space-x-0 lg:space-x-16 mt-12">
          <div
            className="w-full lg:w-1/2 flex flex-col mt-20 lg:mt-0"
            data-aos="fade-up"
            data-aos-duration="2000"
          >
            <h1 className="text-[32px] lg:text-[64px] font-bold text-white w-11/12 lg:w-11/12">
              Data Collection Made Easy
            </h1>

            <p className="text-base lg:text-xl leading-9 text-white mt-3">
              Leverage advanced data-collecting technology and numerous field
              agents to access and track data for various projects.
            </p>
            <div className=" lg:flex flex-col hidden">
              <p className="text-white font-bold text-2xl mt-8">COMING SOON</p>
              <div className="flex items-center mt-4 space-x-4">
                <Google />
                <Apple />
              </div>
            </div>
          </div>
          <div className="w-full lg:w-1/2 justify-end flex">
            <div className="w-full flex flex-col">

            <Image
              src={heroImage}
              alt="here"
              className="w-11/12 mt-12 h-auto"
              data-aos="zoom-in"
              data-aos-duration="2000"
              />
            <div className="flex flex-col lg:hidden">
              <p className="text-white font-bold text-2xl mt-8">COMING SOON</p>
              <div className="flex items-center mt-4 space-x-4">
                <Google />
                <Apple />
              </div>
              </div>
            </div>
          </div>
        </div>
      </ContainerLayout>
    </div>
  );
}

export default Hero