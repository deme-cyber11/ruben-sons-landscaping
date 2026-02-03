import type { Metadata } from 'next'
import Link from 'next/link'
import Image from 'next/image'

export const metadata: Metadata = {
  title: 'Tree Care & Pruning Services | Ruben & Sons Landscaping',
  description: 'Expert tree pruning, cabling & bracing, and tree health assessments in Washington DC, Maryland, and Virginia. Certified arborists. Free estimates.',
}

const services = [
  {
    title: 'Dormant Pruning',
    description: 'Late winter pruning for optimal tree health. Shape trees while the structure is clearly visible without foliage, promoting healthier development and reducing disease risk.',
    price: '$75 - $1,000 per tree',
    features: ['10% winter discount', 'Promotes healthy growth', 'Disease prevention'],
    badge: 'badge-teal',
    iconContainer: 'icon-container-teal',
  },
  {
    title: 'Cabling & Bracing',
    description: 'Structural support systems to prevent ice storm damage and extend tree life. Using both traditional steel and modern dynamic systems, we protect heritage and multi-stemmed trees.',
    price: '$300 - $600 per tree',
    features: ['Storm preparation', 'Heritage tree preservation', 'Annual inspections'],
    badge: 'badge-amber',
    iconContainer: 'icon-container-amber',
  },
  {
    title: 'Tree Health Assessments',
    description: 'Comprehensive evaluations for disease diagnosis, structural integrity, and risk analysis. We provide detailed written reports for permits, real estate, and insurance purposes.',
    price: '$100 - $700',
    features: ['Disease diagnosis', 'Structural evaluation', 'Written reports'],
    badge: 'badge-green',
    iconContainer: 'icon-container-green',
  },
]

const benefits = [
  {
    title: 'Extend Tree Lifespan',
    description: 'Proper care can add decades to your trees life.',
    icon: 'M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z',
    container: 'icon-container-green',
  },
  {
    title: 'Improve Property Value',
    description: 'Healthy, well-maintained trees increase home values.',
    icon: 'M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6',
    container: 'icon-container-amber',
  },
  {
    title: 'Prevent Storm Damage',
    description: 'Regular maintenance reduces breakage risk.',
    icon: 'M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z',
    container: 'icon-container-teal',
  },
]

export default function TreeCarePage() {
  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="relative h-[50vh] min-h-[400px] flex items-center">
        <Image
          src="https://images.unsplash.com/photo-1558904541-efa843a96f01?w=1600&q=80"
          alt="Professional tree care"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 hero-overlay" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-white">
          <span className="inline-block badge-green px-4 py-2 rounded-full text-sm font-semibold mb-4 animate-fade-in-down">
            Certified Arborists
          </span>
          <h1 className="text-4xl md:text-5xl font-bold mb-4 animate-fade-in-up">Tree Care & Pruning</h1>
          <p className="text-xl text-white/90 max-w-2xl animate-fade-in-up animation-delay-200">
            Maintain the health, beauty, and safety of your trees with our professional care services.
          </p>
          <div className="decorative-line mt-6 animate-fade-in animation-delay-400"></div>
        </div>
      </section>

      {/* Benefits Bar */}
      <section className="py-12 bg-gradient-sage">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-8">
            {benefits.map((benefit, index) => (
              <div
                key={benefit.title}
                className={`flex items-center gap-4 animate-fade-in-up animation-delay-${(index + 1) * 100}`}
              >
                <div className={`${benefit.container} w-14 h-14 rounded-xl flex-shrink-0`}>
                  <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={benefit.icon} />
                  </svg>
                </div>
                <div>
                  <h3 className="font-bold text-charcoal">{benefit.title}</h3>
                  <p className="text-charcoal/70 text-sm">{benefit.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Winter Special Callout */}
      <section className="py-8 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="callout-success">
            <div className="flex flex-col md:flex-row items-center gap-4">
              <div className="icon-container-green w-14 h-14 rounded-xl flex-shrink-0">
                <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <div className="flex-1 text-center md:text-left">
                <h3 className="font-bold text-charcoal text-lg">Winter Pruning Special: Save 10%</h3>
                <p className="text-charcoal/70">Schedule dormant pruning November through February and save on all pruning services.</p>
              </div>
              <Link
                href="/contact"
                className="btn-primary px-6 py-3 rounded-lg font-semibold whitespace-nowrap"
              >
                Book Now
              </Link>
            </div>
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
            <h2 className="text-3xl md:text-4xl font-bold text-charcoal mb-4">Expert Tree Care Solutions</h2>
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
                    Professional Care
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
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                      </svg>
                    </div>
                    <h3 className="text-xl font-semibold text-charcoal mb-2">Schedule Service</h3>
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

      {/* Tree Care Tips */}
      <section className="py-16 bg-gradient-warm">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <span className="badge-amber px-4 py-2 rounded-full text-sm font-semibold inline-block mb-4">
              Expert Tips
            </span>
            <h2 className="text-3xl font-bold text-charcoal mb-4">Signs Your Tree Needs Care</h2>
            <div className="decorative-line-warm mx-auto"></div>
          </div>
          <div className="grid md:grid-cols-2 gap-6">
            {[
              'Dead or dying branches visible in canopy',
              'Crossing or rubbing branches',
              'Trees touching power lines or structures',
              'Signs of disease or pest infestation',
              'Unbalanced or leaning growth',
              'Recent storm damage',
            ].map((tip, index) => (
              <div
                key={tip}
                className={`card-premium rounded-xl p-4 flex items-center gap-3 hover-lift animate-fade-in-up animation-delay-${(index + 1) * 100}`}
              >
                <span className="icon-container-amber w-10 h-10 rounded-lg flex-shrink-0">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                  </svg>
                </span>
                <span className="text-charcoal/80">{tip}</span>
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
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
                </svg>
              </div>
              <div>
                <h3 className="font-bold text-charcoal text-lg mb-2">Certified Arborists on Every Job</h3>
                <p className="text-charcoal/70">
                  Our team includes ISA-certified arborists who understand tree biology, proper pruning techniques,
                  and regional disease patterns. We do not just cut trees; we care for them.
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
            Schedule Today
          </span>
          <h2 className="text-3xl font-bold text-white mb-4">Keep Your Trees Healthy</h2>
          <p className="text-white/90 text-lg mb-8">
            Schedule a professional tree care consultation today.
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
