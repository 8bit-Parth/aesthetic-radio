import React from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import { Radio, Disc, Sparkles, Home } from 'lucide-react';
import { AudioVisualizer } from './AudioVisualizer';

export const Navbar: React.FC = () => {
  const location = useLocation();

  const getDecadeAccent = () => {
    if (location.pathname.includes('80s')) return '#ec4899';
    if (location.pathname.includes('90s')) return '#2a9d8f';
    if (location.pathname.includes('2000s')) return '#f4a261';
    return '#e07a5f';
  };

  const accentColor = getDecadeAccent();

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-[#120e17]/80 backdrop-blur-xl border-b border-white/10 transition-all duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        {/* Brand / Logo */}
        <NavLink
          to="/"
          className="flex items-center space-x-3 group text-white hover:text-amber-200 transition-colors"
        >
          <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-amber-500/20 to-purple-600/30 border border-white/20 flex items-center justify-center group-hover:scale-105 transition-transform">
            <Radio className="w-5 h-5 text-amber-400" />
          </div>
          <div className="flex flex-col">
            <span className="font-serif-retro font-bold text-lg leading-none tracking-tight text-amber-50">
              Rewind <span className="text-amber-400 font-light">&</span> Play
            </span>
            <span className="text-[10px] font-mono text-white/50 tracking-widest uppercase mt-0.5">
              Illustrated Music Nostalgia
            </span>
          </div>
        </NavLink>

        {/* Decade Selector Navigation Pills */}
        <nav className="flex items-center space-x-1 sm:space-x-2 bg-black/40 p-1 rounded-full border border-white/10">
          <NavLink
            to="/"
            end
            className={({ isActive }) =>
              `flex items-center space-x-1 px-3 py-1.5 rounded-full text-xs font-medium transition-all ${
                isActive
                  ? 'bg-white/20 text-white shadow-sm border border-white/20'
                  : 'text-white/70 hover:text-white hover:bg-white/10'
              }`
            }
          >
            <Home className="w-3.5 h-3.5" />
            <span className="hidden sm:inline">Home</span>
          </NavLink>

          <NavLink
            to="/decade/80s"
            className={({ isActive }) =>
              `flex items-center space-x-1 px-3 py-1.5 rounded-full text-xs font-semibold tracking-wider transition-all ${
                isActive
                  ? 'bg-[#ec4899] text-white shadow-lg shadow-pink-500/20 border border-pink-400/40'
                  : 'text-white/70 hover:text-pink-300 hover:bg-white/10'
              }`
            }
          >
            <Sparkles className="w-3 h-3 text-pink-300" />
            <span>80s</span>
          </NavLink>

          <NavLink
            to="/decade/90s"
            className={({ isActive }) =>
              `flex items-center space-x-1 px-3 py-1.5 rounded-full text-xs font-semibold tracking-wider transition-all ${
                isActive
                  ? 'bg-[#2a9d8f] text-white shadow-lg shadow-teal-500/20 border border-teal-400/40'
                  : 'text-white/70 hover:text-teal-300 hover:bg-white/10'
              }`
            }
          >
            <Disc className="w-3 h-3 text-teal-300" />
            <span>90s</span>
          </NavLink>

          <NavLink
            to="/decade/2000s"
            className={({ isActive }) =>
              `flex items-center space-x-1 px-3 py-1.5 rounded-full text-xs font-semibold tracking-wider transition-all ${
                isActive
                  ? 'bg-[#f4a261] text-black font-bold shadow-lg shadow-orange-500/20 border border-orange-400/40'
                  : 'text-white/70 hover:text-orange-300 hover:bg-white/10'
              }`
            }
          >
            <Radio className="w-3 h-3 text-orange-400" />
            <span>2000s</span>
          </NavLink>
        </nav>

        {/* Ambient Equalizer Indicator */}
        <div className="hidden md:flex items-center space-x-2 bg-white/5 px-3 py-1.5 rounded-full border border-white/10">
          <AudioVisualizer accentColor={accentColor} isCompact />
          <span className="text-[11px] font-mono text-white/70 uppercase tracking-widest">
            FM Stereo
          </span>
        </div>
      </div>
    </header>
  );
};
