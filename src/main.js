import Vue from 'vue';
import BootstrapVue from 'bootstrap-vue';
import VueCurrencyFilter from 'vue-currency-filter';
import App from './App.vue';
import router from './router';
import store from './store';

import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap-vue/dist/bootstrap-vue.css';

Vue.config.productionTip = false;

Vue.use(BootstrapVue);
Vue.use(VueCurrencyFilter, {
  symbol: 'R$',
  thousandsSeparator: '.',
  fractionCount: 2,
  fractionSeparator: ',',
  symbolPosition: 'front',
  symbolSpacing: true,
});

new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app');
