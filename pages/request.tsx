import NewFooter from "../components/footer/new-footer";
import RequestDemo from "../components/footer/request-demo";
import Head from "next/head";
import SalesHero from "../components/sales/SalesHero";
const DataRequestForm = () => {
  return (
    <div className="w-full flex flex-col">
      <Head>
        <title>Date Request Form Form</title>
        <meta
          name="description"
          content="Leverage advanced data-collecting technology and numerous field agents to access and track data for various projects."
        />
        <link rel="icon" href="/wecollect-new-logo.png" />
      </Head>

      <SalesHero />

      <RequestDemo />
      <NewFooter />
    </div>
  );
};

export default DataRequestForm;
