import React from 'react';
import { motion } from 'framer-motion';
import { X } from 'lucide-react';

const TermsOfService = ({ onClose }) => {
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

          <h2 className="text-3xl font-bold text-gray-900 mb-6">Terms of Service</h2>

          <div className="prose max-w-none">
            <p className="mb-4">Last updated: March 15, 2024</p>

            <section className="mb-8">
              <h3 className="text-xl font-semibold mb-4">1. Agreement to Terms</h3>
              <p>By accessing or using Cooper Management LLC's website and services, you agree to be bound by these Terms of Service and all applicable laws and regulations.</p>
            </section>

            <section className="mb-8">
              <h3 className="text-xl font-semibold mb-4">2. Use License</h3>
              <p>Permission is granted to temporarily access the materials on Cooper Management LLC's website for personal, non-commercial use only. This is the grant of a license, not a transfer of title.</p>
            </section>

            <section className="mb-8">
              <h3 className="text-xl font-semibold mb-4">3. Disclaimer</h3>
              <p>The materials on Cooper Management LLC's website are provided on an 'as is' basis. Cooper Management LLC makes no warranties, expressed or implied, and hereby disclaims and negates all other warranties including, without limitation, implied warranties or conditions of merchantability, fitness for a particular purpose, or non-infringement of intellectual property or other violation of rights.</p>
            </section>

            <section className="mb-8">
              <h3 className="text-xl font-semibold mb-4">4. Limitations</h3>
              <p>In no event shall Cooper Management LLC or its suppliers be liable for any damages (including, without limitation, damages for loss of data or profit, or due to business interruption) arising out of the use or inability to use the materials on Cooper Management LLC's website.</p>
            </section>

            <section className="mb-8">
              <h3 className="text-xl font-semibold mb-4">5. Revisions</h3>
              <p>Cooper Management LLC may revise these terms of service at any time without notice. By using this website, you agree to be bound by the current version of these terms of service.</p>
            </section>

            <section className="mb-8">
              <h3 className="text-xl font-semibold mb-4">6. Governing Law</h3>
              <p>These terms and conditions are governed by and construed in accordance with the laws of Florida, and you irrevocably submit to the exclusive jurisdiction of the courts in that location.</p>
            </section>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default TermsOfService;