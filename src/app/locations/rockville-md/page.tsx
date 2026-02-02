import type { Metadata } from 'next';
import { CityPageTemplate } from '@/components/ui';

export const metadata: Metadata = {
  title: 'Tree Service & Landscaping Rockville MD | Ruben & Sons',
  description: 'Professional tree removal, tree care, and landscaping services in Rockville, Maryland. 24/7 emergency response. Licensed & insured. Free estimates. Call 301-844-8429.',
  alternates: {
    canonical: '/locations/rockville-md',
  },
};

const rockvilleSchema = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  name: "Ruben & Sons Landscaping - Rockville",
  description: "Professional tree removal, tree care, and landscaping services in Rockville, Maryland.",
  telephone: "+1-301-844-8429",
  areaServed: {
    "@type": "City",
    name: "Rockville",
    addressRegion: "MD"
  },
  address: {
    "@type": "PostalAddress",
    addressLocality: "Rockville",
    addressRegion: "MD",
    addressCountry: "US"
  }
};

export default function RockvillePage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(rockvilleSchema) }}
      />
      <CityPageTemplate
        city="Rockville"
        state="Maryland"
        stateAbbr="MD"
        county="Montgomery County"
        description="Rockville homeowners trust Ruben & Sons for expert tree removal, pruning, and landscaping services. From King Farm to Fallsgrove, Twinbrook to Woodley Gardens, we serve all of Rockville and surrounding Montgomery County communities with professional, reliable service."
        neighborhoods={[
          "King Farm",
          "Fallsgrove",
          "Twinbrook",
          "Woodley Gardens",
          "East Rockville",
          "West End",
          "Rockville Town Center",
          "Hungerford",
          "College Gardens",
          "Montrose",
          "Randolph Hills",
          "Luxmanor"
        ]}
        permitInfo="The City of Rockville has its own tree ordinance separate from Montgomery County. Permits are required for trees over 24 inches DBH, and heritage trees have special protections. Our team coordinates with both City of Rockville and Montgomery County when needed."
        testimonial={{
          quote: "Had them clear overgrown brush and remove several dead trees from our King Farm property. They were thorough, efficient, and left our yard looking amazing. Highly recommend!",
          author: "Patricia S."
        }}
      />
    </>
  );
}
