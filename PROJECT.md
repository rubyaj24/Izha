# Izha Clothing Brand Landing Page

A single-page streetwear brand landing page for **Izha Originals**, built with React 18, TypeScript, Tailwind CSS v4, and Vite.

> Originally designed in Figma and exported as a code bundle. Migrated to Bun from Node.

---

## Tech Stack

| Layer | Technology |
|-------|-----------|
| Runtime | [Bun](https://bun.sh) v1.3.13 |
| Framework | React 19 |
| Language | TypeScript |
| Build Tool | Vite 6.3.5 |
| React Compiler | SWC (via `@vitejs/plugin-react-swc`) |
| Styling | Tailwind CSS v4 |
| 3D | Three.js + @react-three/fiber + @react-three/drei |
| Icons | lucide-react |
| Package Manager | Bun |

---

## Project Structure

```
Izha/
├── index.html                     # Root HTML shell (<div id="root">, title: "Izha Originals")
├── package.json                   # Dependencies, scripts, Bun as package manager
├── bun.lock                       # Bun-generated lockfile
├── vite.config.ts                 # Vite config: SWC plugin, resolve aliases, Figma asset mappings
├── tsconfig.json                  # TypeScript configuration
├── PROJECT.md                     # This file
├── README.md                      # Original brief README
├── Attributions.md                # Licenses for shadcn/ui and Unsplash photos
├── .gitignore
├── src/
│   ├── main.tsx                   # Entry point — mounts <App /> into #root
│   ├── App.tsx                    # Root layout — composes all sections
│   ├── index.css                  # Compiled Tailwind v4 output (auto-generated, 1882 lines)
│   ├── assets/
│   │   ├── 78c11120a480ed9adea0f06b220bd2e06ffd98aa.png  # Oversized Tee MockUp
│   │   ├── d14a40fe41784861ec7f21d1f7fb0713de4b2d65.png  # Photo cutout (Rectangle 2)
│   │   └── e85c781d2e12fe9265c58aa9c75b7ae97e9f530e.png  # Photo cutout (Rectangle 1)
│   ├── components/
│   │   ├── Header.tsx              # Fixed top nav: logo, links, search/cart icons, mobile hamburger
│   │   ├── Hero.tsx                # Full-screen hero: logo, tagline, CTA buttons (red bg)
│   │   ├── FeaturedProduct.tsx     # "FREAKZ X IZHA MERCH" — product grid, size selector, add-to-cart
│   │   ├── FeaturedCollections.tsx # 3-card grid: ESSENTIALS, LIMITED DROPS, ACCESSORIES
│   │   ├── BrandStory.tsx          # "THE IZHA WAY" — brand narrative with stats (red bg)
│   │   ├── Newsletter.tsx          # Email signup form with success feedback
│   │   ├── Footer.tsx              # 4-column footer: logo, links, social icons, copyright
│   │   ├── Logo.tsx                # SVG logo (reads path data from imports/)
│   │   ├── tshirt/
│   │   │   ├── TshirtGenerator.tsx # Main generator page: color picker, logo upload, front/back toggle
│   │   │   ├── TshirtViewer.tsx    # R3F Canvas: GLB model, dynamic texture, orbit controls
│   │   │   ├── ColorPicker.tsx     # 10 color presets
│   │   │   ├── ArtworkUploader.tsx # File input → HTMLImageElement
│   │   │   └── GeneratorPromo.tsx  # Home page promo section linking to /generator
│   │   ├── figma/
│   │   │   └── ImageWithFallback.tsx  # <img> wrapper with error fallback placeholder
│   │   └── ui/
│   │       ├── button.tsx          # Variants: default/destructive/outline/secondary/ghost/link
│   │       ├── input.tsx
│   │       └── utils.ts            # cn() — clsx + tailwind-merge utility
│   ├── imports/
│   │   ├── Frame2.tsx              # Figma "Frame 2" component — layered mockup with images, masks, logo
│   │   └── svg-ytgkekn1z1.ts       # SVG path data for the Izha logo (42 paths)
│   └── styles/
│       └── globals.css             # Tailwind v4 source — @theme, CSS variables, base layer, dark mode
└── dist/                           # Production build output
```

---

## Architecture

### Component Hierarchy

```
index.html
  └─ src/main.tsx
       └─ App.tsx
            ├─ Header              (fixed nav bar)
            ├─ <main>
            │    ├─ Hero           (full-screen banner)
            │    ├─ FeaturedProduct (product showcase)
            │    ├─ FeaturedCollections (collection grid)
            │    ├─ BrandStory     (brand narrative)
            │    └─ Newsletter     (email signup)
            └─ Footer             (links + social)
```

### Data Flow

- **Routing** — `/` (landing page) and `/generator` (T-shirt designer) via react-router-dom
- **T-shirt Generator** — `/generator` lazy-loaded with `React.lazy`, code-split from main bundle
- **No global state management** — `Newsletter.tsx` uses local `useState` for form input and feedback
- **Static content** — all text and product data is hardcoded in components
- **Responsive** — `Header` uses a hamburger menu on mobile; layout adapts via Tailwind breakpoints

---

## Components

| Component | Description |
|-----------|-------------|
| `Header` | Fixed top bar (`bg-black/95` with backdrop blur). Izha logo left, nav links (Shop, Collections, About, Contact) on desktop, Search & ShoppingBag icons, hamburger/X toggle for mobile menu |
| `Hero` | Full-screen red (`#ea2525`) hero with Izha logo, "STREETWEAR REDEFINED" tagline, subtitle, and "Shop Now" / "View Collection" buttons |
| `FeaturedProduct` | "FREAKZ X IZHA MERCH" collaboration tee — 2×2 product view grid, name, description, price ($85, was $120), size selector (S–XXL), "ADD TO CART" button |
| `FeaturedCollections` | 3-column grid: ESSENTIALS, LIMITED DROPS, ACCESSORIES. Each card has Unsplash background image (via `ImageWithFallback`), hover zoom effect, "EXPLORE" link |
| `BrandStory` | "THE IZHA WAY" section on red bg — two brand paragraphs + three stats: "100% Original", "Infinite Attitude", "1 Movement" |
| `Newsletter` | "JOIN THE MOVEMENT" — email input + "SUBSCRIBE" button with 3s success feedback |
| `Footer` | 4 columns: Izha logo + tagline, Shop links, About links, Connect (Instagram/Facebook/Twitter icons) |
| `Logo` | Renders the Izha SVG logo from path data in `imports/svg-ytgkekn1z1.ts` |
| `GeneratorPromo` | "START DESIGNING" promo section on home page linking to `/generator` |
| `TshirtGenerator` | Main generator page: color picker, logo upload, front/back placement toggle, download PNG |
| `TshirtViewer` | R3F Canvas with GLB model, dynamic canvas texture, OrbitControls, Environment, loading bar |
| `ColorPicker` | 10 color presets (black, white, ash gray, navy, izha red, heather gray, olive, burgundy, royal blue, sand) |
| `ArtworkUploader` | File input → HTMLImageElement, reusable with custom label |
| `ImageWithFallback` | Reusable `<img>` wrapper that shows a gray placeholder with broken-image icon on error |

---

## UI Components

Minimal set of shared UI components in `src/components/ui/`:
- **`button.tsx`** — used in Hero, Newsletter, Header, FeaturedCollections, Generator
- **`input.tsx`** — used in Newsletter
- **`utils.ts`** — `cn()` utility (`clsx` + `tailwind-merge`)

---

## Design System

### Colors (CSS Custom Properties)

Defined in `src/styles/globals.css` with light and dark variants:

| Variable | Light | Dark |
|----------|-------|------|
| `--background` | `oklch(1 0 0)` | `oklch(0.145 0 0)` |
| `--foreground` | `oklch(0.145 0 0)` | `oklch(0.985 0 0)` |
| `--primary` | `oklch(0.205 0.042 265.755)` | `oklch(0.985 0 0)` |
| `--primary-foreground` | `oklch(0.985 0 0)` | `oklch(0.205 0.042 265.755)` |
| `--secondary` | `oklch(0.965 0.001 286.375)` | `oklch(0.269 0.015 168.708)` |
| `--destructive` | `oklch(0.577 0.245 27.325)` | `oklch(0.704 0.191 22.216)` |
| `--border` | `oklch(0.922 0.004 286.375)` | `oklch(1 0 0 / 10%)` |
| `--radius` | `0.625rem` | `0.625rem` |

### Dark Mode

- Toggled via `.dark` class on `<html>` using `next-themes`
- Variables in `.dark` block override the light defaults
- Component styles use `dark:` variants where needed

### Typography

Base styles set in `globals.css`:
- HTML font-size: `16px`
- `h1`: 2.5rem / bold
- `h2`: 2rem / semibold
- `h3`: 1.5rem / semibold
- `h4`: 1.25rem / semibold
- Default body: 0.875rem (14px) / normal weight

---

## Figma Integration

This project was exported from Figma and retains several characteristics:

### Version-Scoped Imports

The codebase imports packages with explicit version suffixes (e.g., `lucide-react@0.487.0`). These are mapped to actual packages via resolve aliases in `vite.config.ts`:

```ts
resolve: {
  alias: {
    'lucide-react@0.487.0': 'lucide-react',
    'sonner@2.0.3': 'sonner',
    // ... all other packages
  }
}
```

### Figma Asset Aliases

Three PNG assets are referenced with `figma:asset/...` URLs and mapped to local files:

```ts
'figma:asset/e85c781d2e12fe9265c58aa9c75b7ae97e9f530e.png': path.resolve(__dirname, './src/assets/...'),
```

### Frame2 Component

`src/imports/Frame2.tsx` is a Figma-exported canvas frame containing positioned elements (mockup image, SVG overlays, mask groups, decorative lines). It's imported by `FeaturedProduct.tsx` which extracts the mockup image URL from it (but does not render the frame itself).

---

---

## Troubleshooting: T-shirt Generator Blank Screen

### Symptom

Navigating to `/generator` shows a white/blank screen. The `<Suspense>` fallback never appears. Console error:

```
TypeError: Cannot read properties of undefined (reading 'S')
    at Tt.exports (chunk-ANNXN7OP.js:8136:528)
    at createReconciler (events-b389eeca.esm.js:15019:27)
```

### Root Cause

The error originates inside `@react-three/fiber`'s bundled `react-reconciler` (v0.33.0, inlined in `events-b389eeca.esm.js`). Two issues were identified:

1. **`scheduler` not in Vite's dep pre-bundle** — `@react-three/fiber` depends on `scheduler` (a CJS-only package from the React repo). When R3F is excluded from Vite dep optimization (`optimizeDeps.exclude`), the `scheduler` import resolves to raw CJS code that the browser cannot execute. Vite does not automatically discover dependencies of excluded packages. Adding `scheduler` to `optimizeDeps.include` forces Vite to pre-bundle it into ESM, and the CJS→ESM conversion succeeds (verified by examining the optimized chunk).

2. **React 19 internals mismatch** — React 19 renamed `__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED` to `__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE`. The old path is `undefined` in React 19.2.6. The inlined reconciler in R3F 9.6.1 uses the new path (`__CLIENT_INTERNALS...`) but may still have subtle runtime incompatibilities with React 19.2.x.

> The production build (`bun run build`) succeeds and produces correct bundles — the error is dev-server specific.

### Next Steps

- **Short-term**: Downgrade to React 18 + R3F 8.x (`@react-three/fiber@^8`, `@react-three/drei@^9`). R3F 8.x uses a reconciler built for React 18 internals.
- **Alternative**: Pin React to exactly `19.0.0` (R3F peer dep allows `>=19 <19.3`) to test if 19.2.x introduced a regression.
- **Fallback**: Use raw Three.js (no R3F) for the 3D viewer if the reconciler issue proves intractable.

### Simplified Generator (current)

The generator now uses a minimal approach:
- **Canvas texture**: A 1024×1024 `<canvas>` painted with the selected t-shirt color + logo image
- **Front/Back**: Logo drawn at different positions on the canvas (center for front, offset for back)
- **No PSD**: `ag-psd` removed; `TextureCompositor.ts` and `TshirtDesignCanvas.tsx` deleted
- **Controls**: Color picker (10 presets) → logo upload → front/back toggle → download PNG

---

## Getting Started

### Prerequisites

- [Bun](https://bun.sh) v1.3.13+ (install: `powershell -c "irm bun.sh/install.ps1 | iex"`)

### Commands

```bash
# Install dependencies
bun install

# Start dev server (opens http://localhost:3000)
bun run dev

# Production build (outputs to dist/)
bun run build
```

### Scripts

| Script | Command | Description |
|--------|---------|-------------|
| `dev` | `vite` | Start Vite dev server on port 3000 |
| `build` | `vite build` | Build for production to `dist/` |

---

## Dependencies

### Runtime (12)

@radix-ui/react-slot, @react-three/fiber, @react-three/drei, class-variance-authority, clsx, lucide-react, react, react-dom, react-router-dom, tailwind-merge, three

### Development (4)

@types/node, @vitejs/plugin-react-swc, patch-package, vite
