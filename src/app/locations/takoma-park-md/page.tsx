import type { Metadata } from 'next';
import { CityPageTemplate } from '@/components/ui';

export const metadata: Metadata = {
  title: 'Tree Service & Landscaping Takoma Park MD | Ruben & Sons',
  description: 'Professional tree removal, tree care, and landscaping services in Takoma Park, Maryland. 24/7 emergency response. Licensed & insured. Free estimates. Call 301-844-8429.',
  alternates: {
    canonical: '/locations/takoma-park-md',
  },
};

const takomaParkSchema = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  name: "Ruben & Sons Landscaping - Takoma Park",
  description: "Professional tree removal, tree care, and landscaping services in Takoma Park, Maryland.",
  telephone: "+1-301-844-8429",
  areaServed: {
    "@type": "City",
    name: "Takoma Park",
    addressRegion: "MD"
  },
  address: {
    "@type": "PostalAddress",
    addressLocality: "Takoma Park",
    addressRegion: "MD",
    addressCountry: "US"
  }
};

export default function TakomaParkPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(takomaParkSchema) }}
      />
      <CityPageTemplate
        city="Takoma Park"
        state="Maryland"
        stateAbbr="MD"
        county="Montgomery County"
        description="Ruben & Sons Landscaping serves Takoma Park's eclectic, tree-loving community with environmentally conscious tree care and landscaping services. Known as 'Azalea City,' Takoma Park values its urban forest, and we share that commitment to preserving and maintaining healthy trees."
        neighborhoods={[
          "Old Town Takoma",
          "Takoma Junction",
          "Long Branch",
          "Maple Avenue",
          "Sligo Creek",
          "Pinecrest",
          "Takoma-Langley Crossroads",
          "New Hampshire Highlands"
        ]}
        permitInfo="Takoma Park has some of the strongest tree protection laws in Maryland. Permits are required for removing any tree over 6 inches in diameter. The city employs an urban forester to review applications. We work closely with city officials to ensure compliance."
        testimonial={{
          quote: "As longtime Takoma Park residents, we appreciate that Ruben & Sons understands our community's values. They recommended treatment to save our diseased maple rather than just cutting it down.",
          author: "Linda & James P., Old Town"
        }}
      />
    </>
  );
}
