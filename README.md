# Jakel Plumbing Website

Marketing website for Jakel Plumbing, Heating & Electrical Contractors Inc. Built with Next.js and Sanity CMS. **This project is live and deployed in production.**

## Tech Stack

- [Next.js 16](https://nextjs.org) (App Router) + React 19 + TypeScript
- [Sanity](https://www.sanity.io) headless CMS ([`next-sanity`](https://github.com/sanity-io/next-sanity))
- Tailwind CSS
- Framer Motion, React Three Fiber / Drei / Three.js (3D/animated visuals)
- Swiper (carousels), react-icons
- Nodemailer (contact form email delivery)
- next-seo

## Project Structure

- `src/app` — Next.js App Router pages, layout, sitemap, robots.txt
- `src/components/sections` — page sections (Hero, About, Services, Contact)
- `src/components/ui` — shared UI components (Header, Footer, etc.)
- `src/components/3d` — 3D/animated visual components
- `src/lib` — utilities and Sanity client config
- `sanity.config.ts` — Sanity Studio configuration embedded in the Next.js app
- `jakel-plumbing/` — standalone Sanity Studio project (schema types, deploy config)

## Getting Started

Install dependencies and run the development server:

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to view the site.

Other scripts:

```bash
npm run build   # production build
npm run start   # run the production build
npm run lint    # lint the project
```

### Sanity Studio

The CMS schema lives in `jakel-plumbing/`. To run the Studio locally:

```bash
cd jakel-plumbing
npm install
npm run dev
```

## Deployment

This site is deployed and running in production. Changes should be tested locally (`npm run build`) before being merged/deployed.

---

Developed by [AIOTA Labs](https://aiotalabs.com)
