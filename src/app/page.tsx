import Image from 'next/image';
import { Button, ServiceCard, TestimonialCard, BeforeAfterSlider, StatsBar, FAQ, GuaranteeSection } from '@/components/ui';

// Service Icons as SVG components
const EmergencyIcon = () => (
  <svg fill="none" stroke="currentColor" viewBox="0 0 24 24" className="w-full h-full">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
  </svg>
);

const TreeCareIcon = () => (
  <svg fill="none" stroke="currentColor" viewBox="0 0 24 24" className="w-full h-full">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
  </svg>
);

const LandClearingIcon = () => (
  <svg fill="none" stroke="currentColor" viewBox="0 0 24 24" className="w-full h-full">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
  </svg>
);

const LandscapingIcon = () => (
  <svg fill="none" stroke="currentColor" viewBox="0 0 24 24" className="w-full h-full">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
  </svg>
);

const WinterIcon = () => (
  <svg fill="none" stroke="currentColor" viewBox="0 0 24 24" className="w-full h-full">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
  </svg>
);

const MaintenanceIcon = () => (
  <svg fill="none" stroke="currentColor" viewBox="0 0 24 24" className="w-full h-full">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
  </svg>
);

// Trust Badge Icons
const ShieldIcon = () => (
  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
  </svg>
);

const ClockIcon = () => (
  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
  </svg>
);

const CheckIcon = () => (
  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
  </svg>
);

// Services Data
const services = [
  {
    title: 'Emergency Tree Removal',
    description: '24/7 response for storm damage and hazardous trees',
    href: '/services/tree-removal',
    icon: <EmergencyIcon />,
  },
  {
    title: 'Tree Care & Pruning',
    description: 'Expert pruning, cabling, and health assessments',
    href: '/services/tree-care',
    icon: <TreeCareIcon />,
  },
  {
    title: 'Land Clearing',
    description: 'Site preparation for development projects',
    href: '/services/land-clearing',
    icon: <LandClearingIcon />,
  },
  {
    title: 'Landscaping',
    description: 'Planting, mulching, and softscape design',
    href: '/services/landscaping',
    icon: <LandscapingIcon />,
  },
  {
    title: 'Winter Preparation',
    description: 'Protect your landscape from freeze damage',
    href: '/services/winterization',
    icon: <WinterIcon />,
  },
  {
    title: 'Maintenance Programs',
    description: 'Year-round care contracts',
    href: '/services/maintenance',
    icon: <MaintenanceIcon />,
  },
];

// Testimonials Data - More specific and trust-building
const testimonials = [
  {
    quote:
      'A 60-foot oak was leaning toward our house after a storm. Ruben\'s team arrived within 90 minutes, carefully removed it with a crane, and our yard looked better than before. They even helped with our insurance claim paperwork. Worth every penny.',
    author: 'Michael R.',
    location: 'Bethesda, MD',
  },
  {
    quote:
      'We\'ve used Ruben & Sons for 3 years now - seasonal cleanups, tree pruning, and a complete backyard redesign. They treat our property like it\'s their own. The crew is always on time and the pricing is transparent. No surprises.',
    author: 'Sarah K.',
    location: 'Silver Spring, MD',
  },
  {
    quote:
      'After the derecho knocked down two trees blocking our driveway, I called 5 companies. Ruben & Sons was the only one who answered at 11pm and had a crew here by 6am. They cleared everything and ground the stumps the same day. True professionals.',
    author: 'David P.',
    location: 'Arlington, VA',
  },
];

// Service Areas
const serviceAreas = [
  'Washington DC',
  'Arlington, VA',
  'Alexandria, VA',
  'Bethesda, MD',
  'Silver Spring, MD',
  'Rockville, MD',
  'Fairfax, VA',
  'Falls Church, VA',
  'Chevy Chase, MD',
  'McLean, VA',
  'Tysons, VA',
  'Gaithersburg, MD',
];

