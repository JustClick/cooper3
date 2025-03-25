import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X } from 'lucide-react';

const scrollToElement = (elementId: string, offset: number = -80) => {
  const element = document.getElementById(elementId);
  if (element) {
    // Force layout recalculation before scrolling
    element.getBoundingClientRect();
    
    const y = element.getBoundingClientRect().top + window.scrollY + offset;
    
    // Immediate scroll for mobile, smooth for desktop
    if (window.innerWidth <= 768) {
      // Force immediate scroll on mobile
      window.scrollTo(0, y);
    } else {
      window.scrollTo({
        top: y,
        behavior: 'smooth'
      });
    }
  }
};

const NavLink = ({ href, children, isScrolled, onClick, isMobile = false }) => {
  const handleClick = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    
    // Extract the element ID and scroll
    const elementId = href.replace('#', '');
    
    // Small delay to ensure menu animation completes
    if (isMobile) {
      onClick?.();
      setTimeout(() => scrollToElement(elementId), 10);
    } else {
      scrollToElement(elementId);
      onClick?.();
    }
  };

  return (
    <button
      type="button"
      onClick={handleClick}
      className={`text-left whitespace-nowrap px-4 py-2 rounded-md transition-colors duration-300 ${
        isScrolled 
          ? 'text-gray-600 hover:text-blue-600' 
          : 'text-white hover:text-blue-200'
      } ${
        isMobile 
          ? 'block w-full text-gray-600 hover:bg-gray-50 hover:text-blue-600'
          : ''
      }`}
    >
      {children}
    </button>
  );
};

const Navigation = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const checkScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    checkScroll();
    
    const handleScroll = () => {
      requestAnimationFrame(checkScroll);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const closeMenu = () => {
    setIsMobileMenuOpen(false);
  };

  return (
    <motion.nav
      initial={false}
      animate={{ 
        backgroundColor: isScrolled ? 'rgba(255, 255, 255, 1)' : 'transparent',
        boxShadow: isScrolled ? '0 4px 6px -1px rgba(0, 0, 0, 0.1)' : 'none'
      }}
      transition={{ duration: 0.2 }}
      className="fixed w-full z-50"
    >
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <button 
            onClick={() => scrollToElement('root', 0)}
            className="flex items-center space-x-2"
          >
            <span className={`text-2xl font-bold ${isScrolled ? 'text-blue-600' : 'text-white'}`}>
              Cooper<span className={isScrolled ? 'text-blue-500' : 'text-blue-200'}>Management</span>
            </span>
            <span className={`text-sm font-medium ${isScrolled ? 'text-gray-600' : 'text-blue-100'}`}>
              LLC
            </span>
          </button>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-2">
            <NavLink href="#about" isScrolled={isScrolled}>About</NavLink>
            <NavLink href="#brands" isScrolled={isScrolled}>Our Brands</NavLink>
            <NavLink href="#marketplaces" isScrolled={isScrolled}>Marketplaces</NavLink>
            <NavLink href="#contact" isScrolled={isScrolled}>Contact</NavLink>
          </div>

          {/* Mobile Menu Button */}
          <button
            type="button"
            className="md:hidden p-2 rounded-md"
            onClick={toggleMenu}
            aria-label="Toggle menu"
            aria-expanded={isMobileMenuOpen}
          >
            {isMobileMenuOpen ? (
              <X className={isScrolled ? 'text-gray-900' : 'text-white'} />
            ) : (
              <Menu className={isScrolled ? 'text-gray-900' : 'text-white'} />
            )}
          </button>
        </div>

        {/* Mobile Navigation */}
        <AnimatePresence>
          {isMobileMenuOpen && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: 'auto', opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.2 }}
              className="md:hidden bg-white shadow-lg rounded-b-xl overflow-hidden"
            >
              <div className="flex flex-col py-2">
                <NavLink 
                  href="#about" 
                  isScrolled={true} 
                  onClick={closeMenu}
                  isMobile={true}
                >
                  About
                </NavLink>
                <NavLink 
                  href="#brands" 
                  isScrolled={true} 
                  onClick={closeMenu}
                  isMobile={true}
                >
                  Our Brands
                </NavLink>
                <NavLink 
                  href="#marketplaces" 
                  isScrolled={true} 
                  onClick={closeMenu}
                  isMobile={true}
                >
                  Marketplaces
                </NavLink>
                <NavLink 
                  href="#contact" 
                  isScrolled={true} 
                  onClick={closeMenu}
                  isMobile={true}
                >
                  Contact
                </NavLink>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.nav>
  );
};

export default Navigation;