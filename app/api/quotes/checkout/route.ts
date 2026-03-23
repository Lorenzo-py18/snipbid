import { NextRequest, NextResponse } from "next/server";
import { stripe } from "@/lib/stripe";
import { createClient } from "@supabase/supabase-js";

const supabaseAdmin = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL!,
  process.env.SUPABASE_SERVICE_ROLE_KEY!
);

export async function POST(req: NextRequest) {
  try {
    const { quoteId } = await req.json();
    const { data: quote } = await supabaseAdmin.from("quotes").select("*").eq("id", quoteId).single();
    if (!quote) return NextResponse.json({ error: "Quote not found" }, { status: 404 });

    const { data: profile } = await supabaseAdmin.from("profiles").select("business_name").eq("id", quote.user_id).single();

    const session = await stripe.checkout.sessions.create({
      payment_method_types: ["card"],
      line_items: [{
        price_data: {
          currency: "usd",
          product_data: {
            name: `Quote from ${profile?.business_name || "Contractor"}`,
            description: `Services for ${quote.client_name}`,
          },
          unit_amount: Math.round(quote.total * 100),
        },
        quantity: 1,
      }],
      mode: "payment",
      success_url: `${process.env.NEXT_PUBLIC_APP_URL}/q/${quote.public_token}?paid=true`,
      cancel_url: `${process.env.NEXT_PUBLIC_APP_URL}/q/${quote.public_token}`,
      metadata: { quoteId },
    });

    return NextResponse.json({ url: session.url });
  } catch (error: any) {
    console.error("Checkout error:", error);
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}
