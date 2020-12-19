//Promise based HTTP client for the browser and node.js
import Axios from 'axios'
import saleStore from '../stores/Sale'

const SaleService = {
  //Load sale data with the sales endpoint
  async loadData() {
    try {
      const saleData = await Axios('http://www.mocky.io/v2/5b15c4923100004a006f3c07')
      saleStore.dispatch({ type: 'sale/fill', sale: saleData.data })
      return saleData
    } catch (error) {
      console.error(error);
      throw error;
    }
  }
}

export default SaleService
