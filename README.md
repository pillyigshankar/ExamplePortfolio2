# Pillyi G Shankar — Portfolio

A modern, animated personal portfolio website built with **Next.js 16**, **React 19**, **TypeScript**, **Tailwind CSS v4**, and **Framer Motion**. Showcases skills, projects, journey, achievements, and contact details with a warm earthy aesthetic.

---

## ✨ Features

- **Animated hero section** with floating badges, background blobs, and scroll indicator
- **Sticky navigation bar** that highlights the active section via IntersectionObserver
- **Mobile-first responsive** layout with a smooth side-drawer menu
- **Scroll-reveal animations** on every section using Framer Motion
- **Skills grid** organized by category (Frontend, Backend, Tools, CS Fundamentals)
- **Bento-grid project cards** with a modal for detailed descriptions
- **Chronological journey timeline** with alternating left/right layout
- **Achievements cards** for certifications and hackathons
- **Contact form** with client-side validation and success animation
- **Custom design system** with CSS variables for a consistent warm color palette

---

## 🛠️ Tech Stack

| Layer | Technology |
|---|---|
| Framework | [Next.js 16](https://nextjs.org/) (App Router) |
| Language | TypeScript 5 |
| Styling | Tailwind CSS v4, Custom CSS Variables |
| Animations | Framer Motion 12 |
| UI Icons | Lucide React, React Icons |
| Fonts | Inter, Playfair Display (Google Fonts) |
| Package Manager | npm |

---

## 📁 Project Structure

```
├── app/
│   ├── layout.tsx        # Root layout — metadata, fonts, global styles
│   ├── page.tsx          # Home page — assembles all sections
│   └── globals.css       # CSS variables, base styles, utility classes
├── components/
│   ├── layout/
│   │   ├── Navbar.tsx    # Sticky nav with active-section highlight
│   │   └── Footer.tsx    # Footer with social links
│   ├── sections/
│   │   ├── Hero.tsx      # Animated landing section
│   │   ├── About.tsx     # Bio, stats, expertise cards
│   │   ├── Skills.tsx    # Categorised skill badges + language strip
│   │   ├── Projects.tsx  # Bento-grid project cards + detail modal
│   │   ├── Journey.tsx   # Vertical timeline
│   │   ├── Achievements.tsx  # Certification / hackathon cards
│   │   └── Contact.tsx   # Contact info + message form
│   └── ui/
│       ├── ScrollReveal.tsx  # Reusable scroll-triggered animation wrapper
│       └── SectionHeader.tsx # Eyebrow + title + subtitle block
├── lib/
│   └── utils.ts          # `cn()` helper (clsx + tailwind-merge)
├── public/               # Static assets
├── next.config.ts
├── tsconfig.json
├── eslint.config.mjs
└── postcss.config.mjs
```

---

## 🚀 Getting Started

### Prerequisites

- **Node.js** 18 or later
- **npm** 9 or later (comes with Node.js)

### Installation

```bash
# 1. Clone the repository
git clone https://github.com/pillyigshankar/ExamplePortfolio2.git
cd ExamplePortfolio2

# 2. Install dependencies
npm install

# 3. Start the development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

---

## 📜 Available Scripts

| Script | Description |
|---|---|
| `npm run dev` | Start development server with hot-reload |
| `npm run build` | Create optimised production build |
| `npm run start` | Serve the production build locally |
| `npm run lint` | Run ESLint across the codebase |

---

## 🎨 Design System

All colors are defined as CSS custom properties in `app/globals.css`:

| Variable | Value | Usage |
|---|---|---|
| `--bg` | `#F5EFE6` | Page background |
| `--bg-secondary` | `#E8DFD1` | Section backgrounds |
| `--bg-tertiary` | `#DDD0BC` | Card backgrounds |
| `--accent` | `#B08968` | Primary accent / CTA |
| `--accent-dark` | `#8B6A4E` | Hover / gradient end |
| `--accent-light` | `#C9A882` | Subtle highlights |
| `--text` | `#2B2B2B` | Primary text |
| `--text-muted` | `#6B6357` | Secondary text |
| `--text-subtle` | `#9C8E82` | Placeholder / captions |

---

## 🏗️ Key Components

### `ScrollReveal`
A reusable wrapper that animates children into view using `framer-motion`'s `useInView`. Supports `up`, `down`, `left`, `right`, and `none` directions with configurable delay and duration.

### `SectionHeader`
Renders a consistent eyebrow label, heading, and optional subtitle for every section. Supports centered alignment.

### `Navbar`
- Observes section visibility via `IntersectionObserver` to highlight the active link.
- Transitions to a frosted-glass style after scrolling 40 px.
- Collapses to a slide-in drawer on mobile.

---

## 📬 Contact

| Platform | Link |
|---|---|
| Email | [pillyi.shankar@email.com](mailto:pillyi.shankar@email.com) |
| GitHub | [github.com/pillyi-gshankar](https://github.com/pillyi-gshankar) |
| LinkedIn | [linkedin.com/in/pillyi-gshankar](https://linkedin.com/in/pillyi-gshankar) |

---

## 📄 License

This project is open-source and available under the [MIT License](LICENSE).
