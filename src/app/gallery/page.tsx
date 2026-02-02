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
    before: 'https://images.unsplash.com/photo-1598902468171-680e426a4d58?w=800&q=80',
    after: 'https://images.unsplash.com/photo-1558904541-efa843a96f01?w=800&q=80',
  },
  {
    title: 'Backyard Transformation',
    location: 'Arlington, VA',
    category: 'Landscaping',
    before: 'https://images.unsplash.com/photo-1416879595882-3373a0480b5b?w=800&q=80',
    after: 'https://images.unsplash.com/photo-1585320806297-9794b3e4eeae?w=800&q=80',
  },
  {
    title: 'Lot Clearing for New Construction',
    location: 'Fairfax, VA',
    category: 'Land Clearing',
    before: 'https://images.unsplash.com/photo-1500382017468-9049fed747ef?w=800&q=80',
    after: 'https://images.unsplash.com/photo-1500076656116-558758c991c1?w=800&q=80',
  },
  {
    title: 'Storm Damage Cleanup',
    location: 'Silver Spring, MD',
    category: 'Tree Removal',
    before: 'https://images.unsplash.com/photo-1527482797697-8795b05a13fe?w=800&q=80',
    after: 'https://images.unsplash.com/photo-1558904541-efa843a96f01?w=800&q=80',
  },
  {
    title: 'Front Yard Redesign',
    location: 'Alexandria, VA',
    category: 'Landscaping',
    before: 'https://images.unsplash.com/photo-1416879595882-3373a0480b5b?w=800&q=80',
    after: 'https://images.unsplash.com/photo-1585320806297-9794b3e4eeae?w=800&q=80',
  },
  {
    title: 'Commercial Property Clearing',
    location: 'Washington, DC',
    category: 'Land Clearing',
    before: 'https://images.unsplash.com/photo-1500382017468-9049fed747ef?w=800&q=80',
    after: 'https://images.unsplash.com/photo-1500076656116-558758c991c1?w=800&q=80',
  },
]

export default function GalleryPage() {
  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="bg-primary-green py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">Our Work</h1>
          <p className="text-xl text-white/80 max-w-2xl mx-auto">
            See the transformation. Drag the slider to compare before and after on each project.
          </p>
        </div>
      </section>

      {/* Gallery Grid */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project) => (
              <div key={project.title} className="bg-cream rounded-2xl overflow-hidden">
                <BeforeAfterSlider
                  beforeImage={project.before}
                  afterImage={project.after}
                  beforeAlt={`${project.title} - Before`}
                  afterAlt={`${project.title} - After`}
                />
                <div className="p-6">
                  <span className="inline-block px-3 py-1 bg-primary-green/10 text-primary-green text-sm rounded-full mb-2">
                    {project.category}
                  </span>
                  <h3 className="text-lg font-semibold text-charcoal">{project.title}</h3>
                  <p className="text-charcoal/60 text-sm">{project.location}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-cta-green py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">Ready to Transform Your Property?</h2>
          <p className="text-white/90 text-lg mb-8">
            Your project could be our next success story.
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
              Call: 301-844-8429
            </a>
          </div>
        </div>
      </section>
    </div>
  )
}
