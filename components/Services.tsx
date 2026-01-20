import React from 'react';
import { Camera, Video, PenTool, Share2 } from 'lucide-react';
import { SERVICES } from '../constants';
import { motion } from 'framer-motion';

const iconMap: Record<string, React.ReactNode> = {
  'Camera': <Camera size={32} />,
  'Video': <Video size={32} />,
  'PenTool': <PenTool size={32} />,
  'Share2': <Share2 size={32} />,
};

const Services: React.FC = () => {
  return (
    <section id="services" className="py-24 bg-black text-white border-t border-gray-900">
      <div className="container mx-auto px-6">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <h2 className="text-4xl md:text-5xl font-display mb-4">Our Expertise</h2>
          <p className="text-gray-400 max-w-xl mx-auto">
            Comprehensive creative solutions tailored for brands that refuse to blend in.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {SERVICES.map((service, index) => (
            <motion.div 
              key={service.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="group text-center md:text-left"
            >
              <div className="mb-6 text-gray-500 group-hover:text-white transition-colors duration-300 inline-block">
                {iconMap[service.icon]}
              </div>
              <h3 className="text-xl font-bold mb-3 uppercase tracking-wide">{service.title}</h3>
              <p className="text-gray-400 text-sm leading-relaxed">
                {service.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;