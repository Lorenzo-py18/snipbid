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
    from: "SnipBid <noreply@snipbid.com>",
    to,
    subject: `Your Quote from ${contractorName} — $${total.toFixed(2)}`,
    html: `
      <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; background: #ffffff;">
        <div style="border-bottom: 3px solid #f97316; padding-bottom: 16px; margin-bottom: 24px;">
          <h1 style="color: #f97316; margin: 0; font-size: 24px;">SnipBid</h1>
        </div>
        <h2 style="color: #111; font-size: 20px;">Quote from ${contractorName}</h2>
        <p style="color: #333;">Hi ${clientName},</p>
        <p style="color: #333;">${contractorName} has sent you a quote. Total amount: <strong style="color: #f97316; font-size: 18px;">$${total.toFixed(2)}</strong></p>
        <p style="margin: 32px 0;">
          <a href="${quoteUrl}" style="background: #f97316; color: white; padding: 14px 28px; text-decoration: none; border-radius: 8px; display: inline-block; font-weight: bold; font-size: 16px;">
            View &amp; Approve Quote
          </a>
        </p>
        <hr style="border: none; border-top: 1px solid #eee; margin: 24px 0;" />
        <p style="color: #999; font-size: 12px;">
          If this email landed in spam, please add <strong>noreply@snipbid.com</strong> to your contacts to ensure future quotes arrive in your inbox.
        </p>
        <p style="color: #ccc; font-size: 11px;">Powered by SnipBid</p>
      </div>
    `,
    attachments: pdfBuffer
      ? [{ filename: "quote.pdf", content: pdfBuffer }]
      : undefined,
  });
}
