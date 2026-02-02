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
        <div className="absolute inset-0 bg-black/50" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-white">
          <p className="text-cta-green font-semibold mb-2">Protect Your Investment</p>
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Winterization Services</h1>
          <p className="text-xl text-white/90 max-w-2xl">
            The DMV&apos;s freeze-thaw cycles cause more landscape damage than heavy snow. Prepare your property before winter strikes.
          </p>
        </div>
      </section>

      {/* Why Winterize */}
      <section className="py-16 bg-cream">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl font-bold text-charcoal mb-4">Why Winter Prep Matters in the DMV</h2>
          <p className="text-charcoal/70 text-lg">
            Unlike regions with consistent cold, our area experiences damaging freeze-thaw cycles, periodic ice storms, and dry winter winds. Without proper preparation, your valuable plants, trees, and irrigation systems are at risk.
          </p>
        </div>
      </section>

      {/* Services */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-8">
            {/* Plant Winterization */}
            <div className="bg-cream rounded-2xl p-8">
              <h2 className="text-xl font-bold text-charcoal mb-6">Plant Winterization</h2>
              <ul className="space-y-4">
                {plantServices.map((service) => (
                  <li key={service.name} className="flex justify-between items-center">
                    <span className="text-charcoal/80">{service.name}</span>
                    <span className="text-primary-green font-semibold text-sm">{service.price}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Tree Winter Prep */}
            <div className="bg-cream rounded-2xl p-8">
              <h2 className="text-xl font-bold text-charcoal mb-6">Tree Winter Prep</h2>
              <ul className="space-y-4">
                {treeServices.map((service) => (
                  <li key={service.name} className="flex justify-between items-center">
                    <span className="text-charcoal/80">{service.name}</span>
                    <span className="text-primary-green font-semibold text-sm">{service.price}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Property Winterization */}
            <div className="bg-cream rounded-2xl p-8">
              <h2 className="text-xl font-bold text-charcoal mb-6">Property Winterization</h2>
              <ul className="space-y-4">
                {propertyServices.map((service) => (
                  <li key={service.name} className="flex justify-between items-center">
                    <span className="text-charcoal/80">{service.name}</span>
                    <span className="text-primary-green font-semibold text-sm">{service.price}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="mt-12 text-center">
            <p className="text-charcoal/70 mb-6">Bundle services and save 15-25% on comprehensive winterization packages.</p>
            <Link
              href="/contact"
              className="inline-flex items-center justify-center px-8 py-4 bg-cta-green text-white font-semibold rounded-lg hover:bg-cta-green/90 transition-colors"
            >
              Get Winterization Quote
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-primary-green py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">Prepare Before Winter Arrives</h2>
          <p className="text-white/90 text-lg mb-8">
            Schedule your winterization services before the first freeze. Optimal timing: October - November.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="inline-flex items-center justify-center px-8 py-4 bg-white text-primary-green font-semibold rounded-lg hover:bg-cream transition-colors"
            >
              Schedule Now
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
