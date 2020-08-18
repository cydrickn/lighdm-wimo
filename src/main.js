import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import './assets/styles/index.css'
import './lightdm'

import { faArrowRight, faPowerOff } from '@fortawesome/free-solid-svg-icons'
library.add(faArrowRight, faPowerOff)

Vue.component('fa', FontAwesomeIcon)
Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
