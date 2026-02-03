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
    badge: 'badge-green',
    iconContainer: 'icon-container-green',
    popular: true,
  },
  {
    title: 'Seasonal Cleanup Programs',
    description: 'Prepare your landscape for the changing seasons. Spring cleanup removes winter debris, fall cleanup handles leaves and prepares beds for winter.',
    pricing: [
      { label: 'Spring Cleanup', price: '$125 - $300' },
      { label: 'Fall Cleanup', price: '$200 - $600' },
    ],
    features: ['Debris removal', 'Bed preparation', 'Leaf removal', 'Gutter clearing available'],
    badge: 'badge-amber',
    iconContainer: 'icon-container-amber',
    popular: false,
  },
  {
    title: 'Fertilization Programs',
    description: 'Achieve a thick, healthy lawn that crowds out weeds naturally. Customized programs deliver the right nutrients at the right time.',
    pricing: [
      { label: '5-7 Applications', price: '$200 - $700/year' },
      { label: 'Monthly Plans', price: 'Available' },
    ],
    features: ['Soil testing', 'Custom blend', 'Weed control', 'Seasonal timing'],
    badge: 'badge-teal',
    iconContainer: 'icon-container-teal',
    popular: false,
  },
]

const benefits = [
  {
    title: 'Priority Scheduling',
    description: 'Contract clients always get scheduled first.',
    icon: 'M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z',
    container: 'icon-container-green',
  },
  {
    title: 'Predictable Costs',
    description: 'Know exactly what you will pay each month.',
    icon: 'M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z',
    container: 'icon-container-amber',
  },
  {
    title: 'Bundled Savings',
    description: 'Save 10-20% compared to one-time services.',
    icon: 'M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z',
    container: 'icon-container-teal',
  },
]

