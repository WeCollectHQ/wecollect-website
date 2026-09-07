"use client";

import { useState } from "react";
import { Container } from "@/components/common/Container";

const allFaqs = [
  {
    question: "What is WeCollect app used for?",
    answer: "The WeCollect App helps you and your business collect data on different disciplines and query across Africa.",
  },
  {
    question: "How do I create an account?",
    answer: "You can create an account by signing up on the WeCollect platform and following the registration steps.",
  },
  {
    question: "Can I customize the questions for my project?",
    answer: "Yes. You can customize your questions and configure your data collection workflow to fit your project.",
  },
  {
    question: "Is my data secure and private?",
    answer: "WeCollect is designed to keep your collected data secure and accessible only to authorized users.",
  },
  {
    question: "Can I collaborate with others on a data collection project?",
    answer: "Yes. You can work with other members of your team on your data collection projects.",
  },
  {
    question: "How do I add different types of questions (multiple-choice, open-ended, etc)?",
    answer: "You can use our form builder to select from a variety of question types including multiple-choice, text inputs, photo uploads, and GPS locations.",
  },
  {
    question: "Is there an option for agents to save progress and continue later?",
    answer: "Yes, field agents can save incomplete responses locally on their device and resume them before final submission.",
  },
  {
    question: "How do I share my project with participants?",
    answer: "You can assign projects directly to specific field agents or share unique links for open data collection campaigns.",
  },
  {
    question: "Can I export the collected data in different formats (excel. CSV. etc)?",
    answer: "Absolutely. All collected data can be exported in standard formats like CSV and Excel for further analysis.",
  },
  {
    question: "Is there a limit to the number of responses I can collect?",
    answer: "Response limits depend on your current subscription plan. Enterprise plans offer unlimited responses.",
  },
  {
    question: "Is there an offline mode for data collection?",
    answer: "Yes. The WeCollect mobile app allows agents to collect data offline and automatically syncs when an internet connection is restored.",
  },
  {
    question: "How do I view the collected data within the app?",
    answer: "You can view incoming data in real-time through your project dashboard, which includes a tabular view and location map.",
  },
  {
    question: "Are there any analytics or reporting features available?",
    answer: "Yes, the dashboard provides built-in analytics, charts, and filtering tools to help you interpret your field data instantly.",
  },
  {
    question: "What happens if I accidentally delete a survey or data?",
    answer: "Deleted data can sometimes be recovered within a 30-day window by contacting our support team, but we highly recommend exporting data before deletion.",
  },
  {
    question: "Is the app available on both iOS and Android?",
    answer: "Yes, the WeCollect field agent app is available for download on both the Apple App Store and Google Play Store.",
  },
  {
    question: "How do I manage field agents' responses and data?",
    answer: "Administrators can review, approve, or reject agent submissions directly from the dashboard to maintain data quality.",
  },
  {
    question: "Is there a customer support or help centre available?",
    answer: "Yes, we offer 24/7 support for enterprise clients, alongside a comprehensive help center with guides and tutorials for all users.",
  }
];

export function FAQList() {
  const [openIndex, setOpenIndex] = useState(0);

  const toggleFAQ = (index: number) => {
    setOpenIndex((current) => (current === index ? -1 : index));
  };

  return (
    <section className="w-full bg-white py-16 md:py-24">
      <Container>
        <div className="mx-auto max-w-[800px]">
          <div className="border border-[#E9E9EF] bg-white">
            {allFaqs.map((faq, index) => {
              const isOpen = openIndex === index;

              return (
                <div
                  key={index}
                  className="border-b border-[#E9E9EF] last:border-b-0"
                >
                  <button
                    type="button"
                    onClick={() => toggleFAQ(index)}
                    className="flex w-full items-center justify-between gap-6 px-6 py-5 text-left md:px-8 hover:bg-gray-50 transition-colors"
                    aria-expanded={isOpen}
                  >
                    <span className="text-[14px] font-bold leading-6 text-[#0D0D26] md:text-[15px]">
                      {faq.question}
                    </span>

                    {/* Toggle */}
                    <span
                      className={[
                        "flex h-8 w-8 md:h-9 md:w-9 shrink-0 items-center justify-center text-white transition-colors duration-200",
                        isOpen ? "bg-[#B9B9CC]" : "bg-[#4B4BDB]",
                      ].join(" ")}
                    >
                      <span className="relative block h-4 w-4 md:h-5 md:w-5">
                        {/* Horizontal */}
                        <span className="absolute left-0 top-1/2 h-[2px] w-4 md:w-5 -translate-y-1/2 bg-white" />

                        {/* Vertical */}
                        {!isOpen && (
                          <span className="absolute left-1/2 top-0 h-4 w-[2px] md:h-5 md:w-[2px] -translate-x-1/2 bg-white" />
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
                      <p className="px-6 md:px-8 pb-6 pr-20 text-[13px] font-medium leading-5 text-[#686890]">
                        {faq.answer}
                      </p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </Container>
    </section>
  );
}
