import type { Metadata } from 'next';
import { CityPageTemplate } from '@/components/ui';

export const metadata: Metadata = {
  title: 'Tree Service & Landscaping Falls Church VA | Ruben & Sons',
  description: 'Professional tree removal, tree care, and landscaping services in Falls Church, Virginia. 24/7 emergency response. Licensed & insured. Free estimates. Call 301-844-8429.',
  alternates: {
    canonical: '/locations/falls-church-va',
  },
};

const fallsChurchSchema = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  name: "Ruben & Sons Landscaping - Falls Church",
  description: "Professional tree removal, tree care, and landscaping services in Falls Church, Virginia.",
  telephone: "+1-301-844-8429",
  areaServed: {
    "@type": "City",
    name: "Falls Church",
    addressRegion: "VA"
  },
  address: {
    "@type": "PostalAddress",
    addressLocality: "Falls Church",
    addressRegion: "VA",
    addressCountry: "US"
  }
};

export default function FallsChurchPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(fallsChurchSchema) }}
      />
      <CityPageTemplate
        city="Falls Church"
        state="Virginia"
        stateAbbr="VA"
        county="City of Falls Church"
        description="Ruben & Sons Landscaping serves the City of Falls Church and surrounding areas with expert tree care and landscaping. This tight-knit community known as 'The Little City' features mature trees, walkable neighborhoods, and residents who take pride in their properties."
        neighborhoods={[
          "City of Falls Church",
          "Seven Corners",
          "Bailey's Crossroads",
          "Idylwood",
          "Pimmit Hills",
          "Greenway Downs",
          "Madison Manor",
          "Jefferson Village"
        ]}
        permitInfo="The City of Falls Church requires permits for removing trees over 8 inches in diameter. The city has an active urban forestry program. For properties in Fairfax County areas, different regulations apply. We navigate both jurisdictions regularly."
        testimonial={{
          quote: "After buying our 1950s home, we needed help with overgrown landscaping and several dead trees. Ruben & Sons transformed our yard while respecting the character of our Falls Church neighborhood.",
          author: "The Williams Family"
        }}
      />
    </>
  );
}
