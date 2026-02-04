'use client';

import { useState, useEffect, useCallback } from 'react';
import Link from 'next/link';

const PHONE_NUMBER = '301-844-8429';
const PHONE_HREF = 'tel:+13018448429';

interface NavItem {
  label: string;
  href: string;
}

const navItems: NavItem[] = [
  { label: 'Services', href: '/services' },
  { label: 'Service Areas', href: '/locations/bethesda-md' },
  { label: 'Blog', href: '/blog' },
  { label: 'Gallery', href: '/gallery' },
  { label: 'About', href: '/about' },
  { label: 'Contact', href: '/contact' },
];

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const handleScroll = useCallback(() => {
    setIsScrolled(window.scrollY > 20);
  }, []);

  useEffect(() => {
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [handleScroll]);

  // Close mobile menu on escape key and lock scroll
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setIsMobileMenuOpen(false);
      }
    };

    if (isMobileMenuOpen) {
      document.addEventListener('keydown', handleEscape);
      // Better scroll lock for iOS Safari
      const scrollY = window.scrollY;
      document.body.style.position = 'fixed';
      document.body.style.top = `-${scrollY}px`;
      document.body.style.width = '100%';
      document.body.style.overflow = 'hidden';
    }

    return () => {
      document.removeEventListener('keydown', handleEscape);
      // Restore scroll position
      const scrollY = document.body.style.top;
      document.body.style.position = '';
      document.body.style.top = '';
      document.body.style.width = '';
      document.body.style.overflow = '';
      if (scrollY) {
        window.scrollTo(0, parseInt(scrollY || '0') * -1);
      }
    };
  }, [isMobileMenuOpen]);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-white shadow-lg py-2'
          : 'bg-white/95 backdrop-blur-sm py-4'
      }`}
      role="banner"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <nav
          className="flex items-center justify-between"
          role="navigation"
          aria-label="Main navigation"
        >
          {/* Logo */}
          <Link
            href="/"
            className="flex items-center gap-2 group"
            aria-label="Ruben & Sons Landscaping - Home"
          >
            <div
              className="w-10 h-10 rounded-full flex items-center justify-center bg-primary-green"
            >
              <svg
                viewBox="0 0 24 24"
                fill="currentColor"
                className="w-6 h-6 text-white"
                aria-hidden="true"
              >
                {/* Tree icon - solid */}
                <path d="M12 2L7 9h3v3H7l5 7 5-7h-3V9h3L12 2z" />
                <rect x="11" y="17" width="2" height="5" />
              </svg>
            </div>
            <div className="flex flex-col">
              <span className="text-lg font-bold leading-tight text-primary-green">
                Ruben & Sons
              </span>
              <span className="text-xs uppercase tracking-wider text-charcoal/70">
                Landscaping
              </span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <ul className="hidden lg:flex items-center gap-8">
            {navItems.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  className="text-sm font-medium text-charcoal transition-colors duration-200 hover:text-cta-green relative after:absolute after:bottom-[-4px] after:left-0 after:w-0 after:h-0.5 after:bg-cta-green after:transition-all after:duration-200 hover:after:w-full"
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>

          {/* Desktop Phone & CTA */}
          <div className="hidden lg:flex items-center gap-4">
            <a
              href={PHONE_HREF}
              className="flex items-center gap-2 text-sm font-semibold text-charcoal transition-colors duration-200 hover:text-cta-green"
              aria-label={`Call us at ${PHONE_NUMBER}`}
            >
              <svg
                className="w-5 h-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                />
              </svg>
              <span>{PHONE_NUMBER}</span>
            </a>
            <Link
              href="/contact"
              className="bg-cta-green text-white px-6 py-2.5 rounded-lg font-semibold text-sm transition-all duration-200 hover:bg-cta-green/90 hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-cta-green focus:ring-offset-2"
            >
              Free Estimate
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            type="button"
            onClick={toggleMobileMenu}
            className="lg:hidden p-3 rounded-lg text-charcoal hover:bg-charcoal/10 transition-colors duration-200"
            aria-expanded={isMobileMenuOpen}
            aria-controls="mobile-menu"
            aria-label={isMobileMenuOpen ? 'Close menu' : 'Open menu'}
          >
            <svg
              className="w-6 h-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              aria-hidden="true"
            >
              {isMobileMenuOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>
        </nav>
      </div>

      {/* Mobile Menu Overlay */}
      <div
        className={`lg:hidden fixed inset-0 bg-black/50 z-40 transition-opacity duration-300 ${
          isMobileMenuOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'
        }`}
        onClick={closeMobileMenu}
        aria-hidden="true"
      />

      {/* Mobile Menu Panel */}
      <div
        id="mobile-menu"
        className={`lg:hidden fixed top-0 right-0 h-full w-72 max-w-[90vw] bg-white z-50 shadow-2xl transform transition-transform duration-300 ease-in-out ${
          isMobileMenuOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
        role="dialog"
        aria-modal="true"
        aria-label="Mobile navigation menu"
      >
        <div className="flex flex-col h-full">
          {/* Mobile Menu Header */}
          <div className="flex items-center justify-between p-4 border-b border-gray-200">
            <span className="text-lg font-bold text-primary-green">Menu</span>
            <button
              type="button"
              onClick={closeMobileMenu}
              className="p-3 rounded-lg text-charcoal hover:bg-charcoal/10 transition-colors"
              aria-label="Close menu"
            >
              <svg
                className="w-6 h-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
          </div>

          {/* Mobile Menu Links */}
          <nav className="flex-1 overflow-y-auto py-4">
            <ul className="space-y-1 px-4">
              {navItems.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    onClick={closeMobileMenu}
                    className="block px-4 py-3 text-charcoal font-medium rounded-lg hover:bg-cream hover:text-primary-green transition-colors duration-200"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          {/* Mobile Menu Footer */}
          <div className="p-4 border-t border-gray-200 space-y-3">
            <a
              href={PHONE_HREF}
              className="flex items-center justify-center gap-2 w-full px-4 py-3 bg-primary-green text-white rounded-lg font-semibold transition-colors hover:bg-primary-green/90"
              aria-label={`Call us at ${PHONE_NUMBER}`}
            >
              <svg
                className="w-5 h-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                />
              </svg>
              <span>{PHONE_NUMBER}</span>
            </a>
            <Link
              href="/contact"
              onClick={closeMobileMenu}
              className="flex items-center justify-center w-full px-4 py-3 bg-cta-green text-white rounded-lg font-semibold transition-colors hover:bg-cta-green/90"
            >
              Get Free Estimate
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
}
