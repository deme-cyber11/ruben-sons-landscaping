import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Winter Tree Protection Tips for Maryland & Virginia | Cold Weather Care',
  description: 'Protect your trees from winter damage in the DMV area. Learn about frost protection, ice damage prevention, and winter watering for healthy trees.',
  alternates: {
    canonical: '/blog/winter-tree-protection-tips',
  },
};

const articleSchema = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "Winter Tree Protection Tips for Maryland & Virginia Homeowners",
  description: "Learn how to protect your trees from winter damage in the DMV climate.",
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

export default function WinterTreeProtectionArticle() {
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
              <li className="text-charcoal">Winter Tree Protection</li>
            </ol>
          </nav>

          <header className="mb-8">
            <div className="flex items-center gap-3 mb-4">
              <span className="text-xs font-medium text-cta-green bg-cta-green/10 px-3 py-1 rounded-full">
                Seasonal Care
              </span>
              <span className="text-sm text-gray-500">6 min read</span>
              <span className="text-sm text-gray-500">February 2, 2026</span>
            </div>
            <h1 className="text-4xl font-bold text-charcoal mb-4">
              Winter Tree Protection Tips for Maryland & Virginia Homeowners
            </h1>
            <p className="text-xl text-gray-600">
              Our DMV winters may be mild compared to the north, but they can still damage unprepared trees. Here&apos;s how to protect your investment.
            </p>
          </header>

          <div className="prose prose-lg max-w-none">
            <p>
              The DMV region experiences a mix of freezing temperatures, ice storms, and occasional heavy snow that can stress and damage trees. Taking protective measures in fall can prevent costly damage and keep your trees healthy for spring.
            </p>

            <h2 className="text-2xl font-bold text-charcoal mt-8 mb-4">Common Winter Tree Damage in the DMV</h2>

            <h3 className="text-xl font-semibold text-charcoal mt-6 mb-3">Ice and Snow Damage</h3>
            <p>
              Ice storms are particularly common in Maryland and Virginia. Ice accumulation bends and breaks branches, while heavy wet snow can split trees apart.
            </p>

            <h3 className="text-xl font-semibold text-charcoal mt-6 mb-3">Frost Cracks</h3>
            <p>
              Rapid temperature changes cause the outer wood to contract faster than inner wood, creating vertical cracks. These are common in maples, oaks, and fruit trees.
            </p>

            <h3 className="text-xl font-semibold text-charcoal mt-6 mb-3">Sunscald</h3>
            <p>
              On sunny winter days, bark on the south side of trees warms up, then freezes rapidly when the sun sets. This kills bark tissue and creates dead patches.
            </p>

            <h3 className="text-xl font-semibold text-charcoal mt-6 mb-3">Root Damage</h3>
            <p>
              Freeze-thaw cycles heave soil and can damage shallow roots. Young trees and newly planted trees are most vulnerable.
            </p>

            <h2 className="text-2xl font-bold text-charcoal mt-8 mb-4">Fall Preparation Checklist</h2>

            <h3 className="text-xl font-semibold text-charcoal mt-6 mb-3">1. Deep Watering Before Freeze</h3>
            <p>
              Continue watering trees until the ground freezes. Hydrated trees are more resistant to winter damage. A deep watering in late November helps trees survive dry, frozen winters.
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Water slowly and deeply—2-3 inches per session</li>
              <li>Focus on the drip line, not the trunk</li>
              <li>Continue until ground freezes solid</li>
            </ul>

            <h3 className="text-xl font-semibold text-charcoal mt-6 mb-3">2. Apply Mulch (Properly)</h3>
            <p>
              A 3-4 inch layer of mulch insulates roots from temperature swings. Remember:
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Keep mulch 3-6 inches away from trunk</li>
              <li>Extend mulch to the drip line if possible</li>
              <li>Don&apos;t pile mulch against bark (causes rot)</li>
            </ul>

            <h3 className="text-xl font-semibold text-charcoal mt-6 mb-3">3. Remove Deadwood Before Storms</h3>
            <p>
              Dead branches become missiles during ice storms. Have dead and weakened branches removed in fall before winter weather arrives.
            </p>

            <h3 className="text-xl font-semibold text-charcoal mt-6 mb-3">4. Cable Weak Branches</h3>
            <p>
              Trees with multiple leaders or V-shaped crotches are prone to splitting under ice and snow. Professional cabling provides support during storms.
            </p>

            <h3 className="text-xl font-semibold text-charcoal mt-6 mb-3">5. Wrap Young Trees</h3>
            <p>
              Trees planted within the last 2-3 years benefit from trunk wrapping to prevent sunscald. Use commercial tree wrap or burlap:
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Start at the base and wrap upward</li>
              <li>Overlap each layer by half</li>
              <li>Wrap to first major branches</li>
              <li>Remove in spring (April)</li>
            </ul>

            <h2 className="text-2xl font-bold text-charcoal mt-8 mb-4">Winter Watering</h2>
            <p>
              Yes, trees need water in winter—especially evergreens. When we have dry spells with temperatures above 40°F:
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Water during midday when soil is thawed</li>
              <li>Focus on evergreens and newly planted trees</li>
              <li>Apply water slowly so it soaks in before freezing</li>
              <li>One deep watering per month is usually sufficient</li>
            </ul>

            <h2 className="text-2xl font-bold text-charcoal mt-8 mb-4">During Ice Storms: What NOT to Do</h2>
            <div className="bg-amber-50 border-l-4 border-amber-500 p-4 my-4">
              <p className="text-amber-800">
                <strong>Never</strong> try to shake or knock ice off trees. This causes more breakage than the ice itself. Let ice melt naturally.
              </p>
            </div>
            <ul className="list-disc pl-6 space-y-2">
              <li><strong>Don&apos;t spray with water</strong> to remove ice—it adds weight</li>
              <li><strong>Don&apos;t prune during storms</strong>—wait until danger passes</li>
              <li><strong>Don&apos;t stand under loaded trees</strong>—branches can fall suddenly</li>
              <li><strong>Do prop up bent branches</strong> gently if they&apos;re touching ground</li>
            </ul>

            <h2 className="text-2xl font-bold text-charcoal mt-8 mb-4">After Storm Damage</h2>
            <p>
              If your trees are damaged by winter storms:
            </p>
            <ol className="list-decimal pl-6 space-y-2">
              <li><strong>Stay safe:</strong> Stay away from downed power lines and hanging branches</li>
              <li><strong>Assess damage:</strong> Note broken branches and split trunks</li>
              <li><strong>Call professionals:</strong> Large branches and structural damage need expert removal</li>
              <li><strong>Don&apos;t top trees:</strong> Topping weakens trees and leads to more problems</li>
              <li><strong>Make proper cuts:</strong> Clean cuts heal better than torn wood</li>
            </ol>

            <h2 className="text-2xl font-bold text-charcoal mt-8 mb-4">Salt Damage Prevention</h2>
            <p>
              Road salt damages trees near streets and driveways. To minimize harm:
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Use calcium chloride instead of rock salt near trees</li>
              <li>Create barriers to divert salt spray</li>
              <li>Flush soil with water in early spring</li>
              <li>Choose salt-tolerant species for street trees</li>
            </ul>

            <div className="bg-cream p-6 rounded-xl mt-8">
              <h3 className="text-xl font-bold text-charcoal mb-3">Winter Tree Care Services</h3>
              <p className="text-gray-600 mb-4">
                Prepare your trees for winter or recover from storm damage. Our team provides pruning, cabling, and emergency storm response.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link
                  href="/contact"
                  className="inline-flex items-center justify-center px-6 py-3 bg-cta-green text-white font-semibold rounded-lg hover:bg-cta-green/90 transition-colors"
                >
                  Schedule Winter Prep
                </Link>
                <Link
                  href="/services/winterization"
                  className="inline-flex items-center justify-center px-6 py-3 border-2 border-charcoal text-charcoal font-semibold rounded-lg hover:bg-charcoal hover:text-white transition-colors"
                >
                  Winterization Services
                </Link>
              </div>
            </div>
          </div>
        </article>
      </main>
    </>
  );
}
