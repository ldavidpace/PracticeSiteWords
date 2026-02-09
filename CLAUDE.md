# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

- **Dev server:** `npm run dev`
- **Build:** `npm run build` (runs `tsc && vite build`)
- **Preview production build:** `npm run preview`
- **Type-check only:** `npx tsc --noEmit`

## Architecture

This is a React + TypeScript app built with Vite. It helps first-graders practice reading sight words by matching words to emoji pictures.

### Game flow
1. The app shuffles all sight word entries and presents them one at a time.
2. Each round shows a sight word (spoken aloud via Web Speech API) and four emoji picture buttons.
3. Clicking any picture speaks its label aloud — this helps with ambiguous pictures.
4. After selecting, feedback is shown (correct/wrong) and the user advances.
5. After all words, a final score screen offers replay.

### Key files
- `src/sightWords.ts` — Data: array of `SightWordEntry` objects, each with a word, 4 picture options (emoji + label), and the correct answer index. Add new words here.
- `src/speak.ts` — Thin wrapper around the Web Speech API (`SpeechSynthesisUtterance`).
- `src/App.tsx` — Single-component app: game state, shuffle logic, picture click handler, feedback/advance flow.
- `src/style.css` — All styling. Kid-friendly pastel gradient background, large tap targets, responsive max-width 600px layout.

### Conventions
- No component library or CSS framework — plain CSS with class names.
- No router — single-page, single-view app.
- Emoji are used as picture representations (no external image assets needed).
- Speech rate is set slightly slow (0.85) for young readers.
