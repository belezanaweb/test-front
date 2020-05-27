import Cart from '../../types/Cart';
import { Dispatch } from '..';

interface CartState {
  data: Cart | null;
  isLoading: boolean;
}

const initialState: CartState = {
  data: null,
  isLoading: false,
};

const cart = {
  state: initialState,
  reducers: {
    setData(state: CartState, data: Cart) {
      return { ...state, data };
    },
    setIsLoading(state: CartState, isLoading: boolean) {
      return { ...state, isLoading };
    },
  },
  effects: (dispatch: Dispatch) => ({
    async getCart() {
      dispatch.cart.setIsLoading(true);

      const response = await fetch('http://www.mocky.io/v2/5b15c4923100004a006f3c07');
      const data = await response.json();

      dispatch.cart.setData(data);
      dispatch.cart.setIsLoading(false);
    }
  }),
};

export default cart;
