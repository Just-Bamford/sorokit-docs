# Concepts

The core package should document stable concepts before deep API details.

## Client

The client is the main entry point for application code. It owns configuration and exposes the core operations your app can call.

## Configuration

Configuration should be explicit and serializable where possible, making it easy to share across environments and test setups.

## Adapters

Adapters connect `sorokit-core` to the outside world. Keep adapters small so the core package remains portable.
