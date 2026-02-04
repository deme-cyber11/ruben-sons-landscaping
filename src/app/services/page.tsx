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
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
      </svg>
    ),
    accentColor: 'amber',
  },
  {
    title: 'Tree Care',
    description: 'Expert pruning, cabling & bracing, and comprehensive tree health assessments by certified professionals.',
    href: '/services/tree-care',
    image: 'https://images.unsplash.com/photo-1558904541-efa843a96f01?w=800&q=80',
    features: ['Pruning', 'Cabling & Bracing', 'Health Assessments'],
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
      </svg>
    ),
    accentColor: 'green',
  },
  {
    title: 'Land Clearing',
    description: 'Complete site preparation for residential and commercial development projects throughout the DMV.',
    href: '/services/land-clearing',
    image: 'https://images.unsplash.com/photo-1500382017468-9049fed747ef?w=800&q=80',
    features: ['Development Clearing', 'Lot Clearing', 'Grading Available'],
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7" />
      </svg>
    ),
    accentColor: 'teal',
  },
  {
    title: 'Landscaping',
    description: 'Transform your property with professional mulching, planting, sod installation, and softscape design.',
    href: '/services/landscaping',
    image: 'https://images.unsplash.com/photo-1585320806297-9794b3e4eeae?w=800&q=80',
    features: ['Mulching', 'Planting', 'Sod Installation'],
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
      </svg>
    ),
    accentColor: 'green',
  },
  {
    title: 'Winterization',
    description: 'Protect your landscape investment from DMV freeze-thaw cycles with comprehensive winter preparation.',
    href: '/services/winterization',
    image: 'https://images.unsplash.com/photo-1516912481808-3406841bd33c?w=800&q=80',
    features: ['Plant Protection', 'Dormant Pruning', 'Irrigation Winterization'],
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707" />
      </svg>
    ),
    accentColor: 'teal',
  },
  {
    title: 'Maintenance',
    description: 'Year-round lawn care contracts, seasonal cleanups, and fertilization programs for a perfect property.',
    href: '/services/maintenance',
    image: 'https://images.unsplash.com/photo-1592417817098-8fd3d9eb14a5?w=800&q=80',
    features: ['Lawn Care Contracts', 'Seasonal Cleanup', 'Fertilization'],
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
      </svg>
    ),
    accentColor: 'amber',
  },
]

const getIconContainerClass = (color: string) => {
  switch (color) {
    case 'amber':
      return 'icon-container-amber'
    case 'teal':
      return 'icon-container-teal'
    default:
      return 'icon-container-green'
  }
}

const getBadgeClass = (color: string) => {
  switch (color) {
    case 'amber':
      return 'badge-amber'
    case 'teal':
      return 'badge-teal'
    default:
      return 'badge-green'
  }
}

