import { productsApis } from '../apis/products'
import { productsActions } from '../store/actions/products'
const productsThunks = {
  getAll: () => (dispatch) => {
    productsApis.getAll().then((products) => dispatch(productsActions.get(products)))
  }
}

export { productsThunks }
