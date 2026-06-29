# CSRA Enterprise Intranet Modernization

A portfolio project demonstrating a full modernization of a legacy SharePoint 2010 enterprise intranet into a contemporary React application — rebuilt from the ground up using a modern frontend stack and deployed to both Vercel and Google Cloud Run via Docker.

🔗 **Live Demo:** [csra-modern.vercel.app](https://csra-modern.vercel.app)

---

## Overview

This project reimagines a real-world federal contractor intranet (originally built on SharePoint 2010) as a performant, accessible, and maintainable React application. The goal was to demonstrate how legacy enterprise platforms can be modernized without sacrificing the structure and content employees rely on — while gaining significant improvements in speed, accessibility, and developer experience.

The original SharePoint intranet served internal users across a large government contracting organization. This modernized version preserves the information architecture and key functionality while introducing a component-driven UI, type-safe data handling, and cloud-native deployment.

---

## Tech Stack

| Layer | Technology |
|---|---|
| Framework | React 19 + React Router v7 |
| Language | TypeScript |
| Styling | Tailwind CSS v4, Material UI |
| Build Tool | Vite |
| Containerization | Docker (multi-stage build) |
| Cloud Deployment | GCP Cloud Run via Artifact Registry |
| Static Deployment | Vercel |
| Testing | TypeScript-based structure and CSS validation tests |

---

## Key Features

- **Legacy-to-modern migration** — Faithfully reconstructs SharePoint 2010 intranet content and navigation in a React component architecture
- **Dual deployment** — Containerized with Docker and deployed to GCP Cloud Run; also deployed to Vercel for rapid static hosting
- **GCP Artifact Registry** — Docker image built and pushed to Google Artifact Registry before Cloud Run deployment
- **Type-safe throughout** — Full TypeScript coverage across routes, components, and configuration
- **Tailwind CSS v4** — Uses the latest Tailwind release with updated configuration conventions
- **React Router v7** — File-based routing with server-side rendering support via the React Router framework mode
- **Accessibility-conscious** — Built with semantic HTML and WCAG-aligned markup patterns

---

## Architecture

```
csra/
├── app/                    # React Router app directory
│   ├── routes/             # File-based route components
│   ├── components/         # Shared UI components
│   └── root.tsx            # Root layout and global providers
├── public/                 # Static assets
├── Dockerfile              # Multi-stage Docker build
├── .dockerignore
├── react-router.config.ts  # React Router framework configuration
├── vite.config.ts          # Vite build configuration
├── tsconfig.json
├── codestructure.test.ts   # Component structure validation
├── csstest.test.ts         # CSS/styling validation
└── package.json
```

---

## Getting Started

### Prerequisites

- Node.js 20+
- npm

### Local Development

```bash
# Install dependencies
npm install

# Start dev server with HMR
npm run dev
```

App will be available at `http://localhost:5173`.

### Production Build

```bash
npm run build
npm start
```

---

## Docker Deployment

### Build and run locally

```bash
docker build -t csra-modern .
docker run -p 3000:3000 csra-modern
```

### Deploy to GCP Cloud Run

```bash
# Authenticate
gcloud auth login

# Build and push to Artifact Registry
gcloud builds submit --tag REGION-docker.pkg.dev/PROJECT_ID/REPO/csra-modern

# Deploy to Cloud Run
gcloud run deploy csra-modern \
  --image REGION-docker.pkg.dev/PROJECT_ID/REPO/csra-modern \
  --platform managed \
  --allow-unauthenticated \
  --region us-central1
```

> **Note:** This project resolves a known build output path issue specific to `@vercel/react-router` when deploying React Router v7 apps in framework mode to Cloud Run. The Dockerfile accounts for the correct `.next/standalone` vs `build/` output path depending on adapter configuration.

---

## Background & Motivation

Enterprise intranets built on SharePoint 2010 are common across federal contractors and government-adjacent organizations. Many remain in use well past their intended lifespan due to migration complexity and institutional inertia. This project demonstrates a practical modernization path: extract the content and IA from the legacy platform, rebuild the UI in a modern component system, and deploy via both serverless and containerized cloud targets.

This work reflects real experience supporting large-scale federal platforms and enterprise CMS environments.

---

## Related Projects Test

- [SaaSy Solutions](https://github.com/SurfBDeployments/SaasySolutions) — B2B SaaS analytics dashboard (Next.js, GraphQL, Redux, Recharts)


