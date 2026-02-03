interface TestimonialCardProps {
  quote: string;
  author: string;
  location?: string;
  rating?: number;
  variant?: 'default' | 'warm' | 'premium';
}

export default function TestimonialCard({
  quote,
  author,
  location,
  rating = 5,
  variant = 'default',
}: TestimonialCardProps) {
  const cardClass = {
    default: 'bg-white border border-gray-100 hover:shadow-lg',
    warm: 'card-warm',
    premium: 'card-premium',
  }[variant];

  const avatarGradient = {
    default: 'bg-gradient-to-br from-primary-green to-cta-green',
    warm: 'bg-gradient-to-br from-amber to-amber-dark',
    premium: 'bg-gradient-to-br from-cta-green via-teal to-amber',
  }[variant];

  return (
    <div className={`${cardClass} rounded-xl p-6 transition-all duration-300 relative overflow-hidden`}>
      {/* Decorative quote marks in background */}
      <div className="absolute top-4 right-4 text-6xl text-primary-green/5 font-serif leading-none select-none">
        &ldquo;
      </div>

      {/* Google Review Style Header */}
      <div className="flex items-center gap-2 mb-4">
        <svg className="w-6 h-6" viewBox="0 0 24 24">
          <path
            fill="#4285F4"
            d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
          />
          <path
            fill="#34A853"
            d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
          />
          <path
            fill="#FBBC05"
            d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"
          />
          <path
            fill="#EA4335"
            d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
          />
        </svg>
        <span className="text-sm text-gray-500 font-medium">Google Review</span>
        {variant === 'premium' && (
          <span className="badge-amber text-xs px-2 py-0.5 rounded-full ml-auto">
            Featured
          </span>
        )}
      </div>

      {/* Star Rating with subtle animation on hover */}
      <div className="flex gap-0.5 mb-4" aria-label={`${rating} out of 5 stars`}>
        {[...Array(5)].map((_, i) => (
          <svg
            key={i}
            className={`w-5 h-5 transition-transform duration-200 hover:scale-110 ${
              i < rating ? 'text-amber-light drop-shadow-sm' : 'text-gray-300'
            }`}
            fill="currentColor"
            viewBox="0 0 20 20"
          >
            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
          </svg>
        ))}
      </div>

      {/* Quote with styled quotation marks */}
      <blockquote className="text-gray-700 leading-relaxed mb-5 relative">
        <span className="text-2xl text-amber/60 font-serif leading-none mr-1">&ldquo;</span>
        {quote}
        <span className="text-2xl text-amber/60 font-serif leading-none ml-1">&rdquo;</span>
      </blockquote>

      {/* Author section with gradient avatar */}
      <div className="flex items-center gap-3 pt-4 border-t border-gray-100/50">
        <div className={`w-11 h-11 ${avatarGradient} rounded-full flex items-center justify-center text-white font-bold shadow-md`}>
          {author.charAt(0).toUpperCase()}
        </div>
        <div>
          <p className="font-semibold text-charcoal">{author}</p>
          {location && (
            <p className="text-sm text-gray-500 flex items-center gap-1">
              <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
              </svg>
              {location}
            </p>
          )}
        </div>
      </div>
    </div>
  );
}
