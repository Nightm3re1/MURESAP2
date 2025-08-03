"use client";
import { cn } from "@/lib/utils";
import { motion, AnimatePresence } from "framer-motion";
import Image, { type StaticImageData } from "next/image";
import React, { useEffect, useState, useCallback } from "react";
import { Button } from "@/components/ui/button";
import { ChevronLeft, ChevronRight, ArrowRight } from "lucide-react";
import { Link } from '@/navigation'; 

export interface Slide {
  src: string | StaticImageData;
  alt: string;
  overlayTitle?: string;
  overlaySubtitle?: string;
  ctaText?: string;
  ctaLink?: string; // Canonical path
  customOverlay?: React.ReactNode;
  dataAiHint?: string;
}

interface ImagesSliderProps {
  slides: Slide[];
  autoplay?: boolean;
  autoplayInterval?: number;
  imageHeightClass?: string; // e.g., "h-[500px]" or "h-screen"
  showArrows?: boolean;
  showDots?: boolean;
  priority?: boolean; // For priority loading of the first image
  className?: string;
}

export const ImagesSlider: React.FC<ImagesSliderProps> = ({
  slides,
  autoplay = true,
  autoplayInterval = 5000,
  imageHeightClass = "h-[500px]",
  showArrows = true,
  showDots = true,
  priority = false,
  className,
}) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isHovering, setIsHovering] = useState(false);

  const nextSlide = useCallback(() => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % slides.length);
  }, [slides.length]);

  const prevSlide = () => {
    setCurrentIndex(
      (prevIndex) => (prevIndex - 1 + slides.length) % slides.length
    );
  };

  const goToSlide = (index: number) => {
    setCurrentIndex(index);
  };

  useEffect(() => {
    if (!autoplay || isHovering || slides.length <= 1) return;
    const interval = setInterval(nextSlide, autoplayInterval);
    return () => clearInterval(interval);
  }, [autoplay, autoplayInterval, nextSlide, isHovering, slides.length]);

  const slideVariants = {
    initial: (direction: number) => ({
      // If next (direction > 0), come from right (100%). If prev (direction < 0), come from left (-100%).
      x: direction > 0 ? "100%" : "-100%",
      opacity: 0,
    }),
    animate: {
      x: 0,
      opacity: 1,
      transition: {
        x: { type: "tween", ease: "easeInOut", duration: 0.5 }, 
        opacity: { duration: 0.2 },
      },
    },
    exit: (direction: number) => ({
      // If next (direction > 0), exit to left (-100%). If prev (direction < 0), exit to right (100%).
      x: direction > 0 ? "-100%" : "100%",
      opacity: 0,
      transition: {
        x: { type: "tween", ease: "easeInOut", duration: 0.5 },
        opacity: { duration: 0.2 },
      },
    }),
  };
  
  const [direction, setDirection] = useState(1); // Default direction to 1 (next slide comes from right)

  const handleNext = () => {
    setDirection(1); // Positive direction for "next" (slide comes from right, content moves left)
    nextSlide();
  };

  const handlePrev = () => {
    setDirection(-1); // Negative direction for "previous" (slide comes from left, content moves right)
    prevSlide();
  };

  const handleGoToSlide = (index: number) => {
    setDirection(index > currentIndex ? 1 : -1);
    goToSlide(index);
  };


  if (!slides || slides.length === 0) {
    return (
      <div className={cn("relative w-full overflow-hidden", imageHeightClass, className, "bg-muted flex items-center justify-center")}>
        <p className="text-muted-foreground">No slides to display.</p>
      </div>
    );
  }

  return (
    <div
      className={cn("relative w-full overflow-hidden group", imageHeightClass, className)}
      onMouseEnter={() => setIsHovering(true)}
      onMouseLeave={() => setIsHovering(false)}
    >
      <AnimatePresence initial={false} custom={direction} mode="sync"> 
        <motion.div
          key={currentIndex}
          custom={direction}
          variants={slideVariants}
          initial="initial"
          animate="animate"
          exit="exit"
          className="absolute inset-0 w-full h-full"
        >
          <Image
            src={slides[currentIndex].src}
            alt={slides[currentIndex].alt}
            fill
            style={{ objectFit: 'cover' }}
            priority={priority && currentIndex === 0} 
            className="blur-0" 
            data-ai-hint={slides[currentIndex].dataAiHint || "background image"}
            sizes="100vw" 
            unoptimized={typeof slides[currentIndex].src === 'string' && slides[currentIndex].src.startsWith('http')} 
          />
          {slides[currentIndex].customOverlay ? (
            slides[currentIndex].customOverlay
          ) : (
            (slides[currentIndex].overlayTitle || slides[currentIndex].overlaySubtitle || slides[currentIndex].ctaText) && (
              <div className="absolute inset-0 flex flex-col items-center justify-center bg-black/50 p-8 text-center text-background">
                {slides[currentIndex].overlayTitle && (
                  <motion.h1
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2, duration: 0.5 }}
                    className="text-3xl font-bold md:text-5xl lg:text-6xl mb-4 drop-shadow-md"
                  >
                    {slides[currentIndex].overlayTitle}
                  </motion.h1>
                )}
                {slides[currentIndex].overlaySubtitle && (
                  <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.4, duration: 0.5 }}
                    className="text-lg md:text-xl lg:text-2xl mb-6 drop-shadow-sm"
                  >
                    {slides[currentIndex].overlaySubtitle}
                  </motion.p>
                )}
                {slides[currentIndex].ctaText && slides[currentIndex].ctaLink && (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.6, duration: 0.5 }}
                  >
                    <Button asChild size="lg" className="rounded-full group">
                      <Link href={slides[currentIndex].ctaLink as any}>
                        {slides[currentIndex].ctaText}
                        <ArrowRight className="ml-2 h-4 w-4 opacity-60 transition-transform group-hover:translate-x-0.5"/>
                      </Link>
                    </Button>
                  </motion.div>
                )}
              </div>
            )
          )}
        </motion.div>
      </AnimatePresence>

      {showArrows && slides.length > 1 && (
        <>
          <Button
            variant="ghost"
            size="icon"
            className="absolute left-2 sm:left-4 top-1/2 -translate-y-1/2 z-10 bg-black/20 hover:bg-black/40 text-background rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"
            onClick={handlePrev} 
            aria-label="Previous slide"
          >
            <ChevronLeft className="h-6 w-6" />
          </Button>
          <Button
            variant="ghost"
            size="icon"
            className="absolute right-2 sm:right-4 top-1/2 -translate-y-1/2 z-10 bg-black/20 hover:bg-black/40 text-background rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"
            onClick={handleNext} 
            aria-label="Next slide"
          >
            <ChevronRight className="h-6 w-6" />
          </Button>
        </>
      )}

      {showDots && slides.length > 1 && (
        <div className="absolute bottom-4 left-1/2 -translate-x-1/2 z-10 flex space-x-2">
          {slides.map((_, index) => (
            <button
              key={index}
              onClick={() => handleGoToSlide(index)}
              aria-label={`Go to slide ${index + 1}`}
              className={cn(
                "h-2 w-2 rounded-full transition-all duration-300 ease-in-out",
                currentIndex === index ? "bg-background w-4" : "bg-background/50 hover:bg-background/75"
              )}
            />
          ))}
        </div>
      )}
    </div>
  );
};
