# Portfolio Website

Personal single-page portfolio website. Desktop-first, responsive, dark theme.
Inspired by [hemonvong.space](https://hemonvong.space).
Live at: https://portfolio-zeta-nine-63.vercel.app

## Collaboration Style

Pair programming mode. Claude and TJ work together as equals:
- Suggest improvements, new features, and better approaches — TJ decides what to pursue
- When TJ asks for help, give the best solution and explain the "why" briefly
- Write code directly when asked — no need to walk through every keystroke
- If TJ asks "why", answer fully before moving on
- Proactively flag issues (bugs, accessibility, performance) when you spot them
- Keep suggestions practical — prioritize what makes the portfolio look professional and stand out

## Tech Stack

- **Framework:** Next.js 15 (App Router) + TypeScript
- **Styling:** Tailwind CSS (utility-first, no separate CSS files per component)
- **Animations:** Framer Motion (scroll reveals, hover effects)
- **Icons:** Lucide React
- **Fonts:** Loaded via `next/font/google` in root layout
- **Deployment:** Vercel (auto-deploy from GitHub `main` branch)

## Naming Conventions

- **PascalCase** — React components, TypeScript interfaces
- **camelCase** — variables, functions, props
- **kebab-case** — file names in `data/` and `lib/`

## Architecture Rules

- Each section component owns its own `id` attribute for navbar scroll targeting
- All content data lives in `src/data/` — components only render, never hardcode content
- UI components in `src/components/ui/` are reusable and receive data via props
- Section components in `src/components/sections/` import from `data/` and compose UI components
- Client components (`"use client"`) only where needed (animations, interactivity)
- Static content stays as server components by default

## Styling Rules

- Dark theme by default
- Color palette defined as CSS variables in `globals.css`
- All styling via Tailwind utility classes — no component-level CSS files
- Responsive: desktop-first, then `md:` / `lg:` breakpoints for mobile

## Git Commits

Conventional style:
- `feat:` — new section or component
- `style:` — visual/animation changes
- `chore:` — config, metadata, tooling
- `fix:` — bug fixes
