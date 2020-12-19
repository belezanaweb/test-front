import Axios from 'axios'

const SaleService = {
  async loadData() {
    try {
      return await Axios('http://www.mocky.io/v2/5b15c4923100004a006f3c07')
    } catch (error) {
      console.error(error)
      throw error
    }
  }
}

export default SaleService
