import type { Metadata } from 'next'
import Link from 'next/link'
import Image from 'next/image'

export const metadata: Metadata = {
  title: 'Our Services | Ruben & Sons Landscaping',
  description: 'Professional tree removal, tree care, land clearing, landscaping, winterization, and maintenance services in Washington DC, Maryland, and Virginia.',
}

const services = [
  {
    title: 'Tree Removal',
    description: '24/7 emergency tree removal, crane-assisted removals, hazardous tree removal, and stump grinding services.',
    href: '/services/tree-removal',
    image: 'https://images.unsplash.com/photo-1598902468171-680e426a4d58?w=800&q=80',
    features: ['Emergency Response', 'Crane-Assisted', 'Stump Grinding'],
  },
  {
    title: 'Tree Care',
    description: 'Expert pruning, cabling & bracing, and comprehensive tree health assessments by certified professionals.',
    href: '/services/tree-care',
    image: 'https://images.unsplash.com/photo-1558904541-efa843a96f01?w=800&q=80',
    features: ['Pruning', 'Cabling & Bracing', 'Health Assessments'],
  },
  {
    title: 'Land Clearing',
    description: 'Complete site preparation for residential and commercial development projects throughout the DMV.',
    href: '/services/land-clearing',
    image: 'https://images.unsplash.com/photo-1500382017468-9049fed747ef?w=800&q=80',
    features: ['Development Clearing', 'Lot Clearing', 'Grading Available'],
  },
  {
    title: 'Landscaping',
    description: 'Transform your property with professional mulching, planting, sod installation, and softscape design.',
    href: '/services/landscaping',
    image: 'https://images.unsplash.com/photo-1585320806297-9794b3e4eeae?w=800&q=80',
    features: ['Mulching', 'Planting', 'Sod Installation'],
  },
  {
    title: 'Winterization',
    description: 'Protect your landscape investment from DMV freeze-thaw cycles with comprehensive winter preparation.',
    href: '/services/winterization',
    image: 'https://images.unsplash.com/photo-1516912481808-3406841bd33c?w=800&q=80',
    features: ['Plant Protection', 'Dormant Pruning', 'Irrigation Winterization'],
  },
  {
    title: 'Maintenance',
    description: 'Year-round lawn care contracts, seasonal cleanups, and fertilization programs for a perfect property.',
    href: '/services/maintenance',
    image: 'https://images.unsplash.com/photo-1592417817098-8fd3d9eb14a5?w=800&q=80',
    features: ['Lawn Care Contracts', 'Seasonal Cleanup', 'Fertilization'],
  },
]

export default function ServicesPage() {
  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="bg-primary-green py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">Our Services</h1>
          <p className="text-xl text-white/80 max-w-2xl mx-auto">
            Comprehensive tree care and landscaping solutions for residential and commercial properties throughout the DMV area.
          </p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service) => (
              <Link
                key={service.href}
                href={service.href}
                className="group bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow"
              >
                <div className="relative h-48 overflow-hidden">
                  <Image
                    src={service.image}
                    alt={service.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                  <h2 className="absolute bottom-4 left-4 text-2xl font-bold text-white">
                    {service.title}
                  </h2>
                </div>
                <div className="p-6">
                  <p className="text-charcoal/70 mb-4">{service.description}</p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {service.features.map((feature) => (
                      <span
                        key={feature}
                        className="px-3 py-1 bg-cream text-primary-green text-sm rounded-full"
                      >
                        {feature}
                      </span>
                    ))}
                  </div>
                  <span className="inline-flex items-center text-cta-green font-semibold group-hover:gap-2 transition-all">
                    Learn More
                    <svg className="w-5 h-5 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-cta-green py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">Ready to Get Started?</h2>
          <p className="text-white/90 text-lg mb-8">
            Contact us today for a free estimate on any of our services.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="inline-flex items-center justify-center px-8 py-4 bg-white text-cta-green font-semibold rounded-lg hover:bg-cream transition-colors"
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
              301-844-8429
            </a>
          </div>
        </div>
      </section>
    </div>
  )
}
