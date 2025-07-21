import { useEffect } from "react";
import "../styles/globals.css";
import AOS from "aos";
import "aos/dist/aos.css";
import { Merriweather, Arimo } from "@next/font/google";

// Import Merriweather font
export const merriweather = Merriweather({
  subsets: ["latin"],
  weight: ["300", "400", "700", "900"],
  variable: "--font-merriweather",
});

// Import Arimo font
export const arimo = Arimo({
  subsets: ["latin"],
  weight: ["400","500","600", "700"],
  variable: "--font-arimo",
});

function MyApp({ Component, pageProps }) {
  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);

  return (
    <main className={`${merriweather.variable} ${arimo.variable}`}>
      <Component {...pageProps} />
    </main>
  );
}

export default MyApp;

