export default function StatsBar() {
  const stats = [
    { value: '15+', label: 'Years Experience' },
    { value: '500+', label: 'Projects Completed' },
    { value: '100%', label: 'Satisfaction Guarantee' },
    { value: '24/7', label: 'Emergency Response' },
  ];

  return (
    <section className="stats-bar w-full py-10 lg:py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {stats.map((stat, index) => (
            <div
              key={index}
              className="text-center animate-count-up"
              style={{ animationDelay: `${index * 100 + 300}ms` }}
            >
              <div className="stat-value text-4xl sm:text-5xl lg:text-6xl font-bold mb-2">
                {stat.value}
              </div>
              <div className="text-sm sm:text-base text-white/70 uppercase tracking-wider font-medium">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
