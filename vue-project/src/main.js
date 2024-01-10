import './assets/main.css'

import VBuyColor from '@/directives/VBuyColor.js'
import { createApp } from 'vue'
import App from './App.vue'
import router from '@/router/router.js'
import UI from '@/components/UI'
import store from '@/store/index.js'

const app = createApp(App)
app.use(store).use(router).mount('#app')

app.directive('change-color', VBuyColor)

UI.forEach(component => {
	app.component(component.name, component)
})
