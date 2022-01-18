import axios from 'axios'

export const getCartProducts = () => {
  return axios.get('https://www.mocky.io/v2/5b15c4923100004a006f3c07').then((resp) => resp.data)
}
