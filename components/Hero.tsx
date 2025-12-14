import React from 'react';
import { Play } from 'lucide-react';
import { HERO_IMAGE } from '../constants';
import { motion } from 'framer-motion';

const Hero: React.FC = () => {
  return (
    <section className="relative w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-8 pb-24">
      {/* Main Image Container */}
      <motion.div 
        initial={{ scale: 0.95, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 1, ease: [0.6, 0.05, 0.01, 0.9] }}
        className="relative h-[600px] w-full rounded-[2.5rem] overflow-hidden group"
      >
        <motion.img 
          src={HERO_IMAGE} 
          alt="Luxury Living Room" 
          initial={{ scale: 1.1 }}
          animate={{ scale: 1 }}
          transition={{ duration: 1.5, ease: "easeOut" }}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
        />
        
        {/* Overlay Content */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/60 to-transparent flex flex-col justify-center px-8 md:px-16">
          <div className="max-w-2xl text-white space-y-6">
            <motion.h1 
              initial={{ y: 30, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.5, duration: 0.8 }}
              className="text-5xl md:text-7xl font-bold leading-tight font-serif"
            >
              Find Your Dream <br /> Home Today
            </motion.h1>
            <motion.p 
              initial={{ y: 30, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.7, duration: 0.8 }}
              className="text-gray-200 text-lg md:text-xl max-w-lg font-light"
            >
              Welcome to our real estate agency, where your dream home awaits. 
              Browse our listings and find the perfect property for you.
            </motion.p>
            <motion.div 
              initial={{ y: 30, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.9, duration: 0.8 }}
              className="flex gap-4 pt-4"
            >
              <motion.button 
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-white text-gray-900 px-8 py-3 rounded-full font-semibold hover:bg-gray-100 transition-colors flex items-center gap-2"
              >
                View
              </motion.button>
              <motion.button 
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="border border-white/40 bg-white/10 backdrop-blur-sm text-white px-8 py-3 rounded-full font-semibold hover:bg-white/20 transition-colors"
              >
                Learn More
              </motion.button>
            </motion.div>
          </div>
        </div>
      </motion.div>

      {/* Overlapping Stats Card */}
      <motion.div 
        initial={{ y: 100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 1.2, duration: 0.8, type: "spring", bounce: 0.3 }}
        className="relative md:absolute md:bottom-32 md:right-8 lg:right-16 mt-6 md:mt-0 bg-white p-8 rounded-3xl shadow-xl max-w-sm w-full"
      >
        <div className="space-y-4">
          <h3 className="text-2xl font-bold text-gray-900 font-serif">Who We Are?</h3>
          <p className="text-gray-500 text-sm leading-relaxed">
            We offer a range of services including buying, selling, and property management. 
            Our expertise ensures you get the best deal possible.
          </p>
          
          <div className="grid grid-cols-3 gap-4 pt-4 border-t border-gray-100">
            <div className="text-center">
              <div className="text-xl font-bold text-primary">80+</div>
              <div className="text-xs text-gray-400 mt-1">Premium Houses</div>
            </div>
            <div className="text-center border-l border-gray-100">
              <div className="text-xl font-bold text-primary">500+</div>
              <div className="text-xs text-gray-400 mt-1">Sold Houses</div>
            </div>
            <div className="text-center border-l border-gray-100">
              <div className="text-xl font-bold text-primary">2K+</div>
              <div className="text-xs text-gray-400 mt-1">Happy Clients</div>
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default Hero;