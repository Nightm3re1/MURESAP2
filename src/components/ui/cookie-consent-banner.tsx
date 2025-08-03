
'use client';

import { useState, useEffect, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Link } from '@/navigation';
import { cn } from '@/lib/utils';
import { useTranslations } from 'next-intl';
import { Cookie } from 'lucide-react';

const COOKIE_NAME = 'cookie_consent_mures_apartments';
const COOKIE_EXPIRY_DAYS = 365;

export function CookieConsentBanner() {
  const t = useTranslations('CookieConsent');
  const [isVisible, setIsVisible] = useState(false);
  const [isMounted, setIsMounted] = useState(false);

  const getCookie = (name: string): string | null => {
    if (typeof document === 'undefined') return null;
    const value = `; ${document.cookie}`;
    const parts = value.split(`; ${name}=`);
    if (parts.length === 2) return parts.pop()?.split(';').shift() || null;
    return null;
  };

  const setCookie = (name: string, value: string, days: number) => {
    if (typeof document === 'undefined') return;
    let expires = '';
    if (days) {
      const date = new Date();
      date.setTime(date.getTime() + days * 24 * 60 * 60 * 1000);
      expires = `; expires=${date.toUTCString()}`;
    }
    document.cookie = `${name}=${value}${expires}; path=/; SameSite=Lax`;
  };

  useEffect(() => {
    setIsMounted(true);
  }, []);

  useEffect(() => {
    if (!isMounted) return;

    const consentCookie = getCookie(COOKIE_NAME);
    if (!consentCookie) {
      const handleLoad = () => {
        setTimeout(() => setIsVisible(true), 500); // Delay appearance slightly
      };
      if (document.readyState === 'complete') {
        handleLoad();
      } else {
        window.addEventListener('load', handleLoad);
        return () => window.removeEventListener('load', handleLoad);
      }
    }
  }, [isMounted]);

  const handleAccept = useCallback(() => {
    setCookie(COOKIE_NAME, 'true', COOKIE_EXPIRY_DAYS);
    setIsVisible(false);
  }, []);

  if (!isMounted) {
    return null;
  }

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 20, transition: { duration: 0.2 } }}
          transition={{ duration: 0.3, type: "spring", stiffness: 200, damping: 25 }}
          className={cn(
            'fixed bottom-4 left-4 right-4 z-[9999]', // Pinned to sides and bottom
            'bg-background/95 backdrop-blur-sm',
            'border border-border',
            'rounded-lg',
            'shadow-xl',
            'p-4' 
          )}
          role="dialog"
          aria-live="polite"
          aria-label={t('ariaLabel')}
        >
          <div className="flex flex-col items-center gap-3">
            <Cookie className="h-6 w-6 text-muted-foreground" />
            <p className="text-sm text-foreground text-center leading-relaxed">
              {t('messageLine1')}
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center sm:justify-end gap-3 w-full mt-2">
              <Button
                asChild
                variant="link"
                className="p-0 h-auto text-sm text-primary hover:underline order-2 sm:order-1"
              >
                <Link href="/cookie-policy">
                  {t('learnMoreButton')}
                </Link>
              </Button>
              <Button
                onClick={handleAccept}
                size="sm"
                className="w-full sm:w-auto bg-primary text-primary-foreground hover:bg-primary/90 order-1 sm:order-2"
              >
                {t('okButton')}
              </Button>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
