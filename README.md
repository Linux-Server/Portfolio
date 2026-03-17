# Sachin Murali — Portfolio

Personal portfolio website built with Next.js, Tailwind CSS, Framer Motion, and Three.js.

## Prerequisites

- [Node.js](https://nodejs.org/) v18 or higher
- npm, yarn, pnpm, or bun

## Installation

1. Clone the repository:

```bash
git clone https://github.com/sachin-murali/portfolio.git
cd portfolio
```

2. Install dependencies:

```bash
npm install
# or
yarn install
# or
pnpm install
```

## Running Locally

Start the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

## Building for Production

```bash
npm run build
npm run start
```

## Project Structure

```
├── app/
│   ├── layout.tsx       # Root layout, fonts, metadata
│   ├── page.tsx         # Main page
│   └── globals.css      # Global styles
├── components/          # Section components
│   ├── Nav.tsx
│   ├── Hero.tsx
│   ├── NeuralNetwork3D.tsx
│   ├── Experience.tsx
│   ├── Projects.tsx
│   ├── Skills.tsx
│   ├── Awards.tsx
│   ├── Contact.tsx
│   └── Footer.tsx
└── public/              # Static assets
```

## Tech Stack

- [Next.js 16](https://nextjs.org/) — React framework
- [Tailwind CSS v4](https://tailwindcss.com/) — Styling
- [Framer Motion](https://www.framer.com/motion/) — Animations
- [Three.js](https://threejs.org/) + [React Three Fiber](https://docs.pmnd.rs/react-three-fiber) — 3D graphics
- [TypeScript](https://www.typescriptlang.org/) — Type safety

## Deployment

Deploy instantly with [Vercel](https://vercel.com/):

```bash
npm run build
```

Or connect the repository to Vercel for automatic deployments on push.
