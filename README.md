# sorokit-docs

Official documentation and landing site for the sorokit ecosystem.

This repo contains the VitePress site for:

- `@sorokit/core`: framework-agnostic TypeScript SDK
- `@sorokit/ui`: React UI kit built on top of the core SDK

## Tech Stack

- VitePress
- Vue
- Markdown
- custom VitePress theme overrides

## Local Development

Install dependencies:

```bash
npm install
```

Start the local docs server:

```bash
npm run dev
```

Build the production site:

```bash
npm run build
```

Preview the production build:

```bash
npm run preview
```

## Repo Structure

```txt
docs/
  .vitepress/
    config.mts
    theme/
  core/
    api/
  guide/
  reference/
  ui/
    api/
```

## Contributing Docs

Most unfinished pages are intentionally stubbed with headings and placeholder sections. To contribute:

1. Pick a stub from `docs/core/api/`, `docs/ui/api/`, or `docs/guide/`.
2. Check the matching package source before documenting API details.
3. Replace placeholders with concrete descriptions, examples, props, exports, and notes.
4. Add the page to `docs/.vitepress/config.mts` if it is new.
5. Run `npm run build` before opening a pull request.

See [docs/contributing.md](docs/contributing.md) for the full contribution guide.
