import { createClient } from "@supabase/supabase-js";
import ClientInvoicePage from "./ClientInvoicePage";

const supabaseAdmin = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL!,
  process.env.SUPABASE_SERVICE_ROLE_KEY!
);

export default async function PublicInvoicePage({ params }: { params: Promise<{ token: string }> }) {
  const { token } = await params;
  const { data: invoice } = await supabaseAdmin.from("invoices").select("*").eq("public_token", token).single();
  if (!invoice) return <div style={{ color: "#e0e0ef", textAlign: "center", padding: "4rem" }}>Invoice not found.</div>;

  const { data: lineItems } = await supabaseAdmin.from("invoice_line_items").select("*").eq("invoice_id", invoice.id).order("sort_order");
  const { data: profile } = await supabaseAdmin.from("profiles").select("*").eq("id", invoice.user_id).single();

  return <ClientInvoicePage invoice={invoice} lineItems={lineItems || []} profile={profile} />;
}
