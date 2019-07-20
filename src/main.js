import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

import VueCurrencyFilter from 'vue-currency-filter'

import './registerServiceWorker'

// Directives
import './directives'

Vue.use(VueCurrencyFilter,
{
  symbol : 'R$',
  thousandsSeparator: '.',
  fractionCount: 2,
  fractionSeparator: ',',
  symbolPosition: 'front',
  symbolSpacing: true
})

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
