// Copies the Font Awesome Free CSS and web fonts into assets/vendor so the site is served
// entirely from its own files (no third-party CDN): the generated files are committed.
import { cpSync, mkdirSync, rmSync } from 'node:fs';

const from = 'node_modules/@fortawesome/fontawesome-free';
const to = 'assets/vendor/fontawesome';

rmSync(to, { recursive: true, force: true });
mkdirSync(`${to}/css`, { recursive: true });
cpSync(`${from}/css/all.min.css`, `${to}/css/all.min.css`);
cpSync(`${from}/webfonts`, `${to}/webfonts`, { recursive: true });
cpSync(`${from}/LICENSE.txt`, `${to}/LICENSE.txt`);
console.log('Font Awesome copied to', to);
