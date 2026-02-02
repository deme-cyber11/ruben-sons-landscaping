import type { Metadata } from 'next';
import { CityPageTemplate } from '@/components/ui';

export const metadata: Metadata = {
  title: 'Tree Service & Landscaping Silver Spring MD | Ruben & Sons',
  description: 'Professional tree removal, tree care, and landscaping services in Silver Spring, Maryland. 24/7 emergency response. Licensed & insured. Free estimates. Call 301-844-8429.',
  alternates: {
    canonical: '/locations/silver-spring-md',
  },
};

const silverSpringSchema = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  name: "Ruben & Sons Landscaping - Silver Spring",
  description: "Professional tree removal, tree care, and landscaping services in Silver Spring, Maryland.",
  telephone: "+1-301-844-8429",
  areaServed: {
    "@type": "City",
    name: "Silver Spring",
    addressRegion: "MD"
  },
  address: {
    "@type": "PostalAddress",
    addressLocality: "Silver Spring",
    addressRegion: "MD",
    addressCountry: "US"
  }
};

export default function SilverSpringPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(silverSpringSchema) }}
      />
      <CityPageTemplate
        city="Silver Spring"
        state="Maryland"
        stateAbbr="MD"
        county="Montgomery County"
        description="From Downtown Silver Spring to the historic neighborhoods of Takoma Park, Ruben & Sons has been the trusted choice for tree services and landscaping in Silver Spring, MD. Our crews know these neighborhoods and respond quickly to emergencies."
        neighborhoods={[
          "Downtown Silver Spring",
          "Takoma Park",
          "Four Corners",
          "Woodside",
          "North Hills",
          "Forest Glen",
          "Wheaton",
          "Colesville",
          "White Oak",
          "Cloverly",
          "Leisure World",
          "Aspen Hill"
        ]}
        permitInfo="Silver Spring falls under Montgomery County regulations. Tree removal permits are required for trees over 24 inches DBH (diameter at breast height). Street trees require additional approval from the County DOT. We manage the entire permit process."
        testimonial={{
          quote: "We've used Ruben & Sons for years. They do our annual pruning, removed two dying ash trees, and completely redesigned our backyard. The crew is always professional and cleans up everything.",
          author: "David & Maria P."
        }}
      />
    </>
  );
}
