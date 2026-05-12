---
layout: home

hero:
  name: sorokit
  text: Matrix-ready docs for the sorokit runtime.
  tagline: Official documentation for @sorokit/core and @sorokit/ui, shaped like a terminal-native control surface for builders shipping Stellar and Soroban workflows.
  actions:
    - theme: brand
      text: Start building
      link: /guide/getting-started
    - theme: alt
      text: Core API
      link: /core/
    - theme: alt
      text: UI kit
      link: /ui/

features:
  - title: Runtime map
    details: Follow the connection between wallet, account, network, transaction, and Soroban modules.
  - title: Interface layer
    details: Move from core TypeScript primitives to React components without losing the underlying model.
  - title: Contributor ready
    details: Pick up a stub, fill in a module, and keep the docs system expanding with the SDK.
---

<section class="sorokit-terminal-shell">
  <div class="sorokit-terminal">
    <div class="sorokit-terminal-bar">
      <span></span>
      <span></span>
      <span></span>
      <strong>sorokit://docs</strong>
    </div>
    <div class="sorokit-terminal-code">
      <p><span class="prompt">$</span> npm install @sorokit/core @sorokit/ui</p>
      <p><span class="muted">resolving modules...</span></p>
      <p><span class="ok">loaded</span> wallet.account.transaction.soroban.network</p>
      <br>
      <p><span class="prompt">$</span> createSorokit({ network: "testnet" })</p>
      <p><span class="ok">ready</span> client connected to docs matrix</p>
      <br>
      <p><span class="prompt">$</span> open /guide/core-and-ui</p>
      <p><span class="muted">handoff</span> core primitives -> React interface</p>
    </div>
  </div>
</section>

<section class="sorokit-band sorokit-flow">
  <div>
    <p class="sorokit-kicker">01 / System Map</p>
    <h2>Core logic below. React surface above.</h2>
    <p>
      The docs trace the stack from portable TypeScript modules to UI components, so each page shows where a concept lives and how it moves through the app.
    </p>
  </div>

  <div class="sorokit-lanes">
    <a class="sorokit-lane" href="/core/">
      <span>core</span>
      <strong>@sorokit/core</strong>
      <p>Wallet, account, network, transaction, and Soroban modules documented as the framework-agnostic base layer.</p>
    </a>
    <a class="sorokit-lane" href="/ui/">
      <span>ui</span>
      <strong>@sorokit/ui</strong>
      <p>React providers, hooks, and components wired to the core client for product-facing workflows.</p>
    </a>
  </div>
</section>

<section class="sorokit-band sorokit-matrix">
  <div>
    <p class="sorokit-kicker">02 / Reference Grid</p>
    <h2>Every module gets a clear lane.</h2>
  </div>
  <div class="sorokit-grid">
    <a class="sorokit-panel" href="/core/api/wallet">
      <h3>Wallet</h3>
      <p>Connection state, signing, sessions, and wallet-provider notes.</p>
    </a>
    <a class="sorokit-panel" href="/core/api/transaction">
      <h3>Transaction</h3>
      <p>Build, simulate, sign, submit, and track network status.</p>
    </a>
    <a class="sorokit-panel" href="/ui/api/wallet-button">
      <h3>WalletButton</h3>
      <p>The React entry point for connecting users to a wallet flow.</p>
    </a>
  </div>
</section>

<section class="sorokit-band sorokit-checklist">
  <div>
    <p class="sorokit-kicker">03 / Docs Workflow</p>
    <h2>Stubbed where the API is still moving. Structured where it matters.</h2>
  </div>
  <div class="sorokit-grid">
    <div class="sorokit-panel">
      <h3>Install</h3>
      <p>Package-manager commands, peer dependencies, and quick starts for both layers.</p>
    </div>
    <div class="sorokit-panel">
      <h3>Wire</h3>
      <p>Guidance for passing a core client into the React provider and keeping concerns split.</p>
    </div>
    <div class="sorokit-panel">
      <h3>Contribute</h3>
      <p>Pick a stub, replace placeholders, add examples, and run the build before review.</p>
    </div>
  </div>
</section>
