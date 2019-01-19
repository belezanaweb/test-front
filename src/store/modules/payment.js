import { getField, updateField } from 'vuex-map-fields';
import { CHANGE_PAY_DISABLE } from '../mutations-types';

const actions = {
  setDisable({ commit }, value) {
    commit(CHANGE_PAY_DISABLE, value);
  },
};

const mutations = {
  [CHANGE_PAY_DISABLE](state, value) {
    state.disable = value;
  },
  updateField,
};

const getters = {
  disable: state => state.disable,
  getField,
};

const state = {
  ccNumber: '',
  name: '',
  dtValid: '',
  cvv: '',
  disable: true,
};

export default {
  namespaced: true,
  state,
  actions,
  mutations,
  getters,
};
