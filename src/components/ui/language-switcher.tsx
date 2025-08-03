
'use client';

import { useLocale, useTranslations } from 'next-intl';
import { usePathname, useRouter } from '@/navigation';
import { useParams } from 'next/navigation'; // Import useParams
import { Globe } from 'lucide-react';
import { Button } from '@/components/ui/button';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { locales } from '@/i18n';
import { useTransition } from 'react';

export function LanguageSwitcher() {
  const t = useTranslations('Navbar');
  const locale = useLocale();
  const router = useRouter();
  const pathname = usePathname();
  const params = useParams(); // Get current route parameters
  const [isPending, startTransition] = useTransition();


  const changeLocale = (nextLocale: string) => {
    startTransition(() => {
      // Pass pathname and params as an object to ensure dynamic segments are handled
      router.replace(
        {
          pathname,
          params: params as Record<string, string | string[]>, // Cast params to the expected type
        },
        { locale: nextLocale }
      );
    });
  };

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="ghost" size="icon" disabled={isPending} aria-label={t('language')}>
          <Globe className="h-5 w-5" />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end">
        {locales.map((loc) => (
          <DropdownMenuItem
            key={loc}
            onClick={() => changeLocale(loc)}
            disabled={isPending || loc === locale}
            className={loc === locale ? 'font-semibold text-primary' : ''}
          >
            {loc === 'ro' ? t('romanian') : t('english')}
          </DropdownMenuItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  );
}

