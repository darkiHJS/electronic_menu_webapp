import Vue from 'vue'
import Router from 'vue-router'

import Home from '_page/home/index'
import Welcome from '_page/welcome/index'
import ElectMenu from '_page/electmenu/index'

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
      path: '/electmenu',
      name: 'ElectMenu',
      component: ElectMenu
    }
  ],
  scrollBehavior() {
    return {x:0, y:0}
  }
})