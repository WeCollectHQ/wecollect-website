import React from "react";
import NewNavbar from "../components/navbar/new-navbar";
import NewFooter from "../components/footer/new-footer";
import RequestDemo from "../components/footer/request-demo";
import TermHero from "../components/term-of-use/term-hero";

import TermOfUseBody from "../components/term-of-use/term-of-use-body";
import MobileNav from "../components/navbar/mobile-nav";
import Head from "next/head";

const TermOfUse = () => {
  return (
    <div className="w-full flex flex-col">
      <Head>
        <title>Term of Use</title>
        <meta
          name="description"
          content="Leverage advanced data-collecting technology and numerous field agents to access and track data for various projects."
        />
        <link rel="icon" href="/wecollect-new-logo.png" />
      </Head>

      <NewNavbar />
      <MobileNav present={2} />
      <TermHero current={2} />
      <TermOfUseBody />
      <RequestDemo />
      <NewFooter />
    </div>
  );
};

export default TermOfUse;
