
'use client';

import type { LucideIcon } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { motion } from 'framer-motion';
import { cn } from '@/lib/utils';
import React from 'react';

interface DiscountOfferCardProps {
  id: string;
  icon: LucideIcon;
  title: string;
  description: string;
  className?: string;
}

const DiscountOfferCard: React.FC<DiscountOfferCardProps> = ({ icon: Icon, title, description, className }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.5 }}
      className={cn(
        "relative group rounded-2xl p-6 md:p-8 transition-all duration-300 flex flex-col",
        "bg-gradient-to-br from-card to-muted/30", // White to light-gray gradient
        "border border-border/50", // Subtle border
        "shadow-lg hover:shadow-xl", // Subtle shadow, deeper on hover
        "hover:scale-[1.02]", // Hover lift effect
        "ring-2 ring-primary ring-offset-2 ring-offset-background", // Applied to all cards
        className
      )}
    >
      <div className="absolute top-6 left-6">
        <Icon className="h-8 w-8 text-primary" strokeWidth={1.5} />
      </div>
      <CardHeader className="pt-16 pb-4 px-0"> {/* Adjusted padding for icon */}
        <CardTitle className="text-xl font-semibold text-foreground">{title}</CardTitle>
      </CardHeader>
      <CardContent className="flex-grow px-0 pb-0">
        <p className="text-muted-foreground text-sm">{description}</p>
      </CardContent>
    </motion.div>
  );
};

export { DiscountOfferCard };
