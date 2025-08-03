import createMiddleware from 'next-intl/middleware';
import {locales, localePrefix, pathnames} from './i18n';

export default createMiddleware({
  defaultLocale: 'ro',
  locales,
  localePrefix,
  pathnames,
});

export const config = {
  // Match only internationalized pathnames
  matcher: [
    // Enable a redirect to `/ro` when visiting `/`
    '/',
    // Set a cookie to remember the previous locale for
    // all requests that have a locale prefix
    '/(ro|en)/:path*',
    // Enable redirects that add missing locales
    // (e.g. `/pathnames` -> `/ro/pathnames`)
    '/((?!_next|_vercel|.*\\..*).*)'
  ]
};