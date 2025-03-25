import React from 'react';
import { motion } from 'framer-motion';
import { X } from 'lucide-react';

const CookiePolicy = ({ onClose }) => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 overflow-y-auto"
    >
      <div className="min-h-screen px-4 flex items-center justify-center">
        <div className="bg-white rounded-2xl max-w-4xl w-full p-8 relative my-8">
          <button
            onClick={onClose}
            className="absolute right-4 top-4 p-2 hover:bg-gray-100 rounded-full transition-colors duration-300"
          >
            <X className="w-6 h-6 text-gray-500" />
          </button>

          <h2 className="text-3xl font-bold text-gray-900 mb-6">Cookie Policy</h2>

          <div className="prose max-w-none">
            <p className="mb-4">Last updated: March 15, 2024</p>

            <section className="mb-8">
              <h3 className="text-xl font-semibold mb-4">1. What Are Cookies</h3>
              <p>Cookies are small text files that are placed on your computer or mobile device when you visit our website. They are widely used to make websites work more efficiently and provide information to website owners.</p>
            </section>

            <section className="mb-8">
              <h3 className="text-xl font-semibold mb-4">2. How We Use Cookies</h3>
              <p>We use cookies for the following purposes:</p>
              <ul className="list-disc pl-6 mb-4">
                <li>Essential cookies: Required for the website to function properly</li>
                <li>Analytics cookies: To understand how visitors interact with our website</li>
                <li>Preference cookies: To remember your settings and preferences</li>
                <li>Marketing cookies: To deliver more relevant advertisements</li>
              </ul>
            </section>

            <section className="mb-8">
              <h3 className="text-xl font-semibold mb-4">3. Types of Cookies We Use</h3>
              <ul className="list-disc pl-6 mb-4">
                <li>Session cookies: Temporary cookies that expire when you close your browser</li>
                <li>Persistent cookies: Remain on your device until they expire or you delete them</li>
                <li>Third-party cookies: Set by third-party services we use</li>
              </ul>
            </section>

            <section className="mb-8">
              <h3 className="text-xl font-semibold mb-4">4. Managing Cookies</h3>
              <p>You can control and manage cookies in various ways:</p>
              <ul className="list-disc pl-6 mb-4">
                <li>Browser settings: Configure your browser to accept, reject, or delete cookies</li>
                <li>Cookie consent: Use our cookie consent tool to manage your preferences</li>
                <li>Third-party tools: Use privacy tools to control tracking</li>
              </ul>
            </section>

            <section className="mb-8">
              <h3 className="text-xl font-semibold mb-4">5. Contact Us</h3>
              <p>If you have questions about our Cookie Policy, please contact us at:</p>
              <p>Cooper Management LLC<br />
              4970 SW 52nd St., Ste 326<br />
              Davie, FL 33314<br />
              Phone: (754) 457-9959</p>
            </section>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default CookiePolicy;