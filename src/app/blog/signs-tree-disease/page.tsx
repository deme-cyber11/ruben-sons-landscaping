import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: '8 Warning Signs Your Tree Is Diseased | Maryland Tree Care Guide',
  description: 'Learn to identify common tree diseases in Maryland and Virginia. Spot warning signs early before your tree becomes a hazard or infects others.',
  alternates: {
    canonical: '/blog/signs-tree-disease',
  },
};

const articleSchema = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "8 Warning Signs Your Tree Is Diseased or Dying",
  description: "Learn to identify common tree diseases in Maryland and Virginia.",
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

export default function TreeDiseaseSignsArticle() {
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
              <li className="text-charcoal">Signs of Tree Disease</li>
            </ol>
          </nav>

          <header className="mb-8">
            <div className="flex items-center gap-3 mb-4">
              <span className="text-xs font-medium text-cta-green bg-cta-green/10 px-3 py-1 rounded-full">
                Tree Health
              </span>
              <span className="text-sm text-gray-500">6 min read</span>
              <span className="text-sm text-gray-500">February 2, 2026</span>
            </div>
            <h1 className="text-4xl font-bold text-charcoal mb-4">
              8 Warning Signs Your Tree Is Diseased or Dying
            </h1>
            <p className="text-xl text-gray-600">
              Catching tree disease early can save your tree—and prevent it from becoming a hazard or spreading to nearby trees.
            </p>
          </header>

          <div className="prose prose-lg max-w-none">
            <p>
              Trees rarely die overnight. Most decline gradually over months or years, giving you time to intervene if you know what to look for. Here are the warning signs every DMV homeowner should watch for.
            </p>

            <h2 className="text-2xl font-bold text-charcoal mt-8 mb-4">1. Fungal Growth on Trunk or Base</h2>
            <p>
              Mushrooms, conks, or bracket fungi growing on your tree indicate internal decay. By the time you see external fungal growth, significant internal damage has already occurred.
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li><strong>Shelf fungi (conks):</strong> Hard, shelf-like growths indicate heartwood rot</li>
              <li><strong>Mushrooms at base:</strong> Suggest root rot—the tree may be structurally compromised</li>
              <li><strong>Artist&apos;s conk:</strong> Common in DMV, indicates extensive internal decay</li>
            </ul>

            <h2 className="text-2xl font-bold text-charcoal mt-8 mb-4">2. Bark Falling Off or Deep Cracks</h2>
            <p>
              Healthy bark is a tree&apos;s protective layer. When bark falls off in large patches or develops deep vertical cracks, the tree is struggling.
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li><strong>Bark sloughing:</strong> May indicate fungal canker or sunscald damage</li>
              <li><strong>Deep cracks:</strong> Can be caused by frost damage, lightning, or internal decay</li>
              <li><strong>Peeling in strips:</strong> Normal for some species (birch, sycamore), concerning for others</li>
            </ul>

            <h2 className="text-2xl font-bold text-charcoal mt-8 mb-4">3. Dead Branches (Especially at the Top)</h2>
            <p>
              Dead branches throughout the canopy indicate stress. When die-back starts at the top of the tree (&quot;crown dieback&quot;), it often signals root problems or systemic disease.
            </p>
            <div className="bg-amber-50 border-l-4 border-amber-500 p-4 my-4">
              <p className="text-amber-800">
                <strong>Safety Warning:</strong> Dead branches can fall without warning. If your tree has significant deadwood, have it assessed before the next storm.
              </p>
            </div>

            <h2 className="text-2xl font-bold text-charcoal mt-8 mb-4">4. Discolored or Spotted Leaves</h2>
            <p>
              Leaf problems during the growing season often indicate disease:
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li><strong>Brown spots with yellow halos:</strong> Bacterial or fungal leaf spot</li>
              <li><strong>Powdery white coating:</strong> Powdery mildew (common in humid DMV summers)</li>
              <li><strong>Black or tar-like spots:</strong> Tar spot fungus (common on maples)</li>
              <li><strong>Yellowing between veins:</strong> Nutrient deficiency or root problems</li>
              <li><strong>Early fall color:</strong> Stress response—tree is struggling</li>
            </ul>

            <h2 className="text-2xl font-bold text-charcoal mt-8 mb-4">5. Leaning or Root Heaving</h2>
            <p>
              A tree that suddenly starts leaning is a serious concern. Combined with cracked soil or exposed roots on one side, it may indicate:
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Root rot undermining stability</li>
              <li>Construction damage to root system</li>
              <li>Soil saturation after heavy rain</li>
              <li>Wind damage to root plate</li>
            </ul>
            <p>
              <strong>This is an emergency.</strong> A leaning tree with disturbed roots can fall suddenly.
            </p>

            <h2 className="text-2xl font-bold text-charcoal mt-8 mb-4">6. Sawdust or Bore Holes</h2>
            <p>
              Small piles of sawdust-like material (frass) at the base of your tree indicate boring insects. Common in the DMV:
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li><strong>Emerald Ash Borer:</strong> D-shaped exit holes, S-shaped tunnels under bark (fatal to ash)</li>
              <li><strong>Asian Longhorned Beetle:</strong> Round exit holes about pencil-width (kills maples, elms)</li>
              <li><strong>Bark beetles:</strong> Tiny holes, often attack stressed trees</li>
            </ul>

            <h2 className="text-2xl font-bold text-charcoal mt-8 mb-4">7. Oozing Sap or Wet Spots</h2>
            <p>
              While some sap flow is normal (especially maples in spring), excessive oozing or foul-smelling wet spots indicate problems:
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li><strong>Bacterial wetwood (slime flux):</strong> Dark, smelly ooze from wounds</li>
              <li><strong>Cankers:</strong> Sunken, wet areas that may ooze</li>
              <li><strong>Bore damage:</strong> Sap flow from insect holes</li>
            </ul>

            <h2 className="text-2xl font-bold text-charcoal mt-8 mb-4">8. Sparse or Undersized Leaves</h2>
            <p>
              A tree that leafs out with fewer or smaller leaves than normal is under stress. Causes include:
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Root damage from construction or compaction</li>
              <li>Drought stress from previous season</li>
              <li>Vascular disease blocking water flow</li>
              <li>Root rot limiting uptake</li>
            </ul>

            <h2 className="text-2xl font-bold text-charcoal mt-8 mb-4">Common DMV Tree Diseases</h2>
            <div className="bg-cream p-6 rounded-xl">
              <ul className="space-y-3">
                <li><strong>Oak Wilt:</strong> Deadly fungal disease spreading through the region. Leaves brown from edges inward.</li>
                <li><strong>Dutch Elm Disease:</strong> Yellowing, wilting leaves on elm trees. Usually fatal.</li>
                <li><strong>Apple Scab:</strong> Black spots on leaves and fruit. Causes early leaf drop.</li>
                <li><strong>Fire Blight:</strong> Affects pears and apples. Branches look scorched.</li>
                <li><strong>Anthracnose:</strong> Brown blotches on leaves, especially during wet springs.</li>
              </ul>
            </div>

            <h2 className="text-2xl font-bold text-charcoal mt-8 mb-4">What to Do If You Spot These Signs</h2>
            <ol className="list-decimal pl-6 space-y-3">
              <li><strong>Don&apos;t panic:</strong> Many tree problems are treatable if caught early.</li>
              <li><strong>Document the symptoms:</strong> Take photos and note when you first observed issues.</li>
              <li><strong>Get a professional assessment:</strong> Certified arborists can diagnose problems and recommend treatment.</li>
              <li><strong>Act quickly for safety issues:</strong> Leaning trees or large deadwood need immediate attention.</li>
            </ol>

            <div className="bg-cream p-6 rounded-xl mt-8">
              <h3 className="text-xl font-bold text-charcoal mb-3">Concerned About Your Trees?</h3>
              <p className="text-gray-600 mb-4">
                Our certified arborists can assess your trees, diagnose problems, and recommend the best course of action—whether that&apos;s treatment, pruning, or removal.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link
                  href="/contact"
                  className="inline-flex items-center justify-center px-6 py-3 bg-cta-green text-white font-semibold rounded-lg hover:bg-cta-green/90 transition-colors"
                >
                  Schedule Tree Assessment
                </Link>
                <Link
                  href="/services/tree-care"
                  className="inline-flex items-center justify-center px-6 py-3 border-2 border-charcoal text-charcoal font-semibold rounded-lg hover:bg-charcoal hover:text-white transition-colors"
                >
                  Tree Care Services
                </Link>
              </div>
            </div>
          </div>
        </article>
      </main>
    </>
  );
}
