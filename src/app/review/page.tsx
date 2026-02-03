'use client';

import { useState } from 'react';
import Link from 'next/link';

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
      <main className="pt-24 pb-16 min-h-screen bg-gradient-warm relative overflow-hidden">
        {/* Decorative elements */}
        <div className="absolute top-20 right-10 w-64 h-64 bg-amber/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 left-10 w-96 h-96 bg-cta-green/5 rounded-full blur-3xl"></div>

        <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <div className="card-warm rounded-2xl shadow-xl p-10 animate-scale-in">
            <div className="w-20 h-20 icon-container-green rounded-full flex items-center justify-center mx-auto mb-8">
              <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
            </div>
            <h1 className="text-3xl md:text-4xl font-bold text-charcoal mb-4">Thank You!</h1>
            <div className="decorative-line-warm mx-auto mb-6"></div>
            <p className="text-charcoal/70 mb-8 text-lg leading-relaxed">
              We truly appreciate you taking the time to share your experience. Your feedback helps us improve and helps other homeowners find quality tree service.
            </p>

            <div className="callout-premium mb-8">
              <div className="flex items-center justify-center gap-2 mb-3">
                <span className="badge-amber px-3 py-1 rounded-full text-sm font-medium">
                  One More Thing
                </span>
              </div>
              <p className="font-semibold text-charcoal mb-2">Would you also leave us a Google review?</p>
              <p className="text-sm text-charcoal/70 mb-5">
                Google reviews help other homeowners find us and are greatly appreciated.
              </p>
              <a
                href="https://g.page/review"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3 bg-white border-2 border-charcoal text-charcoal font-semibold rounded-xl hover:bg-charcoal hover:text-white transition-all duration-300 hover:-translate-y-1 hover:shadow-lg"
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

            <Link href="/" className="inline-flex items-center text-cta-green hover:text-primary-green font-medium transition-colors">
              <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
              Return to Homepage
            </Link>
          </div>
        </div>
      </main>
    );
  }

  return (
    <main className="pt-24 pb-16 min-h-screen bg-gradient-warm relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-amber/5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 left-0 w-64 h-64 bg-cta-green/5 rounded-full blur-3xl"></div>
      <div className="absolute inset-0 bg-pattern-dots-light opacity-30"></div>

      <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header Section */}
        <div className="text-center mb-10 animate-fade-in-down">
          <span className="badge-amber inline-flex items-center px-4 py-1.5 rounded-full text-sm font-medium mb-4">
            We Value Your Feedback
          </span>
          <h1 className="text-4xl md:text-5xl font-bold text-charcoal mb-4">Share Your Experience</h1>
          <div className="decorative-line-warm mx-auto mb-6"></div>
          <p className="text-charcoal/70 text-lg leading-relaxed">
            We&apos;d love to hear about your experience with Ruben & Sons Landscaping. Your feedback helps us improve and helps other homeowners find quality service.
          </p>
        </div>

        {/* Featured Testimonial */}
        <div className="callout-premium mb-10 animate-fade-in-up">
          <div className="flex items-start gap-4">
            <div className="w-12 h-12 icon-container-amber rounded-full flex items-center justify-center flex-shrink-0">
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
              </svg>
            </div>
            <div>
              <p className="text-charcoal/80 italic mb-3 leading-relaxed">
                &quot;Outstanding work! Ruben and his team removed two large oaks safely and left our yard cleaner than when they arrived. Highly recommend!&quot;
              </p>
              <div className="flex items-center gap-2">
                <span className="font-semibold text-charcoal">Sarah M.</span>
                <span className="text-charcoal/50">|</span>
                <span className="text-charcoal/60 text-sm">Bethesda, MD</span>
                <div className="flex ml-2">
                  {[...Array(5)].map((_, i) => (
                    <svg key={i} className="w-4 h-4 text-amber" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Review Form */}
        <div className="card-warm rounded-2xl shadow-xl p-8 md:p-10 animate-fade-in-up animation-delay-200">
          <form onSubmit={handleSubmit} className="space-y-8">
            {/* Rating */}
            <div>
              <label className="block text-sm font-semibold text-charcoal mb-3">
                How would you rate our service?
              </label>
              <div className="flex gap-3 items-center">
                {[1, 2, 3, 4, 5].map((star) => (
                  <button
                    key={star}
                    type="button"
                    onClick={() => setRating(star)}
                    className="focus:outline-none transform transition-transform hover:scale-110 focus:scale-110"
                  >
                    <svg
                      className={`w-12 h-12 transition-colors duration-200 ${star <= rating ? 'text-amber' : 'text-gray-300'}`}
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  </button>
                ))}
                <span className="ml-3 text-charcoal/70 font-medium">
                  {rating === 5 ? 'Excellent!' : rating === 4 ? 'Great!' : rating === 3 ? 'Good' : rating === 2 ? 'Fair' : 'Poor'}
                </span>
              </div>
            </div>

            {/* Name and City Row */}
            <div className="grid md:grid-cols-2 gap-6">
              {/* Name */}
              <div>
                <label htmlFor="name" className="block text-sm font-semibold text-charcoal mb-2">
                  Your Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  required
                  className="w-full px-4 py-3.5 bg-white border-2 border-gray-200 rounded-xl focus:ring-2 focus:ring-amber/50 focus:border-amber transition-all duration-200"
                  placeholder="John D."
                />
              </div>

              {/* City */}
              <div>
                <label htmlFor="city" className="block text-sm font-semibold text-charcoal mb-2">
                  City
                </label>
                <input
                  type="text"
                  id="city"
                  name="city"
                  required
                  className="w-full px-4 py-3.5 bg-white border-2 border-gray-200 rounded-xl focus:ring-2 focus:ring-amber/50 focus:border-amber transition-all duration-200"
                  placeholder="Bethesda, MD"
                />
              </div>
            </div>

            {/* Service */}
            <div>
              <label htmlFor="service" className="block text-sm font-semibold text-charcoal mb-2">
                Service Received
              </label>
              <div className="relative">
                <select
                  id="service"
                  name="service"
                  required
                  className="w-full px-4 py-3.5 bg-white border-2 border-gray-200 rounded-xl focus:ring-2 focus:ring-amber/50 focus:border-amber transition-all duration-200 appearance-none cursor-pointer"
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
                <div className="absolute inset-y-0 right-0 flex items-center px-4 pointer-events-none">
                  <svg className="w-5 h-5 text-charcoal/50" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </div>
              </div>
            </div>

            {/* Review */}
            <div>
              <label htmlFor="review" className="block text-sm font-semibold text-charcoal mb-2">
                Your Review
              </label>
              <textarea
                id="review"
                name="review"
                required
                rows={5}
                className="w-full px-4 py-3.5 bg-white border-2 border-gray-200 rounded-xl focus:ring-2 focus:ring-amber/50 focus:border-amber transition-all duration-200 resize-none"
                placeholder="Tell us about your experience... What service did you receive? How was the crew? Would you recommend us to others?"
              />
              <p className="mt-2 text-sm text-charcoal/50">
                Your review may be featured on our website and marketing materials.
              </p>
            </div>

            {/* Submit */}
            <button
              type="submit"
              className="w-full px-6 py-4 bg-gradient-to-r from-amber to-amber-dark text-white font-semibold rounded-xl hover:shadow-xl transition-all duration-300 hover:-translate-y-1 flex items-center justify-center gap-2"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
              </svg>
              Submit Review
            </button>
          </form>
        </div>

        {/* Trust indicators */}
        <div className="mt-10 text-center animate-fade-in-up animation-delay-400">
          <p className="text-charcoal/60 text-sm mb-4">Trusted by homeowners throughout the DMV</p>
          <div className="flex items-center justify-center gap-8">
            <div className="flex items-center gap-2">
              <div className="w-10 h-10 icon-container-green rounded-lg flex items-center justify-center">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              </div>
              <span className="text-charcoal/70 text-sm font-medium">Fully Insured</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-10 h-10 icon-container-amber rounded-lg flex items-center justify-center">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
              </div>
              <span className="text-charcoal/70 text-sm font-medium">500+ Reviews</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-10 h-10 icon-container-teal rounded-lg flex items-center justify-center">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <span className="text-charcoal/70 text-sm font-medium">30+ Years</span>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
