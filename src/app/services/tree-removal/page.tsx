import type { Metadata } from 'next'
import Link from 'next/link'
import Image from 'next/image'

export const metadata: Metadata = {
  title: 'Tree Removal Services | Ruben & Sons Landscaping',
  description: '24/7 emergency tree removal, crane-assisted removals, hazardous tree removal, and stump grinding in Washington DC, Maryland, and Virginia. Licensed & insured.',
}

const services = [
  {
    title: 'Emergency & Storm Damage Response',
    description: '24/7 emergency response for fallen trees, storm damage, and hazardous situations. Our certified arborists handle trees on structures, power line situations, and blocked roads with urgency and expertise.',
    price: '$300 - $5,000+',
    features: ['Immediate response', 'Insurance documentation', 'Safe removal techniques'],
  },
  {
    title: 'Crane-Assisted Tree Removal',
    description: 'For large, hazardous, or difficult-to-access trees, our crane-assisted removal service offers the safest, most efficient solution. Minimizes property impact and reduces time on-site.',
    price: '$2,000 - $7,000+',
    features: ['Precision removal', 'Minimal property impact', 'Complex access solutions'],
  },
  {
    title: 'Hazardous Tree Removal',
    description: 'Specialized removal for compromised trees near structures, power lines, or confined spaces. Every hazardous removal begins with a comprehensive risk assessment.',
    price: '$800 - $3,000+',
    features: ['Risk assessment included', 'Certified professionals', 'Safety-first approach'],
  },
  {
    title: 'Stump Grinding',
    description: 'Commercial-grade stump grinding removes stumps 6-12 inches below grade. We handle single stumps or entire properties, leaving clean, level ground.',
    price: '$120 - $400+ per stump',
    features: ['Below-grade grinding', 'Debris cleanup', 'Ready for replanting'],
  },
]

export default function TreeRemovalPage() {
  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="relative h-[50vh] min-h-[400px] flex items-center">
        <Image
          src="https://images.unsplash.com/photo-1598902468171-680e426a4d58?w=1600&q=80"
          alt="Professional tree removal"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-black/50" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-white">
          <p className="text-cta-green font-semibold mb-2">24/7 Emergency Service</p>
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Tree Removal Services</h1>
          <p className="text-xl text-white/90 max-w-2xl">
            Professional tree removal for any situation. From emergency storm response to planned removals, we handle it all safely and efficiently.
          </p>
        </div>
      </section>

      {/* Services Detail */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid gap-12">
            {services.map((service, index) => (
              <div
                key={service.title}
                className={`flex flex-col lg:flex-row gap-8 items-center ${index % 2 === 1 ? 'lg:flex-row-reverse' : ''}`}
              >
                <div className="flex-1">
                  <h2 className="text-2xl font-bold text-charcoal mb-4">{service.title}</h2>
                  <p className="text-charcoal/70 mb-4">{service.description}</p>
                  <p className="text-lg font-semibold text-primary-green mb-4">
                    Starting at {service.price}
                  </p>
                  <ul className="space-y-2">
                    {service.features.map((feature) => (
                      <li key={feature} className="flex items-center gap-2 text-charcoal/80">
                        <svg className="w-5 h-5 text-cta-green flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                        </svg>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="flex-1 w-full lg:w-auto">
                  <div className="bg-cream rounded-2xl p-8 text-center">
                    <h3 className="text-xl font-semibold text-charcoal mb-2">Get a Free Quote</h3>
                    <p className="text-charcoal/70 mb-4">for {service.title.toLowerCase()}</p>
                    <Link
                      href="/contact"
                      className="inline-flex items-center justify-center px-6 py-3 bg-cta-green text-white font-semibold rounded-lg hover:bg-cta-green/90 transition-colors"
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

      {/* Why Choose Us */}
      <section className="py-20 bg-cream">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-charcoal text-center mb-12">
            Why Choose Us for Tree Removal?
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { title: 'Licensed & Insured', desc: 'Full liability coverage and workers compensation for your protection.' },
              { title: '24/7 Emergency Response', desc: 'When storms strike, we are here around the clock to help.' },
              { title: 'Free Estimates', desc: 'No obligation quotes with transparent, upfront pricing.' },
            ].map((item) => (
              <div key={item.title} className="text-center">
                <div className="w-16 h-16 bg-primary-green rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold text-charcoal mb-2">{item.title}</h3>
                <p className="text-charcoal/70">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-primary-green py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">Need a Tree Removed?</h2>
          <p className="text-white/90 text-lg mb-8">
            Get your free estimate today. Emergency service available 24/7.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="inline-flex items-center justify-center px-8 py-4 bg-white text-primary-green font-semibold rounded-lg hover:bg-cream transition-colors"
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
