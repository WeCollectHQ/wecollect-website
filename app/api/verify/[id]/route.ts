import { NextRequest, NextResponse } from "next/server";
import { fetchAgentVerification } from "@/lib/agent-verification";

export async function GET(
  request: NextRequest,
  props: { params: Promise<{ id: string }> }
) {
  const params = await props.params;
  const id = params.id;

  if (!id) {
    return NextResponse.json(
      { status: "error", message: "Agent ID is required" },
      { status: 400 }
    );
  }

  const result = await fetchAgentVerification(id);
  if (!result.success || !result.data) {
    return NextResponse.json(
      { status: "error", message: result.error || "Agent not found" },
      { status: 404 }
    );
  }

  return NextResponse.json({
    status: "success",
    data: result.data,
  });
}
