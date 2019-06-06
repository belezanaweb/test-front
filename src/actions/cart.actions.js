import { LOADING_CART, SET_CART } from './types'

export const fetchCart = () => {
  return dispatch => {
    dispatch({ type: LOADING_CART, payload: true })

    fetch('https://www.mocky.io/v2/5b15c4923100004a006f3c07', {
      headers: {
        'Content-Type': 'application/json'
      },
      method: 'GET'
    })
      .then(response => response.json())
      .then(res => {
        dispatch({ type: LOADING_CART, payload: false })
        dispatch({ type: SET_CART, payload: res })
      })
      .catch(e => {
        dispatch({ type: LOADING_CART, payload: false })
      })
  }
}
