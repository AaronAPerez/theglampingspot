import React from 'react'

export default function Footer() {
    return (
      <footer className="bg-gray-800 text-white">
        <div className="max-w-7xl mx-auto px-4 py-8 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <h3 className="text-lg font-semibold mb-4">The Glamping Spot</h3>
              <p className="text-gray-300">Luxury outdoor experiences in nature's most beautiful locations.</p>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
              <ul className="space-y-2">
                <li><a href="/about" className="text-gray-300 hover:text-white">About Us</a></li>
                <li><a href="/contact" className="text-gray-300 hover:text-white">Contact Us</a></li>
                <li><a href="/faq" className="text-gray-300 hover:text-white">FAQ</a></li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">Contact</h3>
              <p className="text-gray-300">info@theglampingspot.com</p>
              <p className="text-gray-300">+1 (555) 123-4567</p>
            </div>
          </div>
          <div className="mt-8 pt-8 border-t border-gray-700 text-center">
            <p className="text-gray-300">© {new Date().getFullYear()} The Glamping Spot. All rights reserved.</p>
          </div>
        </div>
      </footer>
    );
  }