import Vue from 'vue'
import Vuex from 'vuex'
import cart from './modules/cart'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    title: '丰收湾蛋糕'
  },
  modules: {
    cart
  }
})
