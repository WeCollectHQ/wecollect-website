"use client";

import { useState } from "react";
import Image from "next/image";

import { Container } from "@/components/common/Container";
import { ArrowUpRightIcon } from "@/assets/svgs";
import FAQImage from "@/assets/pngs/faq-image.png";

const faqs = [
  {
    question: "What is WeCollect app used for?",
    answer:
      "The WeCollect App helps you and your business collect data on different disciplines and query across Africa.",
  },
  {
    question: "How do I create an account?",
    answer:
      "You can create an account by signing up on the WeCollect platform and following the registration steps.",
  },
  {
    question: "Can I customize the questions for my project?",
    answer:
      "Yes. You can customize your questions and configure your data collection workflow to fit your project.",
  },
  {
    question: "Is my data secure and private?",
    answer:
      "WeCollect is designed to keep your collected data secure and accessible only to authorized users.",
  },
  {
    question: "Can I collaborate with others on a data collection project?",
    answer:
      "Yes. You can work with other members of your team on your data collection projects.",
  },
];

export function FAQ() {
  const [openIndex, setOpenIndex] = useState(0);

  const toggleFAQ = (index: number) => {
    setOpenIndex((current) => (current === index ? -1 : index));
  };

  return (
    <section className="w-full bg-[#F7F7FF] py-20 md:py-[120px]">
      <Container>
        {/* Header */}
        <div className="mx-auto text-center">
          <p className="text-[10px] font-medium uppercase leading-4 text-[#9898B3] md:text-[12px]">
            FAQ
          </p>

          <h2 className="mt-4 font-merriweather text-[28px] font-bold leading-9 tracking-[-0.5%] text-[#0D0D26] md:text-[40px] md:leading-12 md:tracking-[-1%]">
            Our Users already asked, and We answered
          </h2>
        </div>

        {/* Content */}
        <div className="mx-auto mt-10 grid max-w-[1024px] grid-cols-1 md:mt-12 md:grid-cols-2">
          {/* FAQ */}
          <div>
            <div className="border border-[#E9E9EF] bg-white">
              {faqs.map((faq, index) => {
                const isOpen = openIndex === index;

                return (
                  <div
                    key={faq.question}
                    className="border-b border-[#E9E9EF] last:border-b-0"
                  >
                    <button
                      type="button"
                      onClick={() => toggleFAQ(index)}
                      className="flex w-full items-center justify-between gap-6 px-6 py-5 text-left md:px-6"
                      aria-expanded={isOpen}
                    >
                      <span className="text-[15px] font-medium leading-6 text-[#0D0D26] md:text-[16px]">
                        {faq.question}
                      </span>

                      {/* Toggle */}
                      <span
                        className={[
                          "flex h-9 w-9 shrink-0 items-center justify-center text-white transition-colors duration-200",
                          isOpen ? "bg-[#B9B9CC]" : "bg-[#4B4BDB]",
                        ].join(" ")}
                      >
                        <span className="relative block h-5 w-5">
                          {/* Horizontal */}
                          <span className="absolute left-0 top-1/2 h-[2px] w-5 -translate-y-1/2 bg-white" />

                          {/* Vertical */}
                          {!isOpen && (
                            <span className="absolute left-1/2 top-0 h-5 w-[2px] -translate-x-1/2 bg-white" />
                          )}
                        </span>
                      </span>
                    </button>

                    {/* Answer */}
                    <div
                      className={[
                        "grid transition-all duration-300 ease-in-out",
                        isOpen
                          ? "grid-rows-[1fr] opacity-100"
                          : "grid-rows-[0fr] opacity-0",
                      ].join(" ")}
                    >
                      <div className="overflow-hidden">
                        <p className="px-6 pb-6 pr-20 text-[13px] font-medium leading-5 text-[#686890]">
                          {faq.answer}
                        </p>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* See all */}
            <a
              href="/faq"
              className="mt-7 inline-flex items-center gap-2 px-3 text-[13px] font-medium text-[#4B4BDB]"
            >
              <span>See all</span>
              <ArrowUpRightIcon className="h-4 w-4" />
            </a>
          </div>

          {/* Image */}
          <div className="relative mt-8 h-[420px] w-full md:mt-0 md:h-auto">
            <Image
              src={FAQImage}
              alt="WeCollect field agent using the platform"
              fill
              className="object-cover object-center"
            />
          </div>
        </div>
      </Container>
    </section>
  );
}
