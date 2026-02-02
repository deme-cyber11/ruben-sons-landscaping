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
  },
  {
    title: 'Cabling & Bracing',
    description: 'Structural support systems to prevent ice storm damage and extend tree life. Using both traditional steel and modern dynamic systems, we protect heritage and multi-stemmed trees.',
    price: '$300 - $600 per tree',
    features: ['Storm preparation', 'Heritage tree preservation', 'Annual inspections'],
  },
  {
    title: 'Tree Health Assessments',
    description: 'Comprehensive evaluations for disease diagnosis, structural integrity, and risk analysis. We provide detailed written reports for permits, real estate, and insurance purposes.',
    price: '$100 - $700',
    features: ['Disease diagnosis', 'Structural evaluation', 'Written reports'],
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
        <div className="absolute inset-0 bg-black/50" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-white">
          <p className="text-cta-green font-semibold mb-2">Expert Care</p>
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Tree Care & Pruning</h1>
          <p className="text-xl text-white/90 max-w-2xl">
            Maintain the health, beauty, and safety of your trees with our professional care services.
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
                  <p className="text-lg font-semibold text-primary-green mb-4">{service.price}</p>
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
                    <h3 className="text-xl font-semibold text-charcoal mb-2">Schedule Service</h3>
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

      {/* CTA Section */}
      <section className="bg-primary-green py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">Keep Your Trees Healthy</h2>
          <p className="text-white/90 text-lg mb-8">
            Schedule a professional tree care consultation today.
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
              Call: 301-844-8429
            </a>
          </div>
        </div>
      </section>
    </div>
  )
}
