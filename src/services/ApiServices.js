import axios from 'axios'

export default class ApiService {

  static async getProducts() {
    let api = await axios.get('https://www.mocky.io/v2/5b15c4923100004a006f3c07');
    return api.data;
  }
}
