import { NextRequest, NextResponse } from "next/server";
import { parseCustomerMessage } from "@/lib/ai";

// Public demo endpoint — no auth required
export async function POST(req: NextRequest) {
  try {
    const { message } = await req.json();
    if (!message || message.trim().length < 10) {
      return NextResponse.json({ error: "Message too short" }, { status: 400 });
    }
    const result = await parseCustomerMessage(message);
    return NextResponse.json(result);
  } catch (error: any) {
    console.error("Demo parse error:", error);
    return NextResponse.json({ error: "Failed to generate quote" }, { status: 500 });
  }
}
