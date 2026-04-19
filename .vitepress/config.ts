import { defineConfig } from 'vitepress'

export default defineConfig({
  srcDir: 'docs',
  title: 'Web3 开发者报告',
  description: 'GitHub Markdown Site',

  // 如果你的仓库名不是 username.github.io，就改成你的仓库名
  // 例如仓库名是 my-site，就写 '/my-site/'
  base: '/',

  themeConfig: {
    nav: [
      { text: '首页', link: '/' },
      {
        text: '开始阅读',
        items: [{ text: '2025', link: '/2025/' }]
      }
    ],
    sidebar: {
      '/2025/': [
        {
          text: '2025',
          items: [
            { text: 'Developer', link: '/2025/Developer' },
            { text: 'Ecosystem', link: '/2025/Ecosystem' },
            { text: 'UseCases', link: '/2025/UseCases' }
          ]
        }
      ]
    }
  }
})
