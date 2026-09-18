"use client";

import { useState, useEffect } from "react";
import { Container } from "@/components/common/Container";
import { ArrowLeftIcon, ArrowRightIcon } from "@/assets/svgs";

const testimonials = [
  {
    company: "Techpoint Africa",
    name: "Yinka, CEO, Intelpoint",
    quote:
      "Overall, I'm very satisfied with the service. The respondents represented a solid and engaged audience, and the results were highly insightful. I'll definitely recommend it.",
  },
  {
    company: "FPMPN",
    name: "Obi Mercy, PM, FPMPN",
    quote:
      "I was glad to see that I could use a one-stop software for my project, without having to worry about how to find field enumerators across Nigeria. WeCollect saved me the stress.",
  },
  {
    company: "Kaduna Electric",
    name: "Ibrahim Kolapo, GIS Consultant",
    quote:
      "The WeCollect team brought not only strong technical expertise but also a deep understanding of field realities in northern Nigeria. The mobile data collection process was seamless, and the geotagging accuracy helped us map customer distribution and infrastructure gaps with far greater clarity than we previously had.",
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

const statsData = [
  { value: "43", label: "Delivered Projects" },
  { value: "Over 20", label: "Organizations" },
  { value: "100%", label: "Delivery" },
];

export function Testimonials() {
  const [activeIndex, setActiveIndex] = useState(0);

  const previous = () => {
    setActiveIndex(
      (current) => (current - 1 + testimonials.length) % testimonials.length,
    );
  };

  const next = () => {
    setActiveIndex((current) => (current + 1) % testimonials.length);
  };

  // Auto-play effect
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((current) => (current + 1) % testimonials.length);
    }, 8000);
    return () => clearInterval(interval);
  }, [activeIndex]);

  // Reusable Carousel Track
  const renderTrack = () => (
    <div className="overflow-hidden">
      <div
        className="flex transition-transform duration-500 ease-out"
        style={{ transform: `translateX(-${activeIndex * 100}%)` }}
      >
        {testimonials.map((item) => (
          <article
            key={item.company}
            className="w-full shrink-0 px-8 py-8 md:px-10 md:py-12"
          >
            <StarRating />
            <p className="mt-6 text-[14px] font-medium leading-6 text-[#686890] md:text-[16px] md:leading-6.5">
              {item.quote}
            </p>
            <div className="mt-8 flex flex-col gap-1">
              
              <p className="text-[12px] font-medium leading-5 text-[#0D0D26]">
                {item.name}
              </p>
            </div>
          </article>
        ))}
      </div>
    </div>
  );

  return (
    <section className="w-full bg-white py-30 md:py-37.5 border-y border-[#E9E9EF]">
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

        {/* Content Wrapper */}
        <div className="mx-auto mt-10 md:mt-12 w-full">
          <div className="grid md:grid-cols-[250px_1fr] border border-[#E9E9EF]">
            {/* Left Stats Sidebar */}
            <div className="bg-[#F8F9FB] flex flex-col divide-y divide-[#E9E9EF] border-r border-[#E9E9EF]">
              {statsData.map((stat) => (
                <div
                  key={stat.label}
                  className="p-6 md:p-8 flex flex-col justify-center grow"
                >
                  <h4 className="text-[20px] md:text-[24px] font-bold text-[#0D0D26] font-merriweather">
                    {stat.value}
                  </h4>
                  <p className="text-[12px] md:text-[13px] font-medium text-[#7F7FA8] mt-2">
                    {stat.label}
                  </p>
                </div>
              ))}
            </div>

            {/* Right Carousel Track */}
            {renderTrack()}
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
                aria-label="Previous testimonial"
                className="flex h-9 w-9 items-center justify-center text-white transition-colors cursor-pointer bg-[#4B4BDB] hover:bg-[#3838C5]"
              >
                <ArrowLeftIcon />
              </button>
              <button
                type="button"
                onClick={next}
                aria-label="Next testimonial"
                className="flex h-9 w-9 items-center justify-center text-white transition-colors cursor-pointer bg-[#4B4BDB] hover:bg-[#3838C5]"
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
