
'use client';

import { useTranslations } from 'next-intl';
import { SignupForm } from '@/components/ui/signup-form';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Mail, Phone, MapPin } from 'lucide-react';
import { Meteors } from '@/components/ui/meteors';

// Props received from the server component
interface ContactClientContentProps {
  params: { locale: string };
  searchParams?: { [key: string]: string | string[] | undefined };
}

export default function ContactClientContent({ params, searchParams }: ContactClientContentProps) {
  const t = useTranslations('ContactPage');
  const footerT = useTranslations('Footer'); 

  return (
    <div className="container mx-auto max-w-6xl px-4 py-12 sm:px-6 lg:px-8 relative flex-grow">
      <Meteors number={60} className="opacity-70 -z-10 absolute inset-0" />
      <header className="mb-12 text-center relative z-10">
        <h1 className="text-4xl font-bold tracking-tight text-primary sm:text-5xl">
          {t('title')}
        </h1>
        <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto">
          {t('description')}
        </p>
      </header>

      <div className="grid grid-cols-1 gap-12 lg:grid-cols-2 lg:gap-16 items-center relative z-10"> 
        <div className="flex flex-col items-center">
           <h2 className="text-2xl font-semibold text-foreground mb-6 text-center lg:text-left">{t('formTitle')}</h2>
          <SignupForm className="w-full" /> 
        </div>

        <div className="flex flex-col items-center"> 
          <Card className="shadow-lg w-full max-w-xl"> 
            <CardHeader>
              <CardTitle className="text-2xl font-semibold text-primary">{t('hostInfoTitle')}</CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="flex items-start space-x-3">
                <MapPin className="h-6 w-6 text-primary mt-1 flex-shrink-0" />
                <div>
                  <h3 className="font-medium text-foreground">{footerT('address')}</h3>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <Mail className="h-6 w-6 text-primary mt-1 flex-shrink-0" />
                <div>
                  <h3 className="font-medium text-foreground">{t('email')}</h3>
                  <span className="text-sm text-muted-foreground break-all">
                    merutacosmin@gmail.com
                  </span>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <Phone className="h-6 w-6 text-primary mt-1 flex-shrink-0" />
                <div>
                  <h3 className="font-medium text-foreground">{t('phone')}</h3>
                  <span className="text-sm text-muted-foreground">
                    +40 723 513 761
                  </span>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}
