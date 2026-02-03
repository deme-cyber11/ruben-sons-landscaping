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
      <section className="bg-primary-green py-16 relative overflow-hidden">
        {/* Decorative elements */}
        <div className="decorative-circle absolute -top-20 -right-20 w-80 h-80 opacity-10 animate-float" />
        <div className="decorative-blob absolute -bottom-10 -left-10 w-64 h-64 opacity-10" />
        <div className="absolute inset-0 bg-pattern-dots opacity-5" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative">
          <span className="inline-block px-4 py-2 rounded-full text-sm font-medium mb-4 bg-white/20 text-white animate-fade-in-down">
            Let&apos;s Connect
          </span>
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4 animate-fade-in-up">Get Your Free Estimate</h1>
          <p className="text-xl text-white/80 max-w-2xl mx-auto animate-fade-in-up animation-delay-100">
            Fill out the form below and we&apos;ll get back to you within 24 hours.
          </p>
          <div className="decorative-line-long mx-auto mt-6 opacity-50 animate-scale-in animation-delay-200" />
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 bg-mesh-gradient relative">
        <div className="absolute inset-0 bg-pattern-grid opacity-30" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Form */}
            <div className="card-premium rounded-2xl p-8 animate-slide-in-left">
              <div className="flex items-center gap-3 mb-6">
                <div className="icon-container icon-container-green w-10 h-10">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                  </svg>
                </div>
                <h2 className="text-2xl font-bold text-charcoal">Request a Quote</h2>
              </div>
              <div className="decorative-line mb-6" />
              <QuoteForm />
            </div>

            {/* Contact Info */}
            <div className="space-y-8 animate-slide-in-right">
              {/* Emergency Banner */}
              <div className="callout-warning relative overflow-hidden">
                <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-amber/10 to-transparent rounded-bl-full" />
                <div className="flex items-center gap-3 relative">
                  <div className="icon-container icon-container-amber w-14 h-14 flex-shrink-0 animate-pulse-glow">
                    <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                    </svg>
                  </div>
                  <div>
                    <span className="badge-amber inline-block px-3 py-1 rounded-full text-xs font-semibold mb-1">URGENT</span>
                    <h3 className="font-bold text-charcoal text-lg">24/7 Emergency Service</h3>
                    <p className="text-charcoal/70">Storm damage? Fallen tree? Call us now.</p>
                  </div>
                </div>
                <a
                  href="tel:301-844-8429"
                  className="mt-4 btn-secondary inline-flex items-center gap-2 px-6 py-3 font-semibold rounded-lg"
                >
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                  Call: 301-844-8429
                </a>
              </div>

              {/* Contact Details */}
              <div className="card-premium rounded-2xl p-8">
                <div className="flex items-center gap-3 mb-6">
                  <div className="icon-container icon-container-teal w-10 h-10">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <h2 className="text-2xl font-bold text-charcoal">Contact Information</h2>
                </div>
                <div className="decorative-line-warm mb-6" />
                <ul className="space-y-6">
                  <li className="flex items-start gap-4 hover-lift p-3 rounded-lg transition-all">
                    <div className="icon-container icon-container-green w-12 h-12 flex-shrink-0">
                      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                      </svg>
                    </div>
                    <div>
                      <span className="badge-green inline-block px-2 py-1 rounded text-xs font-medium mb-1">Phone</span>
                      <a href="tel:301-844-8429" className="text-cta-green hover:underline font-semibold text-lg block">301-844-8429</a>
                    </div>
                  </li>
                  <li className="flex items-start gap-4 hover-lift p-3 rounded-lg transition-all">
                    <div className="icon-container icon-container-amber w-12 h-12 flex-shrink-0">
                      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                      </svg>
                    </div>
                    <div>
                      <span className="badge-amber inline-block px-2 py-1 rounded text-xs font-medium mb-1">Email</span>
                      <a href="mailto:perezmabel0@gmail.com" className="text-cta-green hover:underline font-semibold text-lg block">perezmabel0@gmail.com</a>
                    </div>
                  </li>
                  <li className="flex items-start gap-4 hover-lift p-3 rounded-lg transition-all">
                    <div className="icon-container icon-container-teal w-12 h-12 flex-shrink-0">
                      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                    </div>
                    <div>
                      <span className="badge-teal inline-block px-2 py-1 rounded text-xs font-medium mb-1">Hours</span>
                      <p className="text-charcoal/70 font-medium">Monday - Saturday: 7am - 7pm</p>
                      <p className="text-cta-green font-semibold">Emergency: 24/7</p>
                    </div>
                  </li>
                </ul>
              </div>

              {/* Service Area */}
              <div className="card-warm rounded-2xl p-8">
                <div className="flex items-center gap-3 mb-6">
                  <div className="icon-container icon-container-amber w-10 h-10">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                  </div>
                  <h2 className="text-2xl font-bold text-charcoal">Service Area</h2>
                </div>
                <div className="decorative-line mb-6" />
                <p className="text-charcoal/70 mb-4">
                  We proudly serve the greater DMV area including:
                </p>
                <div className="grid grid-cols-2 gap-3">
                  {[
                    'Washington DC',
                    'Montgomery County',
                    'Prince George\'s County',
                    'Frederick County',
                    'Arlington',
                    'Fairfax County',
                    'Alexandria',
                    'Loudoun County',
                  ].map((area, index) => (
                    <div
                      key={area}
                      className={`flex items-center gap-2 text-charcoal/80 p-2 rounded-lg bg-white/50 hover:bg-white transition-colors animate-fade-in-up`}
                      style={{ animationDelay: `${index * 50}ms` }}
                    >
                      <svg className="w-4 h-4 text-cta-green flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                      </svg>
                      <span className="text-sm font-medium">{area}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Trust Indicators */}
      <section className="py-16 bg-gradient-sage relative">
        <div className="absolute inset-0 bg-pattern-dots-light opacity-30" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="text-center mb-10">
            <span className="badge-green inline-block px-4 py-2 rounded-full text-sm font-medium mb-4 animate-fade-in-up">
              Why Choose Us
            </span>
            <h2 className="text-2xl font-bold text-charcoal animate-fade-in-up animation-delay-100">Trusted by Homeowners Across the DMV</h2>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="callout-success text-center animate-fade-in-up animation-delay-200">
              <div className="icon-container icon-container-green w-14 h-14 mx-auto mb-4">
                <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              </div>
              <h3 className="font-bold text-charcoal mb-2">Fully Licensed</h3>
              <p className="text-charcoal/70 text-sm">All proper licenses and certifications</p>
            </div>
            <div className="callout-warning text-center animate-fade-in-up animation-delay-300">
              <div className="icon-container icon-container-amber w-14 h-14 mx-auto mb-4">
                <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              </div>
              <h3 className="font-bold text-charcoal mb-2">Fully Insured</h3>
              <p className="text-charcoal/70 text-sm">Complete liability coverage</p>
            </div>
            <div className="callout-premium text-center animate-fade-in-up animation-delay-400">
              <div className="icon-container icon-container-teal w-14 h-14 mx-auto mb-4">
                <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <h3 className="font-bold text-charcoal mb-2">Satisfaction Guaranteed</h3>
              <p className="text-charcoal/70 text-sm">We stand behind our work</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
