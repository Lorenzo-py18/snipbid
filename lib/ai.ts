import OpenAI from "openai";

const deepseek = new OpenAI({
  apiKey: process.env.DEEPSEEK_API_KEY!,
  baseURL: "https://api.deepseek.com",
});

export interface ParsedRequest {
  customer_name?: string;
  service_type?: string;
  address?: string;
  notes?: string;
  urgency?: "normal" | "urgent" | "emergency";
  suggested_line_items: {
    service_name: string;
    description: string;
    quantity: number;
    unit_price: number;
  }[];
}

export async function parseCustomerMessage(message: string): Promise<ParsedRequest> {
  const completion = await deepseek.chat.completions.create({
    model: "deepseek-chat",
    messages: [
      {
        role: "system",
        content: `You are an assistant for a small service business. A customer has sent a message requesting work. Extract structured information from the message.

Return a JSON object with these fields:
- customer_name: string or null
- service_type: short category label (e.g. "faucet repair", "house cleaning", "drywall patch")
- address: string or null
- notes: any additional details the customer mentioned
- urgency: "normal", "urgent", or "emergency" based on tone/keywords
- suggested_line_items: array of { service_name, description, quantity, unit_price }
  - For unit_price, use reasonable market estimates. These are SUGGESTIONS only — the user will always review and adjust pricing.
  - If you cannot determine a price, set unit_price to 0 and add "(price TBD)" to description.

Return ONLY valid JSON with no markdown formatting. If the message is unclear, extract what you can and leave other fields as null.`,
      },
      { role: "user", content: message },
    ],
    temperature: 0.3,
    max_tokens: 800,
  });

  const content = completion.choices[0].message.content || "{}";
  try {
    return JSON.parse(content);
  } catch {
    return { suggested_line_items: [] };
  }
}

export interface GenerateQuoteParams {
  clientName: string;
  clientAddress?: string;
  businessName: string;
  businessLicense?: string;
  paymentTerms: string;
  quoteValidityDays: number;
  lineItems: Array<{
    serviceName: string;
    description?: string;
    quantity: number;
    unitPrice: number;
  }>;
}

export async function generateQuoteDescription(params: GenerateQuoteParams): Promise<string> {
  const lineItemsText = params.lineItems
    .map((item) => `- ${item.serviceName} (qty: ${item.quantity}${item.description ? ` — ${item.description}` : ""})`)
    .join("\n");

  const completion = await deepseek.chat.completions.create({
    model: "deepseek-chat",
    messages: [
      {
        role: "system",
        content: `You are a professional quote writer for a small service business.
Draft a clear, professional scope of work based on the provided job details and line items.

Rules:
- Address the client by name if provided
- Write a clear Scope of Work section in plain language a homeowner can understand
- Describe what will be done, not how much it costs (pricing is shown in the line items table)
- Tone: professional, approachable, trustworthy
- Length: 100-250 words (keep it concise)
- Do NOT invent services that aren't in the line items
- Do NOT include dollar amounts in the prose
- End with a brief note about next steps ("Reply to approve this quote" or similar)
- Format as plain text paragraphs, no markdown`,
      },
      {
        role: "user",
        content: `Generate a quote scope of work for:
Client: ${params.clientName}
Address: ${params.clientAddress || "Not provided"}
Business: ${params.businessName}${params.businessLicense ? ` (License: ${params.businessLicense})` : ""}
Payment Terms: ${params.paymentTerms}
Quote Valid For: ${params.quoteValidityDays} days

Services:
${lineItemsText}`,
      },
    ],
    temperature: 0.7,
    max_tokens: 500,
  });

  return completion.choices[0].message.content || "";
}
