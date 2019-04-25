import Vue from 'vue'
import router from './router'
import App from './App.vue'
import store from '@/store'
import fastClick from 'fastclick'
import VueAwesomeSwiper from 'vue-awesome-swiper'

import 'babel-polyfill'
import './cube-ui'
import './register'

import 'swiper/dist/css/swiper.css'
import '_styl/iconfont/iconfont.css' // 引入图标库
import '_styl/reset.css' // style reset
import '_styl/border.css'

Vue.config.productionTip = false
fastClick.attach(document.body) // kill click 300ms
Vue.use(VueAwesomeSwiper)

new Vue({
  render: h => h(App),
  store,
  router
}).$mount('#app')
