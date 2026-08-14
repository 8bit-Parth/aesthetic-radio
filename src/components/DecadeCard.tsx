import React from 'react';
import { NavLink } from 'react-router-dom';
import type { DecadeMeta } from '../types/song';
import { ArrowRight, Sparkles, Disc, Radio, Music } from 'lucide-react';

interface DecadeCardProps {
  meta: DecadeMeta;
  songCount: number;
}

export const DecadeCard: React.FC<DecadeCardProps> = ({ meta, songCount }) => {
  const getIcon = () => {
    switch (meta.id) {
      case '80s':
        return <Sparkles className="w-6 h-6 text-pink-400" />;
      case '90s':
        return <Disc className="w-6 h-6 text-teal-400" />;
      case '2000s':
        return <Radio className="w-6 h-6 text-orange-400" />;
    }
  };

  const borderHoverClass =
    meta.id === '80s'
      ? 'hover:border-pink-500/50 hover:shadow-[0_0_35px_rgba(236,72,153,0.25)]'
      : meta.id === '90s'
      ? 'hover:border-teal-500/50 hover:shadow-[0_0_35px_rgba(42,157,143,0.25)]'
      : 'hover:border-orange-500/50 hover:shadow-[0_0_35px_rgba(244,162,97,0.25)]';

  return (
    <NavLink
      to={`/decade/${meta.id}`}
      className={`group relative rounded-2xl overflow-hidden glass-panel p-6 sm:p-8 flex flex-col justify-between transition-all duration-300 transform hover:-translate-y-1.5 cursor-pointer ${borderHoverClass}`}
    >
      {/* Background Hero Illustration Image with Overlay */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        <img
          src={meta.cardImage}
          alt={`${meta.title} illustrated scene`}
          className="w-full h-full object-cover object-center opacity-35 group-hover:opacity-50 group-hover:scale-105 transition-all duration-700 filter brightness-90 contrast-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#141019] via-[#141019]/80 to-transparent" />
      </div>

      {/* Top Header Row */}
      <div className="relative z-10 flex items-center justify-between mb-4">
        <div className="flex items-center space-x-3">
          <div
            className="p-3 rounded-xl bg-black/50 border border-white/10 backdrop-blur-md group-hover:scale-110 transition-transform"
            style={{ borderColor: `${meta.accentColor}40` }}
          >
            {getIcon()}
          </div>
          <div>
            <span
              className="text-xs font-mono font-bold tracking-widest uppercase px-2.5 py-0.5 rounded-full bg-black/40 border border-white/10"
              style={{ color: meta.accentColor }}
            >
              {meta.yearsRange}
            </span>
            <h3 className="text-2xl sm:text-3xl font-serif-retro font-bold text-white mt-0.5 group-hover:text-amber-200 transition-colors">
              {meta.title}
            </h3>
          </div>
        </div>

        <div className="flex items-center space-x-1 px-3 py-1 rounded-full bg-white/10 border border-white/15 text-xs text-white/80 font-medium">
          <Music className="w-3 h-3 text-amber-300" />
          <span>{songCount} Songs</span>
        </div>
      </div>

      {/* Subtitle & Description */}
      <div className="relative z-10 mb-6">
        <p className="text-sm font-semibold text-amber-100/90 italic font-serif-retro mb-2">
          “{meta.subtitle}”
        </p>
        <p className="text-xs sm:text-sm text-white/70 leading-relaxed font-sans font-light">
          {meta.description}
        </p>
      </div>

      {/* Vibe Tags & Action Footer */}
      <div className="relative z-10 pt-4 border-t border-white/10 flex flex-col sm:flex-row sm:items-center justify-between gap-3">
        {/* Vibe Tags */}
        <div className="flex flex-wrap gap-1.5">
          {meta.keyVibes.map((vibe) => (
            <span
              key={vibe}
              className="text-[11px] font-mono px-2 py-0.5 rounded bg-black/40 text-white/60 border border-white/5"
            >
              #{vibe}
            </span>
          ))}
        </div>

        {/* Enter Walkthrough CTA */}
        <div
          className="inline-flex items-center space-x-2 text-xs font-bold uppercase tracking-wider transition-all duration-300 group-hover:translate-x-1"
          style={{ color: meta.accentColor }}
        >
          <span>Explore Walkthrough</span>
          <ArrowRight className="w-4 h-4" />
        </div>
      </div>
    </NavLink>
  );
};
