import axios from './../utils/AxiosHelper.js'
import config from './../utils/config.js'

const baseUrl = config.baseUrl.url
class ProductsServices {
  static getProducts() {
    return axios
      .get(`${baseUrl}/5b15c4923100004a006f3c07`)
      .then((response) => {
        return response.data
      })
      .catch((error) => {
        // handle error
        console.log(error)
      })
  }
}

export default ProductsServices
