import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Play } from 'lucide-react';
import { PROJECTS } from '../constants';
import { Project } from '../types';

// Helper to extract ID from Vimeo URL (handles standard, channels, groups, and player URLs)
const getVimeoId = (url: string) => {
  const match = url.match(/(?:vimeo\.com\/|player\.vimeo\.com\/video\/)(?:.*\/)?(\d+)/);
  return match ? match[1] : null;
};

const ProjectCard: React.FC<{ project: Project; index: number }> = ({ project, index }) => {
  const [isPlaying, setIsPlaying] = useState(false);
  const vimeoId = getVimeoId(project.videoUrl);

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className={`group relative bg-gray-900 overflow-hidden ${
        project.size.toLowerCase() === 'large' ? 'md:col-span-2' : ''
      }`}
    >
      {isPlaying && vimeoId ? (
        <iframe
          src={`https://player.vimeo.com/video/${vimeoId}?autoplay=1&title=0&byline=0&portrait=0`}
          className="w-full h-full"
          frameBorder="0"
          allow="autoplay; fullscreen; picture-in-picture"
          allowFullScreen
          title={project.title}
        />
      ) : (
        <div 
          className="relative w-full h-full cursor-pointer" 
          onClick={() => setIsPlaying(true)}
        >
          <img
            src={project.image}
            alt={project.title}
            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-colors duration-300" />
          
          {/* Play Button Center */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-16 h-16 bg-white/10 backdrop-blur-md rounded-full flex items-center justify-center border border-white/20 group-hover:scale-110 transition-transform duration-300 z-10">
             <Play className="text-white ml-1" size={32} fill="white" />
          </div>

          {/* Text Overlay */}
          <div className="absolute top-0 left-0 p-6 pointer-events-none z-10">
            <div className="bg-black/50 backdrop-blur-sm p-4 rounded-sm inline-block">
              <span className="block text-xs font-bold text-accent tracking-widest uppercase mb-1 text-gray-300">
                {project.category}
              </span>
              <h3 className="text-xl font-display text-white">{project.title}</h3>
            </div>
          </div>
        </div>
      )}
    </motion.div>
  );
};

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
            <ProjectCard key={project.id} project={project} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
