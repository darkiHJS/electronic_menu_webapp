import Vue from 'vue'
import App from './App.vue'
import fastClick from 'fastclick'
import iView from 'iview'

import 'babel-polyfill'

import 'iview/dist/styles/iview.css'
import '_styl/reset.css' // style reset
import '_styl/border.css'

Vue.config.productionTip = false
fastClick.attach(document.body) // kill click 300ms
Vue.use(iView)

new Vue({
  render: h => h(App),
}).$mount('#app')
