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
  const supportEmail = process.env.SUPPORT_EMAIL || "support@cytcourse.com";
  const logoUrl = process.env.NEXT_PUBLIC_LOGO_URL || "";
  const productName = siteConfig.stripe.productName;
  const safeName = customerName ? escapeHtml(customerName) : "there";
  const safeCustomerEmail = escapeHtml(customerEmail);
  const safeSupportEmail = escapeHtml(supportEmail);
  const safeProductName = escapeHtml(productName);
  const primary = siteConfig.theme.colors.primary;
  const text = siteConfig.theme.colors.text;

  const subject = `Your access instructions for ${productName}`;
  const textBody = [
    `Hi ${customerName || "there"},`,
    "",
    `Thanks so much for joining ${productName}.`,
    "Your payment was successful and your access instructions are below:",
    "1) Save this email so you can find it later.",
    "2) Reply to this email if you need support.",
    "",
    `If you need help, contact us at ${supportEmail}.`,
    "",
    "Welcome in.",
    `${siteConfig.siteName}`,
  ].join("\n");

  const html = `
    <div style="font-family: Arial, sans-serif; background: #f6f7fb; margin: 0; padding: 24px;">
      <table role="presentation" width="100%" cellspacing="0" cellpadding="0" style="max-width: 640px; margin: 0 auto; background: #ffffff; border-radius: 12px; border: 1px solid #e6e8ef;">
        <tr>
          <td style="padding: 28px 28px 12px;">
            ${logoUrl ? `<img src="${escapeHtml(logoUrl)}" alt="${escapeHtml(siteConfig.siteName)}" style="max-height: 48px; margin-bottom: 16px;" />` : ""}
            <h1 style="margin: 0; color: ${primary}; font-size: 24px; line-height: 1.3;">
              You're in. Welcome to ${safeProductName}
            </h1>
          </td>
        </tr>
        <tr>
          <td style="padding: 8px 28px 0; color: ${text}; font-size: 16px; line-height: 1.6;">
            <p style="margin: 0 0 12px;">Hi ${safeName},</p>
            <p style="margin: 0 0 12px;">
              Thank you so much for your trust. Your payment was successful for <strong>${safeProductName}</strong>.
            </p>
            <p style="margin: 0 0 12px;">
              This confirmation was sent to <strong>${safeCustomerEmail}</strong>.
            </p>
            <p style="margin: 0 0 12px;">
              Next steps:
            </p>
            <ol style="margin: 0 0 16px; padding-left: 20px;">
              <li>Save this email so you can find your purchase details quickly.</li>
              <li>Reply to this email if you need support or have any questions.</li>
            </ol>
            <p style="margin: 0 0 12px;">
              Need help? Contact us anytime at <a href="mailto:${safeSupportEmail}" style="color: ${primary};">${safeSupportEmail}</a>.
            </p>
            <p style="margin: 20px 0 0;">Welcome in,<br />${escapeHtml(siteConfig.siteName)}</p>
          </td>
        </tr>
      </table>
    </div>
  `;

  return { subject, html, text: textBody };
}
