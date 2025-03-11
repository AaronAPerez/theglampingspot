import React from 'react'

export default function Header() {
    return (
      <header className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16">
            <div className="flex">
              <div className="flex-shrink-0 flex items-center">
                <h1 className="text-2xl font-bold text-emerald-600">The Glamping Spot</h1>
              </div>
            </div>
            <nav className="flex items-center space-x-4">
              <a href="/" className="text-gray-700 hover:text-emerald-500">Home</a>
              <a href="/properties" className="text-gray-700 hover:text-emerald-500">Properties</a>
              <a href="/about" className="text-gray-700 hover:text-emerald-500">About</a>
              <a href="/login" className="text-gray-700 hover:text-emerald-500">Login</a>
            </nav>
          </div>
        </div>
      </header>
    );
  }