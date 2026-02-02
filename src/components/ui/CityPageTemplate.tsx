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
  },
  {
    title: 'Tree Care & Pruning',
    description: 'Expert trimming, cabling, and health assessments',
    href: '/services/tree-care',
  },
  {
    title: 'Land Clearing',
    description: 'Site preparation for construction and development',
    href: '/services/land-clearing',
  },
  {
    title: 'Landscaping',
    description: 'Design, planting, and softscape installation',
    href: '/services/landscaping',
  },
  {
    title: 'Seasonal Maintenance',
    description: 'Year-round care programs and winterization',
    href: '/services/maintenance',
  },
];

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
      {/* Hero Section */}
      <section className="bg-primary-green text-white py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 bg-white/10 px-4 py-2 rounded-full mb-6">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
              </svg>
              <span className="text-sm font-medium">Serving {city}, {stateAbbr}</span>
            </div>

            <h1 className="text-4xl sm:text-5xl font-bold mb-6">
              Tree Service & Landscaping in {city}, {stateAbbr}
            </h1>

            <p className="text-xl text-white/90 mb-8">
              {description}
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button href="/contact" size="lg" className="bg-white text-primary-green hover:bg-cream">
                Get Free Estimate
              </Button>
              <Button href="tel:301-844-8429" size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-primary-green">
                Call 301-844-8429
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-charcoal mb-4">
            Our Services in {city}
          </h2>
          <p className="text-gray-600 mb-8 max-w-2xl">
            From emergency tree removal to complete landscape transformations, we provide comprehensive services to {city} homeowners and businesses.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service) => (
              <Link
                key={service.title}
                href={service.href}
                className="group p-6 bg-cream rounded-xl hover:bg-primary-green hover:text-white transition-all duration-300"
              >
                <h3 className="text-lg font-semibold text-charcoal group-hover:text-white mb-2">
                  {service.title}
                </h3>
                <p className="text-gray-600 group-hover:text-white/80 text-sm">
                  {service.description}
                </p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-16 bg-cream">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-charcoal mb-8">
            Why {city} Homeowners Choose Us
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-xl">
              <div className="w-12 h-12 bg-primary-green/10 rounded-lg flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-primary-green" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-charcoal mb-2">Licensed & Insured</h3>
              <p className="text-gray-600 text-sm">
                $2M liability coverage and workers&apos; comp on every job. Your property is protected.
              </p>
            </div>

            <div className="bg-white p-6 rounded-xl">
              <div className="w-12 h-12 bg-primary-green/10 rounded-lg flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-primary-green" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-charcoal mb-2">24/7 Emergency Response</h3>
              <p className="text-gray-600 text-sm">
                Storm damage? Dangerous tree? We dispatch crews within 2 hours, any time of day.
              </p>
            </div>

            <div className="bg-white p-6 rounded-xl">
              <div className="w-12 h-12 bg-primary-green/10 rounded-lg flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-primary-green" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-charcoal mb-2">Local Expertise</h3>
              <p className="text-gray-600 text-sm">
                15+ years serving {county || city}. We know local regulations and tree species.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Neighborhoods */}
      {neighborhoods && neighborhoods.length > 0 && (
        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-charcoal mb-6">
              Neighborhoods We Serve in {city}
            </h2>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
              {neighborhoods.map((neighborhood) => (
                <div key={neighborhood} className="flex items-center gap-2 text-gray-700">
                  <svg className="w-4 h-4 text-cta-green flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  <span>{neighborhood}</span>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Permit Info */}
      {permitInfo && (
        <section className="py-16 bg-cream">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="bg-white p-8 rounded-xl">
              <h2 className="text-2xl font-bold text-charcoal mb-4">
                Tree Removal Permits in {city}, {stateAbbr}
              </h2>
              <p className="text-gray-600 mb-4">{permitInfo}</p>
              <p className="text-gray-600">
                <strong>Need help with permits?</strong> We handle the paperwork for you. Our team is familiar with {county || city} regulations and can guide you through the process.
              </p>
            </div>
          </div>
        </section>
      )}

      {/* Testimonial */}
      {testimonial && (
        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl mx-auto text-center">
              <div className="flex justify-center mb-4">
                {[...Array(5)].map((_, i) => (
                  <svg key={i} className="w-6 h-6 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>
              <blockquote className="text-xl text-gray-700 italic mb-4">
                &quot;{testimonial.quote}&quot;
              </blockquote>
              <p className="text-gray-500 font-medium">— {testimonial.author}, {city}</p>
            </div>
          </div>
        </section>
      )}

      {/* CTA Section */}
      <section className="py-16 bg-primary-green">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">
            Ready to Get Started in {city}?
          </h2>
          <p className="text-white/90 text-lg mb-8">
            Get your free estimate within 24 hours. No obligation, no pressure.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button href="/contact" size="lg" className="bg-white text-primary-green hover:bg-cream">
              Request Free Quote
            </Button>
            <a
              href="tel:301-844-8429"
              className="inline-flex items-center justify-center px-8 py-3 border-2 border-white text-white text-lg font-semibold rounded-lg hover:bg-white hover:text-primary-green transition-all"
            >
              <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
              Call 301-844-8429
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}
