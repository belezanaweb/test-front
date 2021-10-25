import axios from 'axios'

export const getCartProducts = async () => {
  try {
    let response = await axios.get('https://www.mocky.io/v2/5b15c4923100004a006f3c07')
    return response
  } catch (error) {
    console.log(error.message)
  }
}
