import axios from 'axios'
import { GET_BAG_ITEMS } from './types'

export const getBagItems = () => (dispatch, getState) => {
  axios
    .get('http://www.mocky.io/v2/5b15c4923100004a006f3c07')
    .then(res => {
      dispatch({
        type: GET_BAG_ITEMS,
        payload: res.data.items,
        resume: {
          subtotal: res.data.subTotal,
          shippingTotal: res.data.shippingTotal,
          discount: res.data.discount,
          total: res.data.total
        }
      })
    })
    .catch(error => {
      console.log(error)
    })
}
