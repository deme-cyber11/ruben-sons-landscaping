import type { Metadata } from 'next';
import { CityPageTemplate } from '@/components/ui';

export const metadata: Metadata = {
  title: 'Tree Service & Landscaping College Park MD | Ruben & Sons',
  description: 'Professional tree removal, tree care, and landscaping services in College Park, Maryland. 24/7 emergency response. Licensed & insured. Free estimates. Call 301-844-8429.',
  alternates: {
    canonical: '/locations/college-park-md',
  },
};

const collegeParkSchema = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  name: "Ruben & Sons Landscaping - College Park",
  description: "Professional tree removal, tree care, and landscaping services in College Park, Maryland.",
  telephone: "+1-301-844-8429",
  areaServed: {
    "@type": "City",
    name: "College Park",
    addressRegion: "MD"
  },
  address: {
    "@type": "PostalAddress",
    addressLocality: "College Park",
    addressRegion: "MD",
    addressCountry: "US"
  }
};

export default function CollegeParkPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(collegeParkSchema) }}
      />
      <CityPageTemplate
        city="College Park"
        state="Maryland"
        stateAbbr="MD"
        county="Prince George's County"
        description="Ruben & Sons Landscaping provides professional tree and landscaping services to College Park residents and property managers. Home to the University of Maryland, College Park has a mix of historic neighborhoods, student housing, and new development that we're proud to serve."
        neighborhoods={[
          "Old Town College Park",
          "Hollywood",
          "Calvert Hills",
          "Berwyn",
          "Lakeland",
          "University Hills",
          "Autoville",
          "Daniels Park"
        ]}
        permitInfo="Prince George's County requires permits for tree removal on properties over 40,000 square feet. College Park has additional protections for specimen trees. Our team handles all permitting requirements for residential and commercial properties."
        testimonial={{
          quote: "We manage several rental properties near UMD. Ruben & Sons keeps our properties looking great year-round with their maintenance program. Reliable and fairly priced.",
          author: "Tom H., Property Manager"
        }}
      />
    </>
  );
}
