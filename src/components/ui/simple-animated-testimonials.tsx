
"use client"

import type { SVGProps } from 'react';
import React, { useEffect, useRef, useState } from "react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { cn } from "@/lib/utils";
import { ChevronLeft, ChevronRight, Quote, Star } from 'lucide-react';
import { motion, useAnimation, useInView } from "framer-motion";
import { useLocale, useTranslations } from 'next-intl';

// Define a helper type for localized strings if not already globally available
interface LocalizedPair {
  en: string;
  ro: string;
}

export interface Testimonial {
  id: number;
  name: string;
  role: string; 
  company: string; 
  englishCountryName: string; 
  content: string; 
  rating: number;
  avatar: string;
  durationInfo: string; 
}

export interface TestimonialsSectionProps {
  title?: string;
  subtitle?: string;
  testimonials?: Testimonial[];
  autoRotateInterval?: number;
  className?: string;
}

const getCountryFlagEmoji = (countryName?: string): string => {
  if (!countryName) {
    return '🌍'; 
  }
  // This function expects the English country name
  switch (countryName.toLowerCase()) {
    case 'romania':
      return '🇷🇴';
    case 'germany':
      return '🇩🇪';
    case 'hungary':
      return '🇭🇺';
    case 'united kingdom':
      return '🇬🇧';
    case 'ukraine':
      return '🇺🇦';
    case 'usa': // Changed from 'united states of america' and removed US_FLAG_MARKER
      return '🇺🇸';
    default:
      return '🌍';
  }
};

