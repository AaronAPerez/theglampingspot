'use client';

import { useResponsiveLogoSize } from '@/hooks/useResponsiveLogoSize';
import React from 'react'
import GlampingLogo from '../GlampingLogo';

export default function Header() {
  const logoSize = useResponsiveLogoSize();

    return (
      <header className="bg-white/10 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16">
            <div className="flex">
              <div className="flex-shrink-0 flex items-center">
              <div className="logo-container">
        <GlampingLogo size={logoSize} />
      </div>
                <h1 className="text-3xl font-bold text-emerald-600 px-1">The Glamping Spot</h1>
              </div>
            </div>
            <nav className="flex items-center space-x-4">
              <a href="/" className="text-gray-200 hover:text-emerald-500">Home</a>
              <a href="/properties" className="text-gray-200 hover:text-emerald-500">Properties</a>
              <a href="/about" className="text-gray-200 hover:text-emerald-500">About</a>
              <a href="/login" className="text-gray-200 hover:text-emerald-500">Login</a>
            </nav>
          </div>
        </div>
      </header>
    );
  }