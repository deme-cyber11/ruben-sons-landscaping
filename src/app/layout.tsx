import type { Metadata } from "next";
import { Playfair_Display, Inter } from "next/font/google";
import "./globals.css";
import { Header, Footer, MobileCallButton } from "@/components/layout";

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
  title: "Ruben & Sons Landscaping | Premium Tree & Landscaping Services DMV",
  description:
    "Professional tree care, landscaping, and land clearing services in Washington DC, Maryland, and Virginia. 24/7 emergency tree removal. Licensed & insured. Free estimates. Call 301-844-8429.",
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

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${playfair.variable} ${inter.variable} font-sans antialiased`}>
        <Header />
        <main>{children}</main>
        <Footer />
        <MobileCallButton />
      </body>
    </html>
  );
}
