import { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import Logo from '../assets/logo.webp';
import '../styles/NavBar.css';

const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrollDirection, setScrollDirection] = useState('down');
  const [lastScrollTop, setLastScrollTop] = useState(0);
  const menuRef = useRef(null);

  const toggleMenu = () => setIsOpen(!isOpen);

  // Click outside handler
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  // Scroll handler
  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      setScrollDirection(scrollTop > lastScrollTop ? 'down' : 'up');
      setLastScrollTop(scrollTop <= 0 ? 0 : scrollTop);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [lastScrollTop]);

  return (
    <>
      <nav
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
          <Link to="/">Home</Link>
          <Link to="/about">About Us</Link>
          <Link to="/contact">Contact Us</Link>
          <Link to="/quality">Quality</Link>
          <Link to="/products">Products</Link>
          <Link to="/farms">Farms</Link>
        </div>
        
        <div className="lg:hidden flex items-center">
          <button
            onClick={toggleMenu}
            className={`burger-menu ${isOpen ? 'open' : ''}`}
          >
            <div className="line1 rounded-lg"></div>
            <div className="line2 rounded-lg"></div>
            <div className="line3 rounded-lg"></div>
          </button>
        </div>
      </nav>
      
      {isOpen && (
        <div
          ref={menuRef}
          className="fixed top-[88px] right-10 p-5 bg-black bg-opacity-20 rounded-xl flex flex-col items-center lg:hidden backdrop-blur-xl z-50"
        >
          <Link to="/" className="py-2 hover:underline hover:text-gray-400" onClick={toggleMenu}>
            Home
          </Link>
          <Link to="/about" className="py-2" onClick={toggleMenu}>
            About
          </Link>
          <Link to="/contact" className="py-2" onClick={toggleMenu}>
            Contact Us
          </Link>
          <Link to="/quality" className="py-2" onClick={toggleMenu}>
            Quality
          </Link>
          <Link to="/products" className="py-2" onClick={toggleMenu}>
            Products
          </Link>
          <Link to="/farms" className="py-2" onClick={toggleMenu}>
            Farms
          </Link>
        </div>
      )}
    </>
  );
};

export default NavBar;