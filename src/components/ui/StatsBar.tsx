export default function StatsBar() {
  const stats = [
    { value: '15+', label: 'Years Experience' },
    { value: '500+', label: 'Projects Completed' },
    { value: '100%', label: 'Satisfaction Guarantee' },
    { value: '24/7', label: 'Emergency Response' },
  ];

  return (
    <section className="w-full bg-charcoal py-12 lg:py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          {stats.map((stat, index) => (
            <div key={index} className="text-center">
              <div className="text-4xl sm:text-5xl lg:text-6xl font-bold text-cta-green mb-2">
                {stat.value}
              </div>
              <div className="text-sm sm:text-base text-white/80 uppercase tracking-wider font-medium">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
