import NewFooter from "../components/footer/new-footer";
import RequestDemo from "../components/footer/request-demo";
import Head from "next/head";
import CustomCarousel from "../components/LandingPage/CustomCarousel";
import SmartDataHero from "../components/smart-data-collection/smart-hero";
import SmartFeatures from "../components/smart-data-collection/smart-features";
const SmartData = () => {
  return (
    <div className="w-full flex flex-col">
      <Head>
        <title>Smart Data Collection</title>
        <meta
          name="description"
          content="Leverage advanced data-collecting technology and numerous field agents to access and track data for various projects."
        />
        <link rel="icon" href="/wecollect-new-logo.png" />
      </Head>

      <SmartDataHero />
      <SmartFeatures />
      {/* <OtherProject /> */}
      <div className="w-full mt-[200px] lg:mt-[-120px]">
        <CustomCarousel />
      </div>
      <RequestDemo />
      <NewFooter />
    </div>
  );
};

export default SmartData;
