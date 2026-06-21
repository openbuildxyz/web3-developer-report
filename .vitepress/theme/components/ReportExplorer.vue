<script setup lang="ts">
import { computed, ref } from 'vue'

type ReportScope = 'global' | 'chinese' | 'reference'

interface ReportItem {
  year: string
  scope: ReportScope
  scopeLabel: string
  title: string
  description: string
  link: string
  status: 'published' | 'planned' | 'external'
  metrics: string[]
}

const reports: ReportItem[] = [
  {
    year: '2025',
    scope: 'global',
    scopeLabel: '全球报告',
    title: '2025 Web3 开发者报告',
    description: '覆盖开发者规模、跨链技术栈、地域分布、生态增长与 DeFi/ZK 使用案例。',
    link: '/2025/',
    status: 'published',
    metrics: ['121,531 开发活动统计去重开发者', '45.0% 全年多链占比', '36 个生态样本']
  },
  {
    year: '2025',
    scope: 'chinese',
    scopeLabel: '华语报告',
    title: '2025 Web3 华语开发者调研报告',
    description: '基于 220 份有效问卷，观察华语开发者的职业路径、技术栈、收入结构、开源参与和社区需求。',
    link: '/zh/2025/',
    status: 'published',
    metrics: ['220 份有效样本', 'OpenBuild / GCC / 登链等联合发起', 'Web3insight 提供数据分析']
  },
  {
    year: '2025',
    scope: 'reference',
    scopeLabel: '历史参考',
    title: 'Electric Capital Open Dev Data',
    description: 'Electric Capital 从 2025 年起将年度开发者报告迁移为持续更新的数据平台。',
    link: 'https://www.developerreport.com/',
    status: 'external',
    metrics: ['外部数据平台', '持续更新', '非本站发布']
  },
  {
    year: '2024',
    scope: 'reference',
    scopeLabel: '历史参考',
    title: 'Electric Capital 2024 Developer Report',
    description: 'Electric Capital 最后一版独立年度开发者报告，可作为历史口径参考。',
    link: 'https://www.developerreport.com/reports/devs/2024',
    status: 'external',
    metrics: ['外部报告', '开源开发者趋势', '方法论参考']
  },
  {
    year: '2025',
    scope: 'reference',
    scopeLabel: '历史参考',
    title: 'a16z State of Crypto',
    description: '外部行业报告，可用于宏观采用、基础设施与开发者活动的交叉参考；并非本站发布内容。',
    link: 'https://a16zcrypto.com/state-of-crypto-report/',
    status: 'external',
    metrics: ['外部报告', '行业状态', '宏观指标参考']
  }
]

const selectedYear = ref('all')
const selectedScope = ref<ReportScope | 'all'>('all')

const years = computed(() => Array.from(new Set(reports.map((report) => report.year))).sort().reverse())

const filteredReports = computed(() => reports.filter((report) => {
  const yearMatched = selectedYear.value === 'all' || report.year === selectedYear.value
  const scopeMatched = selectedScope.value === 'all' || report.scope === selectedScope.value
  return yearMatched && scopeMatched
}))

const statusText = {
  published: '已发布',
  planned: '规划中',
  external: '外部参考'
}
</script>

<template>
  <section class="report-explorer" aria-labelledby="report-explorer-title">
    <div class="explorer-head">
      <div>
        <p class="eyebrow">Report Library</p>
        <h2 id="report-explorer-title">按年份与范围浏览报告</h2>
      </div>
      <div class="filters" aria-label="报告筛选">
        <label>
          <span>年份</span>
          <select v-model="selectedYear">
            <option value="all">全部年份</option>
            <option v-for="year in years" :key="year" :value="year">{{ year }}</option>
          </select>
        </label>
        <label>
          <span>范围</span>
          <select v-model="selectedScope">
            <option value="all">全部范围</option>
            <option value="global">全球报告</option>
            <option value="chinese">华语报告</option>
            <option value="reference">历史参考</option>
          </select>
        </label>
      </div>
    </div>

    <div class="report-grid">
      <article v-for="report in filteredReports" :key="`${report.year}-${report.title}`" class="report-card">
        <div class="card-topline">
          <span>{{ report.year }}</span>
          <span>{{ report.scopeLabel }}</span>
          <span :class="['status', report.status]">{{ statusText[report.status] }}</span>
        </div>
        <h3>{{ report.title }}</h3>
        <p>{{ report.description }}</p>
        <ul>
          <li v-for="metric in report.metrics" :key="metric">{{ metric }}</li>
        </ul>
        <a :href="report.link" :aria-label="`${report.title}：${statusText[report.status]}`">
          {{ report.status === 'planned' ? '查看规划入口' : '打开报告' }}
        </a>
      </article>
    </div>
  </section>
