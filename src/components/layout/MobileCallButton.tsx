'use client'

export default function MobileCallButton() {
  return (
    <a
      href="tel:301-844-8429"
      className="md:hidden fixed bottom-6 right-6 z-40 w-14 h-14 bg-cta-green text-white rounded-full shadow-lg flex items-center justify-center animate-pulse hover:bg-cta-green/90 transition-colors"
      aria-label="Call Ruben & Sons Landscaping at 301-844-8429"
    >
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
        />
      </svg>
    </a>
  )
}
