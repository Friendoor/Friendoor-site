import React from 'react';
import { Instagram, Linkedin } from 'lucide-react';
import { AGENCY_NAME } from '../constants';

const Contact: React.FC = () => {
  return (
    <footer id="contact" className="bg-black text-white pt-24 pb-12 border-t border-gray-900">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-start mb-16">
          <div className="mb-10 md:mb-0">
            <h2 className="text-4xl font-display font-bold mb-6">Let's Create.</h2>
            <p className="text-gray-400 mb-8 max-w-sm">
              Have a project in mind? We'd love to hear about it.
              Reach out for a consultation.
            </p>
            <a href="mailto:Friendoor.info@gmail.com" className="text-xl underline decoration-1 underline-offset-8 hover:text-gray-300 transition-colors">
              Friendoor.info@gmail.com
            </a>
          </div>

          <div className="flex flex-col space-y-4 items-start md:items-end">
             {/* Instagram Link */}
             <a 
               href="https://www.instagram.com/friendoor777/" 
               target="_blank" 
               rel="noopener noreferrer"
               className="flex items-center space-x-3 text-gray-400 hover:text-white transition-colors"
             >
               <span className="uppercase tracking-widest text-xs">Instagram</span>
               <Instagram size={18} />
             </a>

             {/* LinkedIn Link */}
             <a 
               href="https://www.linkedin.com/in/friendo-ng-94930b378" 
               target="_blank" 
               rel="noopener noreferrer"
               className="flex items-center space-x-3 text-gray-400 hover:text-white transition-colors"
             >
               <span className="uppercase tracking-widest text-xs">LinkedIn</span>
               <Linkedin size={18} />
             </a>
          </div>
        </div>

        <div className="border-t border-gray-900 pt-8 flex flex-col md:flex-row justify-between items-center text-xs text-gray-600 uppercase tracking-widest">
          <p>&copy; {new Date().getFullYear()} {AGENCY_NAME}. All rights reserved.</p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <a href="#" className="hover:text-gray-400">Privacy</a>
            <a href="#" className="hover:text-gray-400">Terms</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Contact;