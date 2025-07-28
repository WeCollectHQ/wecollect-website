import React from "react";
import MobileNav from "../navbar/mobile-nav";
import NewNavbar from "../navbar/new-navbar";
import ContainerLayout from "../../layouts/ContainerLayout";
import Image from "next/image";
import trademark from "../../assets/svg/trade-mark.svg";
import Link from "next/link";
import blueright from "../../assets/svg/blueright.svg";
import HeroPhoto from "../../assets/png/new-hero-image.png";
import HeroBg from "../../assets/png/new-hero-bg.png";
import StarIcon from "../../assets/svg/star.svg";
import GetAQuoteArrow from "../../assets/svg/get-a-quote-arrow.svg";
import BookDemo from "../../assets/svg/book-a-demo.svg";
import GoupAgents from "../../assets/svg/group-agents.svg";
import YellowStar from "../../assets/svg/yellow-star.svg";

const NewHomeHero = () => {
  return (
    <div
      className="bg-red-900 new-hero-b w-full h-full flex flex-col min-h-screen flow-hide bg-cover bg-center bg-no-repeat shadow-4xl pt-5 shadow-slate-500"
      style={{ backgroundImage: `url(${HeroBg.src})` }}
    >
      <NewNavbar />
      <MobileNav present={1} />
      {/* content */}
      <ContainerLayout>
        <div className="w-full flex flex-col mt-32 lg:mt-32 flow-hide ">
          <div className="m-auto bg-[#F3F3FF] shadow-xl rounded-[50px] py-2 px-3 flex justify-center mb-6 border-2 border-[#FFFFFF]">
            <Image src={StarIcon} alt="" />
            <p className="text-[#1E1E5A] text-base font-medium pl-2">
              Effortless field project management
            </p>
          </div>

          <h1 className="md:inline-flex hidden text-[64px] text-center bg-[linear-gradient(89.2deg,_#151541_8.26%,_#00009A_99.38%)] bg-clip-text text-transparent tracking-widest font-black mx-auto">
            Your all-in-one Tool <br /> for Field Project Management
          </h1>

          <h1 className="font-serif md:hidden text-[24px] inline-flex text-center bg-[linear-gradient(89.2deg,_#151541_8.26%,_#00009A_99.38%)] bg-clip-text text-transparent tracking-widest font-black mx-auto">
            Your all-in-one Tool <br /> for Field Project Management
          </h1>

          <p className="text-[#1E1E5A] text-xs lg:text-2xl tracking-wider text-center mt-8 lg:mt-1 font-medium max-w-[768px] mx-auto">
            Collect field data, manage on-the-ground teams, and accelerate
            decisions across Africa
          </p>

          <div className="flex justify-center items-center mt-10">
            <Image
              src={GoupAgents}
              alt=""
              className="w-[60px] lg:w-[139px] h-[30px] lg:h-[61px]"
            />
            <p className="text-[#151540] text-[10px] lg:text-xl font-medium lg:ml-3 lg:mr-4">
              300+ field agents
            </p>
            <div className="w-px h-8 bg-[#9898B3] mx-1 lg:mx-4"></div>
            <Image
              src={YellowStar}
              alt=""
              className="w-4 left-4 lg:mr-3 lg:ml-4"
            />
            <p className="text-[#151540] text-[10px] lg:text-xl font-medium lg:ml-3 lg:mr-4">
              98% completion rate
            </p>
          </div>

          <div
            className="w-full h-auto flex flex-row items-center mt-8 lg:mt-6 gap-6 justify-between md:justify-center"
            // data-aos="fade-up"
            // data-aos-duration="1000"
            // data-aos-delay="1000"
            // data-aos-once="true"
          >
            <Link
              href="/request"
              className="bg-mainBlue hover:bg-[#E3D5FF] px-5 py-3 flex justify-center items-center text-white hover:text-mainBlue rounded-[50px]  cursor-pointer font-medium lg:font-semibold hero-btn text-[12px] 2xl:text-[16px] font-sans shadow-3xl"
            >
              <div className="bg-[#fff] rounded-full p-1 mr-3">
                <Image src={GetAQuoteArrow} alt="" />
              </div>
              Make A Data Request
            </Link>
            <Link
              href="https://demo.wecollect.tech"
              target="_blank"
              className="bg-[#FFFFFF] hover:bg-[#E3D5FF] px-5 py-3 flex justify-start pl-[10px] items-center text-mainBlue rounded-[50px] hero-btn cursor-pointer my-5 md:my-0 font-medium lg:font-semibold text-[12px] 2xl:text-[16px] font-sans shadow-3xl"
            >
              <Image src={BookDemo} alt="blueright" className="mr-[10px]" />
              Book a demo
            </Link>
          </div>
          <div className="w-full mt-[60px] lg:pb-0 lg:mt-40  hero-shado">
            <Image
              src={HeroPhoto}
              className="w-full md:w-10/12 mx-auto "
              alt="hero"
            />
          </div>
        </div>
      </ContainerLayout>
      {/* end of content time */}
    </div>
  );
};

export default NewHomeHero;
