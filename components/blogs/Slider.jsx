import { useState, useEffect } from "react";
import Featured from "../LandingPage/Featured";
import Become from "../LandingPage/Become";


const Slider = () => {
  const [showComponent1, setShowComponent1] = useState(true);
  const [showComponent2, setShowComponent2] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setShowComponent1((prevState) => !prevState);
      setShowComponent2((prevState) => !prevState);
    }, 4000);

    return () => clearInterval(interval);
  }, []);
  return (
    <div
      className="w-full flex justify-center mt-0 "
      // data-aos="fade-up"
      // data-aos-duration="1000"
    >
      <div className="animation-container min-h-[480px] lg:h-[400px]  relative flex items-end justify-center">
        <div
          className={`component1 flex flex-col ${
            showComponent1 ? "slide-in" : "slide-out"
          }`}
        >
         
          <Featured />
          <div className="w-full flex justify-center gap-5 mt-11 items-center">
            <div className="w-5 h-5 rounded-full border-[2px] border-mainBlue flex items-center justify-center">
              <span className="w-[10px] h-[10px] rounded-full bg-[#E3D5FF]"></span>
            </div>
            <span className="w-[10px] h-[10px] rounded-full bg-[#E3D5FF]"></span>
          </div>
        </div>
        <div
          className={`component2 flex flex-col  ${
            showComponent2 ? "slide-in" : "slide-out"
          }`}
        >
         
          <Become />
          <div className="w-full flex justify-center gap-5 mt-11 items-center">
            <span className="w-[10px] h-[10px] rounded-full bg-[#E3D5FF]"></span>
            <div className="w-5 h-5 rounded-full border-[2px] border-mainBlue flex items-center justify-center">
              <span className="w-[10px] h-[10px] rounded-full bg-[#E3D5FF]"></span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Slider;
