import React from 'react';
import Button from './Button';
import Link from 'next/link';

interface CityPageTemplateProps {
  city: string;
  state: string;
  stateAbbr: string;
  county?: string;
  description: string;
  neighborhoods?: string[];
  permitInfo?: string;
  testimonial?: {
    quote: string;
    author: string;
  };
}

const services = [
  {
    title: 'Emergency Tree Removal',
    description: '24/7 response for storm damage and hazardous trees',
    href: '/services/tree-removal',
    iconColor: 'amber',
  },
  {
    title: 'Tree Care & Pruning',
    description: 'Expert trimming, cabling, and health assessments',
    href: '/services/tree-care',
    iconColor: 'green',
  },
  {
    title: 'Land Clearing',
    description: 'Site preparation for construction and development',
    href: '/services/land-clearing',
    iconColor: 'teal',
  },
  {
    title: 'Landscaping',
    description: 'Design, planting, and softscape installation',
    href: '/services/landscaping',
    iconColor: 'green',
  },
  {
    title: 'Seasonal Maintenance',
    description: 'Year-round care programs and winterization',
    href: '/services/maintenance',
    iconColor: 'amber',
  },
];

const serviceIcons: Record<string, React.ReactNode> = {
  'Emergency Tree Removal': (
    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
    </svg>
  ),
  'Tree Care & Pruning': (
    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
    </svg>
  ),
  'Land Clearing': (
    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
    </svg>
  ),
  'Landscaping': (
    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
    </svg>
  ),
  'Seasonal Maintenance': (
    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
    </svg>
  ),
};

