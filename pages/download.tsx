import React from "react";
import DownloadHero from "../components/download-page/download-hero";
import Slider from "../components/blogs/Slider";
import PartnersCard from "../components/download-page/partners-card";
import NewFooter from "../components/footer/new-footer";
import RequestDemo from "../components/footer/request-demo";
import Head from "next/head";
const Download = () => {
  return (
    <div className="w-full flex flex-col">
      <Head>
        <title>WeCollect</title>
        <meta
          name="description"
          content="Leverage advanced data-collecting technology and numerous field agents to access and track data for various projects."
        />
        <link rel="icon" href="/wecollect-new-logo.png" />
      </Head>

      <DownloadHero />
      <PartnersCard />
      <div className="w-full mt-12 lg:mt-12">
        <Slider />
      </div>
      <RequestDemo />
      <NewFooter />
    </div>
  );
};

export default Download;
