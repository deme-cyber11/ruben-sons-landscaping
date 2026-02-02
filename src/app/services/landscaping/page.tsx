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
  },
  {
    title: 'Ornamental Tree Planting',
    description: 'Replace removed trees or add new focal points. Our arborists select species matched to your site conditions for trees built to thrive.',
    price: '$150 - $2,000+ per tree',
    features: ['Species selection guidance', 'Proper installation', 'Establishment care'],
  },
  {
    title: 'Shrub & Hedge Trimming',
    description: 'Professional maintenance for foundation plantings and ornamental shrubs. Keep your landscape looking manicured year-round.',
    price: '$45 - $100/hour',
    features: ['Precision shaping', 'Health promotion', 'Regular scheduling'],
  },
  {
    title: 'Flower Bed Installation',
    description: 'Custom designed beds with seasonal color and year-round interest. We prepare soil and select plants suited to our climate.',
    price: '$10 - $30 per square foot',
    features: ['Custom design', 'Soil preparation', 'Plant selection'],
  },
  {
    title: 'Sod Installation',
    description: 'Instant lawn transformation with premium cool-season grass varieties suited to our Mid-Atlantic climate. Perfect for new construction or renovation.',
    price: '$1.40 - $2.00 per square foot',
    features: ['Instant results', 'Soil grading', 'Variety selection'],
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
        <div className="absolute inset-0 bg-black/50" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-white">
          <p className="text-cta-green font-semibold mb-2">Transform Your Property</p>
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Landscaping Services</h1>
          <p className="text-xl text-white/90 max-w-2xl">
            From mulching to complete landscape installations, we create outdoor spaces you will love.
          </p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-8">
            {services.map((service) => (
              <div key={service.title} className="bg-cream rounded-2xl p-8">
                <h2 className="text-2xl font-bold text-charcoal mb-4">{service.title}</h2>
                <p className="text-charcoal/70 mb-4">{service.description}</p>
                <p className="text-lg font-semibold text-primary-green mb-4">{service.price}</p>
                <ul className="space-y-2 mb-6">
                  {service.features.map((feature) => (
                    <li key={feature} className="flex items-center gap-2 text-charcoal/80">
                      <svg className="w-5 h-5 text-cta-green flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                      </svg>
                      {feature}
                    </li>
                  ))}
                </ul>
                <Link
                  href="/contact"
                  className="inline-flex items-center text-cta-green font-semibold hover:gap-2 transition-all"
                >
                  Get a Quote
                  <svg className="w-5 h-5 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-primary-green py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">Ready to Transform Your Landscape?</h2>
          <p className="text-white/90 text-lg mb-8">
            Get your free design consultation and estimate today.
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
