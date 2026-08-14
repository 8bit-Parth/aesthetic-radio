export type DecadeId = '80s' | '90s' | '2000s';

export interface Song {
  id: string;
  decade: DecadeId;
  title: string;
  artist: string;
  year: number;
  genre: string;
  caption: string;
  memoryStory: string;
  tags: string[];
  spotifyTrackId: string; // Spotify Track ID (e.g. 21B4GebMuYy2uHk9Yk5b)
  youtubeVideoId: string; // YouTube Video ID (e.g. djV11Xbc914)
  bgImage: string;        // Path to illustrated background image
  vibeGradient: string;   // CSS radial/linear gradient fallback matching the vibe
  accentColor: string;    // Hex code for badges/accents
  badgeText: string;      // Nostalgic badge (e.g. "MTV Gold Era", "Cassette Rewind")
}

export interface DecadeMeta {
  id: DecadeId;
  title: string;
  subtitle: string;
  yearsRange: string;
  tagline: string;
  description: string;
  keyVibes: string[];
  gradientBg: string;
  accentColor: string;
  accentGlow: string;
  iconName: string;
  cardImage: string;
}
