import { NextResponse } from "next/server";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

/**
 * POST /api/lead
 * Captures a contact / consultation lead and forwards it to GoHighLevel.
 *
 * Configure (server-side env, NOT NEXT_PUBLIC):
 *   GHL_LEAD_WEBHOOK_URL  — a GHL Inbound Webhook URL for contact/consult leads.
 *                           Falls back to GHL_NEWSLETTER_WEBHOOK_URL if unset.
 * Optional:
 *   GHL_LEAD_TAGS         — comma-separated tags (default: "lbsoy-website-lead").
 */

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export async function POST(req: Request) {
  let body: Record<string, string>;
  try {
    body = await req.json();
  } catch {
    return NextResponse.json({ ok: false, message: "Invalid request." }, { status: 400 });
  }

  const name = (body.name || "").trim().slice(0, 120);
  const email = (body.email || "").trim().toLowerCase();
  const phone = (body.phone || "").trim().slice(0, 40);
  const interest = (body.interest || "").trim().slice(0, 60);
  const message = (body.message || "").trim().slice(0, 4000);
  const source = (body.source || "contact").toString().slice(0, 60);

  if (!name) {
    return NextResponse.json({ ok: false, message: "Please enter your name." }, { status: 422 });
  }
  if (!EMAIL_RE.test(email)) {
    return NextResponse.json(
      { ok: false, message: "Please enter a valid email address." },
      { status: 422 }
    );
  }

  const webhook = process.env.GHL_LEAD_WEBHOOK_URL || process.env.GHL_NEWSLETTER_WEBHOOK_URL;
  const tags = (process.env.GHL_LEAD_TAGS || "lbsoy-website-lead")
    .split(",")
    .map((t) => t.trim())
    .filter(Boolean);

  if (!webhook) {
    console.error("[lead] GHL_LEAD_WEBHOOK_URL is not set — lead not delivered:", email);
    return NextResponse.json(
      { ok: false, message: "Our form isn't connected yet. Please email longbeachschoolofyoga@gmail.com." },
      { status: 503 }
    );
  }

  try {
    const upstream = await fetch(webhook, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        name,
        email,
        phone,
        interest,
        message,
        source: `lbsoy:${source}`,
        tags,
        submitted_at: new Date().toISOString(),
      }),
      signal: AbortSignal.timeout(8000),
    });

    if (!upstream.ok) {
      console.error("[lead] upstream webhook failed:", upstream.status, email);
      return NextResponse.json(
        { ok: false, message: "We couldn't send your message just now. Please try again." },
        { status: 502 }
      );
    }

    return NextResponse.json({ ok: true });
  } catch (err) {
    console.error("[lead] error forwarding to GHL:", err);
    return NextResponse.json(
      { ok: false, message: "We couldn't send your message just now. Please try again." },
      { status: 502 }
    );
  }
}