export function CityPageTemplate({
  city,
  state,
  stateAbbr,
  county,
  description,
  neighborhoods,
  permitInfo,
  testimonial,
}: CityPageTemplateProps) {
  return (
    <main className="pt-20">
      {/* Hero Section with enhanced gradient overlay */}
      <section className="relative bg-primary-green text-white py-16 lg:py-24 overflow-hidden">
        {/* Decorative background elements */}
        <div className="absolute inset-0 bg-pattern-dots opacity-10" />
        <div className="absolute top-20 right-10 w-64 h-64 decorative-blob animate-float opacity-20" />
        <div className="absolute bottom-10 left-10 w-48 h-48 decorative-circle opacity-30" />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            {/* Location badge with new badge styling */}
            <div className="inline-flex items-center gap-2 glass px-4 py-2 rounded-full mb-6 animate-fade-in-down">
              <svg className="w-5 h-5 text-amber-light" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
              </svg>
              <span className="text-sm font-medium">Proudly Serving {city}, {stateAbbr}</span>
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6 animate-fade-in-up">
              Professional Tree Service & Landscaping in{' '}
              <span className="text-cta-green-light">{city}, {stateAbbr}</span>
            </h1>

            {/* Decorative line */}
            <div className="decorative-line-warm mb-6 animate-fade-in animation-delay-200" />

            <p className="text-xl text-white/90 mb-8 animate-fade-in-up animation-delay-300">
              {description}
            </p>

            <div className="flex flex-col sm:flex-row gap-4 animate-fade-in-up animation-delay-400">
              <Button href="/contact" size="lg" className="btn-primary text-lg">
                Get Free Estimate
              </Button>
              <Button href="tel:301-844-8429" size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-primary-green group">
                <svg className="w-5 h-5 mr-2 group-hover:animate-bounce-subtle" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                Call 301-844-8429
              </Button>
            </div>

            {/* Trust indicators */}
            <div className="flex flex-wrap items-center gap-6 mt-8 pt-8 border-t border-white/20 animate-fade-in animation-delay-500">
              <div className="flex items-center gap-2">
                <svg className="w-5 h-5 text-cta-green-light" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <span className="text-sm">Licensed & Insured</span>
              </div>
              <div className="flex items-center gap-2">
                <svg className="w-5 h-5 text-amber-light" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
                <span className="text-sm">5-Star Rated</span>
              </div>
              <div className="flex items-center gap-2">
                <svg className="w-5 h-5 text-teal-light" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <span className="text-sm">24/7 Emergency Service</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section - bg-gradient-warm */}
      <section className="py-16 lg:py-20 bg-gradient-warm relative overflow-hidden">
        {/* Subtle pattern overlay */}
        <div className="absolute inset-0 bg-pattern-dots-light" />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Section header with badge */}
          <div className="text-center mb-12">
            <span className="badge-green inline-flex items-center px-4 py-1.5 rounded-full text-sm font-medium mb-4">
              <svg className="w-4 h-4 mr-1.5" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M11.3 1.046A1 1 0 0112 2v5h4a1 1 0 01.82 1.573l-7 10A1 1 0 018 18v-5H4a1 1 0 01-.82-1.573l7-10a1 1 0 011.12-.38z" clipRule="evenodd" />
              </svg>
              Our Services
            </span>
            <h2 className="text-3xl lg:text-4xl font-bold text-charcoal mb-4">
              Professional Services in {city}
            </h2>
            <div className="decorative-line mx-auto mb-4" />
            <p className="text-gray-600 max-w-2xl mx-auto">
              From emergency tree removal to complete landscape transformations, we provide comprehensive services to {city} homeowners and businesses.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service, index) => (
              <Link
                key={service.title}
                href={service.href}
                className={`group p-6 rounded-xl hover-lift ${
                  index % 2 === 0 ? 'card-premium' : 'card-warm'
                }`}
              >
                <div className={`icon-container w-14 h-14 mb-4 icon-container-${service.iconColor}`}>
                  {serviceIcons[service.title]}
                </div>
                <h3 className="text-lg font-semibold text-charcoal group-hover:text-primary-green mb-2 transition-colors">
                  {service.title}
                </h3>
                <p className="text-gray-600 text-sm mb-4">
                  {service.description}
                </p>
                <span className="inline-flex items-center text-sm font-medium text-primary-green group-hover:text-cta-green transition-colors">
                  Learn more
                  <svg className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us - bg-gradient-sage */}
      <section className="py-16 lg:py-20 bg-gradient-sage relative">
        <div className="absolute inset-0 bg-pattern-grid" />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Section header with badge */}
          <div className="text-center mb-12">
            <span className="badge-teal inline-flex items-center px-4 py-1.5 rounded-full text-sm font-medium mb-4">
              <svg className="w-4 h-4 mr-1.5" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
              Why Choose Us
            </span>
            <h2 className="text-3xl lg:text-4xl font-bold text-charcoal mb-4">
              Why {city} Homeowners Trust Us
            </h2>
            <div className="decorative-line-warm mx-auto" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Card 1 - Licensed & Insured */}
            <div className="card-premium p-8 rounded-2xl hover-lift">
              <div className="icon-container icon-container-green w-16 h-16 mb-6">
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-charcoal mb-3">Licensed & Insured</h3>
              <p className="text-gray-600">
                $2M liability coverage and workers&apos; comp on every job. Your property is fully protected.
              </p>
              <div className="mt-4 pt-4 border-t border-gray-100">
                <span className="badge-green inline-flex items-center px-3 py-1 rounded-full text-xs font-medium">
                  Full Coverage
                </span>
              </div>
            </div>

            {/* Card 2 - Emergency Response */}
            <div className="card-warm p-8 rounded-2xl hover-lift">
              <div className="icon-container icon-container-amber w-16 h-16 mb-6">
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-charcoal mb-3">24/7 Emergency Response</h3>
              <p className="text-gray-600">
                Storm damage? Dangerous tree? We dispatch crews within 2 hours, any time of day or night.
              </p>
              <div className="mt-4 pt-4 border-t border-gray-100">
                <span className="badge-amber inline-flex items-center px-3 py-1 rounded-full text-xs font-medium">
                  2-Hour Response
                </span>
              </div>
            </div>

            {/* Card 3 - Local Expertise */}
            <div className="card-premium p-8 rounded-2xl hover-lift">
              <div className="icon-container icon-container-teal w-16 h-16 mb-6">
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-charcoal mb-3">Local Expertise</h3>
              <p className="text-gray-600">
                15+ years serving {county || city}. We know local regulations, permit requirements, and tree species.
              </p>
              <div className="mt-4 pt-4 border-t border-gray-100">
                <span className="badge-teal inline-flex items-center px-3 py-1 rounded-full text-xs font-medium">
                  15+ Years
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Neighborhoods - bg-mesh-gradient */}
      {neighborhoods && neighborhoods.length > 0 && (
        <section className="py-16 lg:py-20 bg-mesh-gradient relative">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            {/* Section header with badge */}
            <div className="text-center mb-12">
              <span className="badge-amber inline-flex items-center px-4 py-1.5 rounded-full text-sm font-medium mb-4">
                <svg className="w-4 h-4 mr-1.5" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                </svg>
                Service Areas
              </span>
              <h2 className="text-3xl lg:text-4xl font-bold text-charcoal mb-4">
                Neighborhoods We Serve in {city}
              </h2>
              <div className="decorative-line mx-auto mb-4" />
              <p className="text-gray-600 max-w-2xl mx-auto">
                We proudly serve all neighborhoods throughout {city} and surrounding areas.
              </p>
            </div>

            <div className="glass-cream rounded-2xl p-8">
              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                {neighborhoods.map((neighborhood, index) => (
                  <div
                    key={neighborhood}
                    className="flex items-center gap-3 p-3 rounded-lg hover:bg-white/50 transition-colors group"
                    style={{ animationDelay: `${index * 50}ms` }}
                  >
                    <div className="flex-shrink-0 w-6 h-6 rounded-full bg-cta-green/10 flex items-center justify-center group-hover:bg-cta-green/20 transition-colors">
                      <svg className="w-4 h-4 text-cta-green" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                    </div>
                    <span className="text-gray-700 font-medium">{neighborhood}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>
      )}

      {/* Permit Info - callout-premium style */}
      {permitInfo && (
        <section className="py-16 lg:py-20 bg-gradient-warm relative">
          <div className="absolute inset-0 bg-pattern-diagonal" />

          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto">
              <div className="callout-premium rounded-2xl p-8 lg:p-10">
                {/* Badge header */}
                <div className="flex items-center gap-3 mb-6">
                  <div className="icon-container icon-container-amber w-12 h-12">
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                    </svg>
                  </div>
                  <div>
                    <span className="badge-amber inline-flex items-center px-3 py-1 rounded-full text-xs font-medium mb-1">
                      Permit Information
                    </span>
                    <h2 className="text-2xl font-bold text-charcoal">
                      Tree Removal Permits in {city}, {stateAbbr}
                    </h2>
                  </div>
                </div>

                <p className="text-gray-600 mb-6 leading-relaxed">{permitInfo}</p>

                <div className="callout-success rounded-xl mb-6">
                  <div className="flex items-start gap-3">
                    <svg className="w-6 h-6 text-cta-green flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    <div>
                      <p className="font-semibold text-charcoal mb-1">Need help with permits?</p>
                      <p className="text-gray-600 text-sm">
                        We handle the paperwork for you. Our team is familiar with {county || city} regulations and can guide you through the entire process.
                      </p>
                    </div>
                  </div>
                </div>

                <Button href="/contact" className="btn-primary">
                  Get Permit Assistance
                </Button>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* Testimonial - Enhanced with gradient background */}
      {testimonial && (
        <section className="py-16 lg:py-20 bg-gradient-sage relative overflow-hidden">
          {/* Decorative elements */}
          <div className="absolute top-10 left-10 text-cta-green/10">
            <svg className="w-32 h-32" fill="currentColor" viewBox="0 0 24 24">
              <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
            </svg>
          </div>

          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl mx-auto text-center">
              {/* Badge */}
              <span className="badge-green inline-flex items-center px-4 py-1.5 rounded-full text-sm font-medium mb-6">
                <svg className="w-4 h-4 mr-1.5" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
                Customer Review
              </span>

              {/* Stars with animation */}
              <div className="flex justify-center mb-6">
                {[...Array(5)].map((_, i) => (
                  <svg
                    key={i}
                    className="w-8 h-8 text-amber"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    style={{ animationDelay: `${i * 100}ms` }}
                  >
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>

              {/* Quote */}
              <blockquote className="text-2xl lg:text-3xl text-charcoal font-medium italic mb-6 leading-relaxed">
                &quot;{testimonial.quote}&quot;
              </blockquote>

              {/* Author */}
              <div className="flex items-center justify-center gap-3">
                <div className="w-12 h-12 rounded-full bg-primary-green/10 flex items-center justify-center">
                  <span className="text-primary-green font-bold text-lg">
                    {testimonial.author.charAt(0)}
                  </span>
                </div>
                <div className="text-left">
                  <p className="font-semibold text-charcoal">{testimonial.author}</p>
                  <p className="text-gray-500 text-sm">{city} Resident</p>
                </div>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* CTA Section - Enhanced with pattern and decorative elements */}
      <section className="py-16 lg:py-20 bg-primary-green relative overflow-hidden">
        {/* Background decorations */}
        <div className="absolute inset-0 bg-pattern-dots opacity-10" />
        <div className="absolute -top-20 -right-20 w-80 h-80 rounded-full bg-cta-green/20 blur-3xl" />
        <div className="absolute -bottom-20 -left-20 w-80 h-80 rounded-full bg-teal/20 blur-3xl" />

        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          {/* Badge */}
          <span className="inline-flex items-center gap-2 glass px-4 py-2 rounded-full text-white text-sm font-medium mb-6">
            <span className="w-2 h-2 rounded-full bg-cta-green-light animate-pulse" />
            Free Estimates Available
          </span>

          <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4">
            Ready to Transform Your Property in {city}?
          </h2>

          <div className="decorative-line-warm mx-auto mb-6" />

          <p className="text-white/90 text-lg mb-8 max-w-2xl mx-auto">
            Get your free estimate within 24 hours. No obligation, no pressure. Just honest advice and fair pricing.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
            <Button href="/contact" size="lg" className="bg-white text-primary-green hover:bg-cream hover:shadow-xl transition-all">
              Request Free Quote
            </Button>
            <a
              href="tel:301-844-8429"
              className="inline-flex items-center justify-center px-8 py-3 border-2 border-white text-white text-lg font-semibold rounded-lg hover:bg-white hover:text-primary-green transition-all group"
            >
              <svg className="w-5 h-5 mr-2 group-hover:animate-bounce-subtle" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
              Call 301-844-8429
            </a>
          </div>

          {/* Trust bar */}
          <div className="flex flex-wrap items-center justify-center gap-8 pt-8 border-t border-white/20">
            <div className="flex items-center gap-2 text-white/80">
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
              <span className="text-sm">Free Estimates</span>
            </div>
            <div className="flex items-center gap-2 text-white/80">
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
              <span className="text-sm">No Hidden Fees</span>
            </div>
            <div className="flex items-center gap-2 text-white/80">
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
              <span className="text-sm">Satisfaction Guaranteed</span>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
