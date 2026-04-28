import { NextResponse } from "next/server";
import Stripe from "stripe";
import { Resend } from "resend";
import crypto from "crypto";
import { buildPurchaseEmail } from "@/lib/purchase-email";

function getStripeClient() {
  const secretKey = process.env.STRIPE_SECRET_KEY;

  if (!secretKey) {
    throw new Error("STRIPE_SECRET_KEY is not configured");
  }

  return new Stripe(secretKey, {
    apiVersion: "2025-02-24.acacia",
  });
}

function getResendClient() {
  const resendApiKey = process.env.RESEND_API_KEY;

  if (!resendApiKey) {
    throw new Error("RESEND_API_KEY is not configured");
  }

  return new Resend(resendApiKey);
}

function hashEmail(email: string) {
  return crypto.createHash("sha256").update(email.trim().toLowerCase()).digest("hex");
}

async function sendMetaPurchaseEvent(params: {
  session: Stripe.Checkout.Session;
  customerEmail: string;
}) {
  const metaAccessToken = process.env.META_ACCESS_TOKEN;
  const metaPixelId = process.env.META_PIXEL_ID || process.env.NEXT_PUBLIC_META_PIXEL_ID;

  if (!metaAccessToken || !metaPixelId) {
    return;
  }

  const { session, customerEmail } = params;
  const value = typeof session.amount_total === "number" ? session.amount_total / 100 : undefined;
  const currency = session.currency?.toUpperCase();
  const eventId = `stripe_${session.id}`;
  const testEventCode = process.env.META_TEST_EVENT_CODE;
  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL;
  const eventSourceUrl = siteUrl
    ? `${siteUrl.replace(/\/$/, "")}/success?session_id=${encodeURIComponent(session.id)}`
    : undefined;

  const payload: {
    data: Array<Record<string, unknown>>;
    test_event_code?: string;
  } = {
    data: [
      {
        event_name: "Purchase",
        event_time: Math.floor(Date.now() / 1000),
        event_id: eventId,
        action_source: "website",
        ...(eventSourceUrl ? { event_source_url: eventSourceUrl } : {}),
        user_data: {
          em: [hashEmail(customerEmail)],
        },
        custom_data: {
          value,
          currency,
        },
      },
    ],
  };

  if (testEventCode) {
    payload.test_event_code = testEventCode;
  }

  const response = await fetch(
    `https://graph.facebook.com/v22.0/${metaPixelId}/events?access_token=${encodeURIComponent(metaAccessToken)}`,
    {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(payload),
    }
  );

  if (!response.ok) {
    const responseBody = await response.text();
    throw new Error(`Meta Conversions API error: ${response.status} ${responseBody}`);
  }
}

export async function POST(request: Request) {
  const webhookSecret = process.env.STRIPE_WEBHOOK_SECRET;
  const fromEmail = process.env.RESEND_FROM_EMAIL;

  if (!webhookSecret) {
    return NextResponse.json(
      { error: "STRIPE_WEBHOOK_SECRET is not configured" },
      { status: 500 }
    );
  }

  if (!fromEmail) {
    return NextResponse.json({ error: "RESEND_FROM_EMAIL is not configured" }, { status: 500 });
  }

  const signature = request.headers.get("stripe-signature");

  if (!signature) {
    return NextResponse.json({ error: "Missing stripe-signature header" }, { status: 400 });
  }

  const stripe = getStripeClient();
  const resend = getResendClient();
  const body = await request.text();
  let event: Stripe.Event;

  try {
    event = stripe.webhooks.constructEvent(body, signature, webhookSecret);
  } catch (error) {
    return NextResponse.json(
      {
        error: "Invalid webhook signature",
        details: error instanceof Error ? error.message : "unknown",
      },
      { status: 400 }
    );
  }

  if (event.type !== "checkout.session.completed") {
    return NextResponse.json({ received: true });
  }

  const session = event.data.object as Stripe.Checkout.Session;
  const customerEmail = session.customer_details?.email ?? session.customer_email;
  const customerName = session.customer_details?.name;

  if (!customerEmail) {
    return NextResponse.json({ received: true, skipped: "missing_customer_email" });
  }

  const email = buildPurchaseEmail({ customerEmail, customerName });

  try {
    await resend.emails.send({
      from: fromEmail,
      to: customerEmail,
      subject: email.subject,
      html: email.html,
      text: email.text,
      replyTo: process.env.RESEND_REPLY_TO || undefined,
    });
  } catch (error) {
    console.error("Failed to send purchase email:", error);
    return NextResponse.json({ error: "Failed to send email" }, { status: 500 });
  }

  try {
    await sendMetaPurchaseEvent({ session, customerEmail });
  } catch (error) {
    console.error("Failed to send Meta purchase event:", error);
  }

  return NextResponse.json({ received: true, emailed: true });
}
