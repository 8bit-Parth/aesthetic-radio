import React, { useState } from 'react';
import type { Song } from '../types/song';
import { SongCard } from './SongCard';
import { ChevronDown, Volume2 } from 'lucide-react';

interface SongSceneProps {
  song: Song;
  index: number;
  totalSongs: number;
  onNext?: () => void;
}

export const SongScene: React.FC<SongSceneProps> = ({
  song,
  index,
  totalSongs,
  onNext
}) => {
  const [imageLoaded, setImageLoaded] = useState(false);

  return (
    <section
      id={`scene-${song.id}`}
      className="snap-scene-item relative w-full min-h-screen h-screen flex items-center justify-center px-4 py-16 overflow-hidden select-none"
    >
      {/* Fallback CSS Gradient Background matching vibe */}
      <div
        className="absolute inset-0 transition-opacity duration-1000 z-0"
        style={{ background: song.vibeGradient }}
      />

      {/* High-Resolution Illustrated Background Image */}
      <img
        src={song.bgImage}
        alt={`Illustrated scene for ${song.title} by ${song.artist}`}
        onLoad={() => setImageLoaded(true)}
        className={`absolute inset-0 w-full h-full object-cover object-center transition-all duration-1000 transform scale-105 hover:scale-100 z-0 ${
          imageLoaded ? 'opacity-85 filter brightness-[0.82] contrast-[1.05]' : 'opacity-0 scale-110'
        }`}
      />

      {/* Dark Vintage Vignette Overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-[#120e17] via-[#120e17]/50 to-[#120e17]/70 z-0" />
      <div className="absolute inset-0 bg-gradient-to-r from-[#120e17]/80 via-transparent to-[#120e17]/80 z-0" />
      
      {/* Noise Grain Overlay */}
      <div className="absolute inset-0 grain-overlay opacity-40 pointer-events-none z-0" />

      {/* Top Decade & Era Tag Indicator */}
      <div className="absolute top-20 left-6 sm:left-12 z-10 flex items-center space-x-2 bg-black/40 px-3.5 py-1.5 rounded-full border border-white/10 backdrop-blur-md">
        <Volume2 className="w-4 h-4" style={{ color: song.accentColor }} />
        <span className="text-xs uppercase tracking-widest font-mono text-white/80">
          {song.decade} Nostalgia • {song.year}
        </span>
      </div>

      {/* Overlaid Glassmorphic Song Card */}
      <div className="relative z-10 w-full max-w-xl mx-auto my-auto my-6">
        <SongCard song={song} sceneIndex={index} totalScenes={totalSongs} />
      </div>

      {/* Scroll Down Prompt for Next Scene */}
      {index < totalSongs - 1 && (
        <button
          onClick={onNext}
          aria-label="Scroll to next song scene"
          className="absolute bottom-6 left-1/2 transform -translate-x-1/2 z-20 flex flex-col items-center space-y-1 text-white/70 hover:text-white transition-colors cursor-pointer group"
        >
          <span className="text-[11px] font-mono tracking-widest uppercase opacity-75 group-hover:opacity-100">
            Next Scene
          </span>
          <ChevronDown className="w-5 h-5 animate-bounce text-amber-300" />
        </button>
      )}
    </section>
  );
};
