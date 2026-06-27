import { NextResponse } from "next/server";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

/**
 * POST /api/subscribe
 * Captures a mailing-list signup and forwards it to GoHighLevel.
 *
 * Configure ONE of these (server-side env, NOT NEXT_PUBLIC):
 *   GHL_NEWSLETTER_WEBHOOK_URL  — a GHL Inbound Webhook URL (recommended; simplest).
 *                                 We POST { email, source, tags, submitted_at } as JSON.
 *
 * Optional:
 *   GHL_NEWSLETTER_TAGS         — comma-separated tags to attach (default: "lbsoy-newsletter").
 *
 * To use the GHL v2 contacts API instead of an inbound webhook, set the webhook URL
 * to your endpoint and adjust the payload below to match its schema.
 */

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export async function POST(req: Request) {
  let body: { email?: string; source?: string };
  try {
    body = await req.json();
  } catch {
    return NextResponse.json({ ok: false, message: "Invalid request." }, { status: 400 });
  }

  const email = (body.email || "").trim().toLowerCase();
  const source = (body.source || "website").toString().slice(0, 60);

  if (!EMAIL_RE.test(email)) {
    return NextResponse.json(
      { ok: false, message: "Please enter a valid email address." },
      { status: 422 }
    );
  }

  const webhook = process.env.GHL_NEWSLETTER_WEBHOOK_URL;
  const tags = (process.env.GHL_NEWSLETTER_TAGS || "lbsoy-newsletter")
    .split(",")
    .map((t) => t.trim())
    .filter(Boolean);

  if (!webhook) {
    // Fail loudly in logs so the operator knows to set the env var, but don't
    // leak config details to the visitor.
    console.error(
      "[subscribe] GHL_NEWSLETTER_WEBHOOK_URL is not set — signup not delivered:",
      email
    );
    return NextResponse.json(
      { ok: false, message: "Signups aren't enabled yet. Please try again later." },
      { status: 503 }
    );
  }

  try {
    const upstream = await fetch(webhook, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        email,
        source: `lbsoy:${source}`,
        tags,
        submitted_at: new Date().toISOString(),
      }),
      // Don't let a slow CRM hang the request.
      signal: AbortSignal.timeout(8000),
    });

    if (!upstream.ok) {
      console.error("[subscribe] upstream webhook failed:", upstream.status, email);
      return NextResponse.json(
        { ok: false, message: "We couldn't sign you up just now. Please try again." },
        { status: 502 }
      );
    }

    return NextResponse.json({ ok: true, message: "You're on the list. Welcome!" });
  } catch (err) {
    console.error("[subscribe] error forwarding to GHL:", err);
    return NextResponse.json(
      { ok: false, message: "We couldn't sign you up just now. Please try again." },
      { status: 502 }
    );
  }
}
