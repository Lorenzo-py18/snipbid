import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function sendQuoteEmail({
  to,
  clientName,
  contractorName,
  total,
  quoteToken,
  pdfBuffer,
}: {
  to: string;
  clientName: string;
  contractorName: string;
  total: number;
  quoteToken: string;
  pdfBuffer?: Buffer;
}) {
  const quoteUrl = `${process.env.NEXT_PUBLIC_APP_URL}/q/${quoteToken}`;

  await resend.emails.send({
    from: "QuickBid Pro <quotes@quickbidpro.com>",
    to,
    subject: `Your Quote from ${contractorName} — $${total.toFixed(2)}`,
    html: `
      <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px;">
        <h2 style="color: #f97316;">Quote from ${contractorName}</h2>
        <p>Hi ${clientName},</p>
        <p>Please find your quote attached. Total amount: <strong>$${total.toFixed(2)}</strong></p>
        <p>
          <a href="${quoteUrl}" style="background: #f97316; color: white; padding: 12px 24px; text-decoration: none; border-radius: 6px; display: inline-block; margin: 16px 0;">
            View Full Quote &amp; Approve
          </a>
        </p>
        <p style="color: #666; font-size: 12px;">Powered by QuickBid Pro</p>
      </div>
    `,
    attachments: pdfBuffer
      ? [{ filename: "quote.pdf", content: pdfBuffer }]
      : undefined,
  });
}
