## Sachin Jaiswal – Developer Portfolio

This repository contains the source code for **Sachin Jaiswal’s personal developer portfolio**, built with **React**, **Vite**, and **Tailwind CSS**.  
The site showcases Sachin’s profile, experience, projects, and skills in a clean, responsive single‑page layout.

### Tech Stack

- **Framework**: React (with Vite)
- **Styling**: Tailwind CSS + custom utility classes
- **Icons & Animations**: `lucide-react`, basic CSS/utility animations
- **Tooling**: ESLint, PostCSS, Autoprefixer

### Features

- **Responsive layout** with sections for Hero, About, Experience, Projects, Skills, and Contact
- **Sticky navigation bar** with smooth scroll between sections
- **Dark/Light mode toggle** with preference persisted in `localStorage`
- **Project and skills cards** with hover effects
- **Contact section** with email and social links

### Getting Started

#### 1. Prerequisites

- Node.js (LTS recommended)
- npm (comes with Node)

#### 2. Install dependencies

```bash
npm install
```

#### 3. Run the development server

```bash
npm run dev
```

Open the printed local URL (usually `http://localhost:5173`) in your browser.

#### 4. Build for production

```bash
npm run build
```

To preview the production build locally:

```bash
npm run preview
```

### Project Structure (simplified)

- `src/main.jsx` – React entry point
- `src/App.jsx` – Root component that wires together all sections
- `src/components/Navbar.jsx` – Top navigation bar with mobile menu
- `src/components/Hero.jsx` – Hero / introduction section
- `src/components/About.jsx` – About section
- `src/components/Experience.jsx` – Experience timeline
- `src/components/Projects.jsx` – Featured projects
- `src/components/Skills.jsx` – Skills & tools
- `src/components/Contact.jsx` – Contact information and form
- `src/components/Footer.jsx` – Footer
- `src/index.css` – Global styles and Tailwind base

### Customization

- Update personal details, links, and text inside the components in `src/components`.
- Adjust colors, spacing, and typography via Tailwind classes and `index.css`.

### License

This project is intended as a personal portfolio. You may use it as inspiration, but please **do not publish it as-is under your own name** without proper attribution.
