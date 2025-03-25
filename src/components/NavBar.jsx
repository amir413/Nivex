import { useState, useEffect, useRef, useCallback } from 'react';
import { Link } from 'react-router-dom';
import Logo from '../assets/logo.webp'; // Converted to WebP format

const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const lastScrollTop = useRef(0);
  const [scrollDirection, setScrollDirection] = useState('up');
  const menuRef = useRef(null);
  const navRef = useRef(null);

  // Memoized toggle function
  const toggleMenu = useCallback(() => setIsOpen(prev => !prev), []);

  // Click outside handler
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (menuRef.current && !menuRef.current.contains(event.target) && 
          !event.target.closest('.burger-menu')) {
        setIsOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  // Optimized scroll handler with debouncing
  useEffect(() => {
    let timeoutId = null;
    let requestId = null;

    const updateScrollDirection = () => {
      const scrollTop = window.pageYOffset;
      const direction = scrollTop > lastScrollTop.current ? 'down' : 'up';
      
      if (direction !== scrollDirection) {
        setScrollDirection(direction);
      }
      
      lastScrollTop.current = scrollTop <= 0 ? 0 : scrollTop;
    };

    const handleScroll = () => {
      if (!requestId) {
        requestId = requestAnimationFrame(() => {
          updateScrollDirection();
          requestId = null;
        });
      }
      
      clearTimeout(timeoutId);
      timeoutId = setTimeout(updateScrollDirection, 100);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => {
      window.removeEventListener('scroll', handleScroll);
      cancelAnimationFrame(requestId);
      clearTimeout(timeoutId);
    };
  }, [scrollDirection]);

  // Menu items data
  const menuItems = [
    { path: '/', label: 'Home' },
    { path: '/about', label: 'About Us' },
    { path: '/contact', label: 'Contact Us' },
    { path: '/quality', label: 'Quality' },
    { path: '/products', label: 'Products' },
    { path: '/farms', label: 'Farms' }
  ];

  return (
    <>
      <nav
        ref={navRef}
        className="fixed top-0 left-0 right-0 flex justify-between items-center p-4 bg-black bg-opacity-20 text-white z-50 transition-transform duration-300 backdrop-blur-xl"
        style={{
          transform: scrollDirection === 'down' ? 'translateY(-100%)' : 'translateY(0)'
        }}
      >
        <Link to="/" className="inline-block" aria-label="Home">
          <img
            src={Logo}
            alt="Company Logo"
            width="80"
            height="34"
            loading="eager"
            fetchpriority="high"
            className="w-20 h-auto"
          />
        </Link>

        {/* Desktop Navigation - loaded after critical render */}
        <div className="hidden lg:flex gap-5 xl:gap-10 mr-4">
          {menuItems.map((item) => (
            <Link 
              key={item.path}
              to={item.path}
              className="hover:opacity-80 transition-opacity duration-200"
            >
              {item.label}
            </Link>
          ))}
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={toggleMenu}
          className={`burger-menu lg:hidden ${isOpen ? 'open' : ''}`}
          aria-label="Toggle menu"
          aria-expanded={isOpen}
        >
          <span className="burger-line line1"></span>
          <span className="burger-line line2"></span>
          <span className="burger-line line3"></span>
        </button>
      </nav>

      {/* Mobile Menu Dropdown */}
      {isOpen && (
        <div
          ref={menuRef}
          className="fixed top-[72px] right-4 p-4 bg-black bg-opacity-20 rounded-xl flex flex-col items-center lg:hidden backdrop-blur-xl z-40"
          aria-hidden={!isOpen}
        >
          {menuItems.map((item) => (
            <Link
              key={item.path}
              to={item.path}
              className="py-2 px-4 hover:bg-white hover:bg-opacity-10 rounded transition-colors w-full text-center"
              onClick={toggleMenu}
            >
              {item.label}
            </Link>
          ))}
        </div>
      )}

      {/* Critical CSS Inlined */}
      <style>{`
        .burger-menu {
          display: flex;
          flex-direction: column;
          justify-content: space-around;
          width: 24px;
          height: 24px;
          background: transparent;
          border: none;
          cursor: pointer;
          padding: 0;
          z-index: 10;
        }
        .burger-line {
          width: 24px;
          height: 2px;
          background: white;
          border-radius: 10px;
          transition: all 0.3s linear;
          position: relative;
          transform-origin: 1px;
        }
        .burger-menu .line2 {
          width: 16px;
          transition: all 0.3s linear, opacity 0.1s linear;
        }
        .burger-menu:hover .line2 {
          width: 24px;
        }
        .burger-menu.open .line1 {
          transform: rotate(45deg);
        }
        .burger-menu.open .line2 {
          opacity: 0;
          transform: translateX(20px);
        }
        .burger-menu.open .line3 {
          transform: rotate(-45deg);
        }
        nav {
          will-change: transform;
          contain: layout paint style;
        }
        @media (prefers-reduced-motion: reduce) {
          nav, .burger-line {
            transition: none !important;
          }
        }
      `}</style>
    </>
  );
};

export default NavBar;