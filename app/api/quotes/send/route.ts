import { NextRequest, NextResponse } from "next/server";
import { createClient } from "@supabase/supabase-js";
import { sendQuoteEmail } from "@/lib/email";

const supabaseAdmin = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL!,
  process.env.SUPABASE_SERVICE_ROLE_KEY!
);

export async function POST(req: NextRequest) {
  try {
    const { quoteId } = await req.json();
    const { data: quote } = await supabaseAdmin.from("quotes").select("*").eq("id", quoteId).single();
    if (!quote) return NextResponse.json({ error: "Quote not found" }, { status: 404 });
    if (!quote.client_email) return NextResponse.json({ error: "No client email" }, { status: 400 });

    const { data: profile } = await supabaseAdmin.from("profiles").select("business_name").eq("id", quote.user_id).single();

    await sendQuoteEmail({
      to: quote.client_email,
      clientName: quote.client_name,
      contractorName: profile?.business_name || "Contractor",
      total: quote.total,
      quoteToken: quote.public_token,
    });

    await supabaseAdmin.from("quotes").update({ status: "sent", sent_at: new Date().toISOString() }).eq("id", quoteId);

    return NextResponse.json({ success: true });
  } catch (error: any) {
    console.error("Send email error:", error);
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}
