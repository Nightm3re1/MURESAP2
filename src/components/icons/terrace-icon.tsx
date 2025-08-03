// src/components/icons/terrace-icon.tsx
import type { SVGProps } from 'react';
import React from 'react';

export const TerraceIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.5" // Adjusted stroke width for finer lines like in the image
    strokeLinecap="round"
    strokeLinejoin="round"
    {...props}
  >
    {/* Top railing */}
    <line x1="3" y1="6" x2="21" y2="6" />

    {/* Bottom planter box / balcony floor */}
    <path d="M4 18h16v2a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1v-2z" />
    {/* Or a simpler line for the bottom: <line x1="4" y1="18" x2="20" y2="18" /> */}


    {/* Vertical Bars and Circles */}
    {/* Bar 1 */}
    <line x1="6" y1="6" x2="6" y2="18" />
    <circle cx="6" cy="9" r="0.75" fill="currentColor" stroke="none"/>
    <circle cx="6" cy="12" r="0.75" fill="currentColor" stroke="none"/>
    <circle cx="6" cy="15" r="0.75" fill="currentColor" stroke="none"/>

    {/* Bar 2 */}
    <line x1="9" y1="6" x2="9" y2="18" />
    <circle cx="9" cy="9" r="0.75" fill="currentColor" stroke="none"/>
    <circle cx="9" cy="12" r="0.75" stroke="currentColor" strokeWidth="1" fill="none"/>
    <circle cx="9" cy="15" r="0.75" fill="currentColor" stroke="none"/>

    {/* Bar 3 (Center) */}
    <line x1="12" y1="6" x2="12" y2="18" />
    <circle cx="12" cy="9" r="0.75" fill="currentColor" stroke="none"/>
    <circle cx="12" cy="12" r="0.75" fill="currentColor" stroke="none"/>
    <circle cx="12" cy="15" r="0.75" fill="currentColor" stroke="none"/>

    {/* Bar 4 */}
    <line x1="15" y1="6" x2="15" y2="18" />
    <circle cx="15" cy="9" r="0.75" fill="currentColor" stroke="none"/>
    <circle cx="15" cy="12" r="0.75" stroke="currentColor" strokeWidth="1" fill="none"/>
    <circle cx="15" cy="15" r="0.75" fill="currentColor" stroke="none"/>

    {/* Bar 5 */}
    <line x1="18" y1="6" x2="18" y2="18" />
    <circle cx="18" cy="9" r="0.75" fill="currentColor" stroke="none"/>
    <circle cx="18" cy="12" r="0.75" fill="currentColor" stroke="none"/>
    <circle cx="18" cy="15" r="0.75" fill="currentColor" stroke="none"/>

  </svg>
);
