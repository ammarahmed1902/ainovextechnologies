import React from 'react';

export default function Logo({ className = "w-8 h-8" }: { className?: string }) {
  return (
    <svg 
      viewBox="0 0 100 100" 
      fill="none" 
      xmlns="http://www.w3.org/2000/svg" 
      className={className}
    >
      <defs>
        <linearGradient id="logoGradient" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#7dd3fc" />
          <stop offset="100%" stopColor="#2dd4bf" />
        </linearGradient>
      </defs>
      {/* The main 'A' shape */}
      <path 
        d="M50 15L85 85H65L50 55L35 85H15L50 15Z" 
        fill="url(#logoGradient)" 
      />
      {/* Pixelated elements on the left */}
      <rect x="25" y="45" width="12" height="12" fill="#7dd3fc" opacity="0.8" />
      <rect x="15" y="60" width="10" height="10" fill="#38bdf8" opacity="0.6" />
      <rect x="30" y="70" width="8" height="8" fill="#2dd4bf" opacity="0.9" />
      <rect x="10" y="35" width="6" height="6" fill="#0ea5e9" opacity="0.4" />
    </svg>
  );
}
