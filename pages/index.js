import { useState, useEffect, useRef } from 'react';
import Head from 'next/head'
import Hero from '../components/LandingPage/Hero';
import Features from '../components/LandingPage/Features';
import Dashboard from '../components/LandingPage/Dashboard';
import Paid from '../components/LandingPage/Paid';
import Footer from '../components/LandingPage/Footer';


export default function Home() {
const [active, setActive] = useState(false);

  useEffect(() => {
    if (typeof window) {
    
      const handleScroll = () => {
        window.pageYOffset > 600 ? setActive(true) : setActive(false);
      };
      window.addEventListener("scroll", handleScroll);
      return () => window.removeEventListener("scroll", handleScroll);
    }
  }, []);
  
 
  return (
    <>
      <Head>
        <title>We Collect</title>
        <meta
          name="description"
          content="Leverage advanced data-collecting technology and numerous field agents to access and track data for various projects."
        />
        <link rel="icon" href="/we-logo.png" />
      </Head>
      <div className="w-full flex flex-col relative">
        <Hero active={active} />
        <div >

        <Features />
        </div>
        <Dashboard />
        <Paid />
        <Footer />
      </div>
    </>
  );
}