export function TestimonialsSection({
  title = "What Our Guests Say",
  subtitle,
  testimonials = [],
  autoRotateInterval = 6000,
  className,
}: TestimonialsSectionProps) {
  const [activeIndex, setActiveIndex] = useState(0);
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, amount: 0.2 });
  const controls = useAnimation();
  const locale = useLocale(); 
  const tCommon = useTranslations('Common');
  const tApartmentDetail = useTranslations('ApartmentDetailPage'); 

  useEffect(() => {
    if (autoRotateInterval <= 0 || testimonials.length <= 1) return;

    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % testimonials.length);
    }, autoRotateInterval);

    return () => clearInterval(interval);
  }, [testimonials.length, autoRotateInterval]);

  useEffect(() => {
    if (isInView) {
      controls.start("visible");
    }
  }, [isInView, controls]);

  const handlePrev = () => {
    setActiveIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  const handleNext = () => {
    setActiveIndex((prev) => (prev + 1) % testimonials.length);
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        ease: "easeOut",
      },
    },
  };

  if (testimonials.length === 0) {
    return null;
  }

  const renderCountryIndicator = (englishCountryNameForFlag: string) => {
    const indicator = getCountryFlagEmoji(englishCountryNameForFlag);
    // Removed US_FLAG_MARKER logic as getCountryFlagEmoji now returns the emoji directly
    return <span aria-hidden="true" className="ml-1">{indicator}</span>;
  };


  return (
    <section
      ref={sectionRef}
      id="testimonials-section"
      className={cn("py-12 md:py-16 relative overflow-hidden flex justify-center bg-background", className)}
    >
      <div className="container items-center px-4 md:px-6 max-w-5xl">
        <motion.div
          initial="hidden"
          animate={controls}
          variants={containerVariants}
          className="text-center mb-10 md:mb-12 space-y-3"
        >
          <motion.h2 variants={itemVariants} className="text-3xl font-bold tracking-tight text-primary sm:text-4xl">
            {title}
          </motion.h2>
          {subtitle && (
            <motion.p variants={itemVariants} className="text-muted-foreground max-w-2xl mx-auto md:text-lg">
              {subtitle}
            </motion.p>
          )}
        </motion.div>

        <motion.div
          initial="hidden"
          animate={controls}
          variants={containerVariants}
          className="md:grid md:grid-cols-[1fr_auto] gap-6 items-center"
        >
          <motion.div variants={itemVariants} className="relative">
            <div className="absolute -top-4 -left-4 z-0 md:-top-5 md:-left-5">
              <Quote className="h-10 w-10 text-primary/10 md:h-12 md:w-12" strokeWidth={1.5} />
            </div>

            <div className="relative h-[380px] sm:h-[350px] md:h-[320px]">
              {testimonials.map((testimonial, index) => {
                return (
                <Card
                  key={testimonial.id}
                  className={cn(
                    "absolute inset-0 transition-all duration-700 ease-in-out border-border shadow-xl",
                    "bg-card text-card-foreground",
                    index === activeIndex
                      ? "opacity-100 translate-x-0"
                      : "opacity-0 translate-x-[50px] pointer-events-none",
                  )}
                >
                  <CardContent className="p-6 h-full flex flex-col">
                    <div className="flex justify-between items-start mb-3">
                      <div className="flex items-center gap-3">
                        <Avatar className="h-11 w-11 border-2 border-primary/20">
                           <AvatarFallback className="bg-muted text-foreground font-semibold">
                            {testimonial.name.charAt(0).toUpperCase()}
                          </AvatarFallback>
                        </Avatar>
                        <div className="text-left">
                          <h4 className="font-semibold text-foreground">{testimonial.name}</h4>
                          <p className="text-xs text-muted-foreground">
                            {testimonial.role} {tCommon('fromLocation')} {testimonial.company} {renderCountryIndicator(testimonial.englishCountryName)}
                          </p>
                          {testimonial.durationInfo && (
                             <p className="text-xs text-muted-foreground/80">{testimonial.durationInfo}</p>
                          )}
                        </div>
                      </div>
                      <div className="flex mt-1">
                        {[...Array(5)].map((_, i) => (
                          <Star key={i} className={cn("h-4 w-4", i < testimonial.rating ? "fill-primary text-primary" : "fill-muted-foreground/30 text-muted-foreground/50")} />
                        ))}
                      </div>
                    </div>

                    <Separator className="my-3 bg-border" />

                    <p className="flex-1 italic text-sm leading-relaxed text-muted-foreground overflow-y-auto scrollbar-thin scrollbar-thumb-muted scrollbar-track-transparent pr-2">
                      &ldquo;{testimonial.content}&rdquo;
                    </p>
                  </CardContent>
                </Card>
              )})}
            </div>
          </motion.div>

          <motion.div variants={itemVariants} className="flex md:flex-col gap-3 justify-center items-center mt-6 md:mt-0 md:items-stretch">
            <Button
              variant="outline"
              size="icon"
              onClick={handlePrev}
              className="rounded-full h-9 w-9 border-border hover:bg-accent hover:text-accent-foreground"
              aria-label="Previous testimonial"
            >
              <ChevronLeft className="h-4 w-4" />
            </Button>

            <div className="flex md:flex-col gap-1.5 items-center justify-center">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  className={cn(
                    "w-2 h-2 rounded-full transition-all duration-300 ease-in-out focus:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2",
                    index === activeIndex ? "bg-primary scale-125" : "bg-muted-foreground/30 hover:bg-muted-foreground/50",
                     "md:w-1.5 md:h-3 md:my-0.5"
                  )}
                  role="button"
                  tabIndex={0}
                  onClick={() => setActiveIndex(index)}
                  onKeyDown={(e) => {
                    if (e.key === "Enter" || e.key === " ") {
                      setActiveIndex(index);
                    }
                  }}
                  aria-label={`Go to testimonial ${index + 1}`}
                />
              ))}
            </div>

            <Button
              variant="outline"
              size="icon"
              onClick={handleNext}
              className="rounded-full h-9 w-9 border-border hover:bg-accent hover:text-accent-foreground"
              aria-label="Next testimonial"
            >
              <ChevronRight className="h-4 w-4" />
            </Button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}

    