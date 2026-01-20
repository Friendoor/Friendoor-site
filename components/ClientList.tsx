import React from 'react';
import { motion } from 'framer-motion';
import { CLIENTS } from '../constants';

const ClientList: React.FC = () => {
  // Duplicate the clients list to create a seamless infinite loop
  const duplicatedClients = [...CLIENTS, ...CLIENTS];

  return (
    <section id="clients" className="py-20 bg-white text-black relative z-20 selection:bg-black selection:text-white overflow-hidden">
      <div className="container mx-auto px-6 mb-16">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <span className="text-xs font-bold tracking-[0.3em] text-gray-500 uppercase">BRAND EXPERIENCE</span>
        </motion.div>
      </div>

      <div className="relative w-full">
        {/* Gradient Masks for smooth fade in/out effect at edges */}
        <div className="absolute top-0 left-0 w-32 h-full bg-gradient-to-r from-white to-transparent z-10 pointer-events-none" />
        <div className="absolute top-0 right-0 w-32 h-full bg-gradient-to-l from-white to-transparent z-10 pointer-events-none" />

        <motion.div
          className="flex items-center gap-16 md:gap-24"
          animate={{ x: "-50%" }}
          transition={{ 
            ease: "linear", 
            duration: 20, // Adjust speed here: Lower = Faster, Higher = Slower
            repeat: Infinity 
          }}
          style={{ width: "max-content" }}
        >
          {duplicatedClients.map((client, index) => (
            <div
              key={`${client.id}-${index}`}
              className="w-[140px] md:w-[180px] flex-shrink-0 opacity-40 hover:opacity-100 transition-opacity duration-500 grayscale hover:grayscale-0 cursor-pointer"
            >
              <img 
                src={client.logo} 
                alt={`${client.name} logo`} 
                className="w-full h-auto object-contain"
              />
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default ClientList;