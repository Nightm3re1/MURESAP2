// src/components/icons/elevator-icon.tsx
import type { SVGProps } from 'react';
import React from 'react';

export const ElevatorIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    {...props}
  >
    <rect x="5" y="2" width="14" height="20" rx="2" ry="2" />
    <polyline points="9 10 12 7 15 10" />
    <polyline points="9 14 12 17 15 14" />
  </svg>
);
