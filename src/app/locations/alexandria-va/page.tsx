import type { Metadata } from 'next';
import { CityPageTemplate } from '@/components/ui';

export const metadata: Metadata = {
  title: 'Tree Service & Landscaping Alexandria VA | Ruben & Sons',
  description: 'Professional tree removal, tree care, and landscaping services in Alexandria, Virginia. 24/7 emergency response. Licensed & insured. Free estimates. Call 301-844-8429.',
  alternates: {
    canonical: '/locations/alexandria-va',
  },
};

const alexandriaSchema = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  name: "Ruben & Sons Landscaping - Alexandria",
  description: "Professional tree removal, tree care, and landscaping services in Alexandria, Virginia.",
  telephone: "+1-301-844-8429",
  areaServed: {
    "@type": "City",
    name: "Alexandria",
    addressRegion: "VA"
  },
  address: {
    "@type": "PostalAddress",
    addressLocality: "Alexandria",
    addressRegion: "VA",
    addressCountry: "US"
  }
};

export default function AlexandriaPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(alexandriaSchema) }}
      />
      <CityPageTemplate
        city="Alexandria"
        state="Virginia"
        stateAbbr="VA"
        county="City of Alexandria"
        description="Ruben & Sons Landscaping serves Alexandria's historic neighborhoods and modern developments with professional tree care and landscaping. From the cobblestone streets of Old Town to the townhomes of Del Ray, we understand how to work within Alexandria's unique urban environment."
        neighborhoods={[
          "Old Town Alexandria",
          "Del Ray",
          "Rosemont",
          "Carlyle",
          "Eisenhower Valley",
          "Seminary Hill",
          "Potomac Yard",
          "Belle Haven"
        ]}
        permitInfo="The City of Alexandria requires permits for removing any tree over 12 inches in diameter. Historic districts like Old Town have additional tree preservation requirements. Our certified arborists ensure full compliance with city regulations."
        testimonial={{
          quote: "Living in Old Town means working around narrow streets and historic properties. Ruben's crew maneuvered expertly and left our courtyard immaculate. Highly recommended for city properties.",
          author: "Mark T., Old Town"
        }}
      />
    </>
  );
}
