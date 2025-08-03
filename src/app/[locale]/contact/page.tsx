
// This file is now a Server Component

import { getTranslations } from 'next-intl/server';
import type { Metadata } from 'next';
import ContactClientContent from './contact-client-content'; // Import the new client component

interface ContactPageProps {
  params: { locale: string };
  searchParams?: { [key: string]: string | string[] | undefined };
}

export async function generateMetadata({params: {locale}}: ContactPageProps): Promise<Metadata> {
  const t = await getTranslations({locale, namespace: 'ContactPage'});
 
  return {
    title: t('title'),
    description: t('description'),
  };
}

export default function ContactPage({ params, searchParams }: ContactPageProps) {
  // This server component now simply renders the client component
  return <ContactClientContent params={params} searchParams={searchParams} />;
}
