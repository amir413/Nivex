import { useState, useEffect, useRef, useCallback } from 'react';
import { Link } from 'react-router-dom';
import Logo from '../assets/logo.png';
import '../styles/NavBar.css';

const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrollDirection, setScrollDirection] = useState('down');
  const lastScrollTop = useRef(0);
  const menuRef = useRef(null);
  const navRef = useRef(null);

  // Memoized toggle function
  const toggleMenu = useCallback(() => setIsOpen(prev => !prev), []);

  // Close menu when clicking outside
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

  // Optimized scroll handler
  useEffect(() => {
    let timeoutId = null;
    
    const handleScroll = () => {
      // Clear previous timeout
      if (timeoutId) {
        clearTimeout(timeoutId);
      }
      
      // Set new timeout with debounce
      timeoutId = setTimeout(() => {
        const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
        if (scrollTop > lastScrollTop.current) {
          setScrollDirection('down');
        } else {
          setScrollDirection('up');
        }
        lastScrollTop.current = scrollTop <= 0 ? 0 : scrollTop;
      }, 100);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => {
      window.removeEventListener('scroll', handleScroll);
      if (timeoutId) clearTimeout(timeoutId);
    };
  }, []);

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
        className={`text-white flex justify-between bg-black bg-opacity-20 p-6 fixed w-full z-50 backdrop-blur-xl transition-transform duration-500 ${
          scrollDirection === 'down' ? '-translate-y-full' : 'translate-y-0'
        }`}
      >
        <div>
          <Link to="/">
            <img 
              src={Logo} 
              alt="Logo" 
              className="w-24" 
              width="96"
              height="auto"
              loading="eager"
            />
          </Link>
        </div>
        
        <div className="hidden lg:flex gap-20 mr-10 self-center">
          {menuItems.map((item) => (
            <Link 
              key={item.path}
              to={item.path}
              className="hover:opacity-80 transition-opacity"
            >
              {item.label}
            </Link>
          ))}
        </div>
        
        <div className="lg:hidden flex items-center">
          <button
            onClick={toggleMenu}
            className={`burger-menu ${isOpen ? 'open' : ''}`}
            aria-label="Toggle menu"
            aria-expanded={isOpen}
          >
            <div className="burger-line line1"></div>
            <div className="burger-line line2"></div>
            <div className="burger-line line3"></div>
          </button>
        </div>
      </nav>
      
      {isOpen && (
        <div
          ref={menuRef}
          className="fixed top-[88px] right-10 p-5 bg-black bg-opacity-20 rounded-xl flex flex-col items-center lg:hidden backdrop-blur-xl z-50"
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
    </>
  );
};

export default NavBar;