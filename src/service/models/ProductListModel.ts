import { Model, Action, BaseHttpModel } from 'exredux';
import { ProductListRepository } from '../repository/ProductListRepository';
import { IProductList } from '../interfaces/IProduct';

@Model
export class ProductListModel extends BaseHttpModel<IProductList> {
  @Action
  public getProducts() {
    this.request(ProductListRepository.getProducts());
  }
}
