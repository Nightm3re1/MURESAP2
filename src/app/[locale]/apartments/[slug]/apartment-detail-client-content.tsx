
'use client';

import Image from 'next/image';
import { useLocale, useTranslations } from 'next-intl';
import { FeaturesSectionWithHoverEffects } from '@/components/ui/features-section-with-hover-effects';
import { Cta11 } from '@/components/ui/cta11';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Separator } from '@/components/ui/separator';
import type { Apartment } from '@/types';
import { motion, useScroll, useTransform } from 'framer-motion';
import React, { useRef } from 'react';
// notFound should not be called from client components. The parent server component handles this.
import { FormattedDescription } from '@/components/ui/formatted-description';
import { TestimonialsSection } from '@/components/ui/simple-animated-testimonials';
import { ApartmentPriceCard } from '@/components/ui/apartment-price-card';
import { Meteors } from '@/components/ui/meteors';
import { apartmentPricingData, pageSpecificTestimonials, apartmentGalleryImages } from '@/lib/data';
import type { ApartmentPricingData as PricingDataTypeFromLib } from '@/lib/data';
import type { ApartmentPricingData as PriceCardPropsType } from '@/components/ui/apartment-price-card';


interface ApartmentDetailClientContentProps {
  apartment: Apartment; // Assuming apartment is guaranteed to be non-null by the server component
  slug: string;
}