export default function Home() {
  return (
    <main>
      {/* ============================================
          SECTION 1: HERO
          ============================================ */}
      <section
        className="relative min-h-screen flex items-center justify-center bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: 'url(/ruben-sons-landscaping/hero-background.png)' }}
      >
        {/* Overlay */}
        <div className="absolute inset-0 hero-overlay z-0" />

        {/* Content */}
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center py-20">
          {/* Urgency Badge */}
          <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full mb-6 animate-fade-in-up">
            <span className="w-2 h-2 bg-cta-green rounded-full animate-pulse"></span>
            <span className="text-white/90 text-sm font-medium">Same-Day Emergency Response Available</span>
          </div>

          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6 animate-fade-in-up animation-delay-100">
            Dangerous Tree?
            <br />
            <span className="text-cta-green">We Handle It Today.</span>
          </h1>
          <p className="text-xl sm:text-2xl text-white/90 mb-4 max-w-3xl mx-auto animate-fade-in-up animation-delay-200">
            DMV&apos;s trusted tree service for 15+ years. Licensed, insured, and ready 24/7.
          </p>
          <p className="text-lg text-white/70 mb-10 max-w-2xl mx-auto animate-fade-in-up animation-delay-200">
            From emergency removals to complete landscape transformations — get your free estimate in 24 hours.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16 animate-fade-in-up animation-delay-300">
            <Button href="/contact" size="lg" variant="primary">
              Get Free Estimate
            </Button>
            <Button href="tel:301-844-8429" size="lg" variant="outline">
              <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
              Call Now: 301-844-8429
            </Button>
          </div>

          {/* Trust Badges */}
          <div className="flex flex-wrap justify-center gap-6 sm:gap-12 animate-fade-in-up animation-delay-400">
            <div className="flex items-center gap-2 text-white">
              <ShieldIcon />
              <span className="text-sm sm:text-base font-medium">Licensed & Insured</span>
            </div>
            <div className="flex items-center gap-2 text-white">
              <ClockIcon />
              <span className="text-sm sm:text-base font-medium">24/7 Emergency</span>
            </div>
            <div className="flex items-center gap-2 text-white">
              <CheckIcon />
              <span className="text-sm sm:text-base font-medium">Free Estimates</span>
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
          <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
        </div>
      </section>

      {/* ============================================
          STATS BAR - Social Proof
          ============================================ */}
      <StatsBar />

      {/* ============================================
          SECTION 2: SERVICES GRID
          ============================================ */}
      <section className="section-padding bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-charcoal mb-4">
              Our Services
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Comprehensive tree care and landscaping solutions for residential and commercial properties
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            {services.map((service) => (
              <ServiceCard
                key={service.title}
                title={service.title}
                description={service.description}
                href={service.href}
                icon={service.icon}
              />
            ))}
          </div>
        </div>
      </section>

      {/* ============================================
          SECTION 3: WHY CHOOSE US
          ============================================ */}
      <section className="section-padding bg-cream">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-charcoal mb-4">
              Why 500+ DMV Homeowners Trust Us
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              When your property needs professional care, you deserve a team that shows up on time, does the job right, and leaves your yard spotless.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Certified Professionals */}
            <div className="bg-white rounded-xl p-8 shadow-sm hover:shadow-md transition-shadow">
              <div className="w-14 h-14 bg-primary-green/10 rounded-xl flex items-center justify-center mb-6">
                <svg className="w-7 h-7 text-primary-green" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-charcoal mb-3">Fully Licensed & Insured</h3>
              <p className="text-gray-600 mb-4">
                $2M liability coverage. Workers&apos; comp on every job. Your property and our crew are protected.
              </p>
              <ul className="space-y-2 text-sm text-gray-500">
                <li className="flex items-center gap-2">
                  <svg className="w-4 h-4 text-cta-green" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  Maryland Tree Expert License
                </li>
                <li className="flex items-center gap-2">
                  <svg className="w-4 h-4 text-cta-green" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  OSHA Safety Certified
                </li>
              </ul>
            </div>

            {/* 24/7 Emergency Service */}
            <div className="bg-white rounded-xl p-8 shadow-sm hover:shadow-md transition-shadow">
              <div className="w-14 h-14 bg-primary-green/10 rounded-xl flex items-center justify-center mb-6">
                <svg className="w-7 h-7 text-primary-green" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-charcoal mb-3">2-Hour Emergency Response</h3>
              <p className="text-gray-600 mb-4">
                Tree on your house? Blocking your driveway? Our crews are dispatched within 2 hours, 24/7/365.
              </p>
              <ul className="space-y-2 text-sm text-gray-500">
                <li className="flex items-center gap-2">
                  <svg className="w-4 h-4 text-cta-green" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  Storm damage specialists
                </li>
                <li className="flex items-center gap-2">
                  <svg className="w-4 h-4 text-cta-green" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  Insurance claim assistance
                </li>
              </ul>
            </div>

            {/* Transparent Pricing */}
            <div className="bg-white rounded-xl p-8 shadow-sm hover:shadow-md transition-shadow">
              <div className="w-14 h-14 bg-primary-green/10 rounded-xl flex items-center justify-center mb-6">
                <svg className="w-7 h-7 text-primary-green" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-charcoal mb-3">No-Surprise Pricing</h3>
              <p className="text-gray-600 mb-4">
                Detailed written quotes before any work begins. The price we quote is the price you pay. Period.
              </p>
              <ul className="space-y-2 text-sm text-gray-500">
                <li className="flex items-center gap-2">
                  <svg className="w-4 h-4 text-cta-green" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  Free on-site estimates
                </li>
                <li className="flex items-center gap-2">
                  <svg className="w-4 h-4 text-cta-green" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  Financing available
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* ============================================
          SECTION 4: FEATURED PROJECTS (BEFORE/AFTER)
          ============================================ */}
      <section className="section-padding bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-charcoal mb-4">
              Our Work
            </h2>
            <p className="text-lg text-gray-600">
              See the transformation
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <BeforeAfterSlider
              beforeImage="https://images.unsplash.com/photo-1416879595882-3373a0480b5b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
              afterImage="https://images.unsplash.com/photo-1558904541-efa843a96f01?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
              beforeAlt="Overgrown backyard before landscaping"
              afterAlt="Beautiful landscaped backyard"
              title="Complete Backyard Transformation"
            />
            <BeforeAfterSlider
              beforeImage="https://images.unsplash.com/photo-1598902108854-10e335adac99?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
              afterImage="https://images.unsplash.com/photo-1585320806297-9794b3e4eeae?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
              beforeAlt="Yard with hazardous tree"
              afterAlt="Clean yard after tree removal"
              title="Emergency Tree Removal"
            />
            <BeforeAfterSlider
              beforeImage="https://images.unsplash.com/photo-1500382017468-9049fed747ef?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
              afterImage="https://images.unsplash.com/photo-1560749003-f4b1e17e2dff?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
              beforeAlt="Overgrown land before clearing"
              afterAlt="Cleared land ready for development"
              title="Land Clearing Project"
            />
          </div>

          <div className="text-center mt-12">
            <Button href="/gallery" variant="secondary" size="lg">
              View All Projects
            </Button>
          </div>
        </div>
      </section>

      {/* ============================================
          SECTION 5: TESTIMONIALS
          ============================================ */}
      <section className="section-padding bg-cream">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-charcoal mb-4">
              What Our Clients Say
            </h2>
            <p className="text-lg text-gray-600">
              Trusted by homeowners across the DMV
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <TestimonialCard
                key={index}
                quote={testimonial.quote}
                author={testimonial.author}
                location={testimonial.location}
                rating={5}
              />
            ))}
          </div>
        </div>
      </section>

      {/* ============================================
          GUARANTEE SECTION - Risk Reversal
          ============================================ */}
      <GuaranteeSection />

      {/* ============================================
          SECTION 6: SERVICE AREA
          ============================================ */}
      <section className="section-padding bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Content */}
            <div>
              <h2 className="text-3xl sm:text-4xl font-bold text-charcoal mb-6">
                Serving the Greater DMV Area
              </h2>
              <p className="text-lg text-gray-600 mb-8">
                Ruben & Sons Landscaping proudly serves homeowners and businesses throughout Washington DC, Maryland, and Virginia. Our team is familiar with local regulations, climate conditions, and the unique landscaping needs of the DMV region.
              </p>

              <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                {serviceAreas.map((area) => (
                  <div key={area} className="flex items-center gap-2">
                    <svg className="w-4 h-4 text-cta-green flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    <span className="text-charcoal text-sm">{area}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Map Placeholder */}
            <div className="relative h-80 lg:h-96 bg-gray-100 rounded-xl overflow-hidden shadow-lg">
              <Image
                src="https://images.unsplash.com/photo-1569336415962-a4bd9f69cd83?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                alt="Map of DMV service area"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
              <div className="absolute inset-0 bg-primary-green/20 flex items-center justify-center">
                <div className="bg-white/95 px-6 py-4 rounded-lg shadow-lg text-center">
                  <p className="font-bold text-charcoal text-lg">DC - MD - VA</p>
                  <p className="text-gray-600 text-sm">Full Coverage Area</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ============================================
          FAQ SECTION - Objection Handling
          ============================================ */}
      <FAQ />

      {/* ============================================
          SECTION 7: FINAL CTA
          ============================================ */}
      <section className="section-padding bg-primary-green relative overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 left-0 w-40 h-40 border-2 border-white rounded-full -translate-x-1/2 -translate-y-1/2"></div>
          <div className="absolute bottom-0 right-0 w-60 h-60 border-2 border-white rounded-full translate-x-1/3 translate-y-1/3"></div>
        </div>

        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          {/* Urgency Badge */}
          <div className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full mb-6">
            <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            <span className="text-white text-sm font-medium">Most quotes delivered within 24 hours</span>
          </div>

          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
            Get Your Free Estimate Today
          </h2>
          <p className="text-xl text-white/90 mb-4 max-w-2xl mx-auto">
            No pressure. No obligation. Just honest advice from professionals who&apos;ve been serving the DMV for 15+ years.
          </p>
          <p className="text-white/70 mb-10">
            Join 500+ satisfied homeowners who chose Ruben & Sons.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button href="/contact" size="lg" className="bg-white text-primary-green hover:bg-cream font-bold shadow-lg">
              Request Free Quote
            </Button>
            <a
              href="tel:301-844-8429"
              className="inline-flex items-center justify-center px-8 py-3 bg-white/10 backdrop-blur-sm border-2 border-white text-white text-lg font-semibold rounded-lg hover:bg-white hover:text-primary-green transition-all"
            >
              <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
              Call Now: 301-844-8429
            </a>
          </div>

          {/* Trust Signals */}
          <div className="mt-12 pt-8 border-t border-white/20 flex flex-wrap justify-center gap-8 text-white/80 text-sm">
            <div className="flex items-center gap-2">
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
              <span>100% Satisfaction Guarantee</span>
            </div>
            <div className="flex items-center gap-2">
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
              <span>Licensed & Insured</span>
            </div>
            <div className="flex items-center gap-2">
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
              <span>No Hidden Fees</span>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
