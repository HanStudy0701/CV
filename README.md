# Teng Han Sen CV Website

Simple bilingual portfolio website with:

- Clickable top navigation that jumps to each section.
- Avatar area in header (`avatar.jpg` can be replaced with your own photo).
- Chinese / English language switch.
- “Latest Updates” module with a form to keep adding news/evidence.
- Updates are saved in browser `localStorage`.

## Run locally

```bash
python3 -m http.server 8000
```

Then open <http://localhost:8000>.


## Custom domain (GitHub Pages)

This repository is configured for:

- `hansenportfolio.com`

Create these DNS records at your domain provider:

- `A` `@` -> `185.199.108.153`
- `A` `@` -> `185.199.109.153`
- `A` `@` -> `185.199.110.153`
- `A` `@` -> `185.199.111.153`
- `CNAME` `www` -> `hanstudy0701.github.io`

Notes:
- Remove conflicting records for `@` or `www`.
- DNS propagation may take from a few minutes up to 24 hours.
