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

> `www` should point directly to `<user>.github.io` and should not include any repo name.

### Why “DNS check unsuccessful / InvalidDNSError” happens

If GitHub shows “Both `hansenportfolio.com` and its alternate name are improperly configured”, it usually means:

1. DNS records are not created yet (or are created in the wrong DNS zone / nameserver).
2. Conflicting old records still exist (`A`, `CNAME`, URL forwarding, parked records, wildcard `*`).
3. Custom domain in GitHub Pages does not match the final canonical domain you want.

### Recommended fix order

1. Add the 4 apex `A` records for `@`.
2. Add `www` as `CNAME` to `hanstudy0701.github.io`.
3. Remove conflicting old records for `@` and `www`.
4. In repository **Settings → Pages**, set custom domain to `hansenportfolio.com`.
5. Wait for DNS propagation (can take a few minutes up to 24 hours).
6. Re-check DNS and HTTPS status in GitHub Pages.

### Optional but recommended

- Verify your custom domain ownership in GitHub.
- If HTTPS is not enabled immediately after DNS becomes valid, wait and retry. Re-saving the custom domain can re-trigger certificate provisioning.

### Quick checks

```bash
dig +short hansenportfolio.com
dig +short www.hansenportfolio.com
nslookup hansenportfolio.com
nslookup www.hansenportfolio.com
```

Notes:
- Remove conflicting records for `@` or `www`.
- DNS propagation may take from a few minutes up to 24 hours.
