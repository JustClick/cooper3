import React from 'react';
import { motion } from 'framer-motion';

const MarketplaceLogo = ({ src, alt }) => (
  <div className="flex items-center justify-center h-20">
    <img 
      src={src} 
      alt={alt}
      className="h-12 md:h-16 object-contain grayscale hover:grayscale-0 transition-all duration-300"
    />
  </div>
);

const Marketplaces = () => {
  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Trusted Brands, Available on Major Marketplaces
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Our products are available on the world's most trusted e-commerce platforms.
          </p>
        </motion.div>

        <div className="flex justify-center items-center gap-12 mb-16">
          <MarketplaceLogo
            src="https://upload.wikimedia.org/wikipedia/commons/a/a9/Amazon_logo.svg"
            alt="Amazon Marketplace"
          />
          <MarketplaceLogo
            src="https://upload.wikimedia.org/wikipedia/commons/1/1b/EBay_logo.svg"
            alt="eBay Marketplace"
          />
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="bg-white rounded-2xl p-8 shadow-lg"
        >
          <p className="text-lg text-gray-700 leading-relaxed mb-6">
            Cooper Management LLC's brands—ASCR Filters, SELOCOOLER, and TRE Products—are widely 
            recognized and trusted by customers across the United States. Our high-quality products 
            are available for purchase on major online marketplaces such as Amazon and eBay, making 
            it easier than ever for customers to access our industry-leading solutions.
          </p>
          <p className="text-lg text-gray-700 leading-relaxed">
            By leveraging these global platforms, we ensure that our customers receive reliable, 
            fast, and convenient shopping experiences, backed by our commitment to quality and 
            customer satisfaction.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default Marketplaces;