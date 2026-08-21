---
title: "How I Fixed Ghost Audio & Race Conditions in My Retro Music Player"
published: true
tags: sentry, webdev, react, javascript
cover_image: https://raw.githubusercontent.com/8bit-Parth/aesthetic-radio/main/track1_cover.jpg
canonical_url: https://github.com/8bitparth/english-music-nostalgia
---

*This is a submission for [DEV's Summer Bug Smash: Clear the Lineup](https://dev.to/bugsmash) powered by [Sentry](https://sentry.io/).*

## Project Overview

I've been working on **English Music Nostalgia**, a fun side project built with **Next.js (App Router), React 19, TypeScript, and Tailwind CSS**. 

The goal was to recreate the physical feeling of listening to music in the past. It features an interactive **90s Cassette Deck** (with rotating reels), a **2000s MP3 Player** (with a classic click wheel), and ambient scenes like a rainy bedroom and cyber desk.

To play the songs, I integrated the **YouTube IFrame API** in a global React context (`PlaybackContext`) so the audio stays synchronized with the retro UI controls and visualizers.

- 🔗 **GitHub Repository:** [github.com/8bitparth/english-music-nostalgia](https://github.com/8bitparth/english-music-nostalgia)

---

## Bug Fix or Performance Improvement

### The Glitch: Ghost Audio & Random Player Crashes

While testing the player, I noticed two really frustrating bugs when clicking around quickly:

1. **Ghost Audio:** When skipping songs rapidly or switching between the 90s and 2000s modes, the previous song wouldn't always stop. The new song would start playing while the previous one continued in the background, creating a messy overlap of two songs playing at once.
2. **Sudden Crashes (`TypeError: loadVideoById is not a function`):** If a user clicked "Play" or "Next" right after the page loaded before the YouTube IFrame API script had finished mounting, the app would crash with an unhandled TypeError.

---

## Code

### The Problem in the Old Code:

The original code assumed `playerRef.current` was always ready and didn't guard against async race conditions or unmounted components:

```typescript
// ❌ Problem: Calling methods on playerRef before it was ready or without stopping previous stream
const playSong = (song: Song) => {
  setCurrentSong(song);
  setElapsedTime(0);
  setIsPlaying(true);

  if (playerRef.current?.loadVideoById) {
    playerRef.current.loadVideoById(song.youtubeId);
    playerRef.current.playVideo();
  }
};

window.onYouTubeIframeAPIReady = () => {
  playerRef.current = new window.YT.Player("youtube-player", {
    events: {
      onStateChange: (event: { data: number }) => {
        if (event.data === 0) {
          nextSongRef.current?.();
        }
      },
    },
  });
};
```

### The Fix:

I refactored the playback lifecycle with a queue system and safe teardown:

```typescript
// ✅ Fix: Pending action queue, explicit video stop, and mounted checks
const isPlayerReadyRef = useRef<boolean>(false);
const pendingSongRef = useRef<Song | null>(null);

const playSong = useCallback((song: Song) => {
  setCurrentSong(song);
  setElapsedTime(0);
  setIsPlaying(true);

  // If the YouTube player isn't fully ready yet, queue the song
  if (!isPlayerReadyRef.current || !playerRef.current?.loadVideoById) {
    pendingSongRef.current = song;
    return;
  }

  try {
    // Explicitly stop previous stream to eliminate ghost audio
    if (typeof playerRef.current.stopVideo === "function") {
      playerRef.current.stopVideo();
    }
    playerRef.current.loadVideoById({
      videoId: song.youtubeId,
      startSeconds: 0,
    });
  } catch (err) {
    console.error("Playback error:", err);
  }
}, []);

useEffect(() => {
  let isMounted = true;

  const initPlayer = () => {
    if (!window.YT || !window.YT.Player) return;

    playerRef.current = new window.YT.Player("youtube-player", {
      height: "1",
      width: "1",
      playerVars: { autoplay: 0, controls: 0, disablekb: 1, fs: 0 },
      events: {
        onReady: () => {
          if (!isMounted) return;
          isPlayerReadyRef.current = true;
          setIsPlayerReady(true);

          // Play queued song if user clicked play before API was ready
          if (pendingSongRef.current) {
            playSong(pendingSongRef.current);
            pendingSongRef.current = null;
          }
        },
        onStateChange: (event: { data: number }) => {
          if (!isMounted) return;
          if (event.data === 1) setIsPlaying(true);
          else if (event.data === 2) setIsPlaying(false);
          else if (event.data === 0) {
            setIsPlaying(false);
            nextSongRef.current?.();
          }
        },
      },
    });
  };

  if (window.YT && window.YT.Player) {
    initPlayer();
  } else {
    window.onYouTubeIframeAPIReady = initPlayer;
  }

  return () => {
    isMounted = false;
    if (playerRef.current?.destroy) {
      playerRef.current.destroy();
    }
  };
}, [playSong]);
```

---

## My Improvements

- **Song Queueing (`pendingSongRef`):** Instead of dropping user clicks or throwing errors on fast page interactions, clicks are queued and automatically played as soon as the YouTube API signals `onReady`.
- **Flushing Previous Audio:** Calling `stopVideo()` before `loadVideoById()` completely stopped the overlapping ghost audio.
- **Cleanup & Mounting Guards:** Added `isMounted` checks and clean `player.destroy()` on unmount to prevent memory leaks and zombie event listeners.

---

## Best Use of Sentry

I used Sentry to catch and diagnose the issue:

1. **Error Monitoring:** Sentry flagged `TypeError: playerRef.current.loadVideoById is not a function`, pointing directly to the line in `PlaybackContext.tsx`.
2. **Session Replay:** Watching the session replays helped me see what users were actually doing—clicking "Next Track" multiple times within the first second of landing on the page.
3. **Breadcrumbs:** The breadcrumbs showed the exact timeline: the user's click event was firing ~300ms before the YouTube API script finished loading.

---

## Best Use of Google AI

I used **Google AI (Gemini)** as a debugging partner to work through this race condition:

- I shared my React 19 component structure and the Sentry error trace with Gemini.
- It suggested using a ref-based pending queue (`pendingSongRef`) combined with an `isMounted` guard so that user clicks wouldn't get lost during the iframe handshake.
- It also helped review the `useEffect` cleanup logic to make sure the interval timers and player instances wouldn't leak memory.
