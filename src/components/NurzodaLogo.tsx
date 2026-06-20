import React from 'react';

interface NurzodaLogoProps {
  className?: string;
  light?: boolean;
}

export function NurzodaLogo({ className = "h-11 w-auto", light = false }: NurzodaLogoProps) {
  const primaryColor = light ? "#FFFFFF" : "#111111";
  
  return (
    <svg 
      viewBox="0 0 280 80" 
      className={className}
      xmlns="http://www.w3.org/2000/svg"
    >
      {/* NUR */}
      <text 
        x="12" 
        y="45" 
        fill={primaryColor}
        fontSize="32" 
        fontFamily="ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif" 
        fontWeight="800" 
        letterSpacing="0.02em"
      >
        NUR
      </text>
      
      {/* Stylized letter N/Z with gold/yellow shadow accent */}
      <g transform="translate(90, 8)">
        {/* Gold crescent */}
        <path 
          d="M 10,42 C 4,32 6,21 13,11 C 9,18 9,28 11,37 C 13,42 16,40 20,32" 
          fill="none" 
          stroke="#D4AF37" 
          strokeWidth="6.5" 
          strokeLinecap="round"
          opacity="0.9"
        />
        {/* Cursive line */}
        <path 
          d="M 12,48 C 6,43 11,21 19,10 C 24,3 27,14 23,25 C 19,36 12,47 8,49 C 5,50 3,47 7,39 C 11,31 17,17 21,9 C 24,3 28,14 23,25 C 19,36 12,47 8,49" 
          fill="none" 
          stroke={primaryColor} 
          strokeWidth="4.5" 
          strokeLinecap="round" 
          strokeLinejoin="round"
        />
      </g>

      {/* ODA */}
      <text 
        x="124" 
        y="45" 
        fill={primaryColor} 
        fontSize="32" 
        fontFamily="ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif" 
        fontWeight="800" 
        letterSpacing="0.02em"
      >
        ODA
      </text>

      {/* LTD centered between lines */}
      <line x1="16" y1="62" x2="114" y2="62" stroke={primaryColor} strokeWidth="1.5" />
      <text 
        x="124" 
        y="66" 
        fill={primaryColor} 
        fontSize="12" 
        fontFamily="ui-mono, SFMono-Regular, Menlo, Monaco, Consolas, monospace" 
        fontWeight="900" 
        letterSpacing="0.25em"
      >
        LTD
      </text>
      <line x1="164" y1="62" x2="264" y2="62" stroke={primaryColor} strokeWidth="1.5" />
    </svg>
  );
}
