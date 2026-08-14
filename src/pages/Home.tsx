import React from 'react';
import { DECADE_METADATA, getSongsByDecade, SONGS } from '../data/songs';
import { DecadeCard } from '../components/DecadeCard';
import { Radio, Disc, Sparkles, Compass, Play } from 'lucide-react';
import { NavLink } from 'react-router-dom';

export const Home: React.FC = () => {
  const decades = Object.values(DECADE_METADATA);

  return (
    <div className="min-h-screen bg-[#120e17] text-white pt-20 pb-16">
      {/* Background Decorative Ambient Glows */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none z-0">
        <div className="absolute top-1/4 -left-32 w-96 h-96 rounded-full bg-pink-600/10 blur-[130px]" />
        <div className="absolute top-1/3 right-0 w-[500px] h-[500px] rounded-full bg-teal-600/10 blur-[150px]" />
        <div className="absolute bottom-1/4 left-1/3 w-96 h-96 rounded-full bg-amber-600/10 blur-[120px]" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* HERO SECTION */}
        <section className="py-12 sm:py-20 text-center max-w-4xl mx-auto flex flex-col items-center">
          {/* Top Vintage Badge */}
          <div className="inline-flex items-center space-x-2 px-4 py-1.5 rounded-full bg-amber-500/10 border border-amber-500/30 text-amber-300 text-xs font-mono uppercase tracking-widest mb-6 animate-float-slow">
            <Radio className="w-4 h-4 text-amber-400" />
            <span>Interactive Scene-Based Walkthrough</span>
          </div>

          {/* Main Title */}
          <h1 className="text-5xl sm:text-7xl lg:text-8xl font-serif-retro font-extrabold tracking-tight leading-[1.05] text-white drop-shadow-lg">
            Echoes <span className="text-amber-400 italic font-light">&</span> Vinyl
          </h1>

          {/* Tagline */}
          <p className="mt-6 text-xl sm:text-2xl text-amber-100/90 font-serif-retro italic max-w-2xl leading-relaxed">
            “Every iconic track holds a story. Step inside the illustrated memories of English music history.”
          </p>

          <p className="mt-4 text-sm sm:text-base text-white/70 font-sans max-w-xl font-light leading-relaxed">
            Choose a decade below to launch an immersive vertical scroll through full-bleed illustrated scenes, nostalgic memory captions, and official audio embeds.
          </p>

          {/* Quick Stats Bar */}
          <div className="mt-10 flex items-center justify-center gap-6 sm:gap-12 py-4 px-8 rounded-2xl bg-black/40 border border-white/10 backdrop-blur-md">
            <div className="text-center">
              <span className="block text-2xl font-serif-retro font-bold text-amber-400">3</span>
              <span className="text-[11px] font-mono text-white/60 uppercase tracking-wider">Decades</span>
            </div>
            <div className="w-px h-8 bg-white/10" />
            <div className="text-center">
              <span className="block text-2xl font-serif-retro font-bold text-teal-400">{SONGS.length}</span>
              <span className="text-[11px] font-mono text-white/60 uppercase tracking-wider">Iconic Scenes</span>
            </div>
            <div className="w-px h-8 bg-white/10" />
            <div className="text-center">
              <span className="block text-2xl font-serif-retro font-bold text-pink-400">100%</span>
              <span className="text-[11px] font-mono text-white/60 uppercase tracking-wider">Static & Free</span>
            </div>
          </div>
        </section>

        {/* DECADE SELECTOR GRID */}
        <section className="py-8">
          <div className="flex items-center justify-between mb-8 border-b border-white/10 pb-4">
            <div>
              <h2 className="text-2xl sm:text-3xl font-serif-retro font-bold text-white flex items-center space-x-2">
                <Compass className="w-6 h-6 text-amber-400" />
                <span>Select a Decade Walkthrough</span>
              </h2>
              <p className="text-xs sm:text-sm text-white/60 font-sans">
                Click any decade card to enter its full-bleed scene-by-scene journey.
              </p>
            </div>
          </div>

          {/* Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {decades.map((meta) => {
              const count = getSongsByDecade(meta.id).length;
              return <DecadeCard key={meta.id} meta={meta} songCount={count} />;
            })}
          </div>
        </section>

        {/* FEATURED SPOTLIGHT / NOSTALGIA TEASER */}
        <section className="mt-16 py-12 px-6 sm:px-10 rounded-3xl glass-panel relative overflow-hidden border border-white/15">
          <div className="absolute top-0 right-0 w-80 h-80 bg-gradient-to-br from-amber-500/20 to-purple-600/20 rounded-full filter blur-[80px] pointer-events-none" />

          <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-8">
            <div className="max-w-xl">
              <div className="flex items-center space-x-2 text-xs font-mono uppercase tracking-widest text-amber-300 mb-2">
                <Sparkles className="w-4 h-4" />
                <span>Why Illustrated Scenes?</span>
              </div>
              <h3 className="text-3xl sm:text-4xl font-serif-retro font-bold text-white leading-tight">
                Music is more than audio — it’s a time machine.
              </h3>
              <p className="mt-3 text-sm text-white/70 font-sans font-light leading-relaxed">
                Rather than scrolling through a bland list of links, our walkthrough pairs every song with a dedicated illustrated backdrop, warm memory notes, and seamless embedded players.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 w-full md:w-auto">
              <NavLink
                to="/decade/80s"
                className="px-6 py-3.5 rounded-xl bg-gradient-to-r from-pink-500 to-purple-600 text-white font-bold text-sm tracking-wide shadow-lg shadow-pink-500/25 hover:brightness-110 transition-all flex items-center justify-center space-x-2"
              >
                <Play className="w-4 h-4 fill-current" />
                <span>Start with 80s Synth</span>
              </NavLink>

              <NavLink
                to="/decade/90s"
                className="px-6 py-3.5 rounded-xl bg-white/10 hover:bg-white/20 text-white font-semibold text-sm tracking-wide border border-white/15 transition-all flex items-center justify-center space-x-2"
              >
                <Disc className="w-4 h-4 text-teal-400" />
                <span>Explore 90s Grunge</span>
              </NavLink>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};
