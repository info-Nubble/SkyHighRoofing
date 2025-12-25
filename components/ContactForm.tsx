"use client";

import { useState } from "react";

type ContactFormProps = {
  compact?: boolean;
};

export default function ContactForm({ compact = false }: ContactFormProps) {
  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">("idle");

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("sending");

    try {
      const form = e.currentTarget;
      const data = new FormData(form);

      const payload = {
        name: String(data.get("name") || ""),
        phone: String(data.get("phone") || ""),
        email: String(data.get("email") || ""),
        town: String(data.get("town") || ""),
        message: String(data.get("message") || ""),
      };

      const res = await fetch("/api/quote", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      if (!res.ok) throw new Error("Request failed");

      form.reset();
      setStatus("sent");
    } catch {
      setStatus("error");
    }
  }

  return (
    <div
      className={`rounded-2xl border border-black/5 bg-white shadow-soft ${
        compact ? "p-5" : "p-6"
      }`}
    >
      {!compact && (
        <div className="text-sm text-neutral-600">
          Average project investment:{" "}
          <span className="font-semibold text-neutral-900">$12,000 – $30,000</span>
          <div>We focus on long-term solutions, not temporary patchwork.</div>
        </div>
      )}

      <form onSubmit={onSubmit} className={`grid gap-3 ${compact ? "mt-0" : "mt-6"}`}>
        <div className="grid gap-3 md:grid-cols-2">
          <input
            name="name"
            required
            placeholder="Full name"
            className="w-full rounded-lg border border-neutral-300 px-3 py-3"
          />
          <input
            name="town"
            placeholder="Town (optional)"
            className="w-full rounded-lg border border-neutral-300 px-3 py-3"
          />
        </div>

        <div className="grid gap-3 md:grid-cols-2">
          <input
            name="phone"
            type="tel"
            placeholder="Phone"
            className="w-full rounded-lg border border-neutral-300 px-3 py-3"
          />
          <input
            name="email"
            type="email"
            required
            placeholder="Email"
            className="w-full rounded-lg border border-neutral-300 px-3 py-3"
          />
        </div>

        <textarea
          name="message"
          required
          placeholder="Tell us what you need (leak, replacement, storm damage, timeline, etc.)"
          className={`w-full rounded-lg border border-neutral-300 px-3 py-3 ${
            compact ? "min-h-[110px]" : "min-h-[140px]"
          }`}
        />

        <button
          type="submit"
          disabled={status === "sending"}
          className="rounded-lg bg-sky-900 px-4 py-3 font-semibold text-white hover:bg-sky-800 disabled:opacity-60"
        >
          {status === "sending" ? "Sending..." : "Request a free estimate"}
        </button>

        {status === "sent" && (
          <p className="text-sm text-green-700">
            Message sent. We’ll get back to you shortly.
          </p>
        )}
        {status === "error" && (
          <p className="text-sm text-red-700">
            Something went wrong. Please try again or call us directly.
          </p>
        )}
      </form>
    </div>
  );
}
