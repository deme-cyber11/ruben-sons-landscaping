/**
 * Site Configuration
 *
 * Centralized configuration for paths and URLs.
 * When moving to a custom domain, simply set NEXT_PUBLIC_BASE_PATH="" in your environment
 * or update the basePath below to an empty string.
 */

// Base path for the site (used for GitHub Pages deployment)
// Set to empty string when using a custom domain
export const basePath = process.env.NEXT_PUBLIC_BASE_PATH ?? '/ruben-sons-landscaping';

/**
 * Prepends the basePath to a static asset path.
 * Use this for all static images, favicons, and other assets in /public
 *
 * @example
 * // In a component:
 * import { assetPath } from '@/lib/config';
 * <Image src={assetPath('/images/hero.webp')} ... />
 *
 * // In data arrays:
 * const images = [
 *   { src: assetPath('/images/photo1.webp'), alt: 'Photo 1' },
 * ];
 */
export function assetPath(path: string): string {
  // Ensure path starts with /
  const normalizedPath = path.startsWith('/') ? path : `/${path}`;
  return `${basePath}${normalizedPath}`;
}

/**
 * Site metadata and constants
 */
export const siteConfig = {
  name: 'Ruben & Sons Landscaping',
  phone: '301-844-8429',
  email: 'info@rubenandsonslandscaping.com',
  url: `https://deme-cyber11.github.io${basePath}`,
} as const;
