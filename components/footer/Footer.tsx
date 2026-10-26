import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/Button";
import { NewsletterForm } from "@/components/common/NewsletterForm";
import { Container } from "@/components/Container";
import { FooterColumn } from "./FooterColumn";
import DesktopBgImage from "@/assets/pngs/footer-desktop-bg-image.webp";
import MobileBgImage from "@/assets/pngs/footer-mobile-bg-image.webp";
import { WecollectFooterLogo } from "../Logo";
import { companyLinks, productLinks } from "./footer-data";
import { solutionLinks } from "@/constants/navigation";
import {
  ArrowUpRightIcon,
  GooglePlayIcon,
  AppleStoreIcon,
} from "@/assets/svgs/index";
import { socialLinks } from "./footer-data";

export function Footer() {
  return (
    <footer className="relative overflow-hidden bg-[#1E1E5A80] text-white">
      {/* Desktop background */}
      <Image
        src={DesktopBgImage}
        alt=""
        fill
        priority
        className="absolute inset-0 hidden h-full w-full object-cover object-top lg:block"
      />
      {/* Mobile background */}
      <Image
        src={MobileBgImage}
        alt=""
        fill
        priority
        className="absolute inset-0 h-full w-full object-cover object-top lg:hidden"
      />
      {/* Dark overlay */}
      <div className="absolute inset-0 bg-[#1E1E5A80]/20" />

      <div className="relative z-10">
        {/* CTA */}
        <Container className="flex flex-col items-center mt-44.5 md:mt-53 text-center">
          <h2 className="font-merriweather font-bold text-[24px] text-[#E9E9EF] md:text-[40px] leading-8 md:leading-12 md:tracking-[-1%]">
            <span className="text-[#B9B9CC]">See Beyond: </span>
            Our Tool provides end-to-end
            <br className="hidden lg:block" />
            solution for your data collection needs
          </h2>

          <p className="mt-4 md:mt-6 text-[14px] text-[#B9B9CC] md:text-[16px] lg:text-[16px] font-medium leading-5 md:leading-6.5">
            Book a 30-minute demo and discover how Wecollect helps you plan,
            deploy, verify, and manage field <br className="hidden lg:block" />{" "}
            operations with confidence. Get answers tailored to your use case
            and a clear deployment roadmap.
          </p>

          <Button
            href="/demo"
            variant="secondary"
            size="lg"
            icon={<ArrowUpRightIcon />}
            className="mt-4 md:mt-6"
          >
            Book a Demo
          </Button>
        </Container>

        {/* FOOTER CONTENT*/}

        <Container className="grid grid-cols-2 lg:grid-cols-[2fr_1fr_1fr_1fr] gap-x-4 gap-y-12 lg:gap-16 mt-44">
          {/* BRAND */}

          <div className="col-span-2 lg:col-span-1 max-w-82.5">
            <WecollectFooterLogo />

            <p className="mt-6 max-w-77.5 text-[12px] font-medium leading-5 text-[#B9B9CC]">
              Africa&apos;s native field process and data collection
              infrastructure. Technology-first, people when you need them.
            </p>

            {/* Socials */}
            <div className="mt-6 flex items-center gap-2">
              {socialLinks.map((social) => {
                const Icon = social.icon;

                return (
                  <Link
                    key={social.label}
                    href={social.href}
                    aria-label={social.label}
                    className="flex h-7.5 w-7.5 items-center justify-center border border-white/70 text-white transition-colors hover:border-white hover:bg-white hover:text-[#0F0E36]"
                  >
                    <Icon />
                  </Link>
                );
              })}
            </div>

            {/* Auth buttons */}
            <div className="mt-6 flex items-center gap-4">
              <Button
                href="https://app.Wecollect.tech/register"
                variant="secondary"
                size="md"
              >
                Sign Up
              </Button>

              <Button
                href="https://app.Wecollect.tech/login"
                variant="outline-white"
                size="md"
              >
                Sign In
              </Button>
            </div>

            {/* Newsletter */}
            <div className="mt-6">
              <p className="text-[12px] font-medium leading-5 text-[#B9B9CC]">
                Subscribe to Wecollect newsletters
              </p>

              <NewsletterForm
                formClassName="mt-2 flex h-10 max-w-78.75 items-center bg-[#151540] border border-[#E9E9EF]"
                inputClassName="min-w-0 flex-1 bg-transparent px-2 text-[12px] font-medium leading-5 text-white outline-none placeholder:text-[#686890]"
                buttonVariant="primary"
                buttonSize="xs"
                buttonClassName="mr-0.75"
              />

              <p className="mt-2 text-[12px] font-medium leading-5 text-[#B9B9CC]">
                By subscribing, I agree to Wecollect{" "}
                <Link
                  href="/privacy-policy"
                  className="text-[#4747D6] underline underline-offset-2"
                >
                  Privacy Policy
                </Link>
              </p>
            </div>
          </div>

          <div className="col-span-1 flex flex-col gap-12 lg:contents">
            {/* COMPANY */}
            <FooterColumn title="Company" links={companyLinks} />

            {/* PRODUCT */}
            <FooterColumn title="Product" links={productLinks} />
          </div>

          <div className="col-span-1 lg:contents">
            {/* SOLUTIONS */}
            <FooterColumn title="Solutions" links={solutionLinks} align="end" />
          </div>
        </Container>

        {/* BOTTOM BAR*/}

        <section className="border-t border-[#4B4B7B] mt-11">
          <Container className="flex flex-col-reverse lg:flex-row gap-8 py-8 lg:py-9.5 lg:items-center lg:justify-between">
            {/* Copyright */}
            <p className="text-[12px] text-[#B9B9CC] font-medium leading-5">
              © All rights reserved, Wecollect, 2026
            </p>

            {/* App buttons */}
            <div className="grid grid-cols-2 gap-3 w-full max-w-sm sm:max-w-none sm:flex sm:w-auto sm:items-center sm:gap-4">
              {/* Google Play */}
              <a
                href="https://play.google.com/store/apps/details?id=com.wecollectapp.tech&hl=en"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Get it on Google Play"
                className="w-full sm:w-auto transition-opacity hover:opacity-80"
              >
                <GooglePlayIcon className="w-full h-auto sm:w-[180px] sm:h-[52px] cursor-pointer" />
              </a>

              {/* App Store - coming soon */}
              <div
                className="relative w-full sm:w-auto cursor-not-allowed"
                aria-label="App Store version coming soon"
                aria-disabled="true"
              >
                <div className="opacity-50 grayscale pointer-events-none w-full">
                  <AppleStoreIcon className="w-full h-auto sm:w-[180px] sm:h-[52px]" />
                </div>
                <span className="absolute -top-2 right-1 sm:-right-2 rounded-full bg-amber-500 px-2 py-0.5 text-[9px] sm:text-[10px] font-semibold uppercase tracking-wide text-white shadow">
                  Coming soon
                </span>
              </div>
            </div>
          </Container>
        </section>
      </div>
    </footer>
  );
}
