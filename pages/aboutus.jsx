import React, { useState } from "react";
import Hero from "../components/LandingPage/Hero";
import Features from "../components/LandingPage/Features";
import Dashboard from "../components/LandingPage/Dashboard";
import Paid from "../components/LandingPage/Paid";
import Footer from "../components/LandingPage/Footer";
import Featured from "../components/LandingPage/Featured";
import Become from "../components/LandingPage/Become";

function aboutus() {
  const [active, setActive] = useState(false);

  return (
    <div className="w-full flex flex-col relative">
      <Hero active={active} />
      {/* <div>
        <Features />
        <Featured />
      </div> */}
      {/* <Dashboard />
      <Paid />
      <Become /> */}
      <Footer />
    </div>
  );
}

export default aboutus;
