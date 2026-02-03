import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Spring Landscaping Tips for Maryland & Virginia | Ruben & Sons',
  description: 'Get your yard ready for spring with this DMV-specific guide. Expert tips on lawn care, mulching, pruning, and planting for the Maryland and Virginia climate.',
  alternates: {
    canonical: '/blog/spring-landscaping-tips-dmv',
  },
};

const articleSchema = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "Spring Landscaping Tips for Maryland & Virginia: Your Complete Checklist",
  description: "Expert spring landscaping guide for the DMV area.",
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

export default function SpringLandscapingTipsArticle() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}
      />
      <main className="pt-24 pb-16 bg-gradient-sage">
        <article className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <nav className="mb-8">
            <ol className="flex items-center gap-2 text-sm text-gray-500">
              <li><Link href="/" className="hover:text-cta-green">Home</Link></li>
              <li>/</li>
              <li><Link href="/blog" className="hover:text-cta-green">Blog</Link></li>
              <li>/</li>
              <li className="text-charcoal">Spring Landscaping Tips</li>
            </ol>
          </nav>

          <header className="mb-8 bg-white rounded-xl p-6 md:p-8 shadow-md">
            <div className="flex items-center gap-3 mb-4">
              <span className="badge-teal px-3 py-1 rounded-full text-xs font-medium">
                Landscaping
              </span>
              <span className="text-sm text-gray-500">8 min read</span>
              <span className="text-sm text-gray-500">February 2, 2026</span>
            </div>
            <div className="decorative-line mb-4"></div>
            <h1 className="text-4xl font-bold text-charcoal mb-4">
              Spring Landscaping Tips for Maryland & Virginia: Your Complete Checklist
            </h1>
            <p className="text-xl text-gray-600">
              Spring is the most important season for your landscape. Here&apos;s how to get your DMV yard ready for a beautiful growing season.
            </p>
          </header>

          <div className="prose prose-lg prose-enhanced max-w-none bg-white rounded-xl p-6 md:p-8 shadow-md">
            <p>
              After a long winter, your Maryland or Virginia landscape needs some attention. The work you do in spring sets the tone for the entire growing season. This guide covers everything you need to know, timed specifically for our Mid-Atlantic climate.
            </p>

            <h2 className="text-2xl font-bold text-charcoal mt-8 mb-4">Early Spring (March)</h2>

            <h3 className="text-xl font-semibold text-charcoal mt-6 mb-3">Clean Up Winter Debris</h3>
            <ul className="list-disc pl-6 space-y-2">
              <li>Remove fallen branches, leaves, and dead plant material</li>
              <li>Clear debris from beds, gutters, and drainage areas</li>
              <li>Inspect trees for winter storm damage</li>
              <li>Cut back ornamental grasses to 4-6 inches before new growth</li>
            </ul>

            <h3 className="text-xl font-semibold text-charcoal mt-6 mb-3">Soil Preparation</h3>
            <ul className="list-disc pl-6 space-y-2">
              <li>Test soil pH (most plants prefer 6.0-7.0)</li>
              <li>Add lime if soil is too acidic (common in the DMV)</li>
              <li>Work compost into vegetable garden beds</li>
              <li>Avoid walking on wet soil—it compacts easily</li>
            </ul>

            <h3 className="text-xl font-semibold text-charcoal mt-6 mb-3">Pruning Tasks</h3>
            <ul className="list-disc pl-6 space-y-2">
              <li>Finish pruning fruit trees before buds swell</li>
              <li>Prune roses when forsythia blooms</li>
              <li>Remove dead wood from shrubs</li>
            </ul>
            <div className="callout-warning my-4">
              <p className="font-semibold text-amber-dark mb-1">Important Timing</p>
              <p className="text-gray-700 m-0">DO NOT prune spring-flowering shrubs yet (azaleas, lilacs, etc.) - wait until after they bloom!</p>
            </div>

            <h2 className="text-2xl font-bold text-charcoal mt-8 mb-4">Mid-Spring (April)</h2>

            <h3 className="text-xl font-semibold text-charcoal mt-6 mb-3">Lawn Care</h3>
            <p>
              April is prime lawn renovation time in the DMV. Wait until soil temps hit 55°F consistently.
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li><strong>Dethatch</strong> if thatch layer is over ½ inch thick</li>
              <li><strong>Aerate</strong> compacted areas (especially high-traffic zones)</li>
              <li><strong>Overseed</strong> bare patches with a mix suited for your sun exposure</li>
              <li><strong>Apply pre-emergent</strong> crabgrass preventer (before soil hits 55°F)</li>
              <li><strong>First mowing:</strong> Set mower high (3-3.5 inches)</li>
            </ul>

            <h3 className="text-xl font-semibold text-charcoal mt-6 mb-3">Mulching</h3>
            <p>
              Mid-April is ideal mulching time in Maryland and Virginia:
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Remove old, decomposed mulch or mix into soil</li>
              <li>Apply 2-3 inches of fresh mulch to beds</li>
              <li>Use hardwood mulch for beds, pine straw for acid-lovers</li>
            </ul>
            <div className="callout-success my-4">
              <p className="font-semibold text-success mb-1">Pro Tip</p>
              <p className="text-gray-700 m-0">Keep mulch 3-4 inches away from tree trunks - no volcano mulching! This prevents rot and pest problems.</p>
            </div>

            <h3 className="text-xl font-semibold text-charcoal mt-6 mb-3">Planting</h3>
            <ul className="list-disc pl-6 space-y-2">
              <li>Plant cool-season annuals (pansies, snapdragons)</li>
              <li>Transplant or divide perennials</li>
              <li>Plant trees and shrubs (ideal time before summer heat)</li>
              <li>Start hardening off seedlings for vegetable garden</li>
            </ul>

            <h2 className="text-2xl font-bold text-charcoal mt-8 mb-4">Late Spring (May)</h2>

            <h3 className="text-xl font-semibold text-charcoal mt-6 mb-3">Warm-Season Tasks</h3>
            <ul className="list-disc pl-6 space-y-2">
              <li>Plant warm-season annuals after last frost (usually May 1-15)</li>
              <li>Install summer bulbs (dahlias, cannas, gladiolus)</li>
              <li>Prune spring-flowering shrubs AFTER they bloom</li>
              <li>Fertilize lawn with slow-release nitrogen</li>
              <li>Set up irrigation systems and check for leaks</li>
            </ul>

            <h3 className="text-xl font-semibold text-charcoal mt-6 mb-3">Pest and Weed Control</h3>
            <ul className="list-disc pl-6 space-y-2">
              <li>Scout for early pest problems (aphids, scale)</li>
              <li>Hand-pull weeds before they go to seed</li>
              <li>Apply post-emergent herbicide if needed (spot treat only)</li>
              <li>Watch for signs of fungal diseases in cool, wet weather</li>
            </ul>

            <h2 className="text-2xl font-bold text-charcoal mt-8 mb-4">Spring Checklist Summary</h2>
            <div className="callout-premium">
              <div className="decorative-line mb-4"></div>
              <ul className="space-y-3 m-0">
                <li className="flex items-center gap-3"><span className="badge-green px-2 py-0.5 rounded text-xs">Early</span> Clean up winter debris and storm damage</li>
                <li className="flex items-center gap-3"><span className="badge-green px-2 py-0.5 rounded text-xs">Early</span> Test and amend soil as needed</li>
                <li className="flex items-center gap-3"><span className="badge-green px-2 py-0.5 rounded text-xs">Early</span> Complete dormant pruning</li>
                <li className="flex items-center gap-3"><span className="badge-amber px-2 py-0.5 rounded text-xs">Mid</span> Apply pre-emergent crabgrass control</li>
                <li className="flex items-center gap-3"><span className="badge-amber px-2 py-0.5 rounded text-xs">Mid</span> Aerate and overseed lawn</li>
                <li className="flex items-center gap-3"><span className="badge-amber px-2 py-0.5 rounded text-xs">Mid</span> Refresh mulch in beds</li>
                <li className="flex items-center gap-3"><span className="badge-teal px-2 py-0.5 rounded text-xs">Late</span> Plant trees, shrubs, and perennials</li>
                <li className="flex items-center gap-3"><span className="badge-teal px-2 py-0.5 rounded text-xs">Late</span> Set up irrigation</li>
                <li className="flex items-center gap-3"><span className="badge-earth px-2 py-0.5 rounded text-xs">All</span> Schedule tree inspection</li>
                <li className="flex items-center gap-3"><span className="badge-earth px-2 py-0.5 rounded text-xs">All</span> Plan summer maintenance schedule</li>
              </ul>
            </div>

            <div className="callout-premium mt-8">
              <h3 className="text-xl font-bold text-charcoal mb-3">Need Help With Spring Cleanup?</h3>
              <p className="text-gray-600 mb-4">
                Our team handles spring cleanup, mulching, pruning, and planting throughout Maryland, Virginia, and DC. Get your yard ready for the season without the hassle.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link
                  href="/contact"
                  className="btn-primary inline-flex items-center justify-center px-6 py-3 font-semibold rounded-lg"
                >
                  Schedule Spring Service
                </Link>
                <Link
                  href="/services/maintenance"
                  className="btn-outline-green inline-flex items-center justify-center px-6 py-3 font-semibold rounded-lg"
                >
                  Maintenance Programs
                </Link>
              </div>
            </div>
          </div>
        </article>
      </main>
    </>
  );
}
