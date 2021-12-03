import api from './api'
import { setProducts, setInfo, setError, setLoading } from 'redux/slices/checkout'

export function getCartDetails() {
  return async (dispatch) => {
    dispatch(setLoading(true))
    return api
      .get('5b15c4923100004a006f3c07')
      .then(({ data }) => {
        const { items, ...info } = data
        dispatch(setProducts(items))
        dispatch(setInfo(info))
        dispatch(setLoading(false))
      })
      .catch((error) => {
        dispatch(setError(error))
        dispatch(setLoading(false))
      })
  }
}
