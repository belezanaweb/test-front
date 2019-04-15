import { combineReducers } from 'redux';
import { loadingBarReducer } from 'react-redux-loading-bar'
import shoppingCart from './shoppingCart'
import payment from './payment'

export default combineReducers ({
    shoppingCart,
    payment,
    loadingBar: loadingBarReducer,
})