export default function ServicesPage() {
  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="relative bg-primary-green py-24 overflow-hidden">
        {/* Decorative elements */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-cta-green/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>
        <div className="absolute bottom-0 left-0 w-64 h-64 bg-teal/10 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2"></div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <span className="badge-green inline-flex items-center px-4 py-1.5 rounded-full text-sm font-medium mb-6 animate-fade-in-down">
            Professional Landscaping Services
          </span>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 animate-fade-in-up">
            Our Services
          </h1>
          <div className="decorative-line-long mx-auto mb-6"></div>
          <p className="text-xl text-white/90 max-w-2xl mx-auto animate-fade-in-up animation-delay-200">
            Comprehensive tree care and landscaping solutions for residential and commercial properties throughout the DMV area.
          </p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 bg-mesh-gradient relative">
        {/* Background pattern */}
        <div className="absolute inset-0 bg-pattern-dots-light opacity-50"></div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          {/* Section header */}
          <div className="text-center mb-16">
            <span className="badge-teal inline-flex items-center px-4 py-1.5 rounded-full text-sm font-medium mb-4">
              What We Offer
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-charcoal mb-4">
              Complete Landscape Solutions
            </h2>
            <div className="decorative-line mx-auto"></div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <Link
                key={service.href}
                href={service.href}
                className={`group card-premium rounded-2xl overflow-hidden animate-fade-in-up`}
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="relative h-52 overflow-hidden">
                  <Image
                    src={service.image}
                    alt={service.title}
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-500"
                    sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent" />

                  {/* Icon badge */}
                  <div className={`absolute top-4 right-4 w-12 h-12 ${getIconContainerClass(service.accentColor)} rounded-xl flex items-center justify-center shadow-lg`}>
                    {service.icon}
                  </div>

                  <h2 className="absolute bottom-4 left-4 text-2xl font-bold text-white">
                    {service.title}
                  </h2>
                </div>
                <div className="p-6">
                  <p className="text-charcoal/70 mb-4 leading-relaxed">{service.description}</p>
                  <div className="flex flex-wrap gap-2 mb-5">
                    {service.features.map((feature) => (
                      <span
                        key={feature}
                        className={`px-3 py-1 ${getBadgeClass(service.accentColor)} text-sm rounded-full font-medium`}
                      >
                        {feature}
                      </span>
                    ))}
                  </div>
                  <span className="inline-flex items-center text-cta-green font-semibold group-hover:gap-3 transition-all duration-300">
                    Learn More
                    <svg className="w-5 h-5 ml-1 group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-20 bg-gradient-sage relative overflow-hidden">
        <div className="absolute top-20 left-10 w-72 h-72 decorative-blob animate-float"></div>
        <div className="absolute bottom-10 right-10 w-48 h-48 decorative-circle"></div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-12">
            <span className="badge-amber inline-flex items-center px-4 py-1.5 rounded-full text-sm font-medium mb-4">
              Why Ruben & Sons
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-charcoal mb-4">
              The Difference is in the Details
            </h2>
            <div className="decorative-line-warm mx-auto"></div>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: (
                  <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
                  </svg>
                ),
                title: 'Certified Experts',
                description: 'ISA certified arborists with decades of combined experience in the DMV area.',
                color: 'green',
              },
              {
                icon: (
                  <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                ),
                title: '24/7 Emergency Service',
                description: 'Storm damage? Fallen tree? We respond quickly when you need us most.',
                color: 'amber',
              },
              {
                icon: (
                  <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4" />
                  </svg>
                ),
                title: 'Free Estimates',
                description: 'Transparent pricing with detailed written estimates before any work begins.',
                color: 'teal',
              },
            ].map((item, index) => (
              <div
                key={item.title}
                className="card-warm rounded-2xl p-8 text-center animate-fade-in-up"
                style={{ animationDelay: `${index * 150}ms` }}
              >
                <div className={`w-16 h-16 ${getIconContainerClass(item.color)} rounded-2xl flex items-center justify-center mx-auto mb-5`}>
                  {item.icon}
                </div>
                <h3 className="text-xl font-bold text-charcoal mb-3">{item.title}</h3>
                <p className="text-charcoal/70 leading-relaxed">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-gradient-to-br from-cta-green via-primary-green to-primary-green-dark py-20 relative overflow-hidden">
        {/* Decorative elements */}
        <div className="absolute inset-0 bg-pattern-diagonal opacity-20"></div>
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-1 bg-gradient-to-r from-transparent via-white/30 to-transparent"></div>

        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <span className="inline-flex items-center px-4 py-1.5 rounded-full text-sm font-medium mb-6 bg-white/20 text-white backdrop-blur-sm">
            Get Started Today
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Ready to Transform Your Property?</h2>
          <div className="w-20 h-1 bg-amber mx-auto mb-6 rounded-full"></div>
          <p className="text-white/90 text-lg mb-10 max-w-2xl mx-auto">
            Contact us today for a free, no-obligation estimate on any of our services. Our team is ready to help bring your vision to life.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="inline-flex items-center justify-center px-8 py-4 bg-white text-primary-green font-semibold rounded-xl hover:bg-cream hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
            >
              <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
              Get Free Estimate
            </Link>
            <a
              href="tel:301-844-8429"
              className="inline-flex items-center justify-center px-8 py-4 border-2 border-white text-white font-semibold rounded-xl hover:bg-white/10 transition-all duration-300 backdrop-blur-sm"
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
