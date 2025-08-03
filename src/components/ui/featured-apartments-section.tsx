
'use client';

import { useTranslations, useLocale } from 'next-intl';
import { apartments } from '@/lib/data';
import { ApartmentCard } from '@/components/ui/apartment-card';
import { Button } from '@/components/ui/button';
import { Link } from '@/navigation';
import { ArrowRight } from 'lucide-react';

export function FeaturedApartmentsSection() {
  const t = useTranslations('Home');
  const locale = useLocale();
  // Display first 4 apartments as featured
  const featuredApartments = apartments.slice(0, 4);

  return (
    <section className="py-16 md:py-24 bg-secondary">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8"> {/* Increased padding */}
        <h2 className="text-3xl font-bold tracking-tight text-center text-primary sm:text-4xl mb-12">
          {t('apartmentsSectionTitle')}
        </h2>
        {/* Changed grid to allow more space: sm:grid-cols-2, lg:grid-cols-3. Max 3 columns. */}
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {featuredApartments.map((apartment) => (
            <ApartmentCard key={apartment.id} apartment={apartment} />
          ))}
        </div>
        {apartments.length > featuredApartments.length && ( // Show button if there are more apartments than featured
          <div className="mt-12 text-center">
            <Button asChild size="lg" variant="outline">
              <Link href="/apartments" locale={locale}>
                {useTranslations('Navbar')('apartments')}
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
          </div>
        )}
      </div>
    </section>
  );
}

