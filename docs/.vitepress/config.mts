import { defineConfig } from 'vitepress'

export default defineConfig({
  title: 'sorokit',
  description:
    'Official documentation for sorokit-core and sorokit-ui.',
  cleanUrls: true,
  themeConfig: {
    logo: '/logo.svg',
    nav: [
      { text: 'Guide', link: '/guide/' },
      { text: 'Core', link: '/core/' },
      { text: 'UI', link: '/ui/' },
      { text: 'Reference', link: '/reference/' },
      { text: 'Contributing', link: '/contributing' }
    ],
    sidebar: {
      '/guide/': [
        {
          text: 'Guide',
          items: [
            { text: 'Introduction', link: '/guide/' },
            { text: 'Getting Started', link: '/guide/getting-started' },
            { text: 'Core and UI', link: '/guide/core-and-ui' },
            { text: 'Ecosystem', link: '/guide/ecosystem' }
          ]
        }
      ],
      '/core/': [
        {
          text: '@sorokit/core',
          items: [
            { text: 'Overview', link: '/core/' },
            { text: 'Installation', link: '/core/installation' },
            { text: 'Concepts', link: '/core/concepts' }
          ]
        },
        {
          text: 'API Reference',
          items: [
            { text: 'Wallet', link: '/core/api/wallet' },
            { text: 'Account', link: '/core/api/account' },
            { text: 'Transaction', link: '/core/api/transaction' },
            { text: 'Soroban', link: '/core/api/soroban' },
            { text: 'Network', link: '/core/api/network' }
          ]
        }
      ],
      '/ui/': [
        {
          text: '@sorokit/ui',
          items: [
            { text: 'Overview', link: '/ui/' },
            { text: 'Installation', link: '/ui/installation' },
            { text: 'Components', link: '/ui/components' }
          ]
        },
        {
          text: 'API Reference',
          items: [
            { text: 'WalletButton', link: '/ui/api/wallet-button' },
            { text: 'AccountCard', link: '/ui/api/account-card' },
            { text: 'TransactionStatus', link: '/ui/api/transaction-status' },
            { text: 'NetworkSwitcher', link: '/ui/api/network-switcher' }
          ]
        }
      ],
      '/reference/': [
        {
          text: 'Reference',
          items: [
            { text: 'Overview', link: '/reference/' },
            { text: 'Configuration', link: '/reference/configuration' }
          ]
        }
      ]
    },
    socialLinks: [
      { icon: 'github', link: 'https://github.com/sorokit' }
    ],
    search: {
      provider: 'local'
    },
    footer: {
      message: 'Released under the MIT License.',
      copyright: 'Copyright (c) 2026 sorokit'
    }
  }
})
