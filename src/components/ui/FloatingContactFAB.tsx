'use client'

import { useState, useEffect } from 'react'

export default function FloatingContactFAB() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      // Show FAB after scrolling 300px
      setIsVisible(window.scrollY > 300)
    }

    window.addEventListener('scroll', handleScroll)
    // Check initial scroll position
    handleScroll()

    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <div
      className={`fixed bottom-6 right-6 z-50 flex flex-col items-end gap-3 transition-all duration-300 ${
        isVisible ? 'translate-x-0 opacity-100' : 'translate-x-20 opacity-0 pointer-events-none'
      }`}
    >
      {/* SMS/Text Button */}
      <a
        href="sms:+13018448429?body=Hi, I'd like a free estimate for landscaping services."
        className="group flex items-center gap-3"
        aria-label="Send us a text message"
      >
        <span className="bg-charcoal text-white text-sm px-3 py-1.5 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap shadow-lg">
          Text Us
        </span>
        <div className="w-14 h-14 rounded-full bg-cta-green shadow-lg flex items-center justify-center hover:scale-110 transition-transform">
          <svg className="w-7 h-7 text-white" fill="currentColor" viewBox="0 0 24 24">
            <path d="M20 2H4c-1.1 0-2 .9-2 2v18l4-4h14c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zm0 14H6l-2 2V4h16v12z"/>
            <path d="M7 9h2v2H7zm4 0h2v2h-2zm4 0h2v2h-2z"/>
          </svg>
        </div>
      </a>

      {/* Phone Call Button */}
      <a
        href="tel:+13018448429"
        className="group flex items-center gap-3"
        aria-label="Call us now"
      >
        <span className="bg-charcoal text-white text-sm px-3 py-1.5 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap shadow-lg">
          Call Now
        </span>
        <div className="w-14 h-14 rounded-full bg-primary-green shadow-lg flex items-center justify-center hover:scale-110 transition-transform">
          <svg className="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
          </svg>
        </div>
      </a>
    </div>
  )
}
