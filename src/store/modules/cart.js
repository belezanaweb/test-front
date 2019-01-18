import { CHANGE_CART_PRODUCTS, CHANGE_CART_RESUME } from '../mutations-types';

const actions = {
  setCartData({ commit }, obj) {
    commit(CHANGE_CART_PRODUCTS, obj.items);
    delete obj.id;
    delete obj.items;
    commit(CHANGE_CART_RESUME, obj);
  },
};

const mutations = {
  [CHANGE_CART_PRODUCTS](state, value) {
    state.products = value;
  },
  [CHANGE_CART_RESUME](state, value) {
    state.resume = value;
  },
};

const getters = {
  products: state => state.products,
  resume: state => state.resume,
};

const state = {
  products: [],
  resume: {},
};

export default {
  namespaced: true,
  state,
  actions,
  mutations,
  getters,
};
