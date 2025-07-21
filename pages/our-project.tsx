import React from "react";
import OurProjectHero from "../components/projects/our-project-hero";
import OurProjectList from "../components/projects/our-project-list";
import OtherProject from "../components/projects/other-project";
import Slider from "../components/blogs/Slider";
import NewFooter from "../components/footer/new-footer";
import RequestDemo from "../components/footer/request-demo";
import Head from "next/head";
const OurProject = () => {
  return (
    <div className="w-full flex flex-col">
      <Head>
        <title>Our Project</title>
        <meta
          name="description"
          content="Leverage advanced data-collecting technology and numerous field agents to access and track data for various projects."
        />
        <link rel="icon" href="/wecollect-new-logo.png" />
      </Head>

      <OurProjectHero />
      <OurProjectList />
      {/* <OtherProject /> */}
      <div className="w-full mt-12">
        <Slider />
      </div>
      <RequestDemo />
      <NewFooter />
    </div>
  );
};

export default OurProject;
