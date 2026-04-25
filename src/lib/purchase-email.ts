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
    <div style="font-family: Arial, sans-serif; color: ${text}; max-width: 560px; margin: 32px auto; padding: 0 24px; font-size: 16px; line-height: 1.6;">
      <p style="margin: 0 0 16px;">Hi ${safeName},</p>
      <p style="margin: 0 0 16px;">
        I saw that you just purchased the Sunlight Dog Portrait Course. I'm so sorry but the product is not ready yet. Didn't expect for anyone to buy so quickly. I was just testing some stuff.
      </p>
      <p style="margin: 0 0 16px;">
        Once again, I want to apologize and offer a full refund right now if you'd prefer that. Alternatively, I can hold your spot and just give you access to the product the moment it's ready.
      </p>
      <p style="margin: 24px 0 0;">
        Sorry again,<br />
        <span style="color: ${primary};">Thomas</span>
      </p>
    </div>
  `;

  return { subject, html, text: textBody };
}
