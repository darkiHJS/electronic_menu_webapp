import Vue from 'vue'
import Router from 'vue-router'

import Home from '_page/home/index'
import Menu from '_page/menu/index'
import Cart from '_page/cart/index'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    }, {
      path: '/menu',
      name: 'Menu',
      component: Menu
    }, {
      path: '/cart',
      name: 'Cart',
      component: Cart
    }
  ],
  scrollBehavior() {
    return {x:0, y:0}
  }
})