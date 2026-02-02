import type { Metadata } from 'next';
import { CityPageTemplate } from '@/components/ui';

export const metadata: Metadata = {
  title: 'Tree Service & Landscaping Fairfax VA | Ruben & Sons',
  description: 'Professional tree removal, tree care, and landscaping services in Fairfax, Virginia. 24/7 emergency response. Licensed & insured. Free estimates. Call 301-844-8429.',
  alternates: {
    canonical: '/locations/fairfax-va',
  },
};

const fairfaxSchema = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  name: "Ruben & Sons Landscaping - Fairfax",
  description: "Professional tree removal, tree care, and landscaping services in Fairfax, Virginia.",
  telephone: "+1-301-844-8429",
  areaServed: {
    "@type": "City",
    name: "Fairfax",
    addressRegion: "VA"
  },
  address: {
    "@type": "PostalAddress",
    addressLocality: "Fairfax",
    addressRegion: "VA",
    addressCountry: "US"
  }
};

export default function FairfaxPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(fairfaxSchema) }}
      />
      <CityPageTemplate
        city="Fairfax"
        state="Virginia"
        stateAbbr="VA"
        county="Fairfax County"
        description="Serving Fairfax City and Fairfax County with professional tree care and landscaping services. From Vienna to Burke, McLean to Centreville, our experienced crews handle everything from emergency storm damage to complete landscape renovations."
        neighborhoods={[
          "Fairfax City",
          "Vienna",
          "Burke",
          "McLean",
          "Tysons Corner",
          "Great Falls",
          "Centreville",
          "Oakton",
          "Reston",
          "Herndon",
          "Chantilly",
          "Springfield"
        ]}
        permitInfo="Fairfax County has a comprehensive tree preservation ordinance. Permits are required for trees over 12 inches DBH in development situations and 24 inches DBH for individual tree removal. The County also has a Chesapeake Bay Preservation Area with additional requirements. We navigate all regulations for you."
        testimonial={{
          quote: "After the big storm last spring, Ruben's team helped us clear three fallen trees and a ton of debris. They worked safely around power lines and coordinated with Dominion Energy. True professionals.",
          author: "Michael & Karen W."
        }}
      />
    </>
  );
}
