"use client";
import Image from "next/image";
import { useState } from "react";
import { Container } from "@/components/common/Container";
import { ArrowUpRightIcon } from "@/assets/svgs";
import FAQImage from "@/assets/pngs/faq-image.webp";

const faqs = [
  {
    question: "What is Wecollect app used for?",
    answer:
      "The Wecollect App helps you and your business collect data on different disciplines and query across Nigeria.",
  },
  {
    question: "How do I create an account?",
    answer:
      "Firstly, install the Wecollect app on your android or iOS mobile phone. Create an account with just your full name and phone number.",
  },
  {
    question: "Can I customize the questions for my project?",
    answer:
      "Yes you can customize the questions on the platform to suit your project query.",
  },
  {
    question: "Is my data secure and private?",
    answer: "Yes your data is secure on the platform.",
  },
  {
    question: "Can I collaborate with others on a data collection project?",
    answer:
      "Yes you can collaborate with others. All you have to do is share your organisation ID with your field agents who would be collecting your data.",
  },
];

import { Reveal } from "@/components/common/Reveal";

export function FAQ() {
  const [openIndex, setOpenIndex] = useState(0);

  const toggleFAQ = (index: number) => {
    setOpenIndex((current) => (current === index ? -1 : index));
  };

  return (
    <section className="w-full bg-[#F7F7FF] py-20 md:py-30">
      <Container>
        {/* Header */}
        <div className="mx-auto text-center">
          <Reveal delay={0.05} direction="up" distance={14}>
            <p className="text-[10px] font-medium uppercase leading-4 text-[#9898B3] md:text-[12px]">
              FAQ
            </p>
          </Reveal>

          <Reveal delay={0.15} direction="up" distance={20}>
            <h2 className="mt-4 font-merriweather text-[28px] font-bold leading-9 tracking-[-0.5%] text-[#0D0D26] md:text-[40px] md:leading-12 md:tracking-[-1%]">
              Our Users already asked, and We answered
            </h2>
          </Reveal>
        </div>

        {/* Content */}
        <div className="mx-auto mt-10 grid max-w-5xl grid-cols-1 md:mt-12 md:grid-cols-2">
          {/* FAQ */}
          <Reveal delay={0.2} direction="up" distance={20}>
            <div className="border border-[#E9E9EF] bg-white">
              {faqs.map((faq, index) => {
                const isOpen = openIndex === index;

                return (
                  <div
                    key={faq.question}
                    className="border-b border-[#E9E9EF] last:border-b-0 transition-colors duration-200"
                  >
                    <button
                      type="button"
                      onClick={() => toggleFAQ(index)}
                      className="group flex w-full items-center justify-between gap-6 px-6 py-5 text-left cursor-pointer transition-colors duration-200 hover:bg-[#F9F9FD]"
                      aria-expanded={isOpen}
                    >
                      <span className="text-[15px] font-bold md:font-medium leading-6 text-[#0D0D26] md:text-[16px]">
                        {faq.question}
                      </span>

                      {/* Animated + to - toggle */}
                      <span
                        className={[
                          "flex h-9 w-9 shrink-0 items-center justify-center text-white transition-colors duration-200",
                          isOpen
                            ? "bg-[#B9B9CC]"
                            : "bg-[#4B4BDB] hover:bg-[#3838C5]",
                        ].join(" ")}
                      >
                        <span className="relative block h-4 w-4">
                          {/* Horizontal line (always visible for both + and -) */}
                          <span className="absolute left-0 top-1/2 -mt-px h-0.5 w-4 bg-white" />

                          {/* Vertical line (collapses to leave a clean minus) */}
                          <span
                            className={[
                              "absolute left-1/2 top-0 -ml-px h-4 w-0.5 bg-white transition-all duration-200 ease-out origin-center",
                              isOpen
                                ? "scale-y-0 opacity-0"
                                : "scale-y-100 opacity-100",
                            ].join(" ")}
                          />
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
                        <p className="px-6 pb-6 pr-12 text-[13px] font-medium leading-6 text-[#686890]">
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
              href="/faqs"
              className="group mt-7 inline-flex items-center gap-2 px-3 text-[13px] font-medium text-[#4B4BDB] hover:text-[#3838C5] transition-colors"
            >
              <span>See all</span>
              <ArrowUpRightIcon className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </a>
          </Reveal>

          {/* Image */}
          <Reveal
            delay={0.3}
            direction="up"
            distance={24}
            className="relative mt-8 h-105 w-full md:mt-0 md:h-auto overflow-hidden group"
          >
            <Image
              src={FAQImage}
              alt="Wecollect field agent using the platform"
              fill
              className="object-cover object-center transition-transform duration-700 ease-out group-hover:scale-102"
            />
          </Reveal>
        </div>
      </Container>
    </section>
  );
}
