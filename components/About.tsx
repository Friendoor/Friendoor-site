import React from 'react';
import { motion } from 'framer-motion';

const About: React.FC = () => {
  return (
    <section id="about" className="py-32 bg-white text-black overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="flex flex-col lg:flex-row gap-16 items-center">
          
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="lg:w-1/2"
          >
            <div className="relative">
              <img 
                src="https://picsum.photos/800/1000?grayscale" 
                alt="Studio" 
                className="w-full h-auto object-cover"
              />
              <div className="absolute -bottom-8 -right-8 w-48 h-48 bg-black z-[-1]" />
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="lg:w-1/2"
          >
            <h2 className="text-5xl lg:text-7xl font-display font-bold mb-8 leading-tight">
              We Are <br/> The Strivers.
            </h2>
            <div className="space-y-6 text-lg text-gray-700 leading-relaxed font-light">
              <p>
                奮鬥一族 (Friendoor) was born from a simple belief: that the most compelling stories are found in the struggle, the hustle, and the pursuit of excellence.
              </p>
              <p>
                We don't just create content; we engineer visual experiences. Drawing inspiration from cinema, architecture, and street culture, our work bridges the gap between raw authenticity and polished luxury.
              </p>
              <p>
                Based in the heart of the city, working globally.
              </p>
            </div>
            
            <div className="mt-12 grid grid-cols-2 gap-8 border-t border-gray-200 pt-8">
               <div>
                 <span className="block text-4xl font-bold font-display">50+</span>
                 <span className="text-sm uppercase tracking-widest text-gray-500">Brands Elevated</span>
               </div>
               <div>
                 <span className="block text-4xl font-bold font-display">&gt;10 Years</span>
                 <span className="text-sm uppercase tracking-widest text-gray-500">Creative Experience</span>
               </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default About;
