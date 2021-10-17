import api from './api'

export const getCart = async () => {
  const response = await api.get('5b15c4923100004a006f3c07')

  return response.data
}
