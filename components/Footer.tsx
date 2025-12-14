import React from 'react';
import { Facebook, Twitter, Instagram, Linkedin, Mail, Phone, MapPin, ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';

const Footer: React.FC = () => {
  return (
    <footer className="bg-[#1A1A1A] text-white pt-20 pb-10 mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16"
        >
          {/* Brand Column */}
          <div className="space-y-6">
             {/* Logo */}
             <span className="font-sans font-bold text-2xl tracking-widest text-white">HOUSIFY</span>
             <p className="text-gray-400 text-sm leading-relaxed">
               Your trusted partner in finding the perfect home. We bring you the best properties in the most sought-after locations.
             </p>
             <div className="flex space-x-4">
               {/* Social Icons */}
               <motion.a whileHover={{ y: -3 }} href="#" className="bg-white/10 p-2.5 rounded-full hover:bg-primary transition-colors"><Facebook size={18} /></motion.a>
               <motion.a whileHover={{ y: -3 }} href="#" className="bg-white/10 p-2.5 rounded-full hover:bg-primary transition-colors"><Twitter size={18} /></motion.a>
               <motion.a whileHover={{ y: -3 }} href="#" className="bg-white/10 p-2.5 rounded-full hover:bg-primary transition-colors"><Instagram size={18} /></motion.a>
               <motion.a whileHover={{ y: -3 }} href="#" className="bg-white/10 p-2.5 rounded-full hover:bg-primary transition-colors"><Linkedin size={18} /></motion.a>
             </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-serif font-bold mb-6">Quick Links</h3>
            <ul className="space-y-4 text-gray-400 text-sm">
              <li><a href="#" className="hover:text-primary transition-colors flex items-center gap-2 group"><span className="w-1.5 h-1.5 bg-primary rounded-full opacity-0 group-hover:opacity-100 transition-opacity"></span>Home</a></li>
              <li><a href="#" className="hover:text-primary transition-colors flex items-center gap-2 group"><span className="w-1.5 h-1.5 bg-primary rounded-full opacity-0 group-hover:opacity-100 transition-opacity"></span>About Us</a></li>
              <li><a href="#" className="hover:text-primary transition-colors flex items-center gap-2 group"><span className="w-1.5 h-1.5 bg-primary rounded-full opacity-0 group-hover:opacity-100 transition-opacity"></span>Properties</a></li>
              <li><a href="#" className="hover:text-primary transition-colors flex items-center gap-2 group"><span className="w-1.5 h-1.5 bg-primary rounded-full opacity-0 group-hover:opacity-100 transition-opacity"></span>Services</a></li>
              <li><a href="#" className="hover:text-primary transition-colors flex items-center gap-2 group"><span className="w-1.5 h-1.5 bg-primary rounded-full opacity-0 group-hover:opacity-100 transition-opacity"></span>Contact</a></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-serif font-bold mb-6">Contact Info</h3>
            <ul className="space-y-4 text-gray-400 text-sm">
              <li className="flex items-start gap-3">
                <MapPin size={18} className="text-primary mt-0.5 flex-shrink-0" />
                <span>123 Real Estate Ave,<br/> San Francisco, CA 94103</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone size={18} className="text-primary flex-shrink-0" />
                <span>+1 (555) 123-4567</span>
              </li>
              <li className="flex items-center gap-3">
                <Mail size={18} className="text-primary flex-shrink-0" />
                <span>hello@housify.com</span>
              </li>
            </ul>
          </div>

           {/* Newsletter */}
          <div>
            <h3 className="text-lg font-serif font-bold mb-6">Newsletter</h3>
            <p className="text-gray-400 text-sm mb-4">Subscribe to our newsletter to get the latest updates and offers.</p>
            <div className="relative">
              <input 
                type="email" 
                placeholder="Your email address" 
                className="w-full bg-white/5 border border-white/10 rounded-full py-3 px-4 text-sm text-white focus:outline-none focus:border-primary transition-colors"
              />
              <motion.button 
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="absolute right-1.5 top-1.5 bg-primary p-2 rounded-full hover:bg-primary/90 transition-colors"
              >
                <ArrowRight size={16} />
              </motion.button>
            </div>
          </div>
        </motion.div>

        {/* Bottom Bar */}
        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2, duration: 0.8 }}
          className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-4"
        >
          <p className="text-gray-500 text-sm">© 2024 Housify Real Estate. All rights reserved.</p>
          <div className="flex space-x-6 text-sm text-gray-500">
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
            <a href="#" className="hover:text-white transition-colors">Cookie Policy</a>
          </div>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;