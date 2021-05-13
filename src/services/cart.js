import api from '../services/api'

export const getCartItems = async () => await api.get(process.env.REACT_APP_BASEURL)
