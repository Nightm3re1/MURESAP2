
"use client";
import Image from 'next/image';
import { Link } from '@/navigation';
import { useLocale, useTranslations } from 'next-intl';
import { Card, CardContent, CardFooter, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import type { Apartment } from '@/types';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { CardStack3D } from '@/components/ui/3d-flip-card';
import { cn } from '@/lib/utils';

interface ApartmentCardProps {
  apartment: Apartment;
}

export function ApartmentCard({ apartment }: ApartmentCardProps) {
  const locale = useLocale();
  const t = useTranslations('ApartmentCard');

  const name = apartment.name[locale] || apartment.name.en;
  const teaser = apartment.teaser[locale] || apartment.teaser.en;

  // Prepare images for CardStack3D, ensuring it's an array of {src, alt}
  const stackImages = Array.isArray(apartment.images) 
    ? apartment.images.slice(0, 3).map((imgSrc, idx) => ({
        src: imgSrc,
        alt: `${name} - View ${idx + 1}`,
        dataAiHint: `apartment interior ${idx + 1}` // Added data-ai-hint
      }))
    : [];

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      whileHover={{ y: -5, boxShadow: "0px 10px 20px rgba(0,0,0,0.1)" }}
      className="h-full"
    >
      {/* Removed overflow-hidden from Card to allow 3D stack to fan out */}
      <Card className="flex flex-col h-full rounded-lg shadow-lg transition-shadow hover:shadow-xl">
        <CardHeader className={cn(
            "p-0 relative w-full",
            apartment.displayType === 'stack3d' ? "aspect-[4/3] bg-card" : "aspect-video bg-muted" 
        )}>
          {apartment.displayType === 'stack3d' && stackImages.length > 0 ? (
            // Removed overflow-hidden from this div
            <div className="w-full h-full flex items-center justify-center"> 
              <CardStack3D
                images={stackImages}
                className="py-0 w-auto h-auto" 
                cardWidth={260} 
                cardHeight={195} 
                spacing={{ x: 30, y: 30 }}
              />
            </div>
          ) : (
            <Link href={`/apartments/${apartment.slug}`} locale={locale} className="block w-full h-full relative group">
              <Image
                src={apartment.images[0] || "https://picsum.photos/800/600"} 
                alt={name}
                layout="fill"
                objectFit="cover"
                className="transition-transform duration-300 ease-in-out group-hover:scale-105"
                data-ai-hint="apartment building"
              />
            </Link>
          )}
        </CardHeader>
        <CardContent className="p-6 flex-grow">
          <CardTitle className="text-xl font-semibold mb-2 text-primary">
            <Link href={`/apartments/${apartment.slug}`} locale={locale} className="hover:underline">
              {name}
            </Link>
          </CardTitle>
          <CardDescription className="text-sm text-muted-foreground line-clamp-3">
            {teaser}
          </CardDescription>
        </CardContent>
        <CardFooter className="p-6 pt-0">
          <Button asChild className="w-full group">
            <Link href={`/apartments/${apartment.slug}`} locale={locale}>
              {t('detailsButton')}
              <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Link>
          </Button>
        </CardFooter>
      </Card>
    </motion.div>
  );
}

