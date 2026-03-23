import OpenAI from "openai";

const deepseek = new OpenAI({
  apiKey: process.env.DEEPSEEK_API_KEY!,
  baseURL: "https://api.deepseek.com",
});

export interface GenerateQuoteParams {
  clientName: string;
  clientAddress: string;
  businessName: string;
  businessLicense: string;
  paymentTerms: string;
  quoteValidityDays: number;
  lineItems: Array<{
    serviceName: string;
    description?: string;
    laborCost: number;
    materialCost: number;
    hours: number;
  }>;
}

export async function generateQuoteDescription(params: GenerateQuoteParams): Promise<string> {
  const lineItemsText = params.lineItems
    .map(
      (item) =>
        `- ${item.serviceName}: ${item.hours}h labor ($${item.laborCost}), materials ($${item.materialCost})${item.description ? ` — ${item.description}` : ""}`
    )
    .join("\n");

  const completion = await deepseek.chat.completions.create({
    model: "deepseek-chat",
    messages: [
      {
        role: "system",
        content: `You are a professional quote writer for a licensed contractor. Generate a detailed, professional quote letter that includes:
- Warm greeting to the client by name
- Detailed scope of work for each service line item
- Materials and labor breakdown
- Warranty information (90-day labor guarantee)
- Payment terms and validity period
- Professional sign-off with business name and license number
Keep the tone professional but approachable. Use clear, non-technical language the homeowner can understand. Format as plain text paragraphs, no markdown.`,
      },
      {
        role: "user",
        content: `Generate a quote for:
Client: ${params.clientName}
Address: ${params.clientAddress}
Business: ${params.businessName} (License: ${params.businessLicense})
Payment Terms: ${params.paymentTerms}
Quote Valid For: ${params.quoteValidityDays} days

Services:
${lineItemsText}`,
      },
    ],
    temperature: 0.7,
    max_tokens: 1000,
  });

  return completion.choices[0].message.content || "";
}
