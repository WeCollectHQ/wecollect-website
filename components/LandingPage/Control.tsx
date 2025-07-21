import React, { useEffect, useRef } from "react";
import Image from "next/image";
import ContainerLayout from "../../layouts/ContainerLayout";
import maskwoman from "../../assets/png/farmer-boy.png";
import playIcon from "../../assets/png/play-icon.png";

function Control() {
   const videoRef = useRef(null);

   useEffect(() => {
     const observer = new IntersectionObserver(
       (entries) => {
         entries.forEach((entry) => {
           if (entry.isIntersecting) {
             videoRef.current.play();
           } else {
             videoRef.current.pause();
           }
         });
       },
       { threshold: 0.5 } // Trigger when 50% of the video is visible
     );

     if (videoRef.current) {
       observer.observe(videoRef.current);
     }

     return () => {
       if (videoRef.current) {
         observer.unobserve(videoRef.current);
       }
     };
   }, []);
  return (
    <div className="w-full" data-aos="fade-up" data-aos-duration="1000">
      <ContainerLayout>
        <p className="text-customBlack text-[20px] lg:text-2xl 2xl:text-[32px] font-semibold text-center mt-[60px] 2xl:mt-[119px] font-serif">
          POWER OF DATA IN YOUR HANDS
        </p>

        <p className="w-full md:w-8/12 m-auto text-[#555555] text-[14px] 2xl:text-[18px] font-medium text-center mt-[10px] leading-[25px] lg:leading-[36px] font-sans">
          WeCollect is a smart data collection mobile app that allows you
          collect online and offline data, while Project Management to a dynamic
          dashboard that provides real-time updates on data collected. It
          promotes quick decision-making by allowing users to visualise and
          analyse data on the go. The dashboard is flexible, which is also handy
          when managing multiple projects or forms.
        </p>
        {/* <div className="w-full relative ">
        
          <video
            width="600"
            ref={videoRef}
            controls
            poster="../../assets/png/farmer-boy.png"
            className="w-full object-contain h-auto m-auto mt-9 lg:mt-20 lg:max-w-[850px] 2xl:max-w-[1030px]"
          >
            <source src="/video/wecollect-video.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
         
        </div> */}
      </ContainerLayout>
    </div>
  );
}

export default Control;
