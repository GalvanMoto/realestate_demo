import React from 'react';
import { Heart, ArrowUpRight, BedDouble, Bath, Square } from 'lucide-react';
import { MOCK_PROPERTIES } from '../constants';
import { motion } from 'framer-motion';

const PropertyGrid: React.FC = () => {
  const featured = MOCK_PROPERTIES[0];
  const secondary = MOCK_PROPERTIES.slice(1, 5);

  const containerVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    show: { opacity: 1, y: 0, transition: { duration: 0.6 } }
  };

  return (
    <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
      <div className="flex flex-col md:flex-row justify-between items-start mb-12 gap-8">
        <motion.div 
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-lg"
        >
          <h2 className="text-4xl font-bold text-gray-900 mb-4 font-serif">
            Discover Your Perfect <br />
            <span className="text-primary">Property Match</span>
          </h2>
        </motion.div>
        <motion.div 
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="max-w-md text-gray-500 text-sm leading-relaxed"
        >
          <p>
            Discover Your Perfect Property Match with our expert team, dedicated to finding the ideal home or investment in California, San Francisco, and Miami. We combine deep market knowledge with personalized service.
          </p>
        </motion.div>
      </div>

      <motion.div 
        variants={containerVariants}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, margin: "-100px" }}
        className="grid grid-cols-1 lg:grid-cols-12 gap-6 h-auto lg:h-[600px]"
      >
        {/* Large Feature Card */}
        <motion.div 
          variants={itemVariants}
          className="lg:col-span-5 h-[400px] lg:h-full relative rounded-3xl overflow-hidden group"
        >
          <motion.img 
            src={featured.image} 
            alt={featured.title} 
            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
          />
          <motion.button 
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            className="absolute top-4 right-4 bg-white/20 backdrop-blur-md p-2 rounded-full text-white hover:bg-white hover:text-red-500 transition-colors"
          >
            <Heart size={20} />
          </motion.button>
          
          <div className="absolute bottom-6 left-6 right-6 bg-white/95 backdrop-blur-sm p-5 rounded-2xl shadow-lg">
            <div className="flex justify-between items-start mb-2">
              <div>
                <div className="text-2xl font-bold text-gray-900">{featured.price}</div>
                <div className="text-sm text-gray-500">{featured.address}</div>
                <div className="text-xs text-gray-400">{featured.city}</div>
              </div>
              <motion.button 
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-primary text-white px-4 py-2 rounded-full hover:bg-primary/90 transition-colors flex items-center gap-2 text-sm font-medium shadow-md"
              >
                <span>View Details</span>
                <ArrowUpRight size={16} />
              </motion.button>
            </div>
            <div className="flex justify-between items-center border-t border-gray-100 pt-3 mt-3">
              <div className="flex items-center gap-1 text-gray-600 text-xs">
                <Square size={14} /> <span>{featured.sqft} Sq. Ft</span>
              </div>
              <div className="flex items-center gap-1 text-gray-600 text-xs">
                <BedDouble size={14} /> <span>{featured.beds} Beds</span>
              </div>
              <div className="flex items-center gap-1 text-gray-600 text-xs">
                <Bath size={14} /> <span>{featured.baths} Baths</span>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Smaller Grid Items */}
        <div className="lg:col-span-7 grid grid-cols-2 gap-4">
          {secondary.map((item) => (
            <motion.div 
              key={item.id} 
              variants={itemVariants}
              whileHover={{ y: -5 }}
              className="relative rounded-2xl overflow-hidden group h-[190px] lg:h-auto"
            >
              <img 
                src={item.image} 
                alt={item.title} 
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors" />
              <motion.button 
                 whileHover={{ scale: 1.1 }}
                 whileTap={{ scale: 0.9 }}
                className="absolute top-3 right-3 bg-white/30 backdrop-blur-md p-1.5 rounded-full text-white hover:bg-white hover:text-red-500 transition-colors"
              >
                <Heart size={16} />
              </motion.button>
              <div className="absolute bottom-3 left-3 right-3 flex justify-between items-end">
                 <div>
                    <h3 className="text-white font-medium text-sm drop-shadow-md">{item.title}</h3>
                    <p className="text-white/90 text-xs drop-shadow-md">{item.price}</p>
                 </div>
                 <motion.button
                   whileHover={{ scale: 1.1 }}
                   whileTap={{ scale: 0.95 }}
                   className="bg-white/20 backdrop-blur-md hover:bg-white/30 text-white p-2 rounded-full transition-colors shadow-sm"
                 >
                   <ArrowUpRight size={16} />
                 </motion.button>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
};

export default PropertyGrid;