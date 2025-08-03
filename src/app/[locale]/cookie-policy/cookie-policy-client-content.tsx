
'use client';

import { useTranslations } from 'next-intl';
import { Meteors } from '@/components/ui/meteors';

// Props received from the server component
interface CookiePolicyClientContentProps {
  params: { locale: string };
  searchParams?: { [key: string]: string | string[] | undefined };
}

export default function CookiePolicyClientContent({ params, searchParams }: CookiePolicyClientContentProps) {
  const t = useTranslations('CookiePolicyPage');

  const sections = [
    { titleKey: 'whatAreCookiesTitle', contentKey: 'whatAreCookiesContent' },
    { 
      titleKey: 'howWeUseCookiesTitle',
      contentItems: [
        'essentialCookies',
        'performanceCookies',
        'marketingCookies',
      ]
    },
    {
      titleKey: 'cookieManagementTitle',
      contentItems: [
        'cookieManagementContent1',
        'cookieManagementContent2',
      ]
    },
    { titleKey: 'thirdPartyCookiesTitle', contentKey: 'thirdPartyCookiesContent' },
    { 
      titleKey: 'updatesToPolicyTitle', 
      contentItems: [
        'updatesToPolicyContent',
        'lastUpdated',
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
                    // Make "Last updated" not a bullet point but a regular paragraph
                    itemKey === 'lastUpdated' ? 
                    <p key={itemIndex} className="mt-2">{t(itemKey)}</p> 
                    : <li key={itemIndex}>{t(itemKey)}</li>
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
