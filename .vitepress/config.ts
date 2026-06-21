import { defineConfig } from 'vitepress'

export default defineConfig({
  srcDir: 'docs',
  title: 'Web3 开发者报告',
  description: '面向全球与华语 Web3 开发者生态的开放报告',
  base: '/',
  appearance: false,
  cleanUrls: true,
  lastUpdated: true,
  metaChunk: true,
  head: [
    ['meta', { name: 'theme-color', content: '#f7f1e6' }],
    ['meta', { property: 'og:title', content: 'Web3 开发者报告' }],
    ['meta', { property: 'og:description', content: '追踪 Web3 开发者规模、生态协作、技术栈与使用案例的开放报告。' }],
    ['meta', { property: 'og:type', content: 'website' }]
  ],

  themeConfig: {
    search: {
      provider: 'local'
    },
    nav: [
      {
        text: '报告',
        items: [
          { text: '2025 全球报告', link: '/2025/' },
          { text: '2025 华语报告', link: '/zh/2025/' },
          { text: '报告库', link: '/reports' }
        ]
      },
      { text: '数据来源', link: '/data-sources' },
      { text: '贡献者', link: '/contributors' },
      {
        text: '加入贡献',
        link: 'https://github.com/openbuildxyz/web3-developer-report'
      }
    ],
    sidebar: {
      '/2025/': [
        {
          text: '2025 全球报告',
          items: [
            { text: '总览', link: '/2025/' },
            { text: '开发者', link: '/2025/Developer' },
            { text: '生态系统', link: '/2025/Ecosystem' },
            { text: '使用案例', link: '/2025/UseCases' }
          ]
        }
      ],
      '/zh/': [
        {
          text: '2025 华语报告',
          items: [
            { text: '总览', link: '/zh/2025/' }
          ]
        }
      ]
    },
    footer: {
      message: '开放报告，欢迎引用、校正与补充数据来源。',
      copyright: '© Web3 开发者报告 | 由 OpenBuild 发起与维护'
    },
    editLink: {
      pattern: 'https://github.com/openbuildxyz/web3-developer-report/edit/main/docs/:path',
      text: '在 GitHub 上改进此页'
    },
    lastUpdated: {
      text: '最后更新'
    }
  }
})
