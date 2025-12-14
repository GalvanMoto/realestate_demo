import React, { useState, useMemo } from 'react';
import { Search, MapPin, BedDouble, Bath, Square, ArrowUpRight, DollarSign } from 'lucide-react';
import { MOCK_PROPERTIES } from '../constants';
import { motion, AnimatePresence } from 'framer-motion';

const Showcase: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'buy' | 'rent' | 'sold'>('buy');
  const [location, setLocation] = useState('');
  const [minPrice, setMinPrice] = useState('');
  const [maxPrice, setMaxPrice] = useState('');
  const [beds, setBeds] = useState('any');
  const [baths, setBaths] = useState('any');

  // Helper to parse price string "$1,200,000" -> 1200000
  const parsePrice = (priceStr: string) => {
    return parseInt(priceStr.replace(/[$,]/g, ''), 10);
  };

  const filteredProperties = useMemo(() => {
    return MOCK_PROPERTIES.filter((property) => {
      // 1. Tab / Type Filter
      // Map 'buy' tab to 'sale' type in data
      const targetType = activeTab === 'buy' ? 'sale' : activeTab;
      if (property.type !== targetType) return false;

      // 2. Location Filter
      if (location) {
        const loc = location.toLowerCase();
        const match = property.city.toLowerCase().includes(loc) || 
                      property.address.toLowerCase().includes(loc);
        if (!match) return false;
      }

      // 3. Price Filter
      const p = parsePrice(property.price);
      if (minPrice && p < parseInt(minPrice)) return false;
      if (maxPrice && p > parseInt(maxPrice)) return false;

      // 4. Beds Filter
      if (beds !== 'any' && property.beds < parseInt(beds)) return false;

      // 5. Baths Filter
      if (baths !== 'any' && property.baths < parseInt(baths)) return false;

      return true;
    });
  }, [activeTab, location, minPrice, maxPrice, beds, baths]);

  const priceOptions = [
    { label: '$500k', value: '500000' },
    { label: '$750k', value: '750000' },
    { label: '$1M', value: '1000000' },
    { label: '$1.5M', value: '1500000' },
    { label: '$2M', value: '2000000' },
    { label: '$3M', value: '3000000' },
    { label: '$5M', value: '5000000' },
  ];

  return (
    <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
      <div className="text-center mb-10">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-3xl md:text-4xl font-bold text-gray-900 font-serif mb-4"
        >
          Property Showcase
        </motion.h2>
        <motion.p
           initial={{ opacity: 0, y: 20 }}
           whileInView={{ opacity: 1, y: 0 }}
           viewport={{ once: true }}
           transition={{ duration: 0.6, delay: 0.1 }}
           className="text-gray-500 max-w-2xl mx-auto"
        >
          Explore our extensive list of properties with our advanced search tools.
        </motion.p>
      </div>
      
      {/* Advanced Filter Panel */}
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.2 }}
        className="max-w-5xl mx-auto mb-16 bg-white rounded-[2rem] p-6 md:p-8 shadow-xl border border-gray-100"
      >
        {/* Tabs */}
        <div className="flex justify-center mb-8">
          <div className="bg-gray-100 p-1.5 rounded-full inline-flex relative shadow-inner">
            {(['buy', 'rent', 'sold'] as const).map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className="relative px-8 py-2.5 rounded-full text-sm font-semibold transition-colors capitalize z-10"
              >
                {activeTab === tab && (
                  <motion.div
                    layoutId="activeTab"
                    className="absolute inset-0 bg-white rounded-full shadow-sm -z-10"
                    transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                  />
                )}
                <span className={activeTab === tab ? "text-primary" : "text-gray-500 hover:text-gray-700"}>
                  {tab}
                </span>
              </button>
            ))}
          </div>
        </div>

        {/* Filter Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-6">
          {/* Location */}
          <div className="lg:col-span-4">
            <label className="text-xs font-bold text-gray-500 uppercase tracking-wider ml-1 mb-2 block">Location</label>
            <div className="relative group">
              <MapPin className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 group-focus-within:text-primary transition-colors" size={20} />
              <input 
                type="text" 
                value={location}
                onChange={(e) => setLocation(e.target.value)}
                placeholder="City, Zip, or Address" 
                className="w-full pl-12 pr-4 py-3 bg-gray-50 border border-gray-100 rounded-xl focus:ring-2 focus:ring-primary/20 focus:border-primary/50 outline-none transition-all placeholder-gray-400 text-gray-700"
              />
            </div>
          </div>

          {/* Min Price */}
          <div className="lg:col-span-2">
             <label className="text-xs font-bold text-gray-500 uppercase tracking-wider ml-1 mb-2 block">Min Price</label>
             <div className="relative">
               <DollarSign className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" size={16} />
               <select 
                 value={minPrice}
                 onChange={(e) => setMinPrice(e.target.value)}
                 className="w-full pl-9 pr-8 py-3 bg-gray-50 border border-gray-100 rounded-xl focus:ring-2 focus:ring-primary/20 focus:border-primary/50 outline-none appearance-none cursor-pointer text-gray-700"
               >
                 <option value="">Any</option>
                 {priceOptions.map(opt => (
                   <option key={`min-${opt.value}`} value={opt.value}>{opt.label}</option>
                 ))}
               </select>
               <div className="absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none">
                 <svg className="w-4 h-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path></svg>
               </div>
             </div>
          </div>

          {/* Max Price */}
          <div className="lg:col-span-2">
             <label className="text-xs font-bold text-gray-500 uppercase tracking-wider ml-1 mb-2 block">Max Price</label>
             <div className="relative">
               <DollarSign className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" size={16} />
               <select 
                 value={maxPrice}
                 onChange={(e) => setMaxPrice(e.target.value)}
                 className="w-full pl-9 pr-8 py-3 bg-gray-50 border border-gray-100 rounded-xl focus:ring-2 focus:ring-primary/20 focus:border-primary/50 outline-none appearance-none cursor-pointer text-gray-700"
               >
                 <option value="">Any</option>
                 {priceOptions.map(opt => (
                   <option key={`max-${opt.value}`} value={opt.value}>{opt.label}</option>
                 ))}
               </select>
               <div className="absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none">
                 <svg className="w-4 h-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path></svg>
               </div>
             </div>
          </div>

          {/* Beds */}
          <div className="lg:col-span-2">
             <label className="text-xs font-bold text-gray-500 uppercase tracking-wider ml-1 mb-2 block">Beds</label>
             <div className="relative">
               <BedDouble className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" size={18} />
               <select 
                 value={beds}
                 onChange={(e) => setBeds(e.target.value)}
                 className="w-full pl-10 pr-8 py-3 bg-gray-50 border border-gray-100 rounded-xl focus:ring-2 focus:ring-primary/20 focus:border-primary/50 outline-none appearance-none cursor-pointer text-gray-700"
               >
                 <option value="any">Any</option>
                 <option value="1">1+</option>
                 <option value="2">2+</option>
                 <option value="3">3+</option>
                 <option value="4">4+</option>
                 <option value="5">5+</option>
               </select>
               <div className="absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none">
                 <svg className="w-4 h-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path></svg>
               </div>
             </div>
          </div>

          {/* Baths */}
          <div className="lg:col-span-2">
             <label className="text-xs font-bold text-gray-500 uppercase tracking-wider ml-1 mb-2 block">Baths</label>
             <div className="relative">
               <Bath className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" size={18} />
               <select 
                 value={baths}
                 onChange={(e) => setBaths(e.target.value)}
                 className="w-full pl-10 pr-8 py-3 bg-gray-50 border border-gray-100 rounded-xl focus:ring-2 focus:ring-primary/20 focus:border-primary/50 outline-none appearance-none cursor-pointer text-gray-700"
               >
                 <option value="any">Any</option>
                 <option value="1">1+</option>
                 <option value="2">2+</option>
                 <option value="3">3+</option>
                 <option value="4">4+</option>
               </select>
               <div className="absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none">
                 <svg className="w-4 h-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path></svg>
               </div>
             </div>
          </div>
        </div>
      </motion.div>

      {/* Property Results */}
      <motion.div 
        layout
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
      >
        <AnimatePresence mode="popLayout">
          {filteredProperties.length > 0 ? (
            filteredProperties.map((property) => (
              <motion.div 
                key={property.id} 
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.4 }}
                whileHover={{ y: -10 }}
                className="bg-white rounded-2xl overflow-hidden border border-gray-100 hover:shadow-xl transition-all duration-300 group"
              >
                <div className="relative h-64 overflow-hidden">
                  <img 
                    src={property.image} 
                    alt={property.title} 
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full text-xs font-bold text-gray-900 uppercase tracking-wider shadow-sm">
                    {property.type}
                  </div>
                  <div className="absolute bottom-0 inset-x-0 h-1/2 bg-gradient-to-t from-black/50 to-transparent opacity-60" />
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
            ))
          ) : (
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="col-span-full flex flex-col items-center justify-center py-20 text-center"
            >
              <div className="bg-gray-100 p-4 rounded-full mb-4">
                <Search size={40} className="text-gray-400" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">No Properties Found</h3>
              <p className="text-gray-500 max-w-md">
                We couldn't find any properties matching your current filters. Try adjusting your search criteria.
              </p>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.div>
    </section>
  );
};

export default Showcase;