import type { Metadata } from 'next'
import Link from 'next/link'
import { BeforeAfterSlider } from '@/components/ui'

export const metadata: Metadata = {
  title: 'Project Gallery | Ruben & Sons Landscaping',
  description: 'See our before and after transformations. Tree removal, landscaping, and land clearing projects in Washington DC, Maryland, and Virginia.',
}

const projects = [
  {
    title: 'Emergency Oak Removal',
    location: 'Bethesda, MD',
    category: 'Tree Removal',
    badge: 'badge-green',
    before: 'https://images.unsplash.com/photo-1598902468171-680e426a4d58?w=800&q=80',
    after: 'https://images.unsplash.com/photo-1558904541-efa843a96f01?w=800&q=80',
  },
  {
    title: 'Backyard Transformation',
    location: 'Arlington, VA',
    category: 'Landscaping',
    badge: 'badge-teal',
    before: 'https://images.unsplash.com/photo-1416879595882-3373a0480b5b?w=800&q=80',
    after: 'https://images.unsplash.com/photo-1585320806297-9794b3e4eeae?w=800&q=80',
  },
  {
    title: 'Lot Clearing for New Construction',
    location: 'Fairfax, VA',
    category: 'Land Clearing',
    badge: 'badge-amber',
    before: 'https://images.unsplash.com/photo-1500382017468-9049fed747ef?w=800&q=80',
    after: 'https://images.unsplash.com/photo-1500076656116-558758c991c1?w=800&q=80',
  },
  {
    title: 'Storm Damage Cleanup',
    location: 'Silver Spring, MD',
    category: 'Tree Removal',
    badge: 'badge-green',
    before: 'https://images.unsplash.com/photo-1527482797697-8795b05a13fe?w=800&q=80',
    after: 'https://images.unsplash.com/photo-1558904541-efa843a96f01?w=800&q=80',
  },
  {
    title: 'Front Yard Redesign',
    location: 'Alexandria, VA',
    category: 'Landscaping',
    badge: 'badge-teal',
    before: 'https://images.unsplash.com/photo-1416879595882-3373a0480b5b?w=800&q=80',
    after: 'https://images.unsplash.com/photo-1585320806297-9794b3e4eeae?w=800&q=80',
  },
  {
    title: 'Commercial Property Clearing',
    location: 'Washington, DC',
    category: 'Land Clearing',
    badge: 'badge-amber',
    before: 'https://images.unsplash.com/photo-1500382017468-9049fed747ef?w=800&q=80',
    after: 'https://images.unsplash.com/photo-1500076656116-558758c991c1?w=800&q=80',
  },
]

const categories = [
  { name: 'All Projects', icon: 'grid', iconClass: 'icon-container-green' },
  { name: 'Tree Removal', icon: 'tree', iconClass: 'icon-container-green' },
  { name: 'Landscaping', icon: 'flower', iconClass: 'icon-container-teal' },
  { name: 'Land Clearing', icon: 'land', iconClass: 'icon-container-amber' },
]

