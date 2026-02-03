import type { Metadata } from 'next'
import Link from 'next/link'
import Image from 'next/image'

export const metadata: Metadata = {
  title: 'Land Clearing Services | Ruben & Sons Landscaping',
  description: 'Professional land clearing for development and lot preparation in Washington DC, Maryland, and Virginia. Residential and commercial. Free estimates.',
}

const services = [
  {
    title: 'Development Clearing',
    description: 'Complete site preparation for residential, commercial, or agricultural development. We work with builders and developers throughout the DMV region.',
    price: '$1,500 - $6,000+ per acre',
    features: ['Commercial projects', 'Residential lots', 'Agricultural land'],
    badge: 'badge-amber',
    iconContainer: 'icon-container-amber',
  },
  {
    title: 'Lot Clearing',
    description: 'Remove brush, trees, and debris to prepare your property for construction or landscaping. Includes stump grinding with grading available.',
    price: '$800 - $3,500 per acre',
    features: ['Stump grinding included', 'Debris hauling', 'Grading available'],
    badge: 'badge-green',
    iconContainer: 'icon-container-green',
  },
]

const processSteps = [
  {
    step: '01',
    title: 'Site Assessment',
    description: 'We evaluate terrain, vegetation, and access points.',
    icon: 'M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7',
    container: 'icon-container-green',
  },
  {
    step: '02',
    title: 'Clear Quote',
    description: 'Detailed pricing with no hidden costs.',
    icon: 'M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z',
    container: 'icon-container-amber',
  },
  {
    step: '03',
    title: 'Professional Clearing',
    description: 'Efficient work with proper equipment.',
    icon: 'M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4',
    container: 'icon-container-teal',
  },
  {
    step: '04',
    title: 'Site Ready',
    description: 'Clean, level ground ready for development.',
    icon: 'M5 13l4 4L19 7',
    container: 'icon-container-green',
  },
]

const projectTypes = [
  {
    title: 'Residential Lots',
    description: 'Preparing home sites for new construction',
    icon: 'M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6',
  },
  {
    title: 'Commercial Sites',
    description: 'Large-scale clearing for business development',
    icon: 'M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4',
  },
  {
    title: 'Agricultural Land',
    description: 'Converting overgrown areas for farming',
    icon: 'M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064',
  },
  {
    title: 'Right-of-Way Clearing',
    description: 'Utility and access road preparation',
    icon: 'M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7',
  },
]

