# Core and UI

`@sorokit/core` and `sorokit-ui` are designed to work as two layers of the same system.

The core package owns framework-independent behavior. The UI package owns React components, providers, and hooks that consume that behavior.

## Architecture

```txt
React app
  -> sorokit-ui
      -> providers, hooks, components
      -> @sorokit/core
          -> wallet, account, transaction, soroban, network modules
```

## Responsibilities

| Layer | Package | Responsibility |
| --- | --- | --- |
| Core | `@sorokit/core` | Domain logic, network calls, transaction helpers, and portable TypeScript APIs |
| UI | `sorokit-ui` | React integration, component state, user flows, and visual primitives |
| App | Your project | Configuration, styling, routing, persistence, and product-specific behavior |

## Wiring Pattern

Create the core client once, then pass it into the React layer through a provider.

```tsx
import { createSorokit } from '@sorokit/core'
import { SorokitProvider } from 'sorokit-ui'

const sorokit = createSorokit({
  network: 'testnet'
})

export function Root() {
  return (
    <SorokitProvider client={sorokit}>
      <App />
    </SorokitProvider>
  )
}
```

## When to Use Core Directly

Use `@sorokit/core` directly when you are building:

- Node.js services
- framework-independent packages
- scripts and automation
- custom UI layers
- tests for transaction and account behavior

## When to Add UI

Add `sorokit-ui` when you are building a React interface and want reusable providers, hooks, controls, and workflow components that already speak to the core client.

## Design Rule

Keep portable behavior in `@sorokit/core`. Keep React state and presentation in `sorokit-ui`. That split makes the ecosystem easier to test, reuse, and document.
