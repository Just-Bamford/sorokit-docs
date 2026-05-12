# Getting Started

Install the package that matches the layer you are building. Most projects start with `sorokit-core`; React projects can add `sorokit-ui` for interface components.

## Requirements

- Node.js 18 or newer
- TypeScript 5 or newer
- React 18 or newer when using `sorokit-ui`

## Core SDK

::: code-group

```bash [npm]
npm install sorokit-core
```

```bash [pnpm]
pnpm add sorokit-core
```

```bash [yarn]
yarn add sorokit-core
```

:::

Use `sorokit-core` when you need framework-independent TypeScript primitives in an app, package, service, or test environment.

```ts
import { createSorokit } from 'sorokit-core'

const sorokit = createSorokit({
  // Add project configuration here.
})
```

## React UI Kit

::: code-group

```bash [npm]
npm install sorokit-ui sorokit-core
```

```bash [pnpm]
pnpm add sorokit-ui sorokit-core
```

```bash [yarn]
yarn add sorokit-ui sorokit-core
```

:::

Use `sorokit-ui` when your React app needs ready-made interface components backed by the core SDK.

## Peer Dependencies

`sorokit-ui` expects React to be installed by your app.

```bash
npm install react react-dom
```

For TypeScript React apps, install the React type packages if your starter did not include them.

```bash
npm install -D @types/react @types/react-dom
```

## Quick Start

```tsx
import { SorokitProvider } from 'sorokit-ui'

export function App() {
  return (
    <SorokitProvider>
      {/* Add your sorokit-powered interface here. */}
    </SorokitProvider>
  )
}
```

For non-React projects, keep the integration at the core layer.

```ts
import { createSorokit } from 'sorokit-core'

export const sorokit = createSorokit({
  // Add shared configuration for your project.
})
```

## Next Steps

- Read the [`sorokit-core` overview](/core/) for SDK concepts.
- Read the [`sorokit-ui` overview](/ui/) for React integration.
