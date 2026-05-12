---
layout: home

hero:
  name: sorokit
  text: Ship product workflows from one TypeScript foundation.
  tagline: The official docs for sorokit-core, a framework-agnostic SDK, and sorokit-ui, the React kit for turning those primitives into polished interfaces.
  image:
    src: /logo.svg
    alt: sorokit logo
  actions:
    - theme: brand
      text: Start building
      link: /guide/getting-started
    - theme: alt
      text: Read the SDK docs
      link: /core/
    - theme: alt
      text: Browse UI components
      link: /ui/

features:
  - title: Core first
    details: Model the behavior once in sorokit-core, then reuse it across apps, services, tests, and custom integrations.
  - title: UI when you need it
    details: Layer sorokit-ui into React projects for providers, hooks, and components that already understand the core SDK.
  - title: Designed to scale
    details: Start with a small integration, then grow into a complete workflow system without changing mental models.
---

<section class="sorokit-band sorokit-flow">
  <div>
    <p class="sorokit-kicker">Ecosystem map</p>
    <h2>One foundation, two ways to build.</h2>
    <p>
      sorokit keeps domain behavior in a portable TypeScript layer, then offers a React UI layer for teams that want ready-made product surfaces.
    </p>
  </div>

  <div class="sorokit-lanes">
    <a class="sorokit-lane" href="/core/">
      <span>01</span>
      <strong>sorokit-core</strong>
      <p>Framework-agnostic TypeScript primitives for workflow logic, configuration, adapters, and runtime integration.</p>
    </a>
    <a class="sorokit-lane" href="/ui/">
      <span>02</span>
      <strong>sorokit-ui</strong>
      <p>React providers, hooks, and components for assembling sorokit-powered interfaces with less glue code.</p>
    </a>
  </div>
</section>

<section class="sorokit-band sorokit-checklist">
  <div>
    <p class="sorokit-kicker">Built for documentation that works</p>
    <h2>From first install to API reference.</h2>
  </div>
  <div class="sorokit-grid">
    <div class="sorokit-panel">
      <h3>Install quickly</h3>
      <p>Copy package-manager commands for the SDK, the UI kit, and required peer dependencies.</p>
    </div>
    <div class="sorokit-panel">
      <h3>Learn the model</h3>
      <p>Understand how core concepts, adapters, providers, and components fit together.</p>
    </div>
    <div class="sorokit-panel">
      <h3>Find details</h3>
      <p>Use the reference section for configuration, package exports, and stable contracts as the ecosystem grows.</p>
    </div>
  </div>
</section>
