# Chardon Sessions — GitHub Pages Starter

A clean static landing page for the Chardon Sessions music-lore project.

## Project structure

```text
chardon-sessions-site/
├── index.html
├── styles.css
├── README.md
└── assets/
    ├── chardon-mark.svg
    └── selkie-ceilidh-cover.svg
```

## What this page includes

- Semantic HTML
- Responsive CSS
- No JavaScript requirement
- No build step
- Accessible skip link and image alt text
- SEO and Open Graph basics
- Placeholder YouTube links
- Custom SVG artwork and favicon

## How to publish on GitHub Pages

1. Create a new GitHub repository, for example `chardon-sessions`.
2. Upload the contents of this folder to the repository root.
3. Go to **Settings → Pages**.
4. Under **Build and deployment**, choose **Deploy from a branch**.
5. Select the `main` branch and `/root` folder.
6. Save.

Your site should appear at:

```text
https://YOUR-GITHUB-USERNAME.github.io/chardon-sessions/
```

## Where to update the YouTube link

In `index.html`, search for:

```html
https://www.youtube.com/
```

Replace it with the final YouTube link for the song when ready.

## Suggested next structure

When more lore songs are ready, expand the site like this:

```text
/lore/selkie-ceilidh.html
/lore/porcelain-queen.html
/lore/blackwater-witch.html
/lore/lightyears.html
```

The homepage can then become the universe gateway, while each song gets its own lore file.
