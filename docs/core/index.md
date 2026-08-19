# sorokit-core

`sorokit-core` is the framework-agnostic TypeScript SDK for the Stellar Sorokan ecosystem. It provides a complete, type-safe interface for wallet connection, account management, transaction building, and Soroban smart contract interaction.

## Key Features

- **No-throw result model** - All operations return `SorokitResult<T>` for predictable error handling
- **6 comprehensive modules** - Wallet, Account, Transaction, Soroban, Network, and Shared utilities
- **Framework-agnostic** - Works in Node, browser, React, Vue, Svelte, or any TypeScript environment
- **Circuit breaker** - Automatic resilience with retry logic for network failures
- **Advanced contract interaction** - Fluent builder API, state tracking, event decoding, pre-flight validation
- **Transaction simulation** - Test transactions before sending
- **Multi-signature support** - Build and manage multi-sig transactions
- **Offline signing** - Sign transactions without wallet connection
- **Wallet adapters** - Freighter, XBull, Lobstr, Hana, and custom SWK adapters
- **Balance alerts & activity tracking** - Monitor accounts in real-time
- **Comprehensive logging & tracing** - Debug transactions and calls
- **Bundle size optimized** - Minimal dependencies, optimized for production

## Modules

| Module          | Purpose                                                                     |
| --------------- | --------------------------------------------------------------------------- |
| **wallet**      | Connect wallets, sign transactions, manage wallet state                     |
| **account**     | Fetch accounts, stream balance changes, set alerts, rotate keys             |
| **transaction** | Build, submit, track transactions, estimate fees, manage multi-sig          |
| **soroban**     | Invoke contracts, read state, simulate, decode events, validate deployments |
| **network**     | Configure networks, automatic circuit breaker, dynamic switching            |
| **shared**      | Logging, tracing, caching, configuration, validation                        |

## Use sorokit-core When

- You need the underlying primitives without committing to a UI framework
- Building shared business logic that multiple frontends can consume
- Writing tests and business logic-focused packages
- Building server-side applications with Node.js
- Integrating with non-React frameworks (Vue, Svelte, Angular, etc.)
- You need maximum control over SDK behavior

## Architecture

```
sorokit-core
├── wallet/
│   ├── Adapters (Freighter, XBull, Lobstr, Hana, SWKSign)
│   ├── Connection management
│   └── Offline signing
├── account/
│   ├── Account queries
│   ├── Balance tracking
│   ├── Alerts & notifications
│   ├── Key rotation
│   └── Sponsorship
├── transaction/
│   ├── Transaction builders
│   ├── Fee calculation & analytics
│   ├── Multi-sig support
│   ├── Path payments
│   ├── History & export
│   └── Validation
├── soroban/
│   ├── Contract interaction
│   ├── State tracking
│   ├── Event decoding
│   ├── Call identity
│   ├── Result parsing
│   ├── Simulator
│   └── Deploy validation
├── network/
│   ├── Circuit breaker
│   ├── Network switching
│   └── Network resolution
└── shared/
    ├── Logging
    ├── Tracing
    ├── Caching
    ├── Config management
    └── Validation
```

## What Comes Next

- Start with [installation](/core/installation)
- Review the [concepts](/core/concepts)
- Explore the [API reference](/reference/configuration)
