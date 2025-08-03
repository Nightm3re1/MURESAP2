'use client';

import { useTranslations } from 'next-intl';
import { motion } from 'framer-motion';

export function AboutSection() {
  const t = useTranslations('Home');
  return (
    <motion.section
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.8 }}
      className="py-16 md:py-24 bg-background"
    >
      <div className="container mx-auto max-w-4xl px-4">
        <h2 className="text-3xl font-bold tracking-tight text-center text-primary sm:text-4xl mb-8">
          {t('aboutTitle')}
        </h2>
        <p className="mt-6 text-lg leading-8 text-muted-foreground text-center">
          {t('aboutText')}
        </p>
      </div>
    </motion.section>
  );
}
