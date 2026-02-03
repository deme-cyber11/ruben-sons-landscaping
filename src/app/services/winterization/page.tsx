import type { Metadata } from 'next'
import Link from 'next/link'
import Image from 'next/image'

export const metadata: Metadata = {
  title: 'Winterization Services | Ruben & Sons Landscaping',
  description: 'Protect your landscape from DMV winter damage. Plant protection, dormant pruning, irrigation winterization in Washington DC, Maryland, and Virginia.',
}

const plantServices = [
  { name: 'Shrub Wrapping', price: '$30 - $75/shrub' },
  { name: 'Anti-Desiccant Spray', price: '$75 - $200/application' },
  { name: 'Winter Mulching', price: '$150 - $400 typical' },
  { name: 'Perennial Cutbacks', price: '$30 - $60/bed' },
]

const treeServices = [
  { name: 'Dormant Pruning', price: '$75 - $1,000/tree' },
  { name: 'Cabling Before Ice Season', price: '$300 - $600/tree' },
  { name: 'Dead Branch Removal', price: '$150 - $400' },
  { name: 'Young Tree Protection', price: '$25 - $75/tree' },
]

const propertyServices = [
  { name: 'Leaf Removal', price: '$80 - $500+' },
  { name: 'Gutter Cleaning', price: '$70 - $400' },
  { name: 'Irrigation Winterization', price: '$95 - $150' },
  { name: 'Drainage Inspection', price: '$75 - $150' },
]

const dmvWinterChallenges = [
  {
    title: 'Freeze-Thaw Cycles',
    description: 'Repeated freezing and thawing damages plant tissue and heaves roots.',
    icon: 'M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707',
    container: 'icon-container-teal',
  },
  {
    title: 'Ice Storms',
    description: 'Heavy ice accumulation breaks branches and damages tree structure.',
    icon: 'M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 10-9.78 2.096A4.001 4.001 0 003 15z',
    container: 'icon-container-amber',
  },
  {
    title: 'Winter Desiccation',
    description: 'Dry winter winds rob evergreens of moisture, causing browning.',
    icon: 'M14 5l7 7m0 0l-7 7m7-7H3',
    container: 'icon-container-green',
  },
]

