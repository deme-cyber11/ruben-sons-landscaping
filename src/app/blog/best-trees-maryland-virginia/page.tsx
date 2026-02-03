import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: '15 Best Trees for Maryland & Virginia Properties | Native Tree Guide',
  description: 'Discover the best trees to plant in Maryland and Virginia. Native species, shade trees, ornamentals, and trees that thrive in the DMV climate.',
  alternates: {
    canonical: '/blog/best-trees-maryland-virginia',
  },
};

const articleSchema = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "15 Best Trees for Maryland & Virginia Properties",
  description: "Guide to choosing the best trees for the DMV climate.",
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

export default function BestTreesArticle() {
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
              <li className="text-charcoal">Best Trees for Maryland & Virginia</li>
            </ol>
          </nav>

          <header className="mb-8">
            <div className="flex items-center gap-3 mb-4">
              <span className="text-xs font-medium text-cta-green bg-cta-green/10 px-3 py-1 rounded-full">
                Tree Selection
              </span>
              <span className="text-sm text-gray-500">10 min read</span>
              <span className="text-sm text-gray-500">February 2, 2026</span>
            </div>
            <h1 className="text-4xl font-bold text-charcoal mb-4">
              15 Best Trees for Maryland & Virginia Properties
            </h1>
            <p className="text-xl text-gray-600">
              Choosing the right tree for your property is a decades-long decision. Here are our top picks for the DMV climate.
            </p>
          </header>

          <div className="prose prose-lg max-w-none">
            <p>
              The best trees for your property depend on your goals—shade, privacy, fall color, or wildlife habitat. These species are all proven performers in the Maryland and Virginia climate (USDA zones 6b-7b).
            </p>

            <h2 className="text-2xl font-bold text-charcoal mt-8 mb-4">Large Shade Trees</h2>

            <h3 className="text-xl font-semibold text-charcoal mt-6 mb-3">1. White Oak (Quercus alba)</h3>
            <p>
              <strong>Size:</strong> 50-80 feet tall and wide<br />
              <strong>Growth rate:</strong> Slow to moderate<br />
              <strong>Best for:</strong> Large properties, wildlife habitat
            </p>
            <p>
              The quintessential American shade tree. Long-lived (300+ years), strong wood resists storm damage, and provides exceptional fall color. Acorns feed wildlife. Plant only if you have space—these get massive.
            </p>

            <h3 className="text-xl font-semibold text-charcoal mt-6 mb-3">2. Tulip Poplar (Liriodendron tulipifera)</h3>
            <p>
              <strong>Size:</strong> 70-90 feet tall, 40 feet wide<br />
              <strong>Growth rate:</strong> Fast (2-3 feet per year)<br />
              <strong>Best for:</strong> Quick shade, large properties
            </p>
            <p>
              Virginia&apos;s state tree and one of the fastest-growing native hardwoods. Unique tulip-shaped flowers in spring. Prefers deep, moist soil. Can be messy with dropping twigs.
            </p>

            <h3 className="text-xl font-semibold text-charcoal mt-6 mb-3">3. Red Maple (Acer rubrum)</h3>
            <p>
              <strong>Size:</strong> 40-70 feet tall, 30-50 feet wide<br />
              <strong>Growth rate:</strong> Moderate to fast<br />
              <strong>Best for:</strong> Fall color, wet areas
            </p>
            <p>
              Outstanding red fall color. Tolerates wet soil where other trees struggle. &apos;October Glory&apos; and &apos;Red Sunset&apos; are superior cultivars with better color.
            </p>

            <h3 className="text-xl font-semibold text-charcoal mt-6 mb-3">4. American Sycamore (Platanus occidentalis)</h3>
            <p>
              <strong>Size:</strong> 75-100 feet tall, 50-70 feet wide<br />
              <strong>Growth rate:</strong> Fast<br />
              <strong>Best for:</strong> Large properties, creek banks
            </p>
            <p>
              Massive, striking tree with distinctive mottled bark. Extremely tough and tolerant of poor conditions. Can drop bark and large leaves—not for tidy gardeners.
            </p>

            <h2 className="text-2xl font-bold text-charcoal mt-8 mb-4">Medium Shade Trees</h2>

            <h3 className="text-xl font-semibold text-charcoal mt-6 mb-3">5. River Birch (Betula nigra)</h3>
            <p>
              <strong>Size:</strong> 40-70 feet tall, 25-40 feet wide<br />
              <strong>Growth rate:</strong> Fast<br />
              <strong>Best for:</strong> Wet areas, winter interest
            </p>
            <p>
              Beautiful peeling bark provides year-round interest. Heat and disease resistant—unlike other birches. Often planted in clumps of three for dramatic effect.
            </p>

            <h3 className="text-xl font-semibold text-charcoal mt-6 mb-3">6. Black Gum (Nyssa sylvatica)</h3>
            <p>
              <strong>Size:</strong> 30-50 feet tall, 20-30 feet wide<br />
              <strong>Growth rate:</strong> Slow to moderate<br />
              <strong>Best for:</strong> Fall color, wildlife
            </p>
            <p>
              Perhaps the best fall color of any native tree—brilliant scarlet to purple. Berries attract birds. Tolerates wet and dry conditions. Underused gem.
            </p>

            <h3 className="text-xl font-semibold text-charcoal mt-6 mb-3">7. Willow Oak (Quercus phellos)</h3>
            <p>
              <strong>Size:</strong> 40-60 feet tall, 30-40 feet wide<br />
              <strong>Growth rate:</strong> Moderate to fast<br />
              <strong>Best for:</strong> Street trees, uniformity
            </p>
            <p>
              Fine-textured foliage gives a softer look than other oaks. Popular as street tree throughout DMV. Small acorns are less messy than other oaks.
            </p>

            <h2 className="text-2xl font-bold text-charcoal mt-8 mb-4">Flowering & Ornamental Trees</h2>

            <h3 className="text-xl font-semibold text-charcoal mt-6 mb-3">8. Eastern Redbud (Cercis canadensis)</h3>
            <p>
              <strong>Size:</strong> 20-30 feet tall and wide<br />
              <strong>Growth rate:</strong> Moderate<br />
              <strong>Best for:</strong> Spring color, understory
            </p>
            <p>
              Stunning pink-purple flowers in early spring before leaves emerge. Heart-shaped leaves turn yellow in fall. Native and beloved throughout the region.
            </p>

            <h3 className="text-xl font-semibold text-charcoal mt-6 mb-3">9. Flowering Dogwood (Cornus florida)</h3>
            <p>
              <strong>Size:</strong> 15-30 feet tall and wide<br />
              <strong>Growth rate:</strong> Slow<br />
              <strong>Best for:</strong> Shade gardens, four-season interest
            </p>
            <p>
              Virginia&apos;s state flower. White or pink bracts in spring, red berries and foliage in fall. Prefers partial shade. Anthracnose has impacted wild populations—buy disease-resistant cultivars.
            </p>

            <h3 className="text-xl font-semibold text-charcoal mt-6 mb-3">10. Kousa Dogwood (Cornus kousa)</h3>
            <p>
              <strong>Size:</strong> 15-30 feet tall and wide<br />
              <strong>Growth rate:</strong> Slow<br />
              <strong>Best for:</strong> Disease resistance, late bloom
            </p>
            <p>
              Asian cousin of flowering dogwood with better disease resistance. Blooms later (June) with pointed white bracts. Interesting raspberry-like fruits.
            </p>

            <h3 className="text-xl font-semibold text-charcoal mt-6 mb-3">11. Serviceberry (Amelanchier species)</h3>
            <p>
              <strong>Size:</strong> 15-25 feet tall, 10-15 feet wide<br />
              <strong>Growth rate:</strong> Moderate<br />
              <strong>Best for:</strong> Early spring flowers, edible fruit, wildlife
            </p>
            <p>
              White flowers in early spring, edible berries in summer, brilliant fall color. Native and attracts birds. Can be grown as tree or multi-stemmed shrub.
            </p>

            <h2 className="text-2xl font-bold text-charcoal mt-8 mb-4">Evergreen Trees</h2>

            <h3 className="text-xl font-semibold text-charcoal mt-6 mb-3">12. Eastern Red Cedar (Juniperus virginiana)</h3>
            <p>
              <strong>Size:</strong> 40-50 feet tall, 8-20 feet wide<br />
              <strong>Growth rate:</strong> Slow to moderate<br />
              <strong>Best for:</strong> Privacy, wildlife, poor soil
            </p>
            <p>
              Native evergreen that tolerates poor, dry soil where nothing else grows. Dense foliage provides winter cover for birds. Cedar waxwings feast on berries.
            </p>

            <h3 className="text-xl font-semibold text-charcoal mt-6 mb-3">13. American Holly (Ilex opaca)</h3>
            <p>
              <strong>Size:</strong> 40-50 feet tall, 18-40 feet wide<br />
              <strong>Growth rate:</strong> Slow<br />
              <strong>Best for:</strong> Winter interest, privacy, wildlife
            </p>
            <p>
              Classic evergreen with red berries (on female plants). Maryland&apos;s state tree. Dense growth makes excellent privacy screen. Needs male pollinator for berries.
            </p>

            <h3 className="text-xl font-semibold text-charcoal mt-6 mb-3">14. Eastern White Pine (Pinus strobus)</h3>
            <p>
              <strong>Size:</strong> 50-80 feet tall, 20-40 feet wide<br />
              <strong>Growth rate:</strong> Fast (2-3 feet per year)<br />
              <strong>Best for:</strong> Quick screening, windbreaks
            </p>
            <p>
              Fastest-growing native evergreen. Soft, fine needles and graceful form. Can be sheared for privacy hedges. Some susceptibility to ice damage.
            </p>

            <h3 className="text-xl font-semibold text-charcoal mt-6 mb-3">15. Southern Magnolia (Magnolia grandiflora)</h3>
            <p>
              <strong>Size:</strong> 40-80 feet tall, 30-40 feet wide<br />
              <strong>Growth rate:</strong> Moderate<br />
              <strong>Best for:</strong> Specimen tree, fragrance
            </p>
            <p>
              Large, glossy evergreen leaves and huge fragrant white flowers. Iconic Southern tree that thrives in the DMV. Consider smaller cultivars like &apos;Little Gem&apos; for smaller spaces.
            </p>

            <h2 className="text-2xl font-bold text-charcoal mt-8 mb-4">Trees to Avoid</h2>
            <ul className="list-disc pl-6 space-y-2">
              <li><strong>Bradford Pear:</strong> Weak wood splits in storms, invasive</li>
              <li><strong>Silver Maple:</strong> Shallow roots, weak wood, messy</li>
              <li><strong>Tree of Heaven:</strong> Invasive, bad odor</li>
              <li><strong>Norway Maple:</strong> Invasive, creates dense shade that kills grass</li>
              <li><strong>Ash species:</strong> Emerald Ash Borer has devastated these</li>
            </ul>

            <div className="bg-cream p-6 rounded-xl mt-8">
              <h3 className="text-xl font-bold text-charcoal mb-3">Ready to Plant the Perfect Tree?</h3>
              <p className="text-gray-600 mb-4">
                We can help you choose, source, and plant the ideal trees for your property. Proper planting ensures decades of healthy growth.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link
                  href="/contact"
                  className="inline-flex items-center justify-center px-6 py-3 bg-cta-green text-white font-semibold rounded-lg hover:bg-cta-green/90 transition-colors"
                >
                  Get Planting Consultation
                </Link>
                <Link
                  href="/services/landscaping"
                  className="inline-flex items-center justify-center px-6 py-3 border-2 border-charcoal text-charcoal font-semibold rounded-lg hover:bg-charcoal hover:text-white transition-colors"
                >
                  Planting Services
                </Link>
              </div>
            </div>
          </div>
        </article>
      </main>
    </>
  );
}
