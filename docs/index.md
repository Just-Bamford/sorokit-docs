---
layout: home

hero:
  text: sorokit
  tagline: TypeScript SDK for Stellar and Soroban. Framework-agnostic core. Drop-in React UI kit. Built for contributors.
  actions:
    - theme: brand
      text: Get started
      link: /guide/getting-started
    - theme: alt
      text: Core API
      link: /reference/core/wallet
    - theme: alt
      text: UI kit
      link: /reference/ui/components
---

<!-- hero -->

<section class="sk-terminal-section">
  <div class="sk-terminal">
    <div class="sk-terminal-bar">
      <div class="sk-terminal-dots">
        <span></span><span></span><span></span>
      </div>
      <div class="sk-terminal-title">sorokit://docs</div>
    </div>
    <div class="sk-terminal-body">
      <p><span class="sk-prompt">$</span> npm install @sorokit-core @sorokit-ui</p>
      <p class="sk-muted">resolving peer dependencies...</p>
      <p><span class="sk-ok">✓</span> wallet · account · transaction · soroban · network</p>
      <br/>
      <p><span class="sk-prompt">$</span> createSorokitClient({ network: "testnet" })</p>
      <p><span class="sk-ok">✓</span> client ready · SorokitResult&lt;T&gt; · never throws</p>
      <br/>
      <p><span class="sk-prompt">$</span> <span class="sk-cursor">▌</span></p>
    </div>
  </div>
</section>

<!-- features -->

<section class="sk-section sk-features-section">
  <div class="sk-features-grid">
    <div class="sk-feature-card">
      <div class="sk-feature-icon">01</div>
      <h3>Runtime map</h3>
      <p>Follow the connection between wallet, account, network, transaction, and Soroban modules.</p>
    </div>
    <div class="sk-feature-card">
      <div class="sk-feature-icon">02</div>
      <h3>Interface layer</h3>
      <p>Move from core TypeScript primitives to React components without losing the underlying model.</p>
    </div>
    <div class="sk-feature-card">
      <div class="sk-feature-icon">03</div>
      <h3>Contributor ready</h3>
      <p>Pick up a stub, fill in a module, and keep the docs system expanding with the SDK.</p>
    </div>
  </div>
</section>

<!-- arcitecture -->

<section class="sk-section sk-arch-section">
  <div class="sk-section-header">
    <span class="sk-kicker">architecture</span>
    <h2>Core logic below. React surface above.</h2>
    <p>Two packages, one stack. Use core alone in any framework, or drop in the UI kit for React.</p>
  </div>
  <div class="sk-arch">
    <a class="sk-arch-card" href="/reference/ui/components">
      <div class="sk-arch-label">presentation</div>
      <h3>@sorokit/ui</h3>
      <p>React components and hooks wired to the core client. No blockchain logic inside — strictly a UI layer built on shadcn/ui, Tailwind, and Radix.</p>
      <div class="sk-arch-tag">WalletButton · AccountCard · TransactionStatus · NetworkSwitcher</div>
    </a>
    <div class="sk-arch-arrow">
      <span>depends on</span>
      <svg width="1" height="48" viewBox="0 0 1 48"><line x1="0.5" y1="0" x2="0.5" y2="48" stroke="currentColor" stroke-dasharray="3 3"/></svg>
    </div>
    <a class="sk-arch-card sk-arch-card--core" href="/reference/core/wallet">
      <div class="sk-arch-label">engine</div>
      <h3>@sorokit/core</h3>
      <p>Framework-agnostic TypeScript SDK. Pure functions, no-throw result types, full Horizon and Soroban RPC coverage.</p>
      <div class="sk-arch-tag">wallet · account · transaction · soroban · network</div>
    </a>
  </div>
</section>

<!-- reference -->

<section class="sk-section sk-ref-section">
  <div class="sk-section-header">
    <span class="sk-kicker">reference</span>
    <h2>Every module. One grid.</h2>
  </div>
  <div class="sk-ref-grid">
    <a class="sk-ref-card" href="/reference/core/wallet">
      <h4>wallet</h4>
      <p>Connect, disconnect, and sign transactions via Stellar Wallets Kit adapters.</p>
      <span class="sk-ref-pkg">core</span>
    </a>
    <a class="sk-ref-card" href="/reference/core/account">
      <h4>account</h4>
      <p>Fetch account info, balances, and trustlines from Horizon.</p>
      <span class="sk-ref-pkg">core</span>
    </a>
    <a class="sk-ref-card" href="/reference/core/transaction">
      <h4>transaction</h4>
      <p>Build, sign, submit, and track transactions. Payments, path payments, custom XDR.</p>
      <span class="sk-ref-pkg">core</span>
    </a>
    <a class="sk-ref-card" href="/reference/core/soroban">
      <h4>soroban</h4>
      <p>Read and invoke smart contracts. Handles simulation, fee bumps, and result parsing.</p>
      <span class="sk-ref-pkg">core</span>
    </a>
    <a class="sk-ref-card" href="/reference/core/network">
      <h4>network</h4>
      <p>First-class mainnet, testnet, and futurenet support. Switch at runtime.</p>
      <span class="sk-ref-pkg">core</span>
    </a>
    <a class="sk-ref-card" href="/reference/ui/components">
      <h4>components</h4>
      <p>React UI kit. Every component accepts a sorokit client and delegates all network calls to core.</p>
      <span class="sk-ref-pkg sk-ref-pkg--ui">ui</span>
    </a>
  </div>
</section>

<!-- footer -->

<section class="sk-section sk-contribute-section">
  <div class="sk-contribute-inner">
    <span class="sk-kicker">contributing</span>
    <h2>Pick up a stub. Ship a page.</h2>
    <p>Most reference pages are stubs waiting for contributors. Fork the repo, fill in a module, open a PR.</p>
    <a class="sk-contribute-btn" href="/contributing">Read the contributing guide →</a>
  </div>
</section>
