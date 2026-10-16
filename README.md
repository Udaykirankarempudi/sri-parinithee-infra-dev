# Sri Parinithee Infra Developers — Official Web Platform

> **LAND INFRASTRUCTURE • BETTER TOMORROWS**  
> Premium plotted residential developments with modern infrastructure, clear marketable titles, and VMRDA / AP RERA approvals across coastal Andhra Pradesh.

[![React](https://img.shields.io/badge/React-19.2.8-blue?logo=react)](https://react.dev/)
[![TypeScript](https://img.shields.io/badge/TypeScript-6.0-blue?logo=typescript)](https://www.typescriptlang.org/)
[![Vite](https://img.shields.io/badge/Vite-8.3-purple?logo=vite)](https://vite.dev/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-v4.3-38B2AC?logo=tailwind-css)](https://tailwindcss.com/)
[![License](https://img.shields.io/badge/License-Proprietary-darkgreen)](#license)

---

## 1. Project Overview

The **Sri Parinithee Real Estate Website** is an enterprise-grade, high-performance web platform built for **Sri Parinithee Infra Developers Pvt. Ltd.** It showcases the company's plotted land developments, gated communities, corporate leadership, infrastructure milestones, and legal certifications.

Designed with an editorial aesthetic inspired by luxury real estate architectural monographs, the application pairs an emerald-forest and warm-gold palette with classical serif typography (`Playfair Display`) and clean, accessible sans-serif UI typography (`Inter`).

---

## 2. Key Features & Functionality

### Public Pages & Multi-Page Routing
- **Full React Router Architecture**: Multi-page routing with instantaneous client-side transitions and route-aware active navigation states.
- **Dedicated Project Portfolios**: Dedicated routes for signature developments:
  - `/projects/green-valley` (50 Acres, Visakhapatnam)
  - `/projects/golden-avenue` (70 Acres, Anakapalle)
  - `/projects/ocean-heights` (35 Acres, Bheemunipatnam)
  - Dynamic route fallback `/projects/:slug` for future projects.
- **Corporate Transparency**: Dedicated `/about` (company journey, mission, vision, values) and `/directors` (leadership profiles for Managing Director Mr. R. Kiran Kumar and Director Mr. S. Venkatesh).
- **Contact & Location Hub**: `/contact` with interactive Google Maps integration, corporate office location details, direct calling/WhatsApp triggers, and online inquiry handling.
- **Editorial 404 Page**: Elegant fallback route ensuring users can seamlessly navigate back to key pages.

### Interactive UI Components & Global State
- **Global Modal Context (`ModalContext`)**:
  - **Enquiry Modal**: Pre-fills active project interest and captures buyer inquiries.
  - **Site Visit Scheduler**: Allows prospective investors to book on-site inspection visits with transportation assistance.
  - **Corporate Video Modal**: Embedded showcase video trigger in the homepage hero.
  - **Fullscreen Lightbox**: Keyboard-accessible (`Escape`, `ArrowLeft`, `ArrowRight`) high-resolution project photo gallery.
- **Project Filtering & Real-Time Search**: Filter projects by status (`All`, `Ongoing`, `Upcoming`, `Completed`) with dynamic layout recalculations.
- **Interactive Plot Calculator**: Built-in calculation utility for estimating plot costs based on square yards and dimension options.
- **Form Validation**: Form handling powered by `react-hook-form` with pattern validation for 10-digit Indian mobile numbers (`+91`), email formats, and required fields.
- **Responsive Sticky Navigation**: White header with company emblem, dropdown navigation for project categories, desktop CTA ("Enquire Now"), and animated mobile hamburger drawer.

---

## 3. Technology Stack

| Layer | Technology | Details |
|---|---|---|
| **Core Framework** | [React 19](https://react.dev/) (`19.2.8`) | Modern component model with concurrent rendering |
| **Language** | [TypeScript](https://www.typescriptlang.org/) (`~6.0.2`) | Strict type safety, interfaces for models, full autocompletion |
| **Bundler & Tooling** | [Vite 8](https://vite.dev/) (`^8.3.0`) | Lightning-fast HMR, ES module bundling, zero-config chunking |
| **Styling & CSS** | [Tailwind CSS v4](https://tailwindcss.com/) (`^4.3.3`) | `@tailwindcss/vite` first-party plugin, CSS variables theme tokens |
| **Routing** | [React Router v7](https://reactrouter.com/) (`^7.18.4`) | Client-side routing with nested layouts and link indicators |
| **Icons** | [Lucide React](https://lucide.dev/) (`^1.58.0`) | Lightweight, tree-shakable SVG iconography |
| **Motion & Micro-interactions** | [Framer Motion](https://www.framer.com/motion/) (`^14.3.0`) | Refined page transitions and hover effects |
| **Forms & Validation** | [React Hook Form](https://react-hook-form.com/) (`^7.90.0`) | Performant, uncontrolled form state with zero re-renders |
| **Asset Processing** | [Sharp](https://sharp.pixelplumbing.com/) (`^0.35.5`) | Node-based automated asset extraction and image optimization |
| **Linter** | [Oxlint](https://oxc.rs/) (`^1.81.0`) | High-performance Rust-based linter with React Hooks rules |

---

## 4. Directory Structure

```text
sri-parinithee-infra-developers/
├── .gitignore                     # Git ignore definitions
├── .oxlintrc.json                 # Oxlint linter rules & configuration
├── .env.example                   # Environment variable template
├── index.html                     # HTML5 entry with Google Fonts & meta tags
├── package.json                   # Dependencies, scripts, and package metadata
├── package-lock.json              # Deterministic npm dependency lockfile
├── tsconfig.json                  # Root TypeScript project references
├── tsconfig.app.json              # Application TS compiler configuration
├── tsconfig.node.json             # Vite/Node scripts TS configuration
├── vite.config.ts                 # Vite bundler configuration & @ path alias
├── public/                        # Static public assets served directly
│   ├── brand-logo.png             # Official company logo (high resolution)
│   ├── logo-icon.png              # Scaled emblem asset
│   ├── favicon.svg                # Browser favicon
│   ├── icons.svg                  # SVG symbol sprite
│   └── assets/
│       └── images/                # Optimized project & architectural visuals
│           ├── entrance-arch.jpg  # Official gated entrance monument visual
│           ├── hero-bg.jpg        # Aerial plotted residential layout visual
│           ├── our-journey.jpg    # Corporate development visual
│           └── master-plan-*.svg  # Architectural layout diagrams
├── scripts/
│   └── extract-assets.js          # Sharp script for extracting mockup assets
└── src/
    ├── main.tsx                   # React root mount point
    ├── App.tsx                    # Root routing & layout composition
    ├── index.css                  # Tailwind v4 `@theme` tokens & custom styles
    ├── context/
    │   └── ModalContext.tsx       # Global state for modals (enquiry, site visit, video, lightbox)
    ├── data/                      # Centralized typed business & project data
    │   ├── company.ts             # Company metadata, contact info, coordinates, statistics
    │   ├── directors.ts           # Executive leadership biographies & credentials
    │   ├── navigation.ts          # Nav links, routes, and dropdown hierarchies
    │   ├── projects.ts            # Detailed project data (plots, amenities, pricing, galleries)
    │   ├── testimonials.ts        # Customer reviews and testimonials
    │   └── updates.ts             # Construction & site development updates
    ├── components/
    │   ├── common/                # Reusable UI primitives
    │   │   ├── Button.tsx         # Brand-styled buttons (gold, forest, outline, ghost)
    │   │   ├── Container.tsx      # Standardized responsive page container
    │   │   ├── PageHero.tsx       # Standardized page title header with breadcrumbs
    │   │   ├── Breadcrumbs.tsx    # Accessible breadcrumb trail
    │   │   ├── SectionHeading.tsx # Styled serif heading with gold eyebrow
    │   │   ├── StatCard.tsx       # Key metric counter card
    │   │   ├── Lightbox.tsx       # Fullscreen keyboard-accessible image viewer
    │   │   ├── VideoModal.tsx     # Video presentation popup
    │   │   ├── EnquiryModal.tsx   # Floating inquiry form modal
    │   │   └── SocialIcons.tsx    # Social channel links
    │   ├── forms/
    │   │   └── EnquiryForm.tsx    # Validated contact & site-visit inquiry form
    │   ├── layout/                # Persistent application shell
    │   │   ├── MainLayout.tsx     # Shell wrapping Header, Main, Footer, and Modals
    │   │   ├── Header.tsx         # Sticky desktop header with navigation
    │   │   ├── MobileNavigation.tsx # Slide-out mobile navigation drawer
    │   │   ├── Footer.tsx         # Dark green footer with links, contacts, and copyright
    │   │   └── Logo.tsx           # Scalable company logo component
    │   ├── home/                  # Homepage section components
    │   │   ├── HeroSection.tsx    # Aerial background hero with CTAs & video trigger
    │   │   ├── AboutPreview.tsx   # Company introduction with authentic entrance monument
    │   │   ├── WhyChooseUs.tsx    # 5 core pillars dark feature band
    │   │   ├── LeadershipPreview.tsx # Executive director preview cards
    │   │   ├── ProjectUpdates.tsx # Construction progress editorial cards
    │   │   ├── OfficeVisitBanner.tsx # Modern architecture visit CTA band
    │   │   ├── Testimonials.tsx   # Customer review carousel with controls
    │   │   └── FinalCta.tsx       # Investment closing CTA section
    │   └── projects/              # Project portfolio components
    │       ├── ProjectCard.tsx    # Individual project card with specs & CTA
    │       ├── ProjectFilters.tsx # Category pill filter bar
    │       ├── ProjectGrid.tsx    # Responsive project layout grid
    │       ├── ProjectHero.tsx    # Project detail photographic banner
    │       ├── ProjectOverview.tsx # Plot specifications & project summary
    │       ├── MasterPlan.tsx     # Interactive master plan viewer & plot guide
    │       ├── AmenitiesGrid.tsx  # Grid of lifestyle & infra amenities
    │       ├── LocationConnectivity.tsx # Distance benchmarks & connectivity list
    │       ├── ProjectGallery.tsx # Image grid with Lightbox trigger
    │       ├── ProjectDocuments.tsx # RERA certificates & brochure downloads
    │       ├── ProjectEnquiry.tsx # Sticky sidebar inquiry widget
    │       └── ProjectNav.tsx     # In-page scrollspy navigation bar
    └── pages/
        ├── Home.tsx               # Homepage route (`/`)
        ├── About.tsx              # About Us route (`/about`)
        ├── Directors.tsx          # Leadership route (`/directors`)
        ├── Projects.tsx           # Projects portfolio route (`/projects`)
        ├── ProjectDetails.tsx     # Dedicated project details route (`/projects/:slug`)
        ├── Contact.tsx            # Contact & site visits route (`/contact`)
        └── NotFound.tsx           # 404 fallback page (`*`)
```

---

## 5. Prerequisites & Environment Setup

### System Requirements
- **Node.js**: Version `18.0.0` or higher (LTS release recommended; tested on `v20.x` and `v24.x`).
- **Package Manager**: `npm` (version `9.x` or higher), `pnpm`, or `yarn`.

### Installation

1. Clone or navigate to the repository directory:
   ```bash
   cd "sri parinithee infra developers"
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Configure environment variables:
   ```bash
   cp .env.example .env
   ```

---

## 6. Available Scripts & Development Commands

All commands are defined in `package.json`:

| Command | Description |
|---|---|
| `npm run dev` | Starts the Vite local development server with Hot Module Replacement (HMR) at `http://localhost:5173/`. |
| `npm run build` | Executes TypeScript type verification (`tsc -b`) and bundles production assets into `dist/`. |
| `npm run preview` | Spins up a local static server to test the production build in `dist/`. |
| `npm run lint` | Runs `oxlint` to perform high-speed static code analysis. |
| `node scripts/extract-assets.js` | Executes the Sharp image processing script to regenerate clean, trimmed brand assets and architectural photos. |

### Running the Development Server
```bash
npm run dev
```
By default, the server will be available at:
```text
http://localhost:5173/
```
To expose the server on your local area network (for mobile device testing):
```bash
npm run dev -- --host
```

### Production Build & Preview
To create an optimized production build:
```bash
npm run build
```
The output is written to `dist/`. To preview the production bundle locally:
```bash
npm run preview
```

### Quality Assurance & Linting
Run static lint analysis:
```bash
npm run lint
```
Run strict TypeScript type verification without bundling:
```bash
npx tsc --noEmit
```

---

## 7. Available Pages & Routing Table

The application uses standard client-side history navigation via `react-router-dom`:

| Path | Element | Description |
|---|---|---|
| `/` | `<Home />` | Main landing page featuring all 11 reference sections. |
| `/about` | `<About />` | Detailed corporate history, development philosophy, and Mission/Vision/Values cards. |
| `/directors` | `<Directors />` | Comprehensive leadership profiles for Mr. R. Kiran Kumar and Mr. S. Venkatesh. |
| `/projects` | `<Projects />` | Searchable project listing with status filters (`All`, `Ongoing`, `Upcoming`, `Completed`). |
| `/projects/green-valley` | `<ProjectDetails />` | Detailed view for **Green Valley** (Visakhapatnam, 50 Acres). |
| `/projects/golden-avenue` | `<ProjectDetails />` | Detailed view for **Golden Avenue** (Anakapalle, 70 Acres). |
| `/projects/ocean-heights` | `<ProjectDetails />` | Detailed view for **Ocean Heights** (Bheemunipatnam, 35 Acres). |
| `/projects/:slug` | `<ProjectDetails />` | Dynamic route fallback resolving project details from `src/data/projects.ts`. |
| `/contact` | `<Contact />` | Corporate headquarters address, phone, email, Google Maps embed, and inquiry form. |
| `*` | `<NotFound />` | Custom 404 page with navigation redirects back to home. |

---

## 8. Design System & Brand Identity

The visual language follows an editorial design aesthetic tailored to luxury South Indian real estate infrastructure.

### Color Tokens

Configured via Tailwind CSS v4 `@theme` in `src/index.css`:

```css
@theme {
  --color-forest: #062E27;         /* Primary brand dark green */
  --color-forest-dark: #041E1A;    /* Hero background gradient deep tone */
  --color-forest-light: #0A3B32;   /* Feature bands and cards */
  --color-forest-surface: #0E483D; /* Interactive hover states */
  --color-gold: #C89A42;           /* Primary gold accent, CTA buttons, active tabs */
  --color-gold-hover: #B68936;     /* Gold button hover state */
  --color-gold-light: #E9C77E;     /* Secondary gold text & highlights */
  --color-gold-pale: #FBF6EB;      /* Subtle gold badge backgrounds */
  --color-offwhite: #FAF9F5;       /* Warm background alternate for sections */
  --color-surface: #FFFFFF;        /* Card & layout surface background */
  --color-text-main: #20251F;      /* Primary dark text */
  --color-text-muted: #77766F;     /* Secondary / paragraph text */
  --color-border-light: #E8E4DA;   /* Hairline dividing borders */
}
```

### Typography Hierarchy

Loaded via Google Fonts in `index.html`:

| Role | Font Family | Tailwind Class | Usage |
|---|---|---|---|
| **Headings & Editorial** | `Playfair Display` (Serif) | `font-serif` | Page titles, section headings, numbers, quotes |
| **Interface & Body** | `Inter` (Sans-Serif) | `font-sans` | Navigation, paragraphs, metadata labels, inputs, buttons |
| **Eyebrows & Badges** | `Inter` (Uppercase, Tracking) | `tracking-[0.22em] uppercase text-gold` | Category labels, subtitles, status chips |

---

## 9. Content Management & Data Layer

All business content, project specifications, and media references are structured as typed TypeScript data modules in `src/data/`:

- **Company Data (`src/data/company.ts`)**: Corporate address, telephone numbers, support emails, office hours, GPS coordinates, and key milestones.
- **Projects Data (`src/data/projects.ts`)**: Structured project entities including slug, title, category, status (`ongoing`, `upcoming`, `completed`), acreage, plot sizes, approval IDs (VMRDA/RERA), highlights, amenities list, location connectivity milestones, and image galleries.
- **Leadership Data (`src/data/directors.ts`)**: Executive names, titles, background summaries, and portrait assets.
- **Updates Data (`src/data/updates.ts`)**: On-site civil construction progress milestones.
- **Testimonials Data (`src/data/testimonials.ts`)**: Verified customer feedback, project association, and investor reviews.

To add a new project or update pricing, edit `src/data/projects.ts` without modifying component layout code.

---

## 10. Forms, API & Backend Integration

### Current Implementation
Form submissions on `/contact` and in the global `EnquiryModal` are managed via `react-hook-form`. In the default standalone configuration, submissions validate all inputs and simulate successful delivery with interactive visual feedback and submission reset.

### Connecting to a Production Backend / CRM
To connect forms to an external REST endpoint, Supabase, or CRM (e.g., Salesforce, HubSpot, or a custom webhook):

1. Define your API endpoint in `.env`:
   ```env
   VITE_CONTACT_API_URL=https://api.sriparinitheeinfra.com/v1/enquiries
   ```
2. In `src/components/forms/EnquiryForm.tsx`, replace the simulated `setTimeout` in `onSubmit` with a standard `fetch` call:
   ```typescript
   const onSubmit = async (data: EnquiryFormData) => {
     setIsSubmitting(true);
     try {
       const response = await fetch(import.meta.env.VITE_CONTACT_API_URL || '/api/enquiries', {
         method: 'POST',
         headers: { 'Content-Type': 'application/json' },
         body: JSON.stringify(data),
       });
       if (!response.ok) throw new Error('Submission failed');
       setIsSubmitted(true);
     } catch (err) {
       console.error('Submission error:', err);
     } finally {
       setIsSubmitting(false);
     }
   };
   ```

---

## 11. Deployment Guide

Because the application is built with Vite as a pure Single-Page Application (SPA), the output directory `dist/` contains purely static HTML, CSS, JavaScript, and image assets. It can be hosted on any static hosting provider.

### Vercel
Deploy via the Vercel CLI:
```bash
npm install -g vercel
vercel
```
Ensure your project settings have:
- **Framework Preset**: Vite
- **Build Command**: `npm run build`
- **Output Directory**: `dist`
- **Rewrite Rules**: For client-side routing, add a `vercel.json` file in the project root:
  ```json
  {
    "rewrites": [{ "source": "/(.*)", "destination": "/index.html" }]
  }
  ```

### Netlify
Create a `public/_redirects` file (or configure in `netlify.toml`):
```text
/*    /index.html   200
```
Deploy command:
```bash
npm run build
```

### Static Web Servers (Nginx / Apache)
For Nginx, route all non-file requests to `index.html`:
```nginx
server {
    listen 80;
    server_name sriparinitheeinfra.com;
    root /var/www/sri-parinithee/dist;
    index index.html;

    location / {
        try_files $uri $uri/ /index.html;
    }

    # Enable gzip compression for production performance
    gzip on;
    gzip_types text/plain text/css application/json application/javascript text/xml application/xml image/svg+xml;
}
```

---

## 12. Git Workflow & Version Control

If this project is being initialized into a Git repository for the first time:

1. **Initialize Git**:
   ```bash
   git init
   ```
2. **Verify Ignored Files**:
   ```bash
   git status
   ```
   Confirm that `node_modules/`, `dist/`, `.env`, and OS files (`.DS_Store`) are correctly ignored by `.gitignore`.
3. **Stage & Commit**:
   ```bash
   git add .
   git commit -m "feat: initial commit of Sri Parinithee web platform"
   ```
4. **Link Remote Repository**:
   ```bash
   git remote add origin <your-repository-url>
   git branch -M main
   git push -u origin main
   ```

> [!NOTE]
> `.gitignore` protects untracked sensitive files from being committed. If any sensitive file was already committed to Git in the past, adding it to `.gitignore` will not remove it from Git history. Use `git rm --cached <file>` to stop tracking it.

---

## 13. Security & Best Practices

- **Zero Secret Exposure**: Never commit `.env` or files containing production credentials or API keys. Always use `.env.example` as a template with mock keys.
- **Input Sanitization**: Contact and site-visit forms perform strict client-side validation and regex matching to guard against malformed data.
- **Resource Integrity**: External Google Fonts are loaded via secure `https://` with `crossorigin` flags.
- **Performance & CWV**: Large architectural assets utilize `fetchPriority="high"` on hero visuals, lazy loading on below-the-fold media, and modern compressed formats.

---

## 14. License & Copyright

Copyright © 2026 **Sri Parinithee Infra Developers Pvt. Ltd.** All Rights Reserved.

This codebase, including its architectural design, logos, brand photography, and copy, is proprietary software developed exclusively for Sri Parinithee Infra Developers Pvt. Ltd. Unauthorized copying, modification, redistribution, or commercial use is strictly prohibited without prior written authorization.
# sri-parinithee-infra-dev