export default function GalleryPage() {
  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="bg-primary-green py-20 relative overflow-hidden">
        {/* Decorative elements */}
        <div className="decorative-circle absolute -top-20 -right-20 w-96 h-96 opacity-10 animate-float" />
        <div className="decorative-blob absolute -bottom-10 -left-10 w-72 h-72 opacity-10" />
        <div className="absolute inset-0 bg-pattern-dots opacity-5" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative">
          <span className="inline-block px-4 py-2 rounded-full text-sm font-medium mb-4 bg-white/20 text-white animate-fade-in-down">
            Portfolio
          </span>
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4 animate-fade-in-up">Our Work</h1>
          <p className="text-xl text-white/80 max-w-2xl mx-auto animate-fade-in-up animation-delay-100">
            See the transformation. Drag the slider to compare before and after on each project.
          </p>
          <div className="decorative-line-long mx-auto mt-6 opacity-50 animate-scale-in animation-delay-200" />
        </div>
      </section>

      {/* Category Filter Bar */}
      <section className="py-8 bg-gradient-warm sticky top-20 z-40 border-b border-cream-dark">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap justify-center gap-4">
            {categories.map((category, index) => (
              <button
                key={category.name}
                className={`card-premium flex items-center gap-2 px-5 py-3 rounded-lg hover-lift transition-all animate-fade-in-up`}
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className={`icon-container ${category.iconClass} w-8 h-8`}>
                  {category.icon === 'grid' && (
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6zM14 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V6zM4 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2zM14 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z" />
                    </svg>
                  )}
                  {category.icon === 'tree' && (
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
                    </svg>
                  )}
                  {category.icon === 'flower' && (
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                    </svg>
                  )}
                  {category.icon === 'land' && (
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  )}
                </div>
                <span className="font-medium text-charcoal text-sm">{category.name}</span>
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery Grid */}
      <section className="py-20 bg-mesh-gradient relative">
        <div className="absolute inset-0 bg-pattern-dots-light opacity-30" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          {/* Section Header */}
          <div className="text-center mb-12">
            <span className="badge-green inline-block px-4 py-2 rounded-full text-sm font-medium mb-4 animate-fade-in-up">
              Featured Projects
            </span>
            <h2 className="text-3xl font-bold text-charcoal mb-4 animate-fade-in-up animation-delay-100">Before & After Gallery</h2>
            <div className="decorative-line mx-auto animate-scale-in animation-delay-200" />
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <div
                key={project.title}
                className="card-premium rounded-2xl overflow-hidden hover-lift animate-fade-in-up"
                style={{ animationDelay: `${(index + 1) * 100}ms` }}
              >
                <div className="relative">
                  <BeforeAfterSlider
                    beforeImage={project.before}
                    afterImage={project.after}
                    beforeAlt={`${project.title} - Before`}
                    afterAlt={`${project.title} - After`}
                  />
                  {/* Overlay badge */}
                  <div className="absolute top-3 left-3">
                    <span className={`${project.badge} inline-block px-3 py-1 rounded-full text-xs font-semibold backdrop-blur-sm`}>
                      {project.category}
                    </span>
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-lg font-semibold text-charcoal mb-1">{project.title}</h3>
                  <div className="flex items-center gap-2 text-charcoal/60 text-sm">
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                    {project.location}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="stats-bar py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div className="animate-fade-in-up animation-delay-100">
              <div className="stat-value text-4xl font-bold mb-2">500+</div>
              <p className="text-white/70 text-sm">Projects Completed</p>
            </div>
            <div className="animate-fade-in-up animation-delay-200">
              <div className="stat-value text-4xl font-bold mb-2">100%</div>
              <p className="text-white/70 text-sm">Satisfaction Rate</p>
            </div>
            <div className="animate-fade-in-up animation-delay-300">
              <div className="stat-value text-4xl font-bold mb-2">24/7</div>
              <p className="text-white/70 text-sm">Emergency Service</p>
            </div>
            <div className="animate-fade-in-up animation-delay-400">
              <div className="stat-value text-4xl font-bold mb-2">DMV</div>
              <p className="text-white/70 text-sm">Area Coverage</p>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonial Callout */}
      <section className="py-16 bg-gradient-sage relative overflow-hidden">
        <div className="absolute inset-0 bg-pattern-diagonal" />
        <div className="decorative-blob absolute -top-20 -right-20 w-80 h-80 opacity-30 animate-float" />
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="callout-premium text-center animate-fade-in-up">
            <div className="icon-container icon-container-amber w-16 h-16 mx-auto mb-6">
              <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
                <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
              </svg>
            </div>
            <blockquote className="text-xl text-charcoal/80 italic mb-6">
              &quot;Ruben & Sons transformed our backyard from an overgrown mess into a beautiful outdoor living space. Their attention to detail and professionalism exceeded our expectations.&quot;
            </blockquote>
            <div className="flex items-center justify-center gap-3">
              <div className="w-12 h-12 rounded-full bg-gradient-to-br from-cta-green to-primary-green flex items-center justify-center text-white font-bold">
                SM
              </div>
              <div className="text-left">
                <p className="font-semibold text-charcoal">Sarah M.</p>
                <p className="text-charcoal/60 text-sm">Bethesda, MD</p>
              </div>
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
            Start Your Project
          </span>
          <h2 className="text-3xl font-bold text-white mb-4 animate-fade-in-up">Ready to Transform Your Property?</h2>
          <p className="text-white/90 text-lg mb-8 animate-fade-in-up animation-delay-100">
            Your project could be our next success story.
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
