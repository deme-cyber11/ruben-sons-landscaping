import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Land Clearing Cost Guide 2026: Prices Per Acre | Ruben & Sons',
  description: 'Complete guide to land clearing costs in Maryland and Virginia. Learn what affects pricing, typical costs per acre, and how to budget for your lot clearing project.',
  alternates: {
    canonical: '/blog/how-much-does-land-clearing-cost',
  },
};

const articleSchema = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "How Much Does Land Clearing Cost? 2026 Pricing Guide for Maryland & Virginia",
  description: "Complete guide to land clearing costs in Maryland and Virginia.",
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

export default function LandClearingCostArticle() {
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
              <li className="text-charcoal">Land Clearing Cost Guide</li>
            </ol>
          </nav>

          <header className="mb-8">
            <div className="flex items-center gap-3 mb-4">
              <span className="text-xs font-medium text-cta-green bg-cta-green/10 px-3 py-1 rounded-full">
                Land Clearing
              </span>
              <span className="text-sm text-gray-500">10 min read</span>
              <span className="text-sm text-gray-500">February 2, 2026</span>
            </div>
            <h1 className="text-4xl font-bold text-charcoal mb-4">
              How Much Does Land Clearing Cost? 2026 Pricing Guide for Maryland & Virginia
            </h1>
            <p className="text-xl text-gray-600">
              Planning a construction project or want to clear overgrown land? Here&apos;s what you can expect to pay for land clearing services in the DMV area.
            </p>
          </header>

          <div className="prose prose-lg max-w-none">
            <p>
              Land clearing costs vary significantly based on the size of your property, terrain, vegetation density, and what you plan to do with the cleared land. In the Maryland and Virginia market, prices tend to be higher than national averages due to local regulations, disposal costs, and labor rates.
            </p>

            <h2 className="text-2xl font-bold text-charcoal mt-8 mb-4">Average Land Clearing Costs in 2026</h2>
            <p>
              Here are typical price ranges for land clearing in the DMV area:
            </p>

            <div className="bg-cream p-6 rounded-xl my-6">
              <h3 className="font-bold text-charcoal mb-4">Cost Per Acre (2026 DMV Prices)</h3>
              <ul className="space-y-3">
                <li className="flex justify-between border-b border-gray-300 pb-2">
                  <span>Light brush/overgrowth clearing</span>
                  <span className="font-semibold">$1,000 - $3,000/acre</span>
                </li>
                <li className="flex justify-between border-b border-gray-300 pb-2">
                  <span>Medium density (small trees, brush)</span>
                  <span className="font-semibold">$3,000 - $6,000/acre</span>
                </li>
                <li className="flex justify-between border-b border-gray-300 pb-2">
                  <span>Heavy clearing (large trees, dense vegetation)</span>
                  <span className="font-semibold">$6,000 - $12,000/acre</span>
                </li>
                <li className="flex justify-between">
                  <span>Wooded lot with large trees + stump removal</span>
                  <span className="font-semibold">$8,000 - $15,000+/acre</span>
                </li>
              </ul>
            </div>

            <h2 className="text-2xl font-bold text-charcoal mt-8 mb-4">Factors That Affect Land Clearing Costs</h2>

            <h3 className="text-xl font-semibold text-charcoal mt-6 mb-3">1. Lot Size</h3>
            <p>
              Larger projects typically have lower per-acre costs due to economies of scale. A half-acre lot might cost $4,000-$6,000, while a 5-acre parcel might run $15,000-$30,000 total.
            </p>

            <h3 className="text-xl font-semibold text-charcoal mt-6 mb-3">2. Vegetation Density</h3>
            <p>
              The more trees and brush on your property, the higher the cost. Key factors include:
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Number and size of trees</li>
              <li>Density of underbrush</li>
              <li>Presence of invasive species (English ivy, bamboo, etc.)</li>
              <li>Dead trees or hazardous materials</li>
            </ul>

            <h3 className="text-xl font-semibold text-charcoal mt-6 mb-3">3. Terrain</h3>
            <p>
              Sloped or rocky terrain increases costs by 20-50%. Equipment access challenges, erosion control requirements, and additional safety measures all add to the price.
            </p>

            <h3 className="text-xl font-semibold text-charcoal mt-6 mb-3">4. Debris Disposal Method</h3>
            <ul className="list-disc pl-6 space-y-2">
              <li><strong>Hauling off-site:</strong> Most expensive, but leaves a clean slate</li>
              <li><strong>On-site chipping:</strong> Moderate cost, creates mulch for landscaping</li>
              <li><strong>Burning (where permitted):</strong> Lowest cost, but permits required and weather-dependent</li>
              <li><strong>Grinding stumps vs. removal:</strong> Grinding is 50-70% cheaper than full removal</li>
            </ul>

            <h3 className="text-xl font-semibold text-charcoal mt-6 mb-3">5. Permits and Regulations</h3>
            <p>
              Montgomery County, Fairfax County, and most jurisdictions in the DMV have strict environmental regulations. Costs related to permits may include:
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Sediment and erosion control plans ($500-$2,000)</li>
              <li>Tree removal permits ($50-$200 per tree in some areas)</li>
              <li>Environmental impact assessments</li>
              <li>Wetland delineation if near streams</li>
            </ul>

            <h2 className="text-2xl font-bold text-charcoal mt-8 mb-4">What&apos;s Included in Land Clearing?</h2>
            <p>
              A comprehensive land clearing service typically includes:
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Tree felling and removal</li>
              <li>Brush and undergrowth clearing</li>
              <li>Stump grinding or removal</li>
              <li>Debris hauling or processing</li>
              <li>Basic grading (rough grade)</li>
              <li>Erosion control measures</li>
            </ul>
            <p>
              <strong>Not typically included:</strong> Fine grading, topsoil, seeding, retaining walls, or utility work.
            </p>

            <h2 className="text-2xl font-bold text-charcoal mt-8 mb-4">Ways to Reduce Land Clearing Costs</h2>
            <ol className="list-decimal pl-6 space-y-3">
              <li><strong>Keep the wood:</strong> If you have a fireplace or know someone who does, ask the contractor to leave usable firewood on-site.</li>
              <li><strong>On-site mulching:</strong> Chip smaller trees and brush on-site for landscaping use.</li>
              <li><strong>Selective clearing:</strong> Keep desirable trees and clear only what&apos;s necessary.</li>
              <li><strong>Off-season scheduling:</strong> Winter clearing is often 10-20% cheaper due to lower demand.</li>
              <li><strong>Bundle with other work:</strong> If you also need tree removal or landscaping, bundling services saves money.</li>
            </ol>

            <h2 className="text-2xl font-bold text-charcoal mt-8 mb-4">Questions to Ask Your Contractor</h2>
            <ul className="list-disc pl-6 space-y-2">
              <li>Is stump grinding/removal included?</li>
              <li>Who handles permits and inspections?</li>
              <li>What&apos;s the debris disposal plan?</li>
              <li>Is the price fixed or time-and-materials?</li>
              <li>Are you licensed and insured?</li>
              <li>Do you carry adequate liability coverage for land clearing?</li>
            </ul>

            <div className="bg-cream p-6 rounded-xl mt-8">
              <h3 className="text-xl font-bold text-charcoal mb-3">Get a Free Land Clearing Estimate</h3>
              <p className="text-gray-600 mb-4">
                Every property is different. We provide free on-site estimates for land clearing projects of any size in Maryland, Virginia, and DC.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link
                  href="/contact"
                  className="inline-flex items-center justify-center px-6 py-3 bg-cta-green text-white font-semibold rounded-lg hover:bg-cta-green/90 transition-colors"
                >
                  Request Free Estimate
                </Link>
                <Link
                  href="/services/land-clearing"
                  className="inline-flex items-center justify-center px-6 py-3 border-2 border-charcoal text-charcoal font-semibold rounded-lg hover:bg-charcoal hover:text-white transition-colors"
                >
                  Our Land Clearing Services
                </Link>
              </div>
            </div>
          </div>
        </article>
      </main>
    </>
  );
}
