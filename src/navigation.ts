'use client';

import {
  createLocalizedPathnamesNavigation,
  Pathnames
} from 'next-intl/navigation';
import type {Locale} from './i18n'; // Import Locale type
import {locales, localePrefix, pathnames as pathnamesConfig} from './i18n';

export const {Link, redirect, usePathname, useRouter} =
  createLocalizedPathnamesNavigation({
    locales,
    localePrefix,
    // The `pathnames` object maps route paths to translations. Make sure this is configured correctly in your i18n.ts file.
    pathnames: pathnamesConfig as Pathnames<typeof locales>,
  });