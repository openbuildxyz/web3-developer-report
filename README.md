# Web3 Developer Report

**Web3 Developer Report 是 OpenBuild 发起维护的开放报告项目，持续整理全球与华语 Web3 开发者生态的年度观察、数据来源和历史参考。**

👉 直接阅读：[report.openbuild.xyz](https://report.openbuild.xyz)

这里不是单篇文章仓库，而是一个长期更新的报告站点。我们希望把分散在开源仓库、社区调研、历史报告和公开数据里的开发者信息，整理成更适合阅读、引用、传播和继续协作的版本。

## 当前报告

| 报告 | 入口 | 说明 |
| --- | --- | --- |
| 2025 全球 Web3 开发者报告 | [report.openbuild.xyz/2025](https://report.openbuild.xyz/2025/) | 关注全球 Web3 开源开发活动、生态协作、跨链技术栈、地理分布、DeFi 和 ZK 使用案例。 |
| 2025 Web3 华语开发者调研报告 | [report.openbuild.xyz/zh/2025](https://report.openbuild.xyz/zh/2025/) | 基于 220 份有效问卷，观察华语开发者的职业路径、收入结构、技术栈、开源参与和社区需求。 |
| 报告库 | [report.openbuild.xyz/reports](https://report.openbuild.xyz/reports) | 按年份、范围和状态浏览全球报告、华语报告和外部历史参考。 |
| 数据来源 | [report.openbuild.xyz/data-sources](https://report.openbuild.xyz/data-sources) | 记录数据口径、外部参考、Electric Capital 历史报告与引用说明。 |

华语报告已整理进本站，源仓库作为开源历史和协作入口保留：[openbuildxyz/web3-chinese-speaking-devs-report](https://github.com/openbuildxyz/web3-chinese-speaking-devs-report)。

## 为什么继续做这件事

Electric Capital 的 Developer Report 是 Web3 开发者研究里很重要的历史参考。2025 年起，他们把年度报告迁移为持续更新的 [Open Dev Data](https://opendevdata.org/) 平台，不再发布独立年度 PDF。

这对行业是好事：底层数据和 taxonomy 变得更开放了。但数据开放之后，还需要有人把它转译成更容易读懂、讨论和引用的年度叙事。

这个项目主要补三件事：

- **全球报告**：整理 Web3 开源开发活动、生态变化、跨链协作和应用方向。
- **华语报告**：记录中文社区开发者如何进入、留下、迁移或退出 Web3。
- **数据来源**：把口径、参考链接和外部报告放在明处，方便复核，也方便后来者继续做。

## 如何引用

如果引用本站内容，建议同时注明报告名称、年份、章节和链接。例如：

> Web3 Developer Report，2025 全球 Web3 开发者报告，开发者章节，https://report.openbuild.xyz/2025/Developer

如果引用华语报告，可使用：

> 2025 Web3 华语开发者调研报告，OpenBuild 等社区联合发起，Web3insight.ai 提供数据分析支持，https://report.openbuild.xyz/zh/2025/

如果引用 Electric Capital、a16z、GitHub、Stack Overflow、JetBrains 等第三方报告，请直接链接到原始来源，并明确它们是外部参考，不是本站发布内容。

## 致谢

本项目基于许多公开数据、社区协作和历史报告整理而来，感谢：

- 参与 2025 Web3 华语开发者调研的 220 位开发者。
- OpenBuild、GCC、登链、Creators、OpenCAS 等华语报告联合发起方。
- Web3insight.ai 对华语报告提供的数据分析支持。
- Electric Capital、a16z、GitHub、Stack Overflow、JetBrains 等长期发布开发者与行业报告的团队。
- 所有提交 Issue、PR、内容修订、数据补充和传播建议的贡献者。

贡献者会展示在：[report.openbuild.xyz/contributors](https://report.openbuild.xyz/contributors)

## 如何参与贡献

欢迎所有形式的贡献。比较适合参与的方向包括：

- 修正报告内容、错别字、链接、图表说明和数据口径。
- 补充新的年份、区域报告、专题报告或外部历史参考。
- 改进页面样式、移动端阅读体验、报告筛选和导航结构。
- 补充更可靠的数据来源、方法说明和引用说明。
- 改进中英文表达，让报告更适合传播和被引用。

提交 Issue 或 Pull Request 时，建议尽量说明：

- 你想修改的页面或章节。
- 修改依据或数据来源。
- 如果是数据口径调整，请说明会影响哪些结论。

## 本地开发

安装依赖：

```bash
npm ci
```

启动开发服务：

```bash
npm run docs:dev
```

构建：

```bash
npm run docs:build
```

预览构建产物：

```bash
npm run docs:preview
```

## 目录结构

```text
.
├── docs/
│   ├── index.md                         # 首页
│   ├── reports.md                       # 报告库
│   ├── data-sources.md                  # 数据来源与外部参考
│   ├── contributors.md                  # 贡献者
│   ├── 2025/                            # 2025 全球报告
│   │   ├── index.md
│   │   ├── Developer.md
│   │   ├── Ecosystem.md
│   │   └── UseCases.md
│   ├── zh/2025/                         # 2025 华语报告
│   └── public/chinese-speaking-devs-report/
│       ├── index.html                   # 华语报告交互版归档
│       └── config/                      # 华语报告正文、图表数据和渲染脚本
├── .vitepress/
│   ├── config.ts                        # VitePress 配置
│   └── theme/                           # 主题样式与组件
├── package.json
└── vercel.json
```

## 更新报告

新增全球年度报告：

1. 在 `docs/<year>/` 下新增年度目录。
2. 在 `.vitepress/config.ts` 中补充导航和侧栏。
3. 在报告库组件或 `docs/reports.md` 中补充报告入口。
4. 在 `docs/data-sources.md` 中补充数据来源、口径和外部参考。

更新华语报告：

1. 更新 `docs/zh/2025/index.md` 中的站内报告正文。
2. 如需保留完整交互版，同步更新 `docs/public/chinese-speaking-devs-report/`。
3. 如果样本、口径或协作方变化，同步更新 `docs/data-sources.md` 和 README。

新增外部参考：

1. 只放来源可靠、可复核的链接。
2. 明确标注为外部参考，不把第三方报告混作本站发布内容。
3. 如果引用关键结论，尽量在正文中说明口径和上下文。

## 部署

本站使用 VitePress 构建，生产环境部署在 OpenBuild 的 Vercel 项目中。

`vercel.json`：

```json
{
  "framework": "vitepress",
  "installCommand": "npm ci",
  "buildCommand": "npm run docs:build",
  "outputDirectory": ".vitepress/dist",
  "cleanUrls": true
}
```

生产域名：[report.openbuild.xyz](https://report.openbuild.xyz)

## 外部参考

- [Electric Capital Developer Report](https://www.developerreport.com/)
- [Electric Capital 2024 Developer Report](https://www.developerreport.com/reports/devs/2024)
- [Electric Capital 2023 Developer Report](https://www.developerreport.com/reports/devs/2023)
- [Electric Capital 2022 Developer Report](https://www.developerreport.com/reports/devs/2022)
- [Electric Capital 早期 PDF 归档](https://github.com/electric-capital/developer-reports)
- [Open Dev Data](https://opendevdata.org/)
- [a16z State of Crypto](https://a16zcrypto.com/state-of-crypto-report/)

## License

本仓库代码采用 [Apache License 2.0](./LICENSE)。

报告内容和图表引用请保留来源说明与链接；第三方数据、报告和图表遵循其原始来源的授权与引用要求。
