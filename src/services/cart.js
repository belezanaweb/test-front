import api from '../services/api'

export const getCartItems = async () => {
  try {
    return await api.get(process.env.REACT_APP_BASEURL)
  } catch (error) {
    console.log(error)
  }
}
