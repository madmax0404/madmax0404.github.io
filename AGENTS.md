# Repository Guidelines

## Project Structure & Module Organization
- Root `index.html` hosts the primary Korean portfolio; keep language-specific variants (e.g., `index-kor.html`) in root for GitHub Pages routing.
- Shared design tokens live in `theme.css`; page-specific layout/styles belong in `index.css`. Isolate any new scripts in `theme.js` unless reusable.
- Store static assets in `images/` using descriptive, kebab-case filenames; update references in HTML meta tags and content.
- `_config.yml` configures the GitHub Pages minimal theme—adjust titles or descriptions there instead of hard-coding duplicates.

## Build, Test, and Development Commands
- `gem install bundler github-pages` once per machine to align with GitHub Pages' dependency set.
- `bundle exec jekyll serve --livereload` builds the site locally at `http://127.0.0.1:4000` and watches for changes.
- `bundle exec jekyll build` produces the `_site/` output used by Pages; run before large changes to catch Liquid or Markdown issues.

## Coding Style & Naming Conventions
- Follow 4-space indentation for HTML/CSS and 2 spaces for JavaScript to match existing files.
- Prefer semantic HTML sections and aria labels; reuse existing class patterns in kebab-case (`main-area`, `sidebar-links`).
- Keep CSS declarations grouped by component; define new custom properties in `theme.css` to preserve dark/light support.
- Document non-obvious logic in JS with concise English comments placed above the block.

## Testing Guidelines
- After each change, run `bundle exec jekyll serve` and test navigation, theme toggle, and lazy-loaded assets in a modern browser.
- Resize the viewport or use DevTools device emulation to verify the layout breakpoint and sticky navigation behavior.
- Watch the browser console for accessibility or network errors; fix broken image paths before opening a PR.

## Commit & Pull Request Guidelines
- Use short, imperative commit subjects (`Add sidebar animation`, `Update awards copy`); keep body text wrapped at 72 chars when needed.
- Group related HTML/CSS/JS updates in a single commit; avoid bundling unrelated content and media refreshes.
- PRs should list the motivation, summarize key UI changes, include before/after screenshots for visual tweaks, and reference related issues or tasks.
