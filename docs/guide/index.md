# Introduction

sorokit is an ecosystem for building TypeScript-powered product workflows from a shared foundation.

The documentation is organized around two packages:

- `sorokit-core` provides the framework-agnostic SDK.
- `sorokit-ui` provides React components that build on the core package.

Use this guide when you want the big picture: how the packages relate to each other, which one to install first, and where to go next.

## Package Roles

| Package | Role | Best for |
| --- | --- | --- |
| `sorokit-core` | TypeScript SDK | Shared logic, non-React apps, services, custom integrations |
| `sorokit-ui` | React UI kit | Product interfaces, dashboards, workflow surfaces |

## Recommended Path

1. Start with the shared ecosystem concepts.
2. Install `sorokit-core` in the app or package that owns your domain logic.
3. Add `sorokit-ui` when you need React components for the user-facing layer.
