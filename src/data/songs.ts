import type { Song, DecadeMeta, DecadeId } from '../types/song';

export const DECADE_METADATA: Record<DecadeId, DecadeMeta> = {
  '80s': {
    id: '80s',
    title: 'The 1980s',
    subtitle: 'Synthesizers, Neon Evenings & Mixtape Magic',
    yearsRange: '1980 – 1989',
    tagline: 'Analog synth hooks, cassette boomboxes, and sun-drenched coastal highways.',
    description: 'Step into an era defined by bold neon outlines, pencil-sketch animations, towering cassette decks, and soaring synthesizer choruses that transformed pop music forever.',
    keyVibes: ['Synthpop', 'Cassettes', 'Arcade Neon', 'MTV Era'],
    gradientBg: 'from-[#3a1c42] via-[#241335] to-[#120e17]',
    accentColor: '#ec4899',
    accentGlow: 'rgba(236, 72, 153, 0.35)',
    iconName: 'CassetteTape',
    cardImage: '/assets/scenes/80s-hero.jpg'
  },
  '90s': {
    id: '90s',
    title: 'The 1990s',
    subtitle: 'Grunge Flannels, Acoustic Rain & CD Walkmans',
    yearsRange: '1990 – 1999',
    tagline: 'Raw guitar riffs, cozy bedroom posters, and rainy afternoon radio countdowns.',
    description: 'Immerse yourself in dusty amber garage jams, britpop anthems played through foam-cushioned headphones, and warm Polaroid memories snapped on disposable film.',
    keyVibes: ['Grunge & Alt-Rock', 'Britpop', 'CD Walkmans', 'MTV Unplugged'],
    gradientBg: 'from-[#1e3a34] via-[#162725] to-[#120e17]',
    accentColor: '#2a9d8f',
    accentGlow: 'rgba(42, 157, 143, 0.35)',
    iconName: 'Disc',
    cardImage: '/assets/scenes/90s-hero.jpg'
  },
  '2000s': {
    id: '2000s',
    title: 'The 2000s',
    subtitle: 'Y2K Glow, MP3 Playlists & Stadium Anthems',
    yearsRange: '2000 – 2009',
    tagline: 'Golden sunrises, iPod clickwheels, and indie anthems echoing through summer nights.',
    description: 'Relive the dawn of digital playlists, shiny Y2K pop aesthetics, piano-driven stadium ballads, and midnight dorm room indie dance parties.',
    keyVibes: ['Y2K Pop', 'Indie Rock', 'iPod Generation', 'Stadium Ballads'],
    gradientBg: 'from-[#3c2a1e] via-[#261b15] to-[#120e17]',
    accentColor: '#f4a261',
    accentGlow: 'rgba(244, 162, 97, 0.35)',
    iconName: 'Radio',
    cardImage: '/assets/scenes/2000s-hero.jpg'
  }
};

