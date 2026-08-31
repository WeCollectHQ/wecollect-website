"use client";

import { useState } from "react";
import { Container } from "@/components/common/Container";

const testimonials = [
  {
    company: "Techpoint",
    name: "Yinka, Team Lead, Techpoint",
    quote:
      "Overall, I'm very satisfied with the service. The respondents represented a solid and engaged audience, and the results were highly insightful. I'll definitely recommend it.",
  },
  {
    company: "Client Company",
    name: "Jane Doe, Project Manager",
    quote:
      "WeCollect made our field operation much easier to manage. The data was reliable, well structured, and delivered exactly when we needed it.",
  },
  {
    company: "Partner Organization",
    name: "John Doe, Operations Lead",
    quote:
      "The quality of the field data and the speed of delivery exceeded our expectations. We were able to make better decisions with confidence.",
  },
];

function StarRating() {
  return (
    <div
      className="flex items-center gap-0.5 text-[#FDE93D]"
      aria-label="5 out of 5 stars"
    >
      {[1, 2, 3, 4, 5].map((star) => (
        <span key={star} className="text-[20px] leading-none">
          ★
        </span>
      ))}
    </div>
  );
}

function ArrowLeftIcon() {
  return (
    <svg
      width="20"
      height="20"
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M12.5 4.5L7 10L12.5 15.5"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function ArrowRightIcon() {
  return (
    <svg
      width="20"
      height="20"
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M7.5 4.5L13 10L7.5 15.5"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export function Testimonials() {
  const [activeIndex, setActiveIndex] = useState(0);

  const previous = () => {
    setActiveIndex((current) => Math.max(current - 1, 0));
  };

  const next = () => {
    setActiveIndex((current) => Math.min(current + 1, testimonials.length - 1));
  };

  const testimonial = testimonials[activeIndex];

  return (
    <section className="w-full bg-white py-[120px] md:py-[150px]">
      <Container>
        {/* Header */}
        <div className="text-center">
          <p className="text-[10px] font-medium uppercase leading-4 text-[#9898B3] md:text-[12px]">
            What clients say
          </p>

          <h2 className="mt-4 font-merriweather text-[28px] font-bold leading-9 tracking-[-0.5%] text-[#0D0D26] md:text-[40px] md:leading-12 md:tracking-[-1%]">
            Trusted in the field.
          </h2>
        </div>

        {/* Carousel */}
        <div className="mx-auto mt-10 max-w-[634px] md:mt-12">
          {/* Viewport */}
          <div className="overflow-hidden">
            {/* Track */}
            <div
              className="flex transition-transform duration-500 ease-out"
              style={{
                transform: `translateX(-${activeIndex * 100}%)`,
              }}
            >
              {testimonials.map((item) => (
                <article
                  key={item.company}
                  className="w-full shrink-0 border border-[#E9E9EF] px-8 py-8 md:px-8 md:py-9"
                >
                  {/* Rating */}
                  <StarRating />

                  {/* Quote */}
                  <p className="mt-6 text-[14px] font-medium leading-6 text-[#686890] md:text-[16px] md:leading-6.5">
                    {item.quote}
                  </p>

                  {/* Author */}
                  <div className="mt-8">
                    <p className="text-[14px] font-medium leading-5 text-[#0D0D26]">
                      {item.company}
                    </p>

                    <p className="mt-1 text-[12px] font-medium leading-5 text-[#0D0D26]">
                      {item.name}
                    </p>
                  </div>
                </article>
              ))}
            </div>
          </div>

          {/* Controls */}
          <div className="mt-3 flex items-center justify-between">
            {/* Pagination */}
            <div className="flex items-center gap-1.5">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  type="button"
                  onClick={() => setActiveIndex(index)}
                  aria-label={`Go to testimonial ${index + 1}`}
                  aria-current={activeIndex === index}
                  className={[
                    "h-1.5 transition-all duration-300",
                    activeIndex === index
                      ? "w-8 bg-[#4B4BDB]"
                      : "w-1.5 bg-[#B9B9CC]",
                  ].join(" ")}
                />
              ))}
            </div>

            {/* Arrows */}
            <div className="flex items-center gap-5">
              <button
                type="button"
                onClick={previous}
                disabled={activeIndex === 0}
                aria-label="Previous testimonial"
                className="flex h-9 w-9 items-center justify-center bg-[#B9B9CC] text-white transition-colors hover:bg-[#9898B3] disabled:cursor-not-allowed disabled:opacity-70"
              >
                <ArrowLeftIcon />
              </button>

              <button
                type="button"
                onClick={next}
                disabled={activeIndex === testimonials.length - 1}
                aria-label="Next testimonial"
                className="flex h-9 w-9 items-center justify-center bg-[#4B4BDB] text-white transition-colors hover:bg-[#3838C5] disabled:cursor-not-allowed disabled:opacity-70"
              >
                <ArrowRightIcon />
              </button>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
