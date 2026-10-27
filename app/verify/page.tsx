import { Metadata } from "next";
import { Container } from "@/components/common/Container";
import { fetchAgentVerification } from "@/lib/agent-verification";
import { AgentVerificationCard } from "@/components/verify/AgentVerificationCard";

export const metadata: Metadata = {
  title: "Verify Field Agent | Wecollect",
  description: "Verify registered Wecollect field agents and credential authenticity.",
};

interface PageProps {
  searchParams: Promise<{ [key: string]: string | string[] | undefined }>;
}

export default async function VerifyPage(props: PageProps) {
  const searchParams = await props.searchParams;
  const rawId = searchParams.id || searchParams.code || searchParams.user_id;
  const id = typeof rawId === "string" ? rawId.trim() : "";

  const result = id ? await fetchAgentVerification(id) : null;

  return (
    <div className="w-full bg-[#FAFAFD] min-h-[calc(100vh-180px)] py-12 md:py-16">
      <Container>
        {/* Page Title */}
        <div className="text-center max-w-xl mx-auto mb-8 md:mb-10">
          <span className="inline-flex items-center gap-2 bg-[#EDEDFB] text-[#4747D6] text-[11px] font-semibold uppercase tracking-wider px-3.5 py-1.5 rounded-full mb-3">
            Credential Verification
          </span>
          <h1 className="font-merriweather text-3xl md:text-4xl font-bold text-[#0D0D26]">
            {result?.data ? "Official Credential Badge" : "Field Agent Lookup"}
          </h1>
          <p className="text-[15px] text-[#686890] mt-3">
            {result?.data
              ? "Verified field agent credentials and active deployment authorization."
              : "Verify official field agents, active deployment status, and authorized credentials."}
          </p>
        </div>

        {/* Verification Card */}
        <AgentVerificationCard
          initialId={id}
          agent={result?.data}
          error={result?.error}
        />
      </Container>
    </div>
  );
}
