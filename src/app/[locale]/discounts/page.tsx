
// This file is now a Server Component

import { getTranslations } from 'next-intl/server';
import type { Metadata } from 'next';
import DiscountsClientContent from './discounts-client-content'; // Import the new client component

interface DiscountsPageProps {
  params: { locale: string };
  searchParams?: { [key: string]: string | string[] | undefined };
}

export async function generateMetadata({params: {locale}}: DiscountsPageProps): Promise<Metadata> {
  const t = await getTranslations({locale, namespace: 'DiscountsPage'});
 
  return {
    title: t('title'),
    description: t('description'),
  };
}

export default function DiscountsPage({ params, searchParams }: DiscountsPageProps) {
  // This server component now simply renders the client component
  return <DiscountsClientContent />;
}
