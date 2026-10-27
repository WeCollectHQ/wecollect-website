export interface AgentVerificationData {
  id: string;
  code: string;
  name: string;
  avatar?: string;
  account_status: string;
  is_verified: boolean;
  verified_at?: string;
  created_at: string;
  address?: string;
  role: string;
}

export interface VerificationResponse {
  success: boolean;
  data?: AgentVerificationData;
  error?: string;
}

export function formatDate(dateStr?: string): string {
  if (!dateStr) return "N/A";
  try {
    const d = new Date(dateStr);
    if (isNaN(d.getTime())) return "N/A";
    return new Intl.DateTimeFormat("en-US", {
      month: "long",
      day: "numeric",
      year: "numeric",
    }).format(d);
  } catch {
    return "N/A";
  }
}

export async function fetchAgentVerification(id: string): Promise<VerificationResponse> {
  const cleanId = id.trim();
  if (!cleanId) {
    return { success: false, error: "Please enter a valid Agent ID or Code." };
  }

  const API_BASE_URL =
    process.env.API_URL ||
    process.env.NEXT_PUBLIC_API_URL ||
    (process.env.NODE_ENV === "production"
      ? "https://api.wecollect.tech"
      : "http://localhost:8081");

  try {
    const res = await fetch(`${API_BASE_URL}/v1/f/pr/${encodeURIComponent(cleanId)}`, {
      cache: "no-store",
      headers: {
        Accept: "application/json",
      },
    });

    if (!res.ok) {
      if (res.status === 404) {
        return {
          success: false,
          error: "No registered field agent was found matching this ID or Code.",
        };
      }
      return {
        success: false,
        error: "Unable to verify agent at this time. Please try again later.",
      };
    }

    const json = await res.json();
    if (json.status === "success" && json.data) {
      return { success: true, data: json.data };
    }

    return {
      success: false,
      error: json.message || "Failed to retrieve verification details.",
    };
  } catch (err) {
    console.error("Error fetching agent verification:", err);
    return {
      success: false,
      error: "Unable to reach verification service. Please try again.",
    };
  }
}
