import React from 'react'
import screen from "../../assets/png/data-screen.png";
import ContainerLayout from '../../layouts/ContainerLayout';

import Image from 'next/image';
const Dashboard = () => {
  return (
    <ContainerLayout>
      <div className="w-full flex flex-col mt-[20px] lg:mt-[209px]">
        <h1
          className="text-customBlack text-2xl lg:text-[40px] text-center font-bold  "
          data-aos="fade-up"
          data-aos-duration="2000"
        >
          Field Management Dashboard
        </h1>
        <p
          className="w-11/12 lg:w-9/12 mx-auto text-center text-customBlack opacity-70 mt-12"
          data-aos="fade-up"
          data-aos-duration="2000"
        >
          A dynamic dashboard that provides real-time updates on data collected.
          It promotes quick decision-making by allowing users to visualise and
          analyse data on the go. The dashboard is flexible, which is also handy
          when managing multiple projects or forms.
        </p>
        <Image
          src={screen}
          className="lg:w-9/12 mx-auto h-auto mt-8"
          data-aos="zoom-in"
          data-aos-duration="2000"
        />
      </div>
    </ContainerLayout>
  );
}

export default Dashboard