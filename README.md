# React-Router-Course

A small React Router learning project. Built with [Vite](https://vite.dev) and React 19.

## Development

```bash
npm install
npm run dev
```

## Scripts

- `npm run dev` — start the dev server
- `npm run build` — type-check and build for production
- `npm run preview` — preview the production build locally
- `npm run lint` — run oxlint

## Deploy to GitHub Pages

The app is configured to live under the `/React-Router-Course/` path (see `base` in
`vite.config.ts`). Deep links are handled via `public/404.html`, which redirects unmatched
requests back into the app.

1. Build the production bundle:

   ```bash
   npm run build
   ```

2. Publish the `dist/` folder to the `gh-pages` branch:

   ```bash
   npx gh-pages -d dist
   ```

3. In the repository settings, set **Pages** → **Source** to the `gh-pages` branch.

The site will be available at `https://<username>.github.io/React-Router-Course/`.
