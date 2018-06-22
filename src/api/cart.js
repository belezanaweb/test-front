import { CART_ENDPOINT } from './endpoint'

export const getItems = cb => {
  let payload = {
    method: 'GET',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    }
  }

  return fetch(CART_ENDPOINT, payload)
    .then(response => response.json())
    .then(json => cb(json))
}
