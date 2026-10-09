# Nunu AI website

Static site for the Nunu AI app: landing page, privacy policy, terms of use and support.
Plain HTML styled with Tailwind CSS (v4), Font Awesome Free icons served from this repo.

| URL | File |
|---|---|
| `/` | `index.html` |
| `/privacy-policy/` | `privacy-policy/index.html` |
| `/terms-of-use/` | `terms-of-use/index.html` |
| `/support/` | `support/index.html` |
| 404 | `404.html` |

The three legal/support URLs are the ones the app links to (`PRIVACY_POLICY_URL`, `TERMS_URL`,
`SUPPORT_URL` in the Android `BuildConfig`). Each page is a folder with an `index.html`, so the
URLs work without `.html` on any static host.

## Develop

```bash
npm install
npm run dev          # serves the site on http://localhost:4000
npm run watch:css    # rebuilds assets/css/styles.css while you edit HTML
```

## Build

```bash
npm run build        # copies Font Awesome to assets/vendor and builds assets/css/styles.css
```

`assets/css/styles.css` and `assets/vendor/` are generated but **committed**, so the site can be
deployed as-is (S3, Cloudflare Pages, Netlify, nginx...) without running a build. Run
`npm run build` again after changing classes in the HTML or `src/input.css`.

## Deploy to GitHub Pages

`.github/workflows/pages.yml` builds the CSS and publishes the site on every push to `main`
(`npm ci`, `npm run build`, `npm run dist`, then the `dist/` folder is deployed).

One-time setup:

1. Push this repository to GitHub.
2. **Settings > Pages > Build and deployment > Source:** choose **GitHub Actions**.
3. **Settings > Pages > Custom domain:** enter `nunu.turnaworks.com` and save.
4. At your DNS provider add a `CNAME` record: `nunu` pointing to `<your-github-user-or-org>.github.io`.
5. When the certificate is ready, turn on **Enforce HTTPS**.

`CNAME` (the domain) and `.nojekyll` (don't run Jekyll) are in the repo root and are copied into
`dist/`. `npm run dist` builds the same folder locally if you want to inspect what is published.

## Before going live

- The contact address `support@turnaworks.com` appears in every page footer, the privacy policy,
  the terms and the support page. Replace it if you use another mailbox.
- The store buttons on the landing page are placeholders ("soon"). Put the real store links in
  `index.html` (search for `aria-disabled`).
- The privacy policy and terms are a solid starting point written from how the app works, not
  legal advice. Have them reviewed (company details, governing law, retention periods).
