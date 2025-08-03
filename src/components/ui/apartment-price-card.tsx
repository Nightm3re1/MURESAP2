
'use client';

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { CheckIcon } from "lucide-react";
import type { LucideIcon } from 'lucide-react';
import { Link } from '@/navigation';
import { useLocale, useTranslations } from "next-intl"; // Added useLocale
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

interface Feature {
  nameKey: string; // Translation key for the feature name
  included: boolean;
}

export interface ApartmentPricingData {
  icon: LucideIcon;
  tierNameKey: string;
  pricePerNight: number;
  currencySymbol: string;
  descriptionKey: string;
  features: Feature[];
  bookNowButtonTextKey: string;
  bookNowButtonLink: string;
  discountButtonTextKey: string;
  discountButtonLink: string;
}

interface ApartmentPriceCardProps {
  pricingData: ApartmentPricingData;
  className?: string;
}

export function ApartmentPriceCard({ pricingData, className }: ApartmentPriceCardProps) {
  const t = useTranslations();
  const locale = useLocale(); // Get current locale

  const {
    icon: IconComponent,
    tierNameKey,
    pricePerNight,
    currencySymbol,
    descriptionKey,
    features,
    bookNowButtonTextKey,
    bookNowButtonLink,
    discountButtonTextKey,
    discountButtonLink,
  } = pricingData;

  return (
    <motion.section
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.6, delay: 0.2 }}
      className={cn("py-12 md:py-16 bg-background", className)}
    >
      <div className="container mx-auto max-w-lg">
        <Card className="shadow-xl border-border overflow-hidden rounded-xl">
          <CardHeader className="bg-muted/30 p-6 md:p-8">
            <div className="flex flex-col items-center text-center gap-3">
              <motion.div
                whileHover={{ scale: 1.1, y: -3 }}
                transition={{ type: 'spring', stiffness: 300 }}
                className="p-3 rounded-lg bg-primary/10 text-primary inline-block"
              >
                <IconComponent className="w-8 h-8 md:w-10 md:h-10" />
              </motion.div>
              <CardTitle className="text-2xl md:text-3xl font-semibold text-primary">
                {t(tierNameKey)}
              </CardTitle>
            </div>
          </CardHeader>
          <CardContent className="p-6 md:p-8 space-y-6">
            <div className="text-center">
              <span className="text-5xl md:text-6xl font-bold text-foreground">
                {locale === 'ro' ? (
                  <>{pricePerNight} {currencySymbol}</>
                ) : (
                  <>{currencySymbol}{pricePerNight}</>
                )}
              </span>
              <span className="text-lg text-muted-foreground">/ {t('Pricing.perNight')}</span>
            </div>
            <CardDescription className="text-center text-muted-foreground text-base">
              {t(descriptionKey)}
            </CardDescription>

            <ul className="space-y-3 pt-4">
              {features.map((feature, index) => (
                <li key={index} className="flex items-start gap-3">
                  <CheckIcon className={cn(
                    "w-5 h-5 mt-0.5 flex-shrink-0",
                    feature.included ? "text-primary" : "text-muted-foreground/50"
                  )} />
                  <span className={cn(
                    "text-sm",
                    feature.included ? "text-foreground" : "text-muted-foreground line-through"
                  )}>
                    {t(feature.nameKey)}
                  </span>
                </li>
              ))}
            </ul>
          </CardContent>
          <CardFooter className="flex flex-col gap-4 p-6 md:p-8 bg-muted/10 border-t border-border">
            <Button asChild size="lg" className="w-full group bg-primary hover:bg-primary/90 text-primary-foreground shadow-md hover:shadow-lg transition-shadow">
              <Link href={bookNowButtonLink}>
                {t(bookNowButtonTextKey)}
              </Link>
            </Button>
            <Button asChild variant="outline" size="lg" className="w-full shadow-sm hover:shadow-md transition-shadow">
              <Link href={discountButtonLink}>
                {t(discountButtonTextKey)}
              </Link>
            </Button>
          </CardFooter>
        </Card>
      </div>
    </motion.section>
  );
}
