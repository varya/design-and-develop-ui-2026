# Designing and Developing UI (2026)

Lecture deck for 30 September 2026. Source of truth for the slides is `slides.md`. `index.html` is the Reveal.js shell used while editing. A build step turns those two files into a static HTML deck (no Markdown fetch in the browser).

This folder lives in two places:

| Place | Role |
|---|---|
| [`my-content`](https://github.com/varya/my-content) → `presentations/2026-09-30_design-and-develop-ui/` | Working copy, next to other talks and posts |
| [`varya/design-and-develop-ui-2026`](https://github.com/varya/design-and-develop-ui-2026) | Public lecture repo. `main` is source. `gh-pages` is the hosted build |

Hosted URL (after GitHub Pages is set to the `gh-pages` branch, folder `/`):

https://varya.github.io/design-and-develop-ui-2026/

If `varya.github.io` redirects to `varya.me`, the same path is https://varya.me/design-and-develop-ui-2026/

---

## Preview while editing

From this folder:

```bash
python3 -m http.server 8000
```

Open http://localhost:8000/

Serve over HTTP. Reveal loads `slides.md` with `fetch()`, so `file://` will not work.

Edit `slides.md` and `theme.css`. Bump the `?v=` query on `slides.md` / `theme.css` in `index.html` if the browser caches an old version.

---

## Build a static deck

```bash
npm install
npm run build
```

This writes `output/`:

- `index.html` with HTML `<section>`s already inlined
- `theme.css`
- `pictures/` (and `icons/` if present)

`output/` is gitignored. Do not commit it. CI builds it on every push to `main`.

---

## Update the hosted lecture

The GitHub Action [Deploy to GitHub Pages](https://github.com/varya/design-and-develop-ui-2026/actions) watches `main` on `design-and-develop-ui-2026`. On each push it runs `npm run build` and replaces the `gh-pages` branch with `output/`.

1. Finish the slides in this folder (usually inside `my-content`).
2. Commit here (see below).
3. Commit the same folder contents to `main` on `design-and-develop-ui-2026` (see below).
4. Wait for the Action to go green.
5. Hard-refresh the hosted URL.

You can also run the workflow by hand: Actions → Deploy to GitHub Pages → Run workflow.

First-time Pages setup (once): repo **Settings → Pages → Deploy from a branch → `gh-pages` / root ( `/` )**.

---

## Commit in `my-content`

This is the archive. Commit the lecture folder like any other talk.

From the `my-content` root:

```bash
git add presentations/2026-09-30_design-and-develop-ui
git status
git commit -m "Update Designing and Developing UI 2026 lecture."
git push
```

Leave out `node_modules/` and `output/` (already gitignored).

Do this whenever the lecture changes, even if you also push the public repo. Otherwise the two copies drift.

---

## Commit in `design-and-develop-ui-2026`

That repo’s root **is** this folder (not nested under `presentations/`). A push to `main` is what updates the hosted lecture.

If you already have a clone:

```bash
LECTURE="$HOME/WebDev/Social/my-content/presentations/2026-09-30_design-and-develop-ui"
DEST="$HOME/WebDev/Talks/design-and-develop-ui-2026"

rsync -a --delete \
  --exclude node_modules \
  --exclude output \
  --exclude .git \
  --exclude .DS_Store \
  "$LECTURE/" "$DEST/"

cd "$DEST"
git add -A
git status
git commit -m "Update lecture slides."
git push origin main
```

If you do not have a clone yet:

```bash
git clone git@github.com:varya/design-and-develop-ui-2026.git "$HOME/WebDev/Talks/design-and-develop-ui-2026"
```

Then run the `rsync` block above.

Do not push `output/` or `node_modules/`. Do not commit generated HTML by hand. The Action is the publisher.

---

## Files

| File | What it is |
|---|---|
| `slides.md` | Slide content (`---` horizontal, `>>>` vertical, `Note:` speaker notes) |
| `index.html` | Reveal shell for local preview (loads `slides.md` at runtime) |
| `theme.css` | Deck theme |
| `build.mjs` | Compiles Markdown → static `output/index.html` |
| `.github/workflows/gh-pages.yml` | Build on `main`, publish `output/` to `gh-pages` |
