# Practice Full‑Stack Repository

This repository is a professional, structured playground for full‑stack development. It focuses on building strong frontend fundamentals and sets the foundation for future backend expansion (APIs, databases, authentication, and deployment). Each `partX` directory contains a self‑contained mini‑project designed to practice modern web techniques.

## Overview

- Purpose: hands‑on practice across the stack, starting with the frontend.
- Scope today: HTML, CSS/SCSS, and vanilla JavaScript exercises organized by parts.
- Future scope: Node.js/Express services, REST APIs, database integration (PostgreSQL/MongoDB), auth, and CI/CD.

## Tech Stack

- Frontend: HTML5, CSS3/SCSS, JavaScript (ES6+)
- Tooling (optional): Sass (`.scss` files present in several parts)
- Assets: fonts, images, audio for UI and interaction practice

## Repository Structure

The project is organized into self‑contained practice modules:

- `part1` … `part23`: standalone mini‑projects with `index.html`, `styles.css`/`styles.scss`, and optional `script.js`
- Examples:
  - SCSS usage and source maps: `part7`, `part8`, `part21`, `part22`
  - Interactive JS exercises: `part9`, `part10`, `part11` (multiple sub‑exercises), `part12`–`part23`
  - Asset‑heavy UI practice: `part4` (logos), `part5`–`part7` (images), `part22` (audio)

This modular layout encourages focused iteration without breaking other parts.

## Getting Started

You can open any part directly in a browser:

1. Navigate to a part directory (e.g., `part14`).
2. Open `index.html` in your browser.

For a local static server (recommended for correct asset paths and CORS):

- Use a simple server of your choice, for example:
  - Python: `python3 -m http.server` (run inside a part directory and open `http://localhost:8000/`)
  - VS Code: the “Live Server” extension (right‑click `index.html` → “Open with Live Server”)

## Working with SCSS (Optional)

Some parts include `.scss` files alongside generated `.css` and `.css.map`. If you want to edit SCSS:

1. Install Sass: `npm i -g sass` (or use Dart Sass installer).
2. Compile once: `sass styles.scss styles.css`
3. Or watch for changes: `sass --watch styles.scss:styles.css`

SCSS usage is scoped per part; compiled CSS is already present for immediate preview.

## Practice Areas

- Semantic HTML and accessible structure
- Responsive layout: Flexbox, Grid, fluid typography
- Styling systems: variables, mixins, modular styles (via SCSS)
- DOM scripting: events, state, animations, component patterns
- Asset handling: fonts, images, audio

Upcoming full‑stack additions (roadmap):

- Backend APIs with Node.js/Express
- Data persistence with PostgreSQL/MongoDB
- Authentication and authorization flows
- Testing (unit/integration) and CI/CD
- Deployment to a platform (e.g., Render, Vercel, or Fly.io)

## Development Tips

- Keep each part isolated; treat it as its own mini‑app.
- Start simple, iterate in small steps, and document your learnings per part.
- Prefer progressive enhancement: core functionality first, then polish.

## Contributing

This is a personal practice repository. If you want to collaborate:

- Fork the repo, create a feature branch, and open a pull request.
- Keep changes scoped to a single part or add a new `part24`, `part25`, etc.

## License

No explicit license is set. If you intend to reuse code, consider adding a license file (e.g., MIT) or seek permission.

## Acknowledgements

Thanks to open‑source communities and tooling that make iterative practice effective (Sass, VS Code extensions, simple static servers). Future backend modules will acknowledge their respective ecosystems.

