import React from 'react';

// Logo component with proper accessibility
const GlampingLogo: React.FC<{
  className?: string;
  size?: number;
  alt?: string;
}> = ({ className = '', size = 200, alt = 'The Glamping Spot logo' }) => {
  // Generate a unique ID for accessibility
  const titleId = React.useId();
  
  return (
    <svg 
      xmlns="http://www.w3.org/2000/svg" 
      viewBox="0 0 400 400"
      width={size} 
      height={size}
      className={className}
      aria-labelledby={titleId}
      role="img"
    >
      <title id={titleId}>{alt}</title>
      
      {/* Background Circle */}
      <circle cx="200" cy="250" r="195" fill="#f8f4e9" />
      
      {/* Decorative Ring */}
      <circle cx="200" cy="300" r="185" fill="none" stroke="#80a36f" stroke-width="6" />
      
      {/* Geodesic Dome */}
      <g>
        {/* Dome Base */}
        <ellipse cx="200" cy="280" rx="90" ry="20" fill="none" stroke="#3a3a3a" stroke-width="6" />
        
        {/* Dome Structure - Triangular Facets */}
        <path d="M200 130 L140 235 L260 235 Z" fill="none" stroke="#3a3a3a" stroke-width="4" />
        <path d="M140 235 L115 280 L200 280 Z" fill="none" stroke="#3a3a3a" stroke-width="4" />
        <path d="M260 235 L285 280 L200 280 Z" fill="none" stroke="#3a3a3a" stroke-width="4" />
        <path d="M200 130 L260 235 L200 280 Z" fill="none" stroke="#3a3a3a" stroke-width="4" />
        <path d="M200 130 L140 235 L200 280 Z" fill="none" stroke="#3a3a3a" stroke-width="4" />
        
        {/* Dome Entrance */}
        <path d="M180 280 L180 240 L220 240 L220 280" fill="none" stroke="#3a3a3a" stroke-width="4" />
        
        {/* Transparent Panel Effect */}
        <path d="M200 130 L170 190 L230 190 Z" fill="none" stroke="#3a3a3a" stroke-width="2" stroke-dasharray="2,2" />
        <path d="M170 190 L150 245 L200 245 Z" fill="none" stroke="#3a3a3a" stroke-width="2" stroke-dasharray="2,2" />
        <path d="M230 190 L250 245 L200 245 Z" fill="none" stroke="#3a3a3a" stroke-width="2" stroke-dasharray="2,2" />
      </g>
      
      {/* Star for luxury touch */}
      {/* <path d="M200 105 L204 115 L214 115 L206 121 L209 131 L200 125 L191 131 L194 121 L186 115 L196 115 Z" fill="#daa520" /> */}
      
      {/* String Lights - Around Dome */}
      <path d="M120 190 C140 170, 170 150, 200 140 C230 150, 260 170, 280 190" fill="none" stroke="#daa520" stroke-width="2" stroke-dasharray="2,3" />
      
      {/* Small Lights */}
      <circle cx="120" cy="190" r="3" fill="#daa520" />
      <circle cx="145" cy="170" r="3" fill="#daa520" />
      <circle cx="175" cy="155" r="3" fill="#daa520" />
      <circle cx="200" cy="145" r="3" fill="#daa520" />
      <circle cx="225" cy="155" r="3" fill="#daa520" />
      <circle cx="255" cy="170" r="3" fill="#daa520" />
      <circle cx="280" cy="190" r="3" fill="#daa520" />
      
      {/* Nature Elements */}
      {/* Trees */}
      <path d="M85 265 L80 280 L90 280 Z" fill="#5d8c5d" />
      <path d="M85 255 L78 270 L92 270 Z" fill="#5d8c5d" />
      <path d="M85 245 L76 260 L94 260 Z" fill="#5d8c5d" />
      
      <path d="M315 265 L310 280 L320 280 Z" fill="#5d8c5d" />
      <path d="M315 255 L308 270 L322 270 Z" fill="#5d8c5d" />
      <path d="M315 245 L306 260 L324 260 Z" fill="#5d8c5d" />
      
      {/* Additional Pine Trees */}
      <path d="M110 265 L105 280 L115 280 Z" fill="#609966" />
      <path d="M110 255 L103 270 L117 270 Z" fill="#609966" />
      <path d="M110 245 L101 260 L119 260 Z" fill="#609966" />
      
      <path d="M290 265 L285 280 L295 280 Z" fill="#609966" />
      <path d="M290 255 L283 270 L297 270 Z" fill="#609966" />
      <path d="M290 245 L281 260 L299 260 Z" fill="#609966" />
      
      {/* Text Elements */}
      <text x="200" y="330" fontFamily="Arial, sans-serif" fontSize="34" fontWeight="bold" textAnchor="middle" fill="#3a3a3a">THE GLAMPING SPOT</text>
      
      {/* Tagline */}
      {/* <text x="200" y="345" fontFamily="Arial, sans-serif" fontSize="12" textAnchor="middle" fontStyle="italic" fill="#80a36f">Luxury in Nature</text> */}
    </svg>
  );
};

export default GlampingLogo;