// Assembles the files that are actually published into dist/ (no node_modules, sources or scripts).
// GitHub Pages deploys this folder; you can also upload it to any other static host.
import { cpSync, existsSync, mkdirSync, rmSync } from 'node:fs';

const out = 'dist';
const entries = [
  'index.html',
  '404.html',
  'CNAME',
  '.nojekyll',
  'robots.txt',
  'sitemap.xml',
  'privacy-policy',
  'terms-of-use',
  'support',
  'assets',
];

rmSync(out, { recursive: true, force: true });
mkdirSync(out, { recursive: true });
for (const entry of entries) {
  if (!existsSync(entry)) throw new Error(`Missing ${entry}: run "npm run build" first?`);
  cpSync(entry, `${out}/${entry}`, { recursive: true });
}
console.log(`Wrote ${out}/ with ${entries.length} entries`);
