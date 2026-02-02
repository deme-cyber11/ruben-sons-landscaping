import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Privacy Policy | Ruben & Sons Landscaping',
  description: 'Privacy policy for Ruben & Sons Landscaping. Learn how we collect, use, and protect your personal information.',
};

export default function PrivacyPage() {
  return (
    <main className="pt-24 pb-16">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl font-bold text-charcoal mb-8">Privacy Policy</h1>

        <div className="prose prose-lg max-w-none text-gray-600">
          <p className="text-sm text-gray-500 mb-8">Last updated: February 1, 2026</p>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-charcoal mb-4">Introduction</h2>
            <p>
              Ruben & Sons Landscaping (&quot;we,&quot; &quot;our,&quot; or &quot;us&quot;) respects your privacy and is committed to protecting your personal information. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website or use our services.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-charcoal mb-4">Information We Collect</h2>
            <p className="mb-4">We may collect the following types of information:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li><strong>Contact Information:</strong> Name, email address, phone number, and physical address when you request a quote or contact us.</li>
              <li><strong>Service Information:</strong> Details about your property and the services you&apos;re interested in.</li>
              <li><strong>Usage Data:</strong> Information about how you interact with our website, including IP address, browser type, and pages visited.</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-charcoal mb-4">How We Use Your Information</h2>
            <p className="mb-4">We use the information we collect to:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Provide quotes and respond to your inquiries</li>
              <li>Deliver the services you request</li>
              <li>Communicate with you about your projects</li>
              <li>Improve our website and services</li>
              <li>Send promotional communications (with your consent)</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-charcoal mb-4">Information Sharing</h2>
            <p>
              We do not sell, trade, or rent your personal information to third parties. We may share your information with trusted service providers who assist us in operating our business, such as scheduling software or payment processors. These parties are obligated to keep your information confidential.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-charcoal mb-4">Data Security</h2>
            <p>
              We implement appropriate technical and organizational security measures to protect your personal information against unauthorized access, alteration, disclosure, or destruction.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-charcoal mb-4">Your Rights</h2>
            <p className="mb-4">You have the right to:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Access the personal information we hold about you</li>
              <li>Request correction of inaccurate information</li>
              <li>Request deletion of your information</li>
              <li>Opt out of marketing communications</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-charcoal mb-4">Contact Us</h2>
            <p>
              If you have questions about this Privacy Policy or our data practices, please contact us at:
            </p>
            <div className="mt-4 p-4 bg-cream rounded-lg">
              <p><strong>Ruben & Sons Landscaping</strong></p>
              <p>Phone: <a href="tel:301-844-8429" className="text-cta-green hover:underline">301-844-8429</a></p>
              <p>Email: <a href="mailto:perezmabel0@gmail.com" className="text-cta-green hover:underline">perezmabel0@gmail.com</a></p>
            </div>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-charcoal mb-4">Changes to This Policy</h2>
            <p>
              We may update this Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on this page and updating the &quot;Last updated&quot; date.
            </p>
          </section>
        </div>
      </div>
    </main>
  );
}
