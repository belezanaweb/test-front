import { Component } from 'react'
import axios from 'axios'
class Helpers extends Component {
  api() {
    return axios.create({
      baseURL: 'https://www.mocky.io/v2/'
    })
  }

  formatPrice(price) {
    price = parseFloat(price).toFixed(2)
    price = 'R$ ' + price
    return price.replace('.', ',')
  }
}

export default Helpers
