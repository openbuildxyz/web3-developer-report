import DefaultTheme from 'vitepress/theme'
import './custom.css'
import ReportExplorer from './components/ReportExplorer.vue'
import ContributorGrid from './components/ContributorGrid.vue'
import SourcePanel from './components/SourcePanel.vue'

export default {
  extends: DefaultTheme,
  enhanceApp({ app }) {
    app.component('ReportExplorer', ReportExplorer)
    app.component('ContributorGrid', ContributorGrid)
    app.component('SourcePanel', SourcePanel)
  }
}
