import Link from 'next/link';

interface ServiceCardProps {
  title: string;
  description: string;
  href: string;
  icon: React.ReactNode;
}

export default function ServiceCard({ title, description, href, icon }: ServiceCardProps) {
  return (
    <Link href={href} className="group">
      <div className="bg-white rounded-xl p-6 shadow-md hover:shadow-xl transition-all duration-300 h-full border border-gray-100 hover:border-primary-green/20 hover:-translate-y-1">
        <div className="w-14 h-14 bg-primary-green/10 rounded-lg flex items-center justify-center mb-4 group-hover:bg-primary-green/20 transition-colors">
          <div className="text-primary-green w-7 h-7">
            {icon}
          </div>
        </div>
        <h3 className="text-xl font-bold text-charcoal mb-2 group-hover:text-primary-green transition-colors">
          {title}
        </h3>
        <p className="text-gray-600 leading-relaxed">
          {description}
        </p>
        <div className="mt-4 flex items-center text-primary-green font-medium opacity-0 group-hover:opacity-100 transition-opacity">
          Learn more
          <svg className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </div>
      </div>
    </Link>
  );
}
