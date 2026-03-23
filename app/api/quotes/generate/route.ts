import { NextRequest, NextResponse } from "next/server";
import { generateQuoteDescription } from "@/lib/ai";

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const description = await generateQuoteDescription(body);
    return NextResponse.json({ description });
  } catch (error: any) {
    console.error("AI generation error:", error);
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}
