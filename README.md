# Abror Musulmonov — academic portfolio

A responsive, static research portfolio for https://abrormusulmonov.github.io/.
Built with HTML, CSS, and JavaScript. No build step or application dependencies.

## Preview

```sh
python -m http.server 8080 --bind 127.0.0.1
```

Open http://127.0.0.1:8080.

## Update

- Edit biography, research, projects, and experience in `index.html`.
- Adjust colors, typography, responsive layouts, and print styling in `styles.css`.
- Navigation highlighting and accessible project filters live in `script.js`.
- Replace `assets/Abror_Musulmonov_CV.pdf` to update all three CV download links.
- Replace `assets/abror.jpg` to update the portrait.

Content is based on the supplied CV. Profile photograph comes from the owner's GitHub profile. All content is visible without JavaScript; filters appear when JavaScript is available. Fonts use Google Fonts with local fallbacks.

## GitHub Pages

The repository must be named `abrormusulmonov.github.io` under `AbrorMusulmonov`.
In Settings → Pages, choose **Deploy from a branch**, **main**, **/ (root)**.
The `.nojekyll` file enables plain static publishing.

Private source repositories require a GitHub plan that supports private-repository Pages.
The published website and downloadable CV are public even when the source repository is private.

## Verification

Check desktop and mobile layouts, section navigation, each project filter, and all CV download links after changes.
The PDF served by the site should match the original file exactly.
