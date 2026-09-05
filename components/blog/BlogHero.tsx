"use client";

import Link from "next/link";
import { SolutionHero } from "@/components/common/SolutionHero";
import BlogHeroImage from "@/assets/pngs/blog-hero.png";
import { Button } from "@/components/common/Button";

export function BlogHero() {
  return (
    <SolutionHero
      eyebrow="Blog"
      title={
        <>
          Insights on field <br className="hidden md:block" /> operations and
          data.
        </>
      }
      description="Practical guides for organisations running field operations and collecting data across Africa."
      image={BlogHeroImage}
      imageAlt="WeCollect blog hero"
      actions={
        <div className="flex flex-col w-full max-w-110">
          <label className="text-[12px] text-[#BDBDD7] mb-2.5 font-medium">
            Subscribe to WeCollect newsletters
          </label>

          <form
            className="flex items-center w-full border border-[#E9E9EF] bg-[#151540] p-1 pl-4"
            onSubmit={(e) => e.preventDefault()}
          >
            <input
              type="email"
              placeholder="Enter your email..."
              className="flex-1 bg-transparent text-[14px] text-white placeholder:text-[#686890] outline-none"
              required
            />
            <Button type="submit" variant="secondary" size="sm">
              Subscribe
            </Button>
          </form>

          <p className="text-[11px] text-[#9898B3] mt-3">
            By subscribing, I agree to WeCollect{" "}
            <Link href="/privacy-policy" className="text-[#4B4BDB] underline">
              Privacy Policy
            </Link>
          </p>
        </div>
      }
    />
  );
}