const serviceSchedule = [
  {
    month: 'March - April',
    services: 'Spring cleanup, first mowing, early fertilization',
    container: 'icon-container-green',
  },
  {
    month: 'May - August',
    services: 'Weekly mowing, trimming, summer treatments',
    container: 'icon-container-amber',
  },
  {
    month: 'September - October',
    services: 'Fall cleanup, aeration, overseeding',
    container: 'icon-container-amber',
  },
  {
    month: 'November - February',
    services: 'Winterization, dormant pruning, planning',
    container: 'icon-container-teal',
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
        <div className="absolute inset-0 hero-overlay" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-white">
          <span className="inline-block badge-green px-4 py-2 rounded-full text-sm font-semibold mb-4 animate-fade-in-down">
            Year-Round Care
          </span>
          <h1 className="text-4xl md:text-5xl font-bold mb-4 animate-fade-in-up">Maintenance Programs</h1>
          <p className="text-xl text-white/90 max-w-2xl animate-fade-in-up animation-delay-200">
            Keep your property looking its best with our professional maintenance programs.
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

      {/* Contract Client Callout */}
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
                <h3 className="font-bold text-charcoal text-lg">Contract Clients Get Priority Treatment</h3>
                <p className="text-charcoal/70">Guaranteed scheduling, bundled savings, and dedicated service teams.</p>
              </div>
              <Link
                href="/contact"
                className="btn-primary px-6 py-3 rounded-lg font-semibold whitespace-nowrap"
              >
                Join Today
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Programs */}
      <section className="py-20 bg-mesh-gradient">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="badge-teal px-4 py-2 rounded-full text-sm font-semibold inline-block mb-4">
              Our Programs
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-charcoal mb-4">Choose Your Maintenance Plan</h2>
            <div className="decorative-line mx-auto"></div>
          </div>
          <div className="grid gap-8">
            {programs.map((program, index) => (
              <div
                key={program.title}
                className={`${program.popular ? 'card-warm' : 'card-premium'} rounded-2xl p-8 md:p-12 hover-lift animate-fade-in-up animation-delay-${(index + 1) * 100} relative`}
              >
                {program.popular && (
                  <span className="absolute -top-3 right-6 badge-amber px-4 py-1 rounded-full text-xs font-bold">
                    Most Popular
                  </span>
                )}
                <div className="grid md:grid-cols-2 gap-8">
                  <div>
                    <span className={`${program.badge} px-3 py-1 rounded-full text-xs font-semibold inline-block mb-4`}>
                      {program.title.split(' ')[0]}
                    </span>
                    <h2 className="text-2xl font-bold text-charcoal mb-4">{program.title}</h2>
                    <p className="text-charcoal/70 mb-6">{program.description}</p>
                    <ul className="space-y-2">
                      {program.features.map((feature) => (
                        <li key={feature} className="flex items-center gap-2 text-charcoal/80">
                          <span className={`${program.iconContainer} w-6 h-6 rounded-lg flex-shrink-0`}>
                            <svg className="w-3.5 h-3.5" fill="currentColor" viewBox="0 0 20 20">
                              <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                            </svg>
                          </span>
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div className="bg-white rounded-xl p-6 shadow-sm">
                    <div className={`${program.iconContainer} w-14 h-14 rounded-xl mb-4`}>
                      <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                      </svg>
                    </div>
                    <h3 className="text-lg font-semibold text-charcoal mb-4">Pricing</h3>
                    <ul className="space-y-3 mb-6">
                      {program.pricing.map((item) => (
                        <li key={item.label} className="flex justify-between py-2 border-b border-gray-100 last:border-0">
                          <span className="text-charcoal/70">{item.label}</span>
                          <span className="font-semibold text-primary-green">{item.price}</span>
                        </li>
                      ))}
                    </ul>
                    <Link
                      href="/contact"
                      className="btn-primary block w-full text-center px-6 py-3 rounded-lg font-semibold"
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

      {/* Seasonal Schedule */}
      <section className="py-16 bg-gradient-warm">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <span className="badge-amber px-4 py-2 rounded-full text-sm font-semibold inline-block mb-4">
              Year-Round Care
            </span>
            <h2 className="text-3xl font-bold text-charcoal mb-4">What We Do Throughout the Year</h2>
            <div className="decorative-line-warm mx-auto"></div>
          </div>
          <div className="grid md:grid-cols-2 gap-6">
            {serviceSchedule.map((period, index) => (
              <div
                key={period.month}
                className={`card-premium rounded-xl p-6 hover-lift animate-fade-in-up animation-delay-${(index + 1) * 100}`}
              >
                <div className="flex items-start gap-4">
                  <div className={`${period.container} w-12 h-12 rounded-xl flex-shrink-0`}>
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-bold text-charcoal mb-1">{period.month}</h3>
                    <p className="text-charcoal/70 text-sm">{period.services}</p>
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
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <div>
                <h3 className="font-bold text-charcoal text-lg mb-2">Customizable Service Plans</h3>
                <p className="text-charcoal/70">
                  Every property is different. We will work with you to create a maintenance plan that fits
                  your needs and budget, whether you need weekly service or monthly visits.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* What is Included */}
      <section className="py-16 bg-gradient-sage">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <span className="badge-green px-4 py-2 rounded-full text-sm font-semibold inline-block mb-4">
              Full Service
            </span>
            <h2 className="text-3xl font-bold text-charcoal mb-4">What is Included</h2>
            <div className="decorative-line mx-auto"></div>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: 'Lawn Care',
                items: ['Weekly mowing', 'Edging & trimming', 'Blowing cleanup', 'Height adjustments'],
                container: 'icon-container-green',
              },
              {
                title: 'Seasonal Services',
                items: ['Spring & fall cleanup', 'Leaf removal', 'Bed maintenance', 'Debris hauling'],
                container: 'icon-container-amber',
              },
              {
                title: 'Turf Health',
                items: ['Fertilization', 'Weed control', 'Aeration', 'Overseeding'],
                container: 'icon-container-teal',
              },
            ].map((category, index) => (
              <div
                key={category.title}
                className={`card-premium rounded-2xl p-6 hover-lift animate-fade-in-up animation-delay-${(index + 1) * 100}`}
              >
                <div className={`${category.container} w-14 h-14 rounded-xl mb-4`}>
                  <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <h3 className="font-bold text-charcoal text-lg mb-4">{category.title}</h3>
                <ul className="space-y-2">
                  {category.items.map((item) => (
                    <li key={item} className="flex items-center gap-2 text-charcoal/80 text-sm">
                      <span className={`${category.container} w-5 h-5 rounded flex-shrink-0`}>
                        <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                        </svg>
                      </span>
                      {item}
                    </li>
                  ))}
                </ul>
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
            Get Started
          </span>
          <h2 className="text-3xl font-bold text-white mb-4">Start Your Maintenance Program</h2>
          <p className="text-white/90 text-lg mb-8">
            Contract clients receive priority scheduling and bundled savings.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="inline-flex items-center justify-center px-8 py-4 bg-white text-primary-green font-semibold rounded-lg hover:bg-cream transition-all hover-lift"
            >
              Get Free Quote
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
