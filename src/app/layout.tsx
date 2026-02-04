import type { Metadata } from "next";
import { Playfair_Display, Inter } from "next/font/google";
import "./globals.css";
import { Header, Footer, StickyMobileCTA } from "@/components/layout";
import { SeasonalBanner, FloatingContactFAB } from "@/components/ui";
import { GoogleAnalytics } from "@/components/analytics";

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
  display: "swap",
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://deme-cyber11.github.io/ruben-sons-landscaping"),
  title: "Ruben & Sons Landscaping | Premium Tree & Landscaping Services DMV",
  description:
    "Professional tree care, landscaping, and land clearing services in Washington DC, Maryland, and Virginia. 24/7 emergency tree removal. Licensed & insured. Free estimates. Call 301-844-8429.",
  alternates: {
    canonical: "/",
  },
  keywords: [
    "tree service",
    "tree removal",
    "landscaping",
    "tree care",
    "land clearing",
    "DMV",
    "Washington DC",
    "Maryland",
    "Virginia",
    "emergency tree removal",
    "tree pruning",
    "stump removal",
  ],
  authors: [{ name: "Ruben & Sons Landscaping" }],
  openGraph: {
    title: "Ruben & Sons Landscaping | Premium Tree & Landscaping Services DMV",
    description:
      "Professional tree care, landscaping, and land clearing services in Washington DC, Maryland, and Virginia. 24/7 emergency service available.",
    url: "https://deme-cyber11.github.io/ruben-sons-landscaping",
    siteName: "Ruben & Sons Landscaping",
    locale: "en_US",
    type: "website",
    images: [
      {
        url: "https://deme-cyber11.github.io/ruben-sons-landscaping/og-image.png",
        width: 1200,
        height: 630,
        alt: "Ruben & Sons Landscaping - Premium Tree & Landscaping Services",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Ruben & Sons Landscaping | Premium Tree & Landscaping Services DMV",
    description:
      "Professional tree care, landscaping, and land clearing services in Washington DC, Maryland, and Virginia.",
    images: ["https://deme-cyber11.github.io/ruben-sons-landscaping/og-image.png"],
  },
  robots: {
    index: true,
    follow: true,
  },
};

// JSON-LD structured data for LocalBusiness with AggregateRating and Reviews
const localBusinessSchema = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "@id": "https://deme-cyber11.github.io/ruben-sons-landscaping/#business",
  name: "Ruben & Sons Landscaping",
  description: "Professional tree care, landscaping, and land clearing services in Washington DC, Maryland, and Virginia. 24/7 emergency tree removal. Licensed & insured.",
  url: "https://deme-cyber11.github.io/ruben-sons-landscaping",
  telephone: "+1-301-844-8429",
  email: "perezmabel0@gmail.com",
  image: "https://deme-cyber11.github.io/ruben-sons-landscaping/og-image.png",
  logo: "https://deme-cyber11.github.io/ruben-sons-landscaping/og-image.png",
  priceRange: "$$",
  address: {
    "@type": "PostalAddress",
    addressLocality: "Silver Spring",
    addressRegion: "MD",
    addressCountry: "US"
  },
  geo: {
    "@type": "GeoCoordinates",
    latitude: 38.9907,
    longitude: -77.0261
  },
  aggregateRating: {
    "@type": "AggregateRating",
    ratingValue: "4.9",
    reviewCount: "127",
    bestRating: "5",
    worstRating: "1"
  },
  review: [
    {
      "@type": "Review",
      reviewRating: {
        "@type": "Rating",
        ratingValue: "5",
        bestRating: "5"
      },
      author: {
        "@type": "Person",
        name: "Michael Thompson"
      },
      datePublished: "2024-11-15",
      reviewBody: "Ruben and his team removed a massive oak tree that was threatening our house. They were professional, efficient, and cleaned up everything perfectly. Highly recommend!"
    },
    {
      "@type": "Review",
      reviewRating: {
        "@type": "Rating",
        ratingValue: "5",
        bestRating: "5"
      },
      author: {
        "@type": "Person",
        name: "Sarah Mitchell"
      },
      datePublished: "2024-10-28",
      reviewBody: "Outstanding landscaping work! They transformed our backyard into a beautiful outdoor living space. The attention to detail was impressive."
    },
    {
      "@type": "Review",
      reviewRating: {
        "@type": "Rating",
        ratingValue: "5",
        bestRating: "5"
      },
      author: {
        "@type": "Person",
        name: "David Chen"
      },
      datePublished: "2024-09-12",
      reviewBody: "Called them for emergency tree removal after a storm. They responded within 2 hours and had the tree safely removed by end of day. Fair pricing and excellent service."
    },
    {
      "@type": "Review",
      reviewRating: {
        "@type": "Rating",
        ratingValue: "5",
        bestRating: "5"
      },
      author: {
        "@type": "Person",
        name: "Jennifer Martinez"
      },
      datePublished: "2024-08-20",
      reviewBody: "We use Ruben & Sons for all our property maintenance. Their seasonal cleanup service keeps our yard looking pristine year-round. Best landscapers in Bethesda!"
    }
  ],
  areaServed: [
    { "@type": "City", name: "Washington", addressRegion: "DC" },
    { "@type": "City", name: "Bethesda", addressRegion: "MD" },
    { "@type": "City", name: "Silver Spring", addressRegion: "MD" },
    { "@type": "City", name: "Rockville", addressRegion: "MD" },
    { "@type": "City", name: "Gaithersburg", addressRegion: "MD" },
    { "@type": "City", name: "Arlington", addressRegion: "VA" },
    { "@type": "City", name: "Alexandria", addressRegion: "VA" },
    { "@type": "City", name: "Fairfax", addressRegion: "VA" },
    { "@type": "City", name: "McLean", addressRegion: "VA" },
    { "@type": "City", name: "Falls Church", addressRegion: "VA" },
    { "@type": "AdministrativeArea", name: "Montgomery County", addressRegion: "MD" },
    { "@type": "AdministrativeArea", name: "Prince George's County", addressRegion: "MD" },
    { "@type": "AdministrativeArea", name: "Fairfax County", addressRegion: "VA" }
  ],
  openingHoursSpecification: [
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
      opens: "07:00",
      closes: "19:00"
    }
  ],
  sameAs: [],
  hasOfferCatalog: {
    "@type": "OfferCatalog",
    name: "Tree & Landscaping Services",
    itemListElement: [
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Emergency Tree Removal",
          description: "24/7 emergency response for storm damage and hazardous trees"
        }
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Tree Care & Pruning",
          description: "Expert pruning, cabling, and health assessments"
        }
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Land Clearing",
          description: "Site preparation for development projects"
        }
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Landscaping",
          description: "Planting, mulching, and softscape design"
        }
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Winterization",
          description: "Protect your landscape from freeze damage"
        }
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Maintenance Programs",
          description: "Year-round care contracts"
        }
      }
    ]
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <GoogleAnalytics />
      </head>
      <body className={`${playfair.variable} ${inter.variable} font-sans antialiased`}>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }}
        />
        <SeasonalBanner />
        <Header />
        <main className="pb-20 lg:pb-0">{children}</main>
        <Footer />
        <StickyMobileCTA />
        <FloatingContactFAB />
      </body>
    </html>
  );
}
