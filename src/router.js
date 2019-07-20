import Vue from 'vue'
import Router from 'vue-router'
import Bag from './views/Bag.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'bag',
      component: () => import(/* webpackChunkName: "bag" */ './views/Bag.vue')
    }
  ]
})
