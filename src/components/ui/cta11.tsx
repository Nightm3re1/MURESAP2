"use client";
import { useTranslations } from 'next-intl';
import { Link } from '@/navigation'; 
import { Button } from '@/components/ui/button';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

interface Cta11Props {
  title?: string;
  description?: string;
  primaryButtonText?: string;
  primaryButtonLink?: string; 
  secondaryButtonText?: string;
  secondaryButtonLink?: string; 
  className?: string;
}

export function Cta11({
  title,
  description,
  primaryButtonText,
  primaryButtonLink,
  secondaryButtonText,
  secondaryButtonLink,
  className,
}: Cta11Props) {
  const t = useTranslations('Cta11');

  const defaultTitle = t('defaultTitle');
  const defaultDescription = t('defaultDescription');
  const defaultPrimaryButtonText = t('primaryButton');
  const defaultSecondaryButtonText = t('secondaryButton');

  return (
    <motion.section
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.6 }}
      className={`py-12 md:py-20 bg-background ${className}`}
    >
      <div className="container mx-auto max-w-4xl px-4 text-center">
        <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl md:text-5xl">
          {title || defaultTitle}
        </h2>
        <p className="mt-6 text-lg leading-8 text-muted-foreground max-w-2xl mx-auto">
          {description || defaultDescription}
        </p>
        <div className="mt-10 flex items-center justify-center gap-x-6">
          {primaryButtonLink ? (
            <Button asChild size="lg" className="group">
              <Link href={primaryButtonLink}> 
                {primaryButtonText || defaultPrimaryButtonText}
                <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
              </Link>
            </Button>
          ) : (
            <Button size="lg" className="group">
              {primaryButtonText || defaultPrimaryButtonText}
              <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
            </Button>
          )}
          {secondaryButtonLink && (
            <Button asChild variant="outline" size="lg">
              <Link href={secondaryButtonLink}>{secondaryButtonText || defaultSecondaryButtonText}</Link>
            </Button>
          )}
        </div>
      </div>
    </motion.section>
  );
}
