
'use client'; 

import { useTranslations, useLocale } from 'next-intl';
import { ImagesSlider } from '@/components/ui/images-slider'; 
import { Meteors } from '@/components/ui/meteors';
import { Cta11 } from '@/components/ui/cta11';
import { Mouse } from 'lucide-react';
import { motion } from 'framer-motion';

// Import the new components
import { AboutSection } from '@/components/ui/about-section';
import { FeaturedApartmentsSection } from '@/components/ui/featured-apartments-section';


export default function HomePageClient() {
  const t = useTranslations('Hero');
  const locale = useLocale();
  const tCta = useTranslations('Cta11');


  const heroSlides = [
    {
      src: 'https://8fpa87ovv8.ufs.sh/f/m4AOA69vaiTFb1TpEYnxFMnBltYThqAyeiRL6crupzXCvVxI', 
      alt: 'Spacious Living Room with modern furniture',
      overlayTitle: t('title'),
      overlaySubtitle: "Cosy Apartment I",
      ctaText: t('cta'),
      ctaLink: '/contact', 
      dataAiHint: 'modern living room',
    },
    {
      src: 'https://8fpa87ovv8.ufs.sh/f/m4AOA69vaiTFbdA2lrxFMnBltYThqAyeiRL6crupzXCvVxI0', 
      alt: 'Comfortable Bedroom',
      overlayTitle: t('title'),
      overlaySubtitle: "Cosy Apartment II",
      ctaText: t('cta'),
      ctaLink: '/contact', 
      dataAiHint: 'comfortable bedroom',
    },
    {
      src: 'https://8fpa87ovv8.ufs.sh/f/m4AOA69vaiTFZgB6qeAa1hzWeBCyNT4pbKcdPfuk6gl0QrEX', 
      alt: 'Târgu Mureș Cityscape',
      overlayTitle: t('title'),
      overlaySubtitle: "Cosy Apartment III",
      ctaText: t('cta'),
      ctaLink: '/contact', 
      dataAiHint: 'cityscape Targu Mures',
    },
  ];

  const AnimatedMouseIcon = () => (
    <div className="w-full flex justify-center mt-16 md:mt-24 mb-8 md:mb-12 pt-4">
      <motion.div
        animate={{ y: [0, -8, 0] }}
        transition={{
          duration: 1.5,
          repeat: Infinity,
          repeatType: "loop",
          ease: "easeInOut",
        }}
      >
        <Mouse className="h-8 w-8 text-foreground opacity-70" />
      </motion.div>
    </div>
  );


  return (
    <div className="relative">
      <Meteors number={30} className="opacity-70" />
      <ImagesSlider
        slides={heroSlides}
        autoplay={true}
        autoplayInterval={2500} 
        imageHeightClass="h-[calc(100vh-4rem)] min-h-[400px] max-h-[700px]" 
        priority={true}
      />
      <AnimatedMouseIcon />
      <AboutSection /> 
      <FeaturedApartmentsSection />
      <Cta11
        primaryButtonLink="/contact" 
        primaryButtonText={tCta('primaryButton')}
      />
    </div>
  );
}

