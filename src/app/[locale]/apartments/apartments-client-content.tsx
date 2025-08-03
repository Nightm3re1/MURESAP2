
'use client';

import { useTranslations } from 'next-intl';
import { apartments } from '@/lib/data';
import { ApartmentCard } from '@/components/ui/apartment-card';
import { Meteors } from '@/components/ui/meteors';

// Props received from the server component
interface ApartmentsClientContentProps {
  params: { locale: string };
  searchParams?: { [key: string]: string | string[] | undefined };
}

export default function ApartmentsClientContent({ params, searchParams }: ApartmentsClientContentProps) {
  const t = useTranslations('ApartmentsPage');

  return (
    <div className="container mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8 relative flex-grow">
      <Meteors number={60} className="opacity-70 -z-10 absolute inset-0" />
      <header className="mb-12 text-center relative z-10">
        <h1 className="text-4xl font-bold tracking-tight text-primary sm:text-5xl">
          {t('title')}
        </h1>
        <p className="mt-4 text-lg text-muted-foreground">
          {t('description')}
        </p>
      </header>

      {apartments.length > 0 ? (
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3 relative z-10">
          {apartments.map((apartment) => (
            <ApartmentCard key={apartment.id} apartment={apartment} />
          ))}
        </div>
      ) : (
        <p className="text-center text-muted-foreground relative z-10">{t('noApartmentsAvailable')}</p>
      )}
    </div>
  );
}
