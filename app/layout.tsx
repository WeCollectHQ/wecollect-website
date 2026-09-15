import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import localFont from "next/font/local";
import { Navbar } from "@/components/navbar/Navbar";
import { Footer } from "@/components/footer/Footer";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const merriweather = localFont({
  src: [
    {
      path: "../fonts/Merriweather/Merriweather-VariableFont_opsz,wdth,wght.ttf",
      style: "normal",
    },
    {
      path: "../fonts/Merriweather/Merriweather-Italic-VariableFont_opsz,wdth,wght.ttf",
      style: "italic",
    },
  ],
  variable: "--font-merriweather",
  display: "swap",
});

const helveticaNeue = localFont({
  src: [
    {
      path: "../fonts/helvetica-neue-5/HelveticaNeueLight.otf",
      weight: "300",
      style: "normal",
    },
    {
      path: "../fonts/helvetica-neue-5/HelveticaNeueRoman.otf",
      weight: "400",
      style: "normal",
    },
    {
      path: "../fonts/helvetica-neue-5/HelveticaNeueItalic.ttf",
      weight: "400",
      style: "italic",
    },
    {
      path: "../fonts/helvetica-neue-5/HelveticaNeueMedium.otf",
      weight: "500",
      style: "normal",
    },
    {
      path: "../fonts/helvetica-neue-5/HelveticaNeueBold.otf",
      weight: "700",
      style: "normal",
    },
    {
      path: "../fonts/helvetica-neue-5/HelveticaNeueBoldItalic.otf",
      weight: "700",
      style: "italic",
    },
  ],
  variable: "--font-helvetica-neue",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://Wecollect.tech"),
  title: {
    default: "Wecollect | Run field operations and data collection in Africa",
    template: "%s | Wecollect",
  },
  description:
    "Wecollect enables organizations to run field operations and gather trusted data across Africa, combining scalable technology and AI-powered analytics.",
  keywords: [
    "field data collection Africa",
    "KoboToolbox alternative",
    "survey data collection Nigeria",
    "field agent management platform",
    "CAPI data collection tool",
  ],
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://Wecollect.tech",
    siteName: "Wecollect",
    title: "Wecollect | Data Collection & Field Operations in Africa",
    description:
      "Combining scalable technology and AI-powered analytics for faster reporting, actionable insights, and better decisions.",
    images: [
      {
        url: "/og-image.jpg", // You will need to create and place this in the public folder
        width: 1200,
        height: 630,
        alt: "Wecollect Platform",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Wecollect | Field Data Infrastructure",
    description:
      "Run your own field team, or let ours run it for you. Either way, you get the same platform underneath.",
    creator: "@Wecollectdata",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "Wecollect",
  url: "https://Wecollect.tech",
  logo: "https://Wecollect.tech/logo.png",
  sameAs: [
    "https://www.linkedin.com/company/Wecollect-tech/",
    "https://twitter.com/Wecollectdata",
    "https://www.instagram.com/Wecollect_data/",
    "https://web.facebook.com/Wecollectintel",
  ],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} ${merriweather.variable} ${helveticaNeue.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col pt-15 lg:pt-18">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <Navbar />

        <main className="flex-1 flex flex-col">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
