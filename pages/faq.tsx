import React from "react";
import NewNavbar from "../components/navbar/new-navbar";
import NewFooter from "../components/footer/new-footer";
import RequestDemo from "../components/footer/request-demo";
import TermHero from "../components/term-of-use/term-hero";
import PrivacyBody from "../components/term-of-use/privacy-body";
import MobileNav from "../components/navbar/mobile-nav";
import Head from "next/head";
import FaqHero from "../components/faq/FaqHero";
import FaqList from "../components/faq/faq-list";
const Faq = () => {
  return (
    <div className="w-full flex flex-col">
      <Head>
        <title>Faq</title>
        <meta
          name="description"
          content="Leverage advanced data-collecting technology and numerous field agents to access and track data for various projects."
        />
        <link rel="icon" href="/wecollect-new-logo.png" />
      </Head>

      <NewNavbar />
      <MobileNav present={2} />
      <FaqHero />
      <FaqList />

      <RequestDemo />
      <NewFooter />
    </div>
  );
};

export default Faq;
