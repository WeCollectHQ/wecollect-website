import React from "react";
import ContainerLayout from "../../layouts/ContainerLayout";
import Image from "next/image";
import Link from "next/link";

import logo from "../../assets/svg/latest-logo.svg";
import facebook from "../../assets/svg/facebook.svg";
import instagram from "../../assets/svg/instagram.svg";
import twitter from "../../assets/svg/twitter.svg";
import linkedin from "../../assets/svg/linkedin.svg";
import youtube from "../../assets/svg/youtube.svg";
import googleIcon from "../../assets/svg/playstore.svg";
import appleIcon from "../../assets/svg/applestore.svg";
import copy from "../../assets/svg/copy.svg";
import FooterFaq from "../LandingPage/FooterFaq";
import { useRouter } from "next/router";
const NewFooter = () => {
  const router = useRouter();
  return (
    <div
      className="w-full flex flex-col bg-[#F9F6FF] pt-8 flow-hide"
      data-aos="fade-up"
      data-aos-duration="1000"
    >
      {/* upper session */}
      <div className="w-full  pt-5 md:pt-0 ">
        <ContainerLayout>
          <div className="w-full flex lg:mt-[55px] md:flex-row flex-col border-b-[#999] border-b-[2px] border-opacity-30 pb-20 flow-hide">
            {/* first session */}
            <div className="w-full md:w-4/12 flex flex-col">
              <Image
                src={logo}
                width={logo.width}
                height={logo.height}
                alt="image"
                className="m-auto md:m-0 cursor-pointer"
                onClick={() => router.push("/")}
                // data-aos="fade-up"
                // data-aos-duration="1000"
              />
              <div
                className="flex flex-col md:w-8/12 2xl:w-6/12"
                // data-aos="fade-up"
                // data-aos-duration="600"
                // data-aos-delay="600"
              >
                <div className="flex justify-center md:justify-between items-center mt-[26px] gap-x-4 w-full">
                  <Link
                    href="https://web.facebook.com/Wecollectintel"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="cursor-pointer"
                  >
                    <Image
                      src={facebook}
                      alt="facebook"
                      width={facebook.width}
                      height={facebook.height}
                    />
                  </Link>
                  <Link
                    href="https://twitter.com/Wecollectdata"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="cursor-pointer"
                  >
                    <Image
                      src={twitter}
                      alt="facebook"
                      width={twitter.width}
                      height={twitter.height}
                    />
                  </Link>
                  <Link
                    href="https://www.linkedin.com/company/wecollect-tech/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="cursor-pointer"
                  >
                    <Image
                      src={linkedin}
                      alt="facebook"
                      width={linkedin.width}
                      height={linkedin.height}
                    />
                  </Link>
                  <Link
                    href="https://www.instagram.com/wecollect_data/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="cursor-pointer"
                  >
                    <Image
                      src={instagram}
                      alt="facebook"
                      width={instagram.width}
                      height={instagram.height}
                    />
                  </Link>
                  <Link
                    href="https://www.youtube.com/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="cursor-pointer"
                  >
                    <Image
                      src={youtube}
                      alt="facebook"
                      width={youtube.width}
                      height={youtube.height}
                    />
                  </Link>
                </div>
                <p className="text-ash font-bold text-[16px] mt-12 text-center mx-auto lg:mx-0 lg:text-start font-sans">
                  Download App
                </p>
                <div className="flex items-center gap-4 mt-2 justify-center lg:justify-start ">
                  <Link href="/">
                    <Image
                      src={googleIcon}
                      width={googleIcon.width}
                      height={googleIcon.height}
                    />
                  </Link>
                  <Link href="/">
                    <Image
                      src={appleIcon}
                      width={appleIcon.width}
                      height={appleIcon.height}
                    />
                  </Link>
                </div>
              </div>
            </div>

            <FooterFaq />

            {/* other session */}
            <div className="w-full md:w-8/12 md:grid grid-cols-2 gap-y-4 md:gap-y-0 pb-12 md:pb-0 lg:grid-cols-4 mt-16 md:mt-0 hidden">
              {/* ################3 start of a park */}
              <div className="flex flex-col space-y-6">
                <h1
                  className="text-ash sat-bold  text-[16px] font-bold font-sans"
                  // data-aos="fade-up"
                  // data-aos-duration="600"
                  // data-aos-delay="600"
                >
                  WeCollect
                </h1>
                <Link
                  href="/innovations"
                  className="text-ash sat-regular  text-[16px] font-medium mt-[12px] font-sans"
                  // data-aos="fade-up"
                  // data-aos-duration="1000"
                  // data-aos-delay="900"
                >
                  Products
                </Link>
                <Link
                  href="/our-project"
                  className="text-ash sat-regular  text-[16px] font-medium mt-[12px] font-sans"
                  // data-aos="fade-up"
                  // data-aos-duration="1000"
                  // data-aos-delay="1300"
                >
                  Projects
                </Link>
                <Link
                  href="/applicable-cases"
                  className="text-ash sat-regular  text-[16px] font-medium mt-[12px] font-sans"
                  // data-aos="fade-up"
                  // data-aos-duration="1000"
                  // data-aos-delay="1600"
                >
                  Use cases
                </Link>
                <Link
                  href="/blog"
                  className="text-ash sat-regular  text-[16px] font-medium mt-[12px] font-sans"
                  // data-aos="fade-up"
                  // data-aos-duration="1000"
                  // data-aos-delay="2100"
                >
                  Blog
                </Link>
                <Link
                  href="/contact-us"
                  className="text-ash sat-regular  text-[16px] font-medium mt-[12px] font-sans"
                  // data-aos="fade-up"
                  // data-aos-duration="1000"
                  // data-aos-delay="2400"
                >
                  Contact Us
                </Link>
                <Link
                  href="/faq"
                  className="text-ash sat-regular  text-[16px] font-medium mt-[12px] font-sans"
                  // data-aos="fade-up"
                  // data-aos-duration="1000"
                  // data-aos-delay="2400"
                >
                  FAQ
                </Link>
                <Link
                  href="/request"
                  className="text-ash sat-regular  text-[16px] font-medium mt-[12px] font-sans"
                  // data-aos="fade-up"
                  // data-aos-duration="1000"
                  // data-aos-delay="2400"
                >
                  Data Request Form
                </Link>
              </div>
              {/* end of a pack */}
              {/* ################3 start of a park */}
              <div className="flex flex-col space-y-6">
                <h1
                  className="text-ash sat-bold  text-[16px] font-bold font-sans"
                  // data-aos="fade-up"
                  // data-aos-duration="1000"
                  // data-aos-delay="2400"
                >
                  Legality
                </h1>
                <Link
                  href="/privacy-policy"
                  className="text-ash sat-regular  text-[16px] font-medium mt-[12px] font-sans"
                  // data-aos="fade-up"
                  // data-aos-duration="1000"
                  // data-aos-delay="2600"
                >
                  Privacy Policy
                </Link>
                <Link
                  href="/term-of-use"
                  className="text-ash sat-regular  text-[16px] font-medium mt-[12px] font-sans"
                  // data-aos="fade-up"
                  // data-aos-duration="1000"
                  // data-aos-delay="2800"
                >
                  Terms of use
                </Link>
                <Link
                  href="/cookie-policy"
                  className="text-ash sat-regular  text-[16px] font-medium mt-[12px] font-sans"
                  // data-aos="fade-up"
                  // data-aos-duration="1000"
                  // data-aos-delay="3000"
                >
                  Cookie Policy
                </Link>
              </div>
              {/* end of a pack */}
              {/* ################3 start of a park */}
              <div className="flex flex-col space-y-6">
                <h1
                  className="text-ash sat-bold  text-[16px] font-bold font-sans"
                  // data-aos="fade-up"
                  // data-aos-duration="1000"
                  // data-aos-delay="2000"
                >
                  Products
                </h1>
                <Link
                  href="/innovations#app"
                  // target="_blank"
                  className="text-ash sat-regular  text-[16px] font-medium mt-[12px] font-sans"
                  // data-aos="fade-up"
                  // data-aos-duration="1000"
                  // data-aos-delay="2400"
                >
                  Delineation app
                </Link>
                <Link
                  href="/innovations#dashboard"
                  className="text-ash sat-regular  text-[16px] font-medium mt-[12px] font-sans"
                  // data-aos="fade-up"
                  // data-aos-duration="1000"
                  // data-aos-delay="2700"
                >
                  Project Management Tool
                </Link>
                <Link
                  href="/coming-soon"
                  className="text-ash sat-regular  text-[16px] font-medium mt-[12px] font-sans"
                  // data-aos="fade-up"
                  // data-aos-duration="1000"
                  // data-aos-delay="2700"
                >
                  WeCollect Learning
                </Link>
              </div>
              {/* end of a pack */}
              {/* ################3 start of a park */}
              <div className="flex flex-col space-y-6">
                <h1
                  className="text-ash sat-bold  text-[16px] font-bold font-sans"
                  // data-aos="fade-up"
                  // data-aos-duration="1000"
                  // data-aos-delay="2100"
                >
                  Features
                </h1>
                <Link
                  href="/gis-systems"
                  //   target="_blank"
                  //   rel="noopener noreferrer"
                  className="text-ash sat-regular  text-[16px] font-medium mt-[12px] font-sans"
                  // data-aos="fade-up"
                  // data-aos-duration="1000"
                  // data-aos-delay="2300"
                >
                  GPS coordinates
                </Link>
                <Link
                  href="/smart-data-collection"
                  // target="_blank"
                  // rel="noopener noreferrer"
                  className="text-ash sat-regular  text-[16px] font-medium mt-[12px] font-sans"
                  // data-aos="fade-up"
                  // data-aos-duration="1000"
                  // data-aos-delay="2500"
                >
                  Smart data collection
                </Link>
                <Link
                  href="/secure-cloud-storage"
                  // target="_blank"
                  // rel="noopener noreferrer"
                  className="text-ash sat-regular  text-[16px] font-medium mt-[12px] font-sans"
                  // data-aos="fade-up"
                  // data-aos-duration="1000"
                  // data-aos-delay="2700"
                >
                  Secure cloud storage
                </Link>
              </div>
              {/* end of a pack */}
            </div>
          </div>
        </ContainerLayout>
      </div>

      {/* lower session */}

      <div className="flex  justify-center items-center gap-2 my-8 ">
        <Image src={copy} width={copy.width} height={copy.height} alt="copy" />

        <p className="text-[#1B213E] text-[18px] sat-regular font-sans ">
          All rights reserved, WeCollect, 2024
        </p>
      </div>
    </div>
  );
};

export default NewFooter;
