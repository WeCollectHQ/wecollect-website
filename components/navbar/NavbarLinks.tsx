"use client";

import Link from "next/link";
import { useState } from "react";
import { solutionLinks } from "@/constants/navigation";
import { links } from "./navbar-data";

export function NavbarLinks() {
  const [solutionsOpen, setSolutionsOpen] = useState(false);

  return (
    <nav
      aria-label="Main navigation"
      className="hidden items-center gap-7.25 lg:flex"
    >
      <Link
        href="/platform"
        className="group relative flex h-10 items-center text-[14px] font-medium leading-5 tracking-[0%] text-[#686890]"
      >
        <span className="relative">
          Platform
          <span className="absolute -bottom-2 left-0 h-0.75 w-full origin-left scale-x-0 bg-[#686890] transition-transform duration-200 group-hover:scale-x-100" />
        </span>
      </Link>

      {/* Solutions */}
      <div
        className="relative"
        onMouseEnter={() => setSolutionsOpen(true)}
        onMouseLeave={() => setSolutionsOpen(false)}
      >
        <button
          type="button"
          onClick={() => setSolutionsOpen((open) => !open)}
          className="flex h-10 items-center gap-2 text-[14px] font-medium text-[#555584] transition-colors hover:text-[#4946D3]"
          aria-expanded={solutionsOpen}
        >
          <span>Solutions</span>

          <svg
            width="14"
            height="14"
            viewBox="0 0 14 14"
            fill="none"
            className={`transition-transform duration-200 ${
              solutionsOpen ? "rotate-180" : ""
            }`}
          >
            <path
              d="M3.5 5.25L7 8.75L10.5 5.25"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </button>

        {solutionsOpen && (
          <div className="absolute left-1/2 top-full z-50 w-54.25 -translate-x-1/2 pt-1.75">
            <div className="overflow-hidden rounded-[3px] border border-[#E5E5EE] bg-white shadow-[0_8px_20px_rgba(0,0,0,0.08)]">
              {/* Heading */}
              <div className="px-2 pb-1.75 pt-2.5">
                <span className="text-[13px] font-medium uppercase tracking-[-0.1px] text-[#A5A5C0]">
                  Solutions
                </span>
              </div>

              {/* Links */}
              <div className="px-2 pb-2 pt-2">
                {solutionLinks.map((solution) => (
                  <Link
                    key={solution.href}
                    href={solution.href}
                    className="flex h-9.75 items-center border border-[#E2E2EA] px-2.5 text-[14px] font-medium text-[#555584] transition-colors hover:bg-[#F7F7FF] hover:text-[#4946D3]"
                  >
                    {solution.label}
                  </Link>
                ))}
              </div>
            </div>
          </div>
        )}
      </div>

      {/* Remaining links */}
      {links.slice(1).map((link) => (
        <Link
          key={link.href}
          href={link.href}
          className="group relative flex h-10 items-center text-[14px] font-medium text-[#686890] leading-5 tracking-[0%]"
        >
          <span className="relative">
            {link.label}

            <span className="absolute -bottom-2 left-0 h-0.75 w-full origin-left scale-x-0 bg-[#686890] transition-transform duration-200 group-hover:scale-x-100" />
          </span>
        </Link>
      ))}
    </nav>
  );
}
