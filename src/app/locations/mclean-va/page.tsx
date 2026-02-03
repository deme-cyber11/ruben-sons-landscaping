import type { Metadata } from 'next';
import { CityPageTemplate } from '@/components/ui';

export const metadata: Metadata = {
  title: 'Tree Service & Landscaping McLean VA | Ruben & Sons',
  description: 'Professional tree removal, tree care, and landscaping services in McLean, Virginia. 24/7 emergency response. Licensed & insured. Free estimates. Call 301-844-8429.',
  alternates: {
    canonical: '/locations/mclean-va',
  },
};

const mcleanSchema = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  name: "Ruben & Sons Landscaping - McLean",
  description: "Professional tree removal, tree care, and landscaping services in McLean, Virginia.",
  telephone: "+1-301-844-8429",
  areaServed: {
    "@type": "City",
    name: "McLean",
    addressRegion: "VA"
  },
  address: {
    "@type": "PostalAddress",
    addressLocality: "McLean",
    addressRegion: "VA",
    addressCountry: "US"
  }
};

export default function McLeanPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(mcleanSchema) }}
      />
      <CityPageTemplate
        city="McLean"
        state="Virginia"
        stateAbbr="VA"
        county="Fairfax County"
        description="Ruben & Sons Landscaping provides expert tree and landscaping services throughout McLean, VA. Home to diplomatic residences, executive estates, and the renowned Great Falls Park, McLean demands professional-grade tree care that protects property values and maintains the area's natural beauty."
        neighborhoods={[
          "Great Falls",
          "Langley",
          "Chesterbrook",
          "Franklin Park",
          "Salona Village",
          "Chain Bridge Forest",
          "Evermay",
          "Ballantrae"
        ]}
        permitInfo="Fairfax County requires permits for removing trees over 12 inches in diameter on properties over half an acre. McLean's Resource Protection Areas near streams have additional requirements. We handle all permitting as part of our service."
        testimonial={{
          quote: "After the derecho damaged several trees on our property, Ruben & Sons responded immediately. They saved what they could and safely removed what they couldn't. True professionals.",
          author: "Ambassador Davis (Ret.)"
        }}
      />
    </>
  );
}