export default function LandClearingPage() {
  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="relative h-[50vh] min-h-[400px] flex items-center">
        <Image
          src="https://images.unsplash.com/photo-1500382017468-9049fed747ef?w=1600&q=80"
          alt="Land clearing services"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 hero-overlay-warm" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-white">
          <span className="inline-block badge-amber px-4 py-2 rounded-full text-sm font-semibold mb-4 animate-fade-in-down">
            Site Preparation Experts
          </span>
          <h1 className="text-4xl md:text-5xl font-bold mb-4 animate-fade-in-up">Land Clearing</h1>
          <p className="text-xl text-white/90 max-w-2xl animate-fade-in-up animation-delay-200">
            Professional land clearing for development projects of any size throughout the DMV area.
          </p>
          <div className="decorative-line-warm mt-6 animate-fade-in animation-delay-400"></div>
        </div>
      </section>

      {/* Project Types */}
      <section className="py-12 bg-gradient-warm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-6">
            {projectTypes.map((type, index) => (
              <div
                key={type.title}
                className={`card-premium rounded-xl p-6 text-center hover-lift animate-fade-in-up animation-delay-${(index + 1) * 100}`}
              >
                <div className="icon-container-amber w-14 h-14 rounded-xl mx-auto mb-4">
                  <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={type.icon} />
                  </svg>
                </div>
                <h3 className="font-bold text-charcoal mb-1">{type.title}</h3>
                <p className="text-charcoal/70 text-sm">{type.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Detail */}
      <section className="py-20 bg-mesh-gradient">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="badge-teal px-4 py-2 rounded-full text-sm font-semibold inline-block mb-4">
              Our Services
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-charcoal mb-4">Complete Land Clearing Solutions</h2>
            <div className="decorative-line mx-auto"></div>
          </div>
          <div className="grid gap-12">
            {services.map((service, index) => (
              <div
                key={service.title}
                className={`card-premium rounded-2xl p-8 flex flex-col lg:flex-row gap-8 items-center ${index % 2 === 1 ? 'lg:flex-row-reverse' : ''} hover-lift`}
              >
                <div className="flex-1">
                  <span className={`${service.badge} px-3 py-1 rounded-full text-xs font-semibold inline-block mb-4`}>
                    {service.title.includes('Development') ? 'Commercial & Residential' : 'All Property Types'}
                  </span>
                  <h2 className="text-2xl font-bold text-charcoal mb-4">{service.title}</h2>
                  <p className="text-charcoal/70 mb-4">{service.description}</p>
                  <p className="text-lg font-semibold text-primary-green mb-4">{service.price}</p>
                  <ul className="space-y-2">
                    {service.features.map((feature) => (
                      <li key={feature} className="flex items-center gap-2 text-charcoal/80">
                        <span className={`${service.iconContainer} w-6 h-6 rounded-lg flex-shrink-0`}>
                          <svg className="w-3.5 h-3.5" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                          </svg>
                        </span>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="flex-1 w-full lg:w-auto">
                  <div className="card-warm rounded-2xl p-8 text-center">
                    <div className={`${service.iconContainer} w-16 h-16 rounded-2xl mx-auto mb-4`}>
                      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                      </svg>
                    </div>
                    <h3 className="text-xl font-semibold text-charcoal mb-2">Get a Quote</h3>
                    <p className="text-charcoal/70 mb-4">for your clearing project</p>
                    <Link
                      href="/contact"
                      className="btn-primary inline-flex items-center justify-center px-6 py-3 rounded-lg font-semibold"
                    >
                      Request Estimate
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Process */}
      <section className="py-20 bg-gradient-sage">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="badge-green px-4 py-2 rounded-full text-sm font-semibold inline-block mb-4">
              Our Process
            </span>
            <h2 className="text-3xl font-bold text-charcoal mb-4">How We Work</h2>
            <div className="decorative-line mx-auto"></div>
          </div>
          <div className="grid md:grid-cols-4 gap-8">
            {processSteps.map((step, index) => (
              <div
                key={step.title}
                className={`relative card-premium rounded-2xl p-6 text-center hover-lift animate-fade-in-up animation-delay-${(index + 1) * 100}`}
              >
                <span className="absolute -top-3 -left-3 bg-primary-green text-white w-10 h-10 rounded-full flex items-center justify-center font-bold text-sm">
                  {step.step}
                </span>
                <div className={`${step.container} w-14 h-14 rounded-xl mx-auto mb-4`}>
                  <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={step.icon} />
                  </svg>
                </div>
                <h3 className="font-bold text-charcoal mb-2">{step.title}</h3>
                <p className="text-charcoal/70 text-sm">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Callout Box */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="callout-premium">
            <div className="flex items-start gap-4">
              <div className="icon-container-amber w-12 h-12 rounded-xl flex-shrink-0">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              </div>
              <div>
                <h3 className="font-bold text-charcoal text-lg mb-2">Fully Licensed & Insured</h3>
                <p className="text-charcoal/70">
                  We carry full liability insurance and workers compensation coverage.
                  All necessary permits are obtained for your project, ensuring complete compliance with local regulations.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* What We Handle */}
      <section className="py-16 bg-gradient-warm">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <span className="badge-teal px-4 py-2 rounded-full text-sm font-semibold inline-block mb-4">
              Comprehensive Service
            </span>
            <h2 className="text-3xl font-bold text-charcoal mb-4">What We Clear</h2>
            <div className="decorative-line-warm mx-auto"></div>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              { item: 'Trees & Stumps', icon: '🌳' },
              { item: 'Brush & Undergrowth', icon: '🌿' },
              { item: 'Rocks & Debris', icon: '🪨' },
              { item: 'Old Structures', icon: '🏚️' },
              { item: 'Invasive Species', icon: '🌱' },
              { item: 'Overgrown Areas', icon: '🌾' },
            ].map((item, index) => (
              <div
                key={item.item}
                className={`card-premium rounded-xl p-4 flex items-center gap-3 hover-lift animate-fade-in-up animation-delay-${(index + 1) * 100}`}
              >
                <span className="text-2xl">{item.icon}</span>
                <span className="font-semibold text-charcoal">{item.item}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-primary-green py-16 relative overflow-hidden">
        <div className="absolute inset-0 bg-pattern-dots opacity-10"></div>
        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <span className="inline-block glass px-4 py-2 rounded-full text-sm font-semibold text-white mb-4">
            Get Started
          </span>
          <h2 className="text-3xl font-bold text-white mb-4">Ready to Clear Your Land?</h2>
          <p className="text-white/90 text-lg mb-8">
            Contact us for a free site assessment and estimate.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="inline-flex items-center justify-center px-8 py-4 bg-white text-primary-green font-semibold rounded-lg hover:bg-cream transition-all hover-lift"
            >
              Get Free Estimate
            </Link>
            <a
              href="tel:301-844-8429"
              className="inline-flex items-center justify-center px-8 py-4 border-2 border-white text-white font-semibold rounded-lg hover:bg-white/10 transition-colors"
            >
              <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
              Call: 301-844-8429
            </a>
          </div>
        </div>
      </section>
    </div>
  )
}
