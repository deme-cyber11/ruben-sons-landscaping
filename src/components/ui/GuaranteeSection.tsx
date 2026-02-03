export default function GuaranteeSection() {
  const guarantees = [
    {
      icon: (
        <svg
          className="w-8 h-8"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
          />
        </svg>
      ),
      title: '100% Satisfaction Guarantee',
      description:
        "Not happy with our work? We'll make it right or you don't pay. That's our promise to every customer, every time.",
      iconColor: 'green',
      badge: 'Our Promise',
    },
    {
      icon: (
        <svg
          className="w-8 h-8"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
          />
        </svg>
      ),
      title: 'On-Time, Every Time',
      description:
        "We show up when we say we will. If we're late to your scheduled appointment, your consultation is free.",
      iconColor: 'amber',
      badge: 'Punctuality',
    },
    {
      icon: (
        <svg
          className="w-8 h-8"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M5 13l4 4L19 7"
          />
        </svg>
      ),
      title: 'Clean Site Guarantee',
      description:
        'Your property will be left cleaner than we found it. All debris removed, lawn raked, and driveway swept. Guaranteed.',
      iconColor: 'teal',
      badge: 'Cleanliness',
    },
  ];

  const iconContainerClass = {
    green: 'icon-container-green',
    amber: 'icon-container-amber',
    teal: 'icon-container-teal',
  };

  const badgeClass = {
    green: 'badge-green',
    amber: 'badge-amber',
    teal: 'badge-teal',
  };

  return (
    <section className="section-padding bg-gradient-warm relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="decorative-circle top-0 right-0 -translate-y-1/2 translate-x-1/2 opacity-50"></div>
      <div className="decorative-blob w-64 h-64 bottom-0 left-0 -translate-x-1/2 translate-y-1/2 opacity-30"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="text-center mb-12">
          {/* Badge with gradient */}
          <div className="badge-green inline-flex items-center gap-2 px-4 py-2 rounded-full mb-4">
            <svg
              className="w-5 h-5"
              fill="currentColor"
              viewBox="0 0 20 20"
            >
              <path
                fillRule="evenodd"
                d="M2.166 4.999A11.954 11.954 0 0010 1.944 11.954 11.954 0 0017.834 5c.11.65.166 1.32.166 2.001 0 5.225-3.34 9.67-8 11.317C5.34 16.67 2 12.225 2 7c0-.682.057-1.35.166-2.001zm11.541 3.708a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                clipRule="evenodd"
              />
            </svg>
            <span className="font-semibold text-sm">
              Our Promise to You
            </span>
          </div>

          {/* Heading with gradient text */}
          <h2 className="text-3xl sm:text-4xl font-bold text-charcoal mb-4">
            Your Peace of Mind is{' '}
            <span className="text-gradient">Guaranteed</span>
          </h2>

          {/* Decorative line */}
          <div className="decorative-line-long mx-auto mb-6"></div>

          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            We stand behind every job with guarantees that protect you. No fine print, no exceptions.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {guarantees.map((guarantee, index) => (
            <div
              key={index}
              className="card-premium rounded-2xl p-8 hover:shadow-xl transition-all duration-300 group relative"
            >
              {/* Top accent bar */}
              <div className="absolute top-0 left-8 right-8 h-1 bg-gradient-to-r from-cta-green via-teal to-amber rounded-b opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

              {/* Badge */}
              <span className={`${badgeClass[guarantee.iconColor as keyof typeof badgeClass]} text-xs px-3 py-1 rounded-full absolute top-4 right-4`}>
                {guarantee.badge}
              </span>

              {/* Icon with gradient container */}
              <div className={`icon-container ${iconContainerClass[guarantee.iconColor as keyof typeof iconContainerClass]} w-16 h-16 mb-6 group-hover:scale-105 transition-transform duration-300`}>
                {guarantee.icon}
              </div>

              <h3 className="text-xl font-bold text-charcoal mb-3 group-hover:text-primary-green transition-colors">
                {guarantee.title}
              </h3>

              <p className="text-gray-600 leading-relaxed">
                {guarantee.description}
              </p>
            </div>
          ))}
        </div>

        {/* Trust reinforcement with enhanced styling */}
        <div className="mt-12 text-center">
          <div className="inline-flex items-center gap-3 glass-cream px-6 py-3 rounded-full">
            <div className="flex -space-x-2">
              <div className="w-8 h-8 rounded-full bg-gradient-to-br from-cta-green to-primary-green flex items-center justify-center text-white text-xs font-bold border-2 border-white">R</div>
              <div className="w-8 h-8 rounded-full bg-gradient-to-br from-amber to-amber-dark flex items-center justify-center text-white text-xs font-bold border-2 border-white">S</div>
              <div className="w-8 h-8 rounded-full bg-gradient-to-br from-teal to-teal-dark flex items-center justify-center text-white text-xs font-bold border-2 border-white">L</div>
            </div>
            <p className="text-gray-600 text-sm font-medium">
              Backed by <span className="text-gradient font-bold">15+ years</span> of service and <span className="text-gradient-warm font-bold">500+</span> satisfied customers across the DMV
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
