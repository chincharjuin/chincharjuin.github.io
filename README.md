# chincharjuin.github.io

Personal website of Char Juin Chin — Senior Data Scientist & AI Engineer at Singapore Airlines.

Single-page static site, no build step. All body text lives in `content.js` (edit that file to change words); a small render script (`assets/js/site.js`) fills the page and handles the theme toggle, and all styling is in `assets/css/style.css`. Page metadata (tab title, meta description, Open Graph, JSON-LD) lives in `index.html` — keep it there, because crawlers read the static HTML, not the JS-rewritten DOM. Deployed via GitHub Pages.
