
// This file is now a Server Component

import { getTranslations } from 'next-intl/server';
import type { Metadata } from 'next';
import CookiePolicyClientContent from './cookie-policy-client-content'; // Import the new client component

interface CookiePolicyPageProps {
  params: { locale: string };
  searchParams?: { [key: string]: string | string[] | undefined };
}

export async function generateMetadata({params: {locale}}: CookiePolicyPageProps): Promise<Metadata> {
  const t = await getTranslations({locale, namespace: 'CookiePolicyPage'});
  return {
    title: t('title'),
  };
}

export default function CookiePolicyPage({ params, searchParams }: CookiePolicyPageProps) {
  // This server component now simply renders the client component
  return <CookiePolicyClientContent params={params} searchParams={searchParams} />;
}
