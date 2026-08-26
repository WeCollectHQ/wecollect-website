"use client";
import { WecollectLogo } from "../Logo";
import Link from "next/link";
import { useState } from "react";
import { ArrowUpRightIcon, OpenMenuIcon, CloseMenuIcon } from "@/assets/svgs";
import { solutionLinks } from "@/constants/navigation";
import { Button } from "@/components/Button";

export function NavbarMobile() {
  const [open, setOpen] = useState(false);
  const [solutionsOpen, setSolutionsOpen] = useState(true);

  const mobileSolutionLinks = [
    ...solutionLinks.filter(
      (solution) => solution.href === "/solutions/verification-reporting",
    ),
    ...solutionLinks.filter(
      (solution) => solution.href !== "/solutions/verification-reporting",
    ),
  ];

  return (
    <div className="lg:hidden">
      {/* Closed navbar */}
      {!open && (
        <div className="flex h-15 items-center justify-between bg-white">
          <div className="flex items-center gap-2.25">
            <Button
              href="/demo"
              variant="primary"
              size="md"
              icon={<ArrowUpRightIcon className="" />}
              className="gap-2.25 px-3 text-[12px]"
            >
              Book a Demo
            </Button>

            <button
              type="button"
              onClick={() => setOpen(true)}
              aria-label="Open menu"
              aria-expanded={false}
              className="flex h-10 w-10 items-center justify-center"
            >
              <OpenMenuIcon />
            </button>
          </div>
        </div>
      )}

      {/* Open menu */}
      {open && (
        <div className="fixed inset-0 z-100 flex h-dvh flex-col bg-[#1E1E5A]">
          {/* Header */}
          <header className="flex h-15 shrink-0 items-center justify-between bg-white px-3.5">
            <WecollectLogo />

            <button
              type="button"
              onClick={() => setOpen(false)}
              aria-label="Close menu"
              aria-expanded={true}
              className="flex h-10 w-10 items-center justify-center"
            >
              <CloseMenuIcon />
            </button>
          </header>

          {/* Menu content */}
          <div className="flex min-h-0 flex-1 flex-col px-3.25 pb-7.75 pt-7.75">
            <nav className="flex flex-col gap-2.5">
              {/* Platform */}
              <Link
                href="/platform"
                onClick={() => setOpen(false)}
                className="flex h-8.75 items-center border border-[#4B4B7B] px-3 text-[14px] font-medium text-[#E9E9EF]"
              >
                Platform
              </Link>

              {/* Solutions */}
              <div>
                <button
                  type="button"
                  onClick={() => setSolutionsOpen((value) => !value)}
                  aria-expanded={solutionsOpen}
                  className="flex h-9.5 w-full items-center justify-between border border-[#4B4B7B] px-3 text-[14px] font-medium text-[#E9E9EF]"
                >
                  <span>Solutions</span>

                  <svg
                    width="14"
                    height="14"
                    viewBox="0 0 14 14"
                    fill="none"
                    aria-hidden="true"
                    className={`text-[#7777A7] transition-transform duration-200 ${
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
                  <div className="mt-1.75 grid grid-cols-2 gap-1.75">
                    {mobileSolutionLinks.map((solution) => (
                      <Link
                        key={solution.href}
                        href={solution.href}
                        onClick={() => setOpen(false)}
                        className={[
                          "flex min-h-8.75 items-center",
                          "border border-[#4B4B7B] bg-[#272776]",
                          "px-3",
                          "text-[14px] font-medium leading-[1.2]",
                          "text-[#E9E9EF]",
                          "transition-colors hover:bg-[#E9E9EF]/5",
                          solution.mobileFullWidth
                            ? "col-span-2"
                            : "col-span-1",
                        ].join(" ")}
                      >
                        {solution.label}
                      </Link>
                    ))}
                  </div>
                )}
              </div>

              {/* Agent Network */}
              <Link
                href="/agent-network"
                onClick={() => setOpen(false)}
                className="flex h-8.75 items-center border border-[#4B4B7B] px-3 text-[14px] font-medium text-[#E9E9EF]"
              >
                Agent Network
              </Link>

              {/* Blog */}
              <Link
                href="/blog"
                onClick={() => setOpen(false)}
                className="flex h-8.75 items-center border border-[#4B4B7B] px-3 text-[14px] font-medium text-[#E9E9EF]"
              >
                Blog
              </Link>
            </nav>

            {/* Bottom actions */}
            <div className="mt-auto grid grid-cols-2 gap-3.25 h-11.5">
              <Button
                href="/signin"
                size="md"
                variant="outline-white"
                onClick={() => setOpen(false)}
              >
                Sign In
              </Button>

              <Button
                href="/demo"
                variant="secondary"
                size="md"
                icon={<ArrowUpRightIcon className="text-[#4946D3]" />}
                className="text-[12px]"
                onClick={() => setOpen(false)}
              >
                Book a Demo
              </Button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
