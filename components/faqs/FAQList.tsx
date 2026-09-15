"use client";

import { useState } from "react";
import { Container } from "@/components/common/Container";

const allFaqs = [
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
  {
    question:
      "How do I add different types of questions (multiple-choice, open-ended, etc)?",
    answer:
      "Our template is pre-designed in a flexible way that you could customised your respondent’s response type as “short answer”, “paragraph”, multiple-choice, date, time, etc.",
  },
  {
    question:
      "Is there an option for agents to save progress and continue later?",
    answer:
      "Yes. Data is automatically saved on our server in real time. This makes it possible for agents to continue from where they left off when they return.",
  },
  {
    question: "How do I share my project with participants?",
    answer:
      "You can share your project to your field agents by adding the agents you wish to use on your project. Wecollect would then send them a link to your projects. On installing Wecollect mobile app, field agents would have access to your project.",
  },
  {
    question:
      "Can I export the collected data in different formats (excel. CSV. etc)?",
    answer:
      "Yes. your data report can be exported in CSV format from the project manager’s dashboard.",
  },
  {
    question: "Is there a limit to the number of responses I can collect?",
    answer:
      "The minimum or maximum number of responses to be collected is determined by the project owner/manager.",
  },
  {
    question: "Is there an offline mode for data collection?",
    answer:
      "Yes. Field agents can collect data offline or in situations where the network is poor. Data is automatically submitted to the server when the network is restored.",
  },
  {
    question: "How do I view the collected data within the app?",
    answer:
      "You can view collected data within the app from the “Data” page on the slide menu on the mobile app.",
  },
  {
    question: "Are there any analytics or reporting features available?",
    answer:
      "Yes. There are basic analytics on the project manager’s dashboard which gives a comprehensive report of the data that has been collected.",
  },
  {
    question: "What happens if I accidentally delete a survey or data?",
    answer:
      "Write Us at info@Wecollect.tech and we will recover the data you deleted for you.",
  },
  {
    question: "Is the app available on both iOS and Android?",
    answer:
      "The mobile apps are available for download on Google play and App stores.",
  },
  {
    question: "How do I manage field agents’ responses and data?",
    answer: "You can decide to approve, decline or export submitted data.",
  },
  {
    question: "Is there a customer support or help centre available?",
    answer:
      "In a case of incorrect or incomplete data, the project manager can decline such data.",
  },
];

export function FAQList() {
  const [openIndex, setOpenIndex] = useState(0);

  const toggleFAQ = (index: number) => {
    setOpenIndex((current) => (current === index ? -1 : index));
  };

  return (
    <section className="w-full bg-white py-16 md:py-24">
      <Container>
        <div className="mx-auto max-w-200">
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
                        <span className="absolute left-0 top-1/2 h-0.5 w-4 md:w-5 -translate-y-1/2 bg-white" />

                        {/* Vertical */}
                        {!isOpen && (
                          <span className="absolute left-1/2 top-0 h-4 w-0.5 md:h-5 md:w-0.5 -translate-x-1/2 bg-white" />
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
