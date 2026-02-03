import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Yard Drainage Solutions for Maryland & Virginia | Fix Standing Water',
  description: 'Fix standing water and drainage problems in your yard. Learn about French drains, grading, rain gardens, and other solutions for wet yards in the DMV area.',
  alternates: {
    canonical: '/blog/yard-drainage-solutions',
  },
};

const articleSchema = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "Yard Drainage Solutions: How to Fix Standing Water in Your Maryland or Virginia Yard",
  description: "Solutions for yard drainage problems and standing water in the DMV area.",
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

export default function YardDrainageArticle() {
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
              <li className="text-charcoal">Yard Drainage Solutions</li>
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
              Yard Drainage Solutions: How to Fix Standing Water in Your Yard
            </h1>
            <p className="text-xl text-gray-600">
              Standing water kills grass, breeds mosquitoes, and can threaten your foundation. Here&apos;s how to solve drainage problems in the DMV area.
            </p>
          </header>

          <div className="prose prose-lg max-w-none">
            <p>
              The DMV region receives about 40-45 inches of rain annually, often in intense storms. Combined with our clay-heavy soils that drain slowly, many homeowners deal with soggy yards, standing water, and flooded basements.
            </p>

            <h2 className="text-2xl font-bold text-charcoal mt-8 mb-4">Signs You Have a Drainage Problem</h2>
            <ul className="list-disc pl-6 space-y-2">
              <li>Water pools in yard for 24+ hours after rain</li>
              <li>Soggy, spongy areas even when it hasn&apos;t rained</li>
              <li>Bare patches where grass won&apos;t grow</li>
              <li>Moss growth in lawn areas</li>
              <li>Water stains on foundation</li>
              <li>Flooded or damp basement</li>
              <li>Erosion channels in yard</li>
              <li>Mulch washing away from beds</li>
            </ul>

            <h2 className="text-2xl font-bold text-charcoal mt-8 mb-4">Common Causes of Poor Drainage</h2>

            <h3 className="text-xl font-semibold text-charcoal mt-6 mb-3">Clay Soil</h3>
            <p>
              Much of Maryland and Virginia has heavy clay soil that absorbs water slowly. Clay holds water and doesn&apos;t drain well, leading to surface pooling.
            </p>

            <h3 className="text-xl font-semibold text-charcoal mt-6 mb-3">Improper Grading</h3>
            <p>
              Land should slope away from your house at about 1 inch per foot for at least 6 feet. If your yard slopes toward the house or has low spots, water collects there.
            </p>

            <h3 className="text-xl font-semibold text-charcoal mt-6 mb-3">Compacted Soil</h3>
            <p>
              Heavy foot traffic, construction equipment, or parking on lawn compacts soil, reducing its ability to absorb water.
            </p>

            <h3 className="text-xl font-semibold text-charcoal mt-6 mb-3">High Water Table</h3>
            <p>
              In low-lying areas near streams or the Chesapeake Bay, the water table may be close to the surface, limiting drainage.
            </p>

            <h2 className="text-2xl font-bold text-charcoal mt-8 mb-4">Drainage Solutions</h2>

            <h3 className="text-xl font-semibold text-charcoal mt-6 mb-3">1. Re-Grading</h3>
            <p>
              <strong>Best for:</strong> Water pooling near foundation, overall slope issues<br />
              <strong>Cost:</strong> $1,000 - $5,000+
            </p>
            <p>
              The most fundamental solution—reshape the land so water flows away from structures and toward appropriate outlets. Requires heavy equipment and often permits.
            </p>

            <h3 className="text-xl font-semibold text-charcoal mt-6 mb-3">2. French Drain</h3>
            <p>
              <strong>Best for:</strong> Collecting subsurface water, directing water away<br />
              <strong>Cost:</strong> $20-75 per linear foot installed
            </p>
            <p>
              A trench filled with gravel and a perforated pipe that collects water and directs it to a drainage outlet. Very effective for intercepting water before it reaches problem areas.
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Typically 18-24 inches deep</li>
              <li>Slopes at least 1% toward outlet</li>
              <li>Can discharge to street, storm drain, or dry well</li>
            </ul>

            <h3 className="text-xl font-semibold text-charcoal mt-6 mb-3">3. Dry Well</h3>
            <p>
              <strong>Best for:</strong> Dispersing water into ground away from structures<br />
              <strong>Cost:</strong> $500 - $2,000
            </p>
            <p>
              An underground chamber filled with gravel that collects water and allows it to slowly percolate into surrounding soil. Works well when you need an endpoint for drainage pipes.
            </p>

            <h3 className="text-xl font-semibold text-charcoal mt-6 mb-3">4. Channel Drain</h3>
            <p>
              <strong>Best for:</strong> Driveways, patios, pool areas<br />
              <strong>Cost:</strong> $30-150 per linear foot
            </p>
            <p>
              Long, narrow drain with grate that collects surface water across its length. Often installed at the bottom of driveways or where patio meets lawn.
            </p>

            <h3 className="text-xl font-semibold text-charcoal mt-6 mb-3">5. Rain Garden</h3>
            <p>
              <strong>Best for:</strong> Managing runoff naturally, environmental benefits<br />
              <strong>Cost:</strong> $3-15 per square foot
            </p>
            <p>
              A shallow depression planted with water-tolerant native plants that captures runoff and allows it to slowly infiltrate. Beautiful and eco-friendly—Maryland offers rebates for rain garden installation.
            </p>
            <div className="bg-cream p-4 rounded-xl my-4">
              <p className="text-sm"><strong>DMV Tip:</strong> Check Montgomery County&apos;s RainScapes program and similar programs in other jurisdictions for rebates on rain gardens and other conservation landscaping.</p>
            </div>

            <h3 className="text-xl font-semibold text-charcoal mt-6 mb-3">6. Swale</h3>
            <p>
              <strong>Best for:</strong> Directing water across properties<br />
              <strong>Cost:</strong> $500 - $2,000
            </p>
            <p>
              A shallow, grass-lined channel that directs water flow. Less visible than pipes or channels and can blend into landscape. Must be graded carefully to function properly.
            </p>

            <h3 className="text-xl font-semibold text-charcoal mt-6 mb-3">7. Sump Pump</h3>
            <p>
              <strong>Best for:</strong> Basement water issues, high water table<br />
              <strong>Cost:</strong> $500 - $1,500 for pump; $2,000-10,000 for full interior system
            </p>
            <p>
              Pumps groundwater away from foundation. Often combined with interior French drain system around basement perimeter. Essential in areas with high water tables.
            </p>

            <h3 className="text-xl font-semibold text-charcoal mt-6 mb-3">8. Downspout Extensions</h3>
            <p>
              <strong>Best for:</strong> Foundation issues from roof runoff<br />
              <strong>Cost:</strong> $10-50 DIY; $100-300 for buried lines
            </p>
            <p>
              Simple but often overlooked—extend downspouts to carry roof water at least 6 feet from foundation. Can be surface extensions or buried pipes.
            </p>

            <h2 className="text-2xl font-bold text-charcoal mt-8 mb-4">Choosing the Right Solution</h2>
            <div className="bg-cream p-6 rounded-xl">
              <table className="w-full text-sm">
                <thead>
                  <tr className="border-b border-gray-300">
                    <th className="text-left py-2">Problem</th>
                    <th className="text-left py-2">Best Solution</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b border-gray-200">
                    <td className="py-2">Water against foundation</td>
                    <td className="py-2">Re-grading + downspout extensions</td>
                  </tr>
                  <tr className="border-b border-gray-200">
                    <td className="py-2">Soggy lawn in one area</td>
                    <td className="py-2">French drain or dry well</td>
                  </tr>
                  <tr className="border-b border-gray-200">
                    <td className="py-2">Water across driveway</td>
                    <td className="py-2">Channel drain</td>
                  </tr>
                  <tr className="border-b border-gray-200">
                    <td className="py-2">Entire yard stays wet</td>
                    <td className="py-2">Comprehensive grading + drainage system</td>
                  </tr>
                  <tr>
                    <td className="py-2">Wet basement</td>
                    <td className="py-2">Interior/exterior French drain + sump pump</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <h2 className="text-2xl font-bold text-charcoal mt-8 mb-4">DIY vs. Professional</h2>
            <p>
              <strong>DIY-friendly:</strong> Downspout extensions, small surface drains, minor grading
            </p>
            <p>
              <strong>Hire professionals for:</strong> French drains, major grading, anything near utilities, permits required
            </p>
            <div className="bg-amber-50 border-l-4 border-amber-500 p-4 my-4">
              <p className="text-amber-800">
                <strong>Important:</strong> Always call 811 before digging to locate underground utilities. Hitting a gas line, water main, or electrical cable is dangerous and expensive.
              </p>
            </div>

            <div className="bg-cream p-6 rounded-xl mt-8">
              <h3 className="text-xl font-bold text-charcoal mb-3">Drainage Problems?</h3>
              <p className="text-gray-600 mb-4">
                We assess drainage issues and design effective solutions. From simple grading to comprehensive drainage systems, we&apos;ll fix your wet yard.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link
                  href="/contact"
                  className="inline-flex items-center justify-center px-6 py-3 bg-cta-green text-white font-semibold rounded-lg hover:bg-cta-green/90 transition-colors"
                >
                  Get Drainage Assessment
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
