// src/components/ui/3d-flip-card.tsx
'use client';

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { cn } from "@/lib/utils"

interface CardImage {
  src: string;
  alt: string;
  dataAiHint?: string;
}

interface CardStackProps {
  images: CardImage[];
  className?: string;
  cardWidth?: number;
  cardHeight?: number;
  spacing?: {
    x?: number;
    y?: number;
  };
}

interface CardProps extends CardImage {
  index: number;
  isHoveredOnContainer: boolean;
  isMobile: boolean;
  isFront: boolean;
  frontCardIndex: number | null;
  onClick: (index: number) => void;
  width: number;
  height: number;
  spacing: { x: number; y: number };
  totalImages: number;
}

const Card = ({
  src,
  alt,
  dataAiHint,
  index,
  isHoveredOnContainer,
  isMobile,
  isFront,
  frontCardIndex,
  onClick,
  width,
  height,
  spacing,
  totalImages,
}: CardProps) => {
  return (
    <motion.div
      className={cn(
        "absolute overflow-hidden rounded-xl shadow-xl cursor-pointer",
        isFront && "z-20" // Ensure the front card is visually on top if selected
      )}
      style={{
        width,
        height,
        transformStyle: 'preserve-3d',
        transformOrigin: isMobile ? 'top center' : 'left center',
        // zIndex ensures correct 2D layering: Card 0 is on top, Card 1 below, etc.
        zIndex: isFront ? 20 : (totalImages - index), 
        filter: isFront || frontCardIndex === null ? 'none' : 'blur(2px)',
      }}
      initial={{
        rotateY: 0,
        x: 0,
        y: 0,
        z: -(index * 2), // Initial stack with depth
        scale: 1,
        opacity: 1,
        boxShadow: '0px 4px 15px rgba(0, 0, 0, 0.1)',
      }}
      animate={
        isFront // This card is selected to be in front
        ? { 
            scale: 1.18,
            rotateY: 0,
            x: 0,
            y: isMobile ? 0 : -(height * 0.09),
            z: 60, // Bring significantly forward
            opacity: 1,
            boxShadow: '0px 15px 35px rgba(0, 0, 0, 0.25)',
            transition: { type: 'spring', stiffness: 260, damping: 25 }
          }
        : frontCardIndex !== null // Another card is in front (this card is in background)
        ? {
            rotateY: 0,
            x: 0,
            y: 0,
            z: -(index * 3) - 10, // Push further back and ensure distinct Z planes
            scale: 0.9,
            opacity: 0.7,
            boxShadow: '0px 2px 10px rgba(0, 0, 0, 0.05)',
            transition: { type: 'spring', stiffness: 260, damping: 25 }
          }
        : isHoveredOnContainer // No card is front, container is hovered: fan out
        ? { 
            rotateY: isMobile ? 0 : -28,
            x: isMobile ? 0 : index * spacing.x,
            y: isMobile ? index * spacing.y : index * -(height * 0.03),
            z: index * 8, // Fan out with increasing z
            scale: 1.03,
            opacity: 1,
            boxShadow: `4px 8px 18px rgba(0, 0, 0, ${0.06 + index * 0.02})`,
            transition: { type: 'spring', stiffness: 260, damping: 25, delay: index * 0.065 }
          }
        : { // No card is front, container not hovered: stacked state
            rotateY: 0,
            x: 0,
            y: 0,
            z: -(index * 2), // Apply depth to the stack (Card 0 at z=0, Card 1 at z=-2, etc.)
            scale: 1,
            opacity: 1,
            boxShadow: '0px 4px 15px rgba(0, 0, 0, 0.1)',
            // Delay ensures cards fall back in order: last fanned (index 2) first, then middle, then top (index 0) last.
            transition: { type: 'spring', stiffness: 260, damping: 25, delay: (totalImages - 1 - index) * 0.065 } 
          }
      }
      onClick={() => onClick(index)}
    >
      <Image
        src={src}
        alt={alt}
        fill
        style={{ objectFit: 'cover' }}
        className="rounded-xl"
        data-ai-hint={dataAiHint || "image sequence"}
        sizes={`(max-width: 768px) 100vw, ${width}px`}
      />
    </motion.div>
  );
};

export function CardStack3D({
   images = [],
   className,
   cardWidth = 320,
   cardHeight = 192,
   spacing: propSpacing = { x: 30, y: 30 }
}: CardStackProps) {
  const [isHoveredOnContainer, setIsHoveredOnContainer] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const [frontCardIndex, setFrontCardIndex] = useState<number | null>(null);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth <= 768);
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);
  
  const validImages = Array.isArray(images) ? images : [];
  const resolvedSpacing = {
    x: propSpacing.x ?? 30,
    y: propSpacing.y ?? 30,
  };

  const mobileVerticalStackingFactor = 0.6; 
  const desktopVerticalFanFactor = 0.15; 
  
  const calculatedMinHeight = isMobile 
    ? cardHeight + (validImages.length > 1 ? ((validImages.length -1) * resolvedSpacing.y * mobileVerticalStackingFactor) : 0)
    : cardHeight + (validImages.length > 1 ? ((validImages.length -1) * cardHeight * desktopVerticalFanFactor) : 0) ;


  return (
    <div 
      className={cn("flex justify-center items-center w-full h-full", className)} 
      style={{ minHeight: calculatedMinHeight }}
    >
      <div
        className="relative [perspective:1000px]"
        style={{ width: cardWidth, height: cardHeight, transformStyle: 'preserve-3d' }}
        onMouseEnter={() => setIsHoveredOnContainer(true)}
        onMouseLeave={() => {
          setIsHoveredOnContainer(false);
          // Do not reset frontCardIndex on mouse leave, only on click
        }}
      >
        {validImages.map((image, index) => (
          <Card
            key={image.src + index}
            {...image}
            index={index}
            isHoveredOnContainer={isHoveredOnContainer}
            isMobile={isMobile}
            isFront={frontCardIndex === index}
            frontCardIndex={frontCardIndex}
            onClick={(idx) => setFrontCardIndex(prev => prev === idx ? null : idx)}
            width={cardWidth}
            height={cardHeight}
            spacing={resolvedSpacing}
            totalImages={validImages.length}
          />
        ))}
      </div>
    </div>
  );
}
