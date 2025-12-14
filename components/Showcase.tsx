import React, { useState } from 'react';
import { Search, MapPin, BedDouble, Bath, Square, ArrowUpRight } from 'lucide-react';
import { MOCK_PROPERTIES } from '../constants';
import { motion, AnimatePresence } from 'framer-motion';

const Showcase: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'buy' | 'rent' | 'sold'>('buy');

  return (
    <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
      <div className="text-center mb-12">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-3xl md:text-4xl font-bold text-gray-900 font-serif mb-8"
        >
          Property Showcase
        </motion.h2>
        
        {/* Search Filter Bar */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="inline-flex flex-col md:flex-row items-center bg-white border border-gray-100 rounded-full p-2 shadow-sm max-w-2xl mx-auto w-full"
        >
          <div className="flex space-x-1 mb-2 md:mb-0 w-full md:w-auto justify-center md:justify-start">
            {(['buy', 'rent', 'sold'] as const).map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className="relative px-6 py-2 rounded-full text-sm font-medium transition-colors capitalize z-10"
              >
                {activeTab === tab && (
                  <motion.div
                    layoutId="activeTab"
                    className="absolute inset-0 bg-primary rounded-full shadow-md -z-10"
                    transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                  />
                )}
                <span className={activeTab === tab ? "text-white" : "text-gray-500 hover:text-gray-700"}>
                  {tab}
                </span>
              </button>
            ))}
          </div>
          
          <div className="h-6 w-px bg-gray-200 mx-4 hidden md:block"></div>
          
          <div className="flex-1 flex items-center w-full px-4 md:px-0">
            <div className="relative w-full">
              <input 
                type="text" 
                placeholder="Enter City or Zip Code" 
                className="w-full pl-4 pr-10 py-2 text-sm text-gray-700 placeholder-gray-400 focus:outline-none bg-transparent"
              />
            </div>
            <motion.button 
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              className="bg-primary hover:bg-primary/90 text-white p-2.5 rounded-full ml-2 transition-colors"
            >
              <Search size={18} />
            </motion.button>
          </div>
        </motion.div>
      </div>

      {/* Property Carousel/List */}
      <motion.div 
        layout
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
      >
        <AnimatePresence>
          {MOCK_PROPERTIES.slice(0, 3).map((property, index) => (
            <motion.div 
              key={property.id} 
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ delay: index * 0.1, duration: 0.6 }}
              whileHover={{ y: -10 }}
              className="bg-white rounded-2xl overflow-hidden border border-gray-100 hover:shadow-xl transition-shadow duration-300 group"
            >
              <div className="relative h-64 overflow-hidden">
                <img 
                  src={property.image} 
                  alt={property.title} 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full text-xs font-bold text-gray-900 uppercase tracking-wider">
                  {property.type}
                </div>
              </div>
              
              <div className="p-6">
                <div className="flex justify-between items-start mb-4">
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 truncate max-w-[150px]">{property.city.split(',')[0]}</h3>
                    <p className="text-gray-500 text-sm flex items-center gap-1 mt-1">
                      <MapPin size={14} /> {property.address}
                    </p>
                  </div>
                  <div className="flex flex-col items-end gap-2">
                    <span className="text-primary font-bold text-lg">{property.price}</span>
                    <motion.button 
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className="flex items-center gap-1 text-xs font-semibold text-white bg-primary px-3 py-1.5 rounded-full hover:bg-primary/90 transition-colors shadow-sm"
                    >
                      Details <ArrowUpRight size={14} />
                    </motion.button>
                  </div>
                </div>
                
                <div className="flex justify-between items-center border-t border-gray-100 pt-4 text-gray-500 text-xs">
                   <div className="flex flex-col items-center">
                      <Square size={16} className="mb-1 text-gray-400" />
                      <span>{property.sqft} Sq Ft</span>
                   </div>
                   <div className="w-px h-8 bg-gray-100"></div>
                   <div className="flex flex-col items-center">
                      <BedDouble size={16} className="mb-1 text-gray-400" />
                      <span>{property.beds} Beds</span>
                   </div>
                   <div className="w-px h-8 bg-gray-100"></div>
                   <div className="flex flex-col items-center">
                      <Bath size={16} className="mb-1 text-gray-400" />
                      <span>{property.baths} Baths</span>
                   </div>
                </div>
              </div>
            </motion.div>
          ))}
        </AnimatePresence>
      </motion.div>
    </section>
  );
};

export default Showcase;