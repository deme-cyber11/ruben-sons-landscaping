import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Tree Removal Cost Maryland 2026: Complete Pricing Guide | Ruben & Sons',
  description: 'How much does tree removal cost in Maryland? Get accurate pricing for tree removal in Montgomery County, Prince George\'s County, and the DMV area. Includes factors affecting cost.',
  alternates: {
    canonical: '/blog/tree-removal-cost-maryland',
  },
};

const articleSchema = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "Tree Removal Cost in Maryland: Complete 2026 Pricing Guide",
  description: "Comprehensive guide to tree removal costs in Maryland, including pricing by tree size and factors affecting cost.",
  author: {
    "@type": "Organization",
    name: "Ruben & Sons Landscaping"
  },
  publisher: {
    "@type": "Organization",
    name: "Ruben & Sons Landscaping"
  },
  datePublished: "2026-02-01",
  dateModified: "2026-02-01"
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "How much does it cost to remove a tree in Maryland?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Tree removal in Maryland typically costs $300-$2,000+ depending on tree size, location, and complexity. Small trees (under 30 feet) cost $300-$500, medium trees (30-60 feet) cost $500-$1,000, and large trees (over 60 feet) cost $1,000-$2,000+."
      }
    },
    {
      "@type": "Question",
      name: "Do I need a permit to remove a tree in Maryland?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "In Montgomery County, permits are required for trees over 24 inches in diameter. Other counties have similar requirements. Your tree service company should handle permit applications as part of their service."
      }
    }
  ]
};

