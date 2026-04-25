import { siteConfig } from "@/config/site";

type PurchaseEmailInput = {
  customerEmail: string;
  customerName?: string | null;
};

function escapeHtml(value: string) {
  return value
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#039;");
}

export function buildPurchaseEmail({ customerEmail, customerName }: PurchaseEmailInput) {
  const logoUrl = process.env.NEXT_PUBLIC_LOGO_URL || "";
  const safeName = customerName ? escapeHtml(customerName) : "there";
  const primary = siteConfig.theme.colors.primary;
  const text = siteConfig.theme.colors.text;

  const subject = "About your Sunlight Dog Portrait Course purchase";
  const textBody = [
    `Hi ${customerName || "there"},`,
    "",
    "I saw that you just purchased the Sunlight Dog Portrait Course. I'm so sorry but the product is not ready yet. Didn't expect for anyone to buy so quickly. I was just testing some stuff.",
    "",
    "Once again, I want to apologize and offer a full refund right now if you'd prefer that. Alternatively, I can hold your spot and just give you access to the product the moment it's ready.",
    "",
    "Sorry again.",
    "Thomas",
  ].join("\n");

  const html = `
    <div style="font-family: Arial, sans-serif; background: #f6f7fb; margin: 0; padding: 24px;">
      <table role="presentation" width="100%" cellspacing="0" cellpadding="0" style="max-width: 640px; margin: 0 auto; background: #ffffff; border-radius: 12px; border: 1px solid #e6e8ef;">
        <tr>
          <td style="padding: 28px 28px 12px;">
            ${logoUrl ? `<img src="${escapeHtml(logoUrl)}" alt="${escapeHtml(siteConfig.siteName)}" style="max-height: 48px; margin-bottom: 16px;" />` : ""}
            <h1 style="margin: 0; color: ${primary}; font-size: 24px; line-height: 1.3;">
              About your purchase
            </h1>
          </td>
        </tr>
        <tr>
          <td style="padding: 8px 28px 0; color: ${text}; font-size: 16px; line-height: 1.6;">
            <p style="margin: 0 0 12px;">Hi ${safeName},</p>
            <p style="margin: 0 0 12px;">
              I saw that you just purchased the Sunlight Dog Portrait Course. I'm so sorry but the product is not ready yet. Didn't expect for anyone to buy so quickly. I was just testing some stuff.
            </p>
            <p style="margin: 0 0 12px;">
              Once again, I want to apologize and offer a full refund right now if you'd prefer that. Alternatively, I can hold your spot and just give you access to the product the moment it's ready.
            </p>
            <p style="margin: 20px 0 0;">Sorry again,<br />Thomas</p>
          </td>
        </tr>
      </table>
    </div>
  `;

  return { subject, html, text: textBody };
}
