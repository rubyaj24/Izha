# Problems

## Blank page on `/generator`

**Cause (fixed):** `@react-three/fiber` inlines `react-reconciler` which accesses React internal symbols that were renamed in React 19 or had compatibility issues with React 18 + R3F 8.x.

**Fix:** Replaced `@react-three/fiber` + `@react-three/drei` with pure Three.js (`GLTFLoader` + `OrbitControls`). No reconciler dependency, no abstraction layer — direct WebGL rendering.

### What was wrong before the fix

1. **R3F reconciler crash** — `react-reconciler` inside R3F accessed `React.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED` which is undefined on React 19. Downgrading to React 18 + R3F 8.x didn't fully resolve for unknown reasons.

2. **Canvas created during render** — `generateTexture()` was called inline in JSX, creating a new `HTMLCanvasElement` on every render. Caused unnecessary re-renders and potential conflicts with React's rendering lifecycle. Fixed with `useMemo`.

3. **GLB model reload on every state change** — The Three.js setup effect depended on `textureCanvas`, causing the entire scene (including 39MB GLB reload) to reconstruct on every color/logo change. Fixed by splitting into: one-time setup effect (load model, create renderer) + texture-only effect.

### Current architecture

```
TshirtGenerator (state: color, logo, side)
  ├── useMemo → buildTextureCanvas() → HTMLCanvasElement (1024×1024)
  ├── TshirtViewer
  │     ├── Effect 1 (runs once): create renderer, scene, camera, lights, load GLB
  │     ├── Effect 2 (runs on textureCanvas change): apply new texture to model meshes
  │     └── Loading overlay while GLB loads
  ├── ColorPicker (10 presets)
  ├── ArtworkUploader (file → HTMLImageElement)
  └── Front/Back toggle + Download PNG
```

### Remaining concerns

- **25.6 MB GLB file**: Still large, first load may be slow on slow connections.
- **Logo placement**: Logo drawn at fixed canvas positions (front=center, back=offset). May need adjustment if the GLB's UV map doesn't align with the 1024×1024 canvas.
