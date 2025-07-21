import NewFooter from "../components/footer/new-footer";
import RequestDemo from "../components/footer/request-demo";
import Head from "next/head";
import CustomCarousel from "../components/LandingPage/CustomCarousel";
import SmartDataHero from "../components/smart-data-collection/smart-hero";
import SmartFeatures from "../components/smart-data-collection/smart-features";
import OfflineHero from "../components/offline-data-collection/offlinehero";
import OfflineFeatures from "../components/offline-data-collection/offline-features";
import SecureHero from "../components/secure-cloud-storage/secure-hero";
import SecureFeatures from "../components/secure-cloud-storage/secure-features";
const SecuredCloudStorage = () => {
  return (
    <div className="w-full flex flex-col">
      <Head>
        <title>Secured Cloud Storage</title>
        <meta
          name="description"
          content="Leverage advanced data-collecting technology and numerous field agents to access and track data for various projects."
        />
        <link rel="icon" href="/wecollect-new-logo.png" />
      </Head>

      <SecureHero />
      <SecureFeatures />
      {/* <OtherProject /> */}
      <div className="w-full  lg:mt-[-120px]">
        <CustomCarousel />
      </div>
      <RequestDemo />
      <NewFooter />
    </div>
  );
};

export default SecuredCloudStorage;
