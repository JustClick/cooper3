import React from 'react';
import { motion } from 'framer-motion';
import { ChevronDown } from 'lucide-react';

const Hero = () => {
  const scrollToNextSection = () => {
    const aboutSection = document.getElementById('about');
    if (aboutSection) {
      const yOffset = -80; // Offset to account for any fixed headers
      const y = aboutSection.getBoundingClientRect().top + window.pageYOffset + yOffset;
      window.scrollTo({ top: y, behavior: 'smooth' });
    }
  };

  return (
    <div className="relative min-h-screen flex items-center justify-center">
      {/* Background Image */}
      <div className="absolute inset-0 overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: 'url("https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&q=80")',
          }}
        >
          <div className="absolute inset-0 bg-gradient-to-r from-blue-900/80 to-black/50"></div>
        </div>
      </div>
      
      {/* Content overlay */}
      <div className="relative z-10 max-w-6xl mx-auto px-4 py-20">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center max-w-4xl mx-auto"
        >
          <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight text-white">
            Engineering Excellence in Every Product
          </h1>
          
          <p className="text-xl md:text-2xl mb-12 text-gray-100">
            From advanced filtration systems to innovative cooling solutions and precision automotive components, 
            we're setting new standards in manufacturing excellence.
          </p>
          
          <motion.button
            onClick={scrollToNextSection}
            className="bg-white text-blue-900 px-8 py-4 rounded-full font-semibold 
                     hover:bg-blue-50 transition-all duration-300 flex items-center 
                     space-x-2 shadow-lg mx-auto"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <span>Discover Our Solutions</span>
            <ChevronDown className="w-5 h-5" />
          </motion.button>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div 
        onClick={scrollToNextSection}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 cursor-pointer"
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 1.5, repeat: Infinity }}
      >
        <ChevronDown className="w-8 h-8 text-white hover:text-blue-200 transition-colors duration-300" />
      </motion.div>
    </div>
  );
};

export default Hero;