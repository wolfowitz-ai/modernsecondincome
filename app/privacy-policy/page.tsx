import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy — Modern Second Income",
  description: "Privacy policy for modernsecondincome.com",
};

export default function PrivacyPolicy() {
  return (
    <main className="min-h-screen flex flex-col items-center justify-start px-6 py-16">
      <div className="w-full max-w-2xl">

        <h1 className="text-2xl font-bold text-white mb-2">Privacy Policy</h1>
        <p className="text-xs text-neutral-600 mb-10">
          Last updated: March 17, 2026 · modernsecondincome.com
        </p>

        <div className="space-y-8 text-sm text-neutral-300 leading-relaxed">

          <section>
            <h2 className="text-base font-semibold text-white mb-3">Overview</h2>
            <p>
              Modern Second Income ("we," "us," or "our") operates modernsecondincome.com. This policy explains how we collect, use, and protect information when you visit our website or subscribe to our email list. We take your privacy seriously and do not sell your personal information.
            </p>
          </section>

          <section>
            <h2 className="text-base font-semibold text-white mb-3">Information We Collect</h2>
            <p className="mb-3"><strong className="text-neutral-200">Information you provide directly:</strong></p>
            <ul className="list-disc pl-5 space-y-1 text-neutral-400">
              <li>Email address (when you subscribe to receive the free PDF and email updates)</li>
              <li>First name, if you choose to provide it</li>
            </ul>
            <p className="mt-4 mb-3"><strong className="text-neutral-200">Information collected automatically:</strong></p>
            <ul className="list-disc pl-5 space-y-1 text-neutral-400">
              <li>IP address and approximate geographic location</li>
              <li>Browser type and device information</li>
              <li>Pages visited and time spent on the site</li>
              <li>Referring URL (how you arrived at this site)</li>
              <li>UTM parameters (if you followed a tracked link)</li>
            </ul>
          </section>

          <section>
            <h2 className="text-base font-semibold text-white mb-3">How We Use Your Information</h2>
            <p className="mb-3">We use the information we collect to:</p>
            <ul className="list-disc pl-5 space-y-1 text-neutral-400">
              <li>Deliver the free PDF and any other content you requested</li>
              <li>Send you email updates about automation strategies, Make.com workflows, and Andrew&apos;s journey building a side business — as you consented to when subscribing</li>
              <li>Occasionally recommend tools and products we use ourselves (some of which may be affiliate links — see disclosure below)</li>
              <li>Improve the website based on usage data</li>
              <li>Comply with legal obligations</li>
            </ul>
            <p className="mt-4 text-neutral-400">
              We do not send unsolicited email. You will only receive email if you opted in via our subscription form. You can unsubscribe at any time using the link in any email we send.
            </p>
          </section>

          <section>
            <h2 className="text-base font-semibold text-white mb-3">Affiliate Disclosure</h2>
            <p className="text-neutral-400">
              This website contains affiliate links, including links to Make.com. If you sign up for Make.com through our link and upgrade to a paid plan, we may earn a commission at no additional cost to you. We only recommend tools we personally use. Affiliate relationships do not influence our editorial content.
            </p>
          </section>

          <section>
            <h2 className="text-base font-semibold text-white mb-3">Third-Party Services</h2>
            <p className="mb-3 text-neutral-400">We use the following third-party services to operate this website:</p>
            <ul className="list-disc pl-5 space-y-2 text-neutral-400">
              <li>
                <strong className="text-neutral-200">ActiveCampaign</strong> — our email marketing provider. When you subscribe, your email address is stored in ActiveCampaign and used to deliver emails. ActiveCampaign&apos;s privacy policy is available at activecampaign.com/privacy-policy.
              </li>
              <li>
                <strong className="text-neutral-200">Vercel</strong> — our website hosting provider. Vercel processes web request data including IP addresses. Vercel&apos;s privacy policy is available at vercel.com/legal/privacy-policy.
              </li>
              <li>
                <strong className="text-neutral-200">Make.com</strong> — the automation platform we recommend via affiliate link. If you follow our affiliate link to Make.com, Make.com&apos;s own privacy policy governs data collected on their platform.
              </li>
            </ul>
            <p className="mt-4 text-neutral-400">
              We may add additional analytics or advertising tools in the future and will update this policy accordingly.
            </p>
          </section>

          <section>
            <h2 className="text-base font-semibold text-white mb-3">Cookies</h2>
            <p className="text-neutral-400">
              This website uses minimal cookies. Our hosting provider (Vercel) may set technical cookies necessary to serve the website. If we add analytics or advertising tracking tools in the future, we will update this section and, where required, obtain your consent before setting non-essential cookies.
            </p>
          </section>

          <section>
            <h2 className="text-base font-semibold text-white mb-3">Data Retention</h2>
            <p className="text-neutral-400">
              We retain your email address and subscription data for as long as you remain subscribed to our list. If you unsubscribe, we will remove you from active marketing communications. You may also request complete deletion of your data by contacting us at the address below.
            </p>
          </section>

          <section>
            <h2 className="text-base font-semibold text-white mb-3">Your Rights</h2>
            <p className="mb-3 text-neutral-400">Depending on your location, you may have the right to:</p>
            <ul className="list-disc pl-5 space-y-1 text-neutral-400">
              <li>Access the personal data we hold about you</li>
              <li>Request correction of inaccurate data</li>
              <li>Request deletion of your data</li>
              <li>Opt out of marketing communications at any time (unsubscribe link in every email)</li>
              <li>Lodge a complaint with a data protection authority (EU/UK residents)</li>
            </ul>
            <p className="mt-4 text-neutral-400">
              To exercise any of these rights, contact us at the email address below.
            </p>
          </section>

          <section>
            <h2 className="text-base font-semibold text-white mb-3">Children&apos;s Privacy</h2>
            <p className="text-neutral-400">
              This website is not directed at children under 13. We do not knowingly collect personal information from children. If you believe a child has submitted information through our site, contact us and we will delete it promptly.
            </p>
          </section>

          <section>
            <h2 className="text-base font-semibold text-white mb-3">Changes to This Policy</h2>
            <p className="text-neutral-400">
              We may update this privacy policy from time to time. Changes will be posted on this page with an updated &quot;last updated&quot; date. Continued use of the site after changes constitutes acceptance of the updated policy.
            </p>
          </section>

          <section>
            <h2 className="text-base font-semibold text-white mb-3">Contact</h2>
            <p className="text-neutral-400">
              Questions about this privacy policy or requests to exercise your data rights:
            </p>
            <p className="mt-2 text-neutral-400">
              Email: <a href="mailto:info@modernsecondincome.com" className="text-neutral-200 hover:text-white transition-colors">info@modernsecondincome.com</a>
              <br />
              Website: modernsecondincome.com
            </p>
          </section>

        </div>

        {/* Footer */}
        <div className="border-t border-neutral-900 mt-12 pt-6 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-2">
          <p className="text-xs text-neutral-700">© 2026 Modern Second Income</p>
          <Link href="/" className="text-xs text-neutral-700 hover:text-neutral-400 transition-colors">
            ← Back to home
          </Link>
        </div>

      </div>
    </main>
  );
}
