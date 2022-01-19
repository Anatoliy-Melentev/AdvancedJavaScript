import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import SvgIcon from './components/Globals/Svg.vue'
import Radio from './components/Globals/Radio.vue'
import Button from './components/Globals/Button.vue'
import ButtonLink from './components/Globals/ButtonLink.vue'
import InputText from './components/Globals/InputText.vue'

createApp(App)
  .use(store).use(router)
  .component('svg-icon', SvgIcon)
  .component('radio', Radio)
  .component('btn', Button)
  .component('btn-link', ButtonLink)
  .component('input-text', InputText)
  .mount('#app')
