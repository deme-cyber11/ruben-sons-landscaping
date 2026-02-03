import type { Metadata } from 'next';
import { CityPageTemplate } from '@/components/ui';

export const metadata: Metadata = {
  title: 'Tree Service & Landscaping Hyattsville MD | Ruben & Sons',
  description: 'Professional tree removal, tree care, and landscaping services in Hyattsville, Maryland. 24/7 emergency response. Licensed & insured. Free estimates. Call 301-844-8429.',
  alternates: {
    canonical: '/locations/hyattsville-md',
  },
};

const hyattsvilleSchema = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  name: "Ruben & Sons Landscaping - Hyattsville",
  description: "Professional tree removal, tree care, and landscaping services in Hyattsville, Maryland.",
  telephone: "+1-301-844-8429",
  areaServed: {
    "@type": "City",
    name: "Hyattsville",
    addressRegion: "MD"
  },
  address: {
    "@type": "PostalAddress",
    addressLocality: "Hyattsville",
    addressRegion: "MD",
    addressCountry: "US"
  }
};

export default function HyattsvillePage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(hyattsvilleSchema) }}
      />
      <CityPageTemplate
        city="Hyattsville"
        state="Maryland"
        stateAbbr="MD"
        county="Prince George's County"
        description="Ruben & Sons Landscaping provides quality tree and landscaping services throughout Hyattsville and surrounding Prince George's County. From the Arts District to historic Mount Rainier, we help maintain the urban canopy that makes these neighborhoods special."
        neighborhoods={[
          "Hyattsville Arts District",
          "Mount Rainier",
          "Riverdale Park",
          "University Park",
          "Adelphi",
          "Langley Park",
          "West Hyattsville",
          "Queens Chapel"
        ]}
        permitInfo="Prince George's County requires permits for tree removal on larger properties. Hyattsville encourages tree preservation and offers resources for proper tree care. We ensure all work meets county requirements."
        testimonial={{
          quote: "When a storm knocked down a tree across our driveway at midnight, Ruben & Sons was there by 6 AM. They cleared the tree so we could get to work. Amazing emergency response.",
          author: "Patricia D., Mount Rainier"
        }}
      />
    </>
  );
}
