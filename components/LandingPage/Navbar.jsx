import React from 'react'
import ContainerLayout from '../../layouts/ContainerLayout'
import { Navlogo } from '../../assets/svg'
import logo from "../../assets/svg/log2.svg"
import { useRouter } from 'next/router'
import Image from 'next/image'
const Navbar = ({ active }) => {
  const router = useRouter();
  return (
    <div
      className={`${
        active ? "bg-white" : "nav-bg"
      } fixed top-0 right-0 left-0 z-high w-full h-[68px] flex items-center `}
    >
      <ContainerLayout>
        <div className="w-full flex items-center justify-between  h-[68px]">
          {active ? <Image src={logo} alt="logo" /> : <Navlogo />}

          {active ? (
            <button
              className="blue-btn text-white md:text-[20px] text-base font-bold flex items-center justify-center px-[20px] py-[10px] "
              onClick={() => router.push("/blog")}
            >
              Learn more
            </button>
          ) : (
            <button
              className="white-btn text-mainBlue md:text-[20px] text-base font-bold flex items-center justify-center px-[20px] py-[10px] "
              onClick={() => router.push("/blog")}
            >
              Learn more
            </button>
          )}
        </div>
      </ContainerLayout>
    </div>
  );
}

export default Navbar