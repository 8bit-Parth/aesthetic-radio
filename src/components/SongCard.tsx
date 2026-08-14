import React from 'react';
import type { Song } from '../types/song';
import { EmbedPlayer } from './EmbedPlayer';
import { Disc, Calendar, Tag, Sparkles } from 'lucide-react';

interface SongCardProps {
  song: Song;
  sceneIndex: number;
  totalScenes: number;
}

export const SongCard: React.FC<SongCardProps> = ({
  song,
  sceneIndex,
  totalScenes
}) => {
  const glowClass =
    song.decade === '80s'
      ? 'glass-panel-glow-80s'
      : song.decade === '90s'
      ? 'glass-panel-glow-90s'
      : 'glass-panel-glow-2000s';

  return (
    <div
      className={`w-full max-w-xl mx-auto glass-panel ${glowClass} rounded-2xl p-6 sm:p-8 text-white relative z-10 transition-all duration-300 border border-white/15`}
    >
      {/* Top Header Badge & Scene Counter */}
      <div className="flex items-center justify-between gap-2 mb-4 flex-wrap">
        <div className="flex items-center space-x-2">
          <span
            className="inline-flex items-center space-x-1 px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-wider shadow-sm text-black"
            style={{ backgroundColor: song.accentColor }}
          >
            <Sparkles className="w-3 h-3" />
            <span>{song.badgeText}</span>
          </span>

          <span className="inline-flex items-center space-x-1 px-2.5 py-1 rounded-full text-xs font-medium bg-white/10 text-white/80 border border-white/10">
            <Calendar className="w-3 h-3 text-white/60" />
            <span>{song.year}</span>
          </span>
        </div>

        <div className="text-xs font-mono text-white/60 bg-black/40 px-2.5 py-1 rounded-md border border-white/10">
          Scene {sceneIndex + 1} of {totalScenes}
        </div>
      </div>

      {/* Title & Artist */}
      <div className="mb-4">
        <h2 className="text-3xl sm:text-4xl font-serif-retro font-bold text-white tracking-tight leading-tight drop-shadow-md">
          {song.title}
        </h2>
        <div className="flex items-center space-x-2 mt-1">
          <Disc className="w-4 h-4 text-white/70" />
          <p className="text-lg sm:text-xl text-white/90 font-medium tracking-wide">
            {song.artist}
          </p>
          <span className="text-white/40">•</span>
          <span className="text-sm text-white/70 italic font-sans">
            {song.genre}
          </span>
        </div>
      </div>

      {/* Nostalgic Micro-Caption */}
      <div className="mb-4 p-3.5 rounded-xl bg-white/5 border border-white/10 backdrop-blur-sm">
        <p className="text-sm sm:text-base italic text-amber-100/90 font-serif-retro leading-relaxed">
          “{song.caption}”
        </p>
      </div>

      {/* Detailed Memory Story */}
      <div className="mb-5 text-xs sm:text-sm text-white/80 leading-relaxed font-sans font-light">
        <p className="line-clamp-4 sm:line-clamp-none">
          {song.memoryStory}
        </p>
      </div>

      {/* Memory Tags */}
      <div className="flex flex-wrap gap-1.5 mb-4">
        {song.tags.map((tag) => (
          <span
            key={tag}
            className="inline-flex items-center space-x-1 px-2.5 py-0.5 rounded-md text-[11px] font-medium bg-black/30 text-white/70 border border-white/10 hover:border-white/20 transition-colors"
          >
            <Tag className="w-2.5 h-2.5 opacity-60" />
            <span>#{tag}</span>
          </span>
        ))}
      </div>

      {/* Player Integration */}
      <EmbedPlayer
        spotifyTrackId={song.spotifyTrackId}
        youtubeVideoId={song.youtubeVideoId}
        title={song.title}
        artist={song.artist}
        accentColor={song.accentColor}
      />
    </div>
  );
};
