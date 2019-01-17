import Vue from 'vue';
import Router from 'vue-router';
import Cart from './views/Cart.vue';

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      name: 'cart',
      component: Cart,
    },
    {
      path: '/payment',
      name: 'payment',
      component: () => import('./views/Payment.vue'),
    },
  ],
});
