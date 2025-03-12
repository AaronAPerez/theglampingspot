'use client';

import { useEffect, useState } from 'react';

// Custom hook for responsive logo sizing
export const useResponsiveLogoSize = (): number => {
  const [logoSize, setLogoSize] = useState(80); // Default size
  
  useEffect(() => {
    const handleResize = () => {
      // Adjust logo size based on viewport width
      const width = window.innerWidth;
      if (width < 480) {
        setLogoSize(50); // Small mobile
      } else if (width < 768) {
        setLogoSize(60); // Mobile
      } else if (width < 1024) {
        setLogoSize(70); // Tablet
      } else {
        setLogoSize(80); // Desktop
      }
    };
    
    // Set initial size
    handleResize();
    
    // Add event listener
    window.addEventListener('resize', handleResize);
    
    // Clean up
    return () => window.removeEventListener('resize', handleResize);
  }, []);
  
  return logoSize;
};