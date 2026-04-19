import { defineConfig } from 'vitepress'

export default defineConfig({
  srcDir: 'docs',
  title: 'Web3 开发者报告',
  description: 'Web3 Developer Report',
  base: '/',

  themeConfig: {
    nav: [
      {
        text: '开始阅读',
        items: [{ text: '2025', link: '/2025/' }]
      },
      {
        text: '加入贡献',
        link: 'https://github.com/openbuildxyz/web3-developer-report'
      }
    ],
    sidebar: {
      '/2025/': [
        {
          text: '2025',
          items: [
            { text: '开发者', link: '/2025/Developer' },
            { text: '生态系统', link: '/2025/Ecosystem' },
            { text: '使用案例', link: '/2025/UseCases' }
          ]
        }
      ]
    }
  }
})
