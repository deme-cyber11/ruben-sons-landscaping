import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Terms of Service | Ruben & Sons Landscaping',
  description: 'Terms of service for Ruben & Sons Landscaping. Read our service agreement, policies, and conditions.',
};

export default function TermsPage() {
  return (
    <main className="pt-24 pb-16">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl font-bold text-charcoal mb-8">Terms of Service</h1>

        <div className="prose prose-lg max-w-none text-gray-600">
          <p className="text-sm text-gray-500 mb-8">Last updated: February 1, 2026</p>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-charcoal mb-4">Agreement to Terms</h2>
            <p>
              By accessing or using the services of Ruben & Sons Landscaping (&quot;Company,&quot; &quot;we,&quot; &quot;our,&quot; or &quot;us&quot;), you agree to be bound by these Terms of Service. If you do not agree to these terms, please do not use our services.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-charcoal mb-4">Services</h2>
            <p className="mb-4">
              Ruben & Sons Landscaping provides professional tree care, landscaping, land clearing, and related services in the Washington DC, Maryland, and Virginia metropolitan area. Our services include but are not limited to:
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Tree removal and emergency tree services</li>
              <li>Tree pruning and care</li>
              <li>Land clearing and site preparation</li>
              <li>Landscape design and installation</li>
              <li>Seasonal maintenance and winterization</li>
              <li>Stump grinding and removal</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-charcoal mb-4">Estimates and Pricing</h2>
            <ul className="list-disc pl-6 space-y-2">
              <li>All estimates are provided free of charge and are valid for 30 days from the date of issue.</li>
              <li>Final pricing may vary if site conditions differ from those observed during the estimate.</li>
              <li>We will notify you of any price changes before proceeding with additional work.</li>
              <li>Payment terms will be outlined in your service agreement.</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-charcoal mb-4">Scheduling and Access</h2>
            <ul className="list-disc pl-6 space-y-2">
              <li>We will make reasonable efforts to complete work within the agreed timeframe.</li>
              <li>Weather conditions and unforeseen circumstances may affect scheduling.</li>
              <li>You agree to provide safe and reasonable access to the work area.</li>
              <li>Please ensure pets are secured and vehicles are moved from work areas.</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-charcoal mb-4">Property and Liability</h2>
            <ul className="list-disc pl-6 space-y-2">
              <li>We are fully licensed and carry comprehensive liability insurance ($2M coverage).</li>
              <li>We carry workers&apos; compensation insurance for all employees.</li>
              <li>You are responsible for disclosing the location of underground utilities, septic systems, and irrigation lines.</li>
              <li>We are not responsible for damage to unmarked underground utilities.</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-charcoal mb-4">Permits and Regulations</h2>
            <p>
              Many jurisdictions require permits for tree removal and other landscaping work. We will advise you of known permit requirements, but it is ultimately the property owner&apos;s responsibility to ensure all necessary permits are obtained. Additional fees may apply for permit acquisition services.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-charcoal mb-4">Cancellation Policy</h2>
            <ul className="list-disc pl-6 space-y-2">
              <li>Cancellations made 48+ hours before scheduled work: No charge</li>
              <li>Cancellations made within 48 hours: A trip fee may apply</li>
              <li>For emergency services, different terms may apply</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-charcoal mb-4">Satisfaction Guarantee</h2>
            <p>
              We stand behind our work. If you are not satisfied with our services, please contact us within 7 days of project completion. We will work with you to address any concerns and make it right.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-charcoal mb-4">Limitation of Liability</h2>
            <p>
              To the maximum extent permitted by law, Ruben & Sons Landscaping shall not be liable for any indirect, incidental, special, consequential, or punitive damages arising out of or related to our services.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-charcoal mb-4">Contact Us</h2>
            <p>
              If you have questions about these Terms of Service, please contact us:
            </p>
            <div className="mt-4 p-4 bg-cream rounded-lg">
              <p><strong>Ruben & Sons Landscaping</strong></p>
              <p>Phone: <a href="tel:301-844-8429" className="text-cta-green hover:underline">301-844-8429</a></p>
              <p>Email: <a href="mailto:perezmabel0@gmail.com" className="text-cta-green hover:underline">perezmabel0@gmail.com</a></p>
            </div>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-charcoal mb-4">Changes to Terms</h2>
            <p>
              We reserve the right to modify these Terms of Service at any time. Changes will be effective immediately upon posting to this website.
            </p>
          </section>
        </div>
      </div>
    </main>
  );
}
