
'use client';

import { useTranslations } from 'next-intl';
import { Meteors } from '@/components/ui/meteors';

// Props received from the server component
interface TermsAndConditionsClientContentProps {
  params: { locale: string };
  searchParams?: { [key: string]: string | string[] | undefined };
}

export default function TermsAndConditionsClientContent({ params, searchParams }: TermsAndConditionsClientContentProps) {
  const t = useTranslations('TermsAndConditionsPage');

  const sections = [
    { titleKey: 'introductionTitle', contentKey: 'introductionContent' },
    { 
      titleKey: 'bookingPaymentTitle', 
      contentItems: [
        'bookingPaymentContent1',
        'bookingPaymentContent2',
        'bookingPaymentContent3',
      ] 
    },
    { 
      titleKey: 'cancellationTitle',
      contentItems: [
        'cancellationContent1',
        'cancellationContent2',
        'cancellationContent3',
        'cancellationContent4',
      ]
    },
    { 
      titleKey: 'checkInCheckOutTitle',
      contentItems: [
        'checkInCheckOutContent1',
        'checkInCheckOutContent2',
      ]
    },
    { 
      titleKey: 'guestResponsibilitiesTitle',
      contentItems: [
        'guestResponsibilitiesContent1',
        'guestResponsibilitiesContent2',
        'guestResponsibilitiesContent3',
      ]
    },
    {
      titleKey: 'liabilityTitle',
      contentItems: [
        'liabilityContent1',
        'liabilityContent2',
      ]
    },
    {
      titleKey: 'governingLawTitle',
      contentItems: [
        'governingLawContent1',
        'governingLawContent2',
      ]
    }
  ];

  return (
    <div className="relative bg-background text-foreground min-h-screen flex-grow py-12 md:py-16">
      <Meteors number={30} />
      <div className="container mx-auto max-w-3xl px-4 sm:px-6 lg:px-8 relative z-10">
        <header className="mb-10 md:mb-12 text-center">
          <h1 className="text-3xl md:text-4xl font-bold text-primary">
            {t('title')}
          </h1>
        </header>

        <div className="space-y-8">
          {sections.map((section, index) => (
            <section key={index}>
              <h2 className="text-2xl font-semibold text-foreground mt-6 mb-4">
                {t(section.titleKey)}
              </h2>
              {section.contentKey && (
                <p className="text-muted-foreground leading-relaxed">
                  {t(section.contentKey)}
                </p>
              )}
              {section.contentItems && (
                <ul className="list-disc list-inside space-y-2 text-muted-foreground leading-relaxed">
                  {section.contentItems.map((itemKey, itemIndex) => (
                    <li key={itemIndex}>{t(itemKey)}</li>
                  ))}
                </ul>
              )}
            </section>
          ))}
        </div>
      </div>
    </div>
  );
}
