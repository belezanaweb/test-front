import Vue from 'vue';
import Vuex from 'vuex';
import createLogger from 'vuex/dist/logger';

import Cart from './modules/cart';
import Payment from './modules/payment';

Vue.use(Vuex);

const debug = process.env.NODE_ENV !== 'production';

export default new Vuex.Store({
  modules: {
    Cart,
    Payment,
  },
  strict: debug,
  plugins: debug ? [createLogger()] : [],
});
