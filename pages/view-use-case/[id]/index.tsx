import NewFooter from "../../../components/footer/new-footer";
import RequestDemo from "../../../components/footer/request-demo";
import Head from "next/head";
import UseHero from "../../../components/use-cases/use-hero";
import CustomCarousel from "../../../components/LandingPage/CustomCarousel";
import Benefits from "../../../components/use-cases/benefits";
import DataJourney from "../../../components/use-cases/data-journey";
import UseHow from "../../../components/use-cases/use-how";
import { useRouter } from "next/router";
import { useCaseData } from "../../../utils/use-case-data";
import { useEffect } from "react";
const ViewUseCase = () => {
  const router = useRouter();
  const { id } = router.query;
  const idValue = Number(id);
  const item = useCaseData[idValue];
  useEffect(() => {
    window?.scrollTo(0, 0);
  }, []);

  return (
    <div className="w-full flex flex-col relative">
      <Head>
        <title>Brand Visibility</title>
        <meta
          name="description"
          content="Leverage advanced data-collecting technology and numerous field agents to access and track data for various projects."
        />
        <link rel="icon" href="/wecollect-new-logo.png" />
      </Head>

      <UseHero heroInfo={item?.heroInfo} />
      <UseHow howInfo={item?.howInfo} />
      <Benefits benefits={item?.benefits} />
      <DataJourney />
      <div className=" lg:mb-0 w-full  lg:h-0 lg:hidden flex"></div>
      <div className="w-full mt-[-80px]">
        <CustomCarousel />
      </div>
      <RequestDemo />
      <NewFooter />
    </div>
  );
};

export default ViewUseCase;
