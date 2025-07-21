import { useEffect } from "react";
import OurPartner from "../components/download-page/partners-card";
import Control from "../components/LandingPage/Control";
import HomeFeatures from "../components/LandingPage/HomeFeatures";
import How from "../components/LandingPage/How";
import Section from "../components/LandingPage/Section";
import CustomCarousel from "../components/LandingPage/CustomCarousel";
import Slider from "../components/blogs/Slider";
import RequestDemo from "../components/footer/request-demo";
import Footer from "../components/footer/new-footer";
import Faq from "../components/LandingPage/Faq";
import Head from "next/head";
import NewHomeHero from "../components/LandingPage/new-home-hero";
const channelId = process.env.NEXT_PUBLIC_SLACK_CHANNEL_ID;
console.log(channelId)
function Home() {
  useEffect(() => {
    window?.scrollTo(0, 0);
  }, []);

  return (
    <div className="w-full h-auto ">
      <Head>
        <title>WeCollect</title>
        <meta
          name="description"
          content="Leverage advanced data-collecting technology and numerous field agents to access and track data for various projects."
        />
        <link rel="icon" href="/wecollect-new-logo.png" />
      </Head>

      {/* <NewNavbar />
      <MobileNav present={1} />
      <HomeHero /> */}
      <NewHomeHero />
      <OurPartner />
      <Control />
      <HomeFeatures />
      <How />
      <Section />
      {/* <DesktopCarousel /> */}
      <CustomCarousel />
      {/* <MobileCarousel /> */}
      <Faq />
      <Slider />
      <RequestDemo />
      <Footer />
    </div>
  );
}

export default Home;