</template>

<style scoped>
.report-explorer {
  width: min(1120px, calc(100% - 32px));
  margin: 0 auto;
  padding: 64px 0;
}

.explorer-head {
  display: flex;
  gap: 24px;
  align-items: end;
  justify-content: space-between;
  margin-bottom: 22px;
}

.eyebrow {
  margin: 0 0 8px;
  color: #9a5c00;
  font-size: 13px;
  font-weight: 800;
  letter-spacing: 0.08em;
  text-transform: uppercase;
}

h2 {
  margin: 0;
  color: #18212f;
  font-size: clamp(28px, 4vw, 44px);
  line-height: 1.12;
}

.filters {
  display: flex;
  gap: 12px;
  flex-wrap: wrap;
}

label {
  display: grid;
  gap: 6px;
  color: #536173;
  font-size: 13px;
  font-weight: 700;
}

select {
  min-width: 132px;
  height: 40px;
  padding: 0 34px 0 12px;
  border: 1px solid rgba(28, 39, 55, 0.16);
  border-radius: 8px;
  color: #18212f;
  background: #ffffff;
  font: inherit;
}

.report-grid {
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: 16px;
}

.report-card {
  display: flex;
  flex-direction: column;
  min-height: 300px;
  padding: 24px;
  border: 1px solid rgba(28, 39, 55, 0.12);
  border-radius: 8px;
  background: #ffffff;
  box-shadow: 0 16px 40px rgba(28, 39, 55, 0.07);
}

.card-topline {
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
  align-items: center;
  margin-bottom: 18px;
}

.card-topline span {
  display: inline-flex;
  align-items: center;
  min-height: 28px;
  padding: 0 10px;
  border-radius: 999px;
  color: #536173;
  background: #f4f6f8;
  font-size: 12px;
  font-weight: 800;
}

.card-topline .status.published {
  color: #075e52;
  background: #dff5ef;
}

.card-topline .status.planned {
  color: #7b4a00;
  background: #fff0ce;
}

.card-topline .status.external {
  color: #773547;
  background: #ffe6ec;
}

h3 {
  margin: 0 0 10px;
  color: #18212f;
  font-size: 24px;
  line-height: 1.22;
}

p {
  margin: 0;
  color: #536173;
  line-height: 1.75;
}

ul {
  display: grid;
  gap: 8px;
  margin: 18px 0 24px;
  padding: 0;
  list-style: none;
}

li {
  position: relative;
  padding-left: 18px;
  color: #2e3a49;
  font-size: 14px;
}

li::before {
  content: "";
  position: absolute;
  left: 0;
  top: 0.68em;
  width: 7px;
  height: 7px;
  border-radius: 50%;
  background: #d28b00;
}

a {
  align-self: flex-start;
  margin-top: auto;
  color: #0b6f9f;
  font-weight: 800;
  text-decoration: none;
}

a:hover {
  color: #0a5a80;
}

@media (max-width: 800px) {
  .report-explorer {
    padding: 44px 0;
  }

  .explorer-head {
    align-items: stretch;
    flex-direction: column;
  }

  .report-grid {
    grid-template-columns: 1fr;
  }

  .report-card {
    min-height: auto;
  }
}
</style>
