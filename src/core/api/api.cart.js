import baseAPI from './api.base'

export const getCartData = async () => {
  return baseAPI.get('/5b15c4923100004a006f3c07')
}

const apiCart = {
  getCartData: getCartData()
}

export default apiCart
