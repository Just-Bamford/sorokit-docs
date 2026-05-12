# Installation

Install the UI kit with React and the core package.

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

## Provider Setup

Wrap the part of your React app that needs sorokit components.

```tsx
import { SorokitProvider } from 'sorokit-ui'

export function Root() {
  return (
    <SorokitProvider>
      <App />
    </SorokitProvider>
  )
}
```
