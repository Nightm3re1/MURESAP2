
import { apartments } from '@/lib/data';
import { notFound } from 'next/navigation';
import type { Metadata } from 'next';
import ApartmentDetailClientContent from './apartment-detail-client-content';
import { Meteors } from '@/components/ui/meteors';
import { locales } from '@/i18n'; // Import locales

interface ApartmentDetailPageProps {
  params: {
    slug: string;
    locale: string;
  };
  searchParams?: { [key: string]: string | string[] | undefined };
}

export async function generateStaticParams() {
  const params = [];
  // Use imported locales constant
  for (const locale of locales) { 
    for (const apartment of apartments) {
      params.push({ locale, slug: apartment.slug });
    }
  }
  return params;
}

export async function generateMetadata({ params }: ApartmentDetailPageProps): Promise<Metadata> {
  const { slug, locale } = params;

  const apartment = apartments.find((ap) => ap.slug === slug);

  if (!apartment) {
    return {
      title: 'Apartment Not Found',
    };
  }
  
  const name = apartment.name[locale] || apartment.name.en;
  const rawDescription = apartment.description[locale] || apartment.description.en;
  // Ensure description is a string and trim it for meta
  const metaDescription = typeof rawDescription === 'string' 
    ? rawDescription.replace(/\*\*|##|###|\n/g, " ").substring(0, 160) // Remove markdown, newlines for meta
    : 'View details for this apartment.';


  return {
    title: name,
    description: metaDescription,
    openGraph: {
      title: name,
      description: metaDescription,
      images: apartment.images.length > 0 ? [{ url: apartment.images[0] }] : [],
    },
  };
}


export default async function ApartmentDetailPage({ params, searchParams }: ApartmentDetailPageProps) {
  const apartment = apartments.find((ap) => ap.slug === params.slug);

  if (!apartment) {
    notFound();
  }
  
  return (
    <div className="relative bg-background min-h-screen flex-grow"> 
      <Meteors number={60} className="opacity-70 -z-10 absolute inset-0" />
      <ApartmentDetailClientContent
        apartment={apartment}
        slug={params.slug}
      />
    </div>
  );
}
