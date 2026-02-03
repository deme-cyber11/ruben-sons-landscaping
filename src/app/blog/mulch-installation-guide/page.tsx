import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Complete Mulch Installation Guide for Maryland & Virginia | Ruben & Sons',
  description: 'Learn proper mulching techniques, best mulch types for the DMV climate, how much to apply, and common mistakes to avoid. Expert mulching tips from local professionals.',
  alternates: {
    canonical: '/blog/mulch-installation-guide',
  },
};

const articleSchema = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "Complete Mulch Installation Guide for Maryland & Virginia Homeowners",
  description: "Learn proper mulching techniques and best practices for the DMV climate.",
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

export default function MulchGuideArticle() {
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
              <li className="text-charcoal">Mulch Installation Guide</li>
            </ol>
          </nav>

          <header className="mb-8">
            <div className="flex items-center gap-3 mb-4">
              <span className="text-xs font-medium text-cta-green bg-cta-green/10 px-3 py-1 rounded-full">
                Landscaping
              </span>
              <span className="text-sm text-gray-500">8 min read</span>
              <span className="text-sm text-gray-500">February 2, 2026</span>
            </div>
            <h1 className="text-4xl font-bold text-charcoal mb-4">
              Complete Mulch Installation Guide for Maryland & Virginia Homeowners
            </h1>
            <p className="text-xl text-gray-600">
              Proper mulching is one of the best things you can do for your landscape. Learn the right techniques, materials, and timing for the DMV climate.
            </p>
          </header>

          <div className="prose prose-lg max-w-none">
            <p>
              Mulch does more than make your beds look neat—it conserves moisture, regulates soil temperature, suppresses weeds, and adds nutrients as it breaks down. But improper mulching can actually harm your plants. Here&apos;s how to do it right.
            </p>

            <h2 className="text-2xl font-bold text-charcoal mt-8 mb-4">Best Mulch Types for the DMV Climate</h2>

            <h3 className="text-xl font-semibold text-charcoal mt-6 mb-3">Hardwood Bark Mulch</h3>
            <p>
              <strong>Best for:</strong> Most landscape beds, around trees<br />
              <strong>Pros:</strong> Affordable, widely available, breaks down slowly, neutral color<br />
              <strong>Cons:</strong> Can mat if applied too thick, may float in heavy rain
            </p>

            <h3 className="text-xl font-semibold text-charcoal mt-6 mb-3">Pine Bark Mulch</h3>
            <p>
              <strong>Best for:</strong> Acid-loving plants (azaleas, rhododendrons, blueberries)<br />
              <strong>Pros:</strong> Slightly acidifies soil, attractive reddish color, good drainage<br />
              <strong>Cons:</strong> More expensive, can wash away on slopes
            </p>

            <h3 className="text-xl font-semibold text-charcoal mt-6 mb-3">Dyed Mulch (Black, Brown, Red)</h3>
            <p>
              <strong>Best for:</strong> Decorative beds where color matters<br />
              <strong>Pros:</strong> Long-lasting color, consistent appearance<br />
              <strong>Cons:</strong> May contain lower-quality wood, dye can leach in rain
            </p>

            <h3 className="text-xl font-semibold text-charcoal mt-6 mb-3">Cedar Mulch</h3>
            <p>
              <strong>Best for:</strong> Areas prone to insects, vegetable gardens<br />
              <strong>Pros:</strong> Natural insect repellent, pleasant scent, slow decay<br />
              <strong>Cons:</strong> Higher cost, strong smell may be overwhelming
            </p>

            <h2 className="text-2xl font-bold text-charcoal mt-8 mb-4">How Much Mulch Do You Need?</h2>
            <p>
              The ideal mulch depth is <strong>2-4 inches</strong>. Here&apos;s a quick calculator:
            </p>
            <div className="bg-cream p-6 rounded-xl">
              <p className="font-semibold mb-2">Mulch Coverage Calculator:</p>
              <ul className="space-y-1">
                <li>1 cubic yard covers approximately 160 sq ft at 2&quot; deep</li>
                <li>1 cubic yard covers approximately 100 sq ft at 3&quot; deep</li>
                <li>1 cubic yard covers approximately 80 sq ft at 4&quot; deep</li>
              </ul>
              <p className="mt-3 text-sm text-gray-600">
                Formula: (Square footage x depth in inches) / 324 = cubic yards needed
              </p>
            </div>

            <h2 className="text-2xl font-bold text-charcoal mt-8 mb-4">When to Mulch in Maryland & Virginia</h2>
            <ul className="list-disc pl-6 space-y-2">
              <li><strong>Spring (March-April):</strong> After soil warms up, before summer heat</li>
              <li><strong>Fall (October-November):</strong> After leaves drop, before hard freeze</li>
            </ul>
            <p>
              Avoid mulching too early in spring—it keeps soil cold and delays plant growth. Wait until soil temperatures reach 50-55°F.
            </p>

            <h2 className="text-2xl font-bold text-charcoal mt-8 mb-4">Common Mulching Mistakes to Avoid</h2>

            <h3 className="text-xl font-semibold text-charcoal mt-6 mb-3">1. Volcano Mulching</h3>
            <p>
              Piling mulch against tree trunks creates a &quot;volcano&quot; that holds moisture against bark, causing rot and disease. Always leave a 3-6 inch gap around tree trunks—the root flare should be visible.
            </p>

            <h3 className="text-xl font-semibold text-charcoal mt-6 mb-3">2. Over-Mulching</h3>
            <p>
              More than 4 inches of mulch suffocates roots and prevents water from reaching soil. If you already have old mulch, rake it to break up matting rather than adding more on top.
            </p>

            <h3 className="text-xl font-semibold text-charcoal mt-6 mb-3">3. Using Fresh Wood Chips</h3>
            <p>
              Fresh chips from tree trimming can rob nitrogen from soil as they decompose. Let chips age 6-12 months before using, or only use them on pathways.
            </p>

            <h3 className="text-xl font-semibold text-charcoal mt-6 mb-3">4. Mulching Over Wet Soil</h3>
            <p>
              Applying mulch to waterlogged soil traps excess moisture and promotes root rot. Wait for soil to dry somewhat after heavy rain.
            </p>

            <h2 className="text-2xl font-bold text-charcoal mt-8 mb-4">Step-by-Step Mulch Installation</h2>
            <ol className="list-decimal pl-6 space-y-3">
              <li><strong>Prepare the bed:</strong> Remove weeds, old mulch, and debris. Edge beds for clean lines.</li>
              <li><strong>Amend soil if needed:</strong> Add compost or fertilizer before mulching.</li>
              <li><strong>Install landscape fabric (optional):</strong> Useful for weed suppression but can restrict water.</li>
              <li><strong>Apply mulch:</strong> Spread evenly to 2-4 inch depth.</li>
              <li><strong>Create tree wells:</strong> Pull mulch 3-6 inches away from trunks.</li>
              <li><strong>Water lightly:</strong> Helps settle mulch and prevents wind displacement.</li>
            </ol>

            <div className="bg-cream p-6 rounded-xl mt-8">
              <h3 className="text-xl font-bold text-charcoal mb-3">Professional Mulching Services</h3>
              <p className="text-gray-600 mb-4">
                Skip the back-breaking work. We deliver, spread, and install mulch with precision—no volcanos, no mess, no hassle.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link
                  href="/contact"
                  className="inline-flex items-center justify-center px-6 py-3 bg-cta-green text-white font-semibold rounded-lg hover:bg-cta-green/90 transition-colors"
                >
                  Get Mulching Quote
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
