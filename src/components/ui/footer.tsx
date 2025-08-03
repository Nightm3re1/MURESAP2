
"use client";
import { Link } from '@/navigation';
import { useLocale, useTranslations } from 'next-intl';
import { Mail, Phone, MapPin } from 'lucide-react';
import { useState, useEffect } from 'react';
import { cn } from '@/lib/utils';
import { BrandLogoIcon } from '@/components/icons/brand-logo-icon';

// Sub-component for Quick Links list, rendered after mount
const QuickLinksList = ({ navT }: { navT: ReturnType<typeof useTranslations<'Navbar'>> }) => {
  const quickLinks = [
    { href: '/', label: navT('home') },
    // { href: '/apartments', label: navT('apartments') }, // Removed Apartments link
    { href: '/discounts', label: navT('discounts') },
    { href: '/contact', label: navT('contact') },
  ];

  return (
    <ul className="mt-4 space-y-2 text-sm">
      {quickLinks.map((link) => (
        <li key={link.href}>
          <Link href={link.href as any} className="hover:text-primary transition-colors">
            <span>{link.label}</span>
          </Link>
        </li>
      ))}
    </ul>
  );
};

// Sub-component for Legal Links list, rendered after mount
const LegalLinksList = ({ footerT }: { footerT: ReturnType<typeof useTranslations<'Footer'>> }) => {
  const legalLinks = [
    { href: '/terms-and-conditions', label: footerT('termsAndConditions') },
    { href: '/cookie-policy', label: footerT('cookiePolicy') },
  ];

  return (
    <ul className="mt-4 space-y-2 text-sm">
      {legalLinks.map((link) => (
        <li key={link.href}>
          <Link href={link.href as any} className="hover:text-primary transition-colors">
            <span>{link.label}</span>
          </Link>
        </li>
      ))}
    </ul>
  );
};


const ActualFooterContent = () => {
  const t = useTranslations('Footer');
  const brandT = useTranslations('Brand');
  const navT = useTranslations('Navbar');
  const [currentYear, setCurrentYear] = useState<number | null>(null);

  useEffect(() => {
    setCurrentYear(new Date().getFullYear());
  }, []);

  return (
    <>
      <div className="flex flex-col md:flex-row md:justify-between gap-8 text-center md:text-left">
        {/* Column 1: Contact Info */}
        <div className="w-full md:w-auto">
          <div className="flex items-center justify-center md:justify-start gap-2 mb-2">
            <BrandLogoIcon className="h-7 w-7 text-primary" />
            <h3 className="text-lg font-semibold text-primary">{brandT('name')}</h3>
          </div>
          <p className="mt-1 text-sm">{t('contactInfo')}</p>
          <ul className="mt-4 space-y-2 text-sm">
            <li className="flex items-center justify-center md:justify-start">
              <MapPin className="mr-2 h-4 w-4 text-primary flex-shrink-0" />
              <span>{t('address')}</span>
            </li>
            <li className="flex items-center justify-center md:justify-start">
              <Mail className="mr-2 h-4 w-4 text-primary flex-shrink-0" />
              <span className="break-all">merutacosmin@gmail.com</span>
            </li>
            <li className="flex items-center justify-center md:justify-start">
              <Phone className="mr-2 h-4 w-4 text-primary flex-shrink-0" />
              <span>+40 723 513 761</span>
            </li>
          </ul>
        </div>

        {/* Column 2: Quick Links */}
        <div className="w-full md:w-auto md:text-right">
          <h3 className="text-md font-semibold uppercase tracking-wider">{t('quickLinks')}</h3>
          <QuickLinksList navT={navT} />
        </div>

        {/* Column 3: Legal & Policies */}
        <div className="w-full md:w-auto md:text-right">
          <h3 className="text-md font-semibold uppercase tracking-wider">{t('legalAndPolicies')}</h3>
          <LegalLinksList footerT={t} />
        </div>
      </div>

      <div className="mt-12 border-t border-border/40 pt-8 text-center text-sm">
        {currentYear !== null ? (
          <p>{t('copyright', { year: currentYear })}</p>
        ) : (
          <p>&copy; {brandT('name')}. {t('copyrightPlaceholder')}</p>
        )}
      </div>
    </>
  );
};

