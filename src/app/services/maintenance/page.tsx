import type { Metadata } from 'next'
import Link from 'next/link'
import Image from 'next/image'

export const metadata: Metadata = {
  title: 'Maintenance Programs | Ruben & Sons Landscaping',
  description: 'Year-round lawn maintenance, seasonal cleanup, and fertilization programs in Washington DC, Maryland, and Virginia. Priority scheduling for contract clients.',
}

const programs = [
  {
    title: 'Lawn Maintenance Contracts',
    description: 'Enjoy a healthy, beautiful lawn without the hassle. Our maintenance programs include weekly mowing, edging, and blowing, plus seasonal services tailored to your property.',
    pricing: [
      { label: 'Monthly', price: '$100 - $410' },
      { label: 'Annual', price: '$900 - $4,000+' },
    ],
    features: ['Weekly mowing & edging', 'Priority scheduling', 'Predictable monthly costs', 'Seasonal adjustments'],
  },
  {
    title: 'Seasonal Cleanup Programs',
    description: 'Prepare your landscape for the changing seasons. Spring cleanup removes winter debris, fall cleanup handles leaves and prepares beds for winter.',
    pricing: [
      { label: 'Spring Cleanup', price: '$125 - $300' },
      { label: 'Fall Cleanup', price: '$200 - $600' },
    ],
    features: ['Debris removal', 'Bed preparation', 'Leaf removal', 'Gutter clearing available'],
  },
  {
    title: 'Fertilization Programs',
    description: 'Achieve a thick, healthy lawn that crowds out weeds naturally. Customized programs deliver the right nutrients at the right time.',
    pricing: [
      { label: '5-7 Applications', price: '$200 - $700/year' },
      { label: 'Monthly Plans', price: 'Available' },
    ],
    features: ['Soil testing', 'Custom blend', 'Weed control', 'Seasonal timing'],
  },
]

export default function MaintenancePage() {
  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="relative h-[50vh] min-h-[400px] flex items-center">
        <Image
          src="https://images.unsplash.com/photo-1592417817098-8fd3d9eb14a5?w=1600&q=80"
          alt="Lawn maintenance"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-black/50" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-white">
          <p className="text-cta-green font-semibold mb-2">Year-Round Care</p>
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Maintenance Programs</h1>
          <p className="text-xl text-white/90 max-w-2xl">
            Keep your property looking its best with our professional maintenance programs.
          </p>
        </div>
      </section>

      {/* Programs */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid gap-12">
            {programs.map((program) => (
              <div key={program.title} className="bg-cream rounded-2xl p-8 md:p-12">
                <div className="grid md:grid-cols-2 gap-8">
                  <div>
                    <h2 className="text-2xl font-bold text-charcoal mb-4">{program.title}</h2>
                    <p className="text-charcoal/70 mb-6">{program.description}</p>
                    <ul className="space-y-2">
                      {program.features.map((feature) => (
                        <li key={feature} className="flex items-center gap-2 text-charcoal/80">
                          <svg className="w-5 h-5 text-cta-green flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                          </svg>
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div className="bg-white rounded-xl p-6">
                    <h3 className="text-lg font-semibold text-charcoal mb-4">Pricing</h3>
                    <ul className="space-y-3 mb-6">
                      {program.pricing.map((item) => (
                        <li key={item.label} className="flex justify-between">
                          <span className="text-charcoal/70">{item.label}</span>
                          <span className="font-semibold text-primary-green">{item.price}</span>
                        </li>
                      ))}
                    </ul>
                    <Link
                      href="/contact"
                      className="block w-full text-center px-6 py-3 bg-cta-green text-white font-semibold rounded-lg hover:bg-cta-green/90 transition-colors"
                    >
                      Get Started
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
          <h2 className="text-3xl font-bold text-white mb-4">Start Your Maintenance Program</h2>
          <p className="text-white/90 text-lg mb-8">
            Contract clients receive priority scheduling and bundled savings.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="inline-flex items-center justify-center px-8 py-4 bg-white text-primary-green font-semibold rounded-lg hover:bg-cream transition-colors"
            >
              Get Free Quote
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
