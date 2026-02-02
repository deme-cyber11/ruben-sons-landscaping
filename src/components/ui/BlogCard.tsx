import Link from 'next/link';

interface BlogCardProps {
  title: string;
  excerpt: string;
  href: string;
  date: string;
  readTime: string;
  category: string;
}

export function BlogCard({ title, excerpt, href, date, readTime, category }: BlogCardProps) {
  return (
    <article className="bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow overflow-hidden">
      <div className="p-6">
        <div className="flex items-center gap-3 mb-3">
          <span className="text-xs font-medium text-cta-green bg-cta-green/10 px-3 py-1 rounded-full">
            {category}
          </span>
          <span className="text-xs text-gray-500">{readTime}</span>
        </div>

        <Link href={href}>
          <h2 className="text-xl font-bold text-charcoal mb-2 hover:text-cta-green transition-colors">
            {title}
          </h2>
        </Link>

        <p className="text-gray-600 text-sm mb-4 line-clamp-3">
          {excerpt}
        </p>

        <div className="flex items-center justify-between">
          <span className="text-xs text-gray-500">{date}</span>
          <Link
            href={href}
            className="text-sm font-medium text-cta-green hover:text-primary-green transition-colors flex items-center gap-1"
          >
            Read More
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </Link>
        </div>
      </div>
    </article>
  );
}
