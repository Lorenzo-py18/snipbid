import { createClient } from "@supabase/supabase-js";
import ClientQuotePage from "./ClientQuotePage";

const supabaseAdmin = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL!,
  process.env.SUPABASE_SERVICE_ROLE_KEY!
);

export default async function PublicQuotePage({ params }: { params: Promise<{ token: string }> }) {
  const { token } = await params;
  const { data: quote } = await supabaseAdmin.from("quotes").select("*").eq("public_token", token).single();
  if (!quote) return <div style={{ color: "#e0e0ef", textAlign: "center", padding: "4rem" }}>Quote not found.</div>;

  const { data: lineItems } = await supabaseAdmin.from("line_items").select("*").eq("quote_id", quote.id).order("sort_order");
  const { data: profile } = await supabaseAdmin.from("profiles").select("*").eq("id", quote.user_id).single();

  return <ClientQuotePage quote={quote} lineItems={lineItems || []} profile={profile} />;
}
