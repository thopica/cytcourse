import { NextResponse } from "next/server";
import Stripe from "stripe";
import { siteConfig } from "@/config/site";

function getStripeClient() {
  const secretKey = process.env.STRIPE_SECRET_KEY;

  if (!secretKey) {
    throw new Error("STRIPE_SECRET_KEY is not configured");
  }

  return new Stripe(secretKey, {
    apiVersion: "2025-02-24.acacia",
  });
}

export async function POST() {
  try {
    const stripe = getStripeClient();
    const { stripe: stripeConfig } = siteConfig;
    const baseSuccessUrl = `${process.env.NEXT_PUBLIC_SITE_URL}${stripeConfig.successUrl}`;
    const separator = baseSuccessUrl.includes("?") ? "&" : "?";

    const session = await stripe.checkout.sessions.create({
      payment_method_types: ["card"],
      mode: "payment",
      line_items: [
        {
          price_data: {
            currency: stripeConfig.currency,
            product_data: {
              name: stripeConfig.productName,
            },
            unit_amount: stripeConfig.priceAmount,
          },
          quantity: 1,
        },
      ],
      success_url: `${baseSuccessUrl}${separator}session_id={CHECKOUT_SESSION_ID}`,
      cancel_url: `${process.env.NEXT_PUBLIC_SITE_URL}${stripeConfig.cancelUrl}`,
    });

    return NextResponse.json({ url: session.url, sessionId: session.id });
  } catch (error) {
    console.error("Stripe error:", error);
    return NextResponse.json(
      { error: "Failed to create checkout session" },
      { status: 500 }
    );
  }
}
