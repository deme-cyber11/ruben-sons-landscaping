import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'How to Plant a Tree Correctly | Maryland & Virginia Tree Planting Guide',
  description: 'Learn the right way to plant a tree for healthy growth. Step-by-step guide covering hole depth, root preparation, watering, and mulching for DMV homeowners.',
  alternates: {
    canonical: '/blog/tree-planting-guide',
  },
};

const articleSchema = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "How to Plant a Tree Correctly: A Step-by-Step Guide",
  description: "Learn proper tree planting techniques for healthy long-term growth.",
  author: {
    "@type": "Organization",
    name: "Ruben & Sons Landscaping"
  },
  publisher: {
    "@type": "Organization",
    name: "Ruben & Sons Landscaping"
  },
  datePublished: "2026-02-02",
  dateModified: "2026-02-02"
};

export default function TreePlantingGuideArticle() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}
      />
      <main className="pt-24 pb-16">
        <article className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <nav className="mb-8">
            <ol className="flex items-center gap-2 text-sm text-gray-500">
              <li><Link href="/" className="hover:text-cta-green">Home</Link></li>
              <li>/</li>
              <li><Link href="/blog" className="hover:text-cta-green">Blog</Link></li>
              <li>/</li>
              <li className="text-charcoal">Tree Planting Guide</li>
            </ol>
          </nav>

          <header className="mb-8">
            <div className="flex items-center gap-3 mb-4">
              <span className="text-xs font-medium text-cta-green bg-cta-green/10 px-3 py-1 rounded-full">
                Tree Care
              </span>
              <span className="text-sm text-gray-500">7 min read</span>
              <span className="text-sm text-gray-500">February 2, 2026</span>
            </div>
            <h1 className="text-4xl font-bold text-charcoal mb-4">
              How to Plant a Tree Correctly: A Step-by-Step Guide
            </h1>
            <p className="text-xl text-gray-600">
              A properly planted tree can live for generations. A poorly planted one may struggle and die within years. Here&apos;s how to do it right.
            </p>
          </header>

          <div className="prose prose-lg max-w-none">
            <p>
              More trees die from improper planting than from disease or pests. The most common mistakes—planting too deep and creating &quot;mulch volcanoes&quot;—slowly kill trees over years. Follow these steps for healthy trees that thrive.
            </p>

            <h2 className="text-2xl font-bold text-charcoal mt-8 mb-4">When to Plant in Maryland & Virginia</h2>
            <p>
              <strong>Best time:</strong> Fall (September-November) or early spring (March-April)
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li><strong>Fall planting</strong> allows roots to establish before summer heat</li>
              <li><strong>Spring planting</strong> gives a full growing season, but requires more summer watering</li>
              <li><strong>Avoid</strong> planting in summer heat or frozen winter ground</li>
            </ul>

            <h2 className="text-2xl font-bold text-charcoal mt-8 mb-4">Step 1: Choose the Right Location</h2>
            <p>
              Consider the tree&apos;s mature size—both height and spread. Check for:
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li><strong>Overhead utilities:</strong> Keep large trees 25+ feet from power lines</li>
              <li><strong>Underground utilities:</strong> Call 811 before digging</li>
              <li><strong>Structures:</strong> Plant at least half the mature spread from buildings</li>
              <li><strong>Septic systems:</strong> Keep trees away from drain fields</li>
              <li><strong>Sunlight:</strong> Match tree needs to available light</li>
            </ul>

            <h2 className="text-2xl font-bold text-charcoal mt-8 mb-4">Step 2: Dig the Right Hole</h2>
            <p>
              This is where most people go wrong. The hole should be:
            </p>
            <div className="bg-cream p-6 rounded-xl my-4">
              <ul className="space-y-2">
                <li><strong>Width:</strong> 2-3 times wider than the root ball</li>
                <li><strong>Depth:</strong> Same depth as the root ball—NOT deeper</li>
                <li><strong>Shape:</strong> Bowl-shaped with sloping sides</li>
              </ul>
            </div>
            <p>
              <strong>Critical:</strong> Measure from the root flare (where trunk meets roots), not from the top of the container soil. Nursery trees are often planted too deep in their pots.
            </p>

            <h2 className="text-2xl font-bold text-charcoal mt-8 mb-4">Step 3: Prepare the Root Ball</h2>

            <h3 className="text-xl font-semibold text-charcoal mt-6 mb-3">Container Trees</h3>
            <ul className="list-disc pl-6 space-y-2">
              <li>Remove from container completely</li>
              <li>Loosen roots that are circling the root ball</li>
              <li>Cut through severely circling roots with a knife</li>
              <li>Find the root flare—remove excess soil covering it</li>
            </ul>

            <h3 className="text-xl font-semibold text-charcoal mt-6 mb-3">Balled & Burlapped (B&B) Trees</h3>
            <ul className="list-disc pl-6 space-y-2">
              <li>Set tree in hole first (B&B trees are heavy)</li>
              <li>Remove wire basket completely or cut away top half</li>
              <li>Remove all burlap, twine, and tags</li>
              <li>Expose the root flare</li>
            </ul>

            <h3 className="text-xl font-semibold text-charcoal mt-6 mb-3">Bare Root Trees</h3>
            <ul className="list-disc pl-6 space-y-2">
              <li>Soak roots in water for 1-2 hours before planting</li>
              <li>Create a mound of soil in the hole center</li>
              <li>Spread roots over the mound</li>
              <li>Position root flare at ground level</li>
            </ul>

            <h2 className="text-2xl font-bold text-charcoal mt-8 mb-4">Step 4: Position the Tree</h2>
            <ol className="list-decimal pl-6 space-y-2">
              <li>Place tree in hole with root flare at or slightly above ground level</li>
              <li>Check depth with a straight board across the hole</li>
              <li>Adjust by adding or removing soil underneath</li>
              <li>Position the tree&apos;s best side facing the viewing angle</li>
              <li>Ensure trunk is vertical</li>
            </ol>
            <div className="bg-amber-50 border-l-4 border-amber-500 p-4 my-4">
              <p className="text-amber-800">
                <strong>The #1 Mistake:</strong> Planting too deep. If you can&apos;t see the root flare (trunk taper) after planting, the tree is too deep. This causes slow decline and eventual death.
              </p>
            </div>

            <h2 className="text-2xl font-bold text-charcoal mt-8 mb-4">Step 5: Backfill Correctly</h2>
            <ul className="list-disc pl-6 space-y-2">
              <li>Use the original soil—don&apos;t amend with compost or potting soil</li>
              <li>Fill in layers, gently tamping to remove air pockets</li>
              <li>Don&apos;t pack too tightly—roots need oxygen</li>
              <li>Create a slight basin to hold water</li>
              <li>Do NOT pile soil against the trunk</li>
            </ul>

            <h2 className="text-2xl font-bold text-charcoal mt-8 mb-4">Step 6: Water Thoroughly</h2>
            <p>
              Water immediately after planting and continue:
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li><strong>Week 1-2:</strong> Water daily</li>
              <li><strong>Week 3-12:</strong> Water every 2-3 days</li>
              <li><strong>After 12 weeks:</strong> Water weekly during dry periods</li>
              <li><strong>First 2 years:</strong> Water during droughts</li>
            </ul>
            <p>
              <strong>How much?</strong> About 10 gallons per inch of trunk diameter, per watering.
            </p>

            <h2 className="text-2xl font-bold text-charcoal mt-8 mb-4">Step 7: Mulch Properly</h2>
            <ul className="list-disc pl-6 space-y-2">
              <li>Apply 2-4 inches of mulch in a wide circle</li>
              <li><strong>Keep mulch 3-6 inches away from trunk</strong></li>
              <li>Extend mulch to drip line if possible</li>
              <li>No volcano mulching—ever!</li>
            </ul>

            <h2 className="text-2xl font-bold text-charcoal mt-8 mb-4">Should You Stake?</h2>
            <p>
              Most trees don&apos;t need staking. Only stake if:
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Site is very windy</li>
              <li>Tree has a small root ball relative to canopy</li>
              <li>Tree was topped in the nursery and is top-heavy</li>
            </ul>
            <p>
              If you do stake:
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Use two stakes on opposite sides</li>
              <li>Attach loosely with wide straps—allow some movement</li>
              <li>Remove stakes after one growing season</li>
            </ul>

            <h2 className="text-2xl font-bold text-charcoal mt-8 mb-4">First-Year Care</h2>
            <ul className="list-disc pl-6 space-y-2">
              <li><strong>Water:</strong> The most important factor—don&apos;t let new trees dry out</li>
              <li><strong>No fertilizer:</strong> Wait until the second year to fertilize</li>
              <li><strong>No pruning:</strong> Only remove broken or dead branches the first year</li>
              <li><strong>Check mulch:</strong> Replenish if it washes away or compacts</li>
              <li><strong>Monitor:</strong> Watch for signs of stress (wilting, yellowing)</li>
            </ul>

            <div className="bg-cream p-6 rounded-xl mt-8">
              <h3 className="text-xl font-bold text-charcoal mb-3">Professional Tree Planting</h3>
              <p className="text-gray-600 mb-4">
                We source quality nursery stock, plant correctly, and guarantee establishment. Skip the guesswork and start with a healthy tree that&apos;s planted to thrive.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link
                  href="/contact"
                  className="inline-flex items-center justify-center px-6 py-3 bg-cta-green text-white font-semibold rounded-lg hover:bg-cta-green/90 transition-colors"
                >
                  Get Planting Quote
                </Link>
                <Link
                  href="/services/landscaping"
                  className="inline-flex items-center justify-center px-6 py-3 border-2 border-charcoal text-charcoal font-semibold rounded-lg hover:bg-charcoal hover:text-white transition-colors"
                >
                  Landscaping Services
                </Link>
              </div>
            </div>
          </div>
        </article>
      </main>
    </>
  );
}
