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
function LinkedInIcon() {
  return <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/></svg>;
}
function TwitterIcon() {
  return <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"/></svg>;
}
function InstagramIcon() {
  return <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/></svg>;
}
function FacebookIcon() {
  return <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z"/></svg>;
}
function YouTubeIcon() {
  return <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/></svg>;
}

export default function BlogDetailPage() {
  return (
    <div className="bg-white">
      <Container className="py-8 md:py-16">
        
        {/* Back Link */}
        <div className="mb-8">
          <Link href="/blog" className="inline-flex items-center gap-1.5 text-[#4B4BDB] text-[14px] font-bold hover:text-[#3838C5] transition-colors">
            <ChevronLeftIcon /> Back to Blogs
          </Link>
        </div>

        {/* Main Layout Grid */}
        <div className="flex flex-col lg:flex-row border border-[#E9E9EF]">
          
          {/* LEFT COLUMN - MAIN CONTENT */}
          <div className="flex-1 p-6 md:p-12 lg:p-16 lg:border-r border-[#E9E9EF]">
            
            {/* Header */}
            <div className="flex items-center justify-between mb-8">
              <span className="bg-[#EEEDFC] text-[#4B4BDB] text-[11px] font-semibold px-2.5 py-1 rounded-[4px]">
                Verification
              </span>
              <span className="text-[12px] font-medium text-[#9898B3]">
                December 2024 - 2 min read
              </span>
            </div>

            <h1 className="font-merriweather text-[28px] md:text-[36px] lg:text-[40px] font-bold text-[#0D0D26] leading-[1.2] mb-6">
              How to run address validation at scale in Africa
            </h1>

            <p className="text-[#5D5D88] text-[15px] md:text-[17px] leading-[1.7] mb-8">
              Manual address verification fails at scale. Here's how technology changes the equation for banks, fintechs, and logistics companies operating across 37 states.
            </p>

            <div className="flex items-center gap-3 mb-10">
              <div className="h-8 w-8 rounded-full bg-[#4B4BDB] flex items-center justify-center text-white font-bold text-[14px]">
                we
              </div>
              <span className="text-[14px] font-bold text-[#0D0D26]">
                Written by WeCollect
              </span>
            </div>

            <div className="relative w-full aspect-[2/1] md:aspect-[16/7] mb-12 overflow-hidden bg-gray-100">
              <Image src={BlogPlaceholder} alt="Blog hero" fill className="object-cover" />
            </div>

            {/* Article Content */}
            <article className="prose prose-lg max-w-none prose-headings:font-bold prose-headings:text-[#0D0D26] prose-p:text-[#5D5D88] prose-p:text-[15px] prose-p:md:text-[16px] prose-p:leading-[1.7] prose-p:mb-6">
              
              <h3 className="text-[20px] mt-10 mb-4">Why manual address verification fails at scale</h3>
              <p>
                Africa's address infrastructure is fragmented. In Lagos alone, informal settlements account for over 60% of residential areas — and most have no formal street address registered with any government database. For banks and fintechs running KYC at scale, this creates a fundamental problem: the address a customer submits cannot be verified against any reliable reference dataset.
              </p>
              <p>
                The traditional response is to send field agents to verify addresses manually. They visit the location, confirm the property exists, and report back. In theory, this works. In practice, it breaks at scale: agents cannot be monitored in real time, there is no geo-proof of the visit, and the data they collect has no quality controls before entering your system.
              </p>
              <p>
                The result: address data that looks verified but isn't. Banks in Africa have lost significant sums to fraudulent KYC submissions where agents fabricated visit records from offices hundreds of kilometres from the stated address.
              </p>

              <h3 className="text-[20px] mt-10 mb-4">What technology-enabled address verification looks like</h3>
              <p>
                A field data platform built for this purpose changes each part of the process. Agents must be physically present at the stated address before they can open the verification form — geofencing blocks the form from loading if their GPS position doesn't match the target location within a defined radius.
              </p>
              <p>
                Photo evidence is captured in-app with metadata that includes GPS coordinates and timestamp. The photos cannot be uploaded from the camera roll — they must be taken live within the app. This single requirement eliminates the most common fraud vector: agents submitting old photos taken at a different location.
              </p>
              <p>
                Every submission is validated against African administrative boundaries in real time. The LGA and state entered by the agent must match the GPS position. Mismatches are flagged automatically and escalated to a supervisor before the record is accepted.
              </p>

              <h3 className="text-[20px] mt-10 mb-4">Running address validation across 37 states</h3>
              <p>
                The challenge of national coverage is a people problem as much as a technology problem. Having the right platform is necessary but not sufficient — you also need trained agents in every geography who understand the specific documentation and verification requirements for each region.
              </p>
              <p>
                The most effective approach for large programmes is a hybrid deployment: your own staff handle high-priority or high-risk verifications in major cities, while a trained agent network covers secondary markets where maintaining a permanent presence isn't cost-effective.
              </p>
            </article>

            {/* Bottom Banner */}
            <div className="mt-12 bg-[#1A1A4A] p-8 md:p-12 text-center md:text-left flex flex-col md:flex-row items-center justify-between gap-8">
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
            <div className="p-8 lg:p-10">
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
            <div className="p-8 lg:p-10">
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
            <div className="p-8 lg:p-10">
              <span className="text-[12px] font-medium text-[#686890] uppercase block mb-6">
                RECENT ARTICLES
              </span>
              
              <div className="flex flex-col gap-10">
                {/* Article 1 */}
                <article className="flex flex-col gap-3 group">
                  <div className="relative w-full aspect-[16/7] overflow-hidden bg-gray-100">
                    <Image src={BlogPlaceholder} alt="Recent post" fill className="object-cover group-hover:scale-105 transition-transform duration-500" />
                  </div>
                  <div className="flex items-center justify-between mt-2">
                    <span className="bg-[#EEEDFC] text-[#4B4BDB] text-[11px] font-semibold px-2.5 py-1 rounded-[4px]">
                      Verification
                    </span>
                    <span className="text-[11px] font-medium text-[#9898B3]">
                      9 min read
                    </span>
                  </div>
                  <h4 className="font-merriweather text-[16px] font-bold text-[#0D0D26] leading-[1.4]">
                    KYC field verification: the case for boots on the ground
                  </h4>
                  <p className="text-[13px] text-[#686890] leading-[1.6]">
                    Digital KYC has real limits in markets with address inconsistency, informal employment, and low trust in remot...
                  </p>
                  <div className="flex items-center justify-between mt-2">
                    <Link href="#" className="flex items-center gap-1.5 text-[#4B4BDB] text-[13px] font-bold hover:text-[#3838C5] transition-colors">
                      Read More 
                      <span className="w-3.5 h-3.5 flex items-center justify-center"><ArrowUpRightIcon /></span>
                    </Link>
                    <span className="text-[11px] font-medium text-[#9898B3] uppercase">
                      Oct 2024
                    </span>
                  </div>
                </article>

                {/* Article 2 */}
                <article className="flex flex-col gap-3 group">
                  <div className="relative w-full aspect-[16/7] overflow-hidden bg-gray-100">
                    <Image src={BlogPlaceholder} alt="Recent post" fill className="object-cover group-hover:scale-105 transition-transform duration-500" />
                  </div>
                  <div className="flex items-center justify-between mt-2">
                    <span className="bg-[#EEEDFC] text-[#4B4BDB] text-[11px] font-semibold px-2.5 py-1 rounded-[4px]">
                      Data Validation
                    </span>
                    <span className="text-[11px] font-medium text-[#9898B3]">
                      11 min read
                    </span>
                  </div>
                  <h4 className="font-merriweather text-[16px] font-bold text-[#0D0D26] leading-[1.4]">
                    GIS data validation: why location metadata matters
                  </h4>
                  <p className="text-[13px] text-[#686890] leading-[1.6]">
                    Survey data without reliable location metadata is hard to analyse and impossible to audit. GIS validation i...
                  </p>
                  <div className="flex items-center justify-between mt-2">
                    <Link href="#" className="flex items-center gap-1.5 text-[#4B4BDB] text-[13px] font-bold hover:text-[#3838C5] transition-colors">
                      Read More 
                      <span className="w-3.5 h-3.5 flex items-center justify-center"><ArrowUpRightIcon /></span>
                    </Link>
                    <span className="text-[11px] font-medium text-[#9898B3] uppercase">
                      Sep 2024
                    </span>
                  </div>
                </article>
              </div>
            </div>

            {/* Newsletter */}
            <div className="p-8 lg:p-10">
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
