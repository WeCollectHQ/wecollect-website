import React from "react";
import ContactHero from "../components/contact-us/contact-hero";
import GetInTouch from "../components/contact-us/get-in-touch";
import Slider from "../components/blogs/Slider";
import NewFooter from "../components/footer/new-footer";
import RequestDemo from "../components/footer/request-demo";
import Head from "next/head";
const ContactUs = () => {
  return (
    <div className="w-full flex flex-col">
      <Head>
        <title>Contact Us</title>
        <meta
          name="description"
          content="Leverage advanced data-collecting technology and numerous field agents to access and track data for various projects."
        />
        <link rel="icon" href="/wecollect-new-logo.png" />
      </Head>

      <ContactHero />
      <GetInTouch />
      <Slider />
      <RequestDemo />
      <NewFooter />
    </div>
  );
};

export default ContactUs;
