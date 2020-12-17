import { combineReducers } from 'redux';

export interface AppState {
  cart: {
    data: {
      id: '',
      username: '',
      name: '',
      email: ''
    },
    loading: false
  },
  payment: {
    data: {
      id: '',
      username: '',
      name: '',
      email: ''
    },
    loading: false
  },
  success: {
    data: {
      id: '',
      username: '',
      name: '',
      email: ''
    },
    loading: false
  }
}

export default combineReducers({});
