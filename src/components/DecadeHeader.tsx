import React from 'react';
import type { DecadeMeta } from '../types/song';
import { Sparkles, ArrowLeft } from 'lucide-react';
import { NavLink } from 'react-router-dom';

interface DecadeHeaderProps {
  meta: DecadeMeta;
  songCount: number;
}

export const DecadeHeader: React.FC<DecadeHeaderProps> = ({
  meta,
  songCount
}) => {
  return (
    <div className="relative w-full pt-24 pb-10 px-4 sm:px-6 lg:px-8 border-b border-white/10 overflow-hidden bg-gradient-to-b from-[#1c1424] to-[#120e17]">
      {/* Subtle Background Glow */}
      <div
        className="absolute top-0 right-1/4 w-96 h-96 rounded-full filter blur-[120px] opacity-20 pointer-events-none"
        style={{ backgroundColor: meta.accentColor }}
      />

      <div className="max-w-5xl mx-auto relative z-10">
        {/* Back Link */}
        <NavLink
          to="/"
          className="inline-flex items-center space-x-2 text-xs font-mono uppercase tracking-wider text-white/60 hover:text-white mb-6 transition-colors group"
        >
          <ArrowLeft className="w-4 h-4 transform group-hover:-translate-x-1 transition-transform" />
          <span>Back to All Decades</span>
        </NavLink>

        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div>
            {/* Decade Tag */}
            <div className="flex items-center space-x-2 mb-2">
              <span
                className="px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider text-black"
                style={{ backgroundColor: meta.accentColor }}
              >
                {meta.yearsRange}
              </span>
              <span className="text-xs font-mono text-white/60 bg-white/10 px-2.5 py-1 rounded-full border border-white/10">
                {songCount} Curated Songs
              </span>
            </div>

            {/* Title */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-serif-retro font-bold text-white tracking-tight leading-none drop-shadow-md">
              {meta.title}
            </h1>
            <p className="text-lg sm:text-xl font-serif-retro italic text-amber-200/90 mt-2">
              {meta.subtitle}
            </p>
          </div>

          {/* Instructions Box */}
          <div className="bg-black/40 border border-white/10 p-4 rounded-xl backdrop-blur-md max-w-sm">
            <div className="flex items-center space-x-2 text-amber-300 text-xs font-semibold mb-1">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Scroll-Snap Experience</span>
            </div>
            <p className="text-xs text-white/70 leading-relaxed font-sans">
              Scroll down to step through each illustrated song scene. Tap the player tab to switch between YouTube & Spotify embeds.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
