import { NextRequest, NextResponse } from "next/server";
import { createClient } from "@supabase/supabase-js";
import { nanoid } from "nanoid";

const supabaseAdmin = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL!,
  process.env.SUPABASE_SERVICE_ROLE_KEY!
);

export async function POST(req: NextRequest) {
  try {
    const { quoteId } = await req.json();

    const { data: quote } = await supabaseAdmin
      .from("quotes")
      .select("*")
      .eq("id", quoteId)
      .single();
    if (!quote) return NextResponse.json({ error: "Quote not found" }, { status: 404 });
    if (quote.status !== "approved")
      return NextResponse.json({ error: "Quote must be approved before converting to invoice" }, { status: 400 });

    const { data: lineItems } = await supabaseAdmin
      .from("line_items")
      .select("*")
      .eq("quote_id", quoteId)
      .order("sort_order");

    // Get next invoice number
    const { count } = await supabaseAdmin
      .from("invoices")
      .select("*", { count: "exact", head: true })
      .eq("user_id", quote.user_id);
    const invoiceNumber = `SB-${1001 + (count || 0)}`;

    const dueDate = new Date();
    dueDate.setDate(dueDate.getDate() + 14);

    const { data: invoice, error } = await supabaseAdmin
      .from("invoices")
      .insert({
        user_id: quote.user_id,
        quote_id: quoteId,
        invoice_number: invoiceNumber,
        client_name: quote.client_name,
        client_email: quote.client_email,
        client_phone: quote.client_phone,
        client_address: quote.client_address,
        status: "unpaid",
        subtotal: quote.subtotal,
        tax_rate: quote.tax_rate || 8.75,
        tax_amount: quote.tax_amount,
        total: quote.total,
        due_date: dueDate.toISOString().split("T")[0],
        public_token: nanoid(12),
      })
      .select()
      .single();

    if (error || !invoice) return NextResponse.json({ error: "Failed to create invoice" }, { status: 500 });

    // Snapshot line items into invoice_line_items
    if (lineItems && lineItems.length > 0) {
      await supabaseAdmin.from("invoice_line_items").insert(
        lineItems.map((item: any) => ({
          invoice_id: invoice.id,
          service_name: item.service_name,
          description: item.description,
          quantity: item.quantity || 1,
          unit_price: item.unit_price || item.labor_cost || 0,
          amount: item.amount || item.labor_cost + (item.material_cost || 0),
          taxable: item.taxable !== false,
          sort_order: item.sort_order || 0,
        }))
      );
    }

    // Mark quote as invoiced
    await supabaseAdmin.from("quotes").update({ status: "invoiced" }).eq("id", quoteId);

    return NextResponse.json({ invoice });
  } catch (error: any) {
    console.error("from-quote error:", error);
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}
