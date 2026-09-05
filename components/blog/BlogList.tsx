"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Container } from "@/components/common/Container";
import { ArrowUpRightIcon } from "@/assets/svgs";

import BlogPlaceholder from "@/assets/pngs/blog-placeholder.png";

interface BlogPost {
  id: string;
  category: string;
  readTime: string;
  title: string;
  excerpt: string;
  date: string;
  image: any;
}

const CATEGORIES = [
  "All",
  "Verification",
  "Data Collection",
  "Field Operations",
  "Data Validation",
  "AI Data",
];

const MOCK_POSTS: BlogPost[] = [
  {
    id: "1",
    category: "Verification",
    readTime: "2 min read",
    title: "How to run address validation at scale in Africa",
    excerpt:
      "Manual address verification fails at scale. Here's how technology changes the equation for banks, fin...",
    date: "Dec 2024",
    image: BlogPlaceholder,
  },
  {
    id: "2",
    category: "Data Collection",
    readTime: "10 min read",
    title: "Choosing a field data collection partner",
    excerpt:
      "Not all field data collection companies are the same. The difference between clean, verifiable...",
    date: "Nov 2024",
    image: BlogPlaceholder,
  },
  {
    id: "3",
    category: "AI Data",
    readTime: "12 min read",
    title: "What is ground-truth data for AI — and why Africa needs it",
    excerpt:
      "AI models trained on Western data fail in African contexts. Ground-truth data — collected, verified, and ann...",
    date: "Dec 2024",
    image: BlogPlaceholder,
  },
  {
    id: "4",
    category: "Field Operations",
    readTime: "7 min read",
    title: "Field sales management: from WhatsApp to real-time GPS",
    excerpt:
      "Most African field sales teams run on WhatsApp groups and monthly spreadsheets. Here's what a moder...",
    date: "Dec 2024",
    image: BlogPlaceholder,
  },
  {
    id: "5",
    category: "Verification",
    readTime: "9 min read",
    title: "KYC field verification: the case for boots on the ground",
    excerpt:
      "Digital KYC has real limits in markets with address inconsistency, informal employment, and low trust in remot...",
    date: "Oct 2024",
    image: BlogPlaceholder,
  },
  {
    id: "6",
    category: "Data Validation",
    readTime: "11 min read",
    title: "GIS data validation: why location metadata matters",
    excerpt:
      "Survey data without reliable location metadata is hard to analyse and impossible to audit. GIS validation i...",
    date: "Sep 2024",
    image: BlogPlaceholder,
  },
];

function SearchIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <circle cx="11" cy="11" r="8" />
      <path d="M21 21L16.65 16.65" />
    </svg>
  );
}

function ChevronLeft() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <path d="M15 18L9 12L15 6" />
    </svg>
  );
}

function ChevronRight() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <path d="M9 18L15 12L9 6" />
    </svg>
  );
}

export function BlogList() {
  const [activeCategory, setActiveCategory] = useState("All");

  return (
    <section className="py-20 bg-white">
      <Container>
        
        {/* Search Bar & Tabs */}
        <div className="max-w-[1000px] mx-auto mb-16">
          <form 
            className="flex w-full items-center border border-[#E9E9EF] p-1.5 focus-within:border-[#4B4BDB] transition-colors"
            onSubmit={(e) => e.preventDefault()}
          >
            <div className="flex-1 flex items-center px-4 gap-3 text-[#9898B3] focus-within:text-[#4B4BDB]">
              <SearchIcon />
              <input 
                type="text" 
                placeholder="Search any keyword..." 
                className="w-full bg-transparent text-[14px] text-[#0D0D26] placeholder:text-[#9898B3] outline-none"
              />
            </div>
            <button 
              type="submit"
              className="bg-[#4B4BDB] text-white px-8 py-2.5 text-[14px] font-medium hover:bg-[#3838C5] transition-colors flex items-center gap-2"
            >
              <SearchIcon />
              Search
            </button>
          </form>

          <div className="mt-4 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 border border-[#E9E9EF] divide-y lg:divide-y-0 divide-x-0 lg:divide-x divide-[#E9E9EF]">
            {CATEGORIES.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`py-3.5 text-[12px] font-medium text-center transition-colors border-x lg:border-none border-[#E9E9EF] ${
                  activeCategory === cat 
                    ? "bg-[#C3C3F4] text-[#202064]" 
                    : "bg-white text-[#686890] hover:bg-gray-50"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Blog Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 border-t border-l border-[#E9E9EF]">
          {MOCK_POSTS.map((post) => (
            <article key={post.id} className="border-b border-r border-[#E9E9EF] p-6 lg:p-8 flex flex-col h-full bg-white hover:shadow-lg transition-shadow">
              <div className="relative w-full aspect-[16/10] mb-6 overflow-hidden bg-gray-100">
                <Image src={post.image} alt={post.title} fill className="object-cover" />
              </div>
              
              <div className="flex items-center justify-between mb-4">
                <span className="bg-[#EEEDFC] text-[#4B4BDB] text-[11px] font-semibold px-2.5 py-1 rounded-[4px]">
                  {post.category}
                </span>
                <span className="text-[11px] font-medium text-[#9898B3]">
                  {post.readTime}
                </span>
              </div>

              <h3 className="font-merriweather text-[18px] lg:text-[20px] font-bold text-[#0D0D26] mb-3 leading-[1.4]">
                {post.title}
              </h3>

              <p className="text-[13px] lg:text-[14px] text-[#686890] leading-[1.6] mb-8 flex-1">
                {post.excerpt}
              </p>

              <div className="flex items-center justify-between mt-auto">
                <Link href={`/blog/${post.id}`} className="flex items-center gap-1.5 text-[#4B4BDB] text-[13px] font-bold hover:text-[#3838C5] transition-colors">
                  Read More 
                  <span className="w-3.5 h-3.5 flex items-center justify-center"><ArrowUpRightIcon /></span>
                </Link>
                <span className="text-[11px] font-medium text-[#9898B3] uppercase">
                  {post.date}
                </span>
              </div>
            </article>
          ))}
        </div>

        {/* Pagination */}
        <div className="mt-16 flex items-center justify-center gap-2">
          <button className="flex h-10 w-10 items-center justify-center bg-[#B9B9CC] text-white cursor-not-allowed">
            <ChevronLeft />
          </button>
          <button className="flex h-10 w-10 items-center justify-center bg-[#4B4BDB] text-white font-medium text-[14px]">
            1
          </button>
          <div className="flex h-10 w-10 items-center justify-center border border-[#E9E9EF] bg-white text-[#686890] font-medium text-[14px]">
            ...
          </div>
          <button className="flex h-10 w-10 items-center justify-center border border-[#E9E9EF] bg-white text-[#686890] font-medium text-[14px] hover:bg-gray-50 transition-colors">
            10
          </button>
          <button className="flex h-10 w-10 items-center justify-center border border-[#E9E9EF] bg-white text-[#686890] font-medium text-[14px] hover:bg-gray-50 transition-colors">
            32
          </button>
          <button className="flex h-10 w-10 items-center justify-center bg-[#4B4BDB] text-white hover:bg-[#3838C5] transition-colors">
            <ChevronRight />
          </button>
        </div>

      </Container>
    </section>
  );
}
