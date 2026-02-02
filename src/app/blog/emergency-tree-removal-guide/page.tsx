import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Emergency Tree Removal: What to Do When Disaster Strikes | Ruben & Sons',
  description: 'Storm knocked down a tree? Step-by-step guide to handling emergency tree situations safely, dealing with insurance, and getting professional help fast in the DMV area.',
  alternates: {
    canonical: '/blog/emergency-tree-removal-guide',
  },
};

const articleSchema = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "Emergency Tree Removal: What to Do When Disaster Strikes",
  description: "Step-by-step guide to handling emergency tree situations safely.",
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

export default function EmergencyTreeRemovalArticle() {
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
              <li className="text-charcoal">Emergency Tree Removal Guide</li>
            </ol>
          </nav>

          {/* Emergency Banner */}
          <div className="bg-red-50 border-l-4 border-red-500 p-4 mb-8 rounded-r-lg">
            <div className="flex items-center gap-3">
              <svg className="w-6 h-6 text-red-500 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
              </svg>
              <div>
                <p className="font-bold text-red-700">Need Emergency Help Now?</p>
                <p className="text-red-600">Call <a href="tel:301-844-8429" className="underline font-bold">301-844-8429</a> for 24/7 emergency response</p>
              </div>
            </div>
          </div>

          {/* Header */}
          <header className="mb-8">
            <div className="flex items-center gap-3 mb-4">
              <span className="text-xs font-medium text-red-600 bg-red-100 px-3 py-1 rounded-full">
                Emergency
              </span>
              <span className="text-sm text-gray-500">5 min read</span>
              <span className="text-sm text-gray-500">February 1, 2026</span>
            </div>
            <h1 className="text-4xl font-bold text-charcoal mb-4">
              Emergency Tree Removal: What to Do When Disaster Strikes
            </h1>
            <p className="text-xl text-gray-600">
              A tree just fell on your property. Your heart is racing. Here&apos;s exactly what to do next to stay safe and get help fast.
            </p>
          </header>

          {/* Content */}
          <div className="prose prose-lg max-w-none">
            <h2 className="text-2xl font-bold text-charcoal mt-8 mb-4">Step 1: Ensure Everyone Is Safe</h2>
            <p>
              <strong>Safety first. Always.</strong> Before you do anything else:
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li><strong>Check for injuries</strong> - If anyone is hurt, call 911 immediately</li>
              <li><strong>Stay away from downed power lines</strong> - Assume any downed wire is live and deadly. Keep everyone at least 35 feet away</li>
              <li><strong>Don&apos;t go under or near the fallen tree</strong> - It may shift or have unstable branches</li>
              <li><strong>Evacuate if necessary</strong> - If the tree hit your home and structural integrity is compromised, get out</li>
            </ul>

            <div className="bg-yellow-50 border-l-4 border-yellow-500 p-4 my-6">
              <p className="font-bold text-yellow-700">⚠️ Power Line Warning</p>
              <p className="text-yellow-700">
                If a tree is touching or near power lines, do NOT attempt to remove it yourself. Call your utility company (Pepco, BGE, Dominion) first. They will make the area safe before tree removal can begin.
              </p>
            </div>

            <h2 className="text-2xl font-bold text-charcoal mt-8 mb-4">Step 2: Document the Damage</h2>
            <p>
              Once everyone is safe, document everything for your insurance claim:
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li><strong>Take photos and videos</strong> from multiple angles</li>
              <li><strong>Photograph any damage</strong> to your home, car, fence, or other property</li>
              <li><strong>Note the date and time</strong> and weather conditions</li>
              <li><strong>Don&apos;t move anything</strong> until you&apos;ve documented it (unless it&apos;s a safety hazard)</li>
            </ul>

            <h2 className="text-2xl font-bold text-charcoal mt-8 mb-4">Step 3: Call Your Insurance Company</h2>
            <p>
              Most homeowner&apos;s insurance policies cover tree damage and removal. Here&apos;s what to know:
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li><strong>Tree falls on your house:</strong> Usually covered under dwelling coverage</li>
              <li><strong>Tree falls on your car:</strong> Covered under comprehensive auto insurance</li>
              <li><strong>Tree falls in your yard (no damage):</strong> Often NOT covered unless it&apos;s blocking a driveway or accessible structure</li>
              <li><strong>Neighbor&apos;s tree falls on your property:</strong> Your insurance typically handles it, not theirs</li>
            </ul>
            <p>
              <strong>Pro tip:</strong> File your claim before getting removal quotes. Your insurance may have preferred vendors or require estimates from licensed contractors.
            </p>

            <h2 className="text-2xl font-bold text-charcoal mt-8 mb-4">Step 4: Call a Professional Tree Service</h2>
            <p>
              Now it&apos;s time to get the tree removed. When calling for emergency service:
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li><strong>Describe the situation clearly:</strong> Tree size, what it&apos;s resting on, power line involvement</li>
              <li><strong>Ask about their insurance:</strong> They should have liability and workers&apos; comp</li>
              <li><strong>Get a written estimate:</strong> Even in emergencies, reputable companies provide written quotes</li>
              <li><strong>Ask about timeline:</strong> True emergencies (tree on house) should be addressed within hours</li>
            </ul>

            <div className="bg-cream p-6 rounded-xl my-6">
              <h3 className="text-lg font-bold text-charcoal mb-2">Our Emergency Response</h3>
              <p className="text-gray-600 mb-4">
                Ruben & Sons provides 24/7 emergency tree removal throughout the DMV. Our crews typically respond within 2 hours for true emergencies. We also help with insurance documentation and can work directly with your adjuster.
              </p>
              <a
                href="tel:301-844-8429"
                className="inline-flex items-center gap-2 text-cta-green font-bold hover:text-primary-green"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                Call 301-844-8429 for 24/7 Emergency Response
              </a>
            </div>

            <h2 className="text-2xl font-bold text-charcoal mt-8 mb-4">Step 5: Temporary Safety Measures</h2>
            <p>
              While waiting for help to arrive:
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li><strong>Block off the area</strong> with caution tape or cones if you have them</li>
              <li><strong>Cover any holes in your roof</strong> with tarps if safe to do so</li>
              <li><strong>Turn off utilities</strong> if there&apos;s any chance of gas leaks or electrical damage</li>
              <li><strong>Keep pets and children away</strong> from the damaged area</li>
            </ul>

            <h2 className="text-2xl font-bold text-charcoal mt-8 mb-4">What NOT to Do</h2>
            <ul className="list-disc pl-6 space-y-2">
              <li><strong>Don&apos;t try to remove the tree yourself</strong> - It&apos;s dangerous and could void your insurance</li>
              <li><strong>Don&apos;t use a chainsaw near power lines</strong> - Even if lines look dead, they may not be</li>
              <li><strong>Don&apos;t hire &quot;storm chasers&quot;</strong> - Unlicensed contractors who go door-to-door after storms often do poor work and may not have insurance</li>
              <li><strong>Don&apos;t pay everything upfront</strong> - A small deposit is normal; full payment upfront is a red flag</li>
              <li><strong>Don&apos;t wait too long</strong> - A tree resting on your roof can cause additional damage over time</li>
            </ul>

            <h2 className="text-2xl font-bold text-charcoal mt-8 mb-4">After the Emergency: Next Steps</h2>
            <p>
              Once the immediate crisis is handled:
            </p>
            <ol className="list-decimal pl-6 space-y-2">
              <li><strong>Get a full inspection</strong> of other trees on your property - storms often damage multiple trees</li>
              <li><strong>Schedule stump removal</strong> if desired</li>
              <li><strong>Consider preventive pruning</strong> on remaining trees</li>
              <li><strong>Follow up with insurance</strong> on your claim</li>
              <li><strong>Plan for replacement trees</strong> if appropriate</li>
            </ol>

            <div className="bg-primary-green text-white p-6 rounded-xl mt-8">
              <h3 className="text-xl font-bold mb-3">24/7 Emergency Tree Service</h3>
              <p className="text-white/90 mb-4">
                Tree on your house? Blocking your driveway? Our emergency crews are standing by. We serve all of Montgomery County, Prince George&apos;s County, Arlington, Fairfax, and the greater DMV area.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <a
                  href="tel:301-844-8429"
                  className="inline-flex items-center justify-center px-6 py-3 bg-white text-primary-green font-bold rounded-lg hover:bg-cream transition-colors"
                >
                  <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                  Call 301-844-8429 Now
                </a>
                <Link
                  href="/contact"
                  className="inline-flex items-center justify-center px-6 py-3 border-2 border-white text-white font-semibold rounded-lg hover:bg-white hover:text-primary-green transition-colors"
                >
                  Request Callback
                </Link>
              </div>
            </div>
          </div>
        </article>
      </main>
    </>
  );
}
