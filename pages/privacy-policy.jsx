import React from "react";
import NewNavbar from "../components/navbar/new-navbar";
import NewFooter from "../components/footer/new-footer";
import RequestDemo from "../components/footer/request-demo";
import TermHero from "../components/term-of-use/term-hero";
import PrivacyBody from "../components/term-of-use/privacy-body";
import MobileNav from "../components/navbar/mobile-nav";
import Head from "next/head";
const PrivacyPolicy = () => {
  return (
    <div className="w-full flex flex-col">
      <Head>
        <title>Privacy Policy</title>
        <meta
          name="description"
          content="Leverage advanced data-collecting technology and numerous field agents to access and track data for various projects."
        />
        <link rel="icon" href="/wecollect-new-logo.png" />
      </Head>

      <NewNavbar />
      <MobileNav present={2} />
      <TermHero current={1} />
      <PrivacyBody />
      <RequestDemo />
      <NewFooter />
    </div>
  );
};

export default PrivacyPolicy;
