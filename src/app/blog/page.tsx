import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Tree Care & Landscaping Blog | Ruben & Sons Landscaping',
  description: 'Expert advice on tree care, removal, landscaping, and property maintenance in the DMV area. Tips from certified arborists and landscaping professionals.',
  alternates: {
    canonical: '/blog',
  },
};

const blogPosts = [
  {
    title: 'When to Remove a Tree: 7 Warning Signs Every Homeowner Should Know',
    excerpt: 'Learn how to identify when a tree poses a danger to your property. From leaning trunks to fungal growth, these warning signs indicate it\'s time to call a professional.',
    href: '/blog/when-to-remove-a-tree',
    date: 'February 1, 2026',
    readTime: '8 min read',
    category: 'Tree Care',
    badgeClass: 'badge-green',
  },
  {
    title: 'Tree Removal Cost in Maryland: Complete 2026 Pricing Guide',
    excerpt: 'Understanding tree removal costs in Maryland. We break down pricing by tree size, factors that affect cost, and what to expect when getting quotes.',
    href: '/blog/tree-removal-cost-maryland',
    date: 'February 1, 2026',
    readTime: '6 min read',
    category: 'Pricing',
    badgeClass: 'badge-amber',
  },
  {
    title: 'Emergency Tree Removal: What to Do When Disaster Strikes',
    excerpt: 'Storm knocked down a tree? Here\'s your step-by-step guide to handling emergency tree situations safely, dealing with insurance, and getting help fast.',
    href: '/blog/emergency-tree-removal-guide',
    date: 'February 1, 2026',
    readTime: '5 min read',
    category: 'Emergency',
    badgeClass: 'badge-earth',
  },
];

export default function BlogPage() {
  return (
    <main className="pt-24 pb-16">
      {/* Hero Section with mesh gradient */}
      <section className="bg-mesh-gradient py-16 mb-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="decorative-line-warm mx-auto mb-6"></div>
            <h1 className="text-4xl md:text-5xl font-bold text-charcoal mb-4">
              Tree Care & Landscaping Blog
            </h1>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Expert advice, tips, and guides from our certified arborists and landscaping professionals serving the DMV area.
            </p>
          </div>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Category Filters */}
        <div className="flex flex-wrap justify-center gap-3 mb-10">
          <span className="badge-green px-4 py-2 rounded-full text-sm font-medium">Tree Care</span>
          <span className="badge-amber px-4 py-2 rounded-full text-sm font-medium">Pricing</span>
          <span className="badge-earth px-4 py-2 rounded-full text-sm font-medium">Emergency</span>
          <span className="badge-teal px-4 py-2 rounded-full text-sm font-medium">Landscaping</span>
        </div>

        {/* Blog Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogPosts.map((post) => (
            <article key={post.href} className="card-premium rounded-xl overflow-hidden hover-lift">
              <div className="p-6">
                <div className="flex items-center gap-3 mb-4">
                  <span className={`${post.badgeClass} px-3 py-1 rounded-full text-xs font-medium`}>
                    {post.category}
                  </span>
                  <span className="text-sm text-gray-500">{post.readTime}</span>
                </div>
                <h2 className="text-xl font-bold text-charcoal mb-3 line-clamp-2">
                  <a href={post.href} className="hover:text-cta-green transition-colors">
                    {post.title}
                  </a>
                </h2>
                <p className="text-gray-600 mb-4 line-clamp-3">
                  {post.excerpt}
                </p>
                <div className="flex items-center justify-between pt-4 border-t border-gray-100">
                  <span className="text-sm text-gray-500">{post.date}</span>
                  <a
                    href={post.href}
                    className="text-cta-green font-medium text-sm hover:text-primary-green transition-colors inline-flex items-center gap-1"
                  >
                    Read More
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </a>
                </div>
              </div>
            </article>
          ))}
        </div>

        {/* CTA Section */}
        <div className="mt-16 bg-gradient-warm rounded-xl p-8 md:p-12 text-center relative overflow-hidden">
          <div className="decorative-blob w-48 h-48 -top-12 -right-12 opacity-50"></div>
          <div className="relative z-10">
            <div className="decorative-line mx-auto mb-6"></div>
            <h2 className="text-2xl md:text-3xl font-bold text-charcoal mb-4">
              Have a Tree Question?
            </h2>
            <p className="text-gray-600 mb-6 max-w-xl mx-auto">
              Our certified arborists are happy to answer your questions. Get a free consultation and estimate for your property.
            </p>
            <a
              href="/contact"
              className="btn-primary inline-flex items-center justify-center px-8 py-4 font-semibold rounded-lg"
            >
              Get Free Consultation
            </a>
          </div>
        </div>
      </div>
    </main>
  );
}
