import type { Metadata } from 'next';
import { CityPageTemplate } from '@/components/ui';

export const metadata: Metadata = {
  title: 'Tree Service & Landscaping Potomac MD | Ruben & Sons',
  description: 'Professional tree removal, tree care, and landscaping services in Potomac, Maryland. 24/7 emergency response. Licensed & insured. Free estimates. Call 301-844-8429.',
  alternates: {
    canonical: '/locations/potomac-md',
  },
};

const potomacSchema = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  name: "Ruben & Sons Landscaping - Potomac",
  description: "Professional tree removal, tree care, and landscaping services in Potomac, Maryland.",
  telephone: "+1-301-844-8429",
  areaServed: {
    "@type": "City",
    name: "Potomac",
    addressRegion: "MD"
  },
  address: {
    "@type": "PostalAddress",
    addressLocality: "Potomac",
    addressRegion: "MD",
    addressCountry: "US"
  }
};

export default function PotomacPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(potomacSchema) }}
      />
      <CityPageTemplate
        city="Potomac"
        state="Maryland"
        stateAbbr="MD"
        county="Montgomery County"
        description="Ruben & Sons Landscaping serves Potomac's estate properties and luxury homes with comprehensive tree care and landscaping services. From the Potomac River shoreline to the rolling hills of Avenel, we understand the unique needs of large properties and heritage trees."
        neighborhoods={[
          "Avenel",
          "Potomac Falls",
          "Potomac Village",
          "Falconhurst",
          "Glen Road Estates",
          "Potomac Manors",
          "Congressional Country Club",
          "Bells Mill Estates"
        ]}
        permitInfo="Montgomery County requires permits for trees over 24 inches in diameter. Properties along the Potomac River may have additional environmental protections. Our team ensures all work complies with county and environmental regulations."
        testimonial={{
          quote: "Managing a 5-acre property requires a team you can trust. Ruben & Sons has maintained our trees and landscape for 8 years. Their attention to detail is unmatched.",
          author: "The Patterson Family"
        }}
      />
    </>
  );
}
