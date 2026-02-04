export default function TrustBadges() {
  const badges = [
    {
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
        </svg>
      ),
      title: 'Licensed & Insured',
      subtitle: 'Fully Protected'
    },
    {
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      ),
      title: '20+ Years',
      subtitle: 'Experience'
    },
    {
      icon: (
        <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
        </svg>
      ),
      title: '127+ Reviews',
      subtitle: '4.9 Star Rating'
    },
    {
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4" />
        </svg>
      ),
      title: 'Free Estimates',
      subtitle: 'No Obligation'
    },
    {
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
        </svg>
      ),
      title: '24/7 Emergency',
      subtitle: 'Always Available'
    }
  ]

  return (
    <section className="py-8 bg-cream border-y border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex gap-4 sm:gap-6 overflow-x-auto pb-2 scrollbar-hide md:overflow-visible md:grid md:grid-cols-5 md:gap-4">
          {badges.map((badge, index) => (
            <div
              key={index}
              className="flex-shrink-0 flex flex-col items-center text-center min-w-[120px] md:min-w-0"
            >
              <div className="w-14 h-14 rounded-full bg-primary-green/10 flex items-center justify-center text-primary-green mb-2">
                {badge.icon}
              </div>
              <h3 className="font-semibold text-charcoal text-sm">{badge.title}</h3>
              <p className="text-xs text-charcoal/60">{badge.subtitle}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
