import React, { useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import type { DecadeId } from '../types/song';
import { getDecadeMeta, getSongsByDecade } from '../data/songs';
import { DecadeHeader } from '../components/DecadeHeader';
import { SongScene } from '../components/SongScene';
import { ArrowUp } from 'lucide-react';

export const DecadePage: React.FC = () => {
  const { decadeId } = useParams<{ decadeId: string }>();
  const navigate = useNavigate();

  const validDecade: DecadeId =
    decadeId === '80s' || decadeId === '90s' || decadeId === '2000s'
      ? decadeId
      : '80s';

  useEffect(() => {
    if (!decadeId || !['80s', '90s', '2000s'].includes(decadeId)) {
      navigate('/decade/80s', { replace: true });
    }
  }, [decadeId, navigate]);

  const meta = getDecadeMeta(validDecade);
  const songs = getSongsByDecade(validDecade);

  const handleNextScene = (currentIndex: number) => {
    if (currentIndex < songs.length - 1) {
      const nextSong = songs[currentIndex + 1];
      const elem = document.getElementById(`scene-${nextSong.id}`);
      if (elem) {
        elem.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="bg-[#120e17] text-white min-h-screen">
      {/* Decade Summary Header */}
      <DecadeHeader meta={meta} songCount={songs.length} />

      {/* Vertical Full-Bleed Scenes Snap Container */}
      <div className="w-full">
        {songs.map((song, index) => (
          <SongScene
            key={song.id}
            song={song}
            index={index}
            totalSongs={songs.length}
            onNext={() => handleNextScene(index)}
          />
        ))}
      </div>

      {/* Floating Back to Top Button */}
      <div className="fixed bottom-6 right-6 z-40">
        <button
          onClick={scrollToTop}
          className="p-3 rounded-full bg-black/60 hover:bg-black/90 text-white/80 hover:text-white border border-white/20 backdrop-blur-md shadow-xl transition-all hover:scale-110 cursor-pointer group"
          title="Scroll to top of decade"
        >
          <ArrowUp className="w-5 h-5 group-hover:-translate-y-0.5 transition-transform" />
        </button>
      </div>
    </div>
  );
};
