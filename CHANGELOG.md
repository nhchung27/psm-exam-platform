# Changelog

All notable changes to this project are documented here.

---

## [1.0.0.0] - 2026-05-03

### Added
- **Knowledge review pages** — 6 CTFL v4.0.1 chapter pages accessible from the ISTQB Foundation home. Each chapter renders full markdown study notes with a scrolling sidebar TOC, reading progress bar, chapter nav, and localStorage-persisted read marks.
- **CTFL review data file** — `ctfl-review-data.js` embeds all 6 chapter markdown files as JSON-encoded strings so the app works on GitHub Pages (`file://` protocol) without a server.

### Changed
- **ISTQB Foundation home layout** — replaced emoji-based action buttons and icons with proper inline SVG (Heroicons style). ChapterCard now uses a CSS grid `1fr 1fr 1fr` for the three action buttons, preventing "Làm bài" text from wrapping to a second line.
- **Equal-height chapter cards** — added `height: 100%` and a flex spacer so action buttons always sit at the card bottom regardless of content length.

### Infrastructure
- Certification Prep Platform launched with dual-course landing page and per-course SHA-256 password gates.
- ISTQB CTFL v4.0.1 study app: quiz (41 questions), flashcards, mind map, and study schedule.
- PSM I & II mock exam platform.
- GitHub Pages root redirect for compatibility.
