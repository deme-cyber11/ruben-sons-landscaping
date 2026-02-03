import type { Metadata } from 'next';
import { CityPageTemplate } from '@/components/ui';

export const metadata: Metadata = {
  title: 'Tree Service & Landscaping Vienna VA | Ruben & Sons',
  description: 'Professional tree removal, tree care, and landscaping services in Vienna, Virginia. 24/7 emergency response. Licensed & insured. Free estimates. Call 301-844-8429.',
  alternates: {
    canonical: '/locations/vienna-va',
  },
};

const viennaSchema = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  name: "Ruben & Sons Landscaping - Vienna",
  description: "Professional tree removal, tree care, and landscaping services in Vienna, Virginia.",
  telephone: "+1-301-844-8429",
  areaServed: {
    "@type": "City",
    name: "Vienna",
    addressRegion: "VA"
  },
  address: {
    "@type": "PostalAddress",
    addressLocality: "Vienna",
    addressRegion: "VA",
    addressCountry: "US"
  }
};

export default function ViennaPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(viennaSchema) }}
      />
      <CityPageTemplate
        city="Vienna"
        state="Virginia"
        stateAbbr="VA"
        county="Fairfax County"
        description="Ruben & Sons Landscaping provides comprehensive tree and landscaping services throughout Vienna, VA. This family-friendly community features mature trees, established neighborhoods, and properties that deserve expert care from certified professionals."
        neighborhoods={[
          "Town of Vienna",
          "Tysons Corner",
          "Dunn Loring",
          "Wolf Trap",
          "Oakton",
          "Wolftrap Farm",
          "Windover Heights",
          "Vienna Woods"
        ]}
        permitInfo="Vienna and Fairfax County require permits for significant tree removal. The Town of Vienna has specific protections for street trees. Our team handles all required permits and coordinates with local authorities as needed."
        testimonial={{
          quote: "We've used Ruben & Sons for both tree removal and new plantings. They helped us remove a dying ash and replaced it with a beautiful red maple. Great advice and excellent workmanship.",
          author: "The Nguyen Family, Vienna Woods"
        }}
      />
    </>
  );
}
