# Portfolio Website

Personal single-page portfolio website. Desktop-first, responsive, dark theme.  
Inspired by [hemonvong.space](https://hemonvong.space).

## Tech Stack

- **Framework:** Next.js 15 (App Router) + TypeScript
- **Styling:** Tailwind CSS (utility-first, no separate CSS files per component)
- **Animations:** Framer Motion (scroll reveals, hover effects)
- **Icons:** Lucide React
- **Fonts:** Loaded via `next/font/google` in root layout
- **Deployment:** Vercel (auto-deploy from GitHub `main` branch)

## Folder Structure

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
│   │   ├── layout.tsx            # Root layout (fonts, metadata, body)
│   │   ├── page.tsx              # Home — assembles all sections
│   │   └── globals.css           # Tailwind directives + CSS variables
│   ├── components/
│   │   ├── layout/
│   │   │   ├── Navbar.tsx        # Fixed top nav, smooth-scroll links
│   │   │   └── Footer.tsx        # Social links, copyright
│   │   ├── sections/
│   │   │   ├── Hero.tsx          # Name, title, profile image, CTA
│   │   │   ├── About.tsx         # Personal narrative
│   │   │   ├── Projects.tsx      # Project cards grid
│   │   │   ├── Skills.tsx        # Tech stack grouped grid
│   │   │   └── Contact.tsx       # Email + social links
│   │   └── ui/
│   │       ├── SectionHeading.tsx
│   │       ├── ProjectCard.tsx
│   │       ├── SkillBadge.tsx
│   │       ├── SocialLink.tsx
│   │       └── ScrollReveal.tsx  # Framer Motion fade-in wrapper
│   ├── data/
│   │   ├── projects.ts           # Project objects array
│   │   ├── skills.ts             # Skills grouped by category
│   │   └── socials.ts            # Social media links
│   ├── lib/
│   │   └── utils.ts              # Helpers (cn, etc.)
│   └── types/
│       └── index.ts              # Project, Skill, SocialLink interfaces
├── .gitignore
├── next.config.ts
├── tailwind.config.ts
├── tsconfig.json
└── package.json
```

## Naming Conventions

- **PascalCase** — React components, TypeScript interfaces
- **camelCase** — variables, functions, props
- **kebab-case** — file names in `data/` and `lib/`

## Architecture Rules

- Each section component owns its own `id` attribute for navbar scroll targeting
- All content data lives in `src/data/` — components only render, never hardcode content
- UI components in `src/ui/` are reusable and receive data via props
- Section components in `src/sections/` import from `data/` and compose UI components
- Client components (`"use client"`) only where needed (animations, interactivity)
- Static content stays as server components by default

## Types

```ts
interface Project {
  title: string;
  description: string;
  tech: string[];
  image: string;
  github: string | null;
  live: string | null;
}

interface Skill {
  name: string;
  category: "Frontend" | "Backend" | "Tools" | "Other";
}

interface SocialLink {
  platform: string;
  url: string;
  icon: string;
}
```

## Styling

- Dark theme by default
- Color palette defined as CSS variables in `globals.css`
- All styling via Tailwind utility classes — no component-level CSS files
- Responsive: desktop-first, then `md:` / `lg:` breakpoints for mobile

## Page Assembly

`src/app/page.tsx` assembles sections in order:
1. Navbar (fixed)
2. Hero
3. About
4. Projects
5. Skills
6. Contact
7. Footer

## Build Phases

Work through one phase at a time. Do not skip ahead. Each phase has a goal, steps, and concepts to understand before moving on. After each phase, TJ should be able to explain what was done and why.

---

### Phase 1 — Scaffold & Understand the Base

**Goal:** Get a working Next.js app running locally. Understand what every generated file does before touching anything.

**Steps:**
1. Run `npx create-next-app@latest . --typescript --tailwind --app --src-dir`
2. Run `npm run dev` and open `http://localhost:3000` in the browser
3. Walk through every file that was generated and explain its purpose:
   - `src/app/layout.tsx` — what is a root layout and why does Next.js need one?
   - `src/app/page.tsx` — how does the App Router map files to URLs?
   - `src/app/globals.css` — where do Tailwind directives live and what do they do?
   - `next.config.ts` — what is this for?
   - `tsconfig.json` — what does the `@/` path alias mean?
   - `tailwind.config.ts` — how does Tailwind know which files to scan?
   - `package.json` — what scripts are available and what do they do?
4. Clean up the default boilerplate from `page.tsx` (replace with a simple "Hello World")
5. Commit: `chore: scaffold next.js project with typescript and tailwind`

**Understand before moving on:**
- How the App Router maps folders/files to routes
- The difference between `layout.tsx` and `page.tsx`
- How Tailwind gets loaded into the project
- What `npm run dev` vs `npm run build` does

---

### Phase 2 — Create the Folder Structure

**Goal:** Set up the project's folders so every future file has a clear home. No actual components yet — just empty structure.

**Steps:**
1. Create the folder tree inside `src/`: `components/layout/`, `components/sections/`, `components/ui/`, `data/`, `lib/`, `types/`
2. Create the `public/` subfolders: `images/projects/`, `files/`
3. Create placeholder files: `src/types/index.ts`, `src/lib/utils.ts`
4. Explain why we separate components into `layout/`, `sections/`, and `ui/`
5. Explain why data lives in its own folder away from components
6. Commit: `chore: create folder structure`

**Understand before moving on:**
- Why separating layout, sections, UI, data, and types matters
- What goes where — if you had a new component, which folder does it belong in?

---

### Phase 3 — Deploy to Vercel

**Goal:** Get the (empty) site live on the internet. Establish the deploy pipeline early so every future change auto-deploys.

**Steps:**
1. Push the repo to GitHub (if not already done)
2. Go to vercel.com, sign in with GitHub
3. Import the repository — Vercel auto-detects Next.js
4. Deploy and visit the live `.vercel.app` URL
5. Explain what just happened: Git push → Vercel build → live site

**Understand before moving on:**
- How Vercel connects to your GitHub repo
- What happens when you push to `main` (auto-deploy)
- Where to check build logs if something breaks

---

### Phase 4 — Navbar + Footer (Site Shell)

**Goal:** Build the persistent layout pieces that wrap every section. The site should have a top nav and bottom footer before any content sections exist.

**Steps:**
1. Define the data first — what links does the navbar need? Add section names to a constant
2. Build `Navbar.tsx` — fixed top bar with links that will scroll to sections via `href="#sectionId"`
3. Build `Footer.tsx` — social links, copyright text
4. Import both into `page.tsx` or `layout.tsx` and explain the difference (why layout vs page?)
5. Style with Tailwind — backdrop blur, sticky positioning, responsive basics
6. Commit: `feat: add navbar and footer`

**Understand before moving on:**
- How fixed/sticky positioning works in CSS
- How `href="#id"` smooth-scrolls to a section
- When to put something in `layout.tsx` vs `page.tsx`

---

### Phase 5 — Hero Section

**Goal:** Build the first thing visitors see — your name, title, photo, and a call-to-action. Full viewport height.

**Steps:**
1. Build `Hero.tsx` with your name, a tagline, and a placeholder for a profile image
2. Learn and use the Next.js `<Image>` component — why does Next.js have its own image component?
3. Add a CTA button that scrolls to the contact section
4. Style it — center content, full viewport height (`h-screen`), Tailwind utilities
5. Give it `id="hero"` for navbar linking
6. Commit: `feat: add hero section`

**Understand before moving on:**
- How `next/image` optimizes images (lazy loading, responsive sizes, WebP conversion)
- The `h-screen` utility and viewport-based sizing
- How the section `id` connects to the navbar links from Phase 4

---

### Phase 6 — About Section

**Goal:** Add a short personal narrative section. Practice the section component pattern.

**Steps:**
1. Build `About.tsx` — a simple section with a heading and 2–3 paragraphs
2. Create `SectionHeading.tsx` as a reusable UI component (used by every section going forward)
3. Write the actual content — who you are, what you're building, what drives you
4. Style with Tailwind — max-width container, readable line lengths, spacing
5. Give it `id="about"`
6. Commit: `feat: add about section with section heading component`

**Understand before moving on:**
- The pattern: section component uses a reusable UI component (SectionHeading)
- How `max-w-*` and `mx-auto` center content in Tailwind
- Why readable line length matters (prose styling)

---

### Phase 7 — Types + Data Layer

**Goal:** Define the TypeScript interfaces and populate the data files before building the components that use them. Understand the data-first approach.

**Steps:**
1. Define `Project`, `Skill`, and `SocialLink` interfaces in `src/types/index.ts`
2. Create `src/data/projects.ts` — array of project objects (start with Project Ethos)
3. Create `src/data/skills.ts` — array of skills grouped by category
4. Create `src/data/socials.ts` — your GitHub, LinkedIn, email links
5. Explain why: components should never hardcode content — they receive it as props from data files

**Understand before moving on:**
- Why separating data from components makes the site easy to update
- How TypeScript interfaces enforce the shape of your data
- The pattern: `data/` file exports an array → section component imports it → passes items to UI components as props

---

### Phase 8 — Projects Section

**Goal:** Build the most important section of the portfolio. Introduces the data → section → UI component pattern in full.

**Steps:**
1. Build `ProjectCard.tsx` — receives a `Project` prop, renders image, title, description, tech badges, links
2. Build `Projects.tsx` — imports from `data/projects.ts`, maps over the array, renders a `ProjectCard` for each
3. Create `SkillBadge.tsx` for the tech tags on each card (reused in Skills section later)
4. Style the grid layout — CSS Grid or Flexbox via Tailwind
5. Give it `id="projects"`
6. Commit: `feat: add projects section with project card component`

**Understand before moving on:**
- The full data flow: `data/projects.ts` → `Projects.tsx` → `ProjectCard.tsx`
- How `.map()` renders a list of components from an array
- How CSS Grid works in Tailwind (`grid`, `grid-cols-*`, `gap-*`)

---

### Phase 9 — Skills Section

**Goal:** Display your tech stack visually. Reuses the SkillBadge component from Phase 8.

**Steps:**
1. Build `Skills.tsx` — imports from `data/skills.ts`, groups by category, renders badges
2. Reuse `SkillBadge.tsx` from Phase 8
3. Style as a grouped grid — category headings with badges underneath
4. Give it `id="skills"`
5. Commit: `feat: add skills section`

**Understand before moving on:**
- How to group/filter an array by a property (category)
- Reusing a UI component across different sections

---

### Phase 10 — Contact Section

**Goal:** Give visitors a way to reach you. Keep it simple — links only, no form backend needed.

**Steps:**
1. Build `Contact.tsx` — heading, a short message, and social/email links
2. Build `SocialLink.tsx` — icon + link, receives a `SocialLink` prop
3. Import data from `data/socials.ts`
4. Style with Tailwind — centered, icon row
5. Give it `id="contact"`
6. Commit: `feat: add contact section with social links`

**Understand before moving on:**
- How Lucide React icons work (importing and sizing)
- How `target="_blank"` and `rel="noopener noreferrer"` work for external links

---

### Phase 11 — Animations

**Goal:** Add polish with scroll-triggered fade-in animations. Learn Framer Motion basics.

**Steps:**
1. Install Framer Motion: `npm install framer-motion`
2. Build `ScrollReveal.tsx` — a wrapper that fades in children when they enter the viewport
3. Explain how Framer Motion's `motion.div`, `whileInView`, and `viewport` props work
4. Explain `"use client"` — why is it needed here and not in other components?
5. Wrap each section in `<ScrollReveal>`
6. Add subtle hover effects to ProjectCard and SocialLink
7. Commit: `style: add scroll reveal animations`

**Understand before moving on:**
- Server components vs client components — when and why you add `"use client"`
- How Framer Motion's `whileInView` detects scroll position
- What `viewport: { once: true }` does and why you want it

---

### Phase 12 — Mobile Responsiveness

**Goal:** Make the site work on phones and tablets. Desktop-first means we're adding mobile overrides.

**Steps:**
1. Open browser dev tools, toggle responsive mode, test every section
2. Identify what breaks at smaller widths
3. Fix with Tailwind responsive prefixes (`sm:`, `md:`, `lg:`)
4. Handle the navbar — add a hamburger menu for mobile
5. Test project card grid stacking on small screens
6. Commit: `style: add mobile responsive breakpoints`

**Understand before moving on:**
- How Tailwind's responsive prefixes work (mobile-first vs desktop-first)
- How to use browser dev tools to simulate different screen sizes
- The hamburger menu pattern (toggle state, conditional rendering)

---

### Phase 13 — SEO & Final Polish

**Goal:** Make the site look professional when shared on social media and search engines.

**Steps:**
1. Add metadata in `layout.tsx` — title, description, Open Graph tags
2. Explain what metadata does and why (how links look when shared on LinkedIn, Discord, etc.)
3. Create or add an OG image (`public/images/og-image.png`)
4. Add a favicon
5. Test with a URL preview tool
6. Final review — check every section, every link, every breakpoint
7. Commit: `chore: add seo metadata and og image`

**Understand before moving on:**
- What Open Graph tags are and where they show up
- How search engines read your metadata
- What a favicon is and how browsers use it

## Git Commits

Conventional style, same as Project Ethos:
- `feat:` — new section or component
- `style:` — visual/animation changes
- `chore:` — config, metadata, tooling
- `fix:` — bug fixes

## Collaboration Style

Pair-programming — discuss approach first, then TJ types the code. Claude explains the why, not just the what. The goal is not just to ship a portfolio — it's to learn how full systems work end-to-end. Prioritize understanding over speed. When introducing new concepts (App Router, Framer Motion, Vercel deployment, etc.), explain how and why they work, not just what to type.
