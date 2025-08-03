
// This file is now a Server Component

import { getTranslations } from 'next-intl/server';
import type { Metadata } from 'next';
import ApartmentsClientContent from './apartments-client-content'; // Import the new client component

interface ApartmentsPageProps {
  params: { locale: string };
  searchParams?: { [key: string]: string | string[] | undefined };
}

export async function generateMetadata({params: {locale}}: ApartmentsPageProps): Promise<Metadata> {
  const t = await getTranslations({locale, namespace: 'ApartmentsPage'});
 
  return {
    title: t('title'),
    description: t('description'),
  };
}

export default function ApartmentsPage({ params, searchParams }: ApartmentsPageProps) {
  // This server component now simply renders the client component
  // It can pass params and searchParams if ApartmentsClientContent needs them
  return <ApartmentsClientContent params={params} searchParams={searchParams} />;
}
