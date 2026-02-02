import type { Metadata } from 'next';
import { CityPageTemplate } from '@/components/ui';

export const metadata: Metadata = {
  title: 'Tree Service & Landscaping Bethesda MD | Ruben & Sons',
  description: 'Professional tree removal, tree care, and landscaping services in Bethesda, Maryland. 24/7 emergency response. Licensed & insured. Free estimates. Call 301-844-8429.',
  alternates: {
    canonical: '/locations/bethesda-md',
  },
};

const bethesdaSchema = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  name: "Ruben & Sons Landscaping - Bethesda",
  description: "Professional tree removal, tree care, and landscaping services in Bethesda, Maryland.",
  telephone: "+1-301-844-8429",
  areaServed: {
    "@type": "City",
    name: "Bethesda",
    addressRegion: "MD"
  },
  address: {
    "@type": "PostalAddress",
    addressLocality: "Bethesda",
    addressRegion: "MD",
    addressCountry: "US"
  }
};

export default function BethesdaPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(bethesdaSchema) }}
      />
      <CityPageTemplate
        city="Bethesda"
        state="Maryland"
        stateAbbr="MD"
        county="Montgomery County"
        description="Ruben & Sons Landscaping provides expert tree removal, pruning, and landscaping services throughout Bethesda, MD. From the tree-lined streets of Chevy Chase to the estates of Potomac, we've served Montgomery County homeowners for over 15 years."
        neighborhoods={[
          "Downtown Bethesda",
          "Chevy Chase",
          "Potomac",
          "Bradley Hills",
          "Burning Tree",
          "Greenwich Forest",
          "Kenwood",
          "Westbard",
          "Somerset",
          "Edgemoor",
          "Woodmont Triangle",
          "Friendship Heights"
        ]}
        permitInfo="Montgomery County requires permits for removing trees over 24 inches in diameter or on properties over 2 acres. Trees on the County's Champion Tree list have special protections. Our team handles all permit applications as part of our service."
        testimonial={{
          quote: "Had a massive oak threatening our roof after a storm. Ruben's team was here within 2 hours and safely removed it. They even worked with our insurance company. Couldn't recommend them more highly.",
          author: "Jennifer M."
        }}
      />
    </>
  );
}
