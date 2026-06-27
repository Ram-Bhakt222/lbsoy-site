"use client";

import { useState } from "react";

type Status = "idle" | "loading" | "success" | "error";

const INTERESTS = [
  { value: "", label: "Select a subject" },
  { value: "yoga-therapy", label: "Yoga Therapy" },
  { value: "corporate-wellness", label: "Corporate Wellness" },
  { value: "online-courses", label: "Online Courses" },
  { value: "general", label: "General Question" },
  { value: "other", label: "Other" },
];

/**
 * LeadForm — reusable contact / consultation lead capture.
 * Posts to /api/lead, which forwards to GoHighLevel (see app/api/lead/route.ts).
 * Uses the existing .form-* classes from the page CSS so it matches the design.
 */
export default function LeadForm({
  source = "contact",
  submitLabel = "Send Message",
  messageRequired = true,
}: {
  source?: string;
  submitLabel?: string;
  messageRequired?: boolean;
}) {
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    interest: "",
    message: "",
  });
  const [status, setStatus] = useState<Status>("idle");
  const [error, setError] = useState("");

  function update(field: keyof typeof form) {
    return (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) =>
      setForm((f) => ({ ...f, [field]: e.target.value }));
  }

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    if (status === "loading") return;
    setError("");

    if (!form.name.trim()) return fail("Please enter your name.");
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email.trim()))
      return fail("Please enter a valid email address.");
    if (messageRequired && !form.message.trim()) return fail("Please add a short message.");

    setStatus("loading");
    try {
      const res = await fetch("/api/lead", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...form, source }),
      });
      const data = await res.json().catch(() => ({}));
      if (res.ok && data?.ok) {
        setStatus("success");
      } else {
        setStatus("error");
        setError(data?.message || "Something went wrong. Please email us directly.");
      }
    } catch {
      setStatus("error");
      setError("Network error. Please try again, or email us directly.");
    }
  }

  function fail(msg: string) {
    setStatus("error");
    setError(msg);
  }

  if (status === "success") {
    return (
      <div className="form-section" role="status">
        <h3 style={{ fontFamily: "var(--font-heading)", color: "var(--charcoal)", marginBottom: 8 }}>
          Thank you — we&apos;ve got it.
        </h3>
        <p style={{ color: "var(--text-secondary)" }}>
          We&apos;ll reply by email shortly. For anything urgent, email{" "}
          <a href="mailto:longbeachschoolofyoga@gmail.com">longbeachschoolofyoga@gmail.com</a>.
        </p>
      </div>
    );
  }

  return (
    <form className="form-section" onSubmit={onSubmit} noValidate>
      <div className="form-row">
        <div className="form-group">
          <label className="form-label" htmlFor="lead-name">Full Name</label>
          <input id="lead-name" className="form-input" type="text" autoComplete="name"
            placeholder="Your name" value={form.name} onChange={update("name")} required />
        </div>
        <div className="form-group">
          <label className="form-label" htmlFor="lead-email">Email Address</label>
          <input id="lead-email" className="form-input" type="email" autoComplete="email"
            placeholder="your@email.com" value={form.email} onChange={update("email")} required />
        </div>
      </div>
      <div className="form-row">
        <div className="form-group">
          <label className="form-label" htmlFor="lead-phone">Phone Number</label>
          <input id="lead-phone" className="form-input" type="tel" autoComplete="tel"
            placeholder="(555) 000-0000" value={form.phone} onChange={update("phone")} />
        </div>
        <div className="form-group">
          <label className="form-label" htmlFor="lead-interest">What Is This About?</label>
          <select id="lead-interest" className="form-select" value={form.interest} onChange={update("interest")}>
            {INTERESTS.map((o) => (
              <option key={o.value} value={o.value}>{o.label}</option>
            ))}
          </select>
        </div>
      </div>
      <div className="form-group">
        <label className="form-label" htmlFor="lead-message">Your Message</label>
        <textarea id="lead-message" className="form-textarea"
          placeholder="Tell us more about what brings you here..." value={form.message}
          onChange={update("message")} required={messageRequired} />
      </div>
      {status === "error" && (
        <p role="alert" style={{ color: "var(--terracotta)", marginBottom: 16, fontSize: 14 }}>{error}</p>
      )}
      <button type="submit" className="btn-primary" disabled={status === "loading"}>
        {status === "loading" ? "Sending…" : submitLabel}
      </button>
    </form>
  );
}
