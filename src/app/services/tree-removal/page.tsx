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
    badge: 'badge-amber',
    iconContainer: 'icon-container-amber',
  },
  {
    title: 'Crane-Assisted Tree Removal',
    description: 'For large, hazardous, or difficult-to-access trees, our crane-assisted removal service offers the safest, most efficient solution. Minimizes property impact and reduces time on-site.',
    price: '$2,000 - $7,000+',
    features: ['Precision removal', 'Minimal property impact', 'Complex access solutions'],
    badge: 'badge-teal',
    iconContainer: 'icon-container-teal',
  },
  {
    title: 'Hazardous Tree Removal',
    description: 'Specialized removal for compromised trees near structures, power lines, or confined spaces. Every hazardous removal begins with a comprehensive risk assessment.',
    price: '$800 - $3,000+',
    features: ['Risk assessment included', 'Certified professionals', 'Safety-first approach'],
    badge: 'badge-green',
    iconContainer: 'icon-container-green',
  },
  {
    title: 'Stump Grinding',
    description: 'Commercial-grade stump grinding removes stumps 6-12 inches below grade. We handle single stumps or entire properties, leaving clean, level ground.',
    price: '$120 - $400+ per stump',
    features: ['Below-grade grinding', 'Debris cleanup', 'Ready for replanting'],
    badge: 'badge-amber',
    iconContainer: 'icon-container-amber',
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
        <div className="absolute inset-0 hero-overlay-warm" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-white">
          <span className="inline-block badge-amber px-4 py-2 rounded-full text-sm font-semibold mb-4 animate-fade-in-down">
            24/7 Emergency Service Available
          </span>
          <h1 className="text-4xl md:text-5xl font-bold mb-4 animate-fade-in-up">Tree Removal Services</h1>
          <p className="text-xl text-white/90 max-w-2xl animate-fade-in-up animation-delay-200">
            Professional tree removal for any situation. From emergency storm response to planned removals, we handle it all safely and efficiently.
          </p>
          <div className="decorative-line-warm mt-6 animate-fade-in animation-delay-400"></div>
        </div>
      </section>

      {/* Emergency Callout */}
      <section className="py-8 bg-gradient-warm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="callout-warning flex flex-col md:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-4">
              <div className="icon-container-amber w-14 h-14 rounded-xl flex-shrink-0">
                <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                </svg>
              </div>
              <div>
                <h3 className="font-bold text-charcoal">Storm Damage? We are Available 24/7</h3>
                <p className="text-charcoal/70">Emergency crews ready to respond immediately to hazardous situations.</p>
              </div>
            </div>
            <a
              href="tel:301-844-8429"
              className="btn-secondary px-6 py-3 rounded-lg font-semibold inline-flex items-center gap-2 whitespace-nowrap"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
              Call Now: 301-844-8429
            </a>
          </div>
        </div>
      </section>

      {/* Services Detail */}
      <section className="py-20 bg-mesh-gradient">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="badge-green px-4 py-2 rounded-full text-sm font-semibold inline-block mb-4">
              Our Services
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-charcoal mb-4">Complete Tree Removal Solutions</h2>
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
                    {service.title.split(' ')[0]}
                  </span>
                  <h2 className="text-2xl font-bold text-charcoal mb-4">{service.title}</h2>
                  <p className="text-charcoal/70 mb-4">{service.description}</p>
                  <p className="text-lg font-semibold text-primary-green mb-4">
                    Starting at {service.price}
                  </p>
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
                    <div className="icon-container-amber w-16 h-16 rounded-2xl mx-auto mb-4">
                      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                      </svg>
                    </div>
                    <h3 className="text-xl font-semibold text-charcoal mb-2">Get a Free Quote</h3>
                    <p className="text-charcoal/70 mb-4">for {service.title.toLowerCase()}</p>
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

      {/* Why Choose Us */}
      <section className="py-20 bg-gradient-sage">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <span className="badge-teal px-4 py-2 rounded-full text-sm font-semibold inline-block mb-4">
              Why Us
            </span>
            <h2 className="text-3xl font-bold text-charcoal mb-4">
              Why Choose Us for Tree Removal?
            </h2>
            <div className="decorative-line mx-auto"></div>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: 'Licensed & Insured',
                desc: 'Full liability coverage and workers compensation for your protection.',
                icon: 'M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z',
                container: 'icon-container-green',
              },
              {
                title: '24/7 Emergency Response',
                desc: 'When storms strike, we are here around the clock to help.',
                icon: 'M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z',
                container: 'icon-container-amber',
              },
              {
                title: 'Free Estimates',
                desc: 'No obligation quotes with transparent, upfront pricing.',
                icon: 'M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4',
                container: 'icon-container-teal',
              },
            ].map((item, index) => (
              <div key={item.title} className={`card-premium rounded-2xl p-8 text-center hover-lift animate-fade-in-up animation-delay-${(index + 1) * 100}`}>
                <div className={`${item.container} w-16 h-16 rounded-2xl mx-auto mb-4`}>
                  <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={item.icon} />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold text-charcoal mb-2">{item.title}</h3>
                <p className="text-charcoal/70">{item.desc}</p>
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
              <div className="icon-container-amber w-12 h-12 rounded-xl flex-shrink-0">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <div>
                <h3 className="font-bold text-charcoal text-lg mb-2">Important: Safety First</h3>
                <p className="text-charcoal/70">
                  Never attempt to remove a hazardous tree yourself. Fallen or damaged trees can be extremely dangerous.
                  Our certified arborists have the training, equipment, and insurance to handle any situation safely.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-primary-green py-16 relative overflow-hidden">
        <div className="absolute inset-0 bg-pattern-dots opacity-10"></div>
        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <span className="inline-block glass px-4 py-2 rounded-full text-sm font-semibold text-white mb-4">
            Get Started Today
          </span>
          <h2 className="text-3xl font-bold text-white mb-4">Need a Tree Removed?</h2>
          <p className="text-white/90 text-lg mb-8">
            Get your free estimate today. Emergency service available 24/7.
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
