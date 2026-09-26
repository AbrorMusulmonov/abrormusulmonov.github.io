# Abror Musulmonov

Personal academic website: https://abrormusulmonov.github.io/

Plain HTML and CSS with a small script for the footer year. System fonts, no build step, no external dependencies. The site and CV work with JavaScript disabled.

## Local preview

```sh
python -m http.server 8080 --bind 127.0.0.1
```

## Editing

- `index.html`: biography, research, news, projects, experience, and contact details.
- `styles.css`: desktop, mobile, and print styles.
- `assets/Abror_Musulmonov_CV.pdf`: replace this file to update all CV download links.
- `assets/abror.jpg`: profile photograph, sourced from the owner's GitHub profile.

Content is based on the supplied CV. Update role dates and research details as they change.

## Publishing

GitHub Pages publishes `main` from the repository root. The source repository is private; the website and CV are public. `.nojekyll` enables plain static publishing.

After editing, check mobile and desktop layouts, navigation links, and a CV download before pushing to `main`.
