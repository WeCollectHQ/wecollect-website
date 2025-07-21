import React from "react";
import InnovationHero from "../components/innovations/innovation-hero";
import OurInnovation from "../components/innovations/our-innovations";
import OtherInnovations from "../components/innovations/other-innovation";
import Slider from "../components/blogs/Slider";
import NewFooter from "../components/footer/new-footer";
import RequestDemo from "../components/footer/request-demo";
import Head from "next/head";
import OurProduct from "../components/innovations/our-product";
const Innovations = () => {
  return (
    <div className="w-full flex flex-col">
      <Head>
        <title>Innovation</title>
        <meta
          name="description"
          content="Leverage advanced data-collecting technology and numerous field agents to access and track data for various projects."
        />
        <link rel="icon" href="/wecollect-new-logo.png" />
      </Head>

      <InnovationHero />
      <OurProduct />
      {/* <OurInnovation />
      <OtherInnovations /> */}
      <div className="w-full mt-12">
        <Slider />
      </div>
      <RequestDemo />
      <NewFooter />
    </div>
  );
};

export default Innovations;
