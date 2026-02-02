'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';

export default function SeasonalBanner() {
  const [isVisible, setIsVisible] = useState(false);
  const [isDismissed, setIsDismissed] = useState(false);

  useEffect(() => {
    // Check localStorage for dismissal
    const dismissed = localStorage.getItem('seasonalBannerDismissed');
    if (dismissed) {
      const dismissedTime = parseInt(dismissed, 10);
      // Show again after 7 days
      if (Date.now() - dismissedTime < 7 * 24 * 60 * 60 * 1000) {
        setIsDismissed(true);
        return;
      }
    }
    setIsVisible(true);
  }, []);

  const handleDismiss = () => {
    setIsVisible(false);
    setIsDismissed(true);
    localStorage.setItem('seasonalBannerDismissed', Date.now().toString());
  };

  if (isDismissed || !isVisible) return null;

  return (
    <div className="bg-gradient-to-r from-primary-green to-[#3d7a35] text-white relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute -right-4 -top-4 w-24 h-24 border-2 border-white rounded-full"></div>
        <div className="absolute -left-4 -bottom-4 w-16 h-16 border-2 border-white rounded-full"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3 sm:py-4 relative">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-3 sm:gap-4">
          {/* Content */}
          <div className="flex items-center gap-3 text-center sm:text-left">
            {/* Snowflake icon */}
            <div className="hidden sm:flex w-10 h-10 bg-white/20 rounded-full items-center justify-center flex-shrink-0">
              <svg
                className="w-5 h-5"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path
                  fillRule="evenodd"
                  d="M10 2a1 1 0 011 1v1.323l1.414-1.414a1 1 0 111.414 1.414L12 6.151V8h1.849l1.828-1.828a1 1 0 011.414 1.414L15.677 9H17a1 1 0 110 2h-1.323l1.414 1.414a1 1 0 01-1.414 1.414L13.849 12H12v1.849l1.828 1.828a1 1 0 01-1.414 1.414L11 15.677V17a1 1 0 11-2 0v-1.323l-1.414 1.414a1 1 0 01-1.414-1.414L8.001 13.849H6.151L4.323 15.677a1 1 0 01-1.414-1.414L4.323 12.849 3 12a1 1 0 110-2h1.323L2.909 8.586a1 1 0 011.414-1.414L6.151 8.999H8V6.151L6.172 4.323a1 1 0 111.414-1.414L9 4.323V3a1 1 0 011-1z"
                  clipRule="evenodd"
                />
              </svg>
            </div>
            <div>
              <span className="font-bold text-sm sm:text-base">
                Winter Prep Special: 15% Off Tree Pruning & Winterization
              </span>
              <span className="hidden md:inline text-white/80 text-sm ml-2">
                — Limited slots available. Book before the freeze!
              </span>
            </div>
          </div>

          {/* CTA and dismiss */}
          <div className="flex items-center gap-3">
            <Link
              href="/contact"
              className="bg-white text-primary-green px-4 py-2 rounded-lg font-semibold text-sm hover:bg-cream transition-colors whitespace-nowrap"
            >
              Claim Your Discount
            </Link>
            <button
              onClick={handleDismiss}
              className="p-1.5 hover:bg-white/20 rounded-full transition-colors"
              aria-label="Dismiss banner"
            >
              <svg
                className="w-5 h-5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
