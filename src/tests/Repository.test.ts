import './mocks/http';
import { ProductListRepository } from '../service/repository/ProductListRepository';
import mockProductList from './mocks/productList';

describe('ProductListRepository', () => {
  // -------------------------------------------------------
  it('test getProducts call', done => {
    const request = ProductListRepository.getProducts();

    request.then(response => {
      expect(response.data).toEqual(mockProductList);
      done();
    });
  });
  // -------------------------------------------------------
});
