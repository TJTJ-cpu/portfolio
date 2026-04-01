# Portfolio Website

Personal single-page portfolio website. Desktop-first, responsive, dark theme.
Inspired by [hemonvong.space](https://hemonvong.space).

## Collaboration Style

Claude teaches, TJ does. For each phase:
1. Explain the goal and why it matters
2. Walk through one step at a time — explain what we're about to do and why before doing it
3. TJ types the code/commands himself
4. After each step, check understanding before moving on
5. Do NOT move to the next phase until TJ confirms he understands

Never do multiple steps at once. Never skip explanations to save time. If TJ asks "why", answer fully before continuing. The goal is learning, not shipping fast.

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

Conventional style, same as Project Ethos:
- `feat:` — new section or component
- `style:` — visual/animation changes
- `chore:` — config, metadata, tooling
- `fix:` — bug fixes

---

## Build Phases

Work through one phase at a time. Do not skip ahead. Each phase has a goal, steps, and a checkpoint. Create folders and files only when the current phase needs them — never pre-create empty structure.

---

### Phase 1 — Scaffold & Understand the Base

**Goal:** Get a working Next.js app running locally. Understand what every generated file does.

**Steps:**
1. Run `npx create-next-app@latest . --typescript --tailwind --app --src-dir`
2. Run `npm run dev` and open `http://localhost:3000`
3. Walk through every generated file and explain its purpose:
   - `src/app/layout.tsx` — what is a root layout? Why does Next.js require one?
   - `src/app/page.tsx` — how does the App Router map files to URLs?
   - `src/app/globals.css` — what are Tailwind directives?
   - `next.config.ts` — what is this for?
   - `tsconfig.json` — what does the `@/` path alias mean?
   - `tailwind.config.ts` — how does Tailwind know which files to scan?
4. Clean up the boilerplate from `page.tsx` — replace with a simple heading
5. Commit: `chore: scaffold next.js project with typescript and tailwind`

**Checkpoint — TJ should be able to explain:**
- How the App Router maps folders/files to routes
- The difference between `layout.tsx` and `page.tsx`
- What `npm run dev` vs `npm run build` does

---

### Phase 2 — Deploy to Vercel

**Goal:** Get the site live on the internet. Establish the deploy pipeline so every future push auto-deploys.

**Steps:**
1. Push the repo to GitHub
2. Sign in to vercel.com with GitHub
3. Import the repository — Vercel auto-detects Next.js
4. Visit the live `.vercel.app` URL
5. Explain the pipeline: `git push` → Vercel detects → builds → deploys

**Checkpoint — TJ should be able to explain:**
- What happens automatically when you push to `main`
- Where to check build logs if something fails

---

### Phase 3 — Navbar + Footer (Site Shell)

**Goal:** Build the persistent pieces that wrap all content. After this, the site has a top nav and bottom footer.

**New files:** `src/components/layout/Navbar.tsx`, `src/components/layout/Footer.tsx`

**Steps:**
1. Create `src/components/layout/` folder — explain why layout components are separated from sections
2. Build `Navbar.tsx` — fixed top bar with links that will scroll to sections via `href="#sectionId"`
3. Build `Footer.tsx` — copyright text, placeholder for social links
4. Import both into `page.tsx` — explain why these go in `page.tsx` and not `layout.tsx` (for this project)
5. Style with Tailwind — fixed positioning, backdrop blur

**Checkpoint — TJ should be able to explain:**
- How `position: fixed` works and why the navbar uses it
- How `href="#id"` targets a section on the same page
- Why layout components are a separate category from section components

Commit: `feat: add navbar and footer`

---

### Phase 4 — Hero Section

**Goal:** Build the first thing visitors see. Full viewport height, your name, photo, tagline.

**New files:** `src/components/sections/Hero.tsx`

**Steps:**
1. Build `Hero.tsx` — name, tagline, placeholder image, CTA button
2. Introduce the Next.js `<Image>` component — explain why Next.js has its own and what it does (lazy loading, WebP, responsive sizes)
3. Use `h-screen` for full viewport height — explain viewport units
4. Add `id="hero"` — connect it to the navbar link from Phase 3
5. Style with Tailwind — centering, typography, spacing

**Checkpoint — TJ should be able to explain:**
- Why `next/image` exists instead of just using `<img>`
- How the section `id` connects to the navbar `href`
- What `h-screen` means in CSS terms

Commit: `feat: add hero section`

---

### Phase 5 — About Section + Reusable Heading

**Goal:** Add a personal narrative section. Introduce the first reusable UI component.

**New files:** `src/components/sections/About.tsx`, `src/components/ui/SectionHeading.tsx`

**Steps:**
1. Build `SectionHeading.tsx` — a reusable heading component that every section will use. Receives `title` as a prop
2. Explain why: instead of writing `<h2>` with the same styles in every section, extract it once
3. Build `About.tsx` — uses `SectionHeading`, contains 2–3 paragraphs about you
4. Add `id="about"`, import into `page.tsx`
5. Style — `max-w-3xl mx-auto` for readable width. Explain why line length matters

**Checkpoint — TJ should be able to explain:**
- Why extracting `SectionHeading` as a reusable component is better than repeating styled `<h2>` tags
- How props flow from parent to child
- What `max-w-*` and `mx-auto` do

Commit: `feat: add about section with reusable section heading`

---

### Phase 6 — Projects Section (The Big One)

**Goal:** Build the most important section. This phase introduces TypeScript interfaces, the data layer, and the full data → section → UI component pattern. Take it slow.

**New files:** `src/types/index.ts`, `src/data/projects.ts`, `src/components/sections/Projects.tsx`, `src/components/ui/ProjectCard.tsx`

**Steps — Part A: Define the data shape**
1. Create `src/types/index.ts` — define the `Project` interface. Explain what an interface is and why we define the shape before writing data
2. Create `src/data/projects.ts` — an array of `Project` objects (start with Project Ethos). Explain why data lives in its own file, not inside the component

```ts
// src/types/index.ts
export interface Project {
  title: string;
  description: string;
  tech: string[];
  image: string;
  github: string | null;
  live: string | null;
}
```

```ts
// src/data/projects.ts
import { Project } from "@/types";

export const projects: Project[] = [
  {
    title: "Project Ethos",
    description: "A personal habit tracking app with a momentum-based scoring engine.",
    tech: ["React", "TypeScript", "Tailwind", ".NET", "PostgreSQL"],
    image: "/images/projects/project-ethos.png",
    github: "https://github.com/yourusername/project-ethos",
    live: null,
  },
];
```

**Steps — Part B: Build the components**
3. Build `ProjectCard.tsx` — receives a `Project` as a prop, renders the card. Explain how the component doesn't know or care where the data comes from
4. Build `Projects.tsx` — imports the `projects` array, `.map()` over it, renders a `ProjectCard` for each
5. Explain the full flow: data file → section component → UI component
6. Style with CSS Grid via Tailwind (`grid`, `grid-cols-*`, `gap-*`)
7. Add `id="projects"`, import into `page.tsx`

**Checkpoint — TJ should be able to explain:**
- What a TypeScript interface is and what happens if your data doesn't match it
- Why data is separated from components
- The full data flow: `data/projects.ts` → `Projects.tsx` → `ProjectCard.tsx`
- How `.map()` turns an array into a list of components
- How CSS Grid works in Tailwind

Commit: `feat: add projects section with data layer and project cards`

---

### Phase 7 — Skills + Contact

**Goal:** Build the remaining two sections. These follow the same pattern learned in Phase 6. Should feel faster now — that's the point.

**New files:** `src/data/skills.ts`, `src/data/socials.ts`, `src/components/sections/Skills.tsx`, `src/components/sections/Contact.tsx`, `src/components/ui/SkillBadge.tsx`, `src/components/ui/SocialLink.tsx`

**Steps:**
1. Add `Skill` and `SocialLink` interfaces to `src/types/index.ts`
2. Create `src/data/skills.ts` and `src/data/socials.ts`
3. Build `SkillBadge.tsx` and `Skills.tsx` — group skills by category, render badge grids
4. Build `SocialLink.tsx` and `Contact.tsx` — install Lucide React (`npm install lucide-react`), render icon + link pairs
5. Explain Lucide React — how to import icons, how to size them
6. Explain `target="_blank"` and `rel="noopener noreferrer"` for external links
7. Add `id="skills"` and `id="contact"`, import both into `page.tsx`

```ts
// Added to src/types/index.ts
export interface Skill {
  name: string;
  category: "Frontend" | "Backend" | "Tools" | "Other";
}

export interface SocialLink {
  platform: string;
  url: string;
  icon: string;
}
```

**Checkpoint — TJ should be able to explain:**
- How to group/filter an array by a property
- How the same data → section → UI pattern applies to all sections
- Why `target="_blank"` needs `rel="noopener noreferrer"`

Commit: `feat: add skills and contact sections`

---

### Phase 8 — Animations

**Goal:** Add scroll-triggered fade-in animations. Learn Framer Motion and the difference between server and client components.

**New files:** `src/components/ui/ScrollReveal.tsx`

**Steps:**
1. Install Framer Motion: `npm install framer-motion`
2. Before writing code — explain server components vs client components. Why does Next.js have this distinction? When do you need `"use client"`?
3. Build `ScrollReveal.tsx` — a `"use client"` wrapper using `motion.div` with `whileInView`
4. Explain each Framer Motion prop: `initial`, `whileInView`, `viewport`, `transition`
5. Wrap each section in `<ScrollReveal>` — elements fade in as you scroll
6. Add hover effects to `ProjectCard` and `SocialLink`

**Checkpoint — TJ should be able to explain:**
- Why `ScrollReveal` needs `"use client"` but `About` doesn't
- What `whileInView` does under the hood (Intersection Observer)
- What `viewport: { once: true }` means

Commit: `style: add scroll reveal animations and hover effects`

---

### Phase 9 — Mobile Responsiveness

**Goal:** Make every section work on phones and tablets.

**Steps:**
1. Open browser dev tools → toggle device toolbar → test every section at different widths
2. Identify what breaks — likely the grid, navbar, hero layout, font sizes
3. Explain how Tailwind responsive prefixes work (`sm:`, `md:`, `lg:`) — which direction do they go?
4. Fix the project grid — stack to single column on mobile
5. Fix the navbar — build a hamburger menu with toggle state
6. Fix typography and spacing at small sizes
7. Test again across breakpoints

**Checkpoint — TJ should be able to explain:**
- What `md:grid-cols-2` means and at what pixel width it kicks in
- How to use `useState` to toggle the mobile menu
- How to use browser dev tools to simulate different devices

Commit: `style: add mobile responsive breakpoints`

---

### Phase 10 — SEO & Final Polish

**Goal:** Make the site look professional when shared and found on search engines.

**Steps:**
1. Add metadata in `layout.tsx` using Next.js `metadata` export — title, description, Open Graph
2. Explain what Open Graph is — how links look when shared on LinkedIn, Discord, Twitter
3. Add an OG image to `public/images/og-image.png`
4. Add a favicon to `public/`
5. Test — share the Vercel URL somewhere and see the preview card
6. Final review: check every section, every link, every breakpoint, every animation
7. Explain what `metadata` export does differently than a regular `<head>` tag

**Checkpoint — TJ should be able to explain:**
- What Open Graph tags are and where they appear
- How Next.js handles metadata differently from plain React
- What a favicon is

Commit: `chore: add seo metadata and og image`

---

## Target Folder Structure (for reference — built incrementally across phases)

```
portfolio/
├── public/
│   ├── images/
│   │   ├── profile.jpg
│   │   ├── og-image.png
│   │   └── projects/
│   ├── files/
│   │   └── resume.pdf
│   └── favicon.ico
├── src/
│   ├── app/
│   │   ├── layout.tsx
│   │   ├── page.tsx
│   │   └── globals.css
│   ├── components/
│   │   ├── layout/
│   │   │   ├── Navbar.tsx
│   │   │   └── Footer.tsx
│   │   ├── sections/
│   │   │   ├── Hero.tsx
│   │   │   ├── About.tsx
│   │   │   ├── Projects.tsx
│   │   │   ├── Skills.tsx
│   │   │   └── Contact.tsx
│   │   └── ui/
│   │       ├── SectionHeading.tsx
│   │       ├── ProjectCard.tsx
│   │       ├── SkillBadge.tsx
│   │       ├── SocialLink.tsx
│   │       └── ScrollReveal.tsx
│   ├── data/
│   │   ├── projects.ts
│   │   ├── skills.ts
│   │   └── socials.ts
│   ├── lib/
│   │   └── utils.ts
│   └── types/
│       └── index.ts
├── .gitignore
├── next.config.ts
├── tailwind.config.ts
├── tsconfig.json
└── package.json
```
