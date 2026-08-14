import React from 'react';
import { NavLink } from 'react-router-dom';
import { Radio, Disc, Sparkles, Heart } from 'lucide-react';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-[#0b080f] text-white/70 border-t border-white/10 py-12 px-4 sm:px-6 lg:px-8 relative z-20">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
        {/* Left Side: Brand */}
        <div className="flex flex-col items-center md:items-start text-center md:text-left">
          <div className="flex items-center space-x-2">
            <Radio className="w-5 h-5 text-amber-400" />
            <span className="font-serif-retro font-bold text-xl text-white">
              Rewind & Play
            </span>
          </div>
          <p className="text-xs text-white/50 mt-1 max-w-sm">
            An illustrated, scene-based journey through iconic 80s, 90s, and 2000s English music memories.
          </p>
        </div>

        {/* Middle: Decade Links */}
        <div className="flex items-center space-x-6 text-sm font-medium">
          <NavLink
            to="/decade/80s"
            className="hover:text-pink-400 transition-colors flex items-center space-x-1.5"
          >
            <Sparkles className="w-3.5 h-3.5 text-pink-400" />
            <span>80s Synthpop</span>
          </NavLink>
          <NavLink
            to="/decade/90s"
            className="hover:text-teal-400 transition-colors flex items-center space-x-1.5"
          >
            <Disc className="w-3.5 h-3.5 text-teal-400" />
            <span>90s Britpop & Grunge</span>
          </NavLink>
          <NavLink
            to="/decade/2000s"
            className="hover:text-orange-400 transition-colors flex items-center space-x-1.5"
          >
            <Radio className="w-3.5 h-3.5 text-orange-400" />
            <span>2000s Indie & Pop</span>
          </NavLink>
        </div>

        {/* Right: Disclaimer & Copyright */}
        <div className="text-center md:text-right text-xs text-white/40">
          <p className="flex items-center justify-center md:justify-end space-x-1">
            <span>Crafted with</span>
            <Heart className="w-3 h-3 text-red-400 inline fill-current" />
            <span>for music lovers</span>
          </p>
          <p className="mt-1">
            No self-hosted audio • Official YouTube & Spotify embeds
          </p>
        </div>
      </div>
    </footer>
  );
};
