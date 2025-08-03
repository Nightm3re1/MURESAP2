// src/components/icons/brand-logo-icon.tsx
import type { SVGProps } from 'react';
import React from 'react';

export const BrandLogoIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 60 60" // Adjusted viewBox for more space
    fill="none"
    stroke="currentColor"
    strokeWidth="1" // Thinner stroke for a cleaner look
    strokeLinecap="round"
    strokeLinejoin="round"
    {...props}
  >
    {/* Base */}
    <path d="M5 55 H55" stroke="hsl(var(--foreground))" strokeWidth="2" />

    {/* Taller Building (left) - Darker Gray */}
    <rect x="10" y="10" width="20" height="40" fill="hsl(var(--muted-foreground))" stroke="hsl(var(--foreground))" />
    {/* Roof */}
    <path d="M8 10 L20 5 L32 10 Z" fill="hsl(var(--primary))" stroke="hsl(var(--foreground))" />

    {/* Windows for Taller Building (White/Light Gray) */}
    <rect x="14" y="15" width="4" height="5" fill="hsl(var(--background))" />
    <rect x="22" y="15" width="4" height="5" fill="hsl(var(--background))" />
    <rect x="14" y="25" width="4" height="5" fill="hsl(var(--background))" />
    <rect x="22" y="25" width="4" height="5" fill="hsl(var(--background))" />
    <rect x="14" y="35" width="4" height="5" fill="hsl(var(--background))" />
    <rect x="22" y="35" width="4" height="5" fill="hsl(var(--background))" />
     <rect x="14" y="45" width="4" height="5" fill="hsl(var(--background))" />
    <rect x="22" y="45" width="4" height="5" fill="hsl(var(--background))" />


    {/* Shorter Building (right) - Lighter Gray */}
    <rect x="30" y="20" width="18" height="30" fill="hsl(var(--secondary-foreground))" stroke="hsl(var(--foreground))" />
     {/* Roof */}
    <path d="M28 20 L39 15 L50 20 Z" fill="hsl(var(--primary))" stroke="hsl(var(--foreground))" />
    
    {/* Windows for Shorter Building (White/Light Gray) */}
    <rect x="34" y="25" width="4" height="5" fill="hsl(var(--background))" />
    <rect x="40" y="25" width="4" height="5" fill="hsl(var(--background))" />
    <rect x="34" y="35" width="4" height="5" fill="hsl(var(--background))" />
    <rect x="40" y="35" width="4" height="5" fill="hsl(var(--background))" />
    <rect x="34" y="45" width="4" height="5" fill="hsl(var(--background))" />
    <rect x="40" y="45" width="4" height="5" fill="hsl(var(--background))" />
  </svg>
);
