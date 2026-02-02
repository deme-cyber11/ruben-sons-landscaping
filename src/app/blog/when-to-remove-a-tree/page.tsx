import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'When to Remove a Tree: 7 Warning Signs | Ruben & Sons Landscaping',
  description: 'Learn how to identify when a tree poses a danger to your property. From leaning trunks to fungal growth, these warning signs indicate it\'s time for professional tree removal.',
  alternates: {
    canonical: '/blog/when-to-remove-a-tree',
  },
};

const articleSchema = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "When to Remove a Tree: 7 Warning Signs Every Homeowner Should Know",
  description: "Learn how to identify when a tree poses a danger to your property.",
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

export default function WhenToRemoveTreeArticle() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}
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
              <li className="text-charcoal">When to Remove a Tree</li>
            </ol>
          </nav>

          {/* Header */}
          <header className="mb-8">
            <div className="flex items-center gap-3 mb-4">
              <span className="text-xs font-medium text-cta-green bg-cta-green/10 px-3 py-1 rounded-full">
                Tree Care
              </span>
              <span className="text-sm text-gray-500">8 min read</span>
              <span className="text-sm text-gray-500">February 1, 2026</span>
            </div>
            <h1 className="text-4xl font-bold text-charcoal mb-4">
              When to Remove a Tree: 7 Warning Signs Every Homeowner Should Know
            </h1>
            <p className="text-xl text-gray-600">
              Trees add beauty and value to your property, but a damaged or dying tree can become a serious hazard. Here&apos;s how to know when it&apos;s time to call a professional.
            </p>
          </header>

          {/* Content */}
          <div className="prose prose-lg max-w-none">
            <p>
              As a homeowner in the DMV area, your trees are valuable assets. They provide shade, improve air quality, and can increase your property value by up to 15%. But trees don&apos;t live forever, and a compromised tree can cause thousands of dollars in damage—or worse, injure someone.
            </p>

            <p>
              After 15+ years of tree care in Maryland, Virginia, and DC, we&apos;ve seen it all. Here are the seven warning signs that indicate a tree may need to be removed.
            </p>

            <h2 className="text-2xl font-bold text-charcoal mt-8 mb-4">1. The Trunk Shows Signs of Decay</h2>
            <p>
              A healthy tree has solid, intact bark. Watch for these trunk warning signs:
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li><strong>Large cavities or holes</strong> in the trunk</li>
              <li><strong>Soft, crumbly wood</strong> when you press on it</li>
              <li><strong>Bark falling off</strong> in large sections (not normal shedding)</li>
              <li><strong>Vertical cracks</strong> running down the trunk</li>
              <li><strong>Mushrooms or fungi</strong> growing at the base</li>
            </ul>
            <p>
              Fungi at the base often indicate root rot, which can cause sudden failure even in trees that look healthy above ground.
            </p>

            <h2 className="text-2xl font-bold text-charcoal mt-8 mb-4">2. The Tree Is Leaning Significantly</h2>
            <p>
              Some trees naturally grow at an angle, but a sudden lean is cause for concern. If you notice:
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li>The tree has shifted from its original position</li>
              <li>Soil is heaving up on one side of the base</li>
              <li>Exposed roots on the opposite side of the lean</li>
              <li>The lean has increased over time</li>
            </ul>
            <p>
              A leaning tree with root damage can fall without warning. This is especially dangerous after storms when soil is saturated.
            </p>

            <h2 className="text-2xl font-bold text-charcoal mt-8 mb-4">3. Dead Branches in the Crown</h2>
            <p>
              Dead branches (sometimes called &quot;widow makers&quot;) are one of the most common hazards. A few dead twigs are normal, but watch for:
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li><strong>Large dead branches</strong> over 3 inches in diameter</li>
              <li><strong>More than 25%</strong> of the crown appears dead</li>
              <li><strong>Dead branches on one side only</strong> (indicates root or trunk damage on that side)</li>
              <li><strong>Branches dying from the top down</strong> (often indicates root problems)</li>
            </ul>
            <p>
              Sometimes aggressive pruning can save a tree with dead branches. But if the crown is more than 50% dead, removal is usually the safest option.
            </p>

            <h2 className="text-2xl font-bold text-charcoal mt-8 mb-4">4. Root Problems Are Visible</h2>
            <p>
              Tree roots extend far beyond the trunk—often 2-3 times the width of the crown. Root damage from construction, soil compaction, or disease can kill a tree. Warning signs include:
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Mushrooms growing in a ring around the tree</li>
              <li>Recent construction or trenching near the tree</li>
              <li>Soil heaving or cracking around the base</li>
              <li>Severed or damaged visible roots</li>
              <li>The tree is declining after nearby landscaping changes</li>
            </ul>

            <h2 className="text-2xl font-bold text-charcoal mt-8 mb-4">5. Storm Damage Has Compromised Structure</h2>
            <p>
              The DMV gets its share of severe weather. After a storm, inspect your trees for:
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li><strong>Split trunks</strong> (especially V-shaped unions)</li>
              <li><strong>Large torn branches</strong> still hanging in the tree</li>
              <li><strong>Lightning strikes</strong> (can kill a tree over time)</li>
              <li><strong>More than 50% crown loss</strong></li>
            </ul>
            <p>
              A tree can sometimes recover from storm damage with proper care, but structural damage often worsens over time.
            </p>

            <h2 className="text-2xl font-bold text-charcoal mt-8 mb-4">6. The Tree Is Too Close to Structures</h2>
            <p>
              Sometimes a healthy tree simply isn&apos;t in the right place. Consider removal if:
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Roots are damaging your foundation, driveway, or pipes</li>
              <li>Branches are hitting your roof or power lines</li>
              <li>The tree blocks essential sunlight to your home or garden</li>
              <li>It&apos;s causing drainage problems</li>
            </ul>
            <p>
              In these cases, it&apos;s often better to remove the tree and plant a more appropriate species elsewhere.
            </p>

            <h2 className="text-2xl font-bold text-charcoal mt-8 mb-4">7. Disease or Pest Infestation</h2>
            <p>
              The Mid-Atlantic region has seen several tree diseases and pest outbreaks. Signs of serious problems include:
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li><strong>Emerald Ash Borer:</strong> D-shaped exit holes, crown dieback in ash trees</li>
              <li><strong>Oak Wilt:</strong> Rapid browning of leaves starting at the edges</li>
              <li><strong>Dutch Elm Disease:</strong> Yellowing and wilting of leaves on one branch, then spreading</li>
              <li><strong>Bacterial Leaf Scorch:</strong> Brown, scorched-looking leaves with yellow borders</li>
            </ul>
            <p>
              Some diseases can spread to nearby trees. In these cases, prompt removal protects the rest of your landscape.
            </p>

            <h2 className="text-2xl font-bold text-charcoal mt-8 mb-4">What to Do Next</h2>
            <p>
              If you&apos;ve noticed any of these warning signs, don&apos;t wait. A compromised tree can fail at any time, especially during storms. Here&apos;s what we recommend:
            </p>
            <ol className="list-decimal pl-6 space-y-2">
              <li><strong>Don&apos;t go under the tree</strong> if you suspect it&apos;s hazardous</li>
              <li><strong>Get a professional assessment</strong> from a certified arborist</li>
              <li><strong>Get multiple quotes</strong> if removal is recommended</li>
              <li><strong>Check for permits</strong> (Montgomery County, Fairfax County, and others require permits for large trees)</li>
              <li><strong>Consider stump removal</strong> to prevent regrowth and pest problems</li>
            </ol>

            <div className="bg-cream p-6 rounded-xl mt-8">
              <h3 className="text-xl font-bold text-charcoal mb-3">Need a Professional Opinion?</h3>
              <p className="text-gray-600 mb-4">
                We offer free estimates for tree assessment and removal throughout the DMV area. Our certified arborists can evaluate your tree and recommend the safest course of action.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link
                  href="/contact"
                  className="inline-flex items-center justify-center px-6 py-3 bg-cta-green text-white font-semibold rounded-lg hover:bg-cta-green/90 transition-colors"
                >
                  Get Free Estimate
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
