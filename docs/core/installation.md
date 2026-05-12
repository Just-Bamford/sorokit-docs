# Installation

Install `sorokit-core` with your package manager.

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

## TypeScript

`sorokit-core` is designed for TypeScript projects. Keep your `tsconfig.json` strict enough to catch integration mistakes early.

```json
{
  "compilerOptions": {
    "strict": true,
    "moduleResolution": "Bundler"
  }
}
```
