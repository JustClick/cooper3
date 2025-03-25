import React from 'react';
import { motion } from 'framer-motion';
import { X } from 'lucide-react';

const PrivacyPolicy = ({ onClose }) => {
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

          <h2 className="text-3xl font-bold text-gray-900 mb-6">Privacy Policy</h2>

          <div className="prose max-w-none">
            <p className="mb-4">Last updated: February 12, 2025</p>

            <section className="mb-8">
              <h3 className="text-xl font-semibold mb-4">1. Introduction</h3>
              <p>Cooper Management LLC ("we," "our," or "us") respects your privacy and is committed to protecting your personal data. This privacy policy explains how we collect, use, and safeguard your information when you visit our website or use our services.</p>
            </section>

            <section className="mb-8">
              <h3 className="text-xl font-semibold mb-4">2. Information We Collect</h3>
              <p>We collect information that you provide directly to us, including:</p>
              <ul className="list-disc pl-6 mb-4">
                <li>Contact information (name, email address, phone number)</li>
                <li>Business information</li>
                <li>Communication preferences</li>
              </ul>
            </section>

            <section className="mb-8">
              <h3 className="text-xl font-semibold mb-4">3. How We Use Your Information</h3>
              <p>We use the information we collect to:</p>
              <ul className="list-disc pl-6 mb-4">
                <li>Provide and improve our services</li>
                <li>Communicate with you about our products and services</li>
                <li>Respond to your inquiries</li>
                <li>Send you marketing communications (with your consent)</li>
              </ul>
            </section>

            <section className="mb-8">
              <h3 className="text-xl font-semibold mb-4">4. Information Sharing</h3>
              <p>We do not sell your personal information. We may share your information with:</p>
              <ul className="list-disc pl-6 mb-4">
                <li>Service providers who assist in our operations</li>
                <li>Legal authorities when required by law</li>
                <li>Business partners with your consent</li>
              </ul>
            </section>

            <section className="mb-8">
              <h3 className="text-xl font-semibold mb-4">5. Your Rights</h3>
              <p>You have the right to:</p>
              <ul className="list-disc pl-6 mb-4">
                <li>Access your personal information</li>
                <li>Correct inaccurate information</li>
                <li>Request deletion of your information</li>
                <li>Opt-out of marketing communications</li>
              </ul>
            </section>

            <section className="mb-8">
              <h3 className="text-xl font-semibold mb-4">6. Contact Us</h3>
              <p>If you have questions about this Privacy Policy, please contact us at:</p>
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

export default PrivacyPolicy;