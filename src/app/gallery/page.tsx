'use client'

import { useState } from 'react'
import Link from 'next/link'
import { BeforeAfterSlider } from '@/components/ui'
import { assetPath } from '@/lib/config'

const projects = [
  {
    title: 'Emergency Storm Cleanup',
    location: 'Silver Spring, MD',
    category: 'Tree Removal',
    badge: 'badge-green',
    description: 'Multiple fallen trees and debris removed after severe thunderstorm.',
    timeline: '2 days',
    before: assetPath('/images/before-after/storm-damage-before.webp'),
    after: assetPath('/images/before-after/storm-damage-after.webp'),
    featured: true,
  },
  {
    title: 'Backyard Transformation',
    location: 'Arlington, VA',
    category: 'Landscaping',
    badge: 'badge-teal',
    description: 'Complete backyard redesign - overgrown yard transformed into manicured lawn.',
    timeline: '2 weeks',
    before: assetPath('/images/before-after/overgrown-yard-before.webp'),
    after: assetPath('/images/before-after/overgrown-yard-after.webp'),
    featured: false,
  },
  {
    title: 'New Construction Landscaping',
    location: 'Fairfax, VA',
    category: 'Land Clearing',
    badge: 'badge-amber',
    description: 'Bare lot transformed with complete landscape installation.',
    timeline: '1 week',
    before: assetPath('/images/before-after/bare-yard-before.webp'),
    after: assetPath('/images/before-after/bare-yard-after.webp'),
    featured: false,
  },
  {
    title: 'Front Yard Redesign',
    location: 'Bethesda, MD',
    category: 'Landscaping',
    badge: 'badge-teal',
    description: 'Professional front yard landscaping with ornamental trees and garden beds.',
    timeline: '1 week',
    before: assetPath('/images/before-after/overgrown-yard-before.webp'),
    after: assetPath('/images/gallery/front-yard-bethesda.webp'),
    featured: false,
  },
  {
    title: 'Garden Design Installation',
    location: 'Silver Spring, MD',
    category: 'Landscaping',
    badge: 'badge-teal',
    description: 'Custom garden design with native plants and ornamental grasses.',
    timeline: '4 days',
    before: assetPath('/images/before-after/bare-yard-before.webp'),
    after: assetPath('/images/gallery/garden-design-silver-spring.webp'),
    featured: false,
  },
  {
    title: 'Outdoor Living Space',
    location: 'McLean, VA',
    category: 'Landscaping',
    badge: 'badge-teal',
    description: 'Luxury outdoor living area with fire pit, patio, and professional landscaping.',
    timeline: '2 weeks',
    before: assetPath('/images/before-after/overgrown-yard-before.webp'),
    after: assetPath('/images/gallery/outdoor-living-mclean.webp'),
    featured: false,
  },
  {
    title: 'Professional Lawn Care',
    location: 'Rockville, MD',
    category: 'Landscaping',
    badge: 'badge-teal',
    description: 'Complete lawn restoration with professional maintenance program.',
    timeline: '3 days',
    before: assetPath('/images/before-after/overgrown-yard-before.webp'),
    after: assetPath('/images/gallery/lawn-care-rockville.webp'),
    featured: false,
  },
  {
    title: 'Complete Landscape Install',
    location: 'Fairfax, VA',
    category: 'Landscaping',
    badge: 'badge-teal',
    description: 'New sod, ornamental trees, and professional garden bed installation.',
    timeline: '1 week',
    before: assetPath('/images/before-after/bare-yard-before.webp'),
    after: assetPath('/images/gallery/landscape-install-fairfax.webp'),
    featured: false,
  },
  {
    title: 'Land Clearing Project',
    location: 'Fairfax, VA',
    category: 'Land Clearing',
    badge: 'badge-amber',
    description: 'Professional lot clearing and site preparation for new construction.',
    timeline: '5 days',
    before: assetPath('/images/services/land-clearing-equipment.webp'),
    after: assetPath('/images/services/site-prep-complete.webp'),
    featured: false,
  },
]

const categories = [
  { name: 'All Projects', value: 'all', iconClass: 'icon-container-green' },
  { name: 'Tree Removal', value: 'Tree Removal', iconClass: 'icon-container-green' },
  { name: 'Landscaping', value: 'Landscaping', iconClass: 'icon-container-teal' },
  { name: 'Land Clearing', value: 'Land Clearing', iconClass: 'icon-container-amber' },
]

export default function GalleryPage() {
  const [activeCategory, setActiveCategory] = useState('all')

  const filteredProjects = activeCategory === 'all'
    ? projects
    : projects.filter(p => p.category === activeCategory)

  const featuredProject = filteredProjects.find(p => p.featured) || filteredProjects[0]
  const otherProjects = filteredProjects.filter(p => p !== featuredProject)

  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="bg-charcoal py-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-charcoal via-charcoal to-primary-green/20" />
        <div className="absolute inset-0 bg-pattern-dots opacity-5" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative">
          <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium mb-4 bg-cta-green/20 text-cta-green animate-fade-in-down">
            <span className="w-2 h-2 bg-cta-green rounded-full animate-pulse"></span>
            50+ Projects This Year
          </span>
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-4 animate-fade-in-up">
            Real Results.<br />
            <span className="text-cta-green">Real Transformations.</span>
          </h1>
          <p className="text-xl text-white/70 max-w-2xl mx-auto animate-fade-in-up animation-delay-100">
            Every project tells a story. Drag the slider to see the before and after.
          </p>
        </div>
      </section>

      {/* Category Filter Bar */}
      <section className="py-6 bg-white sticky top-20 z-40 border-b border-gray-100 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap justify-center gap-3">
            {categories.map((category) => (
              <button
                key={category.name}
                onClick={() => setActiveCategory(category.value)}
                className={`flex items-center gap-2 px-5 py-2.5 rounded-full font-medium text-sm transition-all ${
                  activeCategory === category.value
                    ? 'bg-primary-green text-white shadow-lg shadow-primary-green/25'
                    : 'bg-gray-100 text-charcoal hover:bg-gray-200'
                }`}
              >
                <span>{category.name}</span>
                {activeCategory === category.value && (
                  <span className="bg-white/20 px-2 py-0.5 rounded-full text-xs">
                    {category.value === 'all' ? projects.length : projects.filter(p => p.category === category.value).length}
                  </span>
                )}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Project - Full Width Editorial */}
      {featuredProject && (
        <section className="py-12 bg-gradient-to-b from-white to-cream">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
              {/* Large Before/After */}
              <div className="relative rounded-2xl overflow-hidden shadow-2xl">
                <BeforeAfterSlider
                  beforeImage={featuredProject.before}
                  afterImage={featuredProject.after}
                  beforeAlt={`${featuredProject.title} - Before`}
                  afterAlt={`${featuredProject.title} - After`}
                />
                <div className="absolute top-4 left-4">
                  <span className="bg-cta-green text-white px-4 py-2 rounded-full text-sm font-bold shadow-lg">
                    Featured Project
                  </span>
                </div>
              </div>

              {/* Project Details */}
              <div className="lg:pl-8">
                <span className={`${featuredProject.badge} inline-block px-3 py-1 rounded-full text-xs font-semibold mb-4`}>
                  {featuredProject.category}
                </span>
                <h2 className="text-3xl lg:text-4xl font-bold text-charcoal mb-4">
                  {featuredProject.title}
                </h2>
                <p className="text-lg text-gray-600 mb-6">
                  {featuredProject.description}
                </p>

                <div className="flex flex-wrap gap-6 mb-8">
                  <div className="flex items-center gap-2">
                    <div className="w-10 h-10 rounded-full bg-primary-green/10 flex items-center justify-center">
                      <svg className="w-5 h-5 text-primary-green" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                      </svg>
                    </div>
                    <div>
                      <p className="text-xs text-gray-500 uppercase tracking-wide">Location</p>
                      <p className="font-semibold text-charcoal">{featuredProject.location}</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-10 h-10 rounded-full bg-amber/10 flex items-center justify-center">
                      <svg className="w-5 h-5 text-amber" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                    </div>
                    <div>
                      <p className="text-xs text-gray-500 uppercase tracking-wide">Timeline</p>
                      <p className="font-semibold text-charcoal">{featuredProject.timeline}</p>
                    </div>
                  </div>
                </div>

                <Link
                  href="/contact"
                  className="inline-flex items-center gap-2 btn-primary px-6 py-3 rounded-lg font-semibold"
                >
                  Get Similar Results
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </Link>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* Project Grid - Asymmetric Editorial Layout */}
      <section className="py-16 bg-mesh-gradient relative">
        <div className="absolute inset-0 bg-pattern-dots-light opacity-30" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="flex items-center justify-between mb-10">
            <div>
              <h2 className="text-2xl font-bold text-charcoal">More Projects</h2>
              <p className="text-gray-600">Showing {otherProjects.length} projects</p>
            </div>
          </div>

          {/* Masonry-style Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            {otherProjects.map((project, index) => (
              <div
                key={`${project.title}-${index}`}
                className={`card-premium rounded-2xl overflow-hidden hover-lift transition-all duration-300 ${
                  index === 0 ? 'md:col-span-2 lg:col-span-1' : ''
                }`}
              >
                <div className="relative">
                  <BeforeAfterSlider
                    beforeImage={project.before}
                    afterImage={project.after}
                    beforeAlt={`${project.title} - Before`}
                    afterAlt={`${project.title} - After`}
                  />
                  <div className="absolute top-3 left-3 flex gap-2">
                    <span className={`${project.badge} inline-block px-3 py-1 rounded-full text-xs font-semibold backdrop-blur-sm`}>
                      {project.category}
                    </span>
                  </div>
                </div>
                <div className="p-5">
                  <h3 className="text-lg font-bold text-charcoal mb-2">{project.title}</h3>
                  <p className="text-sm text-gray-600 mb-3 line-clamp-2">{project.description}</p>
                  <div className="flex items-center justify-between text-sm">
                    <div className="flex items-center gap-1.5 text-charcoal/60">
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                      </svg>
                      {project.location}
                    </div>
                    <span className="text-primary-green font-medium">{project.timeline}</span>
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
            <div>
              <div className="stat-value text-4xl font-bold mb-2">500+</div>
              <p className="text-white/70 text-sm">Projects Completed</p>
            </div>
            <div>
              <div className="stat-value text-4xl font-bold mb-2">100%</div>
              <p className="text-white/70 text-sm">Satisfaction Rate</p>
            </div>
            <div>
              <div className="stat-value text-4xl font-bold mb-2">24/7</div>
              <p className="text-white/70 text-sm">Emergency Service</p>
            </div>
            <div>
              <div className="stat-value text-4xl font-bold mb-2">15+</div>
              <p className="text-white/70 text-sm">Years Experience</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-primary-green py-16 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary-green via-primary-green to-charcoal/30" />
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative">
          <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium mb-4 bg-white/20 text-white">
            <span className="w-2 h-2 bg-amber-400 rounded-full animate-pulse"></span>
            Limited availability this season
          </span>
          <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4">Your Property Could Be Next</h2>
          <p className="text-white/90 text-lg mb-8 max-w-2xl mx-auto">
            Join 500+ satisfied homeowners. Get a free estimate and see what&apos;s possible.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="inline-flex items-center justify-center px-8 py-4 bg-white text-primary-green font-bold rounded-lg hover:bg-cream transition-all hover-lift"
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
              Call: 301-844-8429
            </a>
          </div>
        </div>
      </section>
    </div>
  )
}
