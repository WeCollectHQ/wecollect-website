import React from "react";
import ContainerLayout from "../../layouts/ContainerLayout";
import Image from "next/image";
import fpmp from "../../assets/png/fpmp-new.png";
import kaduna from "../../assets/png/kaduna.png";
import techpoint from "../../assets/svg/techpoint.svg";
import DotsBg from "../../assets/png/dots-bg-image.png";
import HowLeftIcon from "../../assets/svg/ri_settings-fill.svg";
import blueright from "../../assets/svg/blueright.svg";
import Quote from "../../assets/svg/quote.svg";
import GetAQuoteArrow from "../../assets/svg/get-a-quote-arrow.svg";
import DownloadBg from "../../assets/png/download-bg-image.png";
import DownlaodImage from "../../assets/png/download-image.png";
import DownloadQrCode from "../../assets/png/download-qr-code.png";
import GooglePlayStore from "../../assets/png/google-play.png";
import AppleStore from "../../assets/png/apple-store.png";
import Hr from "./Hr";

const testimonials = [
  {
    logo: techpoint,
    quote:
      "Overall, I'm very satisfied with the service. The only minor issue was that most respondents were concentrated in urban areas. Still, I'm very likely to recommend it.",
    name: "Yinka, CEO, Intelpoint",
    stars: 4.5,
  },
  {
    logo: fpmp,
    quote:
      "I was glad to see that I could use a one-stop software for my project, without having to worry about how to find field enumerators across Nigeria. WeCollect saved me the stress.",
    name: "Obi Mercy, PM, FPMPN",
    stars: 4.5,
  },
  {
    logo: kaduna,
    quote:
      "Lorem ipsum dolor sit amet consectetur. Velit venenatis erat diam diam in. Ut magna arcu odio egestas. Vulputate volutpat eu odio aliquam et rutrum aliquet libero. Elit commodo tincidunt.",
    name: "Ibrahim Kolapo, GIS Consultant",
    stars: 4.5,
  },
];

