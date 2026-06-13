import DefaultTheme from 'vitepress/theme'
import './style.css'
import type { Theme } from 'vitepress'
import PixelIcon from '../../components/PixelIcon.vue'
import MinecraftText from '../../components/MinecraftText.vue'
import CraftingGrid from '../../components/CraftingGrid.vue'
import AudioToggle from '../../components/AudioToggle.vue'
import VaneTrifles from '../../components/VaneTrifles.vue'

const theme: Theme = {
  extends: DefaultTheme,
  enhanceApp({ app }) {
    // Register global components to be used in markdown
    app.component('PixelIcon', PixelIcon)
    app.component('MinecraftText', MinecraftText)
    app.component('CraftingGrid', CraftingGrid)
    app.component('AudioToggle', AudioToggle)
    app.component('VaneTrifles', VaneTrifles)
  }
}

export default theme
