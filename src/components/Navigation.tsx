import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Menu, X } from 'lucide-react';

const NavLink = ({ href, children, isScrolled }) => (
  <a
    href={href}
    className={`px-4 py-2 rounded-md transition-colors duration-300 ${
      isScrolled ? 'text-gray-600 hover:text-blue-600' : 'text-white hover:text-blue-200'
    }`}
    onClick={(e) => {
      e.preventDefault();
      const element = document.querySelector(href);
      if (element) {
        const yOffset = -80;
        const y = element.getBoundingClientRect().top + window.pageYOffset + yOffset;
        window.scrollTo({ top: y, behavior: 'smooth' });
      }
    }}
  >
    {children}
  </a>
);

const Navigation = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    // Set initial scroll state
    setIsScrolled(window.scrollY > 20);

    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <motion.nav
      initial={false}
      animate={{ 
        y: 0,
        backgroundColor: isScrolled ? 'rgba(255, 255, 255, 1)' : 'transparent',
        boxShadow: isScrolled ? '0 4px 6px -1px rgba(0, 0, 0, 0.1)' : 'none'
      }}
      transition={{ duration: 0.2 }}
      className="fixed w-full z-50"
    >
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <a href="#" className="flex items-center space-x-2">
            <span className={`text-2xl font-bold ${isScrolled ? 'text-blue-600' : 'text-white'}`}>
              Cooper<span className={isScrolled ? 'text-blue-500' : 'text-blue-200'}>Management</span>
            </span>
            <span className={`text-sm font-medium ${isScrolled ? 'text-gray-600' : 'text-blue-100'}`}>
              LLC
            </span>
          </a>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-2">
            <NavLink href="#about" isScrolled={isScrolled}>About</NavLink>
            <NavLink href="#brands" isScrolled={isScrolled}>Our Brands</NavLink>
            <NavLink href="#marketplaces" isScrolled={isScrolled}>Marketplaces</NavLink>
            <NavLink href="#contact" isScrolled={isScrolled}>Contact</NavLink>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2 rounded-md"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? (
              <X className={isScrolled ? 'text-gray-900' : 'text-white'} />
            ) : (
              <Menu className={isScrolled ? 'text-gray-900' : 'text-white'} />
            )}
          </button>
        </div>

        {/* Mobile Navigation */}
        <motion.div
          initial={false}
          animate={{
            height: isMobileMenuOpen ? 'auto' : 0,
            opacity: isMobileMenuOpen ? 1 : 0
          }}
          transition={{ duration: 0.2 }}
          className={`md:hidden overflow-hidden ${isMobileMenuOpen ? 'bg-white shadow-lg rounded-b-xl' : ''}`}
        >
          <div className="px-2 pt-2 pb-3 space-y-1">
            <a
              href="#about"
              className="block px-3 py-2 rounded-md text-gray-700 hover:bg-blue-50 hover:text-blue-600"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              About
            </a>
            <a
              href="#brands"
              className="block px-3 py-2 rounded-md text-gray-700 hover:bg-blue-50 hover:text-blue-600"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Our Brands
            </a>
            <a
              href="#marketplaces"
              className="block px-3 py-2 rounded-md text-gray-700 hover:bg-blue-50 hover:text-blue-600"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Marketplaces
            </a>
            <a
              href="#contact"
              className="block px-3 py-2 rounded-md text-gray-700 hover:bg-blue-50 hover:text-blue-600"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Contact
            </a>
          </div>
        </motion.div>
      </div>
    </motion.nav>
  );
};

export default Navigation;