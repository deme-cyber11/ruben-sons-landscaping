import type { Metadata } from 'next'
import Link from 'next/link'
import Image from 'next/image'

export const metadata: Metadata = {
  title: 'Landscaping Services | Ruben & Sons Landscaping',
  description: 'Professional mulching, planting, sod installation, and landscape design in Washington DC, Maryland, and Virginia. Transform your property today.',
}

const services = [
  {
    title: 'Mulching Services',
    description: 'Premium mulch installation for beds, trees, and property-wide coverage. Protects plant roots, suppresses weeds, and adds a polished, finished look.',
    price: '$77 - $150 per cubic yard installed',
    features: ['Weed suppression', 'Moisture retention', 'Professional finish'],
    badge: 'badge-amber',
    iconContainer: 'icon-container-amber',
  },
  {
    title: 'Ornamental Tree Planting',
    description: 'Replace removed trees or add new focal points. Our arborists select species matched to your site conditions for trees built to thrive.',
    price: '$150 - $2,000+ per tree',
    features: ['Species selection guidance', 'Proper installation', 'Establishment care'],
    badge: 'badge-green',
    iconContainer: 'icon-container-green',
  },
  {
    title: 'Shrub & Hedge Trimming',
    description: 'Professional maintenance for foundation plantings and ornamental shrubs. Keep your landscape looking manicured year-round.',
    price: '$45 - $100/hour',
    features: ['Precision shaping', 'Health promotion', 'Regular scheduling'],
    badge: 'badge-teal',
    iconContainer: 'icon-container-teal',
  },
  {
    title: 'Flower Bed Installation',
    description: 'Custom designed beds with seasonal color and year-round interest. We prepare soil and select plants suited to our climate.',
    price: '$10 - $30 per square foot',
    features: ['Custom design', 'Soil preparation', 'Plant selection'],
    badge: 'badge-amber',
    iconContainer: 'icon-container-amber',
  },
  {
    title: 'Sod Installation',
    description: 'Instant lawn transformation with premium cool-season grass varieties suited to our Mid-Atlantic climate. Perfect for new construction or renovation.',
    price: '$1.40 - $2.00 per square foot',
    features: ['Instant results', 'Soil grading', 'Variety selection'],
    badge: 'badge-green',
    iconContainer: 'icon-container-green',
  },
]

const transformations = [
  {
    title: 'Curb Appeal',
    description: 'First impressions matter. Transform your front yard.',
    icon: 'M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6',
    container: 'icon-container-green',
  },
  {
    title: 'Outdoor Living',
    description: 'Create spaces for relaxation and entertainment.',
    icon: 'M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z',
    container: 'icon-container-amber',
  },
  {
    title: 'Property Value',
    description: 'Quality landscaping increases home value 5-15%.',
    icon: 'M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z',
    container: 'icon-container-teal',
  },
]

