
'use client';

import React, { Fragment } from 'react';
import { cn } from '@/lib/utils';

interface FormattedDescriptionProps {
  text: string;
}

// Main titles that structure the description
const mainTitles = [
  "Apartment Highlights", "Puncte Forte ale Apartamentului",
  "Complimentary Perks", "Avantaje Gratuite", "Facilități Incluse",
  "What’s Nearby", "Ce se Află în Apropiere", "Atracții și Facilități în Apropiere",
  "Stunning Indoor Comfort", "Confort Interior Remarcabil",
  "Seamless Connectivity & Convenience", "Conectivitate și Confort Fără Probleme",
  "Exceptional On-Site Amenities", "Facilități Excepționale la Proprietate",
  "Nearby Surroundings", "Împrejurimi Apropiate",
  "Attractions & Parks", "Parcuri și Spații Verzi", "Parcuri și Puncte de Interes",
  "Restaurants and Cafés", "Restaurante și Cafenele", "Restaurants & Cafés",
  "Public Transport", "Transport Public",
  "Airport", "Aeroport", "Aeroporturi Apropiate",
  "Medical & Convenience", "Servicii Medicale & Utilități", "Centre Medicale & Utilități",
  "Shopping"
];

// Specific sub-category titles that should NOT get a bullet point
const subCategoryTitlesNoBullet = [
  "Attractions & Parks", "Parcuri și Spații Verzi", "Parcuri și Puncte de Interes",
  "Medical & Convenience", "Servicii Medicale & Utilități", "Centre Medicale & Utilități",
  "Restaurants and Cafés", "Restaurante și Cafenele", "Restaurants & Cafés",
  "Public Transport", "Transport Public",
  "Airport", "Aeroport", "Aeroporturi Apropiate",
  "Shopping"
];

// Titles that will be styled with text-3xl
const titlesFor3xl = [
  "What’s Nearby", "Ce se Află în Apropiere", "Atracții și Facilități în Apropiere",
];

// Titles that will be styled with text-2xl
const titlesFor2xl = [
  "Apartment Highlights", "Puncte Forte ale Apartamentului",
  "Complimentary Perks", "Avantaje Gratuite", "Facilități Incluse",
  "Stunning Indoor Comfort", "Confort Interior Remarcabil",
  "Seamless Connectivity & Convenience", "Conectivitate și Confort Fără Probleme",
  "Exceptional On-Site Amenities", "Facilități Excepționale la Proprietate",
  "Nearby Surroundings", "Împrejurimi Apropiate",
  "Attractions & Parks", "Parcuri și Spații Verzi", "Parcuri și Puncte de Interes",
  "Restaurants and Cafés", "Restaurante și Cafenele", "Restaurants & Cafés",
  "Public Transport", "Transport Public",
  "Airport", "Aeroport", "Aeroporturi Apropiate",
  "Medical & Convenience", "Servicii Medicale & Utilități", "Centre Medicale & Utilități",
  "Shopping"
];


export function FormattedDescription({ text }: FormattedDescriptionProps) {
  const lines = text.split('\n');
  let inMainSection = false;
  // Removed currentMainSectionTitle as it's not strictly needed for the revised logic
  // Removed sectionsWithStandaloneBoldItems as all bullet items will now be bold

  return (
    <div className="space-y-4 text-base leading-relaxed text-muted-foreground">
      {lines.map((line, index) => {
        let trimmedLine = line.trim();
        const displayLine = trimmedLine;
        // Ensure cleanDisplayLineForTitleCheck has no ** for title matching
        const cleanDisplayLineForTitleCheck = displayLine.replace(/\*\*/g, '');

        // Handle introductory paragraph(s) before the first main title
        if (!inMainSection && !mainTitles.includes(cleanDisplayLineForTitleCheck) && displayLine) {
          // Remove ** from intro paragraphs
          return <p key={index} className="mb-3">{displayLine.replace(/\*\*/g, '')}</p>;
        }

        if (mainTitles.includes(cleanDisplayLineForTitleCheck)) {
          inMainSection = true;
          // currentMainSectionTitle = cleanDisplayLineForTitleCheck; // Not needed for new logic
        }

        if (!displayLine) {
          // Add a small space for empty lines that separate distinct items under a title,
          // but not for multiple consecutive blank lines or if the previous line was a title.
          if (index > 0 && lines[index - 1].trim() !== '' && !mainTitles.includes(lines[index - 1].trim().replace(/\*\*/g, ''))) {
             return <div key={index} className="h-3"></div>; 
          }
          return <Fragment key={index}></Fragment>; 
        }
        
        let titleClass = "text-xl leading-7 font-semibold"; // Default for other main titles
        if (titlesFor3xl.includes(cleanDisplayLineForTitleCheck)) {
          titleClass = "text-3xl leading-9 font-semibold";
        } else if (titlesFor2xl.includes(cleanDisplayLineForTitleCheck)) {
          titleClass = "text-2xl leading-8 font-semibold";
        }
        

        if (mainTitles.includes(cleanDisplayLineForTitleCheck)) {
          return (
            <h4 key={index} className={cn(
              "text-foreground pt-5 pb-2 border-b border-border/30 mb-3",
               titleClass
            )}>
              {cleanDisplayLineForTitleCheck}
            </h4>
          );
        }
        
        // Determine if the line is a sub-category title that should not get a bullet
        const isSubCategoryWithoutBullet = subCategoryTitlesNoBullet.includes(cleanDisplayLineForTitleCheck);
        
        // Determine if the line should be a list item (gets a bullet)
        // It's a list item if it's in a main section, not a main title itself, and not a sub-category without a bullet.
        const isPotentiallyAListItem = inMainSection && displayLine && !mainTitles.includes(cleanDisplayLineForTitleCheck) && !isSubCategoryWithoutBullet;

        if (isPotentiallyAListItem) {
          // All list items (bullet points) should have their entire text bolded
          // Any residual ** from data.ts for these items will be stripped here to avoid double-processing
          const textContent = displayLine.replace(/\*\*/g, ''); 

          const content = (
            <span className="text-foreground font-semibold">
              {textContent}
            </span>
          );

          return (
            <div key={index} className="flex items-start pl-3 mb-1.5">
              <div className="w-2 h-2 bg-primary rounded-full mr-3 mt-[9px] flex-shrink-0 shadow-sm"></div>
              {content}
            </div>
          );
        } else if (inMainSection && isSubCategoryWithoutBullet) {
            // This handles sub-category titles that should NOT get a bullet
            // They are styled as bold sub-headings
            let subCategoryClass = "text-lg font-semibold"; // Default for sub-categories
             if (titlesFor2xl.includes(cleanDisplayLineForTitleCheck)) { 
                subCategoryClass = "text-2xl leading-8 font-semibold";
             } else if (titlesFor3xl.includes(cleanDisplayLineForTitleCheck)) {
                subCategoryClass = "text-3xl leading-9 font-semibold";
             }

            return <p key={index} className={cn("pl-1 mb-2 mt-4 text-foreground", subCategoryClass)}>{cleanDisplayLineForTitleCheck}</p>;
        }
        
        return <Fragment key={index}></Fragment>; // For any other unhandled lines
      })}
    </div>
  );
}
    