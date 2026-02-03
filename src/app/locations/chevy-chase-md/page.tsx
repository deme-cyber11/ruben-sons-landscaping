import type { Metadata } from 'next';
import { CityPageTemplate } from '@/components/ui';

export const metadata: Metadata = {
  title: 'Tree Service & Landscaping Chevy Chase MD | Ruben & Sons',
  description: 'Professional tree removal, tree care, and landscaping services in Chevy Chase, Maryland. 24/7 emergency response. Licensed & insured. Free estimates. Call 301-844-8429.',
  alternates: {
    canonical: '/locations/chevy-chase-md',
  },
};

const chevyChaseSchema = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  name: "Ruben & Sons Landscaping - Chevy Chase",
  description: "Professional tree removal, tree care, and landscaping services in Chevy Chase, Maryland.",
  telephone: "+1-301-844-8429",
  areaServed: {
    "@type": "City",
    name: "Chevy Chase",
    addressRegion: "MD"
  },
  address: {
    "@type": "PostalAddress",
    addressLocality: "Chevy Chase",
    addressRegion: "MD",
    addressCountry: "US"
  }
};

export default function ChevyChasePage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(chevyChaseSchema) }}
      />
      <CityPageTemplate
        city="Chevy Chase"
        state="Maryland"
        stateAbbr="MD"
        county="Montgomery County"
        description="Ruben & Sons Landscaping provides premium tree care and landscaping services throughout Chevy Chase, MD. Known for its beautiful tree-lined streets and historic properties, Chevy Chase requires expert arborists who understand the value of mature trees and proper care techniques."
        neighborhoods={[
          "Chevy Chase Village",
          "Chevy Chase Section 3",
          "Chevy Chase Section 5",
          "Martin's Additions",
          "Town of Chevy Chase",
          "Chevy Chase View",
          "Somerset",
          "Friendship Heights"
        ]}
        permitInfo="Chevy Chase Village and surrounding areas have strict tree protection ordinances. Permits are required for removing any tree over 7.5 inches in diameter. We handle all permit applications and ensure compliance with local regulations."
        testimonial={{
          quote: "The team at Ruben & Sons carefully pruned our 100-year-old oak without damaging a single branch. They clearly know what they're doing. Our property looks better than ever.",
          author: "Robert & Susan K."
        }}
      />
    </>
  );
}
