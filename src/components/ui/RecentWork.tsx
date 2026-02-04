'use client';

import Link from 'next/link';
import Image from 'next/image';

export interface RecentProject {
  id: string;
  title: string;
  location: string;
  category: string;
  categoryBadge: string;
  thumbnail: string;
  completedDate: string;
}

// Default recent projects data
const defaultProjects: RecentProject[] = [
  {
    id: 'proj-1',
    title: 'Complete Backyard Redesign',
    location: 'Bethesda, MD',
    category: 'Landscaping',
    categoryBadge: 'badge-teal',
    thumbnail: 'https://images.unsplash.com/photo-1585320806297-9794b3e4eeae?w=600&q=80',
    completedDate: 'January 2025',
  },
  {
    id: 'proj-2',
    title: 'Emergency Storm Damage Cleanup',
    location: 'Arlington, VA',
    category: 'Tree Removal',
    categoryBadge: 'badge-green',
    thumbnail: 'https://images.unsplash.com/photo-1558904541-efa843a96f01?w=600&q=80',
    completedDate: 'January 2025',
  },
  {
    id: 'proj-3',
    title: 'Commercial Lot Preparation',
    location: 'Silver Spring, MD',
    category: 'Land Clearing',
    categoryBadge: 'badge-amber',
    thumbnail: 'https://images.unsplash.com/photo-1500076656116-558758c991c1?w=600&q=80',
    completedDate: 'December 2024',
  },
];

interface RecentWorkProps {
  projects?: RecentProject[];
  showHeader?: boolean;
  className?: string;
}

export default function RecentWork({
  projects = defaultProjects,
  showHeader = true,
  className = ''
}: RecentWorkProps) {
  return (
    <section className={`py-16 bg-white ${className}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {showHeader && (
          <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4 mb-10">
            <div>
              <div className="inline-flex items-center gap-2 bg-primary-green/10 px-4 py-2 rounded-full mb-4">
                <span className="text-primary-green text-sm font-semibold uppercase tracking-wider">Recent Work</span>
              </div>
              <h2 className="text-3xl sm:text-4xl font-bold text-charcoal">
                Latest Projects
              </h2>
            </div>
            <Link
              href="/gallery"
              className="inline-flex items-center gap-2 text-cta-green font-semibold hover:gap-3 transition-all group"
            >
              View All Projects
              <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
          </div>
        )}

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 lg:gap-8">
          {projects.map((project, index) => (
            <Link
              key={project.id}
              href="/gallery"
              className="group card-premium rounded-2xl overflow-hidden hover-lift animate-fade-in-up"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              {/* Image Container */}
              <div className="relative aspect-[4/3] overflow-hidden">
                <Image
                  src={project.thumbnail}
                  alt={project.title}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                  sizes="(max-width: 640px) 100vw, (max-width: 768px) 50vw, 33vw"
                  loading="lazy"
                />
                {/* Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-charcoal/60 via-transparent to-transparent" />

                {/* Category Badge */}
                <div className="absolute top-4 left-4">
                  <span className={`${project.categoryBadge} inline-block px-3 py-1 rounded-full text-xs font-semibold backdrop-blur-sm`}>
                    {project.category}
                  </span>
                </div>

                {/* Location Badge */}
                <div className="absolute bottom-4 left-4 flex items-center gap-1.5 text-white text-sm font-medium">
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                  {project.location}
                </div>
              </div>

              {/* Content */}
              <div className="p-5">
                <h3 className="text-lg font-semibold text-charcoal mb-2 group-hover:text-primary-green transition-colors">
                  {project.title}
                </h3>
                <div className="flex items-center justify-between">
                  <span className="text-sm text-gray-500">{project.completedDate}</span>
                  <span className="inline-flex items-center gap-1 text-cta-green text-sm font-medium opacity-100 lg:opacity-0 lg:group-hover:opacity-100 transition-opacity">
                    View Details
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </span>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
