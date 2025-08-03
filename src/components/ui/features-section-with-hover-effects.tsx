
"use client";
import { useTranslations } from 'next-intl';
import { motion } from 'framer-motion';
import { Card, CardHeader, CardTitle } from '@/components/ui/card';
import type { AmenityKey } from '@/types';
import { amenityDetails } from '@/lib/data';
import { cn } from '@/lib/utils';

interface FeaturesSectionProps {
  amenities: AmenityKey[];
  className?: string;
}

export function FeaturesSectionWithHoverEffects({ amenities, className }: FeaturesSectionProps) {
  const t = useTranslations();

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.08,
        delayChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 15, scale: 0.95 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.4,
        ease: "easeOut",
      },
    },
  };

  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
      className={cn(`grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6`, className)}
    >
      {amenities.map((amenityKey) => {
        const amenity = amenityDetails[amenityKey];
        if (!amenity) return null;
        const IconComponent = amenity.icon;
        return (
          <motion.div key={amenityKey} variants={itemVariants}>
            <Card className="h-full transition-all duration-300 ease-in-out hover:shadow-lg hover:border-primary/50 group bg-card hover:bg-accent/50 flex flex-col">
              <CardHeader className="flex-grow flex flex-row items-center justify-center space-x-3 p-4">
                {IconComponent && (
                  <IconComponent className="h-5 w-5 text-muted-foreground group-hover:text-primary transition-colors duration-200 flex-shrink-0" />
                )}
                <CardTitle className="text-sm font-medium text-foreground group-hover:text-primary transition-colors duration-200 leading-tight text-center">
                  {t(amenity.labelKey)}
                </CardTitle>
              </CardHeader>
            </Card>
          </motion.div>
        );
      })}
    </motion.div>
  );
}
