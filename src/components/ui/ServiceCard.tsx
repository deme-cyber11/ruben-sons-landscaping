import Link from 'next/link';

interface ServiceCardProps {
  title: string;
  description: string;
  href: string;
  icon: React.ReactNode;
  accentColor?: 'green' | 'amber' | 'teal';
}

export default function ServiceCard({
  title,
  description,
  href,
  icon,
  accentColor = 'green'
}: ServiceCardProps) {
  const iconContainerClass = {
    green: 'icon-container-green',
    amber: 'icon-container-amber',
    teal: 'icon-container-teal',
  }[accentColor];

  const hoverTextColor = {
    green: 'group-hover:text-primary-green',
    amber: 'group-hover:text-amber',
    teal: 'group-hover:text-teal',
  }[accentColor];

  const arrowColor = {
    green: 'text-primary-green',
    amber: 'text-amber',
    teal: 'text-teal',
  }[accentColor];

  return (
    <Link href={href} className="group">
      <div className="card-gradient-border card-premium rounded-xl p-6 h-full hover:shadow-2xl transition-all duration-300">
        {/* Icon container with gradient background */}
        <div className={`icon-container ${iconContainerClass} w-14 h-14 mb-4`}>
          <div className="w-7 h-7">
            {icon}
          </div>
        </div>

        {/* Title with hover effect */}
        <h3 className={`text-xl font-bold text-charcoal mb-2 ${hoverTextColor} transition-colors`}>
          {title}
        </h3>

        {/* Description */}
        <p className="text-gray-600 leading-relaxed mb-4">
          {description}
        </p>

        {/* Learn more link with arrow animation */}
        <div className={`flex items-center ${arrowColor} font-medium opacity-0 group-hover:opacity-100 transition-all duration-300`}>
          <span className="relative">
            Learn more
            <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-current group-hover:w-full transition-all duration-300"></span>
          </span>
          <svg
            className="w-4 h-4 ml-1 group-hover:translate-x-2 transition-transform duration-300"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </div>
      </div>
    </Link>
  );
}
