# Chardon Sessions — GitHub Pages Starter

A static, GitHub Pages-ready one-page site for the Chardon Sessions lore archive.

## Structure

```text
index.html
styles.css
script.js
.nojekyll
assets/
  chardon-mark.svg
  lore/
    selkie-ceilidh.svg
    porcelain-queen.svg
    blackwater-witch.svg
    devils-bride.svg
    sugar-plum-queen.svg
    wine-and-wolves.svg
    venom-dance.svg
    before-the-fall.svg
```

## Publish on GitHub Pages

1. Extract the zip.
2. Upload the files inside this folder to the root of your GitHub repository.
3. Your repository root should show `index.html`, `styles.css`, `script.js`, `.nojekyll`, and `assets/` directly.
4. In GitHub, open **Settings → Pages**.
5. Choose **Deploy from a branch**.
6. Select `main` and `/root`.
7. Save.

## Update a YouTube link

Search in `index.html` for:

```html
https://www.youtube.com/
```

Replace the placeholder URL on the correct lore card with the final YouTube link.

## Replace artwork

Replace the SVG in `assets/lore/` with a final JPG, PNG, WEBP, or SVG image. Then update the matching `src` in `index.html` if the filename changes.

Example:

```html
<img src="assets/lore/selkie-ceilidh.webp" alt="The Selkie Ceilidh lore artwork." />
```

## Add another lore card

Copy one `<article class="lore-card">...</article>` block in the archive grid, then update:

- image path
- alt text
- `aria-controls` value
- reveal `<div id="...">`
- title
- one-line hook
- YouTube URL
- short lore text

Make sure every `aria-controls` value and reveal `id` pair is unique.
