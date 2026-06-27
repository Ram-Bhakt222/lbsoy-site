"use client";

import { useState } from "react";

type Status = "idle" | "loading" | "success" | "error";

/**
 * MailingListSignup
 * Site-wide email capture. Posts to /api/subscribe, which forwards the address
 * to the configured GoHighLevel webhook (see app/api/subscribe/route.ts).
 * Styled with the global sage palette in app/globals.css (.ml-signup*).
 *
 * Props let the same component be reused inline on pages later with different copy.
 */
export default function MailingListSignup({
  heading = "Healthy Long Beach, in your inbox",
  blurb = "Get our Long Beach healthy-living guide — events, new spots, and wellness tips every couple of weeks. No spam.",
  source = "footer",
  variant = "dark",
}: {
  heading?: string;
  blurb?: string;
  source?: string;
  variant?: "dark" | "light";
}) {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<Status>("idle");
  const [message, setMessage] = useState("");

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    if (status === "loading") return;

    const trimmed = email.trim();
    // Lightweight client-side guard; the API revalidates.
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(trimmed)) {
      setStatus("error");
      setMessage("Please enter a valid email address.");
      return;
    }

    setStatus("loading");
    setMessage("");

    try {
      const res = await fetch("/api/subscribe", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email: trimmed, source }),
      });
      const data = await res.json().catch(() => ({}));

      if (res.ok && data?.ok) {
        setStatus("success");
        setMessage(data.message || "You're on the list. Welcome!");
        setEmail("");
      } else {
        setStatus("error");
        setMessage(data?.message || "Something went wrong. Please try again.");
      }
    } catch {
      setStatus("error");
      setMessage("Network error. Please try again in a moment.");
    }
  }

  return (
    <div className={variant === "light" ? "ml-signup ml-signup--light" : "ml-signup"}>
      <h4 className="ml-signup-heading">{heading}</h4>
      <p className="ml-signup-blurb">{blurb}</p>

      {status === "success" ? (
        <p className="ml-signup-success" role="status">
          {message}
        </p>
      ) : (
        <form className="ml-signup-form" onSubmit={onSubmit} noValidate>
          <label htmlFor="ml-email" className="ml-signup-label">
            Email address
          </label>
          <div className="ml-signup-row">
            <input
              id="ml-email"
              type="email"
              name="email"
              inputMode="email"
              autoComplete="email"
              placeholder="you@example.com"
              className="ml-signup-input"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              aria-invalid={status === "error"}
              aria-describedby={status === "error" ? "ml-email-error" : undefined}
              required
            />
            <button type="submit" className="ml-signup-btn" disabled={status === "loading"}>
              {status === "loading" ? "Joining…" : "Subscribe"}
            </button>
          </div>
          {status === "error" && (
            <p id="ml-email-error" className="ml-signup-error" role="alert">
              {message}
            </p>
          )}
        </form>
      )}
    </div>
  );
}