export default function ApartmentDetailClientContent({
  apartment,
  slug,
}: ApartmentDetailClientContentProps) {
  const locale = useLocale();
  const t = useTranslations('ApartmentDetailPage');
  const heroT = useTranslations('Hero');
  const tCta = useTranslations('Cta11');
  // const pricingT = useTranslations('Pricing'); // pricingT was not used

  // The check for !apartment and calling notFound() should be done in the server component.
  // If we reach this client component, 'apartment' should be valid.

  const name = apartment.name[locale] || apartment.name.en;
  const description = apartment.description[locale] || apartment.description.en;

  const ctaTextKey = apartment.ctaText && (apartment.ctaText[locale] || apartment.ctaText.en) ? '' : 'ApartmentDetailPage.ctaDefault';
  const resolvedCtaText = ctaTextKey ? t(ctaTextKey) : (apartment.ctaText?.[locale] || apartment.ctaText?.en);

  const currentApartmentPricingData: PricingDataTypeFromLib | undefined = apartmentPricingData[slug];
  const currentApartmentTestimonials = pageSpecificTestimonials[slug] || [];
  const currentGalleryImages = apartmentGalleryImages[slug] || [];

  const animationAreaRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: animationAreaRef,
    offset: ["start start", "end start"]
  });

  const titleInitialOpacity = 0.1;
  const titleTargetOpacity = 1;
  const titleColorInitial = "hsl(var(--muted-foreground))";
  const titleColorTarget = "hsl(var(--foreground))";

  const titleOpacity = useTransform(scrollYProgress, [0, 0.05, 0.25, 0.4], [titleInitialOpacity, titleTargetOpacity, titleTargetOpacity, 0]);
  const titleColor = useTransform(scrollYProgress, [0, 0.1], [titleColorInitial, titleColorTarget]);
  const titleScale = useTransform(scrollYProgress, [0, 0.08, 0.25, 0.4], [0.8, 1, 1.2, 0.9]);
  const titleY = useTransform(scrollYProgress, [0, 0.25, 0.45], ["0vh", "0vh", "-30vh"]);

  const galleryOpacity = useTransform(scrollYProgress, [0.3, 0.5], [0, 1]);
  const galleryY = useTransform(scrollYProgress, [0.3, 0.5], ["50px", "0px"]);

  const gridContainerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.05, delayChildren: 0.1 },
    },
  };

  const gridItemVariants = {
    hidden: { opacity: 0, y: 20, scale: 0.95 },
    visible: { opacity: 1, y: 0, scale: 1, transition: { duration: 0.3, ease: "easeOut" } },
  };
  
  const localizedPricingData: PriceCardPropsType | null = currentApartmentPricingData && currentApartmentPricingData.priceDetails
  ? {
      icon: currentApartmentPricingData.icon,
      tierNameKey: currentApartmentPricingData.tierNameKey,
      descriptionKey: currentApartmentPricingData.descriptionKey,
      features: currentApartmentPricingData.features,
      bookNowButtonTextKey: currentApartmentPricingData.bookNowButtonTextKey,
      discountButtonTextKey: currentApartmentPricingData.discountButtonTextKey,
      pricePerNight: currentApartmentPricingData.priceDetails[locale as keyof typeof currentApartmentPricingData.priceDetails]?.pricePerNight 
                     || currentApartmentPricingData.priceDetails.en?.pricePerNight 
                     || 0,
      currencySymbol: currentApartmentPricingData.priceDetails[locale as keyof typeof currentApartmentPricingData.priceDetails]?.currencySymbol 
                      || currentApartmentPricingData.priceDetails.en?.currencySymbol 
                      || '$',
      bookNowButtonLink: `/contact?apartment=${slug}`,
      discountButtonLink: `/discounts`,
    }
  : null;


  return (
    <div className="bg-background min-h-screen relative flex-grow">
      <Meteors number={60} className="opacity-70 -z-10 absolute inset-0" />
      <div ref={animationAreaRef} className="h-[200vh]">
        <motion.div
          className="sticky top-0 h-screen flex items-center justify-center text-center overflow-hidden"
          style={{
            scale: titleScale,
            y: titleY,
          }}
        >
          <motion.h1
            className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold px-4"
            style={{
              opacity: titleOpacity,
              color: titleColor,
            }}
          >
            {name}
          </motion.h1>
        </motion.div>
      </div>

      <motion.section
        aria-labelledby="gallery-title-animated"
        className="container mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8 relative z-10"
        style={{ opacity: galleryOpacity, y: galleryY, marginTop: "-100vh" }}
        variants={gridContainerVariants}
        initial="hidden"
        animate="visible"
      >
        <h2 id="gallery-title-animated" className="text-3xl sm:text-4xl font-bold text-foreground mb-10 md:mb-12 text-center">
          {t('galleryTitle')}
        </h2>
        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6"
          variants={gridContainerVariants}
          initial="hidden"
          animate="visible"
        >
          {currentGalleryImages.map((imageSrc, index) => (
            <motion.div
              key={imageSrc + '-' + index} 
              className="aspect-video relative rounded-lg overflow-hidden shadow-xl group bg-muted transform hover:scale-105 transition-transform duration-300"
              variants={gridItemVariants}
            >
              <Image
                src={imageSrc}
                alt={`${name} - Gallery Image ${index + 1}`}
                fill
                style={{ objectFit: 'cover' }}
                className="transition-transform duration-300 ease-in-out group-hover:opacity-90"
                quality={90}
                sizes="(max-width: 640px) 100vw, (max-width: 768px) 50vw, (max-width: 1024px) 33vw, 25vw"
                data-ai-hint="apartment interior"
              />
            </motion.div>
          ))}
        </motion.div>
      </motion.section>

      <div className="container mx-auto max-w-5xl px-4 py-12 sm:px-6 lg:px-8 relative z-10">
        <Card className="shadow-xl border-border">
          <CardHeader>
             <CardTitle className="text-2xl font-semibold text-foreground">{t('descriptionTitle')}</CardTitle>
          </CardHeader>
          <CardContent className="space-y-8 pt-6">
            <section aria-labelledby="description-content">
              <h3 id="description-content" className="sr-only">{t('descriptionTitle')}</h3>
              <FormattedDescription text={description} />
            </section>
            <Separator />
            {apartment.amenities && apartment.amenities.length > 0 && (
              <section aria-labelledby="amenities-title">
                <h3 id="amenities-title" className="text-2xl font-semibold text-foreground mb-6">{t('amenitiesTitle')}</h3>
                <FeaturesSectionWithHoverEffects amenities={apartment.amenities} />
              </section>
            )}
            <Separator />
            <section aria-labelledby="map-title">
              <h3 id="map-title" className="text-2xl font-semibold text-foreground mb-4">{t('mapTitle')}</h3>
              <div className="aspect-video w-full overflow-hidden rounded-lg border-2 border-border shadow-md bg-muted">
                <iframe
                  src={apartment.mapEmbedUrl || "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2744.401550404667!2d24.577000000000004!3d46.539900000000005!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2s!5e0!3m2!1sen!2sro&hl=en&theme=dark"}
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen={true}
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title={`Map showing location of ${name}`}
                ></iframe>
              </div>
            </section>
          </CardContent>
        </Card>

        {currentApartmentTestimonials.length > 0 && (
          <TestimonialsSection
            testimonials={currentApartmentTestimonials.map(testimonial => ({
              id: testimonial.id,
              name: testimonial.name,
              avatar: testimonial.avatar,
              rating: testimonial.rating,
              content: testimonial.content[locale as keyof typeof testimonial.content] || testimonial.content.en,
              role: testimonial.role[locale as keyof typeof testimonial.role] || testimonial.role.en,
              company: testimonial.company[locale as keyof typeof testimonial.company] || testimonial.company.en,
              durationInfo: testimonial.durationInfo[locale as keyof typeof testimonial.durationInfo] || testimonial.durationInfo.en,
              englishCountryName: testimonial.company.en,
            }))}
            title={t('testimonialsSectionTitle')}
            subtitle=""
            className="my-12 md:my-16"
          />
        )}

        {localizedPricingData && (
            <ApartmentPriceCard
                pricingData={localizedPricingData}
            />
        )}

        <Cta11
          title={resolvedCtaText || tCta('defaultTitle')}
          description={resolvedCtaText ? "" : tCta('defaultDescription')}
          primaryButtonText={heroT('cta')}
          primaryButtonLink={`/contact?apartment=${slug}`} 
          className="mt-12"
        />
      </div>
    </div>
  );
}
