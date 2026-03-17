"use client";

import { useState } from "react";
import Link from "next/link";

export default function Home() {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [errorMessage, setErrorMessage] = useState("");

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!email) return;
    setStatus("loading");
    setErrorMessage("");

    try {
      const res = await fetch("/api/subscribe", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email }),
      });
      const data = await res.json();
      if (res.ok) {
        setStatus("success");
        window.location.href = "/thank-you";
      } else {
        setStatus("error");
        setErrorMessage(data.error || "Something went wrong. Try again.");
      }
    } catch {
      setStatus("error");
      setErrorMessage("Something went wrong. Try again.");
    }
  }

  return (
    <main className="min-h-screen flex flex-col items-center justify-center px-6 py-16">
      <div className="w-full max-w-2xl">

        {/* Eyebrow */}
        <p className="text-sm font-medium text-neutral-400 uppercase tracking-widest mb-6">
          Free PDF — no cost, no catch
        </p>

        {/* Headline */}
        <h1 className="text-3xl sm:text-4xl font-bold leading-tight mb-4 text-white">
          I was losing leads while I was in meetings.
          <br className="hidden sm:block" />
          <span className="text-neutral-300"> Here&apos;s the 30-minute Make.com fix — and 4 other workflows I built to stop running my side business on evenings and willpower.</span>
        </h1>

        {/* Subheadline */}
        <p className="text-lg text-neutral-400 mb-10">
          Download the free PDF:{" "}
          <em className="text-neutral-200">The Side Business Automation Stack — 5 Make.com Workflows That Run Your Business While You&apos;re at Work</em>
        </p>

        {/* Body */}
        <div className="text-neutral-300 space-y-4 mb-10 text-base leading-relaxed">
          <p>
            If you&apos;re building something on the side while working full-time, you already know the math.
          </p>
          <p>
            Your side business gets the hours your job didn&apos;t take. Which means it gets evenings, weekends, and whatever mental bandwidth is left after eight hours of someone else&apos;s priorities.
          </p>
          <p>
            That&apos;s not a time management problem. It&apos;s a systems problem.
          </p>
          <p>
            These are the 5 automations I built to solve mine. They&apos;re real workflows I use for my own consulting practice — built in Make.com, and documented here so you can steal them.
          </p>
        </div>

        {/* What's inside */}
        <div className="border border-neutral-800 rounded-lg p-6 mb-10 space-y-4">
          <h2 className="text-sm font-semibold text-neutral-400 uppercase tracking-widest mb-4">What&apos;s inside</h2>
          {[
            {
              title: 'The "Never Miss a Lead" Machine',
              body: "A prospect fills out your contact form during your 9am standup. They get a personal-looking response within 5 minutes. You find out when you check Slack at lunch. Setup: ~30 minutes.",
            },
            {
              title: "The Zero-Touch Client Onboarding Sequence",
              body: "New payment comes in. Make.com creates the Google Drive folder, sends the welcome email, adds them to your CRM, and fires the onboarding questionnaire. Automatically. You're still at work when it happens.",
            },
            {
              title: "The Invoice + Payment Tracker",
              body: "Automated follow-up on unpaid invoices, so you're not choosing between getting paid and being awkward about it.",
            },
            {
              title: "The One-Post-to-Everywhere Content Distributor",
              body: "Write one LinkedIn post. Make.com handles the rest: Twitter, your content archive, draft newsletter. One piece of content, multiple places.",
            },
            {
              title: "The Monday Morning Business Digest",
              body: "Every Monday at 7am, your inbox has a clean summary: revenue, new subscribers, open leads, tasks due this week. No app switching, no manual checking.",
            },
          ].map((item, i) => (
            <div key={i} className="flex gap-4">
              <span className="text-neutral-600 font-mono text-sm pt-0.5 shrink-0">{String(i + 1).padStart(2, "0")}</span>
              <div>
                <p className="font-semibold text-white text-sm">{item.title}</p>
                <p className="text-neutral-400 text-sm leading-relaxed mt-1">{item.body}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Form */}
        <div className="mb-4">
          <label htmlFor="email" className="block text-sm font-medium text-neutral-300 mb-3">
            Where should I send it?
          </label>
          <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3">
            <input
              id="email"
              type="email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="your@email.com"
              className="flex-1 bg-neutral-900 border border-neutral-700 rounded-md px-4 py-3 text-white placeholder-neutral-600 focus:outline-none focus:border-neutral-400 text-sm"
            />
            <button
              type="submit"
              disabled={status === "loading"}
              className="bg-white text-black font-semibold px-6 py-3 rounded-md text-sm hover:bg-neutral-200 transition-colors disabled:opacity-60 whitespace-nowrap"
            >
              {status === "loading" ? "Sending…" : "Send me the 5 workflows →"}
            </button>
          </form>

          {/* Consent note */}
          <p className="text-xs text-neutral-600 mt-3">
            You&apos;ll also receive automation tips and updates from Andrew. Unsubscribe any time.
          </p>

          {/* Error */}
          {status === "error" && (
            <p className="text-red-400 text-sm mt-3">{errorMessage}</p>
          )}
        </div>

        {/* FTC Disclosure — prominent, immediately below form per compliance requirement */}
        <p className="text-xs text-neutral-600 leading-relaxed mb-10 border-t border-neutral-900 pt-4">
          I personally use and recommend Make.com for my own automation stack. This site contains affiliate links — if you sign up for Make.com through my link, I may earn a commission at no additional cost to you. The PDF is free either way.
        </p>

        {/* Footer */}
        <div className="border-t border-neutral-900 pt-6 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-2">
          <p className="text-xs text-neutral-700">© 2026 Modern Second Income</p>
          <Link href="/privacy-policy" className="text-xs text-neutral-700 hover:text-neutral-400 transition-colors">
            Privacy Policy
          </Link>
        </div>

      </div>
    </main>
  );
}