const FooterSkeletonContent = () => {
  return (
    <>
      <div className="flex flex-col md:flex-row md:justify-between gap-8 text-center md:text-left">
        {/* Skeleton for Brand and Contact Info */}
        <div className="w-full md:w-auto">
          <div className="flex items-center justify-center md:justify-start gap-2 mb-2">
            <div className="h-7 w-7 rounded bg-muted/50 animate-pulse"></div> {/* Logo placeholder */}
            <div className="h-6 w-32 mb-2 rounded bg-muted/50 animate-pulse"></div> {/* Brand Name placeholder */}
          </div>
          <div className="h-5 w-36 mt-1 mb-2 rounded bg-muted/50 animate-pulse mx-auto md:mx-0"></div> {/* "Contact Info" title placeholder */}
          <ul className="mt-4 space-y-2 text-sm">
            <li className="flex items-center justify-center md:justify-start">
              <MapPin className="mr-2 h-4 w-4 text-muted/50 flex-shrink-0" />
              <span className="h-5 w-32 rounded bg-muted/50 animate-pulse block"></span>
            </li>
            <li className="flex items-center justify-center md:justify-start">
              <Mail className="mr-2 h-4 w-4 text-muted/50 flex-shrink-0" />
              <span className="h-5 w-40 rounded bg-muted/50 animate-pulse block"></span>
            </li>
            <li className="flex items-center justify-center md:justify-start">
              <Phone className="mr-2 h-4 w-4 text-muted/50 flex-shrink-0" />
              <span className="h-5 w-32 rounded bg-muted/50 animate-pulse block"></span>
            </li>
          </ul>
        </div>

        {/* Skeleton for Quick Links */}
        <div className="w-full md:w-auto md:text-right">
          <div className="h-5 w-28 mb-4 rounded bg-muted/50 animate-pulse mx-auto md:ml-auto md:mr-0"></div> {/* Quick Links title placeholder */}
          <ul className="mt-4 space-y-2 text-sm">
            <li className="h-5 w-20 mb-2 rounded bg-muted/50 animate-pulse mx-auto md:ml-auto md:mr-0"></li> {/* Home */}
            {/* Apartments link placeholder removed */}
            <li className="h-5 w-20 mb-2 rounded bg-muted/50 animate-pulse mx-auto md:ml-auto md:mr-0"></li> {/* Discounts */}
            <li className="h-5 w-16 mb-2 rounded bg-muted/50 animate-pulse mx-auto md:ml-auto md:mr-0"></li> {/* Contact */}
          </ul>
        </div>

         {/* Skeleton for Legal & Policies */}
        <div className="w-full md:w-auto md:text-right">
          <div className="h-5 w-32 mb-4 rounded bg-muted/50 animate-pulse mx-auto md:ml-auto md:mr-0"></div> {/* Legal & Policies title placeholder */}
          <ul className="mt-4 space-y-2 text-sm">
            <li className="h-5 w-28 mb-2 rounded bg-muted/50 animate-pulse mx-auto md:ml-auto md:mr-0"></li>
            <li className="h-5 w-24 mb-2 rounded bg-muted/50 animate-pulse mx-auto md:ml-auto md:mr-0"></li>
          </ul>
        </div>
      </div>

      <div className="mt-12 border-t border-border/40 pt-8 text-center text-sm">
        <p className="h-5 w-64 mx-auto rounded bg-muted/50 animate-pulse">
           {/* Placeholder for copyright text, ensuring a similar structure to avoid hydration errors with dynamic year */}
           &copy; Mureș Apartments. All rights reserved.
        </p>
      </div>
    </>
  );
};


export function Footer() {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  return (
    <footer className="bg-card text-card-foreground border-t border-border/40">
      <div className="container mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        {isMounted ? <ActualFooterContent /> : <FooterSkeletonContent />}
      </div>
    </footer>
  );
}

