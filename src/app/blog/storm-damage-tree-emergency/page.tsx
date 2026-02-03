import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Storm Damage Tree Emergency: What to Do | Ruben & Sons',
  description: 'Storm damaged trees on your property? Learn what to do after a storm, when to call for emergency tree removal, and how to stay safe. 24/7 emergency service available.',
  alternates: {
    canonical: '/blog/storm-damage-tree-emergency',
  },
};

const articleSchema = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "Storm Damage Tree Emergency: What Every Homeowner Needs to Know",
  description: "What to do when storm damage affects trees on your property.",
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

export default function StormDamageArticle() {
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
              <li className="text-charcoal">Storm Damage Tree Emergency</li>
            </ol>
          </nav>

          <header className="mb-8">
            <div className="flex items-center gap-3 mb-4">
              <span className="text-xs font-medium text-red-600 bg-red-100 px-3 py-1 rounded-full">
                Emergency
              </span>
              <span className="text-sm text-gray-500">6 min read</span>
              <span className="text-sm text-gray-500">February 2, 2026</span>
            </div>
            <h1 className="text-4xl font-bold text-charcoal mb-4">
              Storm Damage Tree Emergency: What Every Homeowner Needs to Know
            </h1>
            <p className="text-xl text-gray-600">
              When severe weather strikes, quick action can prevent additional damage and keep your family safe. Here&apos;s what to do when trees are damaged on your property.
            </p>
          </header>

          <div className="prose prose-lg max-w-none">
            <div className="bg-red-50 border-l-4 border-red-500 p-6 my-6">
              <h3 className="text-lg font-bold text-red-800 mb-2">⚠️ Safety First</h3>
              <p className="text-red-700">
                If a tree has fallen on your home, car, or power lines, stay away and call 911. Do not attempt to remove branches near power lines yourself—downed lines can be live even if they look inactive.
              </p>
            </div>

            <h2 className="text-2xl font-bold text-charcoal mt-8 mb-4">Immediately After the Storm</h2>

            <h3 className="text-xl font-semibold text-charcoal mt-6 mb-3">1. Assess the Situation Safely</h3>
            <ul className="list-disc pl-6 space-y-2">
              <li>Wait until the storm has passed completely</li>
              <li>Stay away from downed power lines (call Pepco, Dominion, or BGE)</li>
              <li>Check for gas leaks if trees hit your home</li>
              <li>Don&apos;t walk under damaged trees—they can fall unexpectedly</li>
            </ul>

            <h3 className="text-xl font-semibold text-charcoal mt-6 mb-3">2. Document Everything</h3>
            <p>
              Before any cleanup, take photos and videos for insurance purposes:
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Wide shots showing the full extent of damage</li>
              <li>Close-ups of damage to structures</li>
              <li>Photos of the tree that caused damage</li>
              <li>Note the date and time</li>
            </ul>

            <h3 className="text-xl font-semibold text-charcoal mt-6 mb-3">3. Contact Your Insurance Company</h3>
            <p>
              File a claim as soon as possible. Most homeowner policies cover:
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Damage to structures from fallen trees</li>
              <li>Removal of trees that fall on structures or block driveways</li>
              <li>Emergency tree service to prevent further damage</li>
            </ul>
            <p>
              <strong>Note:</strong> Most policies do NOT cover removal of trees that fall in your yard without hitting anything. Check your specific policy.
            </p>

            <h2 className="text-2xl font-bold text-charcoal mt-8 mb-4">When to Call for Emergency Service</h2>
            <p>
              Call immediately if:
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li>A tree or large branch is on your house, garage, or vehicle</li>
              <li>A tree is blocking your driveway (and you need to leave)</li>
              <li>A tree is leaning against your home or power lines</li>
              <li>Hanging branches pose an immediate safety risk</li>
              <li>A damaged tree could fall at any moment</li>
            </ul>

            <div className="bg-cta-green/10 border-l-4 border-cta-green p-6 my-6">
              <h3 className="text-lg font-bold text-charcoal mb-2">📞 24/7 Emergency Service</h3>
              <p className="text-charcoal/70 mb-3">
                Ruben & Sons provides emergency tree removal throughout Maryland, Virginia, and DC. We typically respond within 2-4 hours for emergencies.
              </p>
              <a href="tel:301-844-8429" className="text-cta-green font-bold text-xl hover:underline">
                Call 301-844-8429
              </a>
            </div>

            <h2 className="text-2xl font-bold text-charcoal mt-8 mb-4">What to Expect from Emergency Tree Service</h2>
            <ol className="list-decimal pl-6 space-y-3">
              <li><strong>Initial assessment:</strong> We evaluate the situation for safety hazards and document for insurance.</li>
              <li><strong>Stabilization:</strong> If the tree is still attached, we secure it to prevent further damage.</li>
              <li><strong>Removal:</strong> Careful dismantling, especially around structures and power lines.</li>
              <li><strong>Cleanup:</strong> Debris removal and basic site cleanup.</li>
              <li><strong>Documentation:</strong> Photos and written assessment for your insurance claim.</li>
            </ol>

            <h2 className="text-2xl font-bold text-charcoal mt-8 mb-4">Can a Storm-Damaged Tree Be Saved?</h2>
            <p>
              Sometimes! Factors we consider:
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li><strong>Amount of crown remaining:</strong> Trees can often survive losing up to 50% of their crown</li>
              <li><strong>Type of damage:</strong> Clean breaks heal better than torn, ragged wounds</li>
              <li><strong>Trunk damage:</strong> Split trunks usually mean removal</li>
              <li><strong>Root damage:</strong> If roots are heaving or severed, the tree may not be stable</li>
              <li><strong>Tree species:</strong> Some trees recover better than others</li>
            </ul>
            <p>
              Our arborists can assess whether pruning and care can save your tree or if removal is the safest option.
            </p>

            <h2 className="text-2xl font-bold text-charcoal mt-8 mb-4">Beware of Storm Chasers</h2>
            <p>
              After major storms, out-of-town contractors flood the area. Protect yourself:
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Never pay for work upfront (deposit of 10-30% is reasonable)</li>
              <li>Get references and verify licensing</li>
              <li>Get a written estimate before work begins</li>
              <li>Confirm they have liability insurance and workers&apos; comp</li>
              <li>Be wary of door-to-door solicitation right after storms</li>
            </ul>

            <h2 className="text-2xl font-bold text-charcoal mt-8 mb-4">Preventing Future Storm Damage</h2>
            <p>
              Once the crisis is handled, consider these preventive measures:
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li><strong>Regular pruning:</strong> Remove dead branches and thin dense canopies</li>
              <li><strong>Cabling and bracing:</strong> Support structurally weak trees</li>
              <li><strong>Remove hazardous trees:</strong> Before they become emergencies</li>
              <li><strong>Annual inspections:</strong> Catch problems before they become dangerous</li>
            </ul>

            <div className="bg-cream p-6 rounded-xl mt-8">
              <h3 className="text-xl font-bold text-charcoal mb-3">Need Emergency Tree Service?</h3>
              <p className="text-gray-600 mb-4">
                Our crews are available 24/7 for storm emergencies throughout the DMV area. We work directly with insurance companies to make the process as smooth as possible.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <a
                  href="tel:301-844-8429"
                  className="inline-flex items-center justify-center px-6 py-3 bg-cta-green text-white font-semibold rounded-lg hover:bg-cta-green/90 transition-colors"
                >
                  Call Now: 301-844-8429
                </a>
                <Link
                  href="/services/tree-removal"
                  className="inline-flex items-center justify-center px-6 py-3 border-2 border-charcoal text-charcoal font-semibold rounded-lg hover:bg-charcoal hover:text-white transition-colors"
                >
                  Tree Removal Services
                </Link>
              </div>
            </div>
          </div>
        </article>
      </main>
    </>
  );
}
