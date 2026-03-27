# Sachin Murali's Portfolio

Personal portfolio website built with Next.js 16, Tailwind CSS v4, Framer Motion, and Three.js.

## Tech Stack

- **Next.js 16** — App Router, TypeScript, strict mode
- **Tailwind CSS v4** — via `@tailwindcss/postcss`
- **Framer Motion** — scroll and entrance animations
- **Three.js** — 3D neural network background (`@react-three/fiber` + `@react-three/drei`)
- **lucide-react** — icons

## Getting Started

```bash
npm install
npm run dev
```

## Scripts

| Command           | Description              |
|-------------------|--------------------------|
| `npm run dev`     | Start development server |
| `npm run build`   | Production build         |
| `npm run start`   | Start production server  |
| `npm run lint`    | Run ESLint               |

## Project Structure

```
app/
  layout.tsx        Root layout and font loading
  page.tsx          Single page composing all sections
  globals.css       Global styles (Tailwind v4)

components/
  Nav.tsx           Navigation bar
  Hero.tsx          Hero section with 3D background
  NeuralNetwork3D.tsx  Three.js neural network scene
  Experience.tsx    Work experience timeline
  Projects.tsx      Project cards grid
  Skills.tsx        Technical skills
  Awards.tsx        Awards and achievements
  Contact.tsx       Contact information
  Footer.tsx        Site footer
```
