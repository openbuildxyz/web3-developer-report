<script setup lang="ts">
const sources = [
  {
    title: '开源开发活动',
    detail: 'GitHub 公开仓库、提交与开发活动统计，用于观察开发者规模、任期、活跃度和跨生态协作。'
  },
  {
    title: '生态分类与标签',
    detail: '链、技术栈、使用案例和项目分类，用于生成生态、DeFi、ZK 与跨链分析视角。'
  },
  {
    title: '华语开发者调研',
    detail: '2025 华语报告已并入本站，基于 220 份有效问卷；源仓库保留为开源历史与协作入口。'
  },
  {
    title: '外部历史与开放数据',
    detail: 'Electric Capital Developer Report、Open Dev Data、a16z State of Crypto 等仅作为外部参考，不代表本站发布。'
  }
]
</script>

<template>
  <section class="source-panel" aria-labelledby="source-panel-title">
    <div class="source-intro">
      <p class="eyebrow">Sources</p>
      <h2 id="source-panel-title">参考数据与来源</h2>
      <p>报告页面保留图表、关键指标和引用入口；详细口径集中维护，便于审校、复现与公开传播。</p>
      <a href="/data-sources">查看完整数据来源</a>
    </div>
    <div class="source-list">
      <article v-for="source in sources" :key="source.title">
        <h3>{{ source.title }}</h3>
        <p>{{ source.detail }}</p>
      </article>
    </div>
  </section>
</template>

<style scoped>
.source-panel {
  display: grid;
  grid-template-columns: minmax(0, 0.9fr) minmax(0, 1.1fr);
  gap: 28px;
  width: min(1120px, calc(100% - 32px));
  margin: 0 auto;
  padding: 64px 0 84px;
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
  margin: 0 0 12px;
  color: #18212f;
  font-size: clamp(28px, 4vw, 44px);
  line-height: 1.12;
}

.source-intro p {
  margin: 0 0 20px;
  color: #536173;
  line-height: 1.8;
}

.source-intro a {
  color: #0b6f9f;
  font-weight: 800;
  text-decoration: none;
}

.source-list {
  display: grid;
  gap: 12px;
}

article {
  padding: 20px;
  border: 1px solid rgba(28, 39, 55, 0.12);
  border-radius: 8px;
  background: #ffffff;
  box-shadow: 0 14px 34px rgba(28, 39, 55, 0.06);
}

h3 {
  margin: 0 0 8px;
  color: #18212f;
  font-size: 18px;
}

article p {
  margin: 0;
  color: #536173;
  line-height: 1.75;
}

@media (max-width: 800px) {
  .source-panel {
    grid-template-columns: 1fr;
    padding: 44px 0 64px;
  }
}
</style>
