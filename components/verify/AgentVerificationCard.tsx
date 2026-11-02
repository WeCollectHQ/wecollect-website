"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";
import { AgentVerificationData, formatDate } from "@/lib/agent-verification";
import { ArrowUpRightIcon, CheckIcon } from "@/assets/svgs";

interface Props {
  initialId?: string;
  agent?: AgentVerificationData;
  error?: string;
}

export function AgentVerificationCard({ initialId = "", agent, error }: Props) {
  const router = useRouter();
  const [searchInput, setSearchInput] = useState(initialId);
  const [copied, setCopied] = useState(false);
  const [showSearch, setShowSearch] = useState(!agent);

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    const clean = searchInput.trim();
    if (clean) {
      router.push(`/verify/${encodeURIComponent(clean)}`);
    }
  };

  const copyToClipboard = (text: string) => {
    navigator.clipboard.writeText(text);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const getInitials = (name: string) => {
    return name
      .split(" ")
      .map((n) => n[0])
      .filter(Boolean)
      .slice(0, 2)
      .join("")
      .toUpperCase();
  };

  return (
    <div className="w-full max-w-2xl mx-auto">
      {/* Search Bar - only shown if showSearch is true */}
      {showSearch && (
        <form onSubmit={handleSearch} className="mb-8">
          <div className="flex flex-col sm:flex-row gap-3">
            <div className="relative flex-1">
              <input
                type="text"
                value={searchInput}
                onChange={(e) => setSearchInput(e.target.value)}
                placeholder="Enter Agent ID or Code (e.g. 88236554 or UUID)..."
                className="w-full px-4 py-3.5 pl-11 bg-white border border-[#E9E9EF] rounded-lg text-[15px] text-[#0D0D26] placeholder-[#9898B3] focus:outline-none focus:border-[#4747D6] focus:ring-2 focus:ring-[#4747D6]/15 transition-all shadow-xs"
                autoFocus={Boolean(agent)}
              />
              <svg
                className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-[#9898B3]"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                />
              </svg>
            </div>
            <div className="flex items-center gap-2">
              <button
                type="submit"
                className="px-6 py-3.5 bg-[#4747D6] hover:bg-[#3939B8] text-white font-medium text-[15px] rounded-lg transition-colors cursor-pointer flex items-center justify-center gap-2 shadow-xs flex-1 sm:flex-initial"
              >
                Verify
              </button>
              {agent && (
                <button
                  type="button"
                  onClick={() => setShowSearch(false)}
                  className="px-4 py-3.5 bg-gray-100 hover:bg-gray-200 text-[#686890] font-medium text-[14px] rounded-lg transition-colors cursor-pointer"
                >
                  Cancel
                </button>
              )}
            </div>
          </div>
        </form>
      )}

      {/* RESULT CARD */}
      {agent ? (
        <div>
          <div className="bg-white border border-[#E9E9EF] rounded-2xl shadow-xl overflow-hidden transition-all">
            {/* Header Banner */}
            <div
              className={`px-6 py-4.5 flex items-center justify-between gap-4 ${
                agent.is_verified
                  ? "bg-emerald-600 text-white"
                  : "bg-amber-600 text-white"
              }`}
            >
              <div className="flex items-center gap-2.5">
                <span className="flex items-center justify-center w-6 h-6 rounded-full bg-white/20 backdrop-blur-xs">
                  <CheckIcon />
                </span>
                <span className="text-[13px] md:text-[14px] font-semibold tracking-wide uppercase">
                  {agent.is_verified
                    ? "Official Verified Field Agent"
                    : "Field Agent Profile"}
                </span>
              </div>
              <span className="text-[11px] md:text-[12px] font-medium bg-black/20 px-3 py-1 rounded-full uppercase tracking-wider">
                {agent.account_status}
              </span>
            </div>

            {/* Profile Section */}
            <div className="p-6 sm:p-8">
              <div className="flex flex-col sm:flex-row items-center sm:items-start gap-6 pb-6 border-b border-[#F0F0F5]">
                {/* Avatar / Initials */}
                {agent.avatar ? (
                  <div className="relative w-24 h-24 rounded-full overflow-hidden border-3 border-emerald-500 shadow-md shrink-0">
                    <Image
                      src={agent.avatar}
                      alt={agent.name}
                      fill
                      className="object-cover"
                      unoptimized
                    />
                  </div>
                ) : (
                  <div className="w-24 h-24 rounded-full bg-linear-to-br from-[#4747D6] to-[#2B2B85] text-white flex items-center justify-center text-2xl font-bold border-3 border-emerald-500 shadow-md shrink-0">
                    {getInitials(agent.name)}
                  </div>
                )}

                {/* Agent Name & Key Info */}
                <div className="text-center sm:text-left flex-1 min-w-0">
                  <div className="flex flex-wrap items-center justify-center sm:justify-start gap-2">
                    <h1 className="font-merriweather text-2xl sm:text-[26px] font-bold text-[#0D0D26]">
                      {agent.name}
                    </h1>
                    {agent.is_verified && (
                      <span
                        title="Verified Identity"
                        className="inline-flex items-center justify-center w-5 h-5 rounded-full bg-emerald-500 text-white text-xs"
                      >
                        ✓
                      </span>
                    )}
                  </div>

                  <p className="text-[14px] text-[#686890] font-medium mt-1">
                    {agent.role}
                  </p>

                  {/* Agent Code / Badge */}
                  <div className="mt-3.5 inline-flex items-center gap-2 bg-[#F6F6FC] border border-[#E9E9F2] px-3.5 py-1.5 rounded-md">
                    <span className="text-[11px] font-semibold text-[#686890] uppercase tracking-wider">
                      Agent ID:
                    </span>
                    <span className="text-[13px] font-mono font-bold text-[#0D0D26]">
                      {agent.code || agent.id}
                    </span>
                    <button
                      type="button"
                      onClick={() => copyToClipboard(agent.code || agent.id)}
                      className="text-[11px] text-[#4747D6] hover:underline font-medium ml-1 cursor-pointer"
                    >
                      {copied ? "Copied!" : "Copy"}
                    </button>
                  </div>
                </div>
              </div>

              {/* Verification Metadata Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6 pt-6">
                <div className="bg-[#FAFAFD] p-4 rounded-xl border border-[#EEEEF5]">
                  <span className="text-[11px] font-semibold uppercase text-[#9898B3] tracking-wider block mb-1">
                    Verification Status
                  </span>
                  <div className="flex items-center gap-2 mt-1">
                    <span
                      className={`w-2.5 h-2.5 rounded-full ${
                        agent.is_verified ? "bg-emerald-500 animate-pulse" : "bg-amber-500"
                      }`}
                    />
                    <span className="text-[14px] font-semibold text-[#0D0D26]">
                      {agent.is_verified ? "Verified Active Agent" : "Registered Agent"}
                    </span>
                  </div>
                </div>

                <div className="bg-[#FAFAFD] p-4 rounded-xl border border-[#EEEEF5]">
                  <span className="text-[11px] font-semibold uppercase text-[#9898B3] tracking-wider block mb-1">
                    Member Since
                  </span>
                  <span className="text-[14px] font-semibold text-[#0D0D26] block mt-1">
                    {formatDate(agent.created_at)}
                  </span>
                </div>

                {agent.verified_at && (
                  <div className="bg-[#FAFAFD] p-4 rounded-xl border border-[#EEEEF5]">
                    <span className="text-[11px] font-semibold uppercase text-[#9898B3] tracking-wider block mb-1">
                      Verified On
                    </span>
                    <span className="text-[14px] font-semibold text-[#0D0D26] block mt-1">
                      {formatDate(agent.verified_at)}
                    </span>
                  </div>
                )}

                {agent.address && (
                  <div className="bg-[#FAFAFD] p-4 rounded-xl border border-[#EEEEF5]">
                    <span className="text-[11px] font-semibold uppercase text-[#9898B3] tracking-wider block mb-1">
                      Registered Region
                    </span>
                    <span className="text-[14px] font-semibold text-[#0D0D26] block mt-1 line-clamp-1">
                      {agent.address}
                    </span>
                  </div>
                )}
              </div>

              {/* Official Security Disclaimer */}
              <div className="mt-8 pt-6 border-t border-[#F0F0F5] flex items-start gap-3 text-[#686890] text-[12px] leading-relaxed">
                <svg
                  className="w-5 h-5 text-emerald-600 shrink-0 mt-0.5"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path
                    fillRule="evenodd"
                    d="M10 1.944A11.954 11.954 0 012.166 5C2.056 5.649 2 6.319 2 7c0 5.225 3.34 9.67 8 11.317C14.66 16.67 18 12.225 18 7c0-.682-.057-1.35-.166-2.001A11.954 11.954 0 0110 1.944zM11 14a1 1 0 11-2 0 1 1 0 012 0zm0-7a1 1 0 10-2 0v3a1 1 0 102 0V7z"
                    clipRule="evenodd"
                  />
                </svg>
                <p>
                  This verification profile is cryptographically verified directly from
                  the Wecollect field database. If you suspect fraud, impersonation, or
                  require assistance, contact our security desk at{" "}
                  <a
                    href="mailto:support@wecollect.tech"
                    className="text-[#4747D6] font-medium hover:underline"
                  >
                    support@wecollect.tech
                  </a>
                  .
                </p>
              </div>
            </div>
          </div>

          {/* Secondary Action: Look up another agent */}
          {!showSearch && (
            <div className="mt-8 text-center">
              <button
                type="button"
                onClick={() => setShowSearch(true)}
                className="inline-flex items-center gap-2 text-[14px] text-[#686890] hover:text-[#4747D6] font-medium transition-colors cursor-pointer px-4 py-2 rounded-lg hover:bg-white"
              >
                <svg
                  className="w-4 h-4 text-[#9898B3]"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                  />
                </svg>
                Verify another field agent
              </button>
            </div>
          )}
        </div>
      ) : error ? (
        /* Not Found / Error State */
        <div className="bg-white border border-[#E9E9EF] rounded-2xl p-8 sm:p-10 text-center shadow-md">
          <div className="w-16 h-16 rounded-full bg-red-50 text-red-500 flex items-center justify-center mx-auto mb-4">
            <svg
              className="w-8 h-8"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"
              />
            </svg>
          </div>
          <h2 className="font-merriweather text-xl sm:text-2xl font-bold text-[#0D0D26]">
            Verification Not Found
          </h2>
          <p className="text-[14px] text-[#686890] max-w-md mx-auto mt-2 leading-relaxed">
            {error}
          </p>
          <div className="mt-6 pt-6 border-t border-[#F0F0F5] text-[13px] text-[#9898B3]">
            Please double-check the Agent ID or Code and try searching again.
          </div>
        </div>
      ) : (
        /* Default Initial / Prompt State */
        <div className="bg-white border border-[#E9E9EF] rounded-2xl p-8 sm:p-10 text-center shadow-md">
          <div className="w-16 h-16 rounded-full bg-[#EDEDFB] text-[#4747D6] flex items-center justify-center mx-auto mb-4">
            <svg
              className="w-8 h-8"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
              />
            </svg>
          </div>
          <h2 className="font-merriweather text-xl sm:text-2xl font-bold text-[#0D0D26]">
            Field Agent Verification
          </h2>
          <p className="text-[14px] text-[#686890] max-w-md mx-auto mt-2 leading-relaxed">
            Enter the User ID or Agent Code printed on the physical badge or credential to
            verify official Wecollect registration.
          </p>
        </div>
      )}
    </div>
  );
}