export const SONGS: Song[] = [
  // --- 80s SONGS ---
  {
    id: 'take-on-me',
    decade: '80s',
    title: 'Take On Me',
    artist: 'a-ha',
    year: 1985,
    genre: 'Synthpop',
    caption: 'Sketch-book dreams, motorcycle races, and high-pitched vocal magic.',
    memoryStory: 'Taping the video off MTV on a blank VHS tape, trying to capture that legendary pencil-sketch animation frame by frame. Cruising through twilight with the synth riff blasting from a portable radio.',
    tags: ['Synthpop', 'Rotoscope', '1985 Classic', 'VHS Vault'],
    spotifyTrackId: '2852wFlfSp8jBvCSipTZrm',
    youtubeVideoId: 'djV11Xbc914',
    bgImage: '/assets/scenes/80s-take-on-me.jpg',
    vibeGradient: 'radial-gradient(circle at 70% 30%, rgba(236, 72, 153, 0.25), rgba(36, 19, 53, 0.95))',
    accentColor: '#ec4899',
    badgeText: 'Rotoscope Synth Classic'
  },
  {
    id: 'sweet-child-o-mine',
    decade: '80s',
    title: "Sweet Child O' Mine",
    artist: "Guns N' Roses",
    year: 1987,
    genre: 'Hard Rock',
    caption: 'Sunset Strip guitar riffs echoing across warm California highways.',
    memoryStory: 'Learning that opening guitar arpeggio on a faded electric guitar in a garage full of rock posters. The warm golden sun sinking behind palm trees as Slash’s solo reaches its climax.',
    tags: ['Hard Rock', 'Guitar Hero', 'Sunset Strip', '1987 Anthem'],
    spotifyTrackId: '7o2R9H1fL29b4E29u23h7B',
    youtubeVideoId: '1w7OgIMMRc4',
    bgImage: '/assets/scenes/80s-sweet-child.jpg',
    vibeGradient: 'radial-gradient(circle at 30% 70%, rgba(245, 158, 11, 0.25), rgba(24, 16, 32, 0.95))',
    accentColor: '#f59e0b',
    badgeText: 'Rock Riff Icon'
  },
  {
    id: 'every-breath-you-take',
    decade: '80s',
    title: 'Every Breath You Take',
    artist: 'The Police',
    year: 1983,
    genre: 'New Wave',
    caption: 'Moody monochrome jazz club aesthetics and clean guitar arpeggios.',
    memoryStory: 'Late night radio broadcasts where this haunting melody seemed to play every hour on the dot. Rain beating against the attic window while Sting’s bassline hummed through wood-cabinet speakers.',
    tags: ['New Wave', 'Post-Punk', 'Billboard #1', '1983 Classic'],
    spotifyTrackId: '152upG0W28z2yS3H5k2b5S',
    youtubeVideoId: 'OMOGaugKpzs',
    bgImage: '/assets/scenes/80s-every-breath.jpg',
    vibeGradient: 'radial-gradient(circle at 50% 50%, rgba(139, 92, 246, 0.25), rgba(18, 14, 23, 0.95))',
    accentColor: '#8b5cf6',
    badgeText: 'New Wave Masterpiece'
  },
  {
    id: 'careless-whisper',
    decade: '80s',
    title: 'Careless Whisper',
    artist: 'George Michael',
    year: 1984,
    genre: 'Pop / Soul',
    caption: 'Silhouettes, saxophone echoes, and late-night city streetlights.',
    memoryStory: 'That instantly recognizable sax intro floating across slow dances at school formals. Neon street signs reflecting off wet asphalt, captured in nostalgic film grain.',
    tags: ['Saxophone', '80s Ballad', 'Smooth Pop', '1984 Hits'],
    spotifyTrackId: '4jFMz1Z22b10k86z10Z21',
    youtubeVideoId: 'izGwDsrQ1eU',
    bgImage: '/assets/scenes/80s-careless-whisper.jpg',
    vibeGradient: 'radial-gradient(circle at 80% 20%, rgba(239, 68, 68, 0.25), rgba(26, 18, 36, 0.95))',
    accentColor: '#ef4444',
    badgeText: 'Midnight Saxophone'
  },

  // --- 90s SONGS ---
  {
    id: 'smells-like-teen-spirit',
    decade: '90s',
    title: 'Smells Like Teen Spirit',
    artist: 'Nirvana',
    year: 1991,
    genre: 'Grunge',
    caption: 'Amber fog, striped long-sleeves, and explosive garage distortion.',
    memoryStory: 'First hearing that four-chord riff blast through a friend’s Sony Walkman. It felt like the entire culture shifted overnight in a haze of amber light and rebellion.',
    tags: ['Grunge', 'Alternative', '1991 Revolution', 'Seattle Sound'],
    spotifyTrackId: '58m8C1z2912g', // standard track fallback ID
    youtubeVideoId: 'hTWKbfoikeg',
    bgImage: '/assets/scenes/90s-teen-spirit.jpg',
    vibeGradient: 'radial-gradient(circle at 20% 80%, rgba(42, 157, 143, 0.3), rgba(18, 28, 26, 0.95))',
    accentColor: '#2a9d8f',
    badgeText: 'Grunge Anthem'
  },
  {
    id: 'wonderwall',
    decade: '90s',
    title: 'Wonderwall',
    artist: 'Oasis',
    year: 1995,
    genre: 'Britpop',
    caption: 'Rainy pub windows, acoustic strums, and chorus sing-alongs.',
    memoryStory: 'Sitting in a circle at a summer campsite or warm living room floor as someone pulls out an acoustic guitar. Everyone singing every single word in unison without missing a beat.',
    tags: ['Britpop', 'Acoustic Classic', '1995 Essential', 'Manchester'],
    spotifyTrackId: '1h50519391039',
    youtubeVideoId: 'bx1Bh8gFL08',
    bgImage: '/assets/scenes/90s-wonderwall.jpg',
    vibeGradient: 'radial-gradient(circle at 60% 40%, rgba(233, 196, 106, 0.25), rgba(20, 26, 24, 0.95))',
    accentColor: '#e9c46a',
    badgeText: 'Britpop Singalong'
  },
  {
    id: 'wannabe',
    decade: '90s',
    title: 'Wannabe',
    artist: 'Spice Girls',
    year: 1996,
    genre: 'Dance-Pop',
    caption: 'Disposable cameras, high-energy dance routines, and 90s pop fever.',
    memoryStory: 'Learning the iconic dance steps in front of the living room TV. Trading Spice Girls photo stickers at recess and rewinding the single on CD until the disc was scratched.',
    tags: ['Girl Power', '90s Pop', 'CD Era', '1996 Phenomenon'],
    spotifyTrackId: '1je11094030',
    youtubeVideoId: 'gJLIiF15vEU',
    bgImage: '/assets/scenes/90s-wannabe.jpg',
    vibeGradient: 'radial-gradient(circle at 75% 75%, rgba(244, 114, 182, 0.3), rgba(28, 18, 28, 0.95))',
    accentColor: '#f472b6',
    badgeText: '90s Pop Explosion'
  },
  {
    id: 'bitter-sweet-symphony',
    decade: '90s',
    title: 'Bitter Sweet Symphony',
    artist: 'The Verve',
    year: 1997,
    genre: 'Alternative Rock / Orchestral',
    caption: 'Sweeping orchestral strings and strutting down busy city pavements.',
    memoryStory: 'Putting on oversized headphones, stepping outside into autumn air, and feeling like the protagonist of your own movie as the magnificent strings soar overhead.',
    tags: ['Orchestral Rock', 'Urban Nostalgia', '1997 Masterpiece', 'Headphone Classic'],
    spotifyTrackId: '5LE3b109482',
    youtubeVideoId: '1lyu15-y898',
    bgImage: '/assets/scenes/90s-bittersweet.jpg',
    vibeGradient: 'radial-gradient(circle at 40% 30%, rgba(59, 130, 246, 0.25), rgba(16, 20, 32, 0.95))',
    accentColor: '#3b82f6',
    badgeText: 'Orchestral Alt-Rock'
  },

  // --- 2000s SONGS ---
  {
    id: 'yellow',
    decade: '2000s',
    title: 'Yellow',
    artist: 'Coldplay',
    year: 2000,
    genre: 'Post-Britpop / Alternative',
    caption: 'Golden morning shorelines, raincoat collars up, and starry sky melodies.',
    memoryStory: 'Watching the iconic video on early morning music channels: Chris Martin walking along a damp beach as dawn broke into bright amber light. A song that felt like sunrise in sound.',
    tags: ['Golden Dawn', 'Stadium Anthem', '2000 Prelude', 'Acoustic Glow'],
    spotifyTrackId: '383210948',
    youtubeVideoId: 'yKNxeF4KMsY',
    bgImage: '/assets/scenes/2000s-yellow.jpg',
    vibeGradient: 'radial-gradient(circle at 50% 40%, rgba(244, 162, 97, 0.3), rgba(28, 20, 16, 0.95))',
    accentColor: '#f4a261',
    badgeText: 'Golden Sunrise Anthem'
  },
  {
    id: 'mr-brightside',
    decade: '2000s',
    title: 'Mr. Brightside',
    artist: 'The Killers',
    year: 2004,
    genre: 'Indie Rock',
    caption: 'Velvet curtains, sparkling champagne glasses, and electric indie energy.',
    memoryStory: 'The song that instantly turned any 2000s dorm room or indie club into a packed, shouting choir. The fast-paced guitar arpeggios that defined a whole generation’s weekends.',
    tags: ['Indie Rock', '2004 Anthem', 'Clickwheel Playlist', 'Floor Filler'],
    spotifyTrackId: '003L1094',
    youtubeVideoId: 'gGdGFtwCNBE',
    bgImage: '/assets/scenes/2000s-mr-brightside.jpg',
    vibeGradient: 'radial-gradient(circle at 70% 30%, rgba(168, 85, 247, 0.3), rgba(26, 16, 32, 0.95))',
    accentColor: '#a855f7',
    badgeText: 'Indie Rock Icon'
  },
  {
    id: 'toxic',
    decade: '2000s',
    title: 'Toxic',
    artist: 'Britney Spears',
    year: 2003,
    genre: 'Electro-Pop',
    caption: 'Futuristic Y2K glamour, sharp string hooks, and high-tech pop thrillers.',
    memoryStory: 'Loading the MP3 onto a first-generation iPod clickwheel and marveling at those sharp, Bollywood-sampled violin riffs and futuristic synth production that redefined pop.',
    tags: ['Y2K Pop', 'Grammy Winner', '2003 Classic', 'iPod Generation'],
    spotifyTrackId: '6E109485',
    youtubeVideoId: 'LOZuxwOc7OB',
    bgImage: '/assets/scenes/2000s-toxic.jpg',
    vibeGradient: 'radial-gradient(circle at 30% 70%, rgba(6, 182, 212, 0.3), rgba(16, 28, 34, 0.95))',
    accentColor: '#06b6d4',
    badgeText: 'Y2K Electro-Pop'
  },
  {
    id: 'hey-ya',
    decade: '2000s',
    title: 'Hey Ya!',
    artist: 'Outkast',
    year: 2003,
    genre: 'Funk / Pop',
    caption: 'Polaroid pictures, energetic hand-claps, and unstoppable feel-good rhythm.',
    memoryStory: '“Shake it like a Polaroid picture!” Every birthday party, school lounge, and radio countdown in 2003–2004 was dominated by André 3000’s green suit and infectious beat.',
    tags: ['Funk Pop', 'Polaroid Era', '2003 Hit', 'Feel Good'],
    spotifyTrackId: '2pp1094',
    youtubeVideoId: 'PWgvGjahvGE',
    bgImage: '/assets/scenes/2000s-hey-ya.jpg',
    vibeGradient: 'radial-gradient(circle at 60% 40%, rgba(34, 197, 94, 0.3), rgba(18, 28, 20, 0.95))',
    accentColor: '#22c55e',
    badgeText: 'Polaroid Funk Classic'
  }
];

export function getSongsByDecade(decade: DecadeId): Song[] {
  return SONGS.filter((song) => song.decade === decade);
}

export function getSongById(id: string): Song | undefined {
  return SONGS.find((song) => song.id === id);
}

export function getDecadeMeta(decade: DecadeId): DecadeMeta {
  return DECADE_METADATA[decade];
}
