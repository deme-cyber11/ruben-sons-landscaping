import type { Metadata } from 'next'
import { QuoteForm } from '@/components/ui'

export const metadata: Metadata = {
  title: 'Contact Us | Ruben & Sons Landscaping',
  description: 'Get a free estimate for tree removal, landscaping, and more. Serving Washington DC, Maryland, and Virginia. Call 301-844-8429 or submit our online form.',
}

export default function ContactPage() {
  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="bg-primary-green py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">Get Your Free Estimate</h1>
          <p className="text-xl text-white/80 max-w-2xl mx-auto">
            Fill out the form below and we&apos;ll get back to you within 24 hours.
          </p>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Form */}
            <div className="bg-cream rounded-2xl p-8">
              <h2 className="text-2xl font-bold text-charcoal mb-6">Request a Quote</h2>
              <QuoteForm />
            </div>

            {/* Contact Info */}
            <div className="space-y-8">
              {/* Emergency Banner */}
              <div className="bg-red-50 border-l-4 border-red-500 p-6 rounded-r-lg">
                <div className="flex items-center gap-3">
                  <svg className="w-8 h-8 text-red-500 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                  </svg>
                  <div>
                    <h3 className="font-bold text-red-800">24/7 Emergency Service</h3>
                    <p className="text-red-700">Storm damage? Fallen tree? Call us now.</p>
                  </div>
                </div>
                <a
                  href="tel:301-844-8429"
                  className="mt-4 inline-flex items-center gap-2 px-6 py-3 bg-red-500 text-white font-semibold rounded-lg hover:bg-red-600 transition-colors"
                >
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                  Call: 301-844-8429
                </a>
              </div>

              {/* Contact Details */}
              <div className="bg-cream rounded-2xl p-8">
                <h2 className="text-2xl font-bold text-charcoal mb-6">Contact Information</h2>
                <ul className="space-y-6">
                  <li className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-primary-green rounded-full flex items-center justify-center flex-shrink-0">
                      <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                      </svg>
                    </div>
                    <div>
                      <h3 className="font-semibold text-charcoal">Phone</h3>
                      <a href="tel:301-844-8429" className="text-cta-green hover:underline">301-844-8429</a>
                    </div>
                  </li>
                  <li className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-primary-green rounded-full flex items-center justify-center flex-shrink-0">
                      <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                      </svg>
                    </div>
                    <div>
                      <h3 className="font-semibold text-charcoal">Email</h3>
                      <a href="mailto:perezmabel0@gmail.com" className="text-cta-green hover:underline">perezmabel0@gmail.com</a>
                    </div>
                  </li>
                  <li className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-primary-green rounded-full flex items-center justify-center flex-shrink-0">
                      <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                    </div>
                    <div>
                      <h3 className="font-semibold text-charcoal">Hours</h3>
                      <p className="text-charcoal/70">Monday - Saturday: 7am - 7pm</p>
                      <p className="text-cta-green font-medium">Emergency: 24/7</p>
                    </div>
                  </li>
                </ul>
              </div>

              {/* Service Area */}
              <div className="bg-cream rounded-2xl p-8">
                <h2 className="text-2xl font-bold text-charcoal mb-6">Service Area</h2>
                <p className="text-charcoal/70 mb-4">
                  We proudly serve the greater DMV area including:
                </p>
                <div className="grid grid-cols-2 gap-2">
                  {[
                    'Washington DC',
                    'Montgomery County',
                    'Prince George\'s County',
                    'Frederick County',
                    'Arlington',
                    'Fairfax County',
                    'Alexandria',
                    'Loudoun County',
                  ].map((area) => (
                    <div key={area} className="flex items-center gap-2 text-charcoal/80">
                      <svg className="w-4 h-4 text-cta-green flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                      </svg>
                      <span className="text-sm">{area}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
