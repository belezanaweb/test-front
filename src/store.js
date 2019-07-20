import Vue from 'vue'
import Vuex from 'vuex'
import { api } from './config'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    cart: {
      id: '',
      items: [],
      subTotal: 0,
      shippingTotal: 0,
      discount: 0,
      total: 0
    }
  },
  mutations: {
    SET_CART(state, { cart }) {
      state.cart = cart
    }
  },
  actions: {
    async GET_CART({ commit }) {
      try {
        const { data } = await api.get('/5b15c4923100004a006f3c07')

        commit('SET_CART', { cart: data })
      } catch (e) {
        console.error(e)
      }
    }
  },
  getters: {
    checkoutResume({ cart }) {
      return {
        subTotal: cart.subTotal,
        shippingTotal: cart.shippingTotal,
        discount: cart.discount,
        total: cart.total,
      }
    }
  }
})