export default function TreeRemovalCostArticle() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <main className="pt-24 pb-16">
        <article className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Breadcrumb */}
          <nav className="mb-8">
            <ol className="flex items-center gap-2 text-sm text-gray-500">
              <li><Link href="/" className="hover:text-cta-green">Home</Link></li>
              <li>/</li>
              <li><Link href="/blog" className="hover:text-cta-green">Blog</Link></li>
              <li>/</li>
              <li className="text-charcoal">Tree Removal Cost Maryland</li>
            </ol>
          </nav>

          {/* Header */}
          <header className="mb-8">
            <div className="flex items-center gap-3 mb-4">
              <span className="text-xs font-medium text-cta-green bg-cta-green/10 px-3 py-1 rounded-full">
                Pricing
              </span>
              <span className="text-sm text-gray-500">6 min read</span>
              <span className="text-sm text-gray-500">February 1, 2026</span>
            </div>
            <h1 className="text-4xl font-bold text-charcoal mb-4">
              Tree Removal Cost in Maryland: Complete 2026 Pricing Guide
            </h1>
            <p className="text-xl text-gray-600">
              Wondering how much it costs to remove a tree in Maryland? Here&apos;s a detailed breakdown of pricing, what affects cost, and how to get the best value.
            </p>
          </header>

          {/* Content */}
          <div className="prose prose-lg max-w-none">
            <p>
              Tree removal is a significant investment, and prices can vary widely. As a Maryland-based tree service with over 15 years of experience, we believe in transparent pricing. Here&apos;s what you can expect to pay in 2026.
            </p>

            <h2 className="text-2xl font-bold text-charcoal mt-8 mb-4">Average Tree Removal Costs in Maryland</h2>

            <div className="bg-cream p-6 rounded-xl my-6">
              <h3 className="text-lg font-bold text-charcoal mb-4">2026 Price Ranges by Tree Size</h3>
              <div className="space-y-3">
                <div className="flex justify-between items-center py-2 border-b border-gray-200">
                  <span className="font-medium">Small Trees (under 30 ft)</span>
                  <span className="text-cta-green font-bold">$300 - $500</span>
                </div>
                <div className="flex justify-between items-center py-2 border-b border-gray-200">
                  <span className="font-medium">Medium Trees (30-60 ft)</span>
                  <span className="text-cta-green font-bold">$500 - $1,000</span>
                </div>
                <div className="flex justify-between items-center py-2 border-b border-gray-200">
                  <span className="font-medium">Large Trees (60-80 ft)</span>
                  <span className="text-cta-green font-bold">$1,000 - $1,500</span>
                </div>
                <div className="flex justify-between items-center py-2">
                  <span className="font-medium">Very Large Trees (80+ ft)</span>
                  <span className="text-cta-green font-bold">$1,500 - $3,000+</span>
                </div>
              </div>
            </div>

            <p>
              These prices typically include cutting down the tree, removing debris, and basic cleanup. Stump grinding is usually an additional $100-$400 depending on stump size.
            </p>

            <h2 className="text-2xl font-bold text-charcoal mt-8 mb-4">Factors That Affect Tree Removal Cost</h2>

            <h3 className="text-xl font-semibold text-charcoal mt-6 mb-3">1. Tree Size and Species</h3>
            <p>
              Larger trees require more equipment, labor, and time. Hardwoods like oaks and maples are denser and heavier than softwoods like pines, which can affect pricing.
            </p>

            <h3 className="text-xl font-semibold text-charcoal mt-6 mb-3">2. Location and Access</h3>
            <p>
              A tree in an open backyard is easier to remove than one:
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Near power lines (requires coordination with utility company)</li>
              <li>Close to your house or other structures</li>
              <li>In a fenced backyard with limited access</li>
              <li>On a steep slope or difficult terrain</li>
            </ul>

            <h3 className="text-xl font-semibold text-charcoal mt-6 mb-3">3. Tree Condition</h3>
            <p>
              Hazardous trees (dead, leaning, or storm-damaged) may cost more because they require extra safety precautions. Conversely, healthy trees with predictable structure can sometimes be removed more efficiently.
            </p>

            <h3 className="text-xl font-semibold text-charcoal mt-6 mb-3">4. Emergency vs. Scheduled</h3>
            <p>
              Emergency tree removal (after storms, for immediate hazards) typically costs 20-50% more due to urgency, weekend/holiday work, and the unpredictable nature of storm damage.
            </p>

            <h3 className="text-xl font-semibold text-charcoal mt-6 mb-3">5. Permits</h3>
            <p>
              Montgomery County, Prince George&apos;s County, and many Maryland jurisdictions require permits for removing trees over a certain size (typically 24 inches in diameter). Permit fees range from $50-$150, and your tree service should handle the application.
            </p>

            <h2 className="text-2xl font-bold text-charcoal mt-8 mb-4">Additional Services and Costs</h2>

            <div className="bg-white border border-gray-200 rounded-xl overflow-hidden my-6">
              <table className="w-full">
                <thead className="bg-gray-50">
                  <tr>
                    <th className="text-left py-3 px-4 font-semibold text-charcoal">Service</th>
                    <th className="text-right py-3 px-4 font-semibold text-charcoal">Typical Cost</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-t border-gray-200">
                    <td className="py-3 px-4">Stump Grinding</td>
                    <td className="py-3 px-4 text-right">$100 - $400</td>
                  </tr>
                  <tr className="border-t border-gray-200">
                    <td className="py-3 px-4">Stump Removal (complete)</td>
                    <td className="py-3 px-4 text-right">$200 - $600</td>
                  </tr>
                  <tr className="border-t border-gray-200">
                    <td className="py-3 px-4">Limb Chipping</td>
                    <td className="py-3 px-4 text-right">Often included</td>
                  </tr>
                  <tr className="border-t border-gray-200">
                    <td className="py-3 px-4">Log Splitting (for firewood)</td>
                    <td className="py-3 px-4 text-right">$50 - $100</td>
                  </tr>
                  <tr className="border-t border-gray-200">
                    <td className="py-3 px-4">Haul Away Debris</td>
                    <td className="py-3 px-4 text-right">Often included</td>
                  </tr>
                  <tr className="border-t border-gray-200">
                    <td className="py-3 px-4">Crane Service (large trees)</td>
                    <td className="py-3 px-4 text-right">$500 - $2,000</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <h2 className="text-2xl font-bold text-charcoal mt-8 mb-4">How to Get the Best Value</h2>

            <ol className="list-decimal pl-6 space-y-3">
              <li>
                <strong>Get multiple quotes</strong> - We recommend getting 2-3 written estimates. Be wary of prices that are significantly lower than others.
              </li>
              <li>
                <strong>Verify insurance</strong> - Always ask for proof of liability insurance and workers&apos; compensation. Tree work is dangerous, and you could be liable if an uninsured worker is injured.
              </li>
              <li>
                <strong>Check credentials</strong> - Maryland requires a Tree Expert License for commercial tree work. Look for ISA Certified Arborists.
              </li>
              <li>
                <strong>Ask about cleanup</strong> - Make sure the quote includes debris removal and cleanup, or get that in writing if it doesn&apos;t.
              </li>
              <li>
                <strong>Schedule in advance</strong> - Non-emergency work scheduled during slower seasons (late winter/early spring) may be priced more competitively.
              </li>
            </ol>

            <h2 className="text-2xl font-bold text-charcoal mt-8 mb-4">Red Flags to Watch For</h2>
            <ul className="list-disc pl-6 space-y-2">
              <li>Door-to-door solicitation (especially after storms)</li>
              <li>Requests for large upfront payments</li>
              <li>No written estimate or contract</li>
              <li>No proof of insurance</li>
              <li>Using climbing spikes on trees that aren&apos;t being removed</li>
              <li>Prices that seem too good to be true</li>
            </ul>

            <div className="bg-cream p-6 rounded-xl mt-8">
              <h3 className="text-xl font-bold text-charcoal mb-3">Get Your Free Estimate</h3>
              <p className="text-gray-600 mb-4">
                We provide free, no-obligation estimates for tree removal throughout Montgomery County, Prince George&apos;s County, and the greater DMV area. Our quotes are detailed and transparent—no surprises.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link
                  href="/contact"
                  className="inline-flex items-center justify-center px-6 py-3 bg-cta-green text-white font-semibold rounded-lg hover:bg-cta-green/90 transition-colors"
                >
                  Request Free Quote
                </Link>
                <a
                  href="tel:301-844-8429"
                  className="inline-flex items-center justify-center px-6 py-3 border-2 border-charcoal text-charcoal font-semibold rounded-lg hover:bg-charcoal hover:text-white transition-colors"
                >
                  Call 301-844-8429
                </a>
              </div>
            </div>
          </div>
        </article>
      </main>
    </>
  );
}
