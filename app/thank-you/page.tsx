import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "You're in — Modern Second Income",
  description: "The PDF is on its way to your inbox.",
  robots: { index: false },
};

export default function ThankYou() {
  return (
    <main className="min-h-screen flex flex-col items-center justify-start px-6 py-16">
      <div className="w-full max-w-2xl">

        {/* Confirmation */}
        <h1 className="text-3xl sm:text-4xl font-bold leading-tight mb-3 text-white">
          You&apos;re in. The PDF is on its way to your inbox.
        </h1>
        <p className="text-neutral-400 text-base mb-12">
          Check your spam folder if it doesn&apos;t arrive in 5 minutes.
        </p>

        {/* Story */}
        <div className="text-neutral-300 space-y-5 text-base leading-relaxed mb-12">
          <p className="text-neutral-400 text-sm font-medium uppercase tracking-widest">While you wait — a quick story about why I built this.</p>

          <p>
            My name is Andrew. I&apos;m an IT Director. Or I was, until April 1.
          </p>
          <p>
            That&apos;s not a typo. I set a date. My wife knows. My boss doesn&apos;t yet.
          </p>
          <p>
            For 15 years I&apos;ve managed IT systems, infrastructure, and teams for a company that&apos;s been good to me. Stable income. Good benefits. A ceiling I can see from my desk.
          </p>
          <p>
            Three years ago I started building a consulting practice on the side. AI workflow automation for small businesses — helping them set up the kind of systems I&apos;ve been running at the corporate level for over a decade. I was good at it. I had real clients. I had a real problem.
          </p>
          <p>
            I had no time.
          </p>
          <p>
            Not because I was lazy. Because running a side business manually — following up on leads, onboarding clients, chasing invoices, distributing content — is a second job on top of the job I was already doing. I was doing the work of running a business in the margins of my evenings, and I was burning through them.
          </p>
          <p>
            The irony: I spend my days building automation systems for other people. My side business ran on duct tape and willpower.
          </p>
          <p>
            The fix was obvious once I saw it. I built an automation stack for my own business using the same tool I use with clients — Make.com. Five workflows. First one took me 30 minutes to set up. I got a few of my evenings back. Then a few more. The business started moving.
          </p>
          <p>I kept building.</p>
        </div>

        {/* Why Make.com */}
        <div className="border border-neutral-800 rounded-lg p-6 mb-10 space-y-4">
          <h2 className="text-sm font-semibold text-neutral-400 uppercase tracking-widest">Why Make.com</h2>
          <div className="text-neutral-300 space-y-4 text-sm leading-relaxed">
            <p>
              There are a handful of automation tools that work. I&apos;ve used a few of them.
            </p>
            <p>
              Make.com is where I landed and stayed — and I want to be straight with you about why, and also why I&apos;m recommending it.
            </p>
            <p>
              <strong className="text-white">Why I use it:</strong> The visual canvas. It shows you the workflow — every step, every connection, every branch — as a diagram, not a list. For the way I think (systems, architecture, data flow), that matters. It clicks in a way that Zapier&apos;s trigger/action interface doesn&apos;t. And the free plan is actually functional — you can build and run real automations without paying anything.
            </p>
            <p>
              <strong className="text-white">Why I&apos;m recommending it:</strong> I&apos;m an affiliate. If you sign up for Make.com through my link and upgrade to a paid plan, I earn a commission. I want you to know that upfront, not discover it in the fine print. It doesn&apos;t change the price you pay — Make.com&apos;s pricing is the same either way. But you should know the relationship.
            </p>
            <p>
              I&apos;d recommend it regardless of the commission structure. It&apos;s the tool I&apos;m building my consulting practice on. But the disclosure matters, so there it is.
            </p>
            <p>
              <strong className="text-white">The free plan:</strong> Make.com has a free tier that&apos;s enough to build all five automations in this PDF. You don&apos;t need to spend anything to get started.
            </p>
          </div>
        </div>

        {/* CTA */}
        <div className="mb-4">
          <a
            href="https://www.make.com/en/register?pc=mod2income"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-white text-black font-semibold px-8 py-4 rounded-md text-sm hover:bg-neutral-200 transition-colors"
          >
            Start with Make.com free →
          </a>
        </div>

        {/* FTC Disclosure — near CTA per compliance requirement */}
        <p className="text-xs text-neutral-600 leading-relaxed mb-8">
          Affiliate disclosure: This page contains an affiliate link. If you sign up for Make.com through my link, I may earn a commission at no additional cost to you. I personally use Make.com in my own consulting practice and side business and only recommend tools I use myself.
        </p>

        {/* Closing */}
        <p className="text-neutral-400 text-sm mb-12">
          The PDF has everything you need to build the first automation this weekend.
          <br />
          If you want to go further — and eventually see how I&apos;m building my own exit plan step by step — you&apos;ll hear from me over the next few days.
        </p>
        <p className="text-neutral-300 text-sm font-medium mb-12">— Andrew</p>

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
