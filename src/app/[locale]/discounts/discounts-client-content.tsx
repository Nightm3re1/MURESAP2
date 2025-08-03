
'use client';

import { useTranslations } from 'next-intl';
// Removed getTranslations and Metadata as they are for server components
import { Meteors } from '@/components/ui/meteors';
import { discountOffers } from '@/lib/data';
import { motion } from 'framer-motion';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { DiscountOfferCard } from '@/components/ui/discount-offer-card';
import React, { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Link } from '@/navigation';
import { ArrowRight } from 'lucide-react';

// Renamed from DiscountsPage to DiscountsClientContent
export default function DiscountsClientContent() {
  const t = useTranslations('DiscountsPage');
  const [underlineVisible, setUnderlineVisible] = useState(true);

  useEffect(() => {
    const hideTimer = setTimeout(() => {
        setUnderlineVisible(false);
    }, 1800); 

    return () => clearTimeout(hideTimer);
  }, []);


  const faqItems = [
    {
      id: "q1",
      questionKey: "faq.q1",
      answerKey: "faq.a1",
    },
    {
      id: "q2",
      questionKey: "faq.q2",
      answerKey: "faq.a2",
    },
    {
      id: "q3",
      questionKey: "faq.q3",
      answerKey: "faq.a3",
    }
  ];

  return (
    <div className="bg-secondary flex-grow">
      <Meteors number={20} className="opacity-30" />
      <div className="container mx-auto max-w-5xl px-4 py-12 sm:px-6 lg:px-8 relative">
        
        <header className="mb-12 md:mb-16 text-center relative z-10">
          <motion.h1 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-4xl font-bold tracking-tight text-primary sm:text-5xl lg:text-6xl relative inline-block"
          >
            {t('title')}
            <motion.div 
              className="absolute bottom-0 left-0 h-1 bg-primary"
              initial={{ width: 0 }}
              animate={{ width: underlineVisible ? "100%" : 0 }}
              transition={{ 
                duration: 0.7, 
                delay: underlineVisible ? 0.3 : 0, 
                ease: "easeOut" 
              }}
            />
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.5 }}
            className="mt-6 text-lg text-muted-foreground max-w-2xl mx-auto"
          >
            {t('description')}
          </motion.p>
        </header>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 relative z-10 mb-16 md:mb-24">
          {discountOffers.map((offer) => (
            <DiscountOfferCard
              key={offer.id}
              id={offer.id}
              icon={offer.icon}
              title={t(offer.titleKey)}
              description={t(offer.descriptionKey)}
            />
          ))}
        </div>

        <section className="relative z-10 max-w-3xl mx-auto mb-16 md:mb-24">
          <h2 className="text-3xl font-bold text-center text-foreground mb-10">
            {t('faqTitle')}
          </h2>
          <Accordion type="single" collapsible className="w-full space-y-3">
            {faqItems.map((item) => (
              <AccordionItem 
                key={item.id} 
                value={item.id} 
                className="bg-card border border-border/70 rounded-lg shadow-md hover:shadow-lg transition-shadow"
              >
                <AccordionTrigger className="px-6 py-4 text-left font-semibold text-foreground hover:no-underline text-base">
                  {t(item.questionKey)}
                </AccordionTrigger>
                <AccordionContent className="px-6 pb-4 pt-0 text-muted-foreground text-sm">
                  {t(item.answerKey)}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </section>
        
        <div className="relative z-10 pt-8 border-t border-border/60 text-center">
            <Button asChild size="lg" className="group">
              <Link href="/contact">
                {t('footerCta')}
                <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
              </Link>
            </Button>
        </div>

      </div>
    </div>
  );
}
