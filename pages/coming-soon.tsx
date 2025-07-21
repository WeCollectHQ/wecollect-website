import ContainerLayout from '../layouts/ContainerLayout';
import { useRouter } from 'next/router';
import Image from "next/image";
import logo from "../assets/svg/latest-logo.svg";
import curve from "../assets/png/curve-yellow.png";
import Link from 'next/link';
import { BellIcon } from '../assets/svg';
import HeroPhoto from "../assets/png/new-frame.png";
import message from "../assets/svg/message-w.svg";
import linkedin from "../assets/svg/linkedin-w.svg";
import twitter from "../assets/svg/twitter-w.svg";
import instagram from "../assets/svg/instagram-w.svg";
import facebook from "../assets/svg/facebook-w.svg";
import youtube from "../assets/svg/youtube-w.svg";
const ComingSoon = () => {
    const router = useRouter();
  return (
    <div className="w-full ">
      <ContainerLayout>
        <div className="w-full flex flex-col pb-8 max-w-[1200px]">
          <div className="w-full items-center justify-between flex mt-6">
            <span className="cursor-pointer " onClick={() => router.push("/")}>
              {" "}
              <Image src={logo} alt="logo" />{" "}
            </span>
            <div className="flex items-center gap-2">
              <Link href="mailto:info@wecollect.com" target="_blank">
                <Image src={message} alt="message" />
              </Link>
              <Link
                href="https://www.linkedin.com/company/wecollect-tech/posts/?feedView=all"
                target="_blank"
              >
                <Image src={linkedin} alt="message" />
              </Link>
              <Link href="https://x.com/Wecollectdata" target="_blank">
                <Image src={twitter} alt="message" />
              </Link>
              <Link
                href="https://www.instagram.com/usewecollect?igsh=MXBycTB1MDFldGl1bw=="
                target="_blank"
              >
                <Image src={instagram} alt="message" />
              </Link>
              <Link
                href="https://web.facebook.com/Wecollectintel?_rdc=1&_rdr#"
                target="_blank"
              >
                <Image src={facebook} alt="message" />
              </Link>
              <Link href="" target="_blank">
                <Image src={youtube} alt="message" />
              </Link>
            </div>
          </div>
          <div className="coming-soon-bg w-full flex flex-col  mt-[26px] rounded-[30px] relative px-4">
            <div className="absolute top-0 left-0 right-0 z-10 ">
              <Image src={curve} alt="curve" className="object-cover" />
            </div>
            <div className="w-full z-10 mt-[140px] flex flex-col">
              <h1 className="text-center font-serif text-[#EDEDFB] text-3xl lg:text-[40px] font-bold 2xl:text-[64px]  ">
                Coming Soon!!!
              </h1>
              <p className="text-[#EDEDFB] max-w-[924px] text-center text-sm lg:text-[18px] leading-[25px] mx-auto font-sans mt-12 ">
                Leverage advanced data collecting technology with features and
                vast network of field agents to collect, track, and ensure
                accurate data for various projects.
              </p>
              <div className="mt-24 flex flex-col">
                <p className="text-[#EDEDFB] mx-auto text-center font-sans text-xs lg:text-[16px]">
                  Get notified when when our website goes live!
                </p>
                <div className="flex border-[2px] border-white rounded-[30px] bg-white items-center bg-opacity-20 mt-4 h-12 gap-3 px-2 max-w-[400px] w-full mx-auto ">
                  <input
                    type="text"
                    className="border-none outline-none bg-transparent font-sans flex flex-grow placeholder:text-sm placeholder:font-sans placeholder:text-[#EDEDFB] text-white text-sm "
                    placeholder="email"
                  />
                  <span className="h-[38px] bg-white rounded-[50px] min-w-[130px] gap-3 items-center flex justify-center">
                    <BellIcon />
                    <p className="text-mainBlue font-sans  font-semibold text-xs lg:text-[14px] ">
                      Notify me
                    </p>
                  </span>
                </div>
              </div>
            </div>
            <Image
              src={HeroPhoto}
              className="w-full md:w-10/12 mx-auto mt-20 "
              alt="hero"
            />
          </div>
        </div>
      </ContainerLayout>
    </div>
  );
}

export default ComingSoon
