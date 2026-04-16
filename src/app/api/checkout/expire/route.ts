import { NextResponse } from "next/server";
import Stripe from "stripe";

function getStripeClient() {
  const secretKey = process.env.STRIPE_SECRET_KEY;

  if (!secretKey) {
    throw new Error("STRIPE_SECRET_KEY is not configured");
  }

  return new Stripe(secretKey, {
    apiVersion: "2025-02-24.acacia",
  });
}

export async function POST(request: Request) {
  try {
    const stripe = getStripeClient();
    const body = await request.json();
    const sessionId = body?.session_id;

    if (!sessionId || typeof sessionId !== "string") {
      return NextResponse.json(
        { error: "session_id is required" },
        { status: 400 }
      );
    }

    const session = await stripe.checkout.sessions.expire(sessionId);

    return NextResponse.json({
      id: session.id,
      status: session.status,
      payment_status: session.payment_status,
    });
  } catch (error) {
    if (error instanceof Stripe.errors.StripeInvalidRequestError) {
      return NextResponse.json(
        { error: error.message || "Session cannot be expired" },
        { status: 400 }
      );
    }

    console.error("Stripe expire error:", error);
    return NextResponse.json(
      { error: "Failed to expire checkout session" },
      { status: 500 }
    );
  }
}
