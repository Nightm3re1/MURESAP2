
import {getRequestConfig} from 'next-intl/server';
import {notFound} from 'next/navigation';

export const locales = ['ro', 'en'] as const;
export type Locale = (typeof locales)[number]; 

export const localePrefix = 'as-needed'; 

// Define pathnames for internationalized routing
export const pathnames = {
  '/': '/',
  '/apartments': {
    ro: '/apartamente',
    en: '/apartments'
  },
  '/apartments/[slug]': {
    ro: '/apartamente/[slug]',
    en: '/apartments/[slug]'
  },
  '/discounts': {
    ro: '/reduceri',
    en: '/discounts'
  },
  '/contact': {
    ro: '/contact',
    en: '/contact'
  },
  '/terms-and-conditions': {
    ro: '/termeni-si-conditii',
    en: '/terms-and-conditions'
  },
  '/cookie-policy': {
    ro: '/politica-cookie',
    en: '/cookie-policy'
  }
};

export default getRequestConfig(async ({locale}) => {
  // Validate that the incoming `locale` parameter is valid
  const baseLocale = locale.split('-')[0];

  if (!locales.includes(baseLocale as Locale)) { 
    notFound();
  }

  let messages;
  try {
    messages = (await import(`../locales/${baseLocale}.json`)).default;
  } catch (error) {
    console.error(`Could not load messages for locale "${baseLocale}": ${(error as Error).message}`);
    notFound();
  }

  return {
    messages,
    locale: baseLocale as Locale, 
  };
});
