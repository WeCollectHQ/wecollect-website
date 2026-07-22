import { useEffect } from "react";
import "../styles/globals.css";
import AOS from "aos";
import "aos/dist/aos.css";
import { Manrope } from "@next/font/google";

// Import Manrope font
export const manrope = Manrope({
  subsets: ["latin"],
  variable: "--font-manrope",
});

function MyApp({ Component, pageProps }) {
  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);

  return (
    <main className={`${manrope.variable}`}>
      <Component {...pageProps} />
    </main>
  );
}

export default MyApp;

