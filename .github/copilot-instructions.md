# Copilot / AI Agent Instructions

Purpose: quick, actionable guidance for editing this Vite + React + TypeScript single-page app.

- Tech stack: React 19, TypeScript, Vite, Framer Motion, lucide-react. Dev scripts: `npm run dev`, `npm run build`, `npm run preview` (see package.json).
- App entry: `index.tsx` mounts `App` which composes UI from `components/`.
- Shared data: update content in `constants.tsx` (exports `WEDDING_DETAILS`, `SECTIONS`, `ICONS`). Many UI values (date, contact, labels, icons) are sourced here and passed as props.

Architecture notes
- Single-page app: `index.tsx` → `App.tsx` → `components/*`. Keep layout and composition inside `App.tsx`.
- Presentation-first components: Most `components/*.tsx` are small, anim-driven React function components. Use `framer-motion` for entrance/exit animations; avoid removing animations unless intentionally simplifying UX.
- Data flow: top-down props. To change copy or the wedding date, edit `constants.tsx` rather than hunting multiple components.

Developer workflows
- Install: `npm install`
- Dev: `npm run dev` (starts Vite)
- Build: `npm run build` then `npm run preview` to locally preview production build.
- No test runner configured in this repo; add tests only if you create test config and scripts.

Project-specific conventions
- Styling: components use utility class names (Tailwind-like). Confirm CSS config before changing classnames globally.
- Shared constants: centralize content in `constants.tsx`. Example: change date:

  - Edit `WEDDING_DETAILS.date` in `constants.tsx` (use a JS `Date` object). `Countdown` receives `targetDate={WEDDING_DETAILS.date}`.

  - Update contact numbers in `constants.tsx`: `whatsappNumber` (programmatic), `displayNumber` (UI string).

- Service worker / PWA: `index.tsx` registers `/sw.js`. Ensure `sw.js` remains at repo/public root if editing registration.
- Icons: `lucide-react` components are composed in `constants.tsx` as `ICONS` and used throughout.

Integration & externals to watch
- `sw.js` (PWA) — registered on window load in `index.tsx`.
- No backend is present in repo. README refers to `.env.local` and `GEMINI_API_KEY` (likely leftover). Search the codebase before adding env-driven changes.

Quick-edit examples
- Change hero copy: edit `constants.tsx` and `components/Hero.tsx` for layout tweaks.
- Add a new section: add an entry to `SECTIONS` in `constants.tsx`, create a component under `components/`, and include it in `App.tsx` ordering.

Code quality hints for agents
- Preserve animation timings and responsive structure when refactoring (visual regressions are easy to introduce).
- Components often accept `any` props; prefer adding narrow TypeScript types in `types.ts` if you touch multiple files.
- Keep imports explicit (use named imports from `constants.tsx` rather than re-copying literals).

Where to look first
- [index.tsx](index.tsx) — app bootstrap and SW registration
- [App.tsx](App.tsx) — main composition and page flow
- [constants.tsx](constants.tsx) — authoritative content & icons
- [components/](components/) — UI implementation (Hero, Countdown, Details, RSVP, etc.)

When unsure, ask the maintainer which visual or text change should be prioritized; many values are intentional for layout and animation.

If this file needs edits or you want more examples (component conventions, props types), tell me which area to expand.
