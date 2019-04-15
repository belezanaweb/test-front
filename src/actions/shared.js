import * as API from '../utils/api'
import { showLoading, hideLoading } from 'react-redux-loading-bar'

export const RECEIVE_DATA = 'RECEIVE_DATA'

function receiveData (shoppingCart) {
    return {
      type: RECEIVE_DATA,
      shoppingCart      
    }
}

export function handleInitialData () {
    return dispatch => {
      dispatch(showLoading())
      return API.fetchShoppingCart()        
        .then((shoppingCart) => {
          dispatch(receiveData(shoppingCart))
          dispatch(hideLoading())
        })
    }
}