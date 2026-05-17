import { defineConfig } from 'vitepress'

export default defineConfig({
  title: 'sorokit',
  description: 'Framework-agnostic TypeScript SDK for Stellar applications.',
  appearance: false,

  head: [
    ['link', { rel: 'icon', href: '/favicon.svg' }],
  ],

  themeConfig: {
    logo: '/logo.svg',
    siteTitle: 'sorokit',

    nav: [
      { text: 'guide', link: '/guide/getting-started' },
      { text: 'reference', link: '/reference/core/wallet' },
      { text: 'contributing', link: '/contributing' },
      {
        text: 'v0.1.0',
        items: [
          { text: 'changelog', link: '/changelog' },
          { text: 'sorokit-core', link: 'https://github.com/Just-Bamford/sorokit-core' },
          { text: 'sorokit-ui', link: 'https://github.com/Just-Bamford/sorokit-ui' },
        ],
      },
    ],

    sidebar: {
      '/guide/': [
        {
          text: 'guide',
          items: [
            { text: 'getting started', link: '/guide/getting-started' },
            { text: 'core + ui', link: '/guide/core-and-ui' },
          ],
        },
      ],
      '/reference/': [
        {
          text: '@sorokit/core',
          items: [
            { text: 'wallet', link: '/reference/core/wallet' },
            { text: 'account', link: '/reference/core/account' },
            { text: 'transaction', link: '/reference/core/transaction' },
            { text: 'soroban', link: '/reference/core/soroban' },
            { text: 'network', link: '/reference/core/network' },
          ],
        },
        {
          text: '@sorokit/ui',
          items: [
            { text: 'components', link: '/reference/ui/components' },
          ],
        },
      ],
    },

    socialLinks: [
      { icon: 'github', link: 'https://github.com/Just-Bamford' },
    ],

    footer: {
      message: 'Released under the MIT License.',
      copyright: 'sorokit · open for contributions',
    },

    search: {
      provider: 'local',
    },
  },
})
