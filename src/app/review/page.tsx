'use client';

import { useState } from 'react';
import type { Metadata } from 'next';

// Note: Metadata export won't work in client component, but we can use head
// For now, this is a client component for form interactivity

export default function ReviewPage() {
  const [submitted, setSubmitted] = useState(false);
  const [rating, setRating] = useState(5);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // In production, this would submit to a form service
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <main className="pt-24 pb-16 min-h-screen">
        <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="bg-white rounded-xl shadow-lg p-8">
            <div className="w-16 h-16 bg-cta-green/10 rounded-full flex items-center justify-center mx-auto mb-6">
              <svg className="w-8 h-8 text-cta-green" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
            </div>
            <h1 className="text-3xl font-bold text-charcoal mb-4">Thank You!</h1>
            <p className="text-gray-600 mb-6">
              We truly appreciate you taking the time to share your experience. Your feedback helps us improve and helps other homeowners find quality tree service.
            </p>

            <div className="bg-cream p-6 rounded-lg mb-6">
              <p className="font-semibold text-charcoal mb-2">Would you also leave us a Google review?</p>
              <p className="text-sm text-gray-600 mb-4">
                Google reviews help other homeowners find us and are greatly appreciated.
              </p>
              <a
                href="https://g.page/review"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3 bg-white border-2 border-charcoal text-charcoal font-semibold rounded-lg hover:bg-charcoal hover:text-white transition-colors"
              >
                <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" />
                  <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" />
                  <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" />
                  <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" />
                </svg>
                Leave Google Review
              </a>
            </div>

            <a href="/" className="text-cta-green hover:text-primary-green font-medium">
              ← Return to Homepage
            </a>
          </div>
        </div>
      </main>
    );
  }

  return (
    <main className="pt-24 pb-16 min-h-screen bg-cream">
      <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold text-charcoal mb-4">Share Your Experience</h1>
          <p className="text-gray-600">
            We&apos;d love to hear about your experience with Ruben & Sons Landscaping. Your feedback helps us improve and helps other homeowners find quality service.
          </p>
        </div>

        <div className="bg-white rounded-xl shadow-lg p-8">
          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Rating */}
            <div>
              <label className="block text-sm font-medium text-charcoal mb-2">
                How would you rate our service?
              </label>
              <div className="flex gap-2">
                {[1, 2, 3, 4, 5].map((star) => (
                  <button
                    key={star}
                    type="button"
                    onClick={() => setRating(star)}
                    className="focus:outline-none"
                  >
                    <svg
                      className={`w-10 h-10 ${star <= rating ? 'text-yellow-400' : 'text-gray-300'}`}
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  </button>
                ))}
              </div>
            </div>

            {/* Name */}
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-charcoal mb-2">
                Your Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                required
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-cta-green focus:border-transparent"
                placeholder="John D."
              />
            </div>

            {/* City */}
            <div>
              <label htmlFor="city" className="block text-sm font-medium text-charcoal mb-2">
                City
              </label>
              <input
                type="text"
                id="city"
                name="city"
                required
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-cta-green focus:border-transparent"
                placeholder="Bethesda, MD"
              />
            </div>

            {/* Service */}
            <div>
              <label htmlFor="service" className="block text-sm font-medium text-charcoal mb-2">
                Service Received
              </label>
              <select
                id="service"
                name="service"
                required
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-cta-green focus:border-transparent"
              >
                <option value="">Select a service</option>
                <option value="tree-removal">Tree Removal</option>
                <option value="tree-care">Tree Care & Pruning</option>
                <option value="emergency">Emergency Service</option>
                <option value="landscaping">Landscaping</option>
                <option value="land-clearing">Land Clearing</option>
                <option value="maintenance">Maintenance Program</option>
                <option value="other">Other</option>
              </select>
            </div>

            {/* Review */}
            <div>
              <label htmlFor="review" className="block text-sm font-medium text-charcoal mb-2">
                Your Review
              </label>
              <textarea
                id="review"
                name="review"
                required
                rows={5}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-cta-green focus:border-transparent"
                placeholder="Tell us about your experience..."
              />
            </div>

            {/* Submit */}
            <button
              type="submit"
              className="w-full px-6 py-4 bg-cta-green text-white font-semibold rounded-lg hover:bg-cta-green/90 transition-colors"
            >
              Submit Review
            </button>
          </form>
        </div>
      </div>
    </main>
  );
}
