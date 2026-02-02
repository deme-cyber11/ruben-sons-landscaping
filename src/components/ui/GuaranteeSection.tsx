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
    },
  ];

  return (
    <section className="section-padding bg-cream">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 bg-primary-green/10 px-4 py-2 rounded-full mb-4">
            <svg
              className="w-5 h-5 text-primary-green"
              fill="currentColor"
              viewBox="0 0 20 20"
            >
              <path
                fillRule="evenodd"
                d="M2.166 4.999A11.954 11.954 0 0010 1.944 11.954 11.954 0 0017.834 5c.11.65.166 1.32.166 2.001 0 5.225-3.34 9.67-8 11.317C5.34 16.67 2 12.225 2 7c0-.682.057-1.35.166-2.001zm11.541 3.708a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                clipRule="evenodd"
              />
            </svg>
            <span className="text-primary-green font-semibold text-sm">
              Our Promise to You
            </span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-charcoal mb-4">
            Your Peace of Mind is Guaranteed
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            We stand behind every job with guarantees that protect you. No fine print, no exceptions.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {guarantees.map((guarantee, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl p-8 shadow-sm hover:shadow-lg transition-shadow border border-gray-100"
            >
              <div className="w-16 h-16 bg-cta-green/10 rounded-2xl flex items-center justify-center mb-6 text-cta-green">
                {guarantee.icon}
              </div>
              <h3 className="text-xl font-bold text-charcoal mb-3">
                {guarantee.title}
              </h3>
              <p className="text-gray-600 leading-relaxed">
                {guarantee.description}
              </p>
            </div>
          ))}
        </div>

        {/* Trust reinforcement */}
        <div className="mt-12 text-center">
          <p className="text-gray-500 text-sm">
            Backed by 15+ years of service and 500+ satisfied customers across the DMV
          </p>
        </div>
      </div>
    </section>
  );
}
