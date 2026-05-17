# Contributing

Thanks for helping improve the sorokit documentation. This site is built to make unfinished areas visible, easy to claim, and easy to turn into useful docs.

## Repo Structure

```txt
sorokit-docs/
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
  package.json
```

## Local Development

Install dependencies and start the VitePress dev server.

```bash
npm install
npm run dev
```

Run a production build before opening a pull request.

```bash
npm run build
```

## Picking Up a Stub

1. Find a page with placeholder sections such as `Exports`, `Props`, `Usage`, or `Notes`.
2. Check the matching package source before writing API details.
3. Replace placeholders with concrete descriptions, examples, and type information.
4. Keep examples small enough to scan, but complete enough to copy into a project.
5. Add links to related guide or reference pages when the reader needs more context.

## Writing Conventions

- Use package names consistently: `@sorokit/core` and `@sorokit/ui`.
- Prefer direct, practical examples over abstract descriptions.
- Put conceptual guidance in `docs/guide/`.
- Put module and component details in `docs/core/api/` or `docs/ui/api/`.
- Keep headings predictable: purpose, imports, props or exports, examples, states, and notes.

## Pull Request Conventions

Pull requests should include:

- a clear title that names the docs area changed
- a short summary of what was added or clarified
- screenshots for visible landing page or theme changes
- confirmation that `npm run build` passes

## Review Checklist

Before requesting review, check that:

- links resolve correctly
- code examples use current package names
- placeholder text has been removed from completed sections
- new pages are added to the VitePress sidebar when needed
- the docs build succeeds locally