export default function WinterizationPage() {
  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="relative h-[50vh] min-h-[400px] flex items-center">
        <Image
          src="https://images.unsplash.com/photo-1516912481808-3406841bd33c?w=1600&q=80"
          alt="Winter landscape preparation"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 hero-overlay" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-white">
          <span className="inline-block badge-teal px-4 py-2 rounded-full text-sm font-semibold mb-4 animate-fade-in-down">
            Protect Your Investment
          </span>
          <h1 className="text-4xl md:text-5xl font-bold mb-4 animate-fade-in-up">Winterization Services</h1>
          <p className="text-xl text-white/90 max-w-2xl animate-fade-in-up animation-delay-200">
            The DMV&apos;s freeze-thaw cycles cause more landscape damage than heavy snow. Prepare your property before winter strikes.
          </p>
          <div className="decorative-line mt-6 animate-fade-in animation-delay-400"></div>
        </div>
      </section>

      {/* Why Winterize */}
      <section className="py-12 bg-gradient-warm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="callout-warning">
            <div className="flex flex-col md:flex-row items-center gap-6">
              <div className="icon-container-amber w-16 h-16 rounded-xl flex-shrink-0">
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                </svg>
              </div>
              <div className="flex-1 text-center md:text-left">
                <h2 className="text-xl font-bold text-charcoal mb-2">Why Winter Prep Matters in the DMV</h2>
                <p className="text-charcoal/70">
                  Unlike regions with consistent cold, our area experiences damaging freeze-thaw cycles, periodic ice storms, and dry winter winds. Without proper preparation, your valuable plants, trees, and irrigation systems are at risk.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* DMV Winter Challenges */}
      <section className="py-16 bg-gradient-sage">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <span className="badge-green px-4 py-2 rounded-full text-sm font-semibold inline-block mb-4">
              Local Expertise
            </span>
            <h2 className="text-3xl font-bold text-charcoal mb-4">DMV Winter Challenges</h2>
            <div className="decorative-line mx-auto"></div>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {dmvWinterChallenges.map((challenge, index) => (
              <div
                key={challenge.title}
                className={`card-premium rounded-2xl p-6 text-center hover-lift animate-fade-in-up animation-delay-${(index + 1) * 100}`}
              >
                <div className={`${challenge.container} w-14 h-14 rounded-xl mx-auto mb-4`}>
                  <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={challenge.icon} />
                  </svg>
                </div>
                <h3 className="font-bold text-charcoal mb-2">{challenge.title}</h3>
                <p className="text-charcoal/70 text-sm">{challenge.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="py-20 bg-mesh-gradient">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="badge-teal px-4 py-2 rounded-full text-sm font-semibold inline-block mb-4">
              Our Services
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-charcoal mb-4">Complete Winterization Solutions</h2>
            <div className="decorative-line mx-auto"></div>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {/* Plant Winterization */}
            <div className="card-premium rounded-2xl p-8 hover-lift animate-fade-in-up animation-delay-100">
              <span className="badge-green px-3 py-1 rounded-full text-xs font-semibold inline-block mb-4">
                Plant Care
              </span>
              <div className="icon-container-green w-14 h-14 rounded-xl mb-4">
                <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
                </svg>
              </div>
              <h2 className="text-xl font-bold text-charcoal mb-6">Plant Winterization</h2>
              <ul className="space-y-4">
                {plantServices.map((service) => (
                  <li key={service.name} className="flex justify-between items-center py-2 border-b border-gray-100 last:border-0">
                    <span className="text-charcoal/80">{service.name}</span>
                    <span className="text-primary-green font-semibold text-sm">{service.price}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Tree Winter Prep */}
            <div className="card-warm rounded-2xl p-8 hover-lift animate-fade-in-up animation-delay-200">
              <span className="badge-amber px-3 py-1 rounded-full text-xs font-semibold inline-block mb-4">
                Tree Care
              </span>
              <div className="icon-container-amber w-14 h-14 rounded-xl mb-4">
                <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                </svg>
              </div>
              <h2 className="text-xl font-bold text-charcoal mb-6">Tree Winter Prep</h2>
              <ul className="space-y-4">
                {treeServices.map((service) => (
                  <li key={service.name} className="flex justify-between items-center py-2 border-b border-gray-100 last:border-0">
                    <span className="text-charcoal/80">{service.name}</span>
                    <span className="text-primary-green font-semibold text-sm">{service.price}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Property Winterization */}
            <div className="card-premium rounded-2xl p-8 hover-lift animate-fade-in-up animation-delay-300">
              <span className="badge-teal px-3 py-1 rounded-full text-xs font-semibold inline-block mb-4">
                Property Care
              </span>
              <div className="icon-container-teal w-14 h-14 rounded-xl mb-4">
                <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
                </svg>
              </div>
              <h2 className="text-xl font-bold text-charcoal mb-6">Property Winterization</h2>
              <ul className="space-y-4">
                {propertyServices.map((service) => (
                  <li key={service.name} className="flex justify-between items-center py-2 border-b border-gray-100 last:border-0">
                    <span className="text-charcoal/80">{service.name}</span>
                    <span className="text-primary-green font-semibold text-sm">{service.price}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="mt-12 text-center">
            <div className="callout-success inline-block max-w-2xl">
              <div className="flex items-center gap-4">
                <div className="icon-container-green w-12 h-12 rounded-xl flex-shrink-0">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <div className="text-left">
                  <h3 className="font-bold text-charcoal">Bundle & Save 15-25%</h3>
                  <p className="text-charcoal/70 text-sm">Combine services for comprehensive winterization packages.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Timeline Callout */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="callout-premium">
            <div className="flex items-start gap-4">
              <div className="icon-container-amber w-12 h-12 rounded-xl flex-shrink-0">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
              </div>
              <div>
                <h3 className="font-bold text-charcoal text-lg mb-2">Optimal Timing: October - November</h3>
                <p className="text-charcoal/70">
                  Schedule winterization services before the first hard freeze for maximum protection.
                  Most services should be completed by mid-November to ensure your landscape is fully prepared
                  for winter weather.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Winterization Checklist */}
      <section className="py-16 bg-gradient-sage">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <span className="badge-green px-4 py-2 rounded-full text-sm font-semibold inline-block mb-4">
              Be Prepared
            </span>
            <h2 className="text-3xl font-bold text-charcoal mb-4">Winter Preparation Checklist</h2>
            <div className="decorative-line mx-auto"></div>
          </div>
          <div className="grid md:grid-cols-2 gap-6">
            {[
              'Wrap sensitive shrubs before first freeze',
              'Apply anti-desiccant to evergreens',
              'Complete dormant pruning',
              'Install tree cabling before ice storms',
              'Winterize irrigation systems',
              'Clean gutters before snow season',
              'Add protective mulch around perennials',
              'Remove dead branches that could fall',
            ].map((item, index) => (
              <div
                key={item}
                className={`card-premium rounded-xl p-4 flex items-center gap-3 hover-lift animate-fade-in-up animation-delay-${(index + 1) * 100}`}
              >
                <span className="icon-container-green w-8 h-8 rounded-lg flex-shrink-0">
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                </span>
                <span className="text-charcoal/80">{item}</span>
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
            Act Now
          </span>
          <h2 className="text-3xl font-bold text-white mb-4">Prepare Before Winter Arrives</h2>
          <p className="text-white/90 text-lg mb-8">
            Schedule your winterization services before the first freeze. Optimal timing: October - November.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="inline-flex items-center justify-center px-8 py-4 bg-white text-primary-green font-semibold rounded-lg hover:bg-cream transition-all hover-lift"
            >
              Get Winterization Quote
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
