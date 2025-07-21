import { useState, useEffect } from "react";
import ContainerLayout from "../../layouts/ContainerLayout";
import Image from "next/image";
import heroImage from "../../assets/png/hero-image.png";
import Navbar from "../navbar/new-navbar";
import { Apple, Google } from "../../assets/svg";
import Modal from "../modals/Modal";
import successImg from "../../assets/svg/success.svg";
import { useRouter } from "next/router";
import { Cancel } from "../../assets/svg";
const Hero = ({ active }) => {
  const [open, setOpen] = useState(false);
  const router = useRouter();
  useEffect(() => {
    setTimeout(() => {
      setOpen(true);
    }, 20000);
  }, []);

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
            <h1 className="text-[32px] 2xl:text-[64px] font-bold text-white w-11/12 lg:w-11/12">
              Data Collection Made Easy
            </h1>

            <p className="text-[16px] lg:text-xl leading-9 text-white mt-3">
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
                <p className="text-white font-bold text-2xl mt-8">
                  COMING SOON
                </p>
                <div className="flex items-center mt-4 space-x-4">
                  <Google />
                  <Apple />
                </div>
              </div>
            </div>
          </div>
        </div>
      </ContainerLayout>
      <Modal open={open} setOpen={setOpen}>
        <div className="w-full flex flex-col lg:px-5">
          <div className="flex justify-end mb-3">
            <span className="cursor-pointer" onClick={() => setOpen(false)}>
              <Cancel />
            </span>
          </div>
          <h1 className="lg:text-2xl text-xl font-bold text-[#333]  max-w-[377px] mx-auto text-center leading-[36px]">
            Excited about how WeCollect is Automating Data Collection?
          </h1>
          <p className="text-[14px] lg:text-[16px] font-medium mt-4 text-center">
            Join the waitlist and be the first to know.
          </p>
          <div className="mt-3 flex justify-center my-2 mx-auto">
            <Image src={successImg} alt="success" />
          </div>
          <div className="flex  flex-col items-center space-y-1  w-full">
            <button
              className="bg-[#4747D6] max-w-[230px] font-bold text-xl text-white outline-none border-none w-full rounded-[30px] h-[41px] flex items-center justify-center"
              onClick={() => {
                router.push("#waitlist");
                setOpen(false);
              }}
            >
              Join Waitlist
            </button>
            <button
              className="h-[60px] text-[#4747D6] w-full max-w-[230px] text-xl font-bold cursor-pointer border-none outline-none"
              onClick={() => setOpen(false)}
            >
              Learn More
            </button>
          </div>
        </div>
      </Modal>
    </div>
  );
};

export default Hero;
