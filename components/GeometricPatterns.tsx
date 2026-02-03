
import React from 'react';

export const StarPattern: React.FC<{ className?: string }> = ({ className }) => (
  <svg viewBox="0 0 100 100" className={className} fill="none" stroke="currentColor" strokeWidth="0.5">
    <path d="M50 5 L61 39 L95 39 L67 60 L78 94 L50 73 L22 94 L33 60 L5 39 L39 39 Z" />
    <circle cx="50" cy="50" r="10" />
    <path d="M50 0 L100 50 L50 100 L0 50 Z" opacity="0.3" />
  </svg>
);

export const GeometricBorder: React.FC<{ className?: string }> = ({ className }) => (
  <div className={`flex justify-center gap-2 opacity-20 ${className}`}>
    {[...Array(8)].map((_, i) => (
      <svg key={i} width="20" height="20" viewBox="0 0 20 20" className="text-[#d4af37]">
        <path fill="currentColor" d="M10 0 L13 7 L20 10 L13 13 L10 20 L7 13 L0 10 L7 7 Z" />
      </svg>
    ))}
  </div>
);

export const MandalaPattern: React.FC<{ className?: string }> = ({ className }) => (
  <svg viewBox="0 0 200 200" className={className} fill="none" stroke="currentColor" strokeWidth="0.2">
    {[...Array(12)].map((_, i) => (
      <g key={i} transform={`rotate(${i * 30} 100 100)`}>
        <path d="M100 20 C120 50 80 50 100 80" />
        <path d="M100 20 C130 60 70 60 100 100" strokeWidth="0.1" />
        <rect x="95" y="10" width="10" height="10" transform="rotate(45 100 15)" />
      </g>
    ))}
    <circle cx="100" cy="100" r="40" strokeWidth="0.5" />
    <circle cx="100" cy="100" r="60" opacity="0.5" />
  </svg>
);
