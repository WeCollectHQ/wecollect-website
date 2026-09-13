import { notFound } from "next/navigation";
import { fetchWordPressPostBySlug, fetchWordPressBlogs } from "@/lib/wordpress";
import Image from "next/image";
import Link from "next/link";
import { Container } from "@/components/common/Container";
import { Button } from "@/components/common/Button";
import { NewsletterForm } from "@/components/common/NewsletterForm";
import { ArrowUpRightIcon, ChevronLeftIcon, LinkedInIcon, TwitterIcon, InstagramIcon, FacebookIcon, YouTubeIcon } from "@/assets/svgs";
import BlogPlaceholder from "@/assets/pngs/blog-placeholder.png";

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
              
              <NewsletterForm 
                formClassName="flex items-center w-full bg-[#F8F9FB] border border-[#E9E9EF] p-1 focus-within:border-[#4B4BDB] transition-colors mb-3"
                inputClassName="flex-1 bg-transparent px-3 text-[13px] text-[#0D0D26] placeholder:text-[#9898B3] outline-none"
                buttonVariant="primary"
                buttonClassName="!px-5 !py-2 !h-auto !text-[13px]"
              />
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
