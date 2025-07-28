import React, { useState } from "react";
import logo from "../../assets/svg/latest-logo.svg";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import { Bars, CloseIcon } from "../../assets/svg";
import { ArrowDown } from "../../assets/svg";
import GetAQuoteArrow from "../../assets/svg/get-a-quote-arrow.svg";

const styles = {
  active: "",
  nonactive: "",
};

const MobileNav = ({ present }) => {
  const [show, setShow] = useState(false);
  const [showAbout, setShowAbout] = useState(false);
  const [showProduct, setShowProduct] = useState(false);
  const router = useRouter();
  return (
    <div>
      <div className="w-full bg-white  fixed top-0 z-high left-0 right-0 flex flex-col lg:hidden overflow-x-hidden ">
        <div className="w-full flex items-center justify-between px-4 h-[65px]">
          <Link href="/">
            <Image src={logo} alt="logo" />
          </Link>

          <div className="w-fit" onClick={() => setShow(!show)}>
            {show ? (
              <span>
                {" "}
                <CloseIcon />{" "}
              </span>
            ) : (
              <span>
                {" "}
                <Bars />{" "}
              </span>
            )}
          </div>
        </div>

        {show && (
          <div className="bg-white w-full flex flex-col items-center z-100 transition-all duration-1000 delay-1000 h-screen relative ">
            <div className="flex flex-col w-full px-4 mt-[45px]">
              {/* <div className="w-full py-6 " onClick={() => setShow(false)}>
                <Link
                  href="/home"
                  className="text-ash font-sans text-[16px] font-semibold "
                >
                  About
                </Link>
              </div> */}

              <div
                className="w-full py-6 flex items-center gap-2 "
                onClick={() => setShowAbout(!showAbout)}
              >
                <p className=" text-[16px] font-semibold text-ash font-sans">
                  About
                </p>
                <span>
                  <ArrowDown />
                </span>
              </div>

              {showAbout && (
                <div className="flex flex-col gap-4 ">
                  <Link
                    href="/our-project"
                    className="text-ash font-sans text-[16px] "
                  >
                    Projects
                  </Link>
                  <Link
                    href="/applicable-cases"
                    className="text-ash font-sans text-[16px] "
                  >
                    Applicable Cases
                  </Link>
                  <Link
                    href="/blog"
                    className="text-ash font-sans text-[16px] "
                  >
                    Blog
                  </Link>
                  <Link
                    href="/download"
                    className="text-ash font-sans text-[16px] "
                  >
                    Download
                  </Link>
                </div>
              )}
              <div
                className="w-full py-6 flex items-center gap-2"
                onClick={() => setShowProduct(!showProduct)}
              >
                <p className=" text-[16px] font-semibold text-ash font-sans">
                  Products
                </p>
                <span>
                  <ArrowDown />
                </span>
              </div>

              {showProduct && (
                <div className="flex flex-col gap-4 ">
                  <Link
                    href="/innovations#app"
                    className="text-ash font-sans text-[16px] "
                  >
                    Smart Data Collection App
                  </Link>
                  <Link
                    href="/innovations#dashboard"
                    className="text-ash font-sans text-[16px] "
                  >
                    Project Management Tool
                  </Link>
                </div>
              )}
              {/* <div className="w-full py-6 " onClick={() => setShow(false)}>
                <Link
                  href="/contact-us"
                  className="text-ash font-sans text-[16px] font-semibold "
                >
                  Contact Us
                </Link>
              </div> */}
              <div className="w-full py-6 " onClick={() => setShow(false)}>
                <Link
                  href="/contact-us"
                  className="text-ash font-sans text-[16px] font-semibold "
                >
                  Use Cases
                </Link>
              </div>
              <div className="w-full py-6 " onClick={() => setShow(false)}>
                <Link
                  href="/contact-us"
                  className="text-ash font-sans text-[16px] font-semibold "
                >
                  Projects
                </Link>
              </div>
              <div className="w-full py-6 " onClick={() => setShow(false)}>
                <Link
                  href="/contact-us"
                  className="text-ash font-sans text-[16px] font-semibold "
                >
                  Downloads
                </Link>
              </div>

              <div className="w-full flex flex-col space-y-5 absolute bottom-20">
                <hr className="w-full border border-gray-300" />
                <button
                  className="bg-mainBlue hover:bg-[#E3D5FF] w-[150px] h-[50px] font-medium flex items-center text-white hover:text-mainBlue rounded-[50px] px-5 cursor-pointer"
                  onClick={() => setOpen(true)}
                >
                  <div className="bg-[#fff] rounded-full p-1 mr-2">
                    <Image src={GetAQuoteArrow} alt="" />
                  </div>
                  Get a Quote
                </button>
                {/* <button className="bg-[#4747D6] w-full max-w-fit px-5 rounded-[50px] hero-btn flex justify-center items-center h-[47px]  text-white bg-primary font-semibold font-sans">
                  Get Started
                </button> */}
                <button className="flex justify-center items-center w-[100px] h-[47px] px-5 rounded-[50px]  text-mainBlue bg-white hero-btn font-sans font-semibold border-primary ">
                  Sign In
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default MobileNav;
