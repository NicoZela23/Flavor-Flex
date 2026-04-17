# Flavor-Flex 🍳

A recipe discovery app built to practice React, TypeScript, REST API integration, and deployment with Vercel. Users can search recipes, view details, and save favorites — all persisted in localStorage.

## What I Practiced

- React 18 with hooks (`useState`, `useEffect`, custom hooks)
- TypeScript interfaces and type safety across components
- React Router v6 for client-side navigation
- Fetching and handling data from a third-party REST API
- Tailwind CSS for responsive, utility-first styling
- CI/CD pipeline with GitHub Actions deploying to Vercel

## Live Demo

Deployed on Vercel — check the deployments tab or the URL pinned in the repo.

## Tech Stack

| Layer | Technology |
|-------|-----------|
| UI | React 18 + TypeScript |
| Routing | React Router v6 |
| Styling | Tailwind CSS |
| Build | Vite 5 |
| Testing | Jest + React Testing Library |
| Linting | ESLint + typescript-eslint |
| Deployment | Vercel via GitHub Actions |

## API

Uses the **Forkify API** (`https://forkify-api.herokuapp.com/api/v2`) — no authentication required.

| Endpoint | Purpose |
|----------|---------|
| `GET /recipes?search={query}` | Search recipes by name |
| `GET /recipes/{id}` | Fetch full recipe details |

## Features

- Search recipes by name
- Browse results in a responsive card grid
- View full recipe: ingredients, servings, cooking time, link to directions
- Save/unsave favorites — persisted in `localStorage`
- Animated frying pan on empty states

## Project Structure

```
src/
├── components/
│   ├── molecules/       # Small reusable UI pieces (FryingPan animation)
│   ├── organisms/       # Feature components (Navbar, RecipeCard, RecipePage, Favorites, Footer)
│   └── templates/       # Page layouts (Home)
├── hooks/
│   └── useRecipe.ts     # Custom hook — fetches single recipe by ID
├── types/               # TypeScript interfaces (RecipeCardType, RecipePageType, Ingredient)
├── App.tsx              # Router setup
└── main.tsx             # Entry point
```

## Routes

| Path | Page |
|------|------|
| `/` | Home — search results |
| `/favourites` | Saved recipes |
| `/recipe-item/:id` | Recipe detail |

## Getting Started

```bash
# Install dependencies
npm install

# Start dev server with HMR
npm run dev

# Build for production
npm run build

# Preview production build locally
npm run preview
```

## Deployment

CI/CD via GitHub Actions + Vercel:

- **Push to `main`** → production deployment
- **Push to any other branch** → preview deployment

Required GitHub secrets:

```
VERCEL_TOKEN
VERCEL_ORG_ID
VERCEL_PROJECT_ID
```

To deploy manually with the Vercel CLI:

```bash
npm i -g vercel
vercel        # preview
vercel --prod # production
```

## Scripts

```bash
npm run dev        # Dev server
npm run build      # tsc + vite build
npm run preview    # Preview build
npm run lint       # ESLint
npm test           # Jest tests
```
