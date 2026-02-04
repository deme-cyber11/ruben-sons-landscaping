import type { Metadata } from 'next'
import Link from 'next/link'
import Image from 'next/image'

export const metadata: Metadata = {
  title: 'About Us | Ruben & Sons Landscaping',
  description: 'Family-owned tree care and landscaping company serving Washington DC, Maryland, and Virginia. Licensed, insured, and committed to quality.',
}

const values = [
  {
    title: 'Quality Workmanship',
    description: 'We take pride in every project, big or small. Our team is trained to deliver exceptional results that exceed expectations.',
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
      </svg>
    ),
    iconClass: 'icon-container-green',
  },
  {
    title: 'Customer First',
    description: 'Your satisfaction is our priority. We listen to your needs, communicate clearly, and stand behind our work.',
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
      </svg>
    ),
    iconClass: 'icon-container-amber',
  },
  {
    title: 'Safety & Professionalism',
    description: 'Our team follows industry best practices and safety protocols. We are fully licensed and insured for your protection.',
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
      </svg>
    ),
    iconClass: 'icon-container-teal',
  },
]

export default function AboutPage() {
  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="relative h-[50vh] min-h-[400px] flex items-center overflow-hidden">
        <Image
          src="https://images.unsplash.com/photo-1558904541-efa843a96f01?w=1600&q=80"
          alt="Ruben & Sons Landscaping team"
          fill
          className="object-cover"
          sizes="100vw"
          priority
        />
        <div className="absolute inset-0 hero-overlay" />
        {/* Decorative elements */}
        <div className="decorative-circle absolute -top-20 -right-20 w-96 h-96 opacity-30 animate-float" />
        <div className="decorative-blob absolute -bottom-10 -left-10 w-72 h-72 opacity-20" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-white text-center">
          <span className="badge-green inline-block px-4 py-2 rounded-full text-sm font-medium mb-4 animate-fade-in-down">
            Family-Owned Since Day One
          </span>
          <h1 className="text-4xl md:text-5xl font-bold mb-4 animate-fade-in-up">About Ruben & Sons</h1>
          <p className="text-xl text-white/90 max-w-2xl mx-auto animate-fade-in-up animation-delay-200">
            Family-owned and operated, serving the DMV with pride.
          </p>
          <div className="decorative-line-long mx-auto mt-6 animate-scale-in animation-delay-400" />
        </div>
      </section>

      {/* Our Story */}
      <section className="py-20 bg-gradient-sage relative overflow-hidden">
        {/* Background pattern */}
        <div className="absolute inset-0 bg-pattern-dots-light opacity-50" />
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="text-center mb-8">
            <span className="badge-teal inline-block px-4 py-2 rounded-full text-sm font-medium mb-4 animate-fade-in-up">
              Our Journey
            </span>
            <h2 className="text-3xl font-bold text-charcoal mb-4 animate-fade-in-up animation-delay-100">Our Story</h2>
            <div className="decorative-line mx-auto animate-scale-in animation-delay-200" />
          </div>
          <div className="card-premium rounded-2xl p-8 md:p-10 animate-fade-in-up animation-delay-300">
            <div className="prose prose-lg max-w-none text-charcoal/70">
              <p>
                Ruben & Sons Landscaping is a family-owned business dedicated to providing exceptional tree care and landscaping services throughout the Washington DC, Maryland, and Virginia area.
              </p>
              <p>
                We understand that your property is one of your most valuable investments. That&apos;s why we approach every job with the same care and attention we would give our own home. From emergency tree removal to complete landscape transformations, our experienced team delivers results you can trust.
              </p>
              <p>
                As a local business, we take pride in building lasting relationships with our clients. Many of our customers have been with us for years, trusting us to maintain their properties through every season.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Our Values */}
      <section className="py-20 bg-mesh-gradient relative overflow-hidden">
        {/* Decorative elements */}
        <div className="decorative-blob absolute top-20 right-0 w-64 h-64 opacity-30 animate-float" />
        <div className="decorative-circle absolute bottom-10 left-10 w-48 h-48 opacity-20" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="text-center mb-12">
            <span className="badge-amber inline-block px-4 py-2 rounded-full text-sm font-medium mb-4 animate-fade-in-up">
              What We Stand For
            </span>
            <h2 className="text-3xl font-bold text-charcoal mb-4 animate-fade-in-up animation-delay-100">Our Values</h2>
            <div className="decorative-line-warm mx-auto animate-scale-in animation-delay-200" />
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {values.map((value, index) => (
              <div
                key={value.title}
                className={`card-premium rounded-2xl p-8 text-center animate-fade-in-up animation-delay-${(index + 1) * 200}`}
              >
                <div className={`icon-container w-16 h-16 ${value.iconClass} mx-auto mb-4`}>
                  {value.icon}
                </div>
                <h3 className="text-xl font-semibold text-charcoal mb-2">{value.title}</h3>
                <p className="text-charcoal/70">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us - New Section */}
      <section className="py-20 bg-gradient-warm relative">
        <div className="absolute inset-0 bg-pattern-diagonal" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="text-center mb-12">
            <span className="badge-green inline-block px-4 py-2 rounded-full text-sm font-medium mb-4 animate-fade-in-up">
              The Difference
            </span>
            <h2 className="text-3xl font-bold text-charcoal mb-4 animate-fade-in-up animation-delay-100">Why Choose Us</h2>
            <div className="decorative-line mx-auto animate-scale-in animation-delay-200" />
          </div>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="callout-success animate-slide-in-left">
              <div className="flex items-start gap-4">
                <div className="icon-container icon-container-green w-12 h-12 flex-shrink-0">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <div>
                  <h3 className="font-bold text-charcoal text-lg mb-2">Local Expertise</h3>
                  <p className="text-charcoal/70">We know the DMV area inside and out. Our team understands local tree species, soil conditions, and seasonal challenges.</p>
                </div>
              </div>
            </div>
            <div className="callout-warning animate-slide-in-right">
              <div className="flex items-start gap-4">
                <div className="icon-container icon-container-amber w-12 h-12 flex-shrink-0">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <div>
                  <h3 className="font-bold text-charcoal text-lg mb-2">Rapid Response</h3>
                  <p className="text-charcoal/70">Emergency services available 24/7. When storms strike, we&apos;re ready to help protect your property.</p>
                </div>
              </div>
            </div>
            <div className="callout-premium animate-slide-in-left animation-delay-200">
              <div className="flex items-start gap-4">
                <div className="icon-container icon-container-teal w-12 h-12 flex-shrink-0">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                  </svg>
                </div>
                <div>
                  <h3 className="font-bold text-charcoal text-lg mb-2">Family Values</h3>
                  <p className="text-charcoal/70">As a family business, we treat every customer like family. Your satisfaction is personal to us.</p>
                </div>
              </div>
            </div>
            <div className="callout-success animate-slide-in-right animation-delay-200">
              <div className="flex items-start gap-4">
                <div className="icon-container icon-container-green w-12 h-12 flex-shrink-0">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <div>
                  <h3 className="font-bold text-charcoal text-lg mb-2">Guaranteed Quality</h3>
                  <p className="text-charcoal/70">We stand behind every project with our quality guarantee. If you&apos;re not happy, we&apos;ll make it right.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Credentials */}
      <section className="py-20 bg-gradient-sage relative">
        <div className="absolute inset-0 bg-pattern-grid opacity-50" />
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative">
          <span className="badge-teal inline-block px-4 py-2 rounded-full text-sm font-medium mb-4 animate-fade-in-up">
            Trust & Reliability
          </span>
          <h2 className="text-3xl font-bold text-charcoal mb-8 animate-fade-in-up animation-delay-100">Our Credentials</h2>
          <div className="decorative-line mx-auto mb-10 animate-scale-in animation-delay-200" />
          <div className="flex flex-wrap justify-center gap-6">
            <div className="card-premium flex items-center gap-3 px-6 py-4 rounded-lg hover-lift animate-fade-in-up animation-delay-300">
              <div className="icon-container icon-container-green w-10 h-10">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
              </div>
              <span className="font-semibold text-charcoal">Licensed & Insured</span>
            </div>
            <div className="card-warm flex items-center gap-3 px-6 py-4 rounded-lg hover-lift animate-fade-in-up animation-delay-400">
              <div className="icon-container icon-container-amber w-10 h-10">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
              </div>
              <span className="font-semibold text-charcoal">DMV Coverage</span>
            </div>
            <div className="card-premium flex items-center gap-3 px-6 py-4 rounded-lg hover-lift animate-fade-in-up animation-delay-500">
              <div className="icon-container icon-container-teal w-10 h-10">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
              </div>
              <span className="font-semibold text-charcoal">24/7 Emergency</span>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-primary-green py-16 relative overflow-hidden">
        {/* Decorative elements */}
        <div className="decorative-circle absolute -top-20 -left-20 w-80 h-80 opacity-10" />
        <div className="decorative-blob absolute -bottom-10 -right-10 w-64 h-64 opacity-10" />
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative">
          <span className="inline-block px-4 py-2 rounded-full text-sm font-medium mb-4 bg-white/20 text-white animate-fade-in-down">
            Get Started Today
          </span>
          <h2 className="text-3xl font-bold text-white mb-4 animate-fade-in-up">Ready to Work With Us?</h2>
          <p className="text-white/90 text-lg mb-8 animate-fade-in-up animation-delay-100">
            Get your free estimate and experience the Ruben & Sons difference.
          </p>
          <div className="decorative-line-long mx-auto mb-8 opacity-50 animate-scale-in animation-delay-200" />
          <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in-up animation-delay-300">
            <Link
              href="/contact"
              className="btn-secondary inline-flex items-center justify-center px-8 py-4 font-semibold rounded-lg"
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
