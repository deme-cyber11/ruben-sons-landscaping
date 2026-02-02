import type { Metadata } from 'next';
import { BlogCard } from '@/components/ui';

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
  },
  {
    title: 'Tree Removal Cost in Maryland: Complete 2026 Pricing Guide',
    excerpt: 'Understanding tree removal costs in Maryland. We break down pricing by tree size, factors that affect cost, and what to expect when getting quotes.',
    href: '/blog/tree-removal-cost-maryland',
    date: 'February 1, 2026',
    readTime: '6 min read',
    category: 'Pricing',
  },
  {
    title: 'Emergency Tree Removal: What to Do When Disaster Strikes',
    excerpt: 'Storm knocked down a tree? Here\'s your step-by-step guide to handling emergency tree situations safely, dealing with insurance, and getting help fast.',
    href: '/blog/emergency-tree-removal-guide',
    date: 'February 1, 2026',
    readTime: '5 min read',
    category: 'Emergency',
  },
];

export default function BlogPage() {
  return (
    <main className="pt-24 pb-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-charcoal mb-4">
            Tree Care & Landscaping Blog
          </h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Expert advice, tips, and guides from our certified arborists and landscaping professionals serving the DMV area.
          </p>
        </div>

        {/* Blog Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogPosts.map((post) => (
            <BlogCard
              key={post.href}
              title={post.title}
              excerpt={post.excerpt}
              href={post.href}
              date={post.date}
              readTime={post.readTime}
              category={post.category}
            />
          ))}
        </div>

        {/* CTA Section */}
        <div className="mt-16 bg-cream rounded-xl p-8 text-center">
          <h2 className="text-2xl font-bold text-charcoal mb-4">
            Have a Tree Question?
          </h2>
          <p className="text-gray-600 mb-6 max-w-xl mx-auto">
            Our certified arborists are happy to answer your questions. Get a free consultation and estimate for your property.
          </p>
          <a
            href="/contact"
            className="inline-flex items-center justify-center px-6 py-3 bg-cta-green text-white font-semibold rounded-lg hover:bg-cta-green/90 transition-colors"
          >
            Get Free Consultation
          </a>
        </div>
      </div>
    </main>
  );
}
