import { NextResponse } from "next/server";
import Stripe from "stripe";
import { Resend } from "resend";
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

  return NextResponse.json({ received: true, emailed: true });
}
