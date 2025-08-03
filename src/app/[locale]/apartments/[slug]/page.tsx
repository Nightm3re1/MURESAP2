import { apartments } from '@/lib/data';
import { notFound } from 'next/navigation';
import type { Metadata } from 'next';
import ApartmentDetailClientContent from './apartment-detail-client-content';
import { Meteors } from '@/components/ui/meteors';
import { locales } from '@/i18n'; // Import locales

// Generate all locale/slug combinations for static routing
export async function generateStaticParams() {
  const params = [];
  for (const locale of locales) {
    for (const apartment of apartments) {
      params.push({ locale, slug: apartment.slug });
    }
  }
  return params;
}

// Generate metadata (title, description, open graph) for each page
export async function generateMetadata({ params }: { params: { slug: string; locale: string } }): Promise<Metadata> {
  const { slug, locale } = params;
  const apartment = apartments.find((ap) => ap.slug === slug);

  if (!apartment) {
    return { title: 'Apartment Not Found' };
  }

  const name = apartment.name[locale] || apartment.name.en;
  const rawDescription = apartment.description[locale] || apartment.description.en;
  const metaDescription = typeof rawDescription === 'string'
    ? rawDescription.replace(/\*\*|##|###|\n/g, ' ').substring(0, 160)
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

// Main page component; params and searchParams are inferred correctly by Next.js
export default async function ApartmentDetailPage(
  { params, searchParams }: { params: { slug: string; locale: string }; searchParams?: Record<string, string | string[] | undefined> }
) {
  const apartment = apartments.find((ap) => ap.slug === params.slug);

  if (!apartment) {
    notFound();
  }

  return (
    <div className="relative bg-background min-h-screen flex-grow">
      <Meteors number={60} className="opacity-70 -z-10 absolute inset-0" />
      <ApartmentDetailClientContent
        apartment={apartment!}
        slug={params.slug}
      />
    </div>
  );
}
