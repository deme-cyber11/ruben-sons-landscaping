'use client'

import Script from 'next/script'

// TODO: Replace with your actual GA4 Measurement ID from Google Analytics
const GA_MEASUREMENT_ID = 'G-XXXXXXXXXX'

export default function GoogleAnalytics() {
  return (
    <>
      <Script
        src={`https://www.googletagmanager.com/gtag/js?id=${GA_MEASUREMENT_ID}`}
        strategy="afterInteractive"
      />
      <Script id="google-analytics" strategy="afterInteractive">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', '${GA_MEASUREMENT_ID}');
        `}
      </Script>
    </>
  )
}

// Conversion tracking helpers - use these in your components
export function trackPhoneClick() {
  if (typeof window !== 'undefined' && typeof window.gtag === 'function') {
    window.gtag('event', 'phone_click', {
      event_category: 'engagement',
      event_label: 'Phone Number Click'
    })
  }
}

export function trackFormSubmit(formName: string) {
  if (typeof window !== 'undefined' && typeof window.gtag === 'function') {
    window.gtag('event', 'form_submit', {
      event_category: 'conversion',
      event_label: formName
    })
  }
}

export function trackQuoteRequest(service: string) {
  if (typeof window !== 'undefined' && typeof window.gtag === 'function') {
    window.gtag('event', 'quote_request', {
      event_category: 'conversion',
      event_label: service,
      value: 1
    })
  }
}

// Add gtag type to window
declare global {
  interface Window {
    gtag: (command: string, ...args: unknown[]) => void
    dataLayer: unknown[]
  }
}
