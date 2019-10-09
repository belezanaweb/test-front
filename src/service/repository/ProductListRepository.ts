import { http } from 'exredux';
import { IProductList } from '../interfaces/IProduct';

const API_URL = process.env.API_URL;

export class ProductListRepository {
  static ENDPOINT_GET_ALL_PRODUCTS = `${API_URL}/v2/5b15c4923100004a006f3c07`;

  static getProducts() {
    return http.get<IProductList>(this.ENDPOINT_GET_ALL_PRODUCTS);
  }
}
