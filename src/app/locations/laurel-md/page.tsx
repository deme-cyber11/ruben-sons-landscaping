import type { Metadata } from 'next';
import { CityPageTemplate } from '@/components/ui';

export const metadata: Metadata = {
  title: 'Tree Service & Landscaping Laurel MD | Ruben & Sons',
  description: 'Professional tree removal, tree care, and landscaping services in Laurel, Maryland. 24/7 emergency response. Licensed & insured. Free estimates. Call 301-844-8429.',
  alternates: {
    canonical: '/locations/laurel-md',
  },
};

const laurelSchema = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  name: "Ruben & Sons Landscaping - Laurel",
  description: "Professional tree removal, tree care, and landscaping services in Laurel, Maryland.",
  telephone: "+1-301-844-8429",
  areaServed: {
    "@type": "City",
    name: "Laurel",
    addressRegion: "MD"
  },
  address: {
    "@type": "PostalAddress",
    addressLocality: "Laurel",
    addressRegion: "MD",
    addressCountry: "US"
  }
};

export default function LaurelPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(laurelSchema) }}
      />
      <CityPageTemplate
        city="Laurel"
        state="Maryland"
        stateAbbr="MD"
        county="Prince George's / Howard County"
        description="Ruben & Sons Landscaping serves Laurel and the surrounding areas at the crossroads of Prince George's, Howard, and Anne Arundel counties. With a mix of historic downtown properties and newer developments, Laurel offers diverse tree care challenges we're equipped to handle."
        neighborhoods={[
          "Old Town Laurel",
          "West Laurel",
          "Montpelier",
          "South Laurel",
          "Russett",
          "Maryland City",
          "Savage",
          "Laurel Lakes"
        ]}
        permitInfo="Laurel spans multiple counties with different tree regulations. Prince George's County requires permits for larger properties, while Howard County has separate requirements. Our team knows the regulations for each jurisdiction."
        testimonial={{
          quote: "Ruben & Sons cleared over an acre of overgrown land for our new construction project. Professional crew, on schedule, and great cleanup. Will definitely use again.",
          author: "Horizon Builders LLC"
        }}
      />
    </>
  );
}
