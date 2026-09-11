import { notFound } from "next/navigation";
import { fetchWordPressPostBySlug, fetchWordPressBlogs } from "@/lib/wordpress";
import Image from "next/image";
import Link from "next/link";
import { Container } from "@/components/common/Container";
import { Button } from "@/components/common/Button";
import { ArrowUpRightIcon } from "@/assets/svgs";

import BlogPlaceholder from "@/assets/pngs/blog-placeholder.png";

function ChevronLeftIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M15 18L9 12L15 6" />
    </svg>
  );
}

// Social Icons
function LinkedInIcon() { return <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/></svg>; }
function TwitterIcon() { return <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"/></svg>; }
function InstagramIcon() { return <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/></svg>; }
function FacebookIcon() { return <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z"/></svg>; }
function YouTubeIcon() { return <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z"/></svg>; }

export default async function BlogDetailPage(props: { params: Promise<{ slug: string }> }) {
  const params = await props.params;
  const post = await fetchWordPressPostBySlug(params.slug);
  if (!post) {
    notFound();
  }

  // Fetch 2 recent posts for the sidebar
  const recentPosts = await fetchWordPressBlogs({ perPage: 2 });

  return (
    <div className="bg-[#FAFAFD] pt-6 pb-20">
      <Container>
        <Link href="/blog" className="inline-flex items-center gap-2 text-[#686890] hover:text-[#0D0D26] text-[13.5px] font-medium transition-colors mb-8">
          <ChevronLeftIcon /> Back to blog
        </Link>

        {/* HERO SECTION */}
        <div className="max-w-[900px] mb-10">
          <div className="flex items-center gap-3 mb-5">
            <span className="bg-[#EEEDFC] text-[#4B4BDB] text-[12px] font-semibold px-3 py-1.5 rounded-[4px] uppercase tracking-wide">
              {post.categories[0] || "Blog"}
            </span>
            <span className="text-[13px] font-medium text-[#9898B3]">
              {post.readingTime} min read
            </span>
          </div>

          <h1 className="font-merriweather text-[32px] md:text-[44px] lg:text-[54px] font-extrabold text-[#0D0D26] leading-[1.15] tracking-tight mb-6">
            {post.title}
          </h1>

          <div className="flex items-center gap-3 text-[#686890] text-[14px]">
            <span className="font-medium text-[#0D0D26]">{post.authorName}</span>
            <span className="w-1 h-1 rounded-full bg-[#D9D9E3]" />
            <span>Author</span>
            <span className="w-1 h-1 rounded-full bg-[#D9D9E3]" />
            <span>{post.date}</span>
          </div>
        </div>

        {/* FEATURED IMAGE */}
        <div className="relative w-full aspect-[21/9] md:aspect-[21/8] bg-gray-200 overflow-hidden mb-12">
          <Image src={post.image || BlogPlaceholder} alt={post.title} fill className="object-cover" priority />
        </div>

        {/* MAIN CONTENT AREA */}
        <div className="flex flex-col lg:flex-row gap-12 lg:gap-20 relative">
          
          {/* LEFT COLUMN - ARTICLE */}
          <div className="flex-1 max-w-[800px]">
            <article 
              className="text-[#686890] text-[15px] leading-[1.8] wp-content"
              dangerouslySetInnerHTML={{ __html: post.content }}
            />
            <style dangerouslySetInnerHTML={{__html: `
              .wp-content h2, .wp-content h3, .wp-content h4 { color: #0D0D26; font-weight: bold; margin-top: 2.5rem; margin-bottom: 1.25rem; font-family: var(--font-merriweather); line-height: 1.3; }
              .wp-content h2 { font-size: 28px; }
              .wp-content h3 { font-size: 24px; }
              .wp-content h4 { font-size: 20px; }
              .wp-content p { margin-bottom: 1.5rem; }
              .wp-content ul { list-style-type: disc; padding-left: 2rem; margin-bottom: 1.5rem; }
              .wp-content ol { list-style-type: decimal; padding-left: 2rem; margin-bottom: 1.5rem; }
              .wp-content li { margin-bottom: 0.5rem; }
              .wp-content a { color: #4B4BDB; text-decoration: underline; text-underline-offset: 4px; }
              .wp-content img { max-width: 100%; height: auto; border-radius: 8px; margin: 2.5rem 0; box-shadow: 0 4px 6px -1px rgb(0 0 0 / 0.1); }
              .wp-content blockquote { border-left: 4px solid #4B4BDB; padding-left: 1.5rem; font-style: italic; background: #F8F9FB; padding: 1.5rem; border-radius: 0 8px 8px 0; margin: 2rem 0; color: #0D0D26; font-size: 1.1em; }
              .wp-content pre, .wp-content code { background: #F8F9FB; padding: 0.2em 0.4em; border-radius: 4px; font-family: monospace; font-size: 0.9em; }
              .wp-content pre { padding: 1.5rem; overflow-x: auto; }
              .wp-content figure { margin: 2.5rem 0; }
              .wp-content figcaption { text-align: center; font-size: 0.85em; color: #9898B3; margin-top: 0.75rem; }
            `}} />

            {/* Bottom Banner */}
            <div className="mt-16 bg-[#1A1A4A] p-8 md:p-12 text-center md:text-left flex flex-col md:flex-row items-center justify-between gap-8 rounded-lg shadow-xl">
              <div className="max-w-[400px]">
                <h4 className="text-[20px] font-bold text-white mb-3">
                  Interested in field data collection?
                </h4>
                <p className="text-[14px] text-[#BDBDD7] leading-[1.6]">
                  See how WeCollect handles address validation at scale across Africa — GPS-verified, QA-clean, audit-ready.
                </p>
              </div>
              <Button href="/demo" variant="secondary" size="lg" className="shrink-0" icon={<ArrowUpRightIcon />}>
                Book a Demo
              </Button>
            </div>
          </div>

          {/* RIGHT COLUMN - SIDEBAR */}
          <div className="w-full lg:w-[400px] shrink-0 flex flex-col divide-y divide-[#E9E9EF]">
            
            {/* Promo Box */}
            <div className="p-8 lg:p-10 border border-[#E9E9EF] border-b-0">
              <div className="bg-[#1A1A4A] p-6 rounded-lg text-white">
                <h4 className="text-[18px] font-bold mb-2">Ready to get started?</h4>
                <p className="text-[13px] text-[#BDBDD7] mb-6 leading-[1.5]">
                  See WeCollect live against your specific use-case in 30 minutes
                </p>
                <Button href="/demo" variant="secondary" size="sm" icon={<ArrowUpRightIcon />}>
                  Book a Demo
                </Button>
              </div>
            </div>

            {/* Social Share */}
            <div className="p-8 lg:p-10 border-x border-[#E9E9EF]">
              <span className="text-[12px] font-medium text-[#686890] uppercase block mb-4">
                Share post to:
              </span>
              <div className="flex items-center gap-3">
                {[
                  { icon: <LinkedInIcon />, label: "LinkedIn" },
                  { icon: <TwitterIcon />, label: "Twitter" },
                  { icon: <InstagramIcon />, label: "Instagram" },
                  { icon: <FacebookIcon />, label: "Facebook" },
                  { icon: <YouTubeIcon />, label: "YouTube" }
                ].map((social, i) => (
                  <button key={i} aria-label={social.label} className="w-9 h-9 border border-[#E9E9EF] flex items-center justify-center text-[#9898B3] hover:text-[#4B4BDB] hover:border-[#4B4BDB] hover:bg-[#F0F0FF] transition-colors rounded-[2px]">
                    {social.icon}
                  </button>
                ))}
              </div>
            </div>

            {/* Recent Articles */}
            <div className="p-8 lg:p-10 border-x border-[#E9E9EF]">
              <span className="text-[12px] font-medium text-[#686890] uppercase block mb-6">
                RECENT ARTICLES
              </span>
              
              <div className="flex flex-col gap-10">
                {recentPosts.map((recentPost) => (
                  <article key={recentPost.slug} className="flex flex-col gap-3 group">
                    <div className="relative w-full aspect-[16/7] overflow-hidden bg-gray-100">
                      <Image src={recentPost.image || BlogPlaceholder} alt={recentPost.title} fill className="object-cover group-hover:scale-105 transition-transform duration-500" />
                    </div>
                    <div className="flex items-center justify-between mt-2">
                      <span className="bg-[#EEEDFC] text-[#4B4BDB] text-[11px] font-semibold px-2.5 py-1 rounded-[4px]">
                        {recentPost.categories[0] || "Blog"}
                      </span>
                      <span className="text-[11px] font-medium text-[#9898B3]">
                        {recentPost.readingTime} min read
                      </span>
                    </div>
                    <h4 className="font-merriweather text-[16px] font-bold text-[#0D0D26] leading-[1.4] group-hover:text-[#4B4BDB] transition-colors">
                      {recentPost.title}
                    </h4>
                    <p className="text-[13px] text-[#686890] leading-[1.6] line-clamp-2">
                      {recentPost.excerpt}
                    </p>
                    <div className="flex items-center justify-between mt-2">
                      <Link href={`/blog/${recentPost.slug}`} className="flex items-center gap-1.5 text-[#4B4BDB] text-[13px] font-bold hover:text-[#3838C5] transition-colors">
                        Read More 
                        <span className="w-3.5 h-3.5 flex items-center justify-center"><ArrowUpRightIcon /></span>
                      </Link>
                      <span className="text-[11px] font-medium text-[#9898B3] uppercase">
                        {recentPost.date}
                      </span>
                    </div>
                  </article>
                ))}
              </div>
            </div>

            {/* Newsletter */}
            <div className="p-8 lg:p-10 border border-[#E9E9EF] border-t-0">
              <label className="text-[12px] text-[#0D0D26] mb-3 font-semibold block">
                Subscribe to WeCollect newsletters
              </label>
              
              <form className="flex items-center w-full bg-[#F8F9FB] border border-[#E9E9EF] p-1 focus-within:border-[#4B4BDB] transition-colors mb-3">
                <input 
                  type="email" 
                  placeholder="Enter your email..." 
                  className="flex-1 bg-transparent px-3 text-[13px] text-[#0D0D26] placeholder:text-[#9898B3] outline-none"
                  required
                />
                <button 
                  type="button"
                  className="bg-[#4B4BDB] text-white px-5 py-2 font-medium text-[13px] hover:bg-[#3838C5] transition-colors"
                >
                  Subscribe
                </button>
              </form>

              <p className="text-[11px] text-[#9898B3]">
                By subscribing, I agree to WeCollect{" "}
                <Link href="/privacy-policy" className="text-[#4B4BDB] hover:underline">
                  Privacy Policy
                </Link>
              </p>
            </div>

          </div>
        </div>
      </Container>
    </div>
  );
}
