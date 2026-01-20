import React from 'react';
import { motion } from 'framer-motion';
import { PROJECTS } from '../constants';

const Portfolio: React.FC = () => {
  return (
    <section id="work" className="py-24 bg-black text-white">
      <div className="container mx-auto px-6">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16 flex flex-col md:flex-row justify-between items-end border-b border-gray-800 pb-6"
        >
          <h2 className="text-4xl md:text-5xl font-display">OUR WORKS</h2>
        </motion.div>

        {/* 
          Grid Layout Controls:
          - auto-rows-[300px]: Sets height on mobile
          - md:auto-rows-[450px]: Sets height on desktop
          - gap-6: Controls space between items
        */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 auto-rows-[300px] md:auto-rows-[450px]">
          {PROJECTS.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className={`group relative bg-gray-900 overflow-hidden ${
                project.size.toLowerCase() === 'large' ? 'md:col-span-2' : ''
              }`}
            >
              {/* Playable Video */}
              <video
                src={project.videoUrl}
                poster={project.image}
                controls
                playsInline
                preload="none"
                className="w-full h-full object-cover"
              >
                Your browser does not support the video tag.
              </video>
              
              {/* Text Overlay - Positioned Top Left to avoid blocking video controls at bottom */}
              <div className="absolute top-0 left-0 p-6 pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                <div className="bg-black/50 backdrop-blur-sm p-4 rounded-sm inline-block">
                  <span className="block text-xs font-bold text-accent tracking-widest uppercase mb-1 text-gray-300">
                    {project.category}
                  </span>
                  <h3 className="text-xl font-display text-white">{project.title}</h3>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;