const Projects = () => {
  return (
    <div className="w-full flex flex-col bg-white rounded-t-[50px]">
      <ContainerLayout>
        <div className="relative w-full pt-20 pb-10 lg:pt-28 flex flex-col justify-center items-center">
          <Image
            src={DotsBg}
            alt="dots background"
            className="absolute top-0 left-1/2 -translate-x-1/2 z-0 max-w-[761px] w-auto"
          />
          <div className="flex justify-center mb-6 z-10">
            <div className="inline-flex bg-[#F3F3FF] shadow-xl rounded-[50px] py-2 px-3 border-2 border-white">
              <Image src={HowLeftIcon} alt="icon" />
              <p className="text-[#1E1E5A] text-base font-medium pl-2">
                Projects
              </p>
            </div>
          </div>
          <p className="bg-gradient-to-r from-[#151541] to-[#00009A] bg-clip-text text-transparent font-sans text-[24px] lg:text-[40px] font-black text-center lg:leading-[60px] z-10 relative">
            Proven Projects That Speak for Themselves
          </p>
          <div className="w-full grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8 mt-12 z-10">
            {testimonials.map((item, index) => (
              <div
                className="bg-[#F3F3FF] w-full h-[441px] rounded-[32px] pt-10 px-3 pb-3 mb-10"
                key={index}
              >
                <div className="bg-[#FFFF] rounded-[30px] px-6 pt-6 pb-10 shadow-md flex flex-col justify-between h-full relative">
                  <div className="absolute top-[-15px] right-[20px] w-[45px] h-[45px] bg-white rounded-full shadow flex items-center justify-center">
                    <Image src={Quote} alt="" />
                  </div>

                  <div className="flex items-center mb-4">
                    <Image
                      src={item.logo}
                      alt="logo"
                      className="w-[100px] h-auto"
                    />
                  </div>

                  <p className="text-[#1E1E5A] text-[14px] md:text-[16px] font-medium leading-[28px] mb-4">
                    {item.quote}
                  </p>

                  <div className="flex items-center gap-[2px] mb-2">
                    {[...Array(4)].map((_, i) => (
                      <span key={i} className="text-yellow-400 text-lg">
                        ★
                      </span>
                    ))}
                    <span className="text-yellow-400 text-lg">☆</span>
                  </div>
                  <p className="text-[#1E1E5A] text-[14px] font-semibold font-sans">
                    {item.name}
                  </p>
                </div>
              </div>
            ))}
          </div>
          {/* <button className="mt-12 bg-[#4747D6] hover:bg-[#3333b3] text-white text-sm font-medium px-6 py-3 rounded-full flex items-center gap-2">
            <Image src={blueright} alt="icon" className="w-4 h-4" />
            Try it for Free
          </button> */}
          <button className="bg-mainBlue hover:bg-[#E3D5FF] h-[50px] font-semibold flex items-center text-white hover:text-mainBlue rounded-[50px] px-5 cursor-pointer mt-10 mb-[100px]">
            <div className="bg-[#fff] rounded-full p-1 mr-3">
              <Image src={GetAQuoteArrow} alt="" />
            </div>
            Try it for Free
          </button>

          {/* Desktop */}
          <div
            className="hidden lg:block w-full h-[830px] lg:h-[700px] bg-cover bg-center bg-no-repeat mt-11 rounded-[32px] relative overflow-hidden"
            style={{ backgroundImage: `url(${DownloadBg.src})` }}
          >
            {/* Phone Image */}
            <Image
              src={DownlaodImage}
              alt="App preview"
              className="absolute bottom-0 lg:left-8 w-[400px] max-w-[90%] z-10"
            />

            {/* Text & CTAs */}
            <div className="absolute right-8 top-1/2 -translate-y-1/2 text-white w-full md:w-1/2 max-w-[500px] px-6 z-20">
              <p className="text-[#FFFFFF] text-[28px] lg:text-[36px] font-black leading-[1.2] mb-[110px] mt-20">
                Take the Field With You. <br />
                Download the App and <br />
                Start Reporting Smarter.
              </p>

              <p className="text-[#F3F3FF] text-[20px] font-medium mb-4">
                Download Now
              </p>

              <div className="flex items-center gap-4">
                <Image
                  src={DownloadQrCode}
                  alt="QR Code"
                  className="w-[120px] h-[120px]"
                />
                <div className="flex flex-col gap-4">
                  <Image
                    src={GooglePlayStore}
                    alt="Google Play"
                    className="w-[169px] h-auto"
                  />
                  <Image
                    src={AppleStore}
                    alt="Apple Store"
                    className="w-[169px] h-auto"
                  />
                </div>
              </div>
            </div>
          </div>

          {/* Mobile */}

          <div
            className="lg:hidden w-full bg-cover bg-center bg-no-repeat mt-11 rounded-[32px] relative overflow-hidden flex flex-col-reverse lg:flex-row items-center justify-between px-6 lg:px-12 lg:py-0 gap-10"
            style={{
              backgroundImage: `url(${DownloadBg.src})`,
              minHeight: "700px",
            }}
          >
            {/* Phone Image */}
            <div className="relative w-full lg:w-1/2 flex justify-center lg:justify-start">
              <Image
                src={DownlaodImage}
                alt="App preview"
                className="w-[97%] max-w-[400px] h-auto object-contain"
              />
            </div>

            {/* Text & CTAs */}
            <div className="w-full lg:w-1/2 text-white lg:text-left">
              <p className="text-[24px] md:text-[30px] lg:text-[36px] font-black leading-tight mb-6 mt-10">
                Take the Field With You. <br />
                Download the App and <br />
                Start Reporting Smarter.
              </p>

              <p className="text-[#F3F3FF] text-[18px] md:text-[20px] font-medium mb-4">
                Download Now
              </p>

              <div className="flex items-center justify-center md:justify-start gap-4">
                <Image
                  src={DownloadQrCode}
                  alt="QR Code"
                  className="w-[100px] h-[100px] ml-[-22px] md:ml-0"
                />
                <div className="flex flex-col gap-2">
                  <Image
                    src={GooglePlayStore}
                    alt="Google Play"
                    className="w-[169px] h-auto"
                  />
                  <Image
                    src={AppleStore}
                    alt="Apple Store"
                    className="w-[169px] h-auto"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </ContainerLayout>

      <Hr />
    </div>
  );
};

export default Projects;
