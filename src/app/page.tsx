import Image from 'next/image';
import { Button, ServiceCard, BeforeAfterSlider, FAQ, GuaranteeSection, StatsBar, AvailabilityBadge } from '@/components/ui';
import TrustBadges from '@/components/ui/TrustBadges';
import PricingCalculator from '@/components/ui/PricingCalculator';
import { assetPath } from '@/lib/config';

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
        className="relative min-h-[70vh] lg:min-h-[75vh] flex flex-col bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${assetPath('/images/backgrounds/hero-main-landscaping.webp')})` }}
      >
        {/* Overlay */}
        <div className="absolute inset-0 hero-overlay z-0" />

        {/* Decorative Elements */}
        <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
          <div className="absolute -top-20 -right-20 w-96 h-96 bg-cta-green/10 rounded-full blur-3xl"></div>
          <div className="absolute -bottom-20 -left-20 w-96 h-96 bg-primary-green/10 rounded-full blur-3xl"></div>
        </div>

        {/* Content */}
        <div className="relative z-10 flex-1 flex items-center pt-24 pb-8">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center w-full">
            {/* Urgency Badge */}
            <div className="inline-flex items-center gap-2 glass px-5 py-2.5 rounded-full mb-6 animate-fade-in-up">
              <span className="w-2 h-2 bg-cta-green rounded-full animate-pulse"></span>
              <span className="text-white text-sm font-medium">Same-Day Emergency Response Available</span>
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-7xl font-bold text-white mb-5 animate-fade-in-up animation-delay-100 leading-tight">
              Dangerous Tree?
              <br />
              <span className="text-cta-green">Gone Today.</span>
            </h1>
            <p className="text-lg sm:text-xl lg:text-2xl text-white/90 mb-8 max-w-2xl mx-auto animate-fade-in-up animation-delay-200 leading-relaxed">
              15+ years serving DC, Maryland & Virginia.
              <br className="hidden sm:block" />
              Licensed. Insured. Available 24/7.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in-up animation-delay-300">
              <Button href="/contact" size="lg" variant="primary" className="hover-lift shadow-lg shadow-cta-green/25">
                Get Free Estimate
              </Button>
              <a
                href="tel:301-844-8429"
                className="inline-flex items-center justify-center px-8 py-4 bg-white text-primary-green text-lg font-semibold rounded-lg hover:bg-cream hover:shadow-lg transition-all hover-lift whitespace-nowrap"
              >
                <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                Call Now: 301-844-8429
              </a>
            </div>

            {/* Availability Badge */}
            <div className="mt-6 animate-fade-in-up animation-delay-400">
              <AvailabilityBadge />
            </div>
          </div>
        </div>

        {/* Stats Bar - Inside Hero */}
        <div className="relative z-10">
          <StatsBar />
        </div>
      </section>

      {/* ============================================
          TRUST BADGES - Social Proof Strip
          ============================================ */}
      <TrustBadges />

      {/* ============================================
          SECTION 2: SERVICES GRID
          ============================================ */}
      <section className="section-padding bg-white relative overflow-hidden">
        {/* Subtle background pattern */}
        <div className="absolute inset-0 opacity-[0.02] pointer-events-none">
          <div className="absolute inset-0" style={{ backgroundImage: 'radial-gradient(circle at 1px 1px, #2D5A27 1px, transparent 0)', backgroundSize: '40px 40px' }}></div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="text-center mb-14">
            <div className="inline-flex items-center gap-2 bg-primary-green/10 px-4 py-2 rounded-full mb-4">
              <span className="text-primary-green text-sm font-semibold uppercase tracking-wider">What We Do</span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-charcoal mb-4">
              Our Services
            </h2>
            <div className="decorative-line mx-auto mb-6"></div>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Comprehensive tree care and landscaping solutions for residential and commercial properties
            </p>
          </div>

          {/* Asymmetric Editorial Layout */}
          <div className="space-y-6 lg:space-y-8">
            {/* Featured Services - Large Cards */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8">
              {services.slice(0, 2).map((service, index) => (
                <div key={service.title} className="animate-fade-in-up" style={{ animationDelay: `${index * 100}ms` }}>
                  <a href={service.href} className="block card-premium rounded-2xl p-8 lg:p-10 h-full min-h-[280px] group relative overflow-hidden">
                    <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-bl from-cta-green/10 to-transparent rounded-bl-full"></div>
                    <div className="relative z-10">
                      <div className="w-16 h-16 lg:w-20 lg:h-20 bg-gradient-to-br from-cta-green/20 to-primary-green/10 rounded-2xl flex items-center justify-center mb-6 text-primary-green group-hover:scale-110 transition-transform duration-300">
                        <div className="w-10 h-10 lg:w-12 lg:h-12">{service.icon}</div>
                      </div>
                      <h3 className="text-2xl lg:text-3xl font-bold text-charcoal mb-4 group-hover:text-primary-green transition-colors">{service.title}</h3>
                      <p className="text-lg text-gray-600 mb-6 max-w-md">{service.description}</p>
                      <span className="inline-flex items-center text-cta-green font-semibold group-hover:gap-3 gap-2 transition-all">
                        Learn More
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                        </svg>
                      </span>
                    </div>
                  </a>
                </div>
              ))}
            </div>

            {/* Secondary Services - 2x2 Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {services.slice(2).map((service, index) => (
                <div key={service.title} className="animate-fade-in-up" style={{ animationDelay: `${(index + 2) * 100}ms` }}>
                  <ServiceCard
                    title={service.title}
                    description={service.description}
                    href={service.href}
                    icon={service.icon}
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ============================================
          SECTION 3: WHY CHOOSE US
          ============================================ */}
      <section className="section-padding bg-mesh-gradient relative overflow-hidden">
        {/* Subtle background pattern */}
        <div className="absolute inset-0 bg-pattern-diagonal pointer-events-none"></div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="text-center mb-14">
            <div className="inline-flex items-center gap-2 bg-primary-green/10 px-4 py-2 rounded-full mb-4">
              <span className="text-primary-green text-sm font-semibold uppercase tracking-wider">Why Choose Us</span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-charcoal mb-4">
              Why 500+ DMV Homeowners Trust Us
            </h2>
            <div className="decorative-line mx-auto mb-6"></div>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              When your property needs professional care, you deserve a team that shows up on time, does the job right, and leaves your yard spotless.
            </p>
          </div>

          {/* Asymmetric Editorial Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 lg:gap-8">
            {/* Featured Card - Double Width */}
            <div className="lg:col-span-2 bg-gradient-to-br from-white via-white to-sage rounded-2xl p-8 lg:p-12 shadow-lg hover:shadow-xl transition-all duration-300 border border-cta-green/10 relative overflow-hidden group">
              <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-bl from-cta-green/5 to-transparent rounded-bl-full"></div>
              <div className="absolute bottom-0 left-0 w-48 h-48 bg-gradient-to-tr from-primary-green/5 to-transparent rounded-tr-full"></div>
              <div className="relative z-10">
                <div className="w-20 h-20 bg-gradient-to-br from-cta-green to-primary-green rounded-2xl flex items-center justify-center mb-8 shadow-lg group-hover:scale-105 transition-transform">
                  <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
                  </svg>
                </div>
                <h3 className="text-2xl lg:text-3xl font-bold text-charcoal mb-4">Fully Licensed & Insured</h3>
                <p className="text-lg lg:text-xl text-gray-600 mb-6 max-w-xl">
                  $2M liability coverage. Workers&apos; comp on every job. Your property and our crew are protected - giving you complete peace of mind.
                </p>
                <div className="flex flex-wrap gap-4">
                  <span className="inline-flex items-center gap-2 bg-white px-4 py-2 rounded-full text-sm font-medium text-charcoal shadow-sm">
                    <svg className="w-5 h-5 text-cta-green" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    Maryland Tree Expert License
                  </span>
                  <span className="inline-flex items-center gap-2 bg-white px-4 py-2 rounded-full text-sm font-medium text-charcoal shadow-sm">
                    <svg className="w-5 h-5 text-cta-green" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    OSHA Safety Certified
                  </span>
                </div>
              </div>
            </div>

            {/* Stacked Cards - Right Side */}
            <div className="flex flex-col gap-6 lg:gap-8">
              {/* Emergency Response Card */}
              <div className="bg-white rounded-xl p-6 lg:p-8 shadow-sm hover:shadow-lg transition-all duration-300 hover:-translate-y-1 border border-transparent hover:border-cta-green/20 flex-1">
                <div className="w-12 h-12 bg-amber/10 rounded-xl flex items-center justify-center mb-4">
                  <svg className="w-6 h-6 text-amber" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h3 className="text-lg font-bold text-charcoal mb-2">2-Hour Emergency Response</h3>
                <p className="text-gray-600 text-sm mb-3">
                  Tree on your house? Our crews dispatch within 2 hours, 24/7/365.
                </p>
                <ul className="space-y-1.5 text-xs text-gray-500">
                  <li className="flex items-center gap-2">
                    <svg className="w-3.5 h-3.5 text-cta-green" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    Storm damage specialists
                  </li>
                  <li className="flex items-center gap-2">
                    <svg className="w-3.5 h-3.5 text-cta-green" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    Insurance claim assistance
                  </li>
                </ul>
              </div>

              {/* Transparent Pricing Card */}
              <div className="bg-white rounded-xl p-6 lg:p-8 shadow-sm hover:shadow-lg transition-all duration-300 hover:-translate-y-1 border border-transparent hover:border-cta-green/20 flex-1">
                <div className="w-12 h-12 bg-teal/10 rounded-xl flex items-center justify-center mb-4">
                  <svg className="w-6 h-6 text-teal" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4" />
                  </svg>
                </div>
                <h3 className="text-lg font-bold text-charcoal mb-2">No-Surprise Pricing</h3>
                <p className="text-gray-600 text-sm mb-3">
                  Detailed written quotes before work begins. The price we quote is the price you pay.
                </p>
                <ul className="space-y-1.5 text-xs text-gray-500">
                  <li className="flex items-center gap-2">
                    <svg className="w-3.5 h-3.5 text-cta-green" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    Free on-site estimates
                  </li>
                  <li className="flex items-center gap-2">
                    <svg className="w-3.5 h-3.5 text-cta-green" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    Financing available
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ============================================
          SECTION 4: FEATURED PROJECTS (BEFORE/AFTER) - FULL BLEED EDITORIAL
          ============================================ */}
      <section className="py-20 bg-charcoal relative overflow-hidden">
        {/* Background Elements */}
        <div className="absolute inset-0 bg-gradient-to-br from-charcoal via-charcoal to-primary-green/10" />
        <div className="absolute inset-0 bg-pattern-dots opacity-5" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          {/* Header */}
          <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between mb-12">
            <div>
              <span className="inline-flex items-center gap-2 bg-cta-green/20 text-cta-green px-4 py-2 rounded-full text-sm font-semibold mb-4">
                <span className="w-2 h-2 bg-cta-green rounded-full animate-pulse"></span>
                Real Results
              </span>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-2">
                See the Difference
              </h2>
              <p className="text-lg text-white/60 max-w-xl">
                Drag the slider to compare before and after
              </p>
            </div>
            <Button href="/gallery" variant="outline" size="lg" className="mt-6 lg:mt-0 border-white/30 text-white hover:bg-white hover:text-charcoal">
              View All Projects
            </Button>
          </div>

          {/* Editorial Grid - Featured + Supporting */}
          <div className="grid lg:grid-cols-2 gap-6 lg:gap-8">
            {/* Featured Large Project */}
            <div className="lg:row-span-2 rounded-2xl overflow-hidden shadow-2xl group">
              <div className="relative">
                <BeforeAfterSlider
                  beforeImage={assetPath('/images/before-after/overgrown-yard-before.webp')}
                  afterImage={assetPath('/images/before-after/overgrown-yard-after.webp')}
                  beforeAlt="Overgrown backyard before landscaping"
                  afterAlt="Beautiful landscaped backyard"
                />
                <div className="absolute top-4 left-4">
                  <span className="bg-cta-green text-white px-4 py-2 rounded-full text-sm font-bold shadow-lg">
                    Featured
                  </span>
                </div>
              </div>
              <div className="bg-white p-6">
                <h3 className="text-xl font-bold text-charcoal mb-2">Complete Backyard Transformation</h3>
                <p className="text-gray-600 mb-3">Arlington, VA • 2 weeks</p>
                <p className="text-sm text-gray-500">Full redesign including new patio, plantings, and irrigation system.</p>
              </div>
            </div>

            {/* Supporting Projects */}
            <div className="rounded-2xl overflow-hidden shadow-xl bg-white">
              <BeforeAfterSlider
                beforeImage={assetPath('/images/before-after/storm-damage-before.webp')}
                afterImage={assetPath('/images/before-after/storm-damage-after.webp')}
                beforeAlt="Yard with hazardous tree"
                afterAlt="Clean yard after tree removal"
              />
              <div className="p-5">
                <h3 className="font-bold text-charcoal">Emergency Tree Removal</h3>
                <p className="text-sm text-gray-500">Bethesda, MD • Same day</p>
              </div>
            </div>

            <div className="rounded-2xl overflow-hidden shadow-xl bg-white">
              <BeforeAfterSlider
                beforeImage={assetPath('/images/before-after/bare-yard-before.webp')}
                afterImage={assetPath('/images/before-after/bare-yard-after.webp')}
                beforeAlt="Overgrown land before clearing"
                afterAlt="Cleared land ready for development"
              />
              <div className="p-5">
                <h3 className="font-bold text-charcoal">Land Clearing Project</h3>
                <p className="text-sm text-gray-500">Fairfax, VA • 5 days</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ============================================
          SECTION 5: TESTIMONIALS - FEATURED LAYOUT
          ============================================ */}
      <section className="section-padding bg-gradient-to-b from-cream to-white relative overflow-hidden">
        {/* Large decorative quote */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 text-primary-green/5 pointer-events-none">
          <svg className="w-64 h-64" fill="currentColor" viewBox="0 0 24 24">
            <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
          </svg>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="text-center mb-14">
            <div className="inline-flex items-center gap-2 bg-primary-green/10 px-4 py-2 rounded-full mb-4">
              <span className="text-primary-green text-sm font-semibold uppercase tracking-wider">Testimonials</span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-charcoal mb-4">
              What Our Clients Say
            </h2>
            <div className="decorative-line mx-auto mb-6"></div>
          </div>

          {/* Asymmetric Testimonial Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-6 lg:gap-8">
            {/* Featured Testimonial - Large */}
            <div className="md:col-span-2 lg:col-span-3 bg-white rounded-2xl p-8 lg:p-10 shadow-lg border border-primary-green/10 relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-bl from-cta-green/10 to-transparent rounded-bl-full"></div>
              <div className="flex gap-1 mb-6">
                {[...Array(5)].map((_, i) => (
                  <svg key={i} className="w-6 h-6 text-amber" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>
              <blockquote className="text-xl lg:text-2xl text-charcoal/80 leading-relaxed mb-8 relative">
                <span className="text-4xl text-cta-green/30 absolute -top-2 -left-2">&ldquo;</span>
                {testimonials[0].quote}
              </blockquote>
              <div className="flex items-center gap-4">
                <div className="w-14 h-14 rounded-full bg-gradient-to-br from-cta-green to-primary-green flex items-center justify-center text-white font-bold text-lg shadow-lg">
                  {testimonials[0].author.charAt(0)}
                </div>
                <div>
                  <p className="font-bold text-charcoal text-lg">{testimonials[0].author}</p>
                  <p className="text-charcoal/60">{testimonials[0].location}</p>
                </div>
              </div>
            </div>

            {/* Stacked Testimonials */}
            <div className="md:col-span-2 lg:col-span-2 flex flex-col md:flex-row lg:flex-col gap-6">
              {testimonials.slice(1).map((testimonial, index) => (
                <div key={index} className="bg-white rounded-xl p-6 shadow-sm border border-gray-100 hover:shadow-md transition-shadow flex-1 md:w-1/2 lg:w-full">
                  <div className="flex gap-1 mb-3">
                    {[...Array(5)].map((_, i) => (
                      <svg key={i} className="w-4 h-4 text-amber" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                    ))}
                  </div>
                  <p className="text-charcoal/70 text-sm mb-4 line-clamp-4">&ldquo;{testimonial.quote}&rdquo;</p>
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-primary-green/10 flex items-center justify-center text-primary-green font-semibold text-sm">
                      {testimonial.author.charAt(0)}
                    </div>
                    <div>
                      <p className="font-semibold text-charcoal text-sm">{testimonial.author}</p>
                      <p className="text-charcoal/50 text-xs">{testimonial.location}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
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
              <div className="inline-flex items-center gap-2 bg-primary-green/10 px-4 py-2 rounded-full mb-4">
                <span className="text-primary-green text-sm font-semibold uppercase tracking-wider">Service Area</span>
              </div>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-charcoal mb-4">
                Serving the Greater DMV Area
              </h2>
              <div className="decorative-line mb-6"></div>
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
                src={assetPath('/images/locations/washington-dc-featured.webp')}
                alt="Professional landscaping in Washington DC area"
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
          PRICING CALCULATOR SECTION
          ============================================ */}
      <section className="section-padding bg-cream">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Content */}
            <div>
              <div className="inline-flex items-center gap-2 bg-primary-green/10 px-4 py-2 rounded-full mb-4">
                <span className="text-primary-green text-sm font-semibold uppercase tracking-wider">Pricing Tool</span>
              </div>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-charcoal mb-4">
                Get a Quick Price Estimate
              </h2>
              <div className="decorative-line mb-6"></div>
              <p className="text-lg text-gray-600 mb-6">
                Wondering what your project might cost? Use our instant pricing calculator to get a ballpark estimate in seconds. No commitment, no contact info required.
              </p>
              <ul className="space-y-3 mb-8">
                <li className="flex items-start gap-3">
                  <svg className="w-6 h-6 text-cta-green flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  <span className="text-charcoal"><strong>Transparent pricing</strong> - Know what to expect before we visit</span>
                </li>
                <li className="flex items-start gap-3">
                  <svg className="w-6 h-6 text-cta-green flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  <span className="text-charcoal"><strong>No surprises</strong> - Final quotes match our estimates 95% of the time</span>
                </li>
                <li className="flex items-start gap-3">
                  <svg className="w-6 h-6 text-cta-green flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  <span className="text-charcoal"><strong>Competitive rates</strong> - Fair pricing for quality work</span>
                </li>
              </ul>
              <p className="text-sm text-gray-500">
                Want an exact quote? <a href="/contact" className="text-cta-green font-semibold hover:underline">Request a free on-site estimate</a> - we&apos;ll assess your specific situation and provide a detailed written quote.
              </p>
            </div>

            {/* Calculator */}
            <div>
              <PricingCalculator />
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
          <div className="absolute top-1/2 left-1/4 w-20 h-20 border border-white/30 rounded-full animate-float"></div>
          <div className="absolute top-1/3 right-1/4 w-16 h-16 border border-white/20 rounded-full animate-float animation-delay-500"></div>
        </div>

        {/* Gradient overlay for depth */}
        <div className="absolute inset-0 bg-gradient-to-br from-primary-green via-transparent to-charcoal/30"></div>

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
          <p className="text-white/70 mb-4">
            Join 500+ satisfied homeowners who chose Ruben & Sons.
          </p>

          {/* Response Time Promise */}
          <div className="inline-flex items-center gap-2 bg-amber-500/20 backdrop-blur-sm px-4 py-2 rounded-full mb-8">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-amber-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-amber-400"></span>
            </span>
            <span className="text-amber-100 text-sm font-medium">Winter booking filling fast - Response within 2 hours</span>
          </div>

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