export default function LandscapingPage() {
  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="relative h-[50vh] min-h-[400px] flex items-center">
        <Image
          src="https://images.unsplash.com/photo-1585320806297-9794b3e4eeae?w=1600&q=80"
          alt="Professional landscaping"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 hero-overlay" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-white">
          <span className="inline-block badge-green px-4 py-2 rounded-full text-sm font-semibold mb-4 animate-fade-in-down">
            Transform Your Property
          </span>
          <h1 className="text-4xl md:text-5xl font-bold mb-4 animate-fade-in-up">Landscaping Services</h1>
          <p className="text-xl text-white/90 max-w-2xl animate-fade-in-up animation-delay-200">
            From mulching to complete landscape installations, we create outdoor spaces you will love.
          </p>
          <div className="decorative-line mt-6 animate-fade-in animation-delay-400"></div>
        </div>
      </section>

      {/* Transformation Benefits */}
      <section className="py-12 bg-gradient-sage">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-8">
            {transformations.map((item, index) => (
              <div
                key={item.title}
                className={`flex items-center gap-4 animate-fade-in-up animation-delay-${(index + 1) * 100}`}
              >
                <div className={`${item.container} w-14 h-14 rounded-xl flex-shrink-0`}>
                  <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={item.icon} />
                  </svg>
                </div>
                <div>
                  <h3 className="font-bold text-charcoal">{item.title}</h3>
                  <p className="text-charcoal/70 text-sm">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Spring Special Callout */}
      <section className="py-8 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="callout-success">
            <div className="flex flex-col md:flex-row items-center gap-4">
              <div className="icon-container-green w-14 h-14 rounded-xl flex-shrink-0">
                <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
                </svg>
              </div>
              <div className="flex-1 text-center md:text-left">
                <h3 className="font-bold text-charcoal text-lg">Spring Planting Season is Here</h3>
                <p className="text-charcoal/70">Book your landscaping project now for optimal planting conditions.</p>
              </div>
              <Link
                href="/contact"
                className="btn-primary px-6 py-3 rounded-lg font-semibold whitespace-nowrap"
              >
                Schedule Consultation
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 bg-mesh-gradient">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="badge-teal px-4 py-2 rounded-full text-sm font-semibold inline-block mb-4">
              Our Services
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-charcoal mb-4">Complete Landscaping Solutions</h2>
            <div className="decorative-line mx-auto"></div>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div
                key={service.title}
                className={`card-premium rounded-2xl p-8 hover-lift animate-fade-in-up animation-delay-${((index % 3) + 1) * 100}`}
              >
                <span className={`${service.badge} px-3 py-1 rounded-full text-xs font-semibold inline-block mb-4`}>
                  Popular
                </span>
                <div className={`${service.iconContainer} w-14 h-14 rounded-xl mb-4`}>
                  <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
                  </svg>
                </div>
                <h2 className="text-xl font-bold text-charcoal mb-3">{service.title}</h2>
                <p className="text-charcoal/70 mb-4 text-sm">{service.description}</p>
                <p className="text-lg font-semibold text-primary-green mb-4">{service.price}</p>
                <ul className="space-y-2 mb-6">
                  {service.features.map((feature) => (
                    <li key={feature} className="flex items-center gap-2 text-charcoal/80 text-sm">
                      <span className={`${service.iconContainer} w-5 h-5 rounded flex-shrink-0`}>
                        <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                        </svg>
                      </span>
                      {feature}
                    </li>
                  ))}
                </ul>
                <Link
                  href="/contact"
                  className="inline-flex items-center text-cta-green font-semibold hover:gap-2 transition-all group"
                >
                  Get a Quote
                  <svg className="w-5 h-5 ml-1 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Professional Landscaping */}
      <section className="py-16 bg-gradient-warm">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <span className="badge-amber px-4 py-2 rounded-full text-sm font-semibold inline-block mb-4">
              Expert Knowledge
            </span>
            <h2 className="text-3xl font-bold text-charcoal mb-4">Why Choose Professional Landscaping?</h2>
            <div className="decorative-line-warm mx-auto"></div>
          </div>
          <div className="grid md:grid-cols-2 gap-6">
            {[
              { title: 'Proper Plant Selection', desc: 'Right plants for DMV climate and your soil' },
              { title: 'Professional Installation', desc: 'Correct techniques for long-term success' },
              { title: 'Design Expertise', desc: 'Balanced compositions that work together' },
              { title: 'Time & Money Savings', desc: 'Avoid costly mistakes and replacements' },
            ].map((item, index) => (
              <div
                key={item.title}
                className={`card-premium rounded-xl p-6 hover-lift animate-fade-in-up animation-delay-${(index + 1) * 100}`}
              >
                <div className="flex items-start gap-4">
                  <span className="icon-container-amber w-10 h-10 rounded-lg flex-shrink-0">
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                  </span>
                  <div>
                    <h3 className="font-bold text-charcoal mb-1">{item.title}</h3>
                    <p className="text-charcoal/70 text-sm">{item.desc}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Premium Callout */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="callout-premium">
            <div className="flex items-start gap-4">
              <div className="icon-container-teal w-12 h-12 rounded-xl flex-shrink-0">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                </svg>
              </div>
              <div>
                <h3 className="font-bold text-charcoal text-lg mb-2">Free Design Consultation</h3>
                <p className="text-charcoal/70">
                  Not sure where to start? Our landscape designers offer complimentary consultations to help you
                  visualize possibilities and plan your project within budget.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Seasonal Services */}
      <section className="py-16 bg-gradient-sage">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <span className="badge-green px-4 py-2 rounded-full text-sm font-semibold inline-block mb-4">
              Year-Round Care
            </span>
            <h2 className="text-3xl font-bold text-charcoal mb-4">Seasonal Services Available</h2>
            <div className="decorative-line mx-auto"></div>
          </div>
          <div className="grid md:grid-cols-4 gap-6">
            {[
              { season: 'Spring', service: 'Bed cleanup, mulching, planting', container: 'icon-container-green' },
              { season: 'Summer', service: 'Trimming, watering, maintenance', container: 'icon-container-amber' },
              { season: 'Fall', service: 'Leaf removal, bed prep, planting', container: 'icon-container-amber' },
              { season: 'Winter', service: 'Pruning, planning, hardscaping', container: 'icon-container-teal' },
            ].map((item, index) => (
              <div
                key={item.season}
                className={`card-premium rounded-xl p-6 text-center hover-lift animate-fade-in-up animation-delay-${(index + 1) * 100}`}
              >
                <div className={`${item.container} w-12 h-12 rounded-xl mx-auto mb-4`}>
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                  </svg>
                </div>
                <h3 className="font-bold text-charcoal mb-2">{item.season}</h3>
                <p className="text-charcoal/70 text-sm">{item.service}</p>
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
            Start Your Project
          </span>
          <h2 className="text-3xl font-bold text-white mb-4">Ready to Transform Your Landscape?</h2>
          <p className="text-white/90 text-lg mb-8">
            Get your free design consultation and estimate today.
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
