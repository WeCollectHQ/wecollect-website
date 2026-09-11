"use client";
import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Container } from "@/components/common/Container";
import { ArrowUpRightIcon, SearchIcon } from "@/assets/svgs";
import { Button } from "@/components/common/Button";
import BlogPlaceholder from "@/assets/pngs/blog-placeholder.png";
import { WordPressPost } from "@/lib/wordpress";

interface BlogPost {
  id: string;
  category: string;
  readTime: string;
  title: string;
  excerpt: string;
  date: string;
  image: any;
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

export function BlogList({
  initialPosts = [],
}: {
  initialPosts?: WordPressPost[];
}) {
  // Dynamically generate tabs based on the actual categories returned by WordPress
  const dynamicCategories = [
    "All",
    ...Array.from(new Set(initialPosts.flatMap((post) => post.categories))),
  ];

  const [activeCategory, setActiveCategory] = useState("All");
  const [searchQuery, setSearchQuery] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const postsPerPage = 9;

  // Filter by category and search query
  const filteredPosts = initialPosts.filter((post) => {
    const matchesCategory =
      activeCategory === "All" || post.categories.includes(activeCategory);
    const matchesSearch =
      post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      post.excerpt.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const totalPages = Math.ceil(filteredPosts.length / postsPerPage);
  const currentPosts = filteredPosts.slice(
    (currentPage - 1) * postsPerPage,
    currentPage * postsPerPage,
  );

  return (
    <section className="py-20 bg-white">
      <Container>
        {/* Search Bar & Tabs */}
        <div className="max-w-250 mx-auto mb-16">
          <form
            className="flex w-full items-center border border-[#E9E9EF] p-1.5 focus-within:border-[#4B4BDB] transition-colors"
            onSubmit={(e) => e.preventDefault()}
          >
            <div className="flex-1 flex items-center px-4 gap-3 text-[#9898B3] focus-within:text-[#4B4BDB]">
              <SearchIcon />
              <input
                type="text"
                placeholder="Search any keyword..."
                value={searchQuery}
                onChange={(e) => {
                  setSearchQuery(e.target.value);
                  setCurrentPage(1);
                }}
                className="w-full bg-transparent text-[14px] text-[#0D0D26] placeholder:text-[#9898B3] outline-none"
              />
            </div>
            <Button type="submit" size="sm" className="mr-0.75">
              <SearchIcon />
              Search
            </Button>
          </form>

          <div className="mt-4 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 border border-[#E9E9EF] divide-y lg:divide-y-0 divide-x-0 lg:divide-x divide-[#E9E9EF]">
            {dynamicCategories.map((cat) => (
              <button
                key={cat}
                onClick={() => {
                  setActiveCategory(cat);
                  setCurrentPage(1);
                }}
                className={`cursor-pointer py-3.5 text-[12px] font-medium text-center transition-colors border-x lg:border-none border-[#E9E9EF] ${
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
        {filteredPosts.length === 0 ? (
          <div className="flex flex-col items-center justify-center py-24 text-center border border-[#E9E9EF] bg-[#FAFAFD] rounded-sm">
            <div className="w-16 h-16 bg-[#EEEDFC] text-[#4B4BDB] rounded-full flex items-center justify-center mb-4">
              <SearchIcon />
            </div>
            <h3 className="font-merriweather text-[20px] font-bold text-[#0D0D26] mb-2">
              No articles found
            </h3>
            <p className="text-[14px] text-[#686890] max-w-100">
              We couldn't find any articles matching your search or selected
              category. Try adjusting your filters.
            </p>
            <button
              onClick={() => {
                setActiveCategory("All");
                setSearchQuery("");
              }}
              className="mt-6 text-[#4B4BDB] font-semibold text-[14px] hover:underline"
            >
              Clear all filters
            </button>
          </div>
        ) : (
          <div className="grid md:grid-cols-2 lg:grid-cols-3 border-t border-l border-[#E9E9EF]">
            {currentPosts.map((post) => (
              <article
                key={post.slug}
                className="border-b border-r border-[#E9E9EF] p-6 lg:p-8 flex flex-col h-full bg-white hover:shadow-lg transition-shadow"
              >
                <div className="relative w-full aspect-16/10 mb-6 overflow-hidden bg-gray-100">
                  <Image
                    src={post.image || BlogPlaceholder}
                    alt={post.title}
                    fill
                    className="object-cover"
                  />
                </div>

                <div className="flex items-center justify-between mb-4">
                  <span className="bg-[#EEEDFC] text-[#4B4BDB] text-[11px] font-semibold px-2.5 py-1 rounded-[4px]">
                    {post.categories[0] || "Blog"}
                  </span>
                  <span className="text-[11px] font-medium text-[#9898B3]">
                    {post.readingTime} min read
                  </span>
                </div>

                <h3 className="font-merriweather text-[18px] lg:text-[20px] font-bold text-[#0D0D26] mb-3 leading-[1.4]">
                  {post.title}
                </h3>

                <p className="text-[13px] lg:text-[14px] text-[#686890] leading-[1.6] mb-8 flex-1 line-clamp-3">
                  {post.excerpt}
                </p>

                <div className="flex items-center justify-between mt-auto">
                  <Link
                    href={`/blog/${post.slug}`}
                    className="flex items-center gap-1.5 text-[#4B4BDB] text-[13px] font-bold hover:text-[#3838C5] transition-colors"
                  >
                    Read More
                    <span className="w-3.5 h-3.5 flex items-center justify-center">
                      <ArrowUpRightIcon />
                    </span>
                  </Link>
                  <span className="text-[11px] font-medium text-[#9898B3] uppercase">
                    {post.date}
                  </span>
                </div>
              </article>
            ))}
          </div>
        )}

        {/* Pagination */}
        {totalPages > 1 && (
          <div className="mt-16 flex items-center justify-center gap-2">
            <button
              onClick={() => setCurrentPage((p) => Math.max(1, p - 1))}
              disabled={currentPage === 1}
              className="flex h-9 w-9 items-center justify-center text-white transition-colors cursor-pointer bg-[#4B4BDB] hover:bg-[#3838C5] disabled:cursor-not-allowed disabled:bg-[#B9B9CC] disabled:hover:bg-[#B9B9CC]"
            >
              <ArrowLeftIcon />
            </button>

            {Array.from({ length: totalPages }).map((_, i) => (
              <button
                key={i}
                onClick={() => setCurrentPage(i + 1)}
                className={`flex h-10 w-10 items-center justify-center ${currentPage === i + 1 ? "bg-[#4B4BDB] text-white" : "border border-[#E9E9EF] bg-white text-[#686890] hover:bg-gray-50"} font-medium text-[14px] transition-colors`}
              >
                {i + 1}
              </button>
            ))}

            <button
              onClick={() => setCurrentPage((p) => Math.min(totalPages, p + 1))}
              disabled={currentPage === totalPages}
              className="flex h-9 w-9 items-center justify-center text-white transition-colors cursor-pointer bg-[#4B4BDB] hover:bg-[#3838C5] disabled:cursor-not-allowed disabled:bg-[#B9B9CC] disabled:hover:bg-[#B9B9CC]"
            >
              <ArrowRightIcon />
            </button>
          </div>
        )}
      </Container>
    </section>
  );
}
