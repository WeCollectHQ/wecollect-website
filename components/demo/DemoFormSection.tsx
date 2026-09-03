"use client";

import React from "react";
import Image from "next/image";
import { Container } from "@/components/common/Container";
import { 
  CalendarClockIcon, 
  TeamIcon, 
  MailIcon, 
  WhatsAppIcon 
} from "@/assets/svgs";

export function DemoFormSection() {
  return (
    <section className="relative w-full">
      {/* Full-bleed split backgrounds */}
      <div className="absolute inset-0 flex flex-col md:flex-row pointer-events-none z-0">
        <div className="w-full md:w-1/2 bg-[#F8F9FA]"></div>
        <div className="w-full md:w-1/2 bg-white"></div>
      </div>

      <Container className="relative z-10">
        <div className="grid md:grid-cols-2">
          
          {/* LEFT COLUMN */}
          <div className="py-16 md:pr-12 lg:pr-24 lg:py-24 xl:pr-32 flex flex-col justify-center">
          <div className="max-w-[440px]">
            {/* AVATAR GROUP */}
            <div className="flex -space-x-3 mb-6">
              <div className="w-12 h-12 rounded-full overflow-hidden border-2 border-[#F8F9FA] relative bg-gray-200">
                <img src="https://i.pravatar.cc/100?img=47" alt="Team member" className="w-full h-full object-cover" />
              </div>
              <div className="w-12 h-12 rounded-full overflow-hidden border-2 border-[#F8F9FA] relative bg-gray-200">
                <img src="https://i.pravatar.cc/100?img=11" alt="Team member" className="w-full h-full object-cover" />
              </div>
              <div className="w-12 h-12 rounded-full overflow-hidden border-2 border-[#F8F9FA] relative bg-gray-200">
                <img src="https://i.pravatar.cc/100?img=33" alt="Team member" className="w-full h-full object-cover" />
              </div>
              <div className="w-12 h-12 rounded-full overflow-hidden border-2 border-[#F8F9FA] relative bg-gray-200">
                <img src="https://i.pravatar.cc/100?img=41" alt="Team member" className="w-full h-full object-cover" />
              </div>
              <div className="w-12 h-12 rounded-full overflow-hidden border-2 border-[#F8F9FA] relative bg-gray-200">
                <img src="https://i.pravatar.cc/100?img=12" alt="Team member" className="w-full h-full object-cover" />
              </div>
            </div>

            <h2 className="text-[28px] md:text-[32px] font-merriweather font-bold text-[#0D0D26] mb-4 leading-tight">
              Fill in the form to book a demo
            </h2>

            <p className="text-[#5D5D88] text-[15px] leading-relaxed mb-6">
              Complete the form and our team will get back to you within one business day with the right next steps for your needs.
            </p>

            <p className="text-[#5D5D88] text-[15px] leading-relaxed mb-8">
              Prefer a faster conversation? Reach us directly on WhatsApp. We're ready to talk.
            </p>

            <div className="h-px bg-[#E7E7EF] w-full mb-8"></div>

            {/* FEATURES LIST */}
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <CalendarClockIcon className="w-7 h-7 text-[#0D0D26] shrink-0 mt-0.5" />
                <div>
                  <h4 className="text-[16px] font-semibold text-[#0D0D26] mb-1">30-minute session</h4>
                  <p className="text-[13px] text-[#5D5D88]">Live platform walkthrough tailored to your use case</p>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <TeamIcon className="w-7 h-7 text-[#0D0D26] shrink-0 mt-0.5" />
                <div>
                  <h4 className="text-[16px] font-semibold text-[#0D0D26] mb-1">Talk to the team</h4>
                  <p className="text-[13px] text-[#5D5D88]">Directly with the people who built it</p>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <MailIcon className="w-7 h-7 text-[#0D0D26] shrink-0 mt-0.5" />
                <div>
                  <h4 className="text-[16px] font-semibold text-[#0D0D26] mb-1">Email</h4>
                  <p className="text-[13px] text-[#5D5D88]">info@wecollect.tech</p>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <WhatsAppIcon className="w-7 h-7 text-[#0D0D26] shrink-0 mt-0.5" />
                <div>
                  <h4 className="text-[16px] font-semibold text-[#0D0D26] mb-1">WhatsApp also works</h4>
                  <p className="text-[13px] text-[#5D5D88]">+234 816 360 8315</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* RIGHT COLUMN */}
        <div className="py-16 md:pl-12 lg:pl-24 lg:py-24 xl:pl-32 flex flex-col justify-center border-t md:border-t-0 md:border-l border-[#E7E7EF]">
          <form className="max-w-[440px] w-full" onSubmit={(e) => e.preventDefault()}>
            
            <div className="mb-6">
              <label className="block text-[14px] font-semibold text-[#0D0D26] mb-2">
                Full Name <span className="text-[#FF5B5B]">*</span>
              </label>
              <input 
                type="text" 
                placeholder="Enter name..." 
                className="w-full bg-[#F8F9FB] border border-[#E7E7EF] rounded-sm px-4 py-3 text-[14px] text-[#0D0D26] focus:outline-none focus:border-[#4B4BDB] placeholder-[#A7A7C6]"
                required
              />
            </div>

            <div className="mb-6">
              <label className="block text-[14px] font-semibold text-[#0D0D26] mb-2">
                Name of Organisation <span className="text-[#FF5B5B]">*</span>
              </label>
              <input 
                type="text" 
                placeholder="Enter name of organisation/team..." 
                className="w-full bg-[#F8F9FB] border border-[#E7E7EF] rounded-sm px-4 py-3 text-[14px] text-[#0D0D26] focus:outline-none focus:border-[#4B4BDB] placeholder-[#A7A7C6]"
                required
              />
            </div>

            <div className="mb-6">
              <label className="block text-[14px] font-semibold text-[#0D0D26] mb-2">
                Email <span className="text-[#FF5B5B]">*</span>
              </label>
              <input 
                type="email" 
                placeholder="you@email.com" 
                className="w-full bg-[#F8F9FB] border border-[#E7E7EF] rounded-sm px-4 py-3 text-[14px] text-[#0D0D26] focus:outline-none focus:border-[#4B4BDB] placeholder-[#A7A7C6]"
                required
              />
            </div>

            <div className="mb-8">
              <label className="block text-[14px] font-semibold text-[#0D0D26] mb-2">
                Data Need <span className="text-[#FF5B5B]">*</span>
              </label>
              <textarea 
                placeholder="Briefly describe your use case — field team size, geography, data type..." 
                rows={4}
                className="w-full bg-[#F8F9FB] border border-[#E7E7EF] rounded-sm px-4 py-3 text-[14px] text-[#0D0D26] focus:outline-none focus:border-[#4B4BDB] placeholder-[#A7A7C6] resize-none"
                required
              ></textarea>
            </div>

            <div className="mb-8">
              <label className="block text-[14px] font-semibold text-[#0D0D26] mb-4">
                Do you have your own field team? <span className="text-[#FF5B5B]">*</span>
              </label>
              <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:gap-6 flex-wrap">
                <label className="flex items-center gap-2 cursor-pointer group">
                  <div className="relative flex items-center justify-center w-5 h-5">
                    <input type="radio" name="fieldTeam" className="peer appearance-none w-5 h-5 rounded-full border border-[#C5C5D6] checked:border-[#4B4BDB] cursor-pointer transition-colors" />
                    <div className="absolute w-2.5 h-2.5 rounded-full bg-[#4B4BDB] opacity-0 peer-checked:opacity-100 pointer-events-none transition-opacity"></div>
                  </div>
                  <span className="text-[13px] text-[#5D5D88] group-hover:text-[#0D0D26] transition-colors">Yes — I have a team</span>
                </label>
                <label className="flex items-center gap-2 cursor-pointer group">
                  <div className="relative flex items-center justify-center w-5 h-5">
                    <input type="radio" name="fieldTeam" defaultChecked className="peer appearance-none w-5 h-5 rounded-full border border-[#C5C5D6] checked:border-[#4B4BDB] cursor-pointer transition-colors" />
                    <div className="absolute w-2.5 h-2.5 rounded-full bg-[#4B4BDB] opacity-0 peer-checked:opacity-100 pointer-events-none transition-opacity"></div>
                  </div>
                  <span className="text-[13px] font-medium text-[#0D0D26]">No — I need yours</span>
                </label>
                <label className="flex items-center gap-2 cursor-pointer group">
                  <div className="relative flex items-center justify-center w-5 h-5">
                    <input type="radio" name="fieldTeam" className="peer appearance-none w-5 h-5 rounded-full border border-[#C5C5D6] checked:border-[#4B4BDB] cursor-pointer transition-colors" />
                    <div className="absolute w-2.5 h-2.5 rounded-full bg-[#4B4BDB] opacity-0 peer-checked:opacity-100 pointer-events-none transition-opacity"></div>
                  </div>
                  <span className="text-[13px] text-[#5D5D88] group-hover:text-[#0D0D26] transition-colors">Hybrid model</span>
                </label>
              </div>
            </div>

            <button 
              type="submit" 
              className="w-full bg-[#4B4BDB] hover:bg-[#3f3fba] text-white font-medium py-3.5 px-4 rounded-sm transition-colors"
            >
              Send Message
            </button>
            
          </form>
        </div>
        
      </div>
      </Container>
    </section>
  );
}
