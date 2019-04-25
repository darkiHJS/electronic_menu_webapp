import Vue from 'vue'
import Router from 'vue-router'

import Home from '_page/home/index'
import Menu from '_page/menu/index'
import Cart from '_page/cart/index'
import Order from '_page/order/index'

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
    }, {
      path: '/order',
      name: 'Order',
      component: Order
    }
  ],
  scrollBehavior() {
    return {x:0, y:0}
  }
})