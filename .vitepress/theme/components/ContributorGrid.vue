<script setup lang="ts">
const contributors = [
  {
    login: 'JintolChan',
    href: 'https://github.com/JintolChan',
    avatar: 'https://avatars.githubusercontent.com/u/175308202?v=4'
  },
  {
    login: 'Tools-touch',
    href: 'https://github.com/Tools-touch',
    avatar: 'https://avatars.githubusercontent.com/u/77733676?v=4'
  },
  {
    login: 'jueduizone',
    href: 'https://github.com/jueduizone',
    avatar: 'https://avatars.githubusercontent.com/u/16284115?v=4'
  },
  {
    login: 'Kiruno-lz',
    href: 'https://github.com/Kiruno-lz',
    avatar: 'https://avatars.githubusercontent.com/u/76504704?v=4'
  },
  {
    login: 'ADream-ki',
    href: 'https://github.com/ADream-ki',
    avatar: 'https://github.com/ADream-ki.png'
  }
]
</script>

<template>
  <section class="contributors" aria-labelledby="contributors-title">
    <div class="section-copy">
      <p class="eyebrow">Contributors</p>
      <h2 id="contributors-title">参与过的贡献者</h2>
      <p>这里展示参与过全球报告与华语报告工程的 GitHub 账号。头像来自 GitHub 公开资料，点击即可查看主页。</p>
    </div>

    <div class="contributor-grid">
      <a v-for="person in contributors" :key="person.login" class="contributor-card" :href="person.href">
        <img class="avatar" :src="person.avatar" :alt="`${person.login} GitHub avatar`" loading="lazy">
        <span class="identity">
          <strong>@{{ person.login }}</strong>
        </span>
      </a>
    </div>
  </section>
</template>

<style scoped>
.contributors {
  width: min(1120px, calc(100% - 32px));
  margin: 0 auto;
  padding: 64px 0;
}

.section-copy {
  max-width: 720px;
  margin-bottom: 24px;
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

p {
  margin: 0;
  color: #536173;
  line-height: 1.8;
}

.contributor-grid {
  display: grid;
  grid-template-columns: repeat(4, minmax(0, 1fr));
  gap: 14px;
}

.contributor-card {
  display: flex;
  align-items: center;
  gap: 14px;
  min-height: 92px;
  padding: 18px;
  border: 1px solid rgba(28, 39, 55, 0.12);
  border-radius: 8px;
  color: inherit;
  background: #ffffff;
  text-decoration: none;
  box-shadow: 0 14px 34px rgba(28, 39, 55, 0.06);
}

.contributor-card:hover {
  border-color: rgba(11, 111, 159, 0.32);
}

.avatar {
  width: 48px;
  height: 48px;
  border: 1px solid rgba(28, 39, 55, 0.12);
  border-radius: 50%;
  object-fit: cover;
}

.identity {
  min-width: 0;
}

strong {
  display: block;
  overflow: hidden;
  color: #18212f;
  font-size: 17px;
  line-height: 1.25;
  text-overflow: ellipsis;
  white-space: nowrap;
}

@media (max-width: 960px) {
  .contributor-grid {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }
}

@media (max-width: 620px) {
  .contributors {
    padding: 44px 0;
  }

  .contributor-grid {
    grid-template-columns: 1fr;
  }
}
</style>
