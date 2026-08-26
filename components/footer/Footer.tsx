import Link from "next/link";
import { Button } from "@/components/Button";
import { Container } from "@/components/Container";
import Image from "next/image";
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
          <h2 className="font-merriweather text-[24px] md:text-[40px] font-bold leading-8 md:leading-12 md:tracking-[-1%] text-[#E9E9EF]">
            <span className="text-[#B9B9CC]">See Beyond: </span>
            Our Tool provides end-to-end
            <br className="hidden lg:block" />
            solution for your data collection needs
          </h2>

          <p className="mt-4 md:mt-6 text-[14px] md:text-[16px] font-medium leading-5 md:leading-6.5 text-[#B9B9CC] lg:text-[16px]">
            Book a 30-minute demo and discover how WeCollect helps you plan,
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

        <Container className="grid grid-cols-2 gap-x-4 gap-y-12 lg:grid-cols-[2fr_1fr_1fr_1fr] lg:gap-16 mt-44">
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
              <Button href="/signup" variant="secondary" size="md">
                Sign Up
              </Button>

              <Button href="/signin" variant="outline-white" size="md">
                Sign In
              </Button>
            </div>

            {/* Newsletter */}
            <div className="mt-6">
              <p className="text-[12px] font-medium leading-5 text-[#B9B9CC]">
                Subscribe to WeCollect newsletters
              </p>

              <form className="mt-2 flex h-10 max-w-78.75 items-center bg-[#151540] border border-[#E9E9EF]">
                <input
                  type="email"
                  placeholder="Enter your email..."
                  className="min-w-0 flex-1 bg-transparent px-2 text-[12px] font-medium leading-5 text-white outline-none placeholder:text-[#686890]"
                />

                <Button type="submit" size="xs" className="mr-0.75">
                  Subscribe
                </Button>
              </form>

              <p className="mt-2 text-[12px] font-medium leading-5 text-[#B9B9CC]">
                By subscribing, I agree to WeCollect{" "}
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
          <Container className="flex flex-col-reverse gap-8 py-8 lg:flex-row lg:items-center lg:justify-between lg:py-9.5">
            {/* Copyright */}
            <p className="text-[12px] text-[#B9B9CC] font-medium leading-5">
              © All rights reserved, WeCollect, 2026
            </p>

            {/* App buttons */}
            <div className="flex items-center gap-4">
              {/* Google Play */}
              <GooglePlayIcon />

              {/* App Store */}
              <AppleStoreIcon />
            </div>
          </Container>
        </section>
      </div>
    </footer>
  );
}
