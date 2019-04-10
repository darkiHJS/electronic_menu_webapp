import Vue from 'vue'
import Router from 'vue-router'

import Home from '_page/home/index'
import Welcome from '_page/welcome/index'
import Menu from '_page/menu/index'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    }, {
      path: '/welcome',
      name: 'Welcome',
      component: Welcome
    }, {
      path: '/menu',
      name: 'Menu',
      component: Menu
    }
  ],
  scrollBehavior(to, from, savdPosition) {
    return {x:0, y:0}
  }
})