import { mockCartData } from "../api/get-cart.api.mock";
import { cartModelToViewModel, getCartService } from "../services/get-cart.service";
import { mockCartDataView } from "./get-cart.service.mock";

const errorMessage = 'Error getting cart data';
jest.mock('../api/get-cart.api', () => ({
  getCart: jest.fn(() => Promise.reject(new Error(errorMessage)))
}));

jest.mock('../services/get-cart.service', () => ({
  getCartService: jest.fn(() => Promise.resolve(mockCartDataView)),
  cartModelToViewModel: jest.fn(() => (mockCartDataView)),
}));

beforeEach(() => {
  jest.clearAllMocks();
})

describe('getCartService', () => {
  it('should return a cart view model with the correct structure', async () => {
    const cartViewModel = await getCartService();

    expect(getCartService).toHaveBeenCalledTimes(1);
    expect(mockCartDataView).toStrictEqual(cartViewModel);
  });

  it('should reject the promise when getCart fails', async () => {
    const errorMessage = 'Error getting cart';
    (getCartService as jest.Mock).mockImplementation(() => Promise.reject(new Error(errorMessage)));

    await expect(getCartService()).rejects.toThrow(errorMessage);
  });
});

describe('cartModelToViewModel', () => {
  it('should able to convert a cart model to a cart view model', () => {
    const cartViewModel = cartModelToViewModel(mockCartData);

    expect(cartModelToViewModel).toHaveBeenCalledTimes(1);
    expect(mockCartDataView).toStrictEqual(cartViewModel);
  });
});
