import React from 'react';

const Footer = ({ onPrivacyClick, onTermsClick, onCookieClick }) => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid md:grid-cols-3 gap-12 py-16">
          <div>
            <h3 className="text-2xl font-bold mb-6">Cooper Management</h3>
            <p className="text-gray-400 mb-6">
              Leading manufacturer of innovative filtration, cooling, and automotive solutions.
            </p>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-6">Our Brands</h4>
            <ul className="space-y-4">
              <li>
                <a 
                  href="https://ascrfilters.com" 
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-white transition-colors duration-300"
                >
                  ASCR Filters
                </a>
              </li>
              <li>
                <a 
                  href="https://selocooling.com" 
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-white transition-colors duration-300"
                >
                  SELOCOOLER
                </a>
              </li>
              <li>
                <a 
                  href="http://www.treproducts.com" 
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-white transition-colors duration-300"
                >
                  TRE Products
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-6">Newsletter</h4>
            <p className="text-gray-400 mb-4">
              Subscribe to our newsletter for the latest updates and industry insights.
            </p>
            <form className="space-y-4">
              <input
                type="email"
                placeholder="Enter your email"
                className="w-full px-4 py-2 rounded-lg bg-gray-800 border border-gray-700 
                         text-white placeholder-gray-400 focus:outline-none focus:ring-2 
                         focus:ring-blue-500 focus:border-transparent"
              />
              <button
                type="submit"
                className="w-full bg-blue-600 text-white py-2 rounded-lg font-semibold 
                         hover:bg-blue-700 transition-colors duration-300"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>

        <div className="border-t border-gray-800 py-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-gray-400">
              © {currentYear} Cooper Management LLC. All rights reserved.
            </p>
            <div className="flex space-x-6">
              <button 
                onClick={onPrivacyClick}
                className="text-gray-400 hover:text-white transition-colors duration-300"
              >
                Privacy Policy
              </button>
              <button 
                onClick={onTermsClick}
                className="text-gray-400 hover:text-white transition-colors duration-300"
              >
                Terms of Service
              </button>
              <button 
                onClick={onCookieClick}
                className="text-gray-400 hover:text-white transition-colors duration-300"
              >
                Cookie Policy
              </button>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;