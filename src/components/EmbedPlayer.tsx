import React, { useState } from 'react';
import { Music, Play, ExternalLink } from 'lucide-react';

const YoutubeIcon: React.FC<{ className?: string }> = ({ className }) => (
  <svg className={className} viewBox="0 0 24 24" fill="currentColor">
    <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
  </svg>
);

interface EmbedPlayerProps {

  spotifyTrackId: string;
  youtubeVideoId: string;
  title: string;
  artist: string;
  accentColor?: string;
}

export const EmbedPlayer: React.FC<EmbedPlayerProps> = ({
  spotifyTrackId,
  youtubeVideoId,
  title,
  artist,
  accentColor = '#e07a5f'
}) => {
  const [activeTab, setActiveTab] = useState<'youtube' | 'spotify'>('youtube');
  const [isLoading, setIsLoading] = useState(true);

  return (
    <div className="w-full mt-4 rounded-xl overflow-hidden bg-black/40 border border-white/10 p-3 shadow-inner backdrop-blur-md">
      {/* Switcher Header */}
      <div className="flex items-center justify-between mb-3 border-b border-white/10 pb-2.5">
        <div className="flex items-center space-x-2">
          <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-semibold uppercase tracking-wider text-white/90 bg-white/10 border border-white/15">
            Player Embed
          </span>
          <span className="text-xs text-white/60 hidden sm:inline">
            Listen to {title}
          </span>
        </div>

        {/* Tab Buttons */}
        <div className="flex items-center space-x-1 bg-black/50 p-1 rounded-lg border border-white/10">
          <button
            onClick={() => {
              setActiveTab('youtube');
              setIsLoading(true);
            }}
            className={`flex items-center space-x-1.5 px-3 py-1 rounded-md text-xs font-medium transition-all duration-200 ${
              activeTab === 'youtube'
                ? 'bg-[#ff0000] text-white shadow-md'
                : 'text-white/70 hover:text-white hover:bg-white/10'
            }`}
          >
            <YoutubeIcon className="w-3.5 h-3.5" />
            <span>YouTube</span>
          </button>

          <button
            onClick={() => {
              setActiveTab('spotify');
              setIsLoading(true);
            }}
            className={`flex items-center space-x-1.5 px-3 py-1 rounded-md text-xs font-medium transition-all duration-200 ${
              activeTab === 'spotify'
                ? 'bg-[#1db954] text-white shadow-md'
                : 'text-white/70 hover:text-white hover:bg-white/10'
            }`}
          >
            <Music className="w-3.5 h-3.5" />
            <span>Spotify</span>
          </button>
        </div>
      </div>

      {/* Embed Frame Container */}
      <div className="relative w-full rounded-lg overflow-hidden bg-black/60 min-h-[160px] sm:min-h-[190px] flex items-center justify-center">
        {/* Loading Spinner */}
        {isLoading && (
          <div className="absolute inset-0 flex flex-col items-center justify-center bg-[#17111c]/90 z-10 space-y-2">
            <div
              className="w-8 h-8 border-2 border-t-transparent rounded-full animate-spin"
              style={{ borderColor: `${accentColor} transparent ${accentColor} ${accentColor}` }}
            />
            <span className="text-xs text-white/70 font-sans tracking-wide">
              Loading {activeTab === 'youtube' ? 'YouTube' : 'Spotify'} embed...
            </span>
          </div>
        )}

        {/* YouTube Iframe */}
        {activeTab === 'youtube' && (
          <iframe
            src={`https://www.youtube-nocookie.com/embed/${youtubeVideoId}?autoplay=0&rel=0&modestbranding=1`}
            title={`${title} by ${artist} on YouTube`}
            className="w-full aspect-video sm:h-[190px] rounded-lg border-0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            onLoad={() => setIsLoading(false)}
          />
        )}

        {/* Spotify Iframe */}
        {activeTab === 'spotify' && (
          <iframe
            src={`https://open.spotify.com/embed/track/${spotifyTrackId}?utm_source=generator&theme=0`}
            title={`${title} by ${artist} on Spotify`}
            className="w-full h-[152px] rounded-lg border-0"
            allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
            loading="lazy"
            onLoad={() => setIsLoading(false)}
          />
        )}
      </div>

      {/* External Direct Links */}
      <div className="flex items-center justify-between mt-2.5 px-1 text-[11px] text-white/50">
        <span className="flex items-center space-x-1">
          <Play className="w-3 h-3 text-emerald-400 animate-pulse" />
          <span>Stream directly from official provider</span>
        </span>

        <a
          href={
            activeTab === 'youtube'
              ? `https://www.youtube.com/watch?v=${youtubeVideoId}`
              : `https://open.spotify.com/track/${spotifyTrackId}`
          }
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-white/90 underline inline-flex items-center space-x-1 transition-colors"
        >
          <span>Open in {activeTab === 'youtube' ? 'YouTube' : 'Spotify'}</span>
          <ExternalLink className="w-2.5 h-2.5" />
        </a>
      </div>
    </div>
  );
};
