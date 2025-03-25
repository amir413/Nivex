import React, { useMemo } from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  // Memoize current year to prevent unnecessary recalculations
  const currentYear = useMemo(() => new Date().getFullYear(), []);

  return (
    <footer className="bg-black text-white py-10">
      <div className="container mx-auto px-4">
        {/* Grid layout for better responsiveness */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-center justify-items-center">
          
          {/* Brand Section - Optimized for LCP */}
          <div className="text-center md:text-left">
            <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold" aria-label="Nivex">
              Nivex
            </h1>
            <p className="text-sm sm:text-base md:text-lg mt-2" aria-label="Health & Joy, Since 1978">
              Health & Joy, Since 1978
            </p>
          </div>

          {/* Navigation Links - Optimized for CLS */}
          <nav className="flex flex-col items-center" aria-label="Footer navigation">
            <div className="flex flex-wrap justify-center gap-x-4 gap-y-2">
              {[
                { path: '/', label: 'Home' },
                { path: '/about', label: 'About Us' },
                { path: '/contact', label: 'Contact Us' },
                { path: '/quality', label: 'Quality' },
                { path: '/products', label: 'Products' }
              ].map((item) => (
                <React.Fragment key={item.path}>
                  <Link 
                    to={item.path}
                    className="text-white hover:text-gray-200 text-sm sm:text-base transition-colors duration-200"
                    aria-label={item.label}
                  >
                    {item.label}
                  </Link>
                  <span className="text-gray-500 last:hidden">|</span>
                </React.Fragment>
              ))}
            </div>
            <p className="text-sm sm:text-base mt-4 text-center">
              Developed by: {' '}
              <a 
                href="https://github.com/amir413" 
                className="text-gray-400 hover:text-gray-300 transition-colors duration-200"
                target="_blank" 
                rel="noopener noreferrer"
                aria-label="Developer Amir Emad's GitHub"
              >
                Amir Emad
              </a>
            </p>
          </nav>

          {/* Social Media - Optimized for loading */}
          <div className="text-center md:text-right">
            <div className="flex items-center justify-center md:justify-end gap-4">
              <span className="text-xs sm:text-sm md:text-base">Follow us:</span>
              <a 
                href="https://www.facebook.com/nivexfarms/" 
                target="_blank" 
                rel="noopener noreferrer"
                aria-label="Nivex Facebook page"
                className="text-white hover:text-blue-400 transition-colors duration-200"
              >
                {/* Inline SVG for Facebook icon to avoid render-blocking */}
                <svg 
                  className="w-6 h-6" 
                  fill="currentColor" 
                  viewBox="0 0 24 24" 
                  aria-hidden="true"
                >
                  <path 
                    fillRule="evenodd" 
                    d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" 
                    clipRule="evenodd" 
                  />
                </svg>
              </a>
            </div>
          </div>
        </div>

        {/* Copyright - Optimized for performance */}
        <div className="mt-10 text-center text-xs sm:text-sm md:text-base" aria-label={`Copyright ${currentYear}`}>
          © {currentYear} Nivex. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default React.memo(Footer);