import React from "react";
import ContainerLayout from "../../layouts/ContainerLayout";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import footerBg from "../../assets/png/footer-bg-image.png";
import logo from "../../assets/svg/footer-logo.svg";
import facebook from "../../assets/svg/facebook.svg";
import instagram from "../../assets/svg/instagram.svg";
import twitter from "../../assets/svg/twitter.svg";
import linkedin from "../../assets/svg/linkedin.svg";
import youtube from "../../assets/svg/youtube.svg";
// import googleIcon from "../../assets/svg/google-play-store.svg";
// import appleIcon from "../../assets/svg/app-store.svg";

import googleIcon from "../../assets/png/google-play.png";
import appleIcon from "../../assets/png/apple-store.png";

const NewFooter = () => {
  const router = useRouter();

  return (
    <div className="bg-white px-2 pb-2">
      <div
        className="w-full bg-[#0E097D] text-white pt-16 pb-8"
        style={{
          backgroundImage: `url(${footerBg.src})`,
          backgroundSize: "cover",
        }}
      >
        <ContainerLayout>
          <div className="w-full flex flex-col lg:flex-row justify-between gap-16 border-white border-opacity-10 pb-12">
            {/* LEFT COLUMN */}
            <div className="flex flex-col items-start gap-4">
              <Image
                src={logo}
                alt="WeCollect Logo"
                onClick={() => router.push("/")}
                className="cursor-pointer w-[130px] h-auto"
              />

              <div className="flex gap-3 mt-[54px] lg:mb-12">
                <Link
                  href="https://www.linkedin.com/company/wecollect-tech/"
                  target="_blank"
                >
                  <Image src={linkedin} alt="LinkedIn" />
                </Link>
                <Link href="https://twitter.com/Wecollectdata" target="_blank">
                  <Image src={twitter} alt="Twitter" />
                </Link>
                <Link
                  href="https://www.instagram.com/wecollect_data/"
                  target="_blank"
                >
                  <Image src={instagram} alt="Instagram" />
                </Link>
                <Link
                  href="https://web.facebook.com/Wecollectintel"
                  target="_blank"
                >
                  <Image src={facebook} alt="Facebook" />
                </Link>
                <Link href="https://www.youtube.com/" target="_blank">
                  <Image src={youtube} alt="YouTube" />
                </Link>
              </div>

              <div className="flex gap-6 mt-4 lg:mb-[60px]">
                <button className="w-[107px] h-[48px] bg-[#4747D6] text-[#E9E9EF] text-base font-medium rounded-[50px] px-6 py-3">
                  Sign up
                </button>
                <button className="w-[107px] h-[48px] bg-[#E9E9EF] text-[#4747D6] text-base font-medium rounded-[50px] px-6 py-3">
                  Sign in
                </button>
              </div>

              <p className="font-black text-[#F3F3FF] text-[20px] mb-[14px]">
                Download App
              </p>
              <div className="flex gap-3 mt-2">
                <Image
                  src={googleIcon}
                  alt="Google Play"
                  className="w-[140px] h-auto"
                />
                <Image
                  src={appleIcon}
                  alt="App Store"
                  className="w-[140px] h-auto"
                />
              </div>
            </div>

            {/* RIGHT GRID */}
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-y-10 gap-x-12 text-sm">
              <div>
                <h3 className="font-black text-xl text-[#FFFFFF] mb-[49px]">
                  WeCollect
                </h3>
                <ul className="space-y-2 text-[#FFFFFF] text-base font-medium flex flex-col gap-[30px]">
                  <li>
                    <Link href="/innovations">Products</Link>
                  </li>
                  <li>
                    <Link href="/our-project">Projects</Link>
                  </li>
                  <li>
                    <Link href="/applicable-cases">Use cases</Link>
                  </li>
                  <li>
                    <Link href="/blog">Blog</Link>
                  </li>
                  <li>
                    <Link href="/contact-us">Contact Us</Link>
                  </li>
                  <li>
                    <Link href="/faq">FAQ</Link>
                  </li>
                </ul>
              </div>
              <div>
                <h3 className="font-black text-xl text-[#FFFFFF] mb-[49px]">
                  Legality
                </h3>
                <ul className="space-y-2 text-[#FFFFFF] text-base font-medium flex flex-col gap-[30px]">
                  <li>
                    <Link href="/privacy-policy">Privacy Policy</Link>
                  </li>
                  <li>
                    <Link href="/term-of-use">Terms of use</Link>
                  </li>
                  <li>
                    <Link href="/cookie-policy">Cookie Policy</Link>
                  </li>
                </ul>
              </div>
              <div>
                <h3 className="font-black text-xl text-[#FFFFFF] mb-[49px] mt-20 md:mt-0">
                  Products
                </h3>
                <ul className="space-y-2 text-[#FFFFFF] text-base font-medium flex flex-col gap-[30px]">
                  <li>
                    <Link href="/innovations#app">Delineation app</Link>
                  </li>
                  <li>
                    <Link href="/innovations#dashboard">
                      Project management dashboard
                    </Link>
                  </li>
                  <li>
                    <Link href="/coming-soon">WeCollect Learning</Link>
                  </li>
                  <li>
                    <Link href="/coming-soon">Data Bank</Link>
                  </li>
                </ul>
              </div>
              <div>
                <h3 className="font-black text-xl text-[#FFFFFF] mb-[49px] mt-20 lg:mt-0">
                  Features
                </h3>
                <ul className="space-y-2 text-[#FFFFFF] text-base font-medium flex flex-col gap-[30px]">
                  <li>
                    <Link href="/gis-systems">Agent & Task Management</Link>
                  </li>
                  <li>
                    <Link href="/smart-data-collection">GEO AI</Link>
                  </li>
                  <li>
                    <Link href="/monitor">Monitor</Link>
                  </li>
                  <li>
                    <Link href="/offline-data">Offline Data Collection</Link>
                  </li>
                  <li>
                    <Link href="/secure-cloud-storage">
                      Secure Cloud Storage
                    </Link>
                  </li>
                  <li>
                    <Link href="/seamless-payment">Seamless Payment</Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          <hr className="border-t-2 border-[rgba(153,153,153,0.3)]" />

          {/* COPYRIGHT */}
          <div className="text-center mt-6 text-base font-medium text-[#FFFFFF] opacity-80 pt-4">
            © All rights reserved, WeCollect, 2025
          </div>
        </ContainerLayout>
      </div>
    </div>
  );
};

export default NewFooter;
