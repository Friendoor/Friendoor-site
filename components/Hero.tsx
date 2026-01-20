import React from 'react';
import { motion } from 'framer-motion';
import { AGENCY_TAGLINE } from '../constants';
import { ChevronDown } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <section className="relative h-screen w-full overflow-hidden flex items-center justify-center bg-black">
      {/* Background visual - mimicking a dark, moody video feel with a static image for performance */}
      <div className="absolute inset-0 z-0">
        <img 
          src="https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/44e57fd8-2629-4b3e-afad-e5f0469dff6b/d6jmzu5-374da438-b9ef-415f-830a-87229094ef93.jpg/v1/fill/w_1192,h_670,q_70,strp/samurai_wallpaper_by_sorrowda_d6jmzu5-pre.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9MTA4MCIsInBhdGgiOiIvZi80NGU1N2ZkOC0yNjI5LTRiM2UtYWZhZC1lNWYwNDY5ZGZmNmIvZDZqbXp1NS0zNzRkYTQzOC1iOWVmLTQxNWYtODMwYS04NzIyOTA5NGVmOTMuanBnIiwid2lkdGgiOiI8PTE5MjAifV1dLCJhdWQiOlsidXJuOnNlcnZpY2U6aW1hZ2Uub3BlcmF0aW9ucyJdfQ.7mwaDoee0YkLp41nQL43YB6P02dsy1YJbap0SD7nL6w" 
          alt="Atmosphere" 
          className="w-full h-full object-cover opacity-40 scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-black/60" />
      </div>

      <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
        <motion.h1 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="text-5xl md:text-7xl lg:text-9xl font-display font-bold text-white tracking-tight mb-6"
        >
          奮鬥一族
        </motion.h1>
        
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
          className="text-lg md:text-xl text-gray-300 tracking-[0.2em] uppercase"
        >
          {AGENCY_TAGLINE}
        </motion.p>
      </div>

      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 1 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 text-white/50 animate-bounce cursor-pointer z-20"
      >
        <a href="#clients" aria-label="Scroll down">
          <ChevronDown size={32} />
        </a>
      </motion.div>
    </section>
  );
};

export default Hero;