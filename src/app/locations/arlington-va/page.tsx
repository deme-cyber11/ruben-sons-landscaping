import type { Metadata } from 'next';
import { CityPageTemplate } from '@/components/ui';

export const metadata: Metadata = {
  title: 'Tree Service & Landscaping Arlington VA | Ruben & Sons',
  description: 'Professional tree removal, tree care, and landscaping services in Arlington, Virginia. 24/7 emergency response. Licensed & insured. Free estimates. Call 301-844-8429.',
  alternates: {
    canonical: '/locations/arlington-va',
  },
};

const arlingtonSchema = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  name: "Ruben & Sons Landscaping - Arlington",
  description: "Professional tree removal, tree care, and landscaping services in Arlington, Virginia.",
  telephone: "+1-301-844-8429",
  areaServed: {
    "@type": "City",
    name: "Arlington",
    addressRegion: "VA"
  },
  address: {
    "@type": "PostalAddress",
    addressLocality: "Arlington",
    addressRegion: "VA",
    addressCountry: "US"
  }
};

export default function ArlingtonPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(arlingtonSchema) }}
      />
      <CityPageTemplate
        city="Arlington"
        state="Virginia"
        stateAbbr="VA"
        county="Arlington County"
        description="Arlington's mature tree canopy requires expert care. From Clarendon to Rosslyn, Ballston to Crystal City, Ruben & Sons provides professional tree services and landscaping throughout Arlington County. We're familiar with Virginia regulations and Arlington's urban forest guidelines."
        neighborhoods={[
          "Clarendon",
          "Rosslyn",
          "Ballston",
          "Crystal City",
          "Pentagon City",
          "Shirlington",
          "Cherrydale",
          "Lyon Park",
          "Ashton Heights",
          "Bluemont",
          "Westover",
          "East Falls Church"
        ]}
        permitInfo="Arlington County requires permits for trees over 20 inches DBH on private property. The County has strong tree preservation ordinances, and replacement trees may be required. Virginia law also requires licensed Tree Care Operators for commercial work. We handle all compliance requirements."
        testimonial={{
          quote: "Best tree service in Northern Virginia. They removed a huge hickory tree that was damaging our foundation. Professional crew, fair pricing, and they even coordinated with Arlington County for the permit.",
          author: "Robert T."
        }}
      />
    </>
  );
}
