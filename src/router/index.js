import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'cart',
      component: () => import(/* webpackChunkName: "cart" */ './../views/Cart.vue')
    },
    {
      path: '/payment',
      name: 'payment',
      component: () => import(/* webpackChunkName: "payment" */ './../views/Payment.vue')
    },
    {
      path: '/confirmation',
      name: 'confirmation',
      meta: {
        paymentIsValid: true
      },
      component: () => import(/* webpackChunkName: "confirmation" */ './../views/Confirmation.vue')
    }
  ]
})
