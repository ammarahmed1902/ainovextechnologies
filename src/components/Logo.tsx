import React from 'react';

export default function Logo({ 
  className = "w-8 h-8",
  showText = false,
  textClassName = "text-white"
}: { 
  className?: string;
  showText?: boolean;
  textClassName?: string;
}) {
  return (
    <div className="flex items-center gap-3">
      <svg 
        viewBox="0 0 100 100" 
        fill="none" 
        xmlns="http://www.w3.org/2000/svg" 
        className={className}
      >
        <defs>
          <linearGradient id="logoGradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#38bdf8" />
            <stop offset="100%" stopColor="#0ea5e9" />
          </linearGradient>
          <filter id="glow" x="-20%" y="-20%" width="140%" height="140%">
            <feGaussianBlur stdDeviation="1.5" result="blur" />
            <feComposite in="SourceGraphic" in2="blur" operator="over" />
          </filter>
        </defs>
        
        {/* Hexagonal Grid Background (IT Infrastructure) */}
        <path d="M50 10L85 30V70L50 90L15 70V30L50 10Z" stroke="#38bdf8" strokeWidth="0.5" strokeOpacity="0.2" />
        <path d="M50 10V90" stroke="#38bdf8" strokeWidth="0.5" strokeOpacity="0.1" />
        <path d="M15 30L85 70" stroke="#38bdf8" strokeWidth="0.5" strokeOpacity="0.1" />
        <path d="M15 70L85 30" stroke="#38bdf8" strokeWidth="0.5" strokeOpacity="0.1" />

        {/* Shield Silhouette (Security & Surveillance) */}
        <path d="M50 90C50 90 85 75 85 45V25L50 15L15 25V45C15 75 50 90 50 90Z" fill="#38bdf8" fillOpacity="0.05" />

        {/* Main 'A' Circuit Path (Digital Transformation & Software) */}
        <path 
          d="M30 80L50 20L70 80" 
          stroke="url(#logoGradient)" 
          strokeWidth="7" 
          strokeLinecap="round" 
          strokeLinejoin="round" 
          filter="url(#glow)"
        />
        
        {/* Data Flow Crossbar (Connectivity & Digital Services) */}
        <path 
          d="M40 55H60" 
          stroke="#38bdf8" 
          strokeWidth="4" 
          strokeLinecap="round" 
        />

        {/* Nodes (The 8 Core Services) */}
        <circle cx="50" cy="20" r="4" fill="#38bdf8" /> {/* Cloud Services */}
        <circle cx="30" cy="80" r="4" fill="#38bdf8" /> {/* IT Infrastructure */}
        <circle cx="70" cy="80" r="4" fill="#38bdf8" /> {/* Security */}
        <circle cx="40" cy="55" r="3" fill="#38bdf8" /> {/* Software Dev */}
        <circle cx="60" cy="55" r="3" fill="#38bdf8" /> {/* Digital Services */}
        <circle cx="50" cy="40" r="2.5" fill="#38bdf8" opacity="0.8" /> {/* Emerging Tech */}
        <circle cx="50" cy="65" r="2.5" fill="#38bdf8" opacity="0.8" /> {/* Consulting */}
        <circle cx="50" cy="85" r="2.5" fill="#38bdf8" opacity="0.8" /> {/* Support */}

        {/* Circuit Accents (Flowing Data Lines) */}
        <path d="M85 30L70 45" stroke="#38bdf8" strokeWidth="1" strokeOpacity="0.4" />
        <path d="M15 30L30 45" stroke="#38bdf8" strokeWidth="1" strokeOpacity="0.4" />
        <path d="M50 10V15" stroke="#38bdf8" strokeWidth="2" strokeLinecap="round" />
      </svg>
      {showText && (
        <div className={`flex flex-col leading-none ${textClassName}`}>
          <span className="font-display font-bold text-xl tracking-wider uppercase">AINOVEX</span>
          <span className="font-display font-medium text-[10px] tracking-[0.3em] text-accent uppercase">TECHNOLOGIES</span>
        </div>
      )}
    </div>
  );
}
