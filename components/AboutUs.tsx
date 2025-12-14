import React from 'react';
import { ABOUT_IMAGE } from '../constants';
import { motion } from 'framer-motion';

const AboutUs: React.FC = () => {
  return (
    <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
      <motion.div 
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-50px" }}
        transition={{ duration: 0.8 }}
        className="bg-[#1A1A1A] rounded-[2.5rem] overflow-hidden flex flex-col lg:flex-row min-h-[500px]"
      >
        {/* Text Content */}
        <div className="lg:w-1/2 p-8 md:p-16 flex flex-col justify-center">
          <div className="flex items-center gap-2 mb-6">
            <h2 className="text-4xl font-bold text-white font-serif">About</h2>
            <span className="text-4xl font-bold text-primary font-serif">Us</span>
          </div>
          
          <div className="space-y-6 text-gray-400 text-sm leading-relaxed max-w-md">
            <p>
              Housify is your trusted partner in the world of real estate! 
              We take pride in offering top-notch services for buying, selling, 
              and renting properties in the most sought-after areas—California, 
              San Francisco, and Miami.
            </p>
            <p>
              Our agency specializes in finding the perfect homes and commercial properties 
              for our clients. We believe that every transaction marks the beginning of a 
              long-term relationship.
            </p>
            <p>
              Our team of experienced agents is committed to guiding you through every step 
              of the process, from the initial consultation to closing the deal. 
              Your satisfaction is our top priority.
            </p>
          </div>
        </div>

        {/* Image Content */}
        <motion.div 
          initial={{ opacity: 0, scale: 1.1 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 0.2 }}
          className="lg:w-1/2 relative h-64 lg:h-auto overflow-hidden"
        >
          <img 
            src={ABOUT_IMAGE} 
            alt="Real estate agent giving keys to couple" 
            className="absolute inset-0 w-full h-full object-cover"
          />
          {/* Stylistic overlay curve could go here if using SVG */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent lg:hidden" />
        </motion.div>
      </motion.div>
    </section>
  );
};

export default AboutUs;