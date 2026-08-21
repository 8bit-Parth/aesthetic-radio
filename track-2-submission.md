---
title: "Smash Story: How I Hunted Down a 45% Idle CPU Leak in an Interactive Retro Music App"
published: true
tags: sentry, webdev, performance, javascript
cover_image: https://raw.githubusercontent.com/8bit-Parth/aesthetic-radio/main/track2_cover.jpg
canonical_url: https://github.com/8bitparth/english-music-nostalgia
---

*This is a submission for [DEV's Summer Bug Smash: Smash Stories](https://dev.to/bugsmash) powered by [Sentry](https://sentry.io/).*

## The Scene of the Crime

I was testing my retro music web app on my laptop when suddenly the fans started spinning up like a jet engine.

The app is an interactive experience with cassette decks, MP3 players, and canvas-based visual effects (floating dust particles, CRT scanlines, and an audio visualizer). 

Visually, everything looked great. But when I opened Chrome DevTools, I saw:
- **CPU Usage:** Stuck at **45%** on an idle tab.
- **Memory:** Steadily climbing by ~15MB every minute.
- Even when I switched to another browser tab, the CPU was still maxed out.

- 🔗 **GitHub Repository:** [github.com/8bitparth/english-music-nostalgia](https://github.com/8bitparth/english-music-nostalgia)

---

## Hunting Down the Leak

### Step 1: Checking React Rerenders
At first, I thought it was a React re-render loop. I opened React DevTools Profiler, but components were only re-rendering once every 500ms for the progress bar. That accounted for less than 2% of the CPU.

### Step 2: Isolating the Canvas Layers
I started turning off canvas effects one by one:
1. Disabled the CRT filter → CPU dropped to ~38%.
2. Disabled the dust particles → CPU dropped to ~25%.
3. Disabled the audio visualizer → CPU immediately dropped to **1.2%**.

The problem was clear: **Uncontrolled `requestAnimationFrame` loops running continuously, even when music was paused or the tab was hidden.**

---

## What Was Going Wrong?

1. **No Tab Visibility Checks:** The animation loops were firing 60 times a second even when the user switched tabs or paused the song.
2. **Object Allocations Inside 60 FPS Loops:** The particles loop was generating new color strings (`rgba(...)`) on every single frame, creating constant garbage collection overhead.
3. **Stacked Animation Frames:** Resizing the window or toggling modes started new `requestAnimationFrame` loops without cancelling the old ones.

---

## The Fix

I refactored the canvas loops to pause whenever the tab is hidden or music is paused:

```typescript
useEffect(() => {
  let animationId: number;
  let isRunning = true;

  const render = () => {
    // Only run if tab is visible and audio is actively playing
    if (!isRunning || document.hidden || !isPlaying) return;

    // Draw frame...
    animationId = requestAnimationFrame(render);
  };

  const handleVisibilityChange = () => {
    if (!document.hidden && isPlaying) {
      cancelAnimationFrame(animationId);
      animationId = requestAnimationFrame(render);
    }
  };

  document.addEventListener("visibilitychange", handleVisibilityChange);
  if (isPlaying) animationId = requestAnimationFrame(render);

  return () => {
    isRunning = false;
    cancelAnimationFrame(animationId);
    document.removeEventListener("visibilitychange", handleVisibilityChange);
  };
}, [isPlaying]);
```

---

## The Results

- **Idle CPU:** Dropped from **45% down to 0.8%**.
- **Background Tab CPU:** Completely suspended (**0%**).
- **Battery & Memory:** Memory stays flat, and no more runaway fan noise.

---

## What I Learned

1. Always hook canvas animations to `visibilitychange`.
2. Avoid string concatenations or object creation inside 60 FPS render loops.
3. Monitor performance regressions early so your users don't suffer from silent battery drain.

---

## Best Use of Google AI

I used **Google AI (Gemini)** during performance profiling and optimization:

- I fed the flame chart profiles and canvas animation loops into Gemini to analyze why the render thread wasn't yielding.
- It pointed out that creating temporary color strings and array allocations inside a 60 FPS animation loop was causing aggressive V8 garbage collection cycles.
- It recommended binding a centralized `document.addEventListener("visibilitychange")` handler to gracefully freeze background animation frames when switching browser tabs.
