import axios from 'axios'

const request = {
  getProdutos() {
    return axios.get(`http://www.mocky.io/v2/5b15c4923100004a006f3c07`)
  }
}

export default request
