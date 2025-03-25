import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Filter, Wind, Thermometer, Facebook, Instagram, Youtube, GitBranch as BrandTiktok } from 'lucide-react';

const SocialIcon = ({ href, icon: Icon, label }) => (
  <a
    href={href}
    target="_blank"
    rel="noopener noreferrer"
    className="text-gray-600 hover:text-blue-600 transition-colors duration-300"
    aria-label={label}
  >
    <Icon className="w-5 h-5" />
  </a>
);

const BrandCard = ({ icon: Icon, title, subtitle, content, link, image, delay, socials }) => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.8, delay }}
      className="group relative bg-white rounded-2xl shadow-xl overflow-hidden hover:shadow-2xl transition-all duration-300"
    >
      <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/60 z-10"></div>
      <div 
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url(${image})` }}
      ></div>
      <div className="relative z-20 p-8 min-h-[500px] flex flex-col">
        <div className="bg-white/90 backdrop-blur-sm rounded-xl p-4 mb-auto">
          <Icon className="w-12 h-12 text-blue-600 mb-4" />
          <h3 className="text-2xl font-bold text-gray-900 mb-2">{title}</h3>
          <p className="text-lg text-blue-600 mb-4">{subtitle}</p>
          <p className="text-gray-700 mb-4">{content}</p>
          {socials && socials.length > 0 && (
            <div className="flex space-x-4 items-center border-t pt-4">
              {socials.map((social, index) => (
                <SocialIcon key={index} {...social} />
              ))}
            </div>
          )}
        </div>
        
        <motion.a
          href={link}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center justify-center space-x-2 bg-blue-600 text-white px-6 py-3 rounded-xl
                   hover:bg-blue-700 transition-colors duration-300 mt-6 group-hover:bg-blue-500"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          <span>Visit Website</span>
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
          </svg>
        </motion.a>
      </div>
    </motion.div>
  );
};

const BrandLogo = ({ src, alt, delay }) => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 20 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay }}
      className="flex items-center justify-center p-8 bg-white rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300"
    >
      <img src={src} alt={alt} className="max-h-16 object-contain" />
    </motion.div>
  );
};

const Brands = () => {
  return (
    <section className="py-20 bg-gray-100">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Our Industry-Leading Brands
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Discover our portfolio of innovative brands, each delivering exceptional quality and 
              performance in their respective industries.
            </p>
          </motion.div>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-12">
          <BrandCard
            icon={Filter}
            title="ASCR Filters"
            subtitle="Advanced Pool Filtration Systems"
            content="Setting the standard in pool filtration technology with our innovative cartridge filters, delivering crystal-clear water and optimal performance for both residential and commercial pools."
            link="https://ascrfilters.com"
            image="https://images.unsplash.com/photo-1576013551627-0cc20b96c2a7?auto=format&fit=crop&q=80"
            delay={0}
            socials={[
              { href: "https://www.facebook.com/people/ASCR-USA/61566482230250/", icon: Facebook, label: "ASCR Filters Facebook" },
              { href: "https://www.instagram.com/ascr_usa/", icon: Instagram, label: "ASCR Filters Instagram" }
            ]}
          />

          <BrandCard
            icon={Wind}
            title="SELOCOOLER"
            subtitle="Revolutionary Cooling Solutions"
            content="Transforming outdoor comfort with cutting-edge cooling technology. Our high-performance systems provide efficient cooling for commercial and residential spaces."
            link="https://selocooling.com"
            image="https://images.unsplash.com/photo-1580397581145-cdb6a35b7d3f?auto=format&fit=crop&q=80"
            delay={0.2}
            socials={[
              { href: "https://www.facebook.com/people/Selo-Cooler/pfbid0s8GRFYJDCbU3SD2BNXSrq4w4JPXAK9fzWDzg1L8CgKvFpVz2TBT1MnMMWeSAhun7l/", icon: Facebook, label: "SELOCOOLER Facebook" },
              { href: "https://www.instagram.com/selo_cooler/", icon: Instagram, label: "SELOCOOLER Instagram" },
              { href: "https://www.tiktok.com/@selo_cooler", icon: BrandTiktok, label: "SELOCOOLER TikTok" },
              { href: "https://www.youtube.com/@SeloCooler", icon: Youtube, label: "SELOCOOLER YouTube" }
            ]}
          />

          <BrandCard
            icon={Thermometer}
            title="TRE Products"
            subtitle="Precision Automotive Components"
            content="Engineering excellence in automotive temperature control. Our advanced thermostats and components ensure optimal engine performance and longevity."
            link="http://www.treproducts.com"
            image="https://images.unsplash.com/photo-1486262715619-67b85e0b08d3?auto=format&fit=crop&q=80"
            delay={0.4}
            socials={[]}
          />
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          <BrandLogo
            src="https://img1.wsimg.com/isteam/ip/81974abe-642c-464e-ae29-0d34c1af24ef/blob-661a861.png/:/cr=t:0%25,l:0%25,w:100%25,h:100%25/rs=w:600,cg:true"
            alt="ASCR Filters"
            delay={0}
          />
          <BrandLogo
            src="https://img1.wsimg.com/isteam/ip/81974abe-642c-464e-ae29-0d34c1af24ef/blob.png/:/cr=t:0%25,l:0%25,w:100%25,h:100%25/rs=w:600,cg:true"
            alt="SELOCOOLER"
            delay={0.2}
          />
          <BrandLogo
            src="https://img1.wsimg.com/isteam/ip/81974abe-642c-464e-ae29-0d34c1af24ef/TRE%20Logo%20large%20-%20TM.jpg/:/cr=t:0%25,l:0%25,w:100%25,h:100%25/rs=w:600,cg:true"
            alt="TRE Products"
            delay={0.4}
          />
        </div>
      </div>
    </section>
  );
};

export default Brands;