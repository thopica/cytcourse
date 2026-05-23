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

function signupUrl() {
  const base = (process.env.NEXT_PUBLIC_SITE_URL ?? siteConfig.siteUrl).replace(/\/$/, "");
  return `${base}/signup`;
}

export function buildPurchaseEmail({ customerEmail, customerName }: PurchaseEmailInput) {
  const safeName = customerName ? escapeHtml(customerName) : "there";
  const primary = siteConfig.theme.colors.primary;
  const text = siteConfig.theme.colors.text;
  const link = signupUrl();
  const safeLink = escapeHtml(link);

  const subject = "Welcome — here's how to access your course";
  const textBody = [
    `Hi ${customerName || "there"},`,
    "",
    "Thank you so much for purchasing the Sunlight Dog Portrait Course. I'm excited for you to get started.",
    "",
    "Here's how to access the course:",
    "",
    `1. Open this link: ${link}`,
    "2. Create your account",
    "3. Check your inbox for a verification email from Supabase Auth and click the link to confirm your account",
    "4. Log in with your email and password",
    "5. Enjoy the course!",
    "",
    `Sign up here: ${link}`,
    "",
    "If you don't see the verification email within a few minutes, check your spam or promotions folder.",
    "",
    "See you inside,",
    "Thomas",
  ].join("\n");

  const html = `
    <div style="font-family: Arial, sans-serif; color: ${text}; max-width: 560px; margin: 32px auto; padding: 0 24px; font-size: 16px; line-height: 1.6;">
      <p style="margin: 0 0 16px;">Hi ${safeName},</p>
      <p style="margin: 0 0 16px;">
        Thank you so much for purchasing the Sunlight Dog Portrait Course. I'm excited for you to get started.
      </p>
      <p style="margin: 0 0 12px; font-weight: 600;">Here's how to access the course:</p>
      <ol style="margin: 0 0 20px; padding-left: 20px;">
        <li style="margin-bottom: 8px;">
          <a href="${safeLink}" style="color: ${primary};">Click this link</a> to create your account
        </li>
        <li style="margin-bottom: 8px;">Create your account</li>
        <li style="margin-bottom: 8px;">Check your inbox for a verification email from <strong>Supabase Auth</strong> and click the link to confirm your account</li>
        <li style="margin-bottom: 8px;">Log in with your email and password</li>
        <li style="margin-bottom: 8px;">Enjoy the course!</li>
      </ol>
      <p style="margin: 0 0 20px;">
        <a href="${safeLink}" style="display: inline-block; background: ${siteConfig.theme.colors.cta}; color: #ffffff; text-decoration: none; padding: 12px 20px; border-radius: 8px; font-weight: 600;">Create your account</a>
      </p>
      <p style="margin: 0 0 16px; font-size: 14px; color: #555555;">
        If you don't see the verification email within a few minutes, check your spam or promotions folder.
      </p>
      <p style="margin: 24px 0 0;">
        See you inside,<br />
        <span style="color: ${primary};">Thomas</span>
      </p>
    </div>
  `;

  return { subject, html, text: textBody };
}
