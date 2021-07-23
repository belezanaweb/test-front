import { api } from '../config/api'

export const getCheckout = async () => {
  const response = await api.get('5b15c4923100004a006f3c07')

  return response.data
}